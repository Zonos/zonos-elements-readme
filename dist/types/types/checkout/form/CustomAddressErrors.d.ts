export type CustomAddressErrors = {
    city: string;
    firstName: string;
    lastName: string;
    line1: string;
    phone: string;
    postalCode: string;
    /**
     * Toggle to indicate if the error message should be shown
     */
    showError: boolean;
    state: string;
};
