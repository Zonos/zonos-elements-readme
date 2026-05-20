export declare const setupCartDataWithSettings: (cartId: string) => Promise<{
    cartData: import("../..").NormalizedTempCart;
    settings: Omit<{
        appearanceSettings: {
            colorPrimary: string;
            colorSecondary: string;
            createdAt: string;
            createdBy: string;
            fontFamily: string;
            id: string;
            logoUrl: string;
            mode: import("../../types/generated/graphql.internal.types").Mode;
            organization: string;
            style: import("../..").ElementsUiStyle;
            theme: import("../..").ElementsUiTheme;
            updatedAt: string;
            updatedBy: string;
            zonosAttribution: import("../../types/generated/graphql.internal.types").ZonosAttribution | null;
        };
        cart: {
            adjustments: Array<{
                amount: number;
                currencyCode: import("../../types/generated/graphql.internal.types").CurrencyCode;
                description: string | null;
                productId: string | null;
                sku: string | null;
                type: import("../../types/generated/graphql.internal.types").CartAdjustmentType;
            }>;
            createdAt: string;
            expiresAt: string | null;
            id: string;
            items: Array<{
                amount: number;
                attributes: Array<{
                    key: string | null;
                    value: string | null;
                } | null> | null;
                countryOfOrigin: import("../..").CountryCode | null;
                currencyCode: import("../../types/generated/graphql.internal.types").CurrencyCode;
                description: string | null;
                id: string;
                imageUrl: string | null;
                itemType: import("../../types/generated/graphql.internal.types").ItemType | null;
                measurements: Array<{
                    type: import("../../types/generated/graphql.internal.types").ItemMeasurementType;
                    unitOfMeasure: import("../../types/generated/graphql.internal.types").ItemUnitOfMeasure;
                    value: number;
                } | null> | null;
                metadata: Array<{
                    key: string | null;
                    value: string | null;
                } | null> | null;
                name: string | null;
                productId: string;
                quantity: number;
                sku: string | null;
            }>;
            metadata: Array<{
                key: string;
                value: string;
            }>;
            organization: {
                id: string;
                name: string;
                references: {
                    storeId: number | null;
                } | null;
            } | null;
            references: {
                checkoutSessionId: string | null;
                landedCostId: string | null;
            } | null;
            type: import("../../types/generated/graphql.internal.types").CartType | null;
        };
        checkoutSettings: {
            allowedCharacterSets: import("../../types/generated/graphql.internal.types").AllowedCharacterSets;
            allowedSettlementCurrencies: import("../../types/generated/graphql.internal.types").AllowedSettlementCurrencies;
            successBehavior: import("../../types/generated/graphql.internal.types").CheckoutSuccessBehavior;
            captureDelay: number;
            companyFieldsStatus: import("../../types/generated/graphql.internal.types").CheckoutCompanyFieldsStatus;
            createdAt: string;
            createdBy: string;
            customHTML: string;
            defaultCartExpiration: number;
            disabledCountries: Array<import("../..").CountryCode> | null;
            externalPaymentMethods: Array<{
                status: import("../../types/generated/graphql.internal.types").ExternalPaymentMethodStatus;
                type: import("../../types/generated/graphql.internal.types").ExternalPaymentMethodType;
            }> | null;
            externalServiceTokens: Array<{
                token: string;
                type: import("../../types/generated/graphql.internal.types").ExternalServiceTokenType;
            }>;
            id: string;
            mode: import("../../types/generated/graphql.internal.types").Mode;
            orderNotifications: {
                abandonedCart: {
                    delay: number;
                    discountPercent: number;
                    status: {
                        active: import("../../types/generated/graphql.internal.types").NotificationActiveStatus;
                        sendCopiesTo: Array<string>;
                    };
                };
                orderCancelled: {
                    active: import("../../types/generated/graphql.internal.types").NotificationActiveStatus;
                    sendCopiesTo: Array<string>;
                };
                orderShipped: {
                    active: import("../../types/generated/graphql.internal.types").NotificationActiveStatus;
                    sendCopiesTo: Array<string>;
                };
            };
            organization: string;
            placeOrderButtonSelector: string | null;
            subscriptionStatus: import("../../types/generated/graphql.internal.types").CheckoutSubscriptionStatus;
            successRedirectUrl: string;
            analyticsProviders: Array<{
                status: import("../../types/generated/graphql.internal.types").AnalyticsProviderStatus;
                type: import("../../types/generated/graphql.internal.types").AnalyticsProviderType;
            }>;
            updatedAt: string;
            updatedBy: string;
            varianceTestRegistrations: Array<{
                testKey: string;
                varianceAllocation: Array<{
                    percentage: number;
                    variantKey: string;
                }>;
            }> | null;
            visibilityStatus: import("../../types/generated/graphql.internal.types").CheckoutVisibilityStatus;
        };
        credentialTokenId: string;
        helloSettings: {
            allowedDomains: Array<string>;
            anchorElementSelector: string;
            cartUrlPattern: string | null;
            countryDisplayRules: {
                countrySelector: {
                    behavior: import("../../types/generated/graphql.internal.types").HelloCountryDisplayBehavior;
                    excludedCountries: Array<import("../..").CountryCode>;
                    includedCountries: Array<import("../..").CountryCode>;
                };
                widgetVisibility: {
                    behavior: import("../../types/generated/graphql.internal.types").HelloCountryDisplayBehavior;
                    excludedCountries: Array<import("../..").CountryCode>;
                    includedCountries: Array<import("../..").CountryCode>;
                };
            };
            countryOverrideBehavior: import("../../types/generated/graphql.internal.types").HelloCountryOverrideBehavior;
            createdAt: string;
            createdBy: string;
            currencyBehavior: import("../../types/generated/graphql.internal.types").HelloCurrencyBehavior;
            currencyElementSelector: string;
            desktopLocation: import("../..").HelloDesktopLocation;
            dutyTaxEstimationBehavior: import("../../types/generated/graphql.internal.types").HelloEstimateBehavior;
            excludedUrlPatterns: Array<string>;
            updatedBy: string;
            id: string;
            mobileLocation: import("../..").HelloMobileLocation;
            mode: import("../../types/generated/graphql.internal.types").Mode;
            organization: string;
            peekMessageBehavior: import("../../types/generated/graphql.internal.types").HelloPeekMessageBehavior;
            peekMessageDelay: number;
            productListUrlPattern: string | null;
            productDetailUrlPattern: string | null;
            homepageUrlPattern: string | null;
            productDescriptionElementSelector: string | null;
            productPriceElementSelector: string | null;
            productTitleElementSelector: string | null;
            restrictionBehavior: import("../../types/generated/graphql.internal.types").HelloRestrictionBehavior;
            updatedAt: string;
            productAddToCartElementSelector: string | null;
            visibilityStatus: import("../../types/generated/graphql.internal.types").HelloVisibilityStatus;
            widgetSize: number | null;
        };
        landedCostSettings: {
            defaultNativeCurrency: import("../../types/generated/graphql.internal.types").CurrencyCode | null;
            landedCostGuarantee: import("../../types/generated/graphql.internal.types").LandedCostGuaranteeType | null;
        };
        onlineStoreSettings: {
            allowedDomains: Array<string>;
            url: string;
        };
        organizationId: string;
        shippingZones: Array<{
            countryCodes: Array<import("../..").CountryCode> | null;
        } | null> | null;
    }, "cart"> & import("../../types/generated/graphql.internal.types").LandedCostSettingsQuery & {
        genericSettings: import("../..").GenericZonosSettings | null;
    } & {
        inclusivePriceConfigurations: import("../..").InclusivePriceConfigurationResponse;
        organization: {
            id: string;
            name: string;
            references: {
                storeId: number | null;
            } | null;
        };
    };
    storeFavicon: string;
    storeId: number;
    storeLogo: string;
    zonosApiKey: string;
} | null>;
