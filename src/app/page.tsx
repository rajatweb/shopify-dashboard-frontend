"use client";

// app/login/page.tsx
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Login() {
  const [shop, setShop] = useState<string>('');

  const handleLogin = async () => {
    if (!shop) return;

    window.location.href = `/api/auth/login?SHOP=${shop}`;
  };

  return (
    <div>
      <input
        type="text"
        value={shop}
        onChange={(e) => setShop(e.target.value)}
        placeholder="Enter your shop domain"
      />
      <Button onClick={handleLogin}>Login with Shopify</Button>
    </div>
  );
}
