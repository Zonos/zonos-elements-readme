import type { EnteredInfo } from "../../../../../types/checkout/TranslatedText";
export declare class ZonosAddressDisplay {
    /**
     * Address to show up
     */
    currentAddress: EnteredInfo;
    /**
     * Title for the address display
     */
    addressType: 'shipping' | 'billing';
    render(): any;
}
