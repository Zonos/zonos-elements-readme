export declare const setupCartDataWithSettings: (cartId: string) => Promise<{
    cartData: import("../..").NormalizedTempCart;
    settings: Omit<{
        credentialTokenId: string;
        organizationId: string;
        cart: {
            id: string;
            type: import("../../types/generated/graphql.internal.types").CartType | null;
            createdAt: string;
            expiresAt: string | null;
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
            adjustments: Array<{
                amount: number;
                currencyCode: import("../../types/generated/graphql.internal.types").CurrencyCode;
                description: string | null;
                productId: string | null;
                sku: string | null;
                type: import("../../types/generated/graphql.internal.types").CartAdjustmentType;
            }>;
            items: Array<{
                id: string;
                amount: number;
                name: string | null;
                description: string | null;
                countryOfOrigin: import("../..").CountryCode | null;
                currencyCode: import("../../types/generated/graphql.internal.types").CurrencyCode;
                itemType: import("../../types/generated/graphql.internal.types").ItemType | null;
                imageUrl: string | null;
                quantity: number;
                sku: string | null;
                productId: string;
                measurements: Array<{
                    type: import("../../types/generated/graphql.internal.types").ItemMeasurementType;
                    unitOfMeasure: import("../../types/generated/graphql.internal.types").ItemUnitOfMeasure;
                    value: number;
                } | null> | null;
                metadata: Array<{
                    key: string | null;
                    value: string | null;
                } | null> | null;
                attributes: Array<{
                    key: string | null;
                    value: string | null;
                } | null> | null;
            }>;
            metadata: Array<{
                key: string;
                value: string;
            }>;
        };
        shippingZones: Array<{
            countryCodes: Array<import("../..").CountryCode> | null;
        } | null> | null;
        helloSettings: {
            desktopLocation: import("../..").HelloDesktopLocation;
            allowedDomains: Array<string>;
            anchorElementSelector: string;
            cartUrlPattern: string | null;
            currencyBehavior: import("../../types/generated/graphql.internal.types").HelloCurrencyBehavior;
            currencyElementSelector: string;
            excludedUrlPatterns: Array<string>;
            countryOverrideBehavior: import("../../types/generated/graphql.internal.types").HelloCountryOverrideBehavior;
            widgetSize: number | null;
            id: string;
            createdAt: string;
            createdBy: string;
            mobileLocation: import("../..").HelloMobileLocation;
            mode: import("../../types/generated/graphql.internal.types").Mode;
            organization: string;
            updatedAt: string;
            updatedBy: string;
            homepageUrlPattern: string | null;
            productDetailUrlPattern: string | null;
            productListUrlPattern: string | null;
            peekMessageDelay: number;
            peekMessageBehavior: import("../../types/generated/graphql.internal.types").HelloPeekMessageBehavior;
            restrictionBehavior: import("../../types/generated/graphql.internal.types").HelloRestrictionBehavior;
            dutyTaxEstimationBehavior: import("../../types/generated/graphql.internal.types").HelloEstimateBehavior;
            productAddToCartElementSelector: string | null;
            productDescriptionElementSelector: string | null;
            productPriceElementSelector: string | null;
            productTitleElementSelector: string | null;
            visibilityStatus: import("../../types/generated/graphql.internal.types").HelloVisibilityStatus;
            desktopLocationOverride: {
                anchor: import("../..").HelloDesktopLocation;
                horizontalOffset: number;
                verticalOffset: number;
            } | null;
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
            mobileLocationOverride: {
                anchor: import("../..").HelloDesktopLocation;
                horizontalOffset: number;
                verticalOffset: number;
            } | null;
        };
        appearanceSettings: {
            colorPrimary: string;
            colorSecondary: string;
            fontFamily: string;
            logoUrl: string;
            style: import("../..").ElementsUiStyle;
            supportedLocales: Array<string> | null;
            theme: import("../..").ElementsUiTheme;
            zonosAttribution: import("../../types/generated/graphql.internal.types").ZonosAttribution | null;
            createdAt: string;
            createdBy: string;
            id: string;
            mode: import("../../types/generated/graphql.internal.types").Mode;
            organization: string;
            updatedAt: string;
            updatedBy: string;
        };
        checkoutSettings: {
            disabledCountries: Array<import("../..").CountryCode> | null;
            allowedCharacterSets: import("../../types/generated/graphql.internal.types").AllowedCharacterSets;
            captureDelay: number;
            defaultCartExpiration: number;
            companyFieldsStatus: import("../../types/generated/graphql.internal.types").CheckoutCompanyFieldsStatus;
            domesticElementSelector: string | null;
            allowedSettlementCurrencies: import("../../types/generated/graphql.internal.types").AllowedSettlementCurrencies;
            successBehavior: import("../../types/generated/graphql.internal.types").CheckoutSuccessBehavior;
            customHTML: string;
            mode: import("../../types/generated/graphql.internal.types").Mode;
            successRedirectUrl: string;
            placeOrderButtonSelector: string | null;
            createdAt: string;
            createdBy: string;
            updatedAt: string;
            updatedBy: string;
            id: string;
            organization: string;
            subscriptionStatus: import("../../types/generated/graphql.internal.types").CheckoutSubscriptionStatus;
            visibilityStatus: import("../../types/generated/graphql.internal.types").CheckoutVisibilityStatus;
            merchantPolicyLinks: {
                termsAndConditions: {
                    link: string | null;
                } | null;
                privacyPolicy: {
                    link: string | null;
                } | null;
                refundPolicy: {
                    link: string | null;
                } | null;
                shippingPolicy: {
                    link: string | null;
                } | null;
                warrantyPolicy: {
                    link: string | null;
                } | null;
                euWithdrawalPolicy: {
                    maximumReturnShippingEstimate: number | null;
                    currencyCode: import("../../types/generated/graphql.internal.types").CurrencyCode;
                    status: import("../../types/generated/graphql.internal.types").NotificationActiveStatus | null;
                } | null;
            };
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
            externalPaymentMethods: Array<{
                status: import("../../types/generated/graphql.internal.types").ExternalPaymentMethodStatus;
                type: import("../../types/generated/graphql.internal.types").ExternalPaymentMethodType;
            }> | null;
            analyticsProviders: Array<{
                status: import("../../types/generated/graphql.internal.types").AnalyticsProviderStatus;
                type: import("../../types/generated/graphql.internal.types").AnalyticsProviderType;
            }>;
            externalServiceTokens: Array<{
                token: string;
                type: import("../../types/generated/graphql.internal.types").ExternalServiceTokenType;
            }>;
            varianceTestRegistrations: Array<{
                testKey: string;
                varianceAllocation: Array<{
                    percentage: number;
                    variantKey: string;
                }>;
            }> | null;
            plugins: {
                bigcommerce: {
                    allowBypassQuery: boolean;
                };
            };
        };
        onlineStoreSettings: {
            allowedDomains: Array<string>;
            url: string;
        };
        landedCostSettings: {
            landedCostGuarantee: import("../../types/generated/graphql.internal.types").LandedCostGuaranteeType | null;
            defaultNativeCurrency: import("../../types/generated/graphql.internal.types").CurrencyCode | null;
        };
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
