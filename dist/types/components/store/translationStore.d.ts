import { stringsBase } from "./translationStore/strings.base";
import type { Locale_ElementsSupportedLocationCode_Enum } from "../../types/generated/graphql.frontend.types";
type TranslationStore = {
    translatedChunks: typeof stringsBase;
};
declare const translationStore: TranslationStore;
declare const translationStoreUpdateLanguage: (language: Locale_ElementsSupportedLocationCode_Enum | {
    _placeholder?: never;
}) => void;
/**
 * Extracts variables pattern "[pattern]" from a string
 * @example
 * type Variables = ExtractVariables<'[percentage] GST due on any order above [threshold].'>
 *
 * // Variables = 'percentage' | 'threshold'
 */
type ExtractVariables<S extends string> = S extends `${infer _Start}[${infer Var}]${infer End}` ? Var | ExtractVariables<End> : never;
/**
 * Require second argument to be an object with keys that match the variables in the string. If no variables are present, second argument is optional.
 * @example
 * type Params = TranslateParams<'[percentage] GST due on any order above [threshold].'>
 * // Params = ['[percentage] GST due on any order above [threshold].', variables: { percentage: string, threshold: string }]
 */
type TranslateParams<T extends string> = ExtractVariables<T> extends never ? [T, variables?: never] : [T, variables: Record<ExtractVariables<T>, string>];
/**
 * Translate a string with variables if variable pattern is present in the string
 * @example
 * // Require variables:
 * translate('[percentage] GST due on any order above [threshold].', { percentage: '5%', threshold: '$100' })
 * // No variables:
 * translate('Above de minimis threshold for')
 */
declare const translate: <T extends "Shipping" | "Email" | "Name" | "Guaranteed" | "Country" | "Customer" | "Hide" | "Delivery" | "Payment" | "Above de minimis threshold for" | "Address" | "Address line 1" | "Address line 2" | "Are you sure?" | "Back" | "Billing" | "Billing address" | "Cancel" | "Cart subtotal" | "City" | "Close" | "Contact" | "Continue to shipping" | "Customer information" | "Delivery options" | "Don't close" | "Duties and taxes will be applied to items and shipping." | "Duties will apply to all orders" | "Duties, taxes, and fees" | "Error creating Checkout" | "Error updating Checkout" | "Expected delivery" | "First name" | "Go to payment" | "Keep shopping" | "Know about duties and taxes before you buy. Shop with confidence!" | "Last name" | "Missing required fields. Make sure all fields are completed." | "No shipping method selected" | "No shipping methods found - please review and update your address details by selecting the \"Customer\" tab above. If you continue to encounter issues, contact our support team for assistance." | "No shipping methods found - try editing your address or contacting support if the error persists" | "Nothing due at the door" | "Order is over the de minimis threshold for both duty and tax" | "Order total" | "Orders to [countryName] must be over [threshold] to ship." | "Pay" | "Payment failed" | "Payment failed. Please try another payment method." | "Payment method" | "Payment processing. We'll update you when payment is received." | "Phone number" | "Please ensure your text uses the Latin alphabet only (A-Z, a-z)." | "Postal code" | "Powered by" | "Prepay duties and taxes at checkout" | "Reload" | "Restricted item" | "Restricted items found" | "Search countries" | "See duty and tax thresholds" | "Select a country" | "Select a language" | "Session timed out" | "Shipping address same as billing" | "Shipping method" | "Show" | "Something went wrong." | "Spend" | "State" | "State/Province" | "Taxes will apply to all orders" | "The following items are unable to be shipped to your country and are not included in your cart total." | "There's been an error creating your checkout session. Please reload and try again or contact support if the error persists" | "There's been an error updating your checkout session. Please reload and try again or contact support if the error persists" | "To ensure delivery all address details must be in Latin characters." | "Translated address" | "Update address" | "Update your address" | "We couldn't complete your payment. Please verify the payment details and try again." | "We've sent an email confirmation of the order details for your review. And our team is carefully preparing your order so it arrives on time." | "Welcome to [storeName]!" | "Welcome!" | "What you entered" | "Would you like to close checkout and return to the site?" | "You're all set!" | "Your checkout session has expired. Please reload the page to continue." | "Your payment went through successfully! Thank you for shopping with us! We hope you had an enjoyable experience and your support means the world to us." | "[percentage] GST due on any order above [threshold] along with an import entry transaction fee and MPI levy." | "[percentage] GST due on any order above [threshold]." | "business days" | "click to learn more" | "duty free" | "restricted items" | "tax free">(...[key, replacement]: TranslateParams<T>) => string;
export { translate, translationStore, translationStoreUpdateLanguage };
