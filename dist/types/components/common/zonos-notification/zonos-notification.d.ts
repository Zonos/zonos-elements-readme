export type NotificationInit = {
    message: string;
    /**
     * Time in milliseconds
     * @default 4000
     */
    timeout?: number;
    /**
     * Type of notification
     * @default 'success'
     */
    type?: 'error' | 'success' | 'warning';
};
type NotificationItem = NotificationInit & {
    id: string;
    transitionClass: 'show' | '';
};
export declare class ZonosNotification {
    notificationArray: NotificationItem[];
    /**
     * Show a notification
     */
    showNotification(notification: NotificationInit): Promise<void>;
    private updateTransitionClass;
    /**
     * Remove a notification
     */
    private removeNotification;
    render(): any;
}
export {};
