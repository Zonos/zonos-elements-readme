import type { ElementsUiStyle, ElementsUiTheme } from "../../../types/generated/graphql.customer.types";
import type { Color } from "../../../types/styles/Color";
export declare class ZonosButton {
    ele: HTMLZonosButtonElement;
    /**
     * The color of the button text and svg
     */
    buttonColor?: Color | (string & {
        _placeholder?: never;
    });
    /**
     * The color of the button
     * **NOTE**: If the button `variant` is set to 'standard', backgroundColor will be disregarded
     */
    backgroundColor?: Color | (string & {
        _placeholder?: never;
    });
    /**
     * The border style of the button
     * @default ROUNDED
     */
    borderStyle?: ElementsUiStyle;
    /**
     * Whether or not the button is disabled
     * @note Prop should not conflict name with native html attribute if the prop is also affected by another prop.
     * The issue is the component has internal disabled @prop(). @prop decorator is to watch the update of the attribute of the component in the dom.
     * And `disabled` prop is not an only factor to determine the component is disabled. isLoading @prop() also affect that.
     * <Host> is also referred to a component itself, if disabled prop is true, the `zonos-button` will have disabled attribute.
     *  So let's say when the loading state is true, and the component consume the zonos-button doesn't pass the disabled prop down.
     * It accidentally turns the disabled prop on even thought the disabled state is not changed from the outside.
     */
    isDisabled: boolean;
    /**
     * The icon element to display
     * @default null
     */
    icon: HTMLZonosIconElement | null;
    /**
     * Whether or not the icon is on the right
     * @default false
     */
    iconRight?: boolean;
    /**
     * The size of the button
     * @default 'sm'
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * The variance of the button
     * @note If the button `variant` is set to 'standard', backgroundColor will be disregarded
     * @default standard
     */
    variant: 'primary' | 'success' | 'subtle' | 'outline' | 'standard' | 'danger' | 'warning';
    /**
     * Whether or not the button has a background
     * @default false
     */
    noBackground: boolean;
    /**
     * Whether or not the button has a box shadow
     */
    withBoxShadow: boolean;
    /**
     * Whether or not the button has a left padding
     */
    noPaddingLeft: boolean;
    /**
     * Whether or not the button has a right padding
     */
    noPaddingRight: boolean;
    /**
     * Whether or not the button is loading
     */
    loading: boolean;
    /**
     * The content alignment within the button
     * @default 'center'
     */
    justifyContent: 'center' | 'flex-end' | 'flex-start';
    /**
     * The theme of the button
     */
    theme?: ElementsUiTheme;
    /**
     * Whether or not the button has an icon
     */
    hasIcon: boolean;
    /**
     * Detect if the icon changes and update the state accordingly
     */
    iconChangeHandler(): void;
    /**
     * Whether or not the button has content
     */
    hasContent: boolean;
    clickHandler(event: MouseEvent): void;
    /**
     * Detect if the button has an content
     */
    private handleSlotChange;
    private getColorVarProperty;
    private getButtonStyle;
    componentWillLoad(): void;
    render(): any;
}
