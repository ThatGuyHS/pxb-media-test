import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { hasProcessedEntry, addProcessedEntry } from '../../lib/db';

// Webhook secret for authentication - JSES esportförening specific
const WEBHOOK_SECRET = process.env.ESPLAY_WEBHOOK_SECRET_JSES || 'armless-dandelion-undercoat';

// Rate limiting and concurrency control
const REQUEST_QUEUE = new Map<string, Promise<any>>();
const MAX_CONCURRENT_REQUESTS = 3;
let activeRequests = 0;

// Optional: RSA private key for decryption (if encryption is enabled)
// In a production environment, this should be stored securely
// This is just a placeholder - generate a proper key pair and only share the public key with Esplay
const PRIVATE_KEY = process.env.ESPLAY_PRIVATE_KEY_JSES || '';

// EBAS API configuration - Updated for JSES esportförening (Johnny Speeds)
const EBAS_API_URL = 'https://ebas.esportunited.com/apis/submit_member_with_lookup.json';
const EBAS_API_KEY = 'MnHKRiG6y2HZQg4DkHk7bUABDMDuCqyq';

// CORS origin to allow
const ALLOWED_ORIGIN = 'https://pxb-julkalender.vercel.app';

// Helper to add CORS headers
function withCors(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  return response;
}

// Helper to wait for available slot in request queue
async function waitForAvailableSlot(): Promise<void> {
  while (activeRequests >= MAX_CONCURRENT_REQUESTS) {
    console.log(`🚦 [JSES] Rate limit: ${activeRequests}/${MAX_CONCURRENT_REQUESTS} active requests, waiting...`);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Helper to generate request key for deduplication
function generateRequestKey(payload: any): string {
  return `${payload.ssn}-${payload.event}-${payload.joined_association}`;
}

// Function to transform Esplay data to EBAS format
function transformToEbas(esplayData: any) {
  // Extract SSN without country code (assuming format like SE198912190470)
  const ssn = esplayData.ssn.substring(2); // Remove country code (e.g., "SE")

  // Format the renewal date in yyyy-mm-dd format as required by EBAS
  const renewalDate = new Date();
  const formattedRenewalDate = renewalDate.toISOString().split('T')[0]; // Format as yyyy-mm-dd

  return {
    api_key: EBAS_API_KEY,
    member: {
      firstname: esplayData.first_name,
      lastname: esplayData.last_name,
      renewed: formattedRenewalDate, // Now using properly formatted date
      gender_id: "1", // Default value as it's required
      co: [],
      socialsecuritynumber: ssn,
      email: esplayData.email,
      phone1: esplayData.phone,
      street: "", // Not provided by Esplay
      zip_code: "", // Not provided by Esplay
      city: "", // Not provided by Esplay
      member_nick: esplayData.username || null,
      discord_user_id: null,
      foreign_player: null
    }
  };
}

// Function to submit data to EBAS API
async function submitToEbas(ebasData: any): Promise<{ success: boolean, response: any }> {
  try {
    console.log('🔄 [JSES] Submitting to EBAS API...');
    console.log('📤 [JSES] EBAS Payload:', JSON.stringify(ebasData, null, 2));

    const response = await fetch(EBAS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ebasData),
    });

    const responseData = await response.json();
    console.log('📥 [JSES] EBAS Response:', JSON.stringify(responseData, null, 2));

    return {
      success: response.ok,
      response: responseData
    };
  } catch (error) {
    console.error('❌ [JSES] EBAS API Error:', error);
    return {
      success: false,
      response: { error: 'Failed to submit to EBAS API' }
    };
  }
}

// Handle preflight OPTIONS requests
export async function OPTIONS() {
  return withCors(new NextResponse(null, { status: 204 }));
}

export async function POST(request: NextRequest) {
  console.log('📥 [JSES] Esplay webhook received:', new Date().toISOString());

  try {
    return await processWebhookRequest(request);
  } catch (error) {
    console.error('❌ [JSES] Webhook processing failed:', error);
    return withCors(NextResponse.json({ error: 'Internal server error' }, { status: 500 }));
  }
}

