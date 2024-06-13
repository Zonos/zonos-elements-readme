import { type EventEmitter } from '../../../stencil-public-runtime';
import type { ElementsUiStyle } from "../../../types/generated/graphql.customer.types";
export declare class ZonosDialog {
    /**
     * Whether or not the dialog is open
     * @default false
     */
    open: boolean;
    /**
     * The header text for the dialog
     */
    headerText: string;
    /**
     * The width of the dialog
     * @default 460px
     */
    width: string;
    /**
     * The height of the dialog (max-width still 90vh)
     */
    height?: string;
    /**
     * The min height of the dialog
     */
    minHeight?: string;
    /**
     * Whether or not to show the header
     * @default false
     */
    noHeader: boolean;
    /**
     * Whether or not to have body padding
     * @default false
     */
    noBodyPadding: boolean;
    /**
     * Whether or not to have body padding
     * @default false
     */
    noBorder: boolean;
    /**
     * The border style of the button
     * @default ROUNDED
     */
    borderStyle?: ElementsUiStyle;
    /**
     * Whether or not to show the close button
     * @default false
     */
    noCloseButton: boolean;
    /**
     * Whether or not to close the dialog when clicking outside of it
     * @default false
     */
    noClickOutside: boolean;
    /**
     * Flag to determine if the checkout is on mobile
     */
    mobile: boolean;
    /**
     * Load loading spinner for the dialog or not
     */
    isLoading: boolean;
    isMobile: boolean;
    /**
     * Close dialog button click
     */
    closeDialog: EventEmitter<void>;
    handleWindowResize(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private isMobileMode;
    private closeButtonHandler;
    private clickOutsideDialogHandler;
    componentDidLoad(): void;
    render(): any;
}
