import { type EventEmitter } from '../../../../../stencil-public-runtime';
import type { EnteredInfo, TranslatedAddressObject } from "../../../../../types/checkout/TranslatedText";
export declare class ZonosAddressForm {
    /**
     * Address to show up
     */
    currentAddress: EnteredInfo;
    /**
     * Translated address
     */
    translatedAddress: TranslatedAddressObject;
    /**
     * Title for the address form
     */
    addressType: 'shipping' | 'billing';
    /**
     * Event to emit when the address is changed
     */
    addressChange: EventEmitter<EnteredInfo>;
    /**
     * Local address to update
     */
    localAddress: EnteredInfo;
    private watchCurrentAddress;
    private onInputChange;
    componentWillLoad(): void;
    render(): any;
}
