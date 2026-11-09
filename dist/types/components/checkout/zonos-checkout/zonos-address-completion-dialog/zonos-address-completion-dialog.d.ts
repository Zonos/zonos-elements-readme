import { type EventEmitter } from '../../../../stencil-public-runtime';
import type { AddressCompletionSubmit } from "../../../utils/checkout/applyAddressCompletion";
import type { MissingShippingField } from "../../../utils/checkout/getMissingRequiredShippingFields";
import type { EnteredInfo } from "../../../../types/checkout/TranslatedText";
export declare class ZonosAddressCompletionDialog {
    /**
     * Whether or not the continue button is loading
     */
    continueLoading: boolean;
    /**
     * Whether or not the dialog is open
     */
    dialogOpen: boolean;
    /**
     * Whether or not the dialog is rendered in mobile mode
     */
    isMobile: boolean;
    /**
     * The Zonos-required fields still missing from the selected address
     */
    missingFields: MissingShippingField[];
    /**
     * The shipping address selected from Stripe, shown read-only for context
     */
    shippingAddress: EnteredInfo;
    /**
     * Button color of the submit button
     */
    submitBtnColor?: string;
    /**
     * Button type of the submit button
     */
    submitBtnType?: HTMLZonosButtonElement['variant'];
    /**
     * Close dialog button click
     */
    closeCompletionDialog: EventEmitter<void>;
    /**
     * Emitted with the captured values when the customer completes the missing fields
     */
    completionSubmit: EventEmitter<AddressCompletionSubmit>;
    /**
     * Local values for the captured fields, keyed by the missing field key
     */
    values: AddressCompletionSubmit;
    /**
     * Whether to show validation errors (after a submit attempt with empty fields)
     */
    showError: boolean;
    /**
     * The dialog stays mounted, so clear any previously-entered values whenever it opens.
     * Without this, values typed for one address could be reapplied to a different address
     * the next time the dialog opens.
     */
    watchDialogOpen(isOpen: boolean): Promise<void>;
    private isFieldMissing;
    /**
     * A captured field is valid when it has a value. Postal code additionally enforces the same
     * minimum length as the landed-cost readiness / detection check, so the dialog can't emit a
     * too-short postal code that would still be considered "missing" downstream.
     */
    private isFieldValid;
    private getFieldError;
    private updateValue;
    private isComplete;
    private submitHandler;
    private renderInput;
    private renderField;
    /**
     * When the last name is missing, render both first and last name inputs so the customer can
     * correct the full name together (Link's single name input often yields only a first name).
     */
    private renderNameFields;
    render(): any;
}
