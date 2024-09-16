import type { HelloMobileLocation, HelloSettingFragment } from "../../../types/generated/graphql.customer.types";
export declare const initHello: (helloSettings: Omit<Partial<HelloSettingFragment>, 'mobileLocation'> & {
    desktopLocation?: HelloMobileLocation | null;
    mobileLocation: HelloMobileLocation | null;
    visibilityStatus?: 'ENABLED' | 'DISABLED';
}) => Promise<void>;
