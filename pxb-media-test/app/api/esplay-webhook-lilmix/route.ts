import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { hasProcessedEntry, addProcessedEntry } from '../../lib/db';

// Re-enabled webhook secret for authentication - Lilmix specific
const WEBHOOK_SECRET = process.env.ESPLAY_WEBHOOK_SECRET_LILMIX || 'armless-dandelion-undercoat';

// Rate limiting and concurrency control
const REQUEST_QUEUE = new Map<string, Promise<any>>();
const MAX_CONCURRENT_REQUESTS = 3; // Reduced for faster processing
const REQUEST_TIMEOUT = 8000; // 8 seconds to stay under Vercel's 10s limit
let activeRequests = 0;

// Optional: RSA private key for decryption (if encryption is enabled)
// In a production environment, this should be stored securely
// This is just a placeholder - generate a proper key pair and only share the public key with Esplay
const PRIVATE_KEY = process.env.ESPLAY_PRIVATE_KEY_LILMIX || '';

// EBAS API configuration - Updated for Lilmix
const EBAS_API_URL = 'https://ebas.esportunited.com/apis/submit_member_with_lookup.json';
const EBAS_API_KEY = '6UsBKapZIBu1JNwNc7WwVC/G5lnPW6qa';

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

// Helper to create a timeout promise
function createTimeout(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout')), ms);
  });
}

