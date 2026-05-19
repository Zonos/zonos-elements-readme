import type { CountryCode } from "../../types/generated/graphql.internal.types";
/**
 * Retrieve the zCountry from the URL or session storage.
 */
export declare const getOverridenZCountry: () => CountryCode | null;
