/* eslint-disable no-relative-import-paths/no-relative-import-paths */
/// <reference types="google.maps" />
import type { StripeConstructor, StripeElements } from '@stripe/stripe-js';

/** Need to use relative path so that this declaration file can be correctly bundled */
import type { CustomEventMap } from '../components/utils/createCustomEvent';
import type { Env } from '../environment';
import type { Zonos } from '../scripts/_zonosBase';
declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEvent<CustomEventMap[K]>) => void,
    ): void;
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    Stripe?: StripeConstructor;
    Zonos: Zonos;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    bcConfig?: unknown;
    /**
     * In bigcommerce domestic checkout page, some merchants might use Stripe address element for address population.
     */
    bcStripeElements?: StripeElements;
    /**
     * This flag would be set to true if zonosQaUrl is present in the query params and preview script loadZonos.js is injected to DOM
     */
    isZonosPreview?: boolean;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    stencilBootstrap?: unknown;
    /**
     * Currency selector to perform blur currency on init
     */
    zonosBlurCurrencyOnInitCurrencySelector?: string;
    /**
     * Interval id to perform blur currency on init
     */
    zonosBlurCurrencyOnInitIntervalId?: NodeJS.Timeout;
  }

  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv extends Env {}
  }
}

export {};
