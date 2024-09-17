// app/api/webhooks/register/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { shop, accessToken }: { shop: string; accessToken: string } = await request.json();

  if (!shop || !accessToken) {
    return NextResponse.json({ error: 'Missing shop or access token' }, { status: 400 });
  }

  try {
    const webhookUrl = `https://${shop}/admin/api/2024-01/webhooks.json`;

    await axios.post(
      webhookUrl,
      {
        webhook: {
          topic: 'orders/create',
          address: 'pubsub://projectName:topicName',
          format: 'json'
        }
      },
      {
        headers: {
          'X-Shopify-Access-Token': accessToken,
          'Content-Type': 'application/json'
        }
      }
    );

    return NextResponse.json({ message: 'Webhook registered' });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return NextResponse.json({ error: 'Error registering webhook' }, { status: 500 });
  }
}
