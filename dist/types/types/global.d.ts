/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import type { StripeConstructor } from '@stripe/stripe-js';

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
     * This flag would be set to true if zonosQaUrl is present in the query params and preview script loadZonos.js is injected to DOM
     */
    isZonosPreview?: boolean;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    stencilBootstrap?: unknown;
  }

  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv extends Env {}
  }
}
