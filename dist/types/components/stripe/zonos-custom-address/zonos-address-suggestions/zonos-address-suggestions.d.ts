import { type EventEmitter } from '../../../../stencil-public-runtime';
import type { EventPayloadMap, IframeSuggestionsResponsePayload } from "../../../utils/iframe/IframeHelpers";
export declare class ZonosAddressSuggestions {
    el: HTMLZonosAddressSuggestionsElement;
    /**
     * Type of the address suggestions
     */
    type: 'billing' | 'shipping';
    /**
     * Suggestions to display
     */
    suggestions: IframeSuggestionsResponsePayload['suggestions'];
    /**
     * Selected suggestion id
     */
    selectedSuggestionId: string | null;
    /**
     * Local suggestions to display
     */
    localSuggestions: IframeSuggestionsResponsePayload['suggestions'];
    lastHoveredSuggestionId: string | null;
    /**
     * Event emitted when a suggestion is selected
     */
    suggestionSelected: EventEmitter<EventPayloadMap['placeSelected']>;
    suggestionsChanged(): void;
    /**
     * Handle clicks outside of the suggestions component
     */
    private handleClickOutside;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    /**
     * Split text into segments based on matches array for highlighting
     */
    private getHighlightedText;
    render(): any;
}
