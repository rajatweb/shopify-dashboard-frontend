import { NextResponse } from 'next/server';
import querystring from 'querystring';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const shop = searchParams.get('shop');

  if (!shop) {
    return NextResponse.json({ error: 'Missing shop parameter' }, { status: 400 });
  }

  const redirectUri = process.env.SHOPIFY_REDIRECT_URI;
  const authUrl = `https://${shop}/admin/oauth/authorize?` + querystring.stringify({
    client_id: process.env.SHOPIFY_API_KEY,
    scope: process.env.SHOPIFY_SCOPES,
    redirect_uri: redirectUri,
    state: 'nonce',  // Optionally, use a secure random state for CSRF protection
    // grant_options: ['per-user']
  });

  // Redirect to Shopify's OAuth URL
  return NextResponse.redirect(authUrl);
}
