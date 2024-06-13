import type { StripeAddressElementChangeEvent } from '@stripe/stripe-js';
import type { CountryCode } from "../generated/graphql.customer.types";
export type TranslatedText = {
    [key: string]: string;
};
export type EnteredInfo = {
    city: string;
    country: CountryCode;
    email: string;
    line1: string;
    line2: string;
    name: string;
    phone: string;
    postal_code: string;
    state: string;
};
type ValidateAddressFields = Omit<StripeAddressElementChangeEvent['value']['address'], 'country'> & {
    name: string;
};
export type TranslatedAddressObject = {
    [key in keyof ValidateAddressFields]?: TranslatedText;
};
export {};
