import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Hero Form API Route received:', body);

    // Forward request to N8N webhook
    const response = await fetch('https://n8n.netfera.com/webhook-test/lead-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('N8N Hero Response status:', response.status);

    if (response.ok) {
      const data = await response.text();
      console.log('N8N Hero Response data:', data);

      return NextResponse.json({
        success: true,
        message: 'Hero form submitted successfully',
        data,
      });
    } else {
      const errorText = await response.text();
      console.error('N8N Hero Error:', errorText);

      return NextResponse.json(
        { success: false, error: `N8N Error: ${errorText}` },
        { status: response.status },
      );
    }
  } catch (error) {
    console.error('Hero API Route Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

// Enable CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
