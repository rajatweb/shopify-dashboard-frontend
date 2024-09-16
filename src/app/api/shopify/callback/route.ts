import { NextResponse } from 'next/server';
import axios from 'axios';
// import querystring from 'querystring';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const shop = searchParams.get('shop');
  const code = searchParams.get('code');

  if (!shop || !code) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  const tokenUrl = `https://${shop}/admin/oauth/access_token`;
  try {
    const response = await axios.post(tokenUrl, {
      client_id: process.env.SHOPIFY_API_KEY,
      client_secret: process.env.SHOPIFY_API_SECRET,
      code,
    });

    const { access_token } = response.data;

    // Here you would typically store the access token in a database
    // Redirect to a success page or dashboard
    return NextResponse.json({ message: 'Access token received and stored', access_token });
  } catch (error) {
    return NextResponse.json({ error: 'Error exchanging access token' }, { status: 500 });
  }
}
