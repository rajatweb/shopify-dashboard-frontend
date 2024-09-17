// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const shop = url.searchParams.get('SHOP');

  const redirectUri = process.env.SHOPIFY_REDIRECT_URI;
  const scopes = process.env.SHOPIFY_SCOPES;
  const apiKey = process.env.SHOPIFY_API_KEY;

  if (!shop) {
    return NextResponse.json({ error: 'Shop domain is required' }, { status: 400 });
  }

  const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirectUri}`;

  return NextResponse.redirect(authUrl);
}
