// utils/registerWebhook.ts
import Shopify from 'shopify-api-node';

export const registerWebhook = async (shop: string, accessToken: string) => {
  const shopify = new Shopify({
    shopName: shop,
    accessToken,
  });

  try {
    await shopify.webhook.create({
      topic: 'app/uninstalled',
      address: 'http://localhost:3000/api/webhooks/shopify',
      format: 'json',
    });
    console.log('Webhook registered successfully.');
  } catch (error) {
    console.error('Error registering webhook:', error);
  }
};
