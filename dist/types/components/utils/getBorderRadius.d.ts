import type { ElementsUiStyle } from "../../types/generated/graphql.customer.types";
/**
 * Get the border radius for the elements based on the style
 * @param overrideBorderStyle
 * @returns
 */
export declare const getBorderRadius: (params?: {
    /**
     * This is the custom round radius for component that 10px is too much for them
     */
    customRoundRadius?: string;
    overrideBorderStyle?: ElementsUiStyle;
}) => string;
