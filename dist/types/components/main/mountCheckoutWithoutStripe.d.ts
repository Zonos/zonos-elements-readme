/**
 * Mount `<zonos-checkout>` without a Stripe instance.
 *
 * Native BigCommerce checkout must not receive Stripe.js. Creating the
 * element still runs `zonos-checkout.init()`, which registers the
 * international-address watcher and then returns before the Stripe poll.
 */
export declare const mountCheckoutWithoutStripe: () => void;
