import type { HelloDesktopLocation, HelloMobileLocation, HelloSettingFragment } from "../../../types/generated/graphql.internal.types";
export type HelloPlacement = NonNullable<HelloSettingFragment['desktopLocationOverride']>;
export type ResolvedFloatPlacement = {
    anchor: HelloDesktopLocation | HelloMobileLocation | null | undefined;
    horizontalOffset: number | null;
    isMobileWindow: boolean;
    isOnLeft: boolean;
    isOnTop: boolean;
    shouldFloat: boolean;
    verticalOffset: number | null;
};
/**
 * Resolve params use distinct names for the three precedence sources:
 * - `component*Location` — Stencil `@Prop` enum override
 * - `settings*Placement` — Hello settings `HelloPlacement` (anchor + offsets)
 * - `*Location` — Hello settings location enum fallback
 */
export type ResolveHelloFloatPlacementParams = {
    anchorElementSelector?: string;
    animateFromLeftOverride?: boolean;
    componentDesktopLocation?: HelloDesktopLocation;
    componentMobileLocation?: HelloMobileLocation;
    desktopLocation?: HelloDesktopLocation | null;
    isMobileWindow: boolean;
    mobileLocation?: HelloMobileLocation | null;
    settingsDesktopPlacement?: HelloPlacement | null;
    settingsMobilePlacement?: HelloPlacement | null;
    shouldAnimateLeftDesktop?: () => boolean;
};
/**
 * Resolve active Hello float placement per viewport.
 * Precedence: component enum prop → settings HelloPlacement → settings location enum.
 *
 * When the winning source is a component enum prop or settings `HelloPlacement`,
 * `shouldFloat` is always true — including when `anchorElementSelector` is set.
 * That matches existing prop-forced float behavior and FR-006 / data-model rules
 * (placement implies floating; enum fallback still respects the anchor selector).
 */
export declare const resolveHelloFloatPlacement: (params: ResolveHelloFloatPlacementParams) => ResolvedFloatPlacement;
