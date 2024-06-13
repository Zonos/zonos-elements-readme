# Zonos Component UI Introduction
This project offers web components designed primarily for Zonos Checkout, Zonos Hello, and other Zonos products, with a focus on React and Next.js integration. Although not yet tested with other JavaScript libraries and frameworks, the implementation principles for React and Next.js can be adapted for use with other frameworks. For more information about Zonos products, please visit the official [Zonos website](https://zonos.com).

# Table of content
- [Zonos Component UI Introduction](#zonos-component-ui-introduction)
- [Table of content](#table-of-content)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Brief `Zonos.init` base configuration explanation:](#brief-zonosinit-base-configuration-explanation)
  - [CDN](#cdn)
    - [CDN when to use:](#cdn-when-to-use)
    - [CDN usages:](#cdn-usages)
  - [Npm](#npm)
    - [Npm when to use:](#npm-when-to-use)
    - [Npm usage:](#npm-usage)
- [API references](#api-references)
    - [Zonos instance definition](#zonos-instance-definition)
    - [Single file definition for Zonos instance](#single-file-definition-for-zonos-instance)
    - [Zonos.init - checkoutSettings available configurations](#zonosinit---checkoutsettings-available-configurations)
    - [Zonos.init - helloSettings available configurations](#zonosinit---hellosettings-available-configurations)


# Prerequisites
- Node.js (v18 or higher)
- An API key for Zonos Checkout/Hello (please contact our [support team](https://zonos.com/contact-support) for more information)

# Installation
There are two ways to initialize Zonos: via custom integration using a CDN or through npm installation.

**Note**: All methods below are only using the base configuration to have the Checkout and Hello up and running. For a more secure way to build your cart, please check out our [docs](https://zonos.com/docs/global-ecommerce/integration/integrating-new-checkout/custom-integration#set-up-zonos-checkout) for more information.

## Brief `Zonos.init` base configuration explanation:
- `checkoutSettings.buildCartDetail`: This callback function retrieves cart item information from your web platform. It should return an array of cart item objects. For the expected type definition, please refer to the [`buildCartDetail`](./dist/types/types/checkout/CheckoutConfig.d.ts) and the [cart item](./dist/types/components/store/checkout/cart.d.ts) files.
- `checkoutSettings.placeOrderButtonSelector`: This is used to find all matching selectors and attach an event to trigger the Checkout process. While you can configure this in our Zonos dashboard, it's recommended to set it here so that Zonos can disable your Checkout place order button while loading.
- `zonosApiKey`: An API key for Zonos Checkout/Hello (please contact our [support team](https://zonos.com/contact-support) for more information).
- `storeId`: Store id that your checkout would associate with (please contact our [support team](https://zonos.com/contact-support) for more information).

## CDN

### CDN when to use:
This is suitable for you if you:
- Use any non-JavaScript frameworks (e.g., PHP, Java, C#).
- Have a static site with pure HTML, CSS, and JavaScript.
- Do not need type references in the project.
- Prefer to use a CDN even if you are using a JavaScript framework (e.g., React, Vue, Next.js).
- Want to quickly test how Zonos functions on your site (e.g., easily drop the script snippet into the Console tab in your browser's developer tools).

### CDN usages:


- For non-JavaScript frameworks:
  <details>
  <summary>Copy and paste the following into your HTML or the "Console" tab of your browser's developer tool</summary>

    Put the `<script>` tag below into the `<head>` tag of your HTML:
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
              // Replace '<%= placeOrderButtonSelector %>', '<%= storeId %>', and '<%= credentialToken %>'
              // with your actual values.
              void window.Zonos.init({
                checkoutSettings: {
                  buildCartDetail: async () => {
                    const allItems = getCartItems();
                    return allItems;
                  },
                  placeOrderButtonSelector: '<%= placeOrderButtonSelector %>',
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
  </details>
  <br>

- For React, Next.js:
  - Create a typescript file and import `@zonos/elements` to define types definition for `window` interface
    <details>
    <summary>Code example</summary>

      ```typescript
      import "@zonos/elements";
      ```
    </details>
    <br>
  - Create a `ContextProvider`
    <details>
    <summary>Code example</summary>

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
    </details>
    <br>

  - Wrap `ZonosScriptContextProvider` into root of your `layout.tsx`
    <details>
    <summary>Code example</summary>
    
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
    </details>
    <br>

  - Create a hook named `useZonosScript.ts` to use the context easier
    <details>
    <summary>Code example</summary>

    ```typescript
    import { useContext } from 'react';

    import { ZonosScriptContext } from 'src/components/ZonosScriptContext';

    export const useZonosScript = () => useContext(ZonosScriptContext);
    ```
    </details>
    <br>
  - Create component called `ZonosLayoutSetup.tsx` to initialize `Zonos`.
    <details>
      <summary>Code example</summary>

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
          // Replace '<%= placeOrderButtonSelector %>', '<%= storeId %>', and '<%= credentialToken %>'
          // with your actual values.
          void window.Zonos.init({
            checkoutSettings: {
              buildCartDetail: async () => {
                const allItems = getCartItems();
                return allItems;
              },
              placeOrderButtonSelector: '<%= placeOrderButtonSelector %>',
            },
            storeId: Number('<%= storeId %>'), // Contact support for this information.
            zonosApiKey: '<%= credentialToken %>', // Contact support for this information
          });
        }, [scriptLoaded]);

        return children;
      };
      ```
    </details> 
    <br>
    
  - Put component `ZonosLayoutSetup.tsx` right under `ZonosScriptContextProvider`
    <details>
      <summary>Code example</summary>

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
    </details>
    <br>
- For javascript framework that's not React, Next.js:
  - Create a typescript file and import `@zonos/elements` to define types definition for `window` interface. You will have access to `window.Zonos` through out of your project if you are using typescript.
    <details>
      <summary>Code example</summary>

      ```typescript
      import "@zonos/elements";
      ```
    </details>
    <br>

## Npm
### Npm when to use:
This method is ideal if you are using TypeScript with modern JavaScript frameworks, particularly React and Next.js. It provides strong typing for the window.Zonos.init function, making setup easier and enabling auto-completion in TypeScript-enabled environments.

### Npm usage:
Install `@zonos/elements`:

| Package Manager | Command                       |
|-----------------|-------------------------------|
| pnpm            | `pnpm add @zonos/elements`    |
| npm             | `npm install @zonos/elements` |
| yarn            | `yarn add @zonos/elements`    |

<br>

React, Next.js:
- Create a component called `ZonosLayoutSetup.tsx`
  <details>
    <summary>Code example</summary>
    
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
            placeOrderButtonSelector: '<%= placeOrderButtonSelector %>',
          },
          storeId: Number('<%= storeId %>'), // Contact support for this information.
          zonosApiKey: '<%= credentialToken %>', // Contact support for this information
        });
      }, [scriptLoaded]);

      return children;
    };
    ```
  </details>
  <br>

- Put component `ZonosLayoutSetup.tsx` at top level of your `layout.tsx`
  <details>
    <summary>Code example</summary>

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
  </details>

# API references
### [Zonos instance definition](./dist/types/scripts/_zonosBase.d.ts)
### [Single file definition for Zonos instance](./dist/scripts/index.d.ts)
### [Zonos.init - checkoutSettings available configurations](./dist/types/types/checkout/CheckoutConfig.d.ts)
### [Zonos.init - helloSettings available configurations](./dist/types/types/hello/HelloConfig.d.ts)
