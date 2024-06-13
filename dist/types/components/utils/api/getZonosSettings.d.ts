import type { ZonosSettingsQuery } from "../../../types/generated/graphql.customer.types";
export declare const getZonosSettings: () => Promise<{
    errors: import("../../..").JsonError[];
    json: null;
} | {
    errors: never[];
    json: ZonosSettingsQuery | null;
}>;
