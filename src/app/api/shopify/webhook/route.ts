import crypto from 'crypto';
import { NextResponse } from 'next/server';

function verifyWebhook(hmacHeader: string, body: string) {
  const generatedHash = crypto
    .createHmac('sha256', process.env.SHOPIFY_API_SECRET as string)
    .update(body, 'utf8')
    .digest('base64');

  return generatedHash === hmacHeader;
}

export async function POST(req: Request) {
  const hmacHeader = req.headers.get('x-shopify-hmac-sha256');

  if (!hmacHeader) {
    return NextResponse.json({ error: 'Missing HMAC header' }, { status: 400 });
  }

  const body = await req.text(); // Read the body as a string for HMAC verification

  // Verify the webhook's authenticity
  const isValid = verifyWebhook(hmacHeader, body);

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 });
  }

  // Convert the body to JSON to process the payload
  const data = JSON.parse(body);

  const topic = req.headers.get('x-shopify-topic');
  const shop = req.headers.get('x-shopify-shop-domain');

  console.log(`Received ${topic} webhook from ${shop}`, data);

  return NextResponse.json({ message: 'Webhook received' });
}
