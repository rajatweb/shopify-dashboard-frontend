interface TokenStore {
    [key: string]: string; // shop domain mapped to access token
}

const tokenStore: TokenStore = {};

export const saveToken = (shop: string, token: string): void => {
    tokenStore[shop] = token;
};

export const getToken = (shop: string): string | null => {
    return tokenStore[shop] || null;
};

export const deleteToken = (shop: string): void => {
    delete tokenStore[shop];
};