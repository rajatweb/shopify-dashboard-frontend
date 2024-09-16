export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
}

export type Task = {
    id: Id;
    columnId: Id,
    content: string;
}

// types/shopify.ts
export interface ShopifyAccessTokenResponse {
    access_token: string;
    scope: string;
}

export interface ShopifyWebhookEvent {
    topic: string;
    shop_domain: string;
}