async function processWebhookRequest(request: NextRequest): Promise<NextResponse> {
  // Authentication check with webhook secret
  if (WEBHOOK_SECRET) {
    console.log('🔐 [JSES] Checking webhook secret authentication');
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== WEBHOOK_SECRET) {
      console.error('❌ [JSES] Authentication failed: Invalid webhook secret');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.log('✅ [JSES] Authentication successful');
  } else {
    console.log('⚠️ [JSES] No webhook secret configured, skipping authentication');
  }

  let payload;

  // Check content type to determine if payload is encrypted
  const contentType = request.headers.get('Content-Type');
  console.log(`📄 [JSES] Content-Type: ${contentType}`);

  if (contentType === 'text/plain' && PRIVATE_KEY) {
    console.log('🔒 [JSES] Encrypted payload detected, attempting to decrypt');
    // Handle encrypted payload
    const encryptedData = await request.text();
    const buffer = Buffer.from(encryptedData, 'base64');

    try {
      // Decrypt using RSA with OAEP padding and SHA256
      const decrypted = crypto.privateDecrypt(
        {
          key: PRIVATE_KEY,
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          oaepHash: 'sha256'
        },
        // Convert Buffer to Uint8Array to fix type compatibility issue
        new Uint8Array(buffer)
      );

      payload = JSON.parse(decrypted.toString('utf8'));
      console.log('🔓 [JSES] Successfully decrypted payload');
    } catch (error) {
      console.error('❌ [JSES] Decryption error:', error);
      return NextResponse.json({ error: 'Failed to decrypt payload' }, { status: 400 });
    }
  } else {
    console.log('📝 [JSES] Unencrypted JSON payload detected');
    // Handle regular JSON payload
    payload = await request.json();
  }

  console.log('📋 [JSES] Received payload:', JSON.stringify(payload, null, 2));

  // Validate the payload
  if (!payload || !payload.event || !payload.ssn) {
    console.error('❌ [JSES] Invalid payload: Missing required fields');
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  console.log(`✨ [JSES] Processing event: ${payload.event}`);

  // Generate request key for deduplication
  const requestKey = generateRequestKey(payload);

  // Check if this exact request is already being processed
  if (REQUEST_QUEUE.has(requestKey)) {
    console.log(`🔄 [JSES] Request already in progress for key: ${requestKey}, waiting for result...`);
    try {
      const result = await REQUEST_QUEUE.get(requestKey);
      console.log(`✅ [JSES] Using cached result for duplicate request`);
      return result;
    } catch (error) {
      console.log(`❌ [JSES] Cached request failed, processing new request`);
      REQUEST_QUEUE.delete(requestKey);
    }
  }

  // Check if we've already processed this entry using SQLite database
  if (hasProcessedEntry(payload.ssn)) {
    console.log(`⚠️ [JSES] Duplicate entry received for SSN: ${payload.ssn}`);
    // Still return 200 for duplicates as per requirements
    return withCors(NextResponse.json({ status: 'success', message: 'Duplicate entry processed' }));
  }

  // Wait for available slot in request queue
  await waitForAvailableSlot();

  // Increment active request counter
  activeRequests++;
  console.log(`📊 [JSES] Active requests: ${activeRequests}/${MAX_CONCURRENT_REQUESTS}`);

  // Create and store promise for this request
  const processingPromise = processUserData(payload);
  REQUEST_QUEUE.set(requestKey, processingPromise);

  try {
    const result = await processingPromise;
    console.log('✅ [JSES] Webhook processed successfully');
    return result;
  } finally {
    // Always clean up
    activeRequests--;
    REQUEST_QUEUE.delete(requestKey);
    console.log(`📊 [JSES] Request completed. Active requests: ${activeRequests}/${MAX_CONCURRENT_REQUESTS}`);
  }
}

async function processUserData(payload: any): Promise<NextResponse> {
  // Process the webhook data
  console.log(`✅ [JSES] New user joined: ${payload.username} (${payload.first_name} ${payload.last_name})`);
  console.log(`📧 [JSES] Email: ${payload.email}, Phone: ${payload.phone}`);
  console.log(`🎮 [JSES] Steam ID: ${payload.steamid || 'Not provided'}`);
  console.log(`🕒 [JSES] Joined at: ${new Date(payload.joined_association * 1000).toISOString()}`);

  // Always store the SSN first to prevent duplicate processing
  addProcessedEntry(payload.ssn, payload);
  console.log(`📝 [JSES] Added SSN to processed entries database`);

  // Transform data for EBAS API
  const ebasData = transformToEbas(payload);

  // Submit to EBAS API
  const ebasResult = await submitToEbas(ebasData);

  // Check EBAS result and return appropriate response
  if (!ebasResult.success) {
    console.log(`❌ [JSES] EBAS API failed, returning error response`);
    return withCors(NextResponse.json({
      status: 'error',
      message: 'EBAS API submission failed',
      user_processed: true,
      ebas_result: ebasResult
    }, { status: 502 })); // Bad gateway
  }

  // Return success response only if EBAS succeeded
  return withCors(NextResponse.json({
    status: 'success',
    message: 'Event processed successfully',
    user_processed: true,
    ebas_result: ebasResult
  }));
}

// Only allow POST requests
export async function GET() {
  console.log('⚠️ [JSES] GET request received, method not allowed');
  return withCors(NextResponse.json({ error: 'Method not allowed' }, { status: 405 }));
}

