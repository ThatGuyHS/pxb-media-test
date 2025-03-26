import { NextRequest, NextResponse } from 'next/server';

// Simple test endpoint to check if API routes are working
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    status: 'success', 
    message: 'Test endpoint is working',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    // Get the request headers
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });
    
    // Get the request body if any
    let body = null;
    try {
      body = await request.json();
    } catch (e) {
      // No JSON body or invalid JSON
    }
    
    return NextResponse.json({ 
      status: 'success', 
      message: 'POST to test endpoint is working',
      timestamp: new Date().toISOString(),
      headers: headers,
      body: body
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 