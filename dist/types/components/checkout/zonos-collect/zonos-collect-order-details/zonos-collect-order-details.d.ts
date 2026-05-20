import { type EventEmitter } from '../../../../stencil-public-runtime';
export declare class ZonosCollectOrderDetails {
    /**
     * Whether or not the component is being rendered with mobile styles
     */
    mobile: boolean;
    /**
     * Whether or not to show the collapse icon
     * This is controled from the collapsed state of the zonos-collapse component
     * to show the collapse icon
     */
    collapsed: boolean;
    /**
     * The landed cost id that is used to fetch the shipping address
     */
    landedCostId: string;
    isMobile: boolean;
    collapseState: boolean;
    /**
     * Emits the collapsed state of the zonos-collapse component
     */
    collapseClicked: EventEmitter<boolean>;
    handleCollapseChangeFromProp(collapsed: boolean): void;
    handleCollapseChange(collapsed: boolean): void;
    handleWindowResize(): void;
    componentWillLoad(): void;
    private renderShippingAddress;
    render(): any;
}
