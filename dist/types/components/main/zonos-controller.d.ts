import { type EventEmitter } from '../../stencil-public-runtime';
import type { Stripe } from '@stripe/stripe-js';
import type { NotificationInit } from "../common/zonos-notification/zonos-notification";
import { type AppearanceConfig } from "../store/zonosStore";
import type { LoadZonosParamsConfig } from "../../scripts/_zonosBase";
import type { CountryCode } from "../../types/generated/graphql.customer.types";
export declare class ZonosController {
    /**
     * The zonos config object
     */
    config: LoadZonosParamsConfig;
    /**
     * The zonos api key
     */
    zonosApiKey: string;
    /**
     * Event emitted when stripe is initialized
     */
    stripeInitEvent?: EventEmitter<{
        publishableKey: string;
    }>;
    /**
     * Method to initialize checkout element
     */
    initCheckoutElement(stripe: Stripe): Promise<void>;
    /**
     * Init zonos notification
     */
    private initZonosNotification;
    /**
     * Setup google font
     */
    setupGoogleFont(overrideFont?: string): Promise<void>;
    componentWillLoad(): Promise<void>;
    /**
     * Show notification
     */
    showNotification(notification: NotificationInit): Promise<void>;
    /**
     * Override the setting
     * @param config config that need to override the default setting
     */
    overrideConfig(config: LoadZonosParamsConfig): Promise<void>;
    /**
     * Override country code for storybook
     */
    overrideCountry(countryCode: CountryCode): Promise<void>;
    /**
     * Get appearance from setting
     */
    getAppearanceSetting(): Promise<AppearanceConfig>;
    /**
     * Update the organizationName
     */
    updateOrganizationName(organizationName: string): Promise<void>;
    render(): any;
}
