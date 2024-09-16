/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    SHOPIFY_SCOPES: process.env.SHOPIFY_SCOPES,
    SHOPIFY_REDIRECT_URI: process.env.SHOPIFY_REDIRECT_URI,
  },
};

module.exports = nextConfig;
