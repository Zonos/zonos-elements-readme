/**
 * On the BigCommerce cart page, drop any native domestic shipping quote the
 * shopper added before they switched to an international country, then reload
 * the page.
 *
 * The native cart stores a shipping estimate as a consignment on the active
 * checkout. When Hello is shown the shopper is checking out internationally
 * through Zonos, so that domestic shipping cost should not linger in the Grand
 * Total. We delete the consignment(s) and reload so the server re-renders the
 * cart consistently (subtotal, shipping, and Grand Total all add up).
 *
 * No-ops unless all of the following hold: the host is BigCommerce, the shopper
 * is on the cart page, they are in a shipping zone with Hello shown, and the
 * active checkout actually has a consignment. Because the reload happens only
 * when a consignment is found and removed, the freshly-loaded page has none —
 * so this cannot loop.
 */
export declare const removeBigcommerceCartShipping: () => Promise<void>;
