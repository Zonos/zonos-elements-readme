export type GetStoreVersionResponse = {
    /**
     * Should we update the cache?
     */
    isDifferent: boolean;
    source: 'hasura' | 'redis-cloudflare' | 'redis-vercel' | 'cdn';
    version: string;
};
export type GetStoreVersionRequest = {
    storeId: number;
};
export type SetStoreVersionRequest = {
    storeId: number;
    version: string;
};
