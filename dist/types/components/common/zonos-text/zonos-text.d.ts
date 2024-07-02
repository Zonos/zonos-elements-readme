import type { Color } from "../../../types/styles/Color";
import { type FontWeight, type Size, type Type } from "../../../types/styles/Text";
export declare class ZonosText {
    /**
     * The icon element to display
     */
    textColor: Color | (string & {
        _placeholder?: never;
    });
    /**
     * The size of the text
     */
    size?: Size;
    /**
     * Type of the text to display
     */
    type: Type;
    /**
     * The weight of the text
     */
    weight?: FontWeight;
    /**
     * Whether or not the component is ready
     */
    ready: boolean;
    componentDidRender(): void;
    render(): any;
}
