// app/api/webhooks/orders-create/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // Process webhook data
  console.log('Webhook data:', body);

  return NextResponse.json({ message: 'Webhook received' });
}
