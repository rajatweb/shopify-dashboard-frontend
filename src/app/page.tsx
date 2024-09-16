'use client'; // since we are using browser events like form submission

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ShopifyLoginPage() {
  const [shopUrl, setShopUrl] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!shopUrl) return alert('Please enter your Shopify store URL');

    // Redirect to the API route that handles the OAuth flow
    router.push(`/api/shopify/auth?shop=${encodeURIComponent(shopUrl)}`);
  };

  return (
    <div>
      <h1>Shopify Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="shopUrl">Shopify Store URL</label>
        <input
          id="shopUrl"
          type="text"
          value={shopUrl}
          onChange={(e) => setShopUrl(e.target.value)}
          placeholder="example.myshopify.com"
        />
        <Button type="submit">Login with Shopify</Button>
      </form>
    </div>
  );
}