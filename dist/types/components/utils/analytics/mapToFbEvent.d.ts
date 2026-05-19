export declare const getFbStandardEventName: (event: string) => string | null;
/**
 * Convert a GA-style event payload into a Facebook Pixel parameter object.
 *
 * GA `items: [{ item_id, item_name, price, quantity }]` is converted into FB's
 * `contents: [{ id, quantity, item_price }]` with derived `content_ids`, `num_items`,
 * and `content_type: 'product'`. Other primitive params (e.g. `checkoutSessionId`,
 * `paymentMethod`, `serviceLevelId`) are forwarded as-is so merchants can build
 * custom audiences on them.
 */
export declare const buildFbqParams: (metadata: Record<string, unknown> | undefined) => Record<string, unknown>;
