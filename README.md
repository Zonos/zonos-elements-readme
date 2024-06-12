# Zonos Component UI

## Introduction
This project offers web components designed primarily for Zonos Checkout, Zonos Hello, and other Zonos products, with a focus on React and Next.js integration. Although not yet tested with other JavaScript libraries and frameworks, the implementation principles for React and Next.js can be adapted for use with other frameworks. For more information about Zonos products, please visit the official [Zonos website](https://zonos.com).

## Installation
There are two ways to initialize Zonos: via custom integration using a CDN or through npm installation.

**Note: An API key is required to use Zonos Checkout/Hello. Please contact our support team for more information.**


- ### CDN

  #### - When to use:
  This is suitable for you if you:
  - Use any non-JavaScript frameworks (e.g., PHP, Java, C#).
  - Have a static site with pure HTML, CSS, and JavaScript..
  - Do not need type references in the project.
  - Prefer to use a CDN even if you are using a JavaScript framework (e.g., React, Vue, Next.js).
  - Want to quickly test how Zonos functions on your site (e.g., easily drop the script snippet into the Console tab in your browser's developer tools).

  #### - Usage:

  **Note**: All methods below are only using the base configuration to have the Checkout and Hello up and running. For more secure way to build your cart, please check out our [docs](https://zonos.com/docs/global-ecommerce/integration/integrating-new-checkout/custom-integration#set-up-zonos-checkout) for more information.

  - For non-JavaScript frameworks:
    - Copy and paste the following `<script>` tag into the `<head>` tag of your HTML:
      ```html
      <script>
        (async function () {
          const zonosElementsUrl = 'https://js.zonos.com';
          const timestamp = new Date().getTime();
          const zonosScript = document.querySelector(
            `script[src*="${zonosElementsUrl}/dist/scripts/loadZonos.js"]`,
          );

          if (!zonosScript) {
            const script = document.createElement('script');
            script.src = `${zonosElementsUrl}/dist/scripts/loadZonos.js?timestamp=${timestamp}`;
            script.addEventListener(
              'load',
              () => {
                const getCartItems = async () => {
                  const yourServerUrl = "https://your-server.com/api/get-cart-items";
                  const response = await fetch(yourServerUrl);
                  const json = await response.json();
                  return json;
                };

                // Initialize Zonos with your store's settings.
                // Replace '<%- placeOrderButtonSelector %>', '<%= storeId %>', and '<%= credentialToken %>'
                // with your actual values.
                void window.Zonos.init({
                  checkoutSettings: {
                    buildCartDetail: async () => {
                      const allItems = getCartItems();
                      return allItems;
                    },
                    placeOrderButtonSelector: '<%- placeOrderButtonSelector %>',
                  },
                  storeId: Number('<%= storeId %>'), // Contact support for this information.
                  zonosApiKey: '<%= credentialToken %>', // Contact support for this information
                });
              },
              false,
            );
            document.head.appendChild(script);
          }
        })();
      </script>
      ```
  - For React, Next.js:
    - Create a typescript file and import `@zonos/elements` to define types definition for `window` interface.
      - Ex:
        ```typescript
        import "@zonos/elements";
        ```
    - Create a `ContextProvider`
      ```typescript
        'use client';
        import { type ReactNode, createContext, useMemo, useState } from 'react';

        import Script from 'next/script';

        type ZonosScriptProps = {
          scriptLoaded: boolean;
        };

        export const ZonosScriptContext = createContext<ZonosScriptProps>({
          scriptLoaded: false,
        });

        export const ZonosScriptContextProvider = ({
          children,
        }: {
          children: ReactNode;
        }) => {
          const [scriptLoaded, setScriptLoaded] = useState(false);

          const context: ZonosScriptProps = {
            scriptLoaded,
          };
          const timestamp = useMemo(() => Date.now(), []);
          return (
            <ZonosScriptContext.Provider value={context}>
              <Script
                onLoad={() => setScriptLoaded(true)}
                src={`https://js.zonos.com/dist/scripts/loadZonos.js?timestamp=${timestamp}`}
              />
              {children}
            </ZonosScriptContext.Provider>
          );
        };
      ```
    - Wrap `ZonosScriptContextProvider` into root of your `layout.tsx`. 
      ```typescript
      export default function Layout({ children }:{ children: ReactNode}) {
        return (
          <ZonosScriptContextProvider>
            <main>
              {children}
            </main>
          </ZonosScriptContextProvider>
        )
      }
      ```
    - Create a hook named `useZonosScript.ts` to use the context easier.
      ```typescript
      import { useContext } from 'react';

      import { ZonosScriptContext } from 'src/components/ZonosScriptContext';

      export const useZonosScript = () => useContext(ZonosScriptContext);
      ```
    - Create component called `ZonosLayoutSetup.tsx` to initialize `Zonos`.
      ```typescript
      'use client';
      import { type ReactNode, useEffect } from 'react';

      import { useZonosScript } from 'src/utils/hooks/useZonosScript';

      export const ZonosLayoutSetup = ({ children }: { children: ReactNode }) => {
        const { scriptLoaded } = useZonosScript();

        useEffect(() => {
          // Only initialize Zonos when zonos script is fully loaded.
          if (!scriptLoaded) {
            return;
          }
          const getCartItems = async () => {
            const yourServerUrl = "https://your-server.com/api/get-cart-items";
            const response = await fetch(yourServerUrl);
            const json = await response.json();
            return json;
          };

          // Initialize Zonos with your store's settings.
          // Replace '<%- placeOrderButtonSelector %>', '<%= storeId %>', and '<%= credentialToken %>'
          // with your actual values.
          void window.Zonos.init({
            checkoutSettings: {
              buildCartDetail: async () => {
                const allItems = getCartItems();
                return allItems;
              },
              placeOrderButtonSelector: '<%- placeOrderButtonSelector %>',
            },
            storeId: Number('<%= storeId %>'), // Contact support for this information.
            zonosApiKey: '<%= credentialToken %>', // Contact support for this information
          });
        }, [scriptLoaded]);

        return children;
      };
      ```
    - Put component `ZonosLayoutSetup.tsx` right under `ZonosScriptContextProvider`.
      ```typescript
      export default function Layout({ children }:{ children: ReactNode}) {
        return (
          <ZonosScriptContextProvider>
            <ZonosLayoutSetup>
              <main>
                {children}
              </main>
            </ZonosLayoutSetup>
          </ZonosScriptContextProvider>
        )
      }
      ```
  - For javascript framework that's not React, Next.js:
    - IfCreate a typescript file and import `@zonos/elements` to define types definition for `window` interface. You will have access to `window.Zonos` through out of your project if you are using typescript.
    - Ex:
      ```typescript
      import "@zonos/elements";
      ```

- ### Npm
  #### - When to use:
  This method is ideal if you are using TypeScript with modern JavaScript frameworks, particularly React and Next.js. It provides strong typing for the window.Zonos.init function, making setup easier and enabling auto-completion in TypeScript-enabled environments.

  #### - Usage:
  - Install `@zonos/elements`.
    - With `pnpm`
      ```bash
      pnpm add @zonos/elements
      ```
    - With `npm`
      ```bash
      npm install @zonos/elements
      ```
    - With `yarn`
      ```bash
      yarn add @zonos/elements
      ```
  - React, Next.js:
    - Create a component called `ZonosLayoutSetup.tsx`:
      ```typescript
      'use client';
      import { type ReactNode, useEffect } from 'react';

      import { Zonos } from '@zonos/elements';

      import { useZonosScript } from 'src/utils/hooks/useZonosScript';

      export const ZonosLayoutSetup = ({ children }: { children: ReactNode }) => {
        useEffect(() => {
          // Initialize Zonos into `window` API.
          window.Zonos = Zonos;

          const getCartItems = async () => {
            const yourServerUrl = "https://your-server.com/api/get-cart-items";
            const response = await fetch(yourServerUrl);
            const json = await response.json();
            return json;
          };
          

          // Initialize Zonos
          void window.Zonos.init({
            checkoutSettings: {
              buildCartDetail: async () => {
                const allItems = getCartItems();
                return allItems;
              },
              placeOrderButtonSelector: '<%- placeOrderButtonSelector %>',
            },
            storeId: Number('<%= storeId %>'), // Contact support for this information.
            zonosApiKey: '<%= credentialToken %>', // Contact support for this information
          });
        }, [scriptLoaded]);

        return children;
      };
      ```
    - Put component `ZonosLayoutSetup.tsx` at top level of your `layout.tsx`.
      ```typescript
      export default function Layout({ children }:{ children: ReactNode}) {
        return (
          <ZonosLayoutSetup>
            <main>
              {children}
            </main>
          </ZonosLayoutSetup>
        )
      }
      ```

## API references
- [Zonos instance definition](./dist/types/scripts/_zonosBase.d.ts)
- [Single file definition for Zonos instance](./dist/scripts/index.d.ts)