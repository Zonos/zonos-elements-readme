import { type EventEmitter } from '../../../stencil-public-runtime';
export declare class ZonosInput {
    el: HTMLZonosInputElement;
    /**
     * Value of the input
     */
    inputValue: string;
    /**
     * Input label
     */
    inputLabel: string;
    /**
     * Input size
     */
    inputSize: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Disables the input
     */
    isDisabled: boolean;
    /**
     * Error state of the input
     */
    isError: boolean;
    /**
     * Placeholder for the input
     */
    inputPlaceholder: string;
    /**
     * Event to emit when input value changes
     */
    inputChange: EventEmitter<string>;
    value: string;
    onInputValueChange(newValue: string): void;
    render(): any;
}
