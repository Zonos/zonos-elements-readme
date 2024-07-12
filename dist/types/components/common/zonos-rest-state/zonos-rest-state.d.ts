import type { RestStateType } from "../../utils/restStateType";
export declare class ZonosRestState {
    /**
     * The subtitle of the rest state
     */
    restStateSubtitle: string;
    /**
     * The title of the rest state
     */
    restStateTitle: string;
    /**
     * The type of rest state
     */
    restStateType: RestStateType;
    /**
     * Whether or not the image failed to load
     */
    isErrorImageLoad: boolean;
    private getImageRestState;
    render(): any;
}