// Helper to wait for available slot in request queue
async function waitForAvailableSlot(): Promise<void> {
  while (activeRequests >= MAX_CONCURRENT_REQUESTS) {
    console.log(`🚦 [LILMIX] Rate limit: ${activeRequests}/${MAX_CONCURRENT_REQUESTS} active requests, waiting...`);
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

// Function to submit data to EBAS API with timeout
async function submitToEbas(ebasData: any): Promise<{ success: boolean, response: any }> {
  try {
    console.log('🔄 [LILMIX] Submitting to EBAS API...');
    console.log('📤 [LILMIX] EBAS Payload:', JSON.stringify(ebasData, null, 2));
    
    // Create fetch request with timeout
    const fetchPromise = fetch(EBAS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ebasData),
    });
    
    // Race between fetch and timeout
    const response = await Promise.race([
      fetchPromise,
      createTimeout(6000) // 6 second timeout for EBAS API
    ]);
    
    const responseData = await response.json();
    console.log('📥 [LILMIX] EBAS Response:', JSON.stringify(responseData, null, 2));
    
    return {
      success: response.ok,
      response: responseData
    };
  } catch (error) {
    console.error('❌ [LILMIX] EBAS API Error:', error);
    if (error instanceof Error && error.message === 'Request timeout') {
      return {
        success: false,
        response: { error: 'EBAS API timeout - request took too long' }
      };
    }
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
  const startTime = Date.now();
  console.log('📥 [LILMIX] Esplay webhook received:', new Date().toISOString());
  
  try {
    // Wrap the entire processing in a timeout
    return await Promise.race([
      processWebhookRequest(request),
      createTimeout(REQUEST_TIMEOUT)
    ]);
  } catch (error) {
    console.error('❌ [LILMIX] Webhook processing failed:', error);
    if (error instanceof Error && error.message === 'Request timeout') {
      console.error(`⏰ [LILMIX] Request timed out after ${REQUEST_TIMEOUT}ms (Vercel 10s limit)`);
      return withCors(NextResponse.json({ 
        error: 'Request timeout', 
        message: 'Processing took too long'
      }, { status: 504 }));
    }
    return withCors(NextResponse.json({ error: 'Internal server error' }, { status: 500 }));
  } finally {
    const duration = Date.now() - startTime;
    console.log(`⏱️ [LILMIX] Request completed in ${duration}ms`);
  }
}

async function processWebhookRequest(request: NextRequest): Promise<NextResponse> {
  // Authentication check with webhook secret
  if (WEBHOOK_SECRET) {
    console.log('🔐 [LILMIX] Checking webhook secret authentication');
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== WEBHOOK_SECRET) {
      console.error('❌ [LILMIX] Authentication failed: Invalid webhook secret');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.log('✅ [LILMIX] Authentication successful');
  } else {
    console.log('⚠️ [LILMIX] No webhook secret configured, skipping authentication');
  }

  let payload;
  
  // Check content type to determine if payload is encrypted
  const contentType = request.headers.get('Content-Type');
  console.log(`📄 [LILMIX] Content-Type: ${contentType}`);
  
  if (contentType === 'text/plain' && PRIVATE_KEY) {
    console.log('🔒 [LILMIX] Encrypted payload detected, attempting to decrypt');
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
      console.log('🔓 [LILMIX] Successfully decrypted payload');
    } catch (error) {
      console.error('❌ [LILMIX] Decryption error:', error);
      return NextResponse.json({ error: 'Failed to decrypt payload' }, { status: 400 });
    }
  } else {
    console.log('📝 [LILMIX] Unencrypted JSON payload detected');
    // Handle regular JSON payload
    payload = await request.json();
  }
  
  console.log('📋 [LILMIX] Received payload:', JSON.stringify(payload, null, 2));
  
  // Validate the payload
  if (!payload || !payload.event || !payload.ssn) {
    console.error('❌ [LILMIX] Invalid payload: Missing required fields');
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
  
  console.log(`✨ [LILMIX] Processing event: ${payload.event}`);
  
  // Generate request key for deduplication
  const requestKey = generateRequestKey(payload);
  
  // Check if this exact request is already being processed
  if (REQUEST_QUEUE.has(requestKey)) {
    console.log(`🔄 [LILMIX] Request already in progress for key: ${requestKey}, waiting for result...`);
    try {
      const result = await REQUEST_QUEUE.get(requestKey);
      console.log(`✅ [LILMIX] Using cached result for duplicate request`);
      return result;
    } catch (error) {
      console.log(`❌ [LILMIX] Cached request failed, processing new request`);
      REQUEST_QUEUE.delete(requestKey);
    }
  }
  
  // Check if we've already processed this entry using SQLite database
  if (hasProcessedEntry(payload.ssn)) {
    console.log(`⚠️ [LILMIX] Duplicate entry received for SSN: ${payload.ssn}`);
    // Still return 200 for duplicates as per requirements
    return withCors(NextResponse.json({ status: 'success', message: 'Duplicate entry processed' }));
  }
  
  // Wait for available slot in request queue
  await waitForAvailableSlot();
  
  // Increment active request counter
  activeRequests++;
  console.log(`📊 [LILMIX] Active requests: ${activeRequests}/${MAX_CONCURRENT_REQUESTS}`);
  
  // Create and store promise for this request
  const processingPromise = processUserData(payload);
  REQUEST_QUEUE.set(requestKey, processingPromise);
  
  try {
    const result = await processingPromise;
    console.log('✅ [LILMIX] Webhook processed successfully');
    return result;
  } finally {
    // Always clean up
    activeRequests--;
    REQUEST_QUEUE.delete(requestKey);
    console.log(`📊 [LILMIX] Request completed. Active requests: ${activeRequests}/${MAX_CONCURRENT_REQUESTS}`);
  }
}

async function processUserData(payload: any): Promise<NextResponse> {
  // Process the webhook data
  console.log(`✅ [LILMIX] New user joined: ${payload.username} (${payload.first_name} ${payload.last_name})`);
  console.log(`📧 [LILMIX] Email: ${payload.email}, Phone: ${payload.phone}`);
  console.log(`🎮 [LILMIX] Steam ID: ${payload.steamid || 'Not provided'}`);
  console.log(`🕒 [LILMIX] Joined at: ${new Date(payload.joined_association * 1000).toISOString()}`);
  
  // Transform data for EBAS API
  const ebasData = transformToEbas(payload);
  
  // Submit to EBAS API
  const ebasResult = await submitToEbas(ebasData);
  
  // Store the SSN in SQLite database to prevent duplicate processing
  addProcessedEntry(payload.ssn, payload);
  console.log(`📝 [LILMIX] Added SSN to processed entries database`);
  
  // Return response including EBAS API result
  return withCors(NextResponse.json({ 
    status: 'success', 
    message: 'Event processed successfully',
    ebas_result: ebasResult
  }));
}

// Only allow POST requests
export async function GET() {
  console.log('⚠️ [LILMIX] GET request received, method not allowed');
  return withCors(NextResponse.json({ error: 'Method not allowed' }, { status: 405 }));
}
