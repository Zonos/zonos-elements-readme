import { type EventEmitter } from '../../../stencil-public-runtime';
export declare class ZonosConfirmDialog {
    el: HTMLZonosConfirmDialogElement;
    /**
     * Dialog title text
     * @default "Are you sure?"
     */
    dialogTitle: string;
    /**
     * Dialog intent (for icon and button color)
     * @default "info"
     */
    dialogIntent: 'info' | 'danger' | 'warn';
    /**
     * Dialog subtitle text
     * @default "" No subtitle
     */
    dialogSubtitle: string;
    /**
     * Submit button main color
     */
    submitBtnColor?: string;
    /**
     * Confirm button text
     */
    dialogConfirmBtnText: string;
    /**
     * Cancel button text
     */
    dialogCancelBtnText: string;
    /**
     * Event to emit when the "Confirm" button is clicked
     */
    confirmClicked: EventEmitter<void>;
    /**
     * Event to emit when the "Cancel" button is clicked
     */
    cancelClicked: EventEmitter<void>;
    /**
     * Whether or not the dialog is open
     */
    isMobile: boolean;
    /**
     * Whether or not the dialog is open
     */
    dialogOpen: boolean;
    /**
     * Whether or not to close the dialog when clicking outside of it
     * @default false
     */
    noClickOutside: boolean;
    handleKeyDown(ev: KeyboardEvent): void;
    private focusDialog;
    private confirmDialogHandler;
    private closeDialogHandler;
    private clickOutsideDialogHandler;
    private renderIcon;
    private getButtonConfirmVariant;
    render(): any;
}
