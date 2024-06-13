/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import type { BrowserOptions } from '@sentry/browser';
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
    Sentry?: {
      init: (config: BrowserOptions) => void;
    };
    Stripe?: StripeConstructor;
    Zonos: Zonos;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    bcConfig?: unknown;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    stencilBootstrap?: unknown;
    sentryOnLoad?: () => void;
  }

  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv extends Env {}
  }
}
