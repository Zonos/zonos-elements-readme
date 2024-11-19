import type { ZonosSettingsQuery } from "../../../types/generated/graphql.internal.types";
export declare const getZonosSettings: () => Promise<{
    errors: import("../../..").JsonError[];
    json: null;
    zonosMode: "production" | "test" | null;
} | {
    errors: never[];
    json: ZonosSettingsQuery | null;
    zonosMode: "production" | "test" | null;
}>;
