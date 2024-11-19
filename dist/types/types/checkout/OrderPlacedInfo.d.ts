export type OrderPlacedInfo = {
    cartId: string | null;
    /**
     * Checkout session id the placed order attached to
     */
    checkoutSessionId: string;
    /**
     * Dgs order id
     */
    orderId: string | null;
    /**
     * Timestamp of the order placement (will be set right after the payment is confirmed)
     */
    time: number;
    /**
     * Legacy order id or order TSID
     */
    zonosOrderNumber: string | null;
};
