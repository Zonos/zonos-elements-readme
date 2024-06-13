import type { Appearance } from '@stripe/stripe-js';
import type { ElementsUiStyle, ElementsUiTheme } from "../../types/generated/graphql.customer.types";
export declare const defaultVariable: ({ borderStyle, theme, }: {
    borderStyle?: ElementsUiStyle;
    theme: ElementsUiTheme;
}) => Appearance['variables'];
