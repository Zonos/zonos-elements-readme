import type { ZonosSettings } from "../../../types/utils/ZonosSettings";
export declare const getZonosSettings: () => Promise<{
    errors: import("../../..").JsonError[];
    json: null;
    zonosMode: "production" | "test" | null;
} | {
    errors: never[];
    json: ZonosSettings | null;
    zonosMode: "production" | "test" | null;
}>;
