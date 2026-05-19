/**
 * A BigCommerce address payload as returned by the Storefront API. Used for
 * both a logged-in customer's saved address book entries (via
 * `?include=customer.addresses`) and the consignment shipping address on the
 * active checkout.
 */
export type BigCommerceCustomerAddress = {
    address1?: string;
    address2?: string;
    city?: string;
    countryCode?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    phone?: string;
    postalCode?: string;
    stateOrProvince?: string;
    stateOrProvinceCode?: string;
};
/**
 * BigCommerce Storefront API checkout response shape — partial, only the
 * fields we consume.
 */
export type BigCommerceCheckoutResponse = {
    consignments?: {
        shippingAddress?: BigCommerceCustomerAddress;
    }[];
    customer?: {
        addresses?: BigCommerceCustomerAddress[];
        customerGroup?: {
            id: number;
        };
        email?: string;
        id?: number;
    };
};
/**
 * Fetch the checkout/cart ID from the BigCommerce Storefront Cart API.
 * The `/checkout` page URL does not include the checkout ID, so we
 * retrieve it from `/api/storefront/cart` which returns the active cart(s).
 */
export declare const fetchCheckoutId: () => Promise<string | null>;
/**
 * Fetch checkout data from the BigCommerce Storefront API.
 * This API is cookie-authenticated (same-origin), so no token is needed.
 */
export declare const fetchBigCommerceCheckout: (checkoutId: string) => Promise<BigCommerceCheckoutResponse | null>;
/**
 * Whether the BigCommerce shopper is already logged in. We key off the
 * customer's numeric `id` since the storefront API populates it only for
 * authenticated sessions (guest checkouts have an empty `customer` object).
 */
export declare const isBigCommerceCustomerLoggedIn: (checkout: BigCommerceCheckoutResponse | null) => boolean;
