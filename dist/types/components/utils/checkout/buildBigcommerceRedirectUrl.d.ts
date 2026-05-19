/**
 * Build an absolute redirect URL used by the BigCommerce checkout flows to
 * navigate between the BC native `/checkout` page and the Zonos international
 * checkout at `/`.
 *
 * Carries over the `zonosQaUrl` query param from the current URL (when
 * present) so the preview Zonos elements build keeps loading after the
 * redirect, and sets `zonosTestMode=1` when test mode is active so the
 * destination page continues to use the test credentials.
 */
export declare const buildBigcommerceRedirectUrl: (pathname: string) => string;
