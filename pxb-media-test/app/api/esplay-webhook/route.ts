import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Store previously processed entries based on SSN to handle duplicates
// In a production environment, this should be replaced with a database or cache
const processedEntries = new Set<string>();

// Temporarily disable webhook secret for testing
// const WEBHOOK_SECRET = process.env.ESPLAY_WEBHOOK_SECRET || '';
const WEBHOOK_SECRET = '';

// Optional: RSA private key for decryption (if encryption is enabled)
// In a production environment, this should be stored securely
// This is just a placeholder - generate a proper key pair and only share the public key with Esplay
const PRIVATE_KEY = process.env.ESPLAY_PRIVATE_KEY || '';

// EBAS API configuration
const EBAS_API_URL = 'https://ebas.esportunited.com/apis/submit_member_with_lookup.json';
const EBAS_API_KEY = 'I3FdaFNaw6t4Xm+ZbmVs4NFJcW+IfmrS';

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

// Function to transform Esplay data to EBAS format
function transformToEbas(esplayData: any) {
  // Extract SSN without country code (assuming format like SE198912190470)
  const ssn = esplayData.ssn.substring(2); // Remove country code (e.g., "SE")
  
 
  const renewalDate = new Date()
  
  return {
    api_key: EBAS_API_KEY,
    member: {
      firstname: esplayData.first_name,
      lastname: esplayData.last_name,
      renewed: renewalDate,
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
    console.log('🔄 Submitting to EBAS API...');
    console.log('📤 EBAS Payload:', JSON.stringify(ebasData, null, 2));
    
    const response = await fetch(EBAS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ebasData),
    });
    
    const responseData = await response.json();
    console.log('📥 EBAS Response:', JSON.stringify(responseData, null, 2));
    
    return {
      success: response.ok,
      response: responseData
    };
  } catch (error) {
    console.error('❌ EBAS API Error:', error);
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
  console.log('📥 Esplay webhook received:', new Date().toISOString());
  
  try {
    // Authentication check completely removed for testing
    /* 
    if (WEBHOOK_SECRET) {
      console.log('🔐 Checking webhook secret authentication');
      const authHeader = request.headers.get('Authorization');
      if (authHeader !== WEBHOOK_SECRET) {
        console.error('❌ Authentication failed: Invalid webhook secret');
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      console.log('✅ Authentication successful');
    } else {
      console.log('⚠️ No webhook secret configured, skipping authentication');
    }
    */
    console.log('⚠️ Authentication disabled for testing');

    let payload;
    
    // Check content type to determine if payload is encrypted
    const contentType = request.headers.get('Content-Type');
    console.log(`📄 Content-Type: ${contentType}`);
    
    if (contentType === 'text/plain' && PRIVATE_KEY) {
      console.log('🔒 Encrypted payload detected, attempting to decrypt');
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
        console.log('🔓 Successfully decrypted payload');
      } catch (error) {
        console.error('❌ Decryption error:', error);
        return NextResponse.json({ error: 'Failed to decrypt payload' }, { status: 400 });
      }
    } else {
      console.log('📝 Unencrypted JSON payload detected');
      // Handle regular JSON payload
      payload = await request.json();
    }
    
    console.log('📋 Received payload:', JSON.stringify(payload, null, 2));
    
    // Validate the payload
    if (!payload || !payload.event || !payload.ssn) {
      console.error('❌ Invalid payload: Missing required fields');
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    
    console.log(`✨ Processing event: ${payload.event}`);
    
    // Check if we've already processed this entry (duplicate check)
    if (processedEntries.has(payload.ssn)) {
      console.log(`⚠️ Duplicate entry received for SSN: ${payload.ssn}`);
      // Still return 200 for duplicates as per requirements
      return NextResponse.json({ status: 'success', message: 'Duplicate entry processed' });
    }
    
    // Process the webhook data
    console.log(`✅ New user joined: ${payload.username} (${payload.first_name} ${payload.last_name})`);
    console.log(`📧 Email: ${payload.email}, Phone: ${payload.phone}`);
    console.log(`🎮 Steam ID: ${payload.steamid || 'Not provided'}`);
    console.log(`🕒 Joined at: ${new Date(payload.joined_association * 1000).toISOString()}`);
    
    // Transform data for EBAS API
    const ebasData = transformToEbas(payload);
    
    // Submit to EBAS API
    const ebasResult = await submitToEbas(ebasData);
    
    // Store the SSN to prevent duplicate processing
    // In a production environment, store this in a database
    processedEntries.add(payload.ssn);
    console.log(`📝 Added SSN to processed entries. Current count: ${processedEntries.size}`);
    
    // Return response including EBAS API result
    console.log('✅ Webhook processed successfully');
    return withCors(NextResponse.json({ 
      status: 'success', 
      message: 'Event processed successfully',
      ebas_result: ebasResult
    }));
    
  } catch (error) {
    console.error('❌ Error processing webhook:', error);
    return withCors(NextResponse.json({ error: 'Internal server error' }, { status: 500 }));
  }
}

// Only allow POST requests
export async function GET() {
  console.log('⚠️ GET request received, method not allowed');
  return withCors(NextResponse.json({ error: 'Method not allowed' }, { status: 405 }));
} 