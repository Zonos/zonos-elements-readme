export declare const iframeServices: {
    readonly GOOGLE_PLACES: "zonos--private-iframe-google-places-service-m9bmuh7g";
};
export type IframeServiceId = (typeof iframeServices)[keyof typeof iframeServices];
export type IframeFetchSuggestionsPayload = {
    request: google.maps.places.AutocompleteRequest;
    type: 'billing' | 'shipping';
};
/**
 * Type-safe message structure for iframe communication
 */
export type IframeMessage<T extends EventPayloadKey> = {
    id: IframeServiceId;
    logType: string | null;
    payload: EventPayloadMap[T];
    type: T;
};
export type IframeSuggestionsResponsePayload = {
    suggestions: {
        id: string;
        matches: {
            endOffset: number;
            startOffset: number;
        }[];
        place: string;
    }[];
    type: 'billing' | 'shipping';
};
export type IframePlacePayload = {
    placeId: string;
    type: 'billing' | 'shipping';
};
export type IframePlaceResponsePayload = {
    placeDetails: {
        addressComponents: google.maps.places.Place['addressComponents'];
        displayName: google.maps.places.Place['displayName'];
        formattedAddress: google.maps.places.Place['formattedAddress'];
    };
    type: 'billing' | 'shipping';
};
export type InitializePayload = Record<string, never>;
export type EventPayloadMap = {
    fetchAutocompleteSuggestions: IframeFetchSuggestionsPayload;
    initializeGooglePlacesService: InitializePayload;
    onFetchAutocompleteSuggestions: IframeSuggestionsResponsePayload;
    onInitializeGooglePlacesService: InitializePayload;
    onPlaceSelected: IframePlaceResponsePayload;
    placeSelected: IframePlacePayload;
};
export type EventPayloadKey = keyof EventPayloadMap;
export type EventType = {
    [key in keyof EventPayloadMap]: IframeMessage<key>;
}[keyof EventPayloadMap];
/**
 * Base class for iframe services, being used for Iframe to communicate back to the parent window
 */
export declare class IframeService {
    private readonly targetElement;
    private readonly targetId;
    constructor(targetElement: HTMLIFrameElement | Window, targetId: IframeServiceId);
    sendMessage: <U extends EventPayloadKey>(type: U, payload: EventPayloadMap[U]) => void;
    static iframeServices: {
        readonly GOOGLE_PLACES: "zonos--private-iframe-google-places-service-m9bmuh7g";
    };
    static sendMessage: <ITarget extends Window | HTMLIFrameElement, IType extends EventPayloadKey>({ id, payload, target, type, }: {
        id: IframeServiceId;
        payload: EventPayloadMap[IType];
        target: ITarget;
        type: IType;
    }) => void;
    static injectPrivateIframe: ({ id, onload, src, }: {
        id: string;
        src: string;
        onload: (prop: HTMLIFrameElement) => void;
    }) => HTMLIFrameElement;
}
export declare const injectPrivateIframe: ({ id, onload, src, }: {
    id: string;
    src: string;
    onload: () => void;
}) => void;
