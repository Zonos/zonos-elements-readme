import { type EventPayloadMap } from "./IframeHelpers";
/**
 * Checkout service for managing address selection and validation
 */
export declare class CheckoutAddressService {
    private googlePlaceInitialized;
    private readonly googlePlaces;
    private suggestionsCallback?;
    private placeSelectedCallback?;
    constructor();
    private initialize;
    onInitializeGooglePlacesService(callback: () => void): () => void;
    isGooglePlaceInitialized(): boolean;
    /**
     * Set up event listeners for address suggestions
     */
    onAddressSuggestions(callback: (props: EventPayloadMap['onFetchAutocompleteSuggestions']) => void): () => void;
    /**
     * Set up event listeners for selected address
     */
    onAddressSelected(callback: (response: EventPayloadMap['onPlaceSelected']) => void): () => void;
    /**
     * Request address suggestions based on user input
     */
    getAddressSuggestions({ country, query, type, }: {
        country: string;
        query: string;
        type: 'billing' | 'shipping';
    }): void;
    /**
     * Select an address from suggestions
     */
    selectAddress({ placeId, type, }: {
        placeId: string;
        type: 'billing' | 'shipping';
    }): void;
    destroy(): void;
}
