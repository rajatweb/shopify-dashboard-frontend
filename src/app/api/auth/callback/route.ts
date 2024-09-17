// app/api/auth/callback/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const shop = url.searchParams.get('shop');
  const code = url.searchParams.get('code');

  if (!shop || !code) {
    return NextResponse.json({ error: 'Missing shop or code' }, { status: 400 });
  }

  const accessTokenUrl = `https://${shop}/admin/oauth/access_token`;
  const apiKey = process.env.SHOPIFY_API_KEY;
  const apiSecret = process.env.SHOPIFY_API_SECRET;

  try {
    const response = await axios.post(accessTokenUrl, {
      client_id: apiKey,
      client_secret: apiSecret,
      code
    });

    const accessToken = response.data.access_token;

    // Save the access token in your database or session
    // return NextResponse.json({ accessToken });
    return NextResponse.redirect(`http://localhost:3000/dashboard?access_token=${accessToken}`);
  } catch (error) {
    return NextResponse.json({ error: 'Error exchanging code for access token' }, { status: 500 });
  }
}
