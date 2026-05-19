import type { HelloDesktopLocation, HelloMobileLocation, HelloSettingFragment } from "../../../types/generated/graphql.internal.types";
export declare const initHello: (helloSettings: Omit<Partial<HelloSettingFragment>, "mobileLocation" | "desktopLocation"> & {
    desktopLocation?: HelloDesktopLocation | null;
    mobileLocation: HelloMobileLocation | null;
    notFoundElementFallback: HelloMobileLocation | null;
    visibilityStatus?: "ENABLED" | "DISABLED";
}) => Promise<void>;
