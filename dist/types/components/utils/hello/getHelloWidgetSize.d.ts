/**
 * Default Hello widget diameter in pixels. Matches the legacy size that
 * shipped before `widgetSize` became configurable, so existing merchants
 * continue to render unchanged when they have not set a value.
 */
export declare const HELLO_WIDGET_DEFAULT_SIZE = 18;
export declare const HELLO_WIDGET_MIN_SIZE = 18;
export declare const HELLO_WIDGET_MAX_SIZE = 64;
/**
 * Resolve the configured Hello widget size to a safe pixel value. Falls back
 * to the default when the merchant has not configured a size, and clamps
 * out-of-range values so the widget always renders within the supported
 * design bounds.
 */
export declare const getHelloWidgetSize: (configuredSize: number | null | undefined) => number;
