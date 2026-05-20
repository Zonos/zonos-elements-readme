type ShortAddressCodeValidationResult = {
    error: 'Short address code is required.' | 'Invalid short address code format. Must be 4 letters and 4 numbers.';
    valid: false;
} | {
    error: null;
    valid: true;
};
export declare const shortAddressCodeValidationResult: ({ shippingCountry, shortAddressCode, }: {
    shippingCountry: string;
    shortAddressCode: string;
}) => ShortAddressCodeValidationResult;
export {};
