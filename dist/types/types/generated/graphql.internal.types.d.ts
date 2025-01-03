import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    Boolean: {
        input: boolean;
        output: boolean;
    };
    DateTime: {
        input: string;
        output: string;
    };
    Decimal: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    ID: {
        input: string;
        output: string;
    };
    Int: {
        input: number;
        output: number;
    };
    JSON: {
        input: Record<string, unknown>;
        output: Record<string, unknown>;
    };
    String: {
        input: string;
        output: string;
    };
    ZonedDateTime: {
        input: string;
        output: string;
    };
};
export declare const accountHolderType: {
    readonly Company: "COMPANY";
    readonly Individual: "INDIVIDUAL";
};
export type AccountHolderType = (typeof accountHolderType)[keyof typeof accountHolderType];
export declare const accountingFeeType: {
    readonly BugFix: "BUG_FIX";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly ExistingConnectAdjustmentCredits: "EXISTING_CONNECT_ADJUSTMENT_CREDITS";
    readonly ExistingCreditNotes: "EXISTING_CREDIT_NOTES";
    readonly ExistingInvoiceLineRecordCredits: "EXISTING_INVOICE_LINE_RECORD_CREDITS";
    readonly ExistingInvoiceVoided: "EXISTING_INVOICE_VOIDED";
    readonly General: "GENERAL";
    readonly Item: "ITEM";
    readonly LandedCostGuarantee: "LANDED_COST_GUARANTEE";
    readonly MerchantProcessing: "MERCHANT_PROCESSING";
    readonly PaypalCancel: "PAYPAL_CANCEL";
    readonly PaypalOrder: "PAYPAL_ORDER";
    readonly PaypalRefund: "PAYPAL_REFUND";
    readonly Shipping: "SHIPPING";
    readonly Transaction: "TRANSACTION";
};
export type AccountingFeeType = (typeof accountingFeeType)[keyof typeof accountingFeeType];
export declare const additionalVerificationStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type AdditionalVerificationStatus = (typeof additionalVerificationStatus)[keyof typeof additionalVerificationStatus];
export declare const addressMatchThreshold: {
    readonly ExactAdministrativeArea: "EXACT_ADMINISTRATIVE_AREA";
    readonly ExactCountry: "EXACT_COUNTRY";
    readonly ExactHouse: "EXACT_HOUSE";
    readonly ExactLocality: "EXACT_LOCALITY";
    readonly ExactPostalCode: "EXACT_POSTAL_CODE";
    readonly ExactRoad: "EXACT_ROAD";
    readonly ExactUnit: "EXACT_UNIT";
};
export type AddressMatchThreshold = (typeof addressMatchThreshold)[keyof typeof addressMatchThreshold];
export declare const addressResult: {
    readonly Adjusted: "ADJUSTED";
    readonly Invalid: "INVALID";
    readonly Unavailable: "UNAVAILABLE";
    readonly Valid: "VALID";
};
export type AddressResult = (typeof addressResult)[keyof typeof addressResult];
export declare const adjustmentRecordType: {
    readonly ConnectAccountAdjustment: "CONNECT_ACCOUNT_ADJUSTMENT";
    readonly CreditNote: "CREDIT_NOTE";
    readonly InvoiceLineRecord: "INVOICE_LINE_RECORD";
};
export type AdjustmentRecordType = (typeof adjustmentRecordType)[keyof typeof adjustmentRecordType];
export declare const adjustmentSource: {
    readonly ApiRequest: "API_REQUEST";
    readonly PromoCode: "PROMO_CODE";
};
export type AdjustmentSource = (typeof adjustmentSource)[keyof typeof adjustmentSource];
export declare const adjustmentType: {
    readonly Charge: "CHARGE";
    readonly Credit: "CREDIT";
};
export type AdjustmentType = (typeof adjustmentType)[keyof typeof adjustmentType];
export declare const alcoholRecipientType: {
    readonly Consumer: "CONSUMER";
    readonly Licensee: "LICENSEE";
};
export type AlcoholRecipientType = (typeof alcoholRecipientType)[keyof typeof alcoholRecipientType];
export declare const allowedCharacterSets: {
    readonly All: "ALL";
    readonly Latin: "LATIN";
};
export type AllowedCharacterSets = (typeof allowedCharacterSets)[keyof typeof allowedCharacterSets];
export declare const allowedSettlementCurrencies: {
    readonly Local: "LOCAL";
    readonly LocalAndUsd: "LOCAL_AND_USD";
};
export type AllowedSettlementCurrencies = (typeof allowedSettlementCurrencies)[keyof typeof allowedSettlementCurrencies];
export declare const amountDetailRefundSourceType: {
    readonly Discount: "DISCOUNT";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
};
export type AmountDetailRefundSourceType = (typeof amountDetailRefundSourceType)[keyof typeof amountDetailRefundSourceType];
export declare const amountDetailSourceType: {
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly Fee: "FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
    readonly Tax: "TAX";
};
export type AmountDetailSourceType = (typeof amountDetailSourceType)[keyof typeof amountDetailSourceType];
export declare const amountDetailSubtotalType: {
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly Fee: "FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
    readonly Tax: "TAX";
};
export type AmountDetailSubtotalType = (typeof amountDetailSubtotalType)[keyof typeof amountDetailSubtotalType];
export declare const amountDetailTarget: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly MerchantBase: "MERCHANT_BASE";
    readonly MerchantProvided: "MERCHANT_PROVIDED";
    readonly MerchantSettled: "MERCHANT_SETTLED";
    readonly ShopperPresented: "SHOPPER_PRESENTED";
    readonly ZonosBase: "ZONOS_BASE";
};
export type AmountDetailTarget = (typeof amountDetailTarget)[keyof typeof amountDetailTarget];
export type AmountRange = {
    max?: InputMaybe<Scalars['Decimal']['input']>;
    min?: InputMaybe<Scalars['Decimal']['input']>;
};
export declare const analyticsProviderStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type AnalyticsProviderStatus = (typeof analyticsProviderStatus)[keyof typeof analyticsProviderStatus];
export declare const analyticsProviderType: {
    readonly FacebookPixel: "FACEBOOK_PIXEL";
    readonly GoogleAnalytics: "GOOGLE_ANALYTICS";
};
export type AnalyticsProviderType = (typeof analyticsProviderType)[keyof typeof analyticsProviderType];
export declare const apiUsageRecordStatus: {
    readonly Failed: "FAILED";
    readonly ManualIntervention: "MANUAL_INTERVENTION";
    readonly Pending: "PENDING";
    readonly Processed: "PROCESSED";
};
export type ApiUsageRecordStatus = (typeof apiUsageRecordStatus)[keyof typeof apiUsageRecordStatus];
export declare const apiUsageRecordType: {
    readonly Classify: "CLASSIFY";
    readonly DeniedParty: "DENIED_PARTY";
    readonly LandedCost: "LANDED_COST";
    readonly OrderComplete: "ORDER_COMPLETE";
    readonly RestrictedItem: "RESTRICTED_ITEM";
    readonly ShipmentRating: "SHIPMENT_RATING";
};
export type ApiUsageRecordType = (typeof apiUsageRecordType)[keyof typeof apiUsageRecordType];
export declare const batteryMaterialType: {
    readonly LithiumIon: "LITHIUM_ION";
    readonly LithiumMetal: "LITHIUM_METAL";
};
export type BatteryMaterialType = (typeof batteryMaterialType)[keyof typeof batteryMaterialType];
export declare const batteryPackingType: {
    readonly BatteryInsideEquipment: "BATTERY_INSIDE_EQUIPMENT";
    readonly BatteryOnly: "BATTERY_ONLY";
    readonly BatteryPackagedWithEquipment: "BATTERY_PACKAGED_WITH_EQUIPMENT";
};
export type BatteryPackingType = (typeof batteryPackingType)[keyof typeof batteryPackingType];
export declare const billingCompanyAccountType: {
    readonly StripeBillingCustomer: "STRIPE_BILLING_CUSTOMER";
    readonly StripePaymentsConnectAccount: "STRIPE_PAYMENTS_CONNECT_ACCOUNT";
    readonly StripeThirdPartyBillingCustomer: "STRIPE_THIRD_PARTY_BILLING_CUSTOMER";
};
export type BillingCompanyAccountType = (typeof billingCompanyAccountType)[keyof typeof billingCompanyAccountType];
export declare const billingOptionCode: {
    readonly DdpAndDdu: "DDP_AND_DDU";
    readonly ShipperOnly: "SHIPPER_ONLY";
    readonly ThirdParty: "THIRD_PARTY";
    readonly Unavailable: "UNAVAILABLE";
};
export type BillingOptionCode = (typeof billingOptionCode)[keyof typeof billingOptionCode];
export declare const billingStatusCode: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processed: "PROCESSED";
};
export type BillingStatusCode = (typeof billingStatusCode)[keyof typeof billingStatusCode];
export declare const bulkJobStatus: {
    readonly Error: "ERROR";
    readonly FileSaved: "FILE_SAVED";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type BulkJobStatus = (typeof bulkJobStatus)[keyof typeof bulkJobStatus];
export declare const carrierAccountApiUsage: {
    readonly BillDutyTax: "BILL_DUTY_TAX";
    readonly Label: "LABEL";
    readonly Rating: "RATING";
};
export type CarrierAccountApiUsage = (typeof carrierAccountApiUsage)[keyof typeof carrierAccountApiUsage];
export declare const carrierAccountIntegrationType: {
    readonly Rest: "REST";
    readonly Soap: "SOAP";
};
export type CarrierAccountIntegrationType = (typeof carrierAccountIntegrationType)[keyof typeof carrierAccountIntegrationType];
export declare const carrierAccountRateType: {
    readonly Negotiated: "NEGOTIATED";
    readonly Retail: "RETAIL";
};
export type CarrierAccountRateType = (typeof carrierAccountRateType)[keyof typeof carrierAccountRateType];
export declare const carrierAccountRegistrationType: {
    readonly Other: "OTHER";
    readonly Zonos: "ZONOS";
};
export type CarrierAccountRegistrationType = (typeof carrierAccountRegistrationType)[keyof typeof carrierAccountRegistrationType];
export declare const carrierAccountUsageCategoryCode: {
    readonly Shipping: "SHIPPING";
};
export type CarrierAccountUsageCategoryCode = (typeof carrierAccountUsageCategoryCode)[keyof typeof carrierAccountUsageCategoryCode];
export declare const carrierApiAccountIntegrationType: {
    readonly Rest: "REST";
    readonly Soap: "SOAP";
};
export type CarrierApiAccountIntegrationType = (typeof carrierApiAccountIntegrationType)[keyof typeof carrierApiAccountIntegrationType];
export declare const carrierApiAccountProvider: {
    readonly General: "GENERAL";
    readonly Organization: "ORGANIZATION";
};
export type CarrierApiAccountProvider = (typeof carrierApiAccountProvider)[keyof typeof carrierApiAccountProvider];
export declare const carrierApiRateTypeCode: {
    readonly Negotiated: "NEGOTIATED";
    readonly Retail: "RETAIL";
};
export type CarrierApiRateTypeCode = (typeof carrierApiRateTypeCode)[keyof typeof carrierApiRateTypeCode];
export type CarrierApiRatingBatteryDetail = {
    materialType: CarrierApiRatingBatteryMaterialType;
    packingType: CarrierApiRatingBatteryPackingType;
};
export declare const carrierApiRatingBatteryMaterialType: {
    readonly LithiumIon: "LITHIUM_ION";
    readonly LithiumMetal: "LITHIUM_METAL";
};
export type CarrierApiRatingBatteryMaterialType = (typeof carrierApiRatingBatteryMaterialType)[keyof typeof carrierApiRatingBatteryMaterialType];
export declare const carrierApiRatingBatteryPackingType: {
    readonly BatteryInsideEquipment: "BATTERY_INSIDE_EQUIPMENT";
    readonly BatteryOnly: "BATTERY_ONLY";
    readonly BatteryPackagedWithEquipment: "BATTERY_PACKAGED_WITH_EQUIPMENT";
};
export type CarrierApiRatingBatteryPackingType = (typeof carrierApiRatingBatteryPackingType)[keyof typeof carrierApiRatingBatteryPackingType];
export declare const carrierApiRatingSignatureOptionType: {
    readonly Adult: "ADULT";
    readonly Default: "DEFAULT";
    readonly Direct: "DIRECT";
    readonly Indirect: "INDIRECT";
};
export type CarrierApiRatingSignatureOptionType = (typeof carrierApiRatingSignatureOptionType)[keyof typeof carrierApiRatingSignatureOptionType];
export type CarrierApiRatingSpecialServiceDetail = {
    batteryDetail?: InputMaybe<CarrierApiRatingBatteryDetail>;
    serviceTypes: Array<CarrierApiRatingSpecialServiceType>;
    signatureOptionType?: InputMaybe<CarrierApiRatingSignatureOptionType>;
};
export declare const carrierApiRatingSpecialServiceType: {
    readonly Alcohol: "ALCOHOL";
    readonly Battery: "BATTERY";
    readonly CutFlowers: "CUT_FLOWERS";
    readonly DangerousGoods: "DANGEROUS_GOODS";
    readonly DryIce: "DRY_ICE";
    readonly SaturdayDelivery: "SATURDAY_DELIVERY";
    readonly SignatureOption: "SIGNATURE_OPTION";
    readonly SundayDelivery: "SUNDAY_DELIVERY";
};
export type CarrierApiRatingSpecialServiceType = (typeof carrierApiRatingSpecialServiceType)[keyof typeof carrierApiRatingSpecialServiceType];
export declare const carrierApiSupportType: {
    readonly Supported: "SUPPORTED";
    readonly Unsupported: "UNSUPPORTED";
};
export type CarrierApiSupportType = (typeof carrierApiSupportType)[keyof typeof carrierApiSupportType];
export declare const carrierBillingInvoiceFeeType: {
    readonly RevShareAmount: "REV_SHARE_AMOUNT";
    readonly RevSharePercent: "REV_SHARE_PERCENT";
};
export type CarrierBillingInvoiceFeeType = (typeof carrierBillingInvoiceFeeType)[keyof typeof carrierBillingInvoiceFeeType];
export declare const carrierBillingInvoiceLineItemReferenceType: {
    readonly AccountOrderNumber: "ACCOUNT_ORDER_NUMBER";
    readonly ShipmentReferenceNumber: "SHIPMENT_REFERENCE_NUMBER";
    readonly ZonosOrderId: "ZONOS_ORDER_ID";
};
export type CarrierBillingInvoiceLineItemReferenceType = (typeof carrierBillingInvoiceLineItemReferenceType)[keyof typeof carrierBillingInvoiceLineItemReferenceType];
export declare const carrierBillingInvoiceStatus: {
    readonly Draft: "DRAFT";
    readonly Failed: "FAILED";
    readonly Open: "OPEN";
    readonly Paid: "PAID";
    readonly Pending: "PENDING";
    readonly Uncollectible: "UNCOLLECTIBLE";
    readonly Voided: "VOIDED";
};
export type CarrierBillingInvoiceStatus = (typeof carrierBillingInvoiceStatus)[keyof typeof carrierBillingInvoiceStatus];
export declare const carrierCode: {
    readonly Apc: "APC";
    readonly Dhl: "DHL";
    readonly DirectLink: "DIRECT_LINK";
    readonly Fedex: "FEDEX";
    readonly Fedexxb: "FEDEXXB";
    readonly GlobalAccess: "GLOBAL_ACCESS";
    readonly Ups: "UPS";
    readonly Usps: "USPS";
};
export type CarrierCode = (typeof carrierCode)[keyof typeof carrierCode];
export declare const carrierCredentialTypeCode: {
    readonly AccessLicenseNumber: "ACCESS_LICENSE_NUMBER";
    readonly AccountNumber: "ACCOUNT_NUMBER";
    readonly ApiKey: "API_KEY";
    readonly ApiPassword: "API_PASSWORD";
    readonly ApiToken: "API_TOKEN";
    readonly CustomerId: "CUSTOMER_ID";
    readonly MeterNumber: "METER_NUMBER";
    readonly PaymentCountryCode: "PAYMENT_COUNTRY_CODE";
    readonly SenderLocation: "SENDER_LOCATION";
    readonly ShipperNumber: "SHIPPER_NUMBER";
    readonly SiteId: "SITE_ID";
    readonly UserId: "USER_ID";
};
export type CarrierCredentialTypeCode = (typeof carrierCredentialTypeCode)[keyof typeof carrierCredentialTypeCode];
export declare const carrierInvoiceLineItemChargeType: {
    readonly DefermentFee: "DEFERMENT_FEE";
    readonly DisbursementFee: "DISBURSEMENT_FEE";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly ImportDuty: "IMPORT_DUTY";
    readonly ImportTax: "IMPORT_TAX";
    readonly Other: "OTHER";
    readonly ProcessingFee: "PROCESSING_FEE";
    readonly Shipping: "SHIPPING";
};
export type CarrierInvoiceLineItemChargeType = (typeof carrierInvoiceLineItemChargeType)[keyof typeof carrierInvoiceLineItemChargeType];
export declare const carrierMultiFactorAuthMethod: {
    readonly CallPin: "CALL_PIN";
    readonly EmailPin: "EMAIL_PIN";
    readonly Invoice: "INVOICE";
    readonly SmsPin: "SMS_PIN";
};
export type CarrierMultiFactorAuthMethod = (typeof carrierMultiFactorAuthMethod)[keyof typeof carrierMultiFactorAuthMethod];
export declare const carrierRateType: {
    readonly Negotiated: "NEGOTIATED";
    readonly Retail: "RETAIL";
};
export type CarrierRateType = (typeof carrierRateType)[keyof typeof carrierRateType];
export declare const cartAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
    readonly Item: "ITEM";
    readonly PromoCode: "PROMO_CODE";
    readonly Shipping: "SHIPPING";
};
export type CartAdjustmentType = (typeof cartAdjustmentType)[keyof typeof cartAdjustmentType];
export declare const catalogItemExportJobAction: {
    readonly Email: "EMAIL";
    readonly None: "NONE";
};
export type CatalogItemExportJobAction = (typeof catalogItemExportJobAction)[keyof typeof catalogItemExportJobAction];
export declare const catalogItemInclusivePriceStatus: {
    readonly Active: "ACTIVE";
    readonly Archived: "ARCHIVED";
    readonly Failed: "FAILED";
    readonly Ignored: "IGNORED";
    readonly Pending: "PENDING";
};
export type CatalogItemInclusivePriceStatus = (typeof catalogItemInclusivePriceStatus)[keyof typeof catalogItemInclusivePriceStatus];
export declare const catalogItemSource: {
    readonly Classification: "CLASSIFICATION";
    readonly LegacyMigration: "LEGACY_MIGRATION";
    readonly UserProvided: "USER_PROVIDED";
};
export type CatalogItemSource = (typeof catalogItemSource)[keyof typeof catalogItemSource];
export declare const catalogItemUpdateMethod: {
    readonly All: "ALL";
    readonly NonNull: "NON_NULL";
};
export type CatalogItemUpdateMethod = (typeof catalogItemUpdateMethod)[keyof typeof catalogItemUpdateMethod];
export declare const catalogSettingMigrationAction: {
    readonly Evaluate: "EVALUATE";
    readonly Migrate: "MIGRATE";
};
export type CatalogSettingMigrationAction = (typeof catalogSettingMigrationAction)[keyof typeof catalogSettingMigrationAction];
export declare const catalogStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type CatalogStatus = (typeof catalogStatus)[keyof typeof catalogStatus];
export declare const checkoutSessionCreationModeType: {
    readonly WithPaymentIntent: "WITH_PAYMENT_INTENT";
    readonly WithoutPaymentIntent: "WITHOUT_PAYMENT_INTENT";
};
export type CheckoutSessionCreationModeType = (typeof checkoutSessionCreationModeType)[keyof typeof checkoutSessionCreationModeType];
export declare const checkoutStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type CheckoutStatus = (typeof checkoutStatus)[keyof typeof checkoutStatus];
export declare const checkoutSubscriptionStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
    readonly Paused: "PAUSED";
};
export type CheckoutSubscriptionStatus = (typeof checkoutSubscriptionStatus)[keyof typeof checkoutSubscriptionStatus];
export declare const checkoutSuccessBehavior: {
    readonly CloseModal: "CLOSE_MODAL";
    readonly RedirectToSuccessPage: "REDIRECT_TO_SUCCESS_PAGE";
    readonly ZonosSuccessPage: "ZONOS_SUCCESS_PAGE";
};
export type CheckoutSuccessBehavior = (typeof checkoutSuccessBehavior)[keyof typeof checkoutSuccessBehavior];
export declare const checkoutVisibilityStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type CheckoutVisibilityStatus = (typeof checkoutVisibilityStatus)[keyof typeof checkoutVisibilityStatus];
export declare const classificationBulkExportJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type ClassificationBulkExportJobStatus = (typeof classificationBulkExportJobStatus)[keyof typeof classificationBulkExportJobStatus];
export declare const classificationBulkJobStatus: {
    readonly Classified: "CLASSIFIED";
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type ClassificationBulkJobStatus = (typeof classificationBulkJobStatus)[keyof typeof classificationBulkJobStatus];
export declare const classificationCalculateOrigin: {
    readonly All: "ALL";
    readonly Bulk: "BULK";
    readonly Single: "SINGLE";
};
export type ClassificationCalculateOrigin = (typeof classificationCalculateOrigin)[keyof typeof classificationCalculateOrigin];
export declare const classificationCalculateSource: {
    readonly Bulk: "BULK";
    readonly External: "EXTERNAL";
    readonly Internal: "INTERNAL";
    readonly Legacy: "LEGACY";
    readonly Single: "SINGLE";
};
export type ClassificationCalculateSource = (typeof classificationCalculateSource)[keyof typeof classificationCalculateSource];
export declare const classificationMethod: {
    readonly Augmented: "AUGMENTED";
    readonly Calculated: "CALCULATED";
};
export type ClassificationMethod = (typeof classificationMethod)[keyof typeof classificationMethod];
export declare const classificationRequestField: {
    readonly Category: "CATEGORY";
    readonly Description: "DESCRIPTION";
    readonly Name: "NAME";
};
export type ClassificationRequestField = (typeof classificationRequestField)[keyof typeof classificationRequestField];
export declare const classifyMissingHsCodesStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type ClassifyMissingHsCodesStatus = (typeof classifyMissingHsCodesStatus)[keyof typeof classifyMissingHsCodesStatus];
export declare const collectFeeCalculationType: {
    readonly Flat: "FLAT";
    readonly Percent: "PERCENT";
};
export type CollectFeeCalculationType = (typeof collectFeeCalculationType)[keyof typeof collectFeeCalculationType];
export declare const collectInvoiceLineItemChargeType: {
    readonly Duty: "DUTY";
    readonly DutyTax: "DUTY_TAX";
    readonly Fee: "FEE";
    readonly Other: "OTHER";
    readonly Tax: "TAX";
};
export type CollectInvoiceLineItemChargeType = (typeof collectInvoiceLineItemChargeType)[keyof typeof collectInvoiceLineItemChargeType];
export declare const collectSubmissionLineItemChargeType: {
    readonly Duty: "DUTY";
    readonly DutyTax: "DUTY_TAX";
    readonly Fee: "FEE";
    readonly Other: "OTHER";
    readonly Tax: "TAX";
};
export type CollectSubmissionLineItemChargeType = (typeof collectSubmissionLineItemChargeType)[keyof typeof collectSubmissionLineItemChargeType];
export declare const collectSubmissionStatusCode: {
    readonly Abandoned: "ABANDONED";
    readonly Held: "HELD";
    readonly InvoicePending: "INVOICE_PENDING";
    readonly Opened: "OPENED";
    readonly Paid: "PAID";
    readonly Returned: "RETURNED";
    readonly Voided: "VOIDED";
};
export type CollectSubmissionStatusCode = (typeof collectSubmissionStatusCode)[keyof typeof collectSubmissionStatusCode];
export declare const collectUploadStatus: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Succeeded: "SUCCEEDED";
    readonly SucceededWithErrors: "SUCCEEDED_WITH_ERRORS";
};
export type CollectUploadStatus = (typeof collectUploadStatus)[keyof typeof collectUploadStatus];
export declare const commercialInvoiceImageCarrier: {
    readonly Dhl: "DHL";
    readonly Fedex: "FEDEX";
    readonly Ups: "UPS";
};
export type CommercialInvoiceImageCarrier = (typeof commercialInvoiceImageCarrier)[keyof typeof commercialInvoiceImageCarrier];
export declare const confidenceScoreDisplayStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type ConfidenceScoreDisplayStatus = (typeof confidenceScoreDisplayStatus)[keyof typeof confidenceScoreDisplayStatus];
export declare const connectTransferOriginType: {
    readonly Connect: "CONNECT";
    readonly Platform: "PLATFORM";
};
export type ConnectTransferOriginType = (typeof connectTransferOriginType)[keyof typeof connectTransferOriginType];
export declare const constraintType: {
    readonly Girth: "GIRTH";
    readonly GirthAndLength: "GIRTH_AND_LENGTH";
    readonly Height: "HEIGHT";
    readonly Length: "LENGTH";
    readonly Price: "PRICE";
    readonly Quantity: "QUANTITY";
    readonly Volume: "VOLUME";
    readonly Weight: "WEIGHT";
    readonly Width: "WIDTH";
};
export type ConstraintType = (typeof constraintType)[keyof typeof constraintType];
export declare const constraintUnitCode: {
    readonly Aed: "AED";
    readonly Afn: "AFN";
    readonly All: "ALL";
    readonly Amd: "AMD";
    readonly Ang: "ANG";
    readonly Aoa: "AOA";
    readonly Ars: "ARS";
    readonly Aud: "AUD";
    readonly Awg: "AWG";
    readonly Azn: "AZN";
    readonly Bam: "BAM";
    readonly BarrelPetroleum: "BARREL_PETROLEUM";
    readonly Bbd: "BBD";
    readonly Bdt: "BDT";
    readonly Bgn: "BGN";
    readonly Bhd: "BHD";
    readonly Bif: "BIF";
    readonly Bmd: "BMD";
    readonly Bnd: "BND";
    readonly Bob: "BOB";
    readonly Brl: "BRL";
    readonly Bsd: "BSD";
    readonly Btc: "BTC";
    readonly Btn: "BTN";
    readonly BushelUk: "BUSHEL_UK";
    readonly BushelUsDry: "BUSHEL_US_DRY";
    readonly Bwp: "BWP";
    readonly Byn: "BYN";
    readonly Byr: "BYR";
    readonly Bzd: "BZD";
    readonly Cad: "CAD";
    readonly Carat: "CARAT";
    readonly Cdf: "CDF";
    readonly Centigram: "CENTIGRAM";
    readonly CentiliterCl: "CENTILITER_CL";
    readonly Centimeter: "CENTIMETER";
    readonly Chf: "CHF";
    readonly Clf: "CLF";
    readonly Clp: "CLP";
    readonly Cny: "CNY";
    readonly Cop: "COP";
    readonly Crc: "CRC";
    readonly CubicCentimeter: "CUBIC_CENTIMETER";
    readonly CubicDecimeter: "CUBIC_DECIMETER";
    readonly CubicFoot: "CUBIC_FOOT";
    readonly CubicInch: "CUBIC_INCH";
    readonly CubicMeter: "CUBIC_METER";
    readonly CubicMillimeter: "CUBIC_MILLIMETER";
    readonly CubicYard: "CUBIC_YARD";
    readonly Cuc: "CUC";
    readonly Cup: "CUP";
    readonly Cve: "CVE";
    readonly Czk: "CZK";
    readonly DecaliterDal: "DECALITER_DAL";
    readonly Deciliter: "DECILITER";
    readonly Decimeter: "DECIMETER";
    readonly Djf: "DJF";
    readonly Dkk: "DKK";
    readonly Dop: "DOP";
    readonly Dzd: "DZD";
    readonly Egp: "EGP";
    readonly Ern: "ERN";
    readonly Etb: "ETB";
    readonly Eur: "EUR";
    readonly Fjd: "FJD";
    readonly Fkp: "FKP";
    readonly FluidDramFlDr: "FLUID_DRAM_FL_DR";
    readonly FluidOunceFlOz: "FLUID_OUNCE_FL_OZ";
    readonly FluidOunceUk: "FLUID_OUNCE_UK";
    readonly Foot: "FOOT";
    readonly GallonFluid: "GALLON_FLUID";
    readonly GallonUk: "GALLON_UK";
    readonly Gbp: "GBP";
    readonly Gel: "GEL";
    readonly Ggp: "GGP";
    readonly Ghs: "GHS";
    readonly GillGi: "GILL_GI";
    readonly Gip: "GIP";
    readonly Gmd: "GMD";
    readonly Gnf: "GNF";
    readonly Gram: "GRAM";
    readonly Gtq: "GTQ";
    readonly Gyd: "GYD";
    readonly Hectoliter: "HECTOLITER";
    readonly Hkd: "HKD";
    readonly Hnl: "HNL";
    readonly Hrk: "HRK";
    readonly Htg: "HTG";
    readonly Huf: "HUF";
    readonly Idr: "IDR";
    readonly Ils: "ILS";
    readonly Imp: "IMP";
    readonly Inch: "INCH";
    readonly Inr: "INR";
    readonly Iqd: "IQD";
    readonly Irr: "IRR";
    readonly Isk: "ISK";
    readonly Jep: "JEP";
    readonly Jmd: "JMD";
    readonly Jod: "JOD";
    readonly Jpy: "JPY";
    readonly Kes: "KES";
    readonly Kgs: "KGS";
    readonly Khr: "KHR";
    readonly Kilogram: "KILOGRAM";
    readonly Kiloliter: "KILOLITER";
    readonly Kmf: "KMF";
    readonly Kpw: "KPW";
    readonly Krw: "KRW";
    readonly Kwd: "KWD";
    readonly Kyd: "KYD";
    readonly Kzt: "KZT";
    readonly Lak: "LAK";
    readonly Lbp: "LBP";
    readonly Liter: "LITER";
    readonly Lkr: "LKR";
    readonly Lrd: "LRD";
    readonly Lsl: "LSL";
    readonly Ltl: "LTL";
    readonly Lvl: "LVL";
    readonly Lyd: "LYD";
    readonly Mad: "MAD";
    readonly Mdl: "MDL";
    readonly Meter: "METER";
    readonly Mga: "MGA";
    readonly Microliter: "MICROLITER";
    readonly Milligram: "MILLIGRAM";
    readonly MilliliterMl: "MILLILITER_ML";
    readonly Millimeter: "MILLIMETER";
    readonly MinimMin: "MINIM_MIN";
    readonly Mkd: "MKD";
    readonly Mmk: "MMK";
    readonly Mnt: "MNT";
    readonly Mop: "MOP";
    readonly Mro: "MRO";
    readonly Mur: "MUR";
    readonly Mvr: "MVR";
    readonly Mwk: "MWK";
    readonly Mxn: "MXN";
    readonly Myr: "MYR";
    readonly Mzn: "MZN";
    readonly Nad: "NAD";
    readonly Ngn: "NGN";
    readonly Nio: "NIO";
    readonly Nok: "NOK";
    readonly Npr: "NPR";
    readonly Nzd: "NZD";
    readonly Omr: "OMR";
    readonly Ounce: "OUNCE";
    readonly Pab: "PAB";
    readonly PeckUsDry: "PECK_US_DRY";
    readonly Pen: "PEN";
    readonly Pgk: "PGK";
    readonly Php: "PHP";
    readonly PintFluid: "PINT_FLUID";
    readonly PintUk: "PINT_UK";
    readonly PintUsDry: "PINT_US_DRY";
    readonly Pkr: "PKR";
    readonly Pln: "PLN";
    readonly Pound: "POUND";
    readonly Pyg: "PYG";
    readonly Qar: "QAR";
    readonly QuartFluid: "QUART_FLUID";
    readonly QuartUk: "QUART_UK";
    readonly QuartUsDry: "QUART_US_DRY";
    readonly Ron: "RON";
    readonly Rsd: "RSD";
    readonly Rub: "RUB";
    readonly Rwf: "RWF";
    readonly Sar: "SAR";
    readonly Sbd: "SBD";
    readonly Scr: "SCR";
    readonly Sdg: "SDG";
    readonly Sek: "SEK";
    readonly Sgd: "SGD";
    readonly Shp: "SHP";
    readonly Sll: "SLL";
    readonly Sos: "SOS";
    readonly Srd: "SRD";
    readonly Std: "STD";
    readonly Svc: "SVC";
    readonly Syp: "SYP";
    readonly Szl: "SZL";
    readonly Thb: "THB";
    readonly Tjs: "TJS";
    readonly Tmt: "TMT";
    readonly Tnd: "TND";
    readonly Ton: "TON";
    readonly Top: "TOP";
    readonly Try: "TRY";
    readonly Ttd: "TTD";
    readonly Twd: "TWD";
    readonly Tzs: "TZS";
    readonly Uah: "UAH";
    readonly Ugx: "UGX";
    readonly Usd: "USD";
    readonly Uyu: "UYU";
    readonly Uzs: "UZS";
    readonly Vef: "VEF";
    readonly Vnd: "VND";
    readonly Vuv: "VUV";
    readonly Wst: "WST";
    readonly Xaf: "XAF";
    readonly Xag: "XAG";
    readonly Xau: "XAU";
    readonly Xcd: "XCD";
    readonly Xdr: "XDR";
    readonly Xof: "XOF";
    readonly Xpf: "XPF";
    readonly Yard: "YARD";
    readonly Yer: "YER";
    readonly Zar: "ZAR";
    readonly Zmk: "ZMK";
    readonly Zmw: "ZMW";
    readonly Zwl: "ZWL";
};
export type ConstraintUnitCode = (typeof constraintUnitCode)[keyof typeof constraintUnitCode];
export declare const contentType: {
    readonly Csv: "CSV";
};
export type ContentType = (typeof contentType)[keyof typeof contentType];
export declare const controlType: {
    readonly Carrier: "CARRIER";
    readonly Export: "EXPORT";
    readonly Import: "IMPORT";
};
export type ControlType = (typeof controlType)[keyof typeof controlType];
export declare const countryCode: {
    readonly Ad: "AD";
    readonly Ae: "AE";
    readonly Af: "AF";
    readonly Ag: "AG";
    readonly Ai: "AI";
    readonly Al: "AL";
    readonly Am: "AM";
    readonly Ao: "AO";
    readonly Aq: "AQ";
    readonly Ar: "AR";
    readonly As: "AS";
    readonly At: "AT";
    readonly Au: "AU";
    readonly Aw: "AW";
    readonly Ax: "AX";
    readonly Az: "AZ";
    readonly Ba: "BA";
    readonly Bb: "BB";
    readonly Bd: "BD";
    readonly Be: "BE";
    readonly Bf: "BF";
    readonly Bg: "BG";
    readonly Bh: "BH";
    readonly Bi: "BI";
    readonly Bj: "BJ";
    readonly Bl: "BL";
    readonly Bm: "BM";
    readonly Bn: "BN";
    readonly Bo: "BO";
    readonly Bq: "BQ";
    readonly Br: "BR";
    readonly Bs: "BS";
    readonly Bt: "BT";
    readonly Bv: "BV";
    readonly Bw: "BW";
    readonly By: "BY";
    readonly Bz: "BZ";
    readonly Ca: "CA";
    readonly Cc: "CC";
    readonly Cd: "CD";
    readonly Cf: "CF";
    readonly Cg: "CG";
    readonly Ch: "CH";
    readonly Ci: "CI";
    readonly Ck: "CK";
    readonly Cl: "CL";
    readonly Cm: "CM";
    readonly Cn: "CN";
    readonly Co: "CO";
    readonly Cr: "CR";
    readonly Cu: "CU";
    readonly Cv: "CV";
    readonly Cw: "CW";
    readonly Cx: "CX";
    readonly Cy: "CY";
    readonly Cz: "CZ";
    readonly De: "DE";
    readonly Dj: "DJ";
    readonly Dk: "DK";
    readonly Dm: "DM";
    readonly Do: "DO";
    readonly Dz: "DZ";
    readonly Ec: "EC";
    readonly Ee: "EE";
    readonly Eg: "EG";
    readonly Eh: "EH";
    readonly Er: "ER";
    readonly Es: "ES";
    readonly Et: "ET";
    readonly Fi: "FI";
    readonly Fj: "FJ";
    readonly Fk: "FK";
    readonly Fm: "FM";
    readonly Fo: "FO";
    readonly Fr: "FR";
    readonly Ga: "GA";
    readonly Gb: "GB";
    readonly Gd: "GD";
    readonly Ge: "GE";
    readonly Gf: "GF";
    readonly Gg: "GG";
    readonly Gh: "GH";
    readonly Gi: "GI";
    readonly Gl: "GL";
    readonly Gm: "GM";
    readonly Gn: "GN";
    readonly Gp: "GP";
    readonly Gq: "GQ";
    readonly Gr: "GR";
    readonly Gs: "GS";
    readonly Gt: "GT";
    readonly Gu: "GU";
    readonly Gw: "GW";
    readonly Gy: "GY";
    readonly Hk: "HK";
    readonly Hm: "HM";
    readonly Hn: "HN";
    readonly Hr: "HR";
    readonly Ht: "HT";
    readonly Hu: "HU";
    readonly Ic: "IC";
    readonly Id: "ID";
    readonly Ie: "IE";
    readonly Il: "IL";
    readonly Im: "IM";
    readonly In: "IN";
    readonly Io: "IO";
    readonly Iq: "IQ";
    readonly Ir: "IR";
    readonly Is: "IS";
    readonly It: "IT";
    readonly Je: "JE";
    readonly Jm: "JM";
    readonly Jo: "JO";
    readonly Jp: "JP";
    readonly Ke: "KE";
    readonly Kg: "KG";
    readonly Kh: "KH";
    readonly Ki: "KI";
    readonly Km: "KM";
    readonly Kn: "KN";
    readonly Kp: "KP";
    readonly Kr: "KR";
    readonly Kw: "KW";
    readonly Ky: "KY";
    readonly Kz: "KZ";
    readonly La: "LA";
    readonly Lb: "LB";
    readonly Lc: "LC";
    readonly Li: "LI";
    readonly Lk: "LK";
    readonly Lr: "LR";
    readonly Ls: "LS";
    readonly Lt: "LT";
    readonly Lu: "LU";
    readonly Lv: "LV";
    readonly Ly: "LY";
    readonly Ma: "MA";
    readonly Mc: "MC";
    readonly Md: "MD";
    readonly Me: "ME";
    readonly Mf: "MF";
    readonly Mg: "MG";
    readonly Mh: "MH";
    readonly Mk: "MK";
    readonly Ml: "ML";
    readonly Mm: "MM";
    readonly Mn: "MN";
    readonly Mo: "MO";
    readonly Mp: "MP";
    readonly Mq: "MQ";
    readonly Mr: "MR";
    readonly Ms: "MS";
    readonly Mt: "MT";
    readonly Mu: "MU";
    readonly Mv: "MV";
    readonly Mw: "MW";
    readonly Mx: "MX";
    readonly My: "MY";
    readonly Mz: "MZ";
    readonly Na: "NA";
    readonly Nc: "NC";
    readonly Ne: "NE";
    readonly Nf: "NF";
    readonly Ng: "NG";
    readonly Ni: "NI";
    readonly Nl: "NL";
    readonly No: "NO";
    readonly Np: "NP";
    readonly Nr: "NR";
    readonly Nu: "NU";
    readonly Nz: "NZ";
    readonly Om: "OM";
    readonly Pa: "PA";
    readonly Pe: "PE";
    readonly Pf: "PF";
    readonly Pg: "PG";
    readonly Ph: "PH";
    readonly Pk: "PK";
    readonly Pl: "PL";
    readonly Pm: "PM";
    readonly Pn: "PN";
    readonly Pr: "PR";
    readonly Ps: "PS";
    readonly Pt: "PT";
    readonly Pw: "PW";
    readonly Py: "PY";
    readonly Qa: "QA";
    readonly Re: "RE";
    readonly Ro: "RO";
    readonly Rs: "RS";
    readonly Ru: "RU";
    readonly Rw: "RW";
    readonly Sa: "SA";
    readonly Sb: "SB";
    readonly Sc: "SC";
    readonly Sd: "SD";
    readonly Se: "SE";
    readonly Sg: "SG";
    readonly Sh: "SH";
    readonly Si: "SI";
    readonly Sj: "SJ";
    readonly Sk: "SK";
    readonly Sl: "SL";
    readonly Sm: "SM";
    readonly Sn: "SN";
    readonly So: "SO";
    readonly Sr: "SR";
    readonly Ss: "SS";
    readonly St: "ST";
    readonly Sv: "SV";
    readonly Sx: "SX";
    readonly Sy: "SY";
    readonly Sz: "SZ";
    readonly Tc: "TC";
    readonly Td: "TD";
    readonly Tf: "TF";
    readonly Tg: "TG";
    readonly Th: "TH";
    readonly Tj: "TJ";
    readonly Tk: "TK";
    readonly Tl: "TL";
    readonly Tm: "TM";
    readonly Tn: "TN";
    readonly To: "TO";
    readonly Tr: "TR";
    readonly Tt: "TT";
    readonly Tv: "TV";
    readonly Tw: "TW";
    readonly Tz: "TZ";
    readonly Ua: "UA";
    readonly Ug: "UG";
    readonly Um: "UM";
    readonly Us: "US";
    readonly Uy: "UY";
    readonly Uz: "UZ";
    readonly Va: "VA";
    readonly Vc: "VC";
    readonly Ve: "VE";
    readonly Vg: "VG";
    readonly Vi: "VI";
    readonly Vn: "VN";
    readonly Vu: "VU";
    readonly Wf: "WF";
    readonly Ws: "WS";
    readonly Ye: "YE";
    readonly Yt: "YT";
    readonly Za: "ZA";
    readonly Zm: "ZM";
    readonly Zw: "ZW";
};
export type CountryCode = (typeof countryCode)[keyof typeof countryCode];
export declare const credentialProvider: {
    readonly General: "GENERAL";
    readonly Organization: "ORGANIZATION";
};
export type CredentialProvider = (typeof credentialProvider)[keyof typeof credentialProvider];
export declare const creditBehaviorTypeCode: {
    readonly CreditAccount: "CREDIT_ACCOUNT";
    readonly RefundPayment: "REFUND_PAYMENT";
};
export type CreditBehaviorTypeCode = (typeof creditBehaviorTypeCode)[keyof typeof creditBehaviorTypeCode];
export declare const creditReasonTypeCode: {
    readonly Duplicate: "DUPLICATE";
    readonly Fraudulent: "FRAUDULENT";
    readonly OrderChange: "ORDER_CHANGE";
    readonly ProductUnsatisfactory: "PRODUCT_UNSATISFACTORY";
};
export type CreditReasonTypeCode = (typeof creditReasonTypeCode)[keyof typeof creditReasonTypeCode];
export declare const currencyCode: {
    readonly Aed: "AED";
    readonly Afn: "AFN";
    readonly All: "ALL";
    readonly Amd: "AMD";
    readonly Ang: "ANG";
    readonly Aoa: "AOA";
    readonly Ars: "ARS";
    readonly Aud: "AUD";
    readonly Awg: "AWG";
    readonly Azn: "AZN";
    readonly Bam: "BAM";
    readonly Bbd: "BBD";
    readonly Bdt: "BDT";
    readonly Bgn: "BGN";
    readonly Bhd: "BHD";
    readonly Bif: "BIF";
    readonly Bmd: "BMD";
    readonly Bnd: "BND";
    readonly Bob: "BOB";
    readonly Brl: "BRL";
    readonly Bsd: "BSD";
    readonly Btc: "BTC";
    readonly Btn: "BTN";
    readonly Bwp: "BWP";
    readonly Byn: "BYN";
    readonly Byr: "BYR";
    readonly Bzd: "BZD";
    readonly Cad: "CAD";
    readonly Cdf: "CDF";
    readonly Chf: "CHF";
    readonly Clf: "CLF";
    readonly Clp: "CLP";
    readonly Cny: "CNY";
    readonly Cop: "COP";
    readonly Crc: "CRC";
    readonly Cuc: "CUC";
    readonly Cup: "CUP";
    readonly Cve: "CVE";
    readonly Czk: "CZK";
    readonly Djf: "DJF";
    readonly Dkk: "DKK";
    readonly Dop: "DOP";
    readonly Dzd: "DZD";
    readonly Egp: "EGP";
    readonly Ern: "ERN";
    readonly Etb: "ETB";
    readonly Eur: "EUR";
    readonly Fjd: "FJD";
    readonly Fkp: "FKP";
    readonly Gbp: "GBP";
    readonly Gel: "GEL";
    readonly Ggp: "GGP";
    readonly Ghs: "GHS";
    readonly Gip: "GIP";
    readonly Gmd: "GMD";
    readonly Gnf: "GNF";
    readonly Gtq: "GTQ";
    readonly Gyd: "GYD";
    readonly Hkd: "HKD";
    readonly Hnl: "HNL";
    readonly Hrk: "HRK";
    readonly Htg: "HTG";
    readonly Huf: "HUF";
    readonly Idr: "IDR";
    readonly Ils: "ILS";
    readonly Imp: "IMP";
    readonly Inr: "INR";
    readonly Iqd: "IQD";
    readonly Irr: "IRR";
    readonly Isk: "ISK";
    readonly Jep: "JEP";
    readonly Jmd: "JMD";
    readonly Jod: "JOD";
    readonly Jpy: "JPY";
    readonly Kes: "KES";
    readonly Kgs: "KGS";
    readonly Khr: "KHR";
    readonly Kmf: "KMF";
    readonly Kpw: "KPW";
    readonly Krw: "KRW";
    readonly Kwd: "KWD";
    readonly Kyd: "KYD";
    readonly Kzt: "KZT";
    readonly Lak: "LAK";
    readonly Lbp: "LBP";
    readonly Lkr: "LKR";
    readonly Lrd: "LRD";
    readonly Lsl: "LSL";
    readonly Ltl: "LTL";
    readonly Lvl: "LVL";
    readonly Lyd: "LYD";
    readonly Mad: "MAD";
    readonly Mdl: "MDL";
    readonly Mga: "MGA";
    readonly Mkd: "MKD";
    readonly Mmk: "MMK";
    readonly Mnt: "MNT";
    readonly Mop: "MOP";
    readonly Mro: "MRO";
    readonly Mur: "MUR";
    readonly Mvr: "MVR";
    readonly Mwk: "MWK";
    readonly Mxn: "MXN";
    readonly Myr: "MYR";
    readonly Mzn: "MZN";
    readonly Nad: "NAD";
    readonly Ngn: "NGN";
    readonly Nio: "NIO";
    readonly Nok: "NOK";
    readonly Npr: "NPR";
    readonly Nzd: "NZD";
    readonly Omr: "OMR";
    readonly Pab: "PAB";
    readonly Pen: "PEN";
    readonly Pgk: "PGK";
    readonly Php: "PHP";
    readonly Pkr: "PKR";
    readonly Pln: "PLN";
    readonly Pyg: "PYG";
    readonly Qar: "QAR";
    readonly Ron: "RON";
    readonly Rsd: "RSD";
    readonly Rub: "RUB";
    readonly Rwf: "RWF";
    readonly Sar: "SAR";
    readonly Sbd: "SBD";
    readonly Scr: "SCR";
    readonly Sdg: "SDG";
    readonly Sek: "SEK";
    readonly Sgd: "SGD";
    readonly Shp: "SHP";
    readonly Sle: "SLE";
    readonly Sll: "SLL";
    readonly Sos: "SOS";
    readonly Srd: "SRD";
    readonly Std: "STD";
    readonly Svc: "SVC";
    readonly Syp: "SYP";
    readonly Szl: "SZL";
    readonly Thb: "THB";
    readonly Tjs: "TJS";
    readonly Tmt: "TMT";
    readonly Tnd: "TND";
    readonly Top: "TOP";
    readonly Try: "TRY";
    readonly Ttd: "TTD";
    readonly Twd: "TWD";
    readonly Tzs: "TZS";
    readonly Uah: "UAH";
    readonly Ugx: "UGX";
    readonly Usd: "USD";
    readonly Uyu: "UYU";
    readonly Uzs: "UZS";
    readonly Vef: "VEF";
    readonly Vnd: "VND";
    readonly Vuv: "VUV";
    readonly Wst: "WST";
    readonly Xaf: "XAF";
    readonly Xag: "XAG";
    readonly Xau: "XAU";
    readonly Xcd: "XCD";
    readonly Xdr: "XDR";
    readonly Xof: "XOF";
    readonly Xpf: "XPF";
    readonly Yer: "YER";
    readonly Zar: "ZAR";
    readonly Zmk: "ZMK";
    readonly Zmw: "ZMW";
    readonly Zwl: "ZWL";
};
export type CurrencyCode = (typeof currencyCode)[keyof typeof currencyCode];
export declare const currencyDefaultStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type CurrencyDefaultStatus = (typeof currencyDefaultStatus)[keyof typeof currencyDefaultStatus];
export declare const currencySymbolLocation: {
    readonly After: "AFTER";
    readonly Before: "BEFORE";
};
export type CurrencySymbolLocation = (typeof currencySymbolLocation)[keyof typeof currencySymbolLocation];
export declare const customsDocumentCarrier: {
    readonly Dhl: "DHL";
    readonly Fedex: "FEDEX";
    readonly Ups: "UPS";
};
export type CustomsDocumentCarrier = (typeof customsDocumentCarrier)[keyof typeof customsDocumentCarrier];
export declare const customsDocumentFileType: {
    readonly Jpg: "JPG";
    readonly Pdf: "PDF";
    readonly Png: "PNG";
    readonly Txt: "TXT";
};
export type CustomsDocumentFileType = (typeof customsDocumentFileType)[keyof typeof customsDocumentFileType];
export declare const customsDocumentType: {
    readonly CertificateOfOrigin: "CERTIFICATE_OF_ORIGIN";
    readonly CommercialInvoice: "COMMERCIAL_INVOICE";
    readonly Other: "OTHER";
    readonly ProFormaInvoice: "PRO_FORMA_INVOICE";
};
export type CustomsDocumentType = (typeof customsDocumentType)[keyof typeof customsDocumentType];
export declare const customsItemValueSource: {
    readonly ApiRequest: "API_REQUEST";
    readonly Catalog: "CATALOG";
    readonly Classify: "CLASSIFY";
    readonly ClassifyOnTheFly: "CLASSIFY_ON_THE_FLY";
    readonly Fallback: "FALLBACK";
    readonly Hybrid: "HYBRID";
    readonly OrganizationSetting: "ORGANIZATION_SETTING";
    readonly UserProvided: "USER_PROVIDED";
};
export type CustomsItemValueSource = (typeof customsItemValueSource)[keyof typeof customsItemValueSource];
export declare const customsSpecAttributeType: {
    readonly AccountNumber: "ACCOUNT_NUMBER";
    readonly B13A: "B13A";
    readonly DutyTaxBillingAccountNumber: "DUTY_TAX_BILLING_ACCOUNT_NUMBER";
    readonly Eccn: "ECCN";
    readonly Eori: "EORI";
    readonly Gst: "GST";
    readonly Ioss: "IOSS";
    readonly Itn: "ITN";
    readonly OrderNumber: "ORDER_NUMBER";
    readonly PurchaseOrderNumber: "PURCHASE_ORDER_NUMBER";
    readonly ShippingBillingAccountNumber: "SHIPPING_BILLING_ACCOUNT_NUMBER";
    readonly Vat: "VAT";
    readonly Voec: "VOEC";
};
export type CustomsSpecAttributeType = (typeof customsSpecAttributeType)[keyof typeof customsSpecAttributeType];
export declare const customsSpecSourceType: {
    readonly ApiRequest: "API_REQUEST";
    readonly Catalog: "CATALOG";
    readonly Classify: "CLASSIFY";
    readonly OrganizationSetting: "ORGANIZATION_SETTING";
};
export type CustomsSpecSourceType = (typeof customsSpecSourceType)[keyof typeof customsSpecSourceType];
export declare const dashboardUnit: {
    readonly Imperial: "IMPERIAL";
    readonly Metric: "METRIC";
};
export type DashboardUnit = (typeof dashboardUnit)[keyof typeof dashboardUnit];
export type DateTimeRange = {
    after?: InputMaybe<Scalars['DateTime']['input']>;
    before?: InputMaybe<Scalars['DateTime']['input']>;
};
export declare const day: {
    readonly Friday: "FRIDAY";
    readonly Monday: "MONDAY";
    readonly Saturday: "SATURDAY";
    readonly Sunday: "SUNDAY";
    readonly Thursday: "THURSDAY";
    readonly Tuesday: "TUESDAY";
    readonly Wednesday: "WEDNESDAY";
};
export type Day = (typeof day)[keyof typeof day];
export declare const deMinimisThreshold: {
    readonly Above: "ABOVE";
    readonly Below: "BELOW";
};
export type DeMinimisThreshold = (typeof deMinimisThreshold)[keyof typeof deMinimisThreshold];
export declare const deMinimisType: {
    readonly Duty: "DUTY";
    readonly Fee: "FEE";
    readonly Tax: "TAX";
};
export type DeMinimisType = (typeof deMinimisType)[keyof typeof deMinimisType];
export declare const deleteJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type DeleteJobStatus = (typeof deleteJobStatus)[keyof typeof deleteJobStatus];
export declare const deliveryType: {
    readonly Consolidated: "CONSOLIDATED";
    readonly Courier: "COURIER";
    readonly Postal: "POSTAL";
};
export type DeliveryType = (typeof deliveryType)[keyof typeof deliveryType];
export declare const deniedPartyAction: {
    readonly NoMatches: "NO_MATCHES";
    readonly Review: "REVIEW";
};
export type DeniedPartyAction = (typeof deniedPartyAction)[keyof typeof deniedPartyAction];
export declare const descriptionOverrideScope: {
    readonly Customs: "CUSTOMS";
    readonly CustomsAndLabels: "CUSTOMS_AND_LABELS";
    readonly Labels: "LABELS";
};
export type DescriptionOverrideScope = (typeof descriptionOverrideScope)[keyof typeof descriptionOverrideScope];
export declare const dimensionalUnitCode: {
    readonly Centimeter: "CENTIMETER";
    readonly Decimeter: "DECIMETER";
    readonly Foot: "FOOT";
    readonly Inch: "INCH";
    readonly Meter: "METER";
    readonly Millimeter: "MILLIMETER";
    readonly Yard: "YARD";
};
export type DimensionalUnitCode = (typeof dimensionalUnitCode)[keyof typeof dimensionalUnitCode];
export declare const displayCurrency: {
    readonly DestinationCountry: "DESTINATION_COUNTRY";
    readonly StoreNative: "STORE_NATIVE";
};
export type DisplayCurrency = (typeof displayCurrency)[keyof typeof displayCurrency];
export declare const documentFilingType: {
    readonly Electronic: "ELECTRONIC";
    readonly HardCopy: "HARD_COPY";
};
export type DocumentFilingType = (typeof documentFilingType)[keyof typeof documentFilingType];
export declare const documentType: {
    readonly CertificateOfOrigin: "CERTIFICATE_OF_ORIGIN";
    readonly CommercialInvoice: "COMMERCIAL_INVOICE";
    readonly Other: "OTHER";
    readonly ProFormaInvoice: "PRO_FORMA_INVOICE";
    readonly UsmcaCertificationOfOrigin: "USMCA_CERTIFICATION_OF_ORIGIN";
    readonly UsmcaCommercialInvoiceCertificationOfOrigin: "USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN";
};
export type DocumentType = (typeof documentType)[keyof typeof documentType];
export declare const documentUsage: {
    readonly CustomerInformation: "CUSTOMER_INFORMATION";
    readonly ElectronicTradeDocuments: "ELECTRONIC_TRADE_DOCUMENTS";
    readonly PricingDocuments: "PRICING_DOCUMENTS";
};
export type DocumentUsage = (typeof documentUsage)[keyof typeof documentUsage];
export declare const dutyTaxFeeConfiguration: {
    readonly ExcludeAll: "EXCLUDE_ALL";
    readonly ExcludeDuty: "EXCLUDE_DUTY";
    readonly ExcludeFee: "EXCLUDE_FEE";
    readonly ExcludeTax: "EXCLUDE_TAX";
    readonly IncludeAll: "INCLUDE_ALL";
    readonly IncludeTax: "INCLUDE_TAX";
};
export type DutyTaxFeeConfiguration = (typeof dutyTaxFeeConfiguration)[keyof typeof dutyTaxFeeConfiguration];
export declare const dynamicPackagingStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type DynamicPackagingStatus = (typeof dynamicPackagingStatus)[keyof typeof dynamicPackagingStatus];
export declare const elementsUiStyle: {
    readonly Rounded: "ROUNDED";
    readonly Sharp: "SHARP";
};
export type ElementsUiStyle = (typeof elementsUiStyle)[keyof typeof elementsUiStyle];
export declare const elementsUiTheme: {
    readonly Dark: "DARK";
    readonly Light: "LIGHT";
    readonly System: "SYSTEM";
};
export type ElementsUiTheme = (typeof elementsUiTheme)[keyof typeof elementsUiTheme];
export declare const emailTemplateProviderType: {
    readonly Custom: "CUSTOM";
    readonly Sendgrid: "SENDGRID";
};
export type EmailTemplateProviderType = (typeof emailTemplateProviderType)[keyof typeof emailTemplateProviderType];
export declare const emailTemplateStatus: {
    readonly Primary: "PRIMARY";
    readonly Standard: "STANDARD";
};
export type EmailTemplateStatus = (typeof emailTemplateStatus)[keyof typeof emailTemplateStatus];
export declare const emailTemplateType: {
    readonly AbandonedCart: "ABANDONED_CART";
    readonly AccountOrderReceipt: "ACCOUNT_ORDER_RECEIPT";
    readonly CatalogExport: "CATALOG_EXPORT";
    readonly ClassificationExport: "CLASSIFICATION_EXPORT";
    readonly Custom: "CUSTOM";
    readonly InclusivePriceExport: "INCLUSIVE_PRICE_EXPORT";
    readonly ManualClassificationExport: "MANUAL_CLASSIFICATION_EXPORT";
    readonly MerchantOrderConfirmation: "MERCHANT_ORDER_CONFIRMATION";
    readonly OrderCanceled: "ORDER_CANCELED";
    readonly OrderConfirmation: "ORDER_CONFIRMATION";
    readonly OrderReceipt: "ORDER_RECEIPT";
    readonly OrderShipped: "ORDER_SHIPPED";
    readonly Unknown: "UNKNOWN";
};
export type EmailTemplateType = (typeof emailTemplateType)[keyof typeof emailTemplateType];
export declare const endOfDayBehavior: {
    readonly Exempt: "EXEMPT";
    readonly Required: "REQUIRED";
};
export type EndOfDayBehavior = (typeof endOfDayBehavior)[keyof typeof endOfDayBehavior];
export declare const errorDetail: {
    readonly DeadlineExceeded: "DEADLINE_EXCEEDED";
    readonly EnhanceYourCalm: "ENHANCE_YOUR_CALM";
    readonly FieldNotFound: "FIELD_NOT_FOUND";
    readonly InvalidArgument: "INVALID_ARGUMENT";
    readonly InvalidCursor: "INVALID_CURSOR";
    readonly MissingResource: "MISSING_RESOURCE";
    readonly ServiceError: "SERVICE_ERROR";
    readonly TcpFailure: "TCP_FAILURE";
    readonly ThrottledConcurrency: "THROTTLED_CONCURRENCY";
    readonly ThrottledCpu: "THROTTLED_CPU";
    readonly Unimplemented: "UNIMPLEMENTED";
    readonly Unknown: "UNKNOWN";
};
export type ErrorDetail = (typeof errorDetail)[keyof typeof errorDetail];
export declare const errorType: {
    readonly BadRequest: "BAD_REQUEST";
    readonly FailedPrecondition: "FAILED_PRECONDITION";
    readonly Internal: "INTERNAL";
    readonly NotFound: "NOT_FOUND";
    readonly PermissionDenied: "PERMISSION_DENIED";
    readonly Unauthenticated: "UNAUTHENTICATED";
    readonly Unavailable: "UNAVAILABLE";
    readonly Unknown: "UNKNOWN";
};
export type ErrorType = (typeof errorType)[keyof typeof errorType];
export declare const exchangeRateType: {
    readonly Guaranteed: "GUARANTEED";
    readonly MidMarket: "MID_MARKET";
};
export type ExchangeRateType = (typeof exchangeRateType)[keyof typeof exchangeRateType];
export declare const exportJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type ExportJobStatus = (typeof exportJobStatus)[keyof typeof exportJobStatus];
export declare const externalPaymentMethodStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type ExternalPaymentMethodStatus = (typeof externalPaymentMethodStatus)[keyof typeof externalPaymentMethodStatus];
export declare const externalPaymentMethodType: {
    readonly Paypal: "PAYPAL";
};
export type ExternalPaymentMethodType = (typeof externalPaymentMethodType)[keyof typeof externalPaymentMethodType];
export declare const externalServiceTokenType: {
    readonly PaypalClientId: "PAYPAL_CLIENT_ID";
    readonly StripePublishableToken: "STRIPE_PUBLISHABLE_TOKEN";
};
export type ExternalServiceTokenType = (typeof externalServiceTokenType)[keyof typeof externalServiceTokenType];
export type FailedSyncJobRecord = {
    catalogItemInclusivePriceId: Scalars['ID']['input'];
    errorMessage: Scalars['String']['input'];
};
export declare const fedExCategoryCode: {
    readonly Shipping: "SHIPPING";
};
export type FedExCategoryCode = (typeof fedExCategoryCode)[keyof typeof fedExCategoryCode];
export declare const feeRuleLocaleType: {
    readonly Domestic: "DOMESTIC";
    readonly Either: "EITHER";
    readonly International: "INTERNATIONAL";
};
export type FeeRuleLocaleType = (typeof feeRuleLocaleType)[keyof typeof feeRuleLocaleType];
export declare const fieldStatus: {
    readonly Hidden: "HIDDEN";
    readonly Required: "REQUIRED";
    readonly Visible: "VISIBLE";
};
export type FieldStatus = (typeof fieldStatus)[keyof typeof fieldStatus];
export declare const fulfillmentCenterType: {
    readonly ConsolidationCenter: "CONSOLIDATION_CENTER";
    readonly Primary: "PRIMARY";
    readonly Standard: "STANDARD";
};
export type FulfillmentCenterType = (typeof fulfillmentCenterType)[keyof typeof fulfillmentCenterType];
export declare const helloCurrencyBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type HelloCurrencyBehavior = (typeof helloCurrencyBehavior)[keyof typeof helloCurrencyBehavior];
export declare const helloEstimateBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type HelloEstimateBehavior = (typeof helloEstimateBehavior)[keyof typeof helloEstimateBehavior];
export declare const helloMobileLocation: {
    readonly BottomLeft: "BOTTOM_LEFT";
    readonly BottomRight: "BOTTOM_RIGHT";
    readonly TopLeft: "TOP_LEFT";
    readonly TopRight: "TOP_RIGHT";
};
export type HelloMobileLocation = (typeof helloMobileLocation)[keyof typeof helloMobileLocation];
export declare const helloPeekMessageBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type HelloPeekMessageBehavior = (typeof helloPeekMessageBehavior)[keyof typeof helloPeekMessageBehavior];
export declare const helloRestrictionBehavior: {
    readonly Disabled: "DISABLED";
    readonly RestrictAndBlock: "RESTRICT_AND_BLOCK";
    readonly RestrictAndWarn: "RESTRICT_AND_WARN";
};
export type HelloRestrictionBehavior = (typeof helloRestrictionBehavior)[keyof typeof helloRestrictionBehavior];
export declare const helloStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type HelloStatus = (typeof helloStatus)[keyof typeof helloStatus];
export declare const helloSubscriptionStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
};
export type HelloSubscriptionStatus = (typeof helloSubscriptionStatus)[keyof typeof helloSubscriptionStatus];
export declare const helloVisibilityStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type HelloVisibilityStatus = (typeof helloVisibilityStatus)[keyof typeof helloVisibilityStatus];
export declare const hsCodeProvidedTreatment: {
    readonly CheckCoherence: "CHECK_COHERENCE";
    readonly Ignore: "IGNORE";
    readonly ValidateOnly: "VALIDATE_ONLY";
};
export type HsCodeProvidedTreatment = (typeof hsCodeProvidedTreatment)[keyof typeof hsCodeProvidedTreatment];
export declare const hsCodeSource: {
    readonly Classify: "CLASSIFY";
    readonly Fallback: "FALLBACK";
    readonly Hybrid: "HYBRID";
    readonly UserProvided: "USER_PROVIDED";
};
export type HsCodeSource = (typeof hsCodeSource)[keyof typeof hsCodeSource];
export declare const hsCodeType: {
    readonly Chapter: "CHAPTER";
    readonly Export: "EXPORT";
    readonly Heading: "HEADING";
    readonly Section: "SECTION";
    readonly Subheading: "SUBHEADING";
    readonly Tariff: "TARIFF";
};
export type HsCodeType = (typeof hsCodeType)[keyof typeof hsCodeType];
export declare const hsCodeValidation: {
    readonly Coherent: "COHERENT";
    readonly Invalid: "INVALID";
    readonly NotApplicable: "NOT_APPLICABLE";
    readonly NotCoherent: "NOT_COHERENT";
    readonly SomewhatCoherent: "SOMEWHAT_COHERENT";
    readonly Valid: "VALID";
};
export type HsCodeValidation = (typeof hsCodeValidation)[keyof typeof hsCodeValidation];
export declare const imageFileType: {
    readonly Letterhead: "LETTERHEAD";
    readonly Signature: "SIGNATURE";
};
export type ImageFileType = (typeof imageFileType)[keyof typeof imageFileType];
export declare const imageSlot: {
    readonly Image_1: "IMAGE_1";
    readonly Image_2: "IMAGE_2";
    readonly Image_3: "IMAGE_3";
    readonly Image_4: "IMAGE_4";
    readonly Image_5: "IMAGE_5";
};
export type ImageSlot = (typeof imageSlot)[keyof typeof imageSlot];
export declare const inclusivePriceCalculateJobStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Completed: "COMPLETED";
    readonly CompletedWithErrors: "COMPLETED_WITH_ERRORS";
    readonly Failed: "FAILED";
    readonly InProgress: "IN_PROGRESS";
};
export type InclusivePriceCalculateJobStatus = (typeof inclusivePriceCalculateJobStatus)[keyof typeof inclusivePriceCalculateJobStatus];
export declare const inclusivePriceCatalogValidationJobCompletionStatus: {
    readonly Archived: "ARCHIVED";
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly InProgress: "IN_PROGRESS";
};
export type InclusivePriceCatalogValidationJobCompletionStatus = (typeof inclusivePriceCatalogValidationJobCompletionStatus)[keyof typeof inclusivePriceCatalogValidationJobCompletionStatus];
export declare const inclusivePriceCatalogValidationJobComplianceStatus: {
    readonly Compliant: "COMPLIANT";
    readonly NonCompliant: "NON_COMPLIANT";
    readonly Pending: "PENDING";
};
export type InclusivePriceCatalogValidationJobComplianceStatus = (typeof inclusivePriceCatalogValidationJobComplianceStatus)[keyof typeof inclusivePriceCatalogValidationJobComplianceStatus];
export declare const inclusivePriceExportJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type InclusivePriceExportJobStatus = (typeof inclusivePriceExportJobStatus)[keyof typeof inclusivePriceExportJobStatus];
export declare const inclusivePriceHistoryCsvJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type InclusivePriceHistoryCsvJobStatus = (typeof inclusivePriceHistoryCsvJobStatus)[keyof typeof inclusivePriceHistoryCsvJobStatus];
export declare const inclusivePriceHistorySource: {
    readonly Platform: "PLATFORM";
    readonly UserInput: "USER_INPUT";
    readonly Zonos: "ZONOS";
};
export type InclusivePriceHistorySource = (typeof inclusivePriceHistorySource)[keyof typeof inclusivePriceHistorySource];
export declare const inclusivePriceSettingAdjustmentStatus: {
    readonly Excluded: "EXCLUDED";
    readonly Included: "INCLUDED";
};
export type InclusivePriceSettingAdjustmentStatus = (typeof inclusivePriceSettingAdjustmentStatus)[keyof typeof inclusivePriceSettingAdjustmentStatus];
export declare const inclusivePriceSettingStatus: {
    readonly Archived: "ARCHIVED";
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type InclusivePriceSettingStatus = (typeof inclusivePriceSettingStatus)[keyof typeof inclusivePriceSettingStatus];
export declare const inclusivePriceStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
};
export type InclusivePriceStatus = (typeof inclusivePriceStatus)[keyof typeof inclusivePriceStatus];
export declare const inclusivePriceSyncJobStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Completed: "COMPLETED";
    readonly CompletedWithErrors: "COMPLETED_WITH_ERRORS";
    readonly Failed: "FAILED";
    readonly InProgress: "IN_PROGRESS";
    readonly Initialized: "INITIALIZED";
};
export type InclusivePriceSyncJobStatus = (typeof inclusivePriceSyncJobStatus)[keyof typeof inclusivePriceSyncJobStatus];
export declare const incotermCode: {
    readonly Cif: "CIF";
    readonly Custom: "CUSTOM";
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
    readonly Fob: "FOB";
};
export type IncotermCode = (typeof incotermCode)[keyof typeof incotermCode];
export declare const invoiceCarrier: {
    readonly Apc: "APC";
    readonly Asendia: "ASENDIA";
    readonly BoxC: "BOX_C";
    readonly BroadReach: "BROAD_REACH";
    readonly Dhl: "DHL";
    readonly DhlEcom: "DHL_ECOM";
    readonly Epost: "EPOST";
    readonly Fedex: "FEDEX";
    readonly Landmark: "LANDMARK";
    readonly Ups: "UPS";
};
export type InvoiceCarrier = (typeof invoiceCarrier)[keyof typeof invoiceCarrier];
export declare const invoiceLanguageCode: {
    readonly Bg: "BG";
    readonly Cs: "CS";
    readonly Da: "DA";
    readonly De: "DE";
    readonly El: "EL";
    readonly En: "EN";
    readonly Es: "ES";
    readonly Fi: "FI";
    readonly Fil: "FIL";
    readonly Fr: "FR";
    readonly FrCa: "FR_CA";
    readonly Hr: "HR";
    readonly Hu: "HU";
    readonly Id: "ID";
    readonly It: "IT";
    readonly Ja: "JA";
    readonly Ko: "KO";
    readonly Lt: "LT";
    readonly Lv: "LV";
    readonly Mn: "MN";
    readonly Ms: "MS";
    readonly Mt: "MT";
    readonly Nl: "NL";
    readonly No: "NO";
    readonly Pl: "PL";
    readonly Pt: "PT";
    readonly PtBr: "PT_BR";
    readonly Ro: "RO";
    readonly Ru: "RU";
    readonly Sk: "SK";
    readonly Sl: "SL";
    readonly Sv: "SV";
    readonly Th: "TH";
    readonly Tr: "TR";
    readonly Vi: "VI";
    readonly Zh: "ZH";
    readonly ZhHk: "ZH_HK";
    readonly ZhTw: "ZH_TW";
};
export type InvoiceLanguageCode = (typeof invoiceLanguageCode)[keyof typeof invoiceLanguageCode];
export declare const invoiceProcessor: {
    readonly Stripe: "STRIPE";
};
export type InvoiceProcessor = (typeof invoiceProcessor)[keyof typeof invoiceProcessor];
export declare const invoiceStatus: {
    readonly Received: "RECEIVED";
    readonly Reconciled: "RECONCILED";
    readonly Voided: "VOIDED";
};
export type InvoiceStatus = (typeof invoiceStatus)[keyof typeof invoiceStatus];
export declare const itemKeyPreference: {
    readonly None: "NONE";
    readonly ProductId: "PRODUCT_ID";
    readonly Sku: "SKU";
};
export type ItemKeyPreference = (typeof itemKeyPreference)[keyof typeof itemKeyPreference];
export declare const itemMeasurementType: {
    readonly AlcoholByVolume: "ALCOHOL_BY_VOLUME";
    readonly Height: "HEIGHT";
    readonly Length: "LENGTH";
    readonly Volume: "VOLUME";
    readonly Weight: "WEIGHT";
    readonly Width: "WIDTH";
};
export type ItemMeasurementType = (typeof itemMeasurementType)[keyof typeof itemMeasurementType];
export declare const itemRestrictionAction: {
    readonly NoMatch: "NO_MATCH";
    readonly ObservationsApply: "OBSERVATIONS_APPLY";
    readonly ProhibitionsApply: "PROHIBITIONS_APPLY";
    readonly RestrictionsApply: "RESTRICTIONS_APPLY";
};
export type ItemRestrictionAction = (typeof itemRestrictionAction)[keyof typeof itemRestrictionAction];
export declare const itemRestrictionType: {
    readonly Observation: "OBSERVATION";
    readonly Prohibition: "PROHIBITION";
    readonly Restriction: "RESTRICTION";
};
export type ItemRestrictionType = (typeof itemRestrictionType)[keyof typeof itemRestrictionType];
export declare const itemType: {
    readonly Bundle: "BUNDLE";
    readonly DigitalGood: "DIGITAL_GOOD";
    readonly PartialItem: "PARTIAL_ITEM";
    readonly PhysicalGood: "PHYSICAL_GOOD";
    readonly Service: "SERVICE";
    readonly Subscription: "SUBSCRIPTION";
};
export type ItemType = (typeof itemType)[keyof typeof itemType];
export declare const itemUnitOfMeasure: {
    readonly Centimeter: "CENTIMETER";
    readonly Foot: "FOOT";
    readonly Gram: "GRAM";
    readonly Inch: "INCH";
    readonly Kilogram: "KILOGRAM";
    readonly Liter: "LITER";
    readonly Meter: "METER";
    readonly Milliliter: "MILLILITER";
    readonly Millimeter: "MILLIMETER";
    readonly Ounce: "OUNCE";
    readonly Percentage: "PERCENTAGE";
    readonly Pound: "POUND";
    readonly Yard: "YARD";
};
export type ItemUnitOfMeasure = (typeof itemUnitOfMeasure)[keyof typeof itemUnitOfMeasure];
export declare const itemValueSource: {
    readonly ApiRequest: "API_REQUEST";
    readonly Catalog: "CATALOG";
    readonly Classify: "CLASSIFY";
    readonly ClassifyOnTheFly: "CLASSIFY_ON_THE_FLY";
    readonly Fallback: "FALLBACK";
    readonly Hybrid: "HYBRID";
    readonly OrganizationSetting: "ORGANIZATION_SETTING";
    readonly UserProvided: "USER_PROVIDED";
};
export type ItemValueSource = (typeof itemValueSource)[keyof typeof itemValueSource];
export declare const labelAmountType: {
    readonly Fee: "FEE";
    readonly Insurance: "INSURANCE";
    readonly Quote: "QUOTE";
};
export type LabelAmountType = (typeof labelAmountType)[keyof typeof labelAmountType];
export declare const labelFileType: {
    readonly Pdf: "PDF";
    readonly Zpl: "ZPL";
};
export type LabelFileType = (typeof labelFileType)[keyof typeof labelFileType];
export declare const labelSize: {
    readonly EightByEleven: "EIGHT_BY_ELEVEN";
    readonly FourByEight: "FOUR_BY_EIGHT";
    readonly FourBySix: "FOUR_BY_SIX";
};
export type LabelSize = (typeof labelSize)[keyof typeof labelSize];
export declare const labelStatusType: {
    readonly Created: "CREATED";
    readonly Voided: "VOIDED";
};
export type LabelStatusType = (typeof labelStatusType)[keyof typeof labelStatusType];
export declare const landedCostAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
    readonly Item: "ITEM";
    readonly PromoCode: "PROMO_CODE";
    readonly Shipping: "SHIPPING";
};
export type LandedCostAdjustmentType = (typeof landedCostAdjustmentType)[keyof typeof landedCostAdjustmentType];
export declare const landedCostBillingPartyType: {
    readonly Customer: "CUSTOMER";
    readonly Merchant: "MERCHANT";
    readonly ThirdParty: "THIRD_PARTY";
    readonly Zonos: "ZONOS";
};
export type LandedCostBillingPartyType = (typeof landedCostBillingPartyType)[keyof typeof landedCostBillingPartyType];
export declare const landedCostCalculationMethod: {
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
    readonly DdpAndDap: "DDP_AND_DAP";
    readonly DdpPreferred: "DDP_PREFERRED";
    readonly ZonosConfigured: "ZONOS_CONFIGURED";
};
export type LandedCostCalculationMethod = (typeof landedCostCalculationMethod)[keyof typeof landedCostCalculationMethod];
export declare const landedCostEndUse: {
    readonly ForResale: "FOR_RESALE";
    readonly NotForResale: "NOT_FOR_RESALE";
};
export type LandedCostEndUse = (typeof landedCostEndUse)[keyof typeof landedCostEndUse];
export declare const landedCostFeeType: {
    readonly AdditionalTariffLines: "ADDITIONAL_TARIFF_LINES";
    readonly Adjustment: "ADJUSTMENT";
    readonly Advancement: "ADVANCEMENT";
    readonly BrokerageFee: "BROKERAGE_FEE";
    readonly Buffer: "BUFFER";
    readonly Cod: "COD";
    readonly Country: "COUNTRY";
    readonly CurrencyConversionFee: "CURRENCY_CONVERSION_FEE";
    readonly DdpServiceFee: "DDP_SERVICE_FEE";
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly InclusivePriceAdjustment: "INCLUSIVE_PRICE_ADJUSTMENT";
    readonly InclusivePricing: "INCLUSIVE_PRICING";
    readonly Item: "ITEM";
    readonly Other: "OTHER";
    readonly PartnerRevShare: "PARTNER_REV_SHARE";
    readonly Shipping: "SHIPPING";
    readonly Tax: "TAX";
    readonly ZonosAccessFee: "ZONOS_ACCESS_FEE";
    readonly ZonosLandedCost: "ZONOS_LANDED_COST";
    readonly ZonosLandedCostGuarantee: "ZONOS_LANDED_COST_GUARANTEE";
    readonly ZonosMerchantFee: "ZONOS_MERCHANT_FEE";
    readonly ZonosMerchantProcessing: "ZONOS_MERCHANT_PROCESSING";
    readonly ZonosTransaction: "ZONOS_TRANSACTION";
};
export type LandedCostFeeType = (typeof landedCostFeeType)[keyof typeof landedCostFeeType];
export declare const landedCostGuaranteeCode: {
    readonly InclusivePrice: "INCLUSIVE_PRICE";
    readonly NotApplicable: "NOT_APPLICABLE";
    readonly PostalDdp: "POSTAL_DDP";
    readonly PostalDdpInclusivePrice: "POSTAL_DDP_INCLUSIVE_PRICE";
    readonly Zonos: "ZONOS";
};
export type LandedCostGuaranteeCode = (typeof landedCostGuaranteeCode)[keyof typeof landedCostGuaranteeCode];
export declare const landedCostGuaranteeType: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type LandedCostGuaranteeType = (typeof landedCostGuaranteeType)[keyof typeof landedCostGuaranteeType];
export declare const landedCostMethod: {
    readonly DapForced: "DAP_FORCED";
    readonly DdpAndDap: "DDP_AND_DAP";
    readonly DdpForced: "DDP_FORCED";
    readonly DdpPreferred: "DDP_PREFERRED";
};
export type LandedCostMethod = (typeof landedCostMethod)[keyof typeof landedCostMethod];
export declare const landedCostQuoteType: {
    readonly Api: "API";
    readonly Auditing: "AUDITING";
    readonly Checkout: "CHECKOUT";
    readonly InclusivePrice: "INCLUSIVE_PRICE";
};
export type LandedCostQuoteType = (typeof landedCostQuoteType)[keyof typeof landedCostQuoteType];
export declare const landedCostTariffRate: {
    readonly Exact: "EXACT";
    readonly Maximum: "MAXIMUM";
    readonly Median: "MEDIAN";
    readonly Minimum: "MINIMUM";
    readonly ZonosPreferred: "ZONOS_PREFERRED";
};
export type LandedCostTariffRate = (typeof landedCostTariffRate)[keyof typeof landedCostTariffRate];
export declare const landedCostWeightUnit: {
    readonly Cg: "CG";
    readonly Ct: "CT";
    readonly G: "G";
    readonly Kg: "KG";
    readonly Lb: "LB";
    readonly Mg: "MG";
    readonly Oz: "OZ";
    readonly T: "T";
};
export type LandedCostWeightUnit = (typeof landedCostWeightUnit)[keyof typeof landedCostWeightUnit];
export declare const languageCode: {
    readonly Af: "AF";
    readonly Am: "AM";
    readonly Ar: "AR";
    readonly Az: "AZ";
    readonly Be: "BE";
    readonly Bg: "BG";
    readonly Bn: "BN";
    readonly Bs: "BS";
    readonly Ca: "CA";
    readonly Ceb: "CEB";
    readonly Co: "CO";
    readonly Cs: "CS";
    readonly Cy: "CY";
    readonly Da: "DA";
    readonly De: "DE";
    readonly El: "EL";
    readonly En: "EN";
    readonly Eo: "EO";
    readonly Es: "ES";
    readonly Et: "ET";
    readonly Eu: "EU";
    readonly Fa: "FA";
    readonly Fi: "FI";
    readonly Fr: "FR";
    readonly Fy: "FY";
    readonly Ga: "GA";
    readonly Gd: "GD";
    readonly Gl: "GL";
    readonly Gu: "GU";
    readonly Ha: "HA";
    readonly Haw: "HAW";
    readonly He: "HE";
    readonly Hi: "HI";
    readonly Hmn: "HMN";
    readonly Hr: "HR";
    readonly Ht: "HT";
    readonly Hu: "HU";
    readonly Hy: "HY";
    readonly Id: "ID";
    readonly Ig: "IG";
    readonly Is: "IS";
    readonly It: "IT";
    readonly Iw: "IW";
    readonly Ja: "JA";
    readonly Jv: "JV";
    readonly Ka: "KA";
    readonly Kk: "KK";
    readonly Km: "KM";
    readonly Kn: "KN";
    readonly Ko: "KO";
    readonly Ku: "KU";
    readonly Ky: "KY";
    readonly Lb: "LB";
    readonly Lo: "LO";
    readonly Lt: "LT";
    readonly Lv: "LV";
    readonly Mg: "MG";
    readonly Mi: "MI";
    readonly Mk: "MK";
    readonly Ml: "ML";
    readonly Mn: "MN";
    readonly Mr: "MR";
    readonly Ms: "MS";
    readonly Mt: "MT";
    readonly My: "MY";
    readonly Ne: "NE";
    readonly Nl: "NL";
    readonly No: "NO";
    readonly Ny: "NY";
    readonly Or: "OR";
    readonly Pa: "PA";
    readonly Pl: "PL";
    readonly Ps: "PS";
    readonly Pt: "PT";
    readonly Ro: "RO";
    readonly Ru: "RU";
    readonly Rw: "RW";
    readonly Sd: "SD";
    readonly Si: "SI";
    readonly Sk: "SK";
    readonly Sl: "SL";
    readonly Sm: "SM";
    readonly Sn: "SN";
    readonly So: "SO";
    readonly Sq: "SQ";
    readonly Sr: "SR";
    readonly St: "ST";
    readonly Su: "SU";
    readonly Sv: "SV";
    readonly Sw: "SW";
    readonly Ta: "TA";
    readonly Te: "TE";
    readonly Tg: "TG";
    readonly Th: "TH";
    readonly Tk: "TK";
    readonly Tl: "TL";
    readonly Tr: "TR";
    readonly Tt: "TT";
    readonly Ug: "UG";
    readonly Uk: "UK";
    readonly Ur: "UR";
    readonly Uz: "UZ";
    readonly Vi: "VI";
    readonly Xh: "XH";
    readonly Yi: "YI";
    readonly Yo: "YO";
    readonly ZhCn: "ZH_CN";
    readonly ZhTw: "ZH_TW";
    readonly Zu: "ZU";
};
export type LanguageCode = (typeof languageCode)[keyof typeof languageCode];
export declare const lcgBillingMethod: {
    readonly BillingDgs: "BILLING_DGS";
    readonly Legacy: "LEGACY";
};
export type LcgBillingMethod = (typeof lcgBillingMethod)[keyof typeof lcgBillingMethod];
export declare const linkType: {
    readonly AccountOnboarding: "ACCOUNT_ONBOARDING";
    readonly AccountUpdate: "ACCOUNT_UPDATE";
};
export type LinkType = (typeof linkType)[keyof typeof linkType];
export declare const manualClassificationBulkJobStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly ManuallyClassified: "MANUALLY_CLASSIFIED";
    readonly Processing: "PROCESSING";
};
export type ManualClassificationBulkJobStatus = (typeof manualClassificationBulkJobStatus)[keyof typeof manualClassificationBulkJobStatus];
export declare const manualClassificationExportJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type ManualClassificationExportJobStatus = (typeof manualClassificationExportJobStatus)[keyof typeof manualClassificationExportJobStatus];
export declare const manualClassificationRequestCreateStatus: {
    readonly Created: "CREATED";
    readonly Existing: "EXISTING";
};
export type ManualClassificationRequestCreateStatus = (typeof manualClassificationRequestCreateStatus)[keyof typeof manualClassificationRequestCreateStatus];
export declare const manualClassificationRequestStatus: {
    readonly Completed: "COMPLETED";
    readonly Invalidated: "INVALIDATED";
    readonly Pending: "PENDING";
    readonly Reserved: "RESERVED";
};
export type ManualClassificationRequestStatus = (typeof manualClassificationRequestStatus)[keyof typeof manualClassificationRequestStatus];
export declare const manualClassificationRequestsSorting: {
    readonly HsCode: "HS_CODE";
    readonly Priority: "PRIORITY";
};
export type ManualClassificationRequestsSorting = (typeof manualClassificationRequestsSorting)[keyof typeof manualClassificationRequestsSorting];
export declare const manualClassificationSettingStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type ManualClassificationSettingStatus = (typeof manualClassificationSettingStatus)[keyof typeof manualClassificationSettingStatus];
export declare const manualClassificationStatus: {
    readonly Active: "ACTIVE";
    readonly Archived: "ARCHIVED";
};
export type ManualClassificationStatus = (typeof manualClassificationStatus)[keyof typeof manualClassificationStatus];
export declare const matchType: {
    readonly ExactMatch: "EXACT_MATCH";
    readonly NoMatch: "NO_MATCH";
    readonly PartialMatch: "PARTIAL_MATCH";
};
export type MatchType = (typeof matchType)[keyof typeof matchType];
export declare const merchantOfRecordType: {
    readonly Merchant: "MERCHANT";
    readonly Zonos: "ZONOS";
};
export type MerchantOfRecordType = (typeof merchantOfRecordType)[keyof typeof merchantOfRecordType];
export declare const mode: {
    readonly Live: "LIVE";
    readonly Test: "TEST";
};
export type Mode = (typeof mode)[keyof typeof mode];
export declare const multiFactorAuthSetting: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type MultiFactorAuthSetting = (typeof multiFactorAuthSetting)[keyof typeof multiFactorAuthSetting];
export declare const notificationActiveStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type NotificationActiveStatus = (typeof notificationActiveStatus)[keyof typeof notificationActiveStatus];
export declare const orderBillingAdjustmentFeeType: {
    readonly AdditionalTariffLines: "ADDITIONAL_TARIFF_LINES";
    readonly Adjustment: "ADJUSTMENT";
    readonly Advancement: "ADVANCEMENT";
    readonly BrokerageFee: "BROKERAGE_FEE";
    readonly Buffer: "BUFFER";
    readonly Cod: "COD";
    readonly Country: "COUNTRY";
    readonly CurrencyConversionFee: "CURRENCY_CONVERSION_FEE";
    readonly DdpServiceFee: "DDP_SERVICE_FEE";
    readonly Duty: "DUTY";
    readonly FxFee: "FX_FEE";
    readonly FxFeeNonRefundedAmounts: "FX_FEE_NON_REFUNDED_AMOUNTS";
    readonly InclusivePriceAdjustment: "INCLUSIVE_PRICE_ADJUSTMENT";
    readonly InclusivePricing: "INCLUSIVE_PRICING";
    readonly Item: "ITEM";
    readonly Other: "OTHER";
    readonly Shipping: "SHIPPING";
    readonly Tax: "TAX";
    readonly ZonosLandedCost: "ZONOS_LANDED_COST";
    readonly ZonosMerchantProcessing: "ZONOS_MERCHANT_PROCESSING";
    readonly ZonosTransaction: "ZONOS_TRANSACTION";
};
export type OrderBillingAdjustmentFeeType = (typeof orderBillingAdjustmentFeeType)[keyof typeof orderBillingAdjustmentFeeType];
export declare const orderCompleteBillingMethod: {
    readonly BillingDgs: "BILLING_DGS";
    readonly Legacy: "LEGACY";
};
export type OrderCompleteBillingMethod = (typeof orderCompleteBillingMethod)[keyof typeof orderCompleteBillingMethod];
export declare const orderNoteType: {
    readonly Comment: "COMMENT";
    readonly NotificationSent: "NOTIFICATION_SENT";
    readonly OrderChange: "ORDER_CHANGE";
    readonly Shipment: "SHIPMENT";
    readonly Status: "STATUS";
};
export type OrderNoteType = (typeof orderNoteType)[keyof typeof orderNoteType];
export declare const orderRefundSubtotalType: {
    readonly Discount: "DISCOUNT";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
};
export type OrderRefundSubtotalType = (typeof orderRefundSubtotalType)[keyof typeof orderRefundSubtotalType];
export declare const orderStatus: {
    readonly Canceled: "CANCELED";
    readonly Completed: "COMPLETED";
    readonly FraudHold: "FRAUD_HOLD";
    readonly InTransitToConsolidationCenter: "IN_TRANSIT_TO_CONSOLIDATION_CENTER";
    readonly Open: "OPEN";
    readonly PartiallyShipped: "PARTIALLY_SHIPPED";
    readonly PaymentFailed: "PAYMENT_FAILED";
    readonly PaymentPending: "PAYMENT_PENDING";
};
export type OrderStatus = (typeof orderStatus)[keyof typeof orderStatus];
export declare const orderTransactionBillingMethod: {
    readonly BillingDgs: "BILLING_DGS";
    readonly Legacy: "LEGACY";
};
export type OrderTransactionBillingMethod = (typeof orderTransactionBillingMethod)[keyof typeof orderTransactionBillingMethod];
export declare const organizationBusinessUnit: {
    readonly Ecommerce: "ECOMMERCE";
    readonly SupplyChain: "SUPPLY_CHAIN";
};
export type OrganizationBusinessUnit = (typeof organizationBusinessUnit)[keyof typeof organizationBusinessUnit];
export declare const organizationStatus: {
    readonly Active: "ACTIVE";
    readonly Churned: "CHURNED";
    readonly Deleted: "DELETED";
    readonly Lead: "LEAD";
    readonly Onboarding: "ONBOARDING";
    readonly Transacting: "TRANSACTING";
    readonly Trial: "TRIAL";
};
export type OrganizationStatus = (typeof organizationStatus)[keyof typeof organizationStatus];
export declare const organizationType: {
    readonly Broker: "BROKER";
    readonly Developer: "DEVELOPER";
    readonly Government: "GOVERNMENT";
    readonly Integrator: "INTEGRATOR";
    readonly Logistics: "LOGISTICS";
    readonly Marketplace: "MARKETPLACE";
    readonly OnlineStore: "ONLINE_STORE";
    readonly Other: "OTHER";
    readonly Partner: "PARTNER";
    readonly Platform: "PLATFORM";
};
export type OrganizationType = (typeof organizationType)[keyof typeof organizationType];
export declare const packageLocation: {
    readonly Front: "FRONT";
    readonly None: "NONE";
    readonly Rear: "REAR";
    readonly Side: "SIDE";
};
export type PackageLocation = (typeof packageLocation)[keyof typeof packageLocation];
export declare const packagingOptionBulkExportJobStatus: {
    readonly Completed: "COMPLETED";
    readonly CompletedWithErrors: "COMPLETED_WITH_ERRORS";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
};
export type PackagingOptionBulkExportJobStatus = (typeof packagingOptionBulkExportJobStatus)[keyof typeof packagingOptionBulkExportJobStatus];
export declare const packagingOptionBulkJobStatus: {
    readonly Completed: "COMPLETED";
    readonly CompletedWithErrors: "COMPLETED_WITH_ERRORS";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
};
export type PackagingOptionBulkJobStatus = (typeof packagingOptionBulkJobStatus)[keyof typeof packagingOptionBulkJobStatus];
export declare const packagingOptionDeleteAction: {
    readonly Delete: "DELETE";
    readonly Disable: "DISABLE";
};
export type PackagingOptionDeleteAction = (typeof packagingOptionDeleteAction)[keyof typeof packagingOptionDeleteAction];
export declare const packagingOptionSource: {
    readonly Default: "DEFAULT";
    readonly Dynamic: "DYNAMIC";
    readonly Organization: "ORGANIZATION";
};
export type PackagingOptionSource = (typeof packagingOptionSource)[keyof typeof packagingOptionSource];
export declare const packagingOptionStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type PackagingOptionStatus = (typeof packagingOptionStatus)[keyof typeof packagingOptionStatus];
export declare const packagingType: {
    readonly Envelope: "ENVELOPE";
    readonly Flat: "FLAT";
    readonly Package: "PACKAGE";
    readonly Pak: "PAK";
    readonly Parcel: "PARCEL";
    readonly Polybag: "POLYBAG";
    readonly Tube: "TUBE";
};
export type PackagingType = (typeof packagingType)[keyof typeof packagingType];
export declare const packingPreference: {
    readonly Consolidated: "CONSOLIDATED";
    readonly ShipsAlone: "SHIPS_ALONE";
};
export type PackingPreference = (typeof packingPreference)[keyof typeof packingPreference];
export declare const partiesToTransaction: {
    readonly NonRelated: "NON_RELATED";
    readonly Related: "RELATED";
};
export type PartiesToTransaction = (typeof partiesToTransaction)[keyof typeof partiesToTransaction];
export declare const partyType: {
    readonly Destination: "DESTINATION";
    readonly Origin: "ORIGIN";
    readonly Payee: "PAYEE";
    readonly Payor: "PAYOR";
};
export type PartyType = (typeof partyType)[keyof typeof partyType];
export declare const paymentProcessorCode: {
    readonly Paypal: "PAYPAL";
    readonly Stripe: "STRIPE";
};
export type PaymentProcessorCode = (typeof paymentProcessorCode)[keyof typeof paymentProcessorCode];
export declare const paymentType: {
    readonly Card: "CARD";
    readonly UsBankAccount: "US_BANK_ACCOUNT";
};
export type PaymentType = (typeof paymentType)[keyof typeof paymentType];
export declare const paypalMockResponse: {
    readonly InstrumentDeclined: "INSTRUMENT_DECLINED";
    readonly InternalServerError: "INTERNAL_SERVER_ERROR";
    readonly TransactionRefused: "TRANSACTION_REFUSED";
};
export type PaypalMockResponse = (typeof paypalMockResponse)[keyof typeof paypalMockResponse];
export declare const paypalOrderStatus: {
    readonly Approved: "APPROVED";
    readonly Completed: "COMPLETED";
    readonly Created: "CREATED";
    readonly PayerActionRequired: "PAYER_ACTION_REQUIRED";
    readonly Saved: "SAVED";
    readonly Voided: "VOIDED";
};
export type PaypalOrderStatus = (typeof paypalOrderStatus)[keyof typeof paypalOrderStatus];
export declare const paypalPaymentStatus: {
    readonly Completed: "COMPLETED";
    readonly Declined: "DECLINED";
    readonly Failed: "FAILED";
    readonly PartiallyRefunded: "PARTIALLY_REFUNDED";
    readonly Pending: "PENDING";
    readonly Refunded: "REFUNDED";
};
export type PaypalPaymentStatus = (typeof paypalPaymentStatus)[keyof typeof paypalPaymentStatus];
export declare const paypalRefundStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
};
export type PaypalRefundStatus = (typeof paypalRefundStatus)[keyof typeof paypalRefundStatus];
export declare const pddpAmountType: {
    readonly FlcTotalCost: "FLC_TOTAL_COST";
    readonly InsuredValue: "INSURED_VALUE";
    readonly ShippingCost: "SHIPPING_COST";
    readonly ShoppingCartDuty: "SHOPPING_CART_DUTY";
    readonly ShoppingCartTax: "SHOPPING_CART_TAX";
    readonly ShoppingCartValue: "SHOPPING_CART_VALUE";
    readonly SurchargeValue: "SURCHARGE_VALUE";
};
export type PddpAmountType = (typeof pddpAmountType)[keyof typeof pddpAmountType];
export declare const pddpCountrySpecStatus: {
    readonly Active: "ACTIVE";
    readonly Disabled: "DISABLED";
};
export type PddpCountrySpecStatus = (typeof pddpCountrySpecStatus)[keyof typeof pddpCountrySpecStatus];
export declare const pddpStatus: {
    readonly Active: "ACTIVE";
    readonly Disabled: "DISABLED";
};
export type PddpStatus = (typeof pddpStatus)[keyof typeof pddpStatus];
export declare const pddpType: {
    readonly CanadaPost: "CANADA_POST";
    readonly Ipc: "IPC";
};
export type PddpType = (typeof pddpType)[keyof typeof pddpType];
export declare const pickupBuildingType: {
    readonly Apartment: "APARTMENT";
    readonly Building: "BUILDING";
    readonly Department: "DEPARTMENT";
    readonly Floor: "FLOOR";
    readonly Room: "ROOM";
    readonly Suite: "SUITE";
};
export type PickupBuildingType = (typeof pickupBuildingType)[keyof typeof pickupBuildingType];
export declare const pickupCategory: {
    readonly FedexDistanceDeferred: "FEDEX_DISTANCE_DEFERRED";
    readonly FedexNextDayAfternoon: "FEDEX_NEXT_DAY_AFTERNOON";
    readonly FedexNextDayEarlyMorning: "FEDEX_NEXT_DAY_EARLY_MORNING";
    readonly FedexNextDayEndOfDay: "FEDEX_NEXT_DAY_END_OF_DAY";
    readonly FedexNextDayFreight: "FEDEX_NEXT_DAY_FREIGHT";
    readonly FedexNextDayMidMorning: "FEDEX_NEXT_DAY_MID_MORNING";
    readonly FutureDay: "FUTURE_DAY";
    readonly SameDay: "SAME_DAY";
    readonly SameDayCity: "SAME_DAY_CITY";
};
export type PickupCategory = (typeof pickupCategory)[keyof typeof pickupCategory];
export declare const priceAdjustmentType: {
    readonly Fixed: "FIXED";
    readonly Percentage: "PERCENTAGE";
};
export type PriceAdjustmentType = (typeof priceAdjustmentType)[keyof typeof priceAdjustmentType];
export declare const processingStatusCode: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processed: "PROCESSED";
    readonly Voided: "VOIDED";
};
export type ProcessingStatusCode = (typeof processingStatusCode)[keyof typeof processingStatusCode];
export declare const propertyType: {
    readonly Commercial: "COMMERCIAL";
    readonly Residental: "RESIDENTAL";
    readonly Residential: "RESIDENTIAL";
};
export type PropertyType = (typeof propertyType)[keyof typeof propertyType];
export declare const providedHsCodeSource: {
    readonly Classify: "CLASSIFY";
    readonly User: "USER";
};
export type ProvidedHsCodeSource = (typeof providedHsCodeSource)[keyof typeof providedHsCodeSource];
export declare const providedHsCodeVisibilityStatus: {
    readonly NotVisible: "NOT_VISIBLE";
    readonly Visible: "VISIBLE";
};
export type ProvidedHsCodeVisibilityStatus = (typeof providedHsCodeVisibilityStatus)[keyof typeof providedHsCodeVisibilityStatus];
export declare const restrictedItemAction: {
    readonly Block: "BLOCK";
    readonly BlockAll: "BLOCK_ALL";
    readonly Warn: "WARN";
};
export type RestrictedItemAction = (typeof restrictedItemAction)[keyof typeof restrictedItemAction];
export declare const result: {
    readonly Failure: "FAILURE";
    readonly Success: "SUCCESS";
};
export type Result = (typeof result)[keyof typeof result];
export declare const roundingMethod: {
    readonly Custom: "CUSTOM";
    readonly Hundredth: "HUNDREDTH";
    readonly None: "NONE";
    readonly Tenth: "TENTH";
    readonly Thousandth: "THOUSANDTH";
    readonly Whole: "WHOLE";
};
export type RoundingMethod = (typeof roundingMethod)[keyof typeof roundingMethod];
export declare const searchIndex: {
    readonly Catalog: "CATALOG";
    readonly Orders: "ORDERS";
    readonly Quotes: "QUOTES";
    readonly Shipments: "SHIPMENTS";
};
export type SearchIndex = (typeof searchIndex)[keyof typeof searchIndex];
export declare const serviceLevelAvailability: {
    readonly Contracted: "CONTRACTED";
    readonly Disabled: "DISABLED";
    readonly General: "GENERAL";
};
export type ServiceLevelAvailability = (typeof serviceLevelAvailability)[keyof typeof serviceLevelAvailability];
export declare const shipmentAmountType: {
    readonly Buffer: "BUFFER";
    readonly Discount: "DISCOUNT";
    readonly FuelSurcharge: "FUEL_SURCHARGE";
    readonly Insurance: "INSURANCE";
    readonly PublishedRate: "PUBLISHED_RATE";
    readonly Surcharge: "SURCHARGE";
};
export type ShipmentAmountType = (typeof shipmentAmountType)[keyof typeof shipmentAmountType];
export declare const shipmentCartonSpecialService: {
    readonly Alcohol: "ALCOHOL";
    readonly Battery: "BATTERY";
    readonly BatteryInsideEquipment: "BATTERY_INSIDE_EQUIPMENT";
    readonly BatteryOnly: "BATTERY_ONLY";
    readonly BatteryPackagedWithEquipment: "BATTERY_PACKAGED_WITH_EQUIPMENT";
    readonly DangerousGoods: "DANGEROUS_GOODS";
    readonly DryIce: "DRY_ICE";
    readonly SignatureOption: "SIGNATURE_OPTION";
};
export type ShipmentCartonSpecialService = (typeof shipmentCartonSpecialService)[keyof typeof shipmentCartonSpecialService];
export declare const shipmentConsolidationStatus: {
    readonly Closed: "CLOSED";
    readonly Open: "OPEN";
};
export type ShipmentConsolidationStatus = (typeof shipmentConsolidationStatus)[keyof typeof shipmentConsolidationStatus];
export type ShipmentRatingBatteryDetail = {
    materialType: ShipmentRatingBatteryMaterialType;
    packingType: ShipmentRatingBatteryPackingType;
};
export declare const shipmentRatingBatteryMaterialType: {
    readonly LithiumIon: "LITHIUM_ION";
    readonly LithiumMetal: "LITHIUM_METAL";
};
export type ShipmentRatingBatteryMaterialType = (typeof shipmentRatingBatteryMaterialType)[keyof typeof shipmentRatingBatteryMaterialType];
export declare const shipmentRatingBatteryPackingType: {
    readonly BatteryInsideEquipment: "BATTERY_INSIDE_EQUIPMENT";
    readonly BatteryOnly: "BATTERY_ONLY";
    readonly BatteryPackagedWithEquipment: "BATTERY_PACKAGED_WITH_EQUIPMENT";
};
export type ShipmentRatingBatteryPackingType = (typeof shipmentRatingBatteryPackingType)[keyof typeof shipmentRatingBatteryPackingType];
export declare const shipmentRatingRateType: {
    readonly LabelEnabled: "LABEL_ENABLED";
    readonly Zone: "ZONE";
};
export type ShipmentRatingRateType = (typeof shipmentRatingRateType)[keyof typeof shipmentRatingRateType];
export declare const shipmentRatingSignatureOptionType: {
    readonly Adult: "ADULT";
    readonly Default: "DEFAULT";
    readonly Direct: "DIRECT";
    readonly Indirect: "INDIRECT";
};
export type ShipmentRatingSignatureOptionType = (typeof shipmentRatingSignatureOptionType)[keyof typeof shipmentRatingSignatureOptionType];
export type ShipmentRatingSpecialServiceDetail = {
    batteryDetail?: InputMaybe<ShipmentRatingBatteryDetail>;
    serviceTypes: Array<ShipmentRatingSpecialServiceType>;
    signatureOptionType?: InputMaybe<ShipmentRatingSignatureOptionType>;
};
export declare const shipmentRatingSpecialServiceType: {
    readonly Alcohol: "ALCOHOL";
    readonly Battery: "BATTERY";
    readonly CutFlowers: "CUT_FLOWERS";
    readonly DangerousGoods: "DANGEROUS_GOODS";
    readonly DryIce: "DRY_ICE";
    readonly SaturdayDelivery: "SATURDAY_DELIVERY";
    readonly SignatureOption: "SIGNATURE_OPTION";
    readonly SundayDelivery: "SUNDAY_DELIVERY";
};
export type ShipmentRatingSpecialServiceType = (typeof shipmentRatingSpecialServiceType)[keyof typeof shipmentRatingSpecialServiceType];
export declare const shipmentSpecialService: {
    readonly Consolidation: "CONSOLIDATION";
    readonly CutFlowers: "CUT_FLOWERS";
    readonly DryIce: "DRY_ICE";
    readonly ExtendedArea: "EXTENDED_AREA";
    readonly ReturnShipment: "RETURN_SHIPMENT";
    readonly SaturdayDelivery: "SATURDAY_DELIVERY";
    readonly SaturdayPickup: "SATURDAY_PICKUP";
    readonly ScheduledDelivery: "SCHEDULED_DELIVERY";
    readonly SingleShipment: "SINGLE_SHIPMENT";
};
export type ShipmentSpecialService = (typeof shipmentSpecialService)[keyof typeof shipmentSpecialService];
export declare const shipmentStatusType: {
    readonly Created: "CREATED";
    readonly Delivered: "DELIVERED";
    readonly DeliveredToConsolidationCenter: "DELIVERED_TO_CONSOLIDATION_CENTER";
    readonly InTransit: "IN_TRANSIT";
    readonly InTransitToConsolidationCenter: "IN_TRANSIT_TO_CONSOLIDATION_CENTER";
    readonly Voided: "VOIDED";
};
export type ShipmentStatusType = (typeof shipmentStatusType)[keyof typeof shipmentStatusType];
export declare const shipmentType: {
    readonly Domestic: "DOMESTIC";
    readonly International: "INTERNATIONAL";
};
export type ShipmentType = (typeof shipmentType)[keyof typeof shipmentType];
export declare const shippingPaymentType: {
    readonly Sender: "SENDER";
    readonly ThirdParty: "THIRD_PARTY";
};
export type ShippingPaymentType = (typeof shippingPaymentType)[keyof typeof shippingPaymentType];
export declare const shippingRateCalculation: {
    readonly Fixed: "FIXED";
    readonly PerUnit: "PER_UNIT";
};
export type ShippingRateCalculation = (typeof shippingRateCalculation)[keyof typeof shippingRateCalculation];
export declare const signatureOptionType: {
    readonly Adult: "ADULT";
    readonly Default: "DEFAULT";
    readonly Direct: "DIRECT";
    readonly Indirect: "INDIRECT";
    readonly None: "NONE";
};
export type SignatureOptionType = (typeof signatureOptionType)[keyof typeof signatureOptionType];
export declare const storeFeeRuleType: {
    readonly Custom: "CUSTOM";
    readonly Negotiable: "NEGOTIABLE";
    readonly NonNegotiable: "NON_NEGOTIABLE";
    readonly RequiredCustom: "REQUIRED_CUSTOM";
    readonly RequiredNegotiable: "REQUIRED_NEGOTIABLE";
    readonly RequiredNonNegotiable: "REQUIRED_NON_NEGOTIABLE";
    readonly Transitory: "TRANSITORY";
    readonly TransitoryCustom: "TRANSITORY_CUSTOM";
};
export type StoreFeeRuleType = (typeof storeFeeRuleType)[keyof typeof storeFeeRuleType];
export declare const stripeActiveStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
};
export type StripeActiveStatus = (typeof stripeActiveStatus)[keyof typeof stripeActiveStatus];
export declare const stripeBillingFrequency: {
    readonly Day: "DAY";
    readonly Month: "MONTH";
    readonly Week: "WEEK";
    readonly Year: "YEAR";
};
export type StripeBillingFrequency = (typeof stripeBillingFrequency)[keyof typeof stripeBillingFrequency];
export declare const stripeChargeStatus: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Succeeded: "SUCCEEDED";
};
export type StripeChargeStatus = (typeof stripeChargeStatus)[keyof typeof stripeChargeStatus];
export declare const stripeConnectAccountType: {
    readonly Custom: "CUSTOM";
    readonly Express: "EXPRESS";
    readonly Standard: "STANDARD";
};
export type StripeConnectAccountType = (typeof stripeConnectAccountType)[keyof typeof stripeConnectAccountType];
export declare const stripeConnectBusinessType: {
    readonly Company: "COMPANY";
    readonly GovernmentEntity: "GOVERNMENT_ENTITY";
    readonly Individual: "INDIVIDUAL";
    readonly NonProfit: "NON_PROFIT";
    readonly PubliclyTraded: "PUBLICLY_TRADED";
};
export type StripeConnectBusinessType = (typeof stripeConnectBusinessType)[keyof typeof stripeConnectBusinessType];
export declare const stripeConnectCapabilityStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
    readonly Pending: "PENDING";
};
export type StripeConnectCapabilityStatus = (typeof stripeConnectCapabilityStatus)[keyof typeof stripeConnectCapabilityStatus];
export declare const stripeConnectPayoutIntervalType: {
    readonly Daily: "DAILY";
    readonly Manual: "MANUAL";
    readonly Monthly: "MONTHLY";
    readonly Weekly: "WEEKLY";
};
export type StripeConnectPayoutIntervalType = (typeof stripeConnectPayoutIntervalType)[keyof typeof stripeConnectPayoutIntervalType];
export declare const stripePaymentIntentStatus: {
    readonly Canceled: "CANCELED";
    readonly Processing: "PROCESSING";
    readonly RequiresAction: "REQUIRES_ACTION";
    readonly RequiresCapture: "REQUIRES_CAPTURE";
    readonly RequiresConfirmation: "REQUIRES_CONFIRMATION";
    readonly RequiresPaymentMethod: "REQUIRES_PAYMENT_METHOD";
    readonly Succeeded: "SUCCEEDED";
};
export type StripePaymentIntentStatus = (typeof stripePaymentIntentStatus)[keyof typeof stripePaymentIntentStatus];
export declare const stripePriceBillingScheme: {
    readonly PerUnit: "PER_UNIT";
    readonly Tiered: "TIERED";
};
export type StripePriceBillingScheme = (typeof stripePriceBillingScheme)[keyof typeof stripePriceBillingScheme];
export declare const stripePriceType: {
    readonly OneTime: "ONE_TIME";
    readonly Recurring: "RECURRING";
};
export type StripePriceType = (typeof stripePriceType)[keyof typeof stripePriceType];
export declare const stripeSubscriptionCollectionMethod: {
    readonly ChargeAutomatically: "CHARGE_AUTOMATICALLY";
    readonly SendInvoice: "SEND_INVOICE";
};
export type StripeSubscriptionCollectionMethod = (typeof stripeSubscriptionCollectionMethod)[keyof typeof stripeSubscriptionCollectionMethod];
export declare const stripeSubscriptionStatus: {
    readonly Active: "ACTIVE";
    readonly Canceled: "CANCELED";
    readonly Deleted: "DELETED";
    readonly Incomplete: "INCOMPLETE";
    readonly IncompleteExpired: "INCOMPLETE_EXPIRED";
    readonly PastDue: "PAST_DUE";
    readonly Paused: "PAUSED";
    readonly Trialing: "TRIALING";
    readonly Unpaid: "UNPAID";
};
export type StripeSubscriptionStatus = (typeof stripeSubscriptionStatus)[keyof typeof stripeSubscriptionStatus];
export declare const taxCalculationType: {
    readonly Cif: "CIF";
    readonly Custom: "CUSTOM";
    readonly Fob: "FOB";
};
export type TaxCalculationType = (typeof taxCalculationType)[keyof typeof taxCalculationType];
export declare const taxIdType: {
    readonly Cnp: "CNP";
    readonly Cuil: "CUIL";
    readonly Dan: "DAN";
    readonly Dni: "DNI";
    readonly Dtf: "DTF";
    readonly Dun: "DUN";
    readonly Ein: "EIN";
    readonly Eori: "EORI";
    readonly Fed: "FED";
    readonly Ftz: "FTZ";
    readonly Gst: "GST";
    readonly Hmrc: "HMRC";
    readonly Ioss: "IOSS";
    readonly Lvg: "LVG";
    readonly Npwp: "NPWP";
    readonly Osr: "OSR";
    readonly Pan: "PAN";
    readonly Pccc: "PCCC";
    readonly Rfc: "RFC";
    readonly Run: "RUN";
    readonly Ssn: "SSN";
    readonly Sta: "STA";
    readonly Tan: "TAN";
    readonly Voec: "VOEC";
};
export type TaxIdType = (typeof taxIdType)[keyof typeof taxIdType];
export declare const taxMethodType: {
    readonly Consignment: "CONSIGNMENT";
    readonly Default: "DEFAULT";
    readonly Domestic: "DOMESTIC";
    readonly DomesticLcg: "DOMESTIC_LCG";
    readonly SellerOfRecord: "SELLER_OF_RECORD";
};
export type TaxMethodType = (typeof taxMethodType)[keyof typeof taxMethodType];
export declare const thirdPartyAccountType: {
    readonly Dhl: "DHL";
    readonly Fedex: "FEDEX";
    readonly Ups: "UPS";
    readonly Usps: "USPS";
};
export type ThirdPartyAccountType = (typeof thirdPartyAccountType)[keyof typeof thirdPartyAccountType];
export declare const tokenTypeCategory: {
    readonly Auxiliary: "AUXILIARY";
    readonly Functional: "FUNCTIONAL";
};
export type TokenTypeCategory = (typeof tokenTypeCategory)[keyof typeof tokenTypeCategory];
export declare const trackingEventTypeCode: {
    readonly Canceled: "CANCELED";
    readonly InTransit: "IN_TRANSIT";
    readonly OutForDelivery: "OUT_FOR_DELIVERY";
    readonly PickedUp: "PICKED_UP";
    readonly PreTransit: "PRE_TRANSIT";
};
export type TrackingEventTypeCode = (typeof trackingEventTypeCode)[keyof typeof trackingEventTypeCode];
export declare const trackingType: {
    readonly Package: "PACKAGE";
    readonly Shipment: "SHIPMENT";
};
export type TrackingType = (typeof trackingType)[keyof typeof trackingType];
export declare const transactionFeeType: {
    readonly DutyTax: "DUTY_TAX";
    readonly LcgPerShipment: "LCG_PER_SHIPMENT";
    readonly LcgPercentage: "LCG_PERCENTAGE";
    readonly Merchant: "MERCHANT";
    readonly Shipping: "SHIPPING";
};
export type TransactionFeeType = (typeof transactionFeeType)[keyof typeof transactionFeeType];
export declare const transitTypeCode: {
    readonly BusinessDays: "BUSINESS_DAYS";
    readonly Days: "DAYS";
    readonly Weeks: "WEEKS";
};
export type TransitTypeCode = (typeof transitTypeCode)[keyof typeof transitTypeCode];
export declare const usBankAccountType: {
    readonly Checking: "CHECKING";
    readonly Savings: "SAVINGS";
};
export type UsBankAccountType = (typeof usBankAccountType)[keyof typeof usBankAccountType];
export declare const usageRecordTypeCode: {
    readonly ApiUsage: "API_USAGE";
    readonly LcgInvoicing: "LCG_INVOICING";
    readonly MeterUsage: "METER_USAGE";
    readonly OrderComplete: "ORDER_COMPLETE";
    readonly OrderTransactionInvoicing: "ORDER_TRANSACTION_INVOICING";
};
export type UsageRecordTypeCode = (typeof usageRecordTypeCode)[keyof typeof usageRecordTypeCode];
export declare const visibilityCode: {
    readonly Hide: "HIDE";
    readonly Optional: "OPTIONAL";
    readonly Required: "REQUIRED";
};
export type VisibilityCode = (typeof visibilityCode)[keyof typeof visibilityCode];
export declare const volumeUnitCode: {
    readonly BarrelPetroleum: "BARREL_PETROLEUM";
    readonly BushelUk: "BUSHEL_UK";
    readonly BushelUsDry: "BUSHEL_US_DRY";
    readonly CentiliterCl: "CENTILITER_CL";
    readonly CubicCentimeter: "CUBIC_CENTIMETER";
    readonly CubicDecimeter: "CUBIC_DECIMETER";
    readonly CubicFoot: "CUBIC_FOOT";
    readonly CubicInch: "CUBIC_INCH";
    readonly CubicMeter: "CUBIC_METER";
    readonly CubicMillimeter: "CUBIC_MILLIMETER";
    readonly CubicYard: "CUBIC_YARD";
    readonly DecaliterDal: "DECALITER_DAL";
    readonly Deciliter: "DECILITER";
    readonly FluidDramFlDr: "FLUID_DRAM_FL_DR";
    readonly FluidOunceFlOz: "FLUID_OUNCE_FL_OZ";
    readonly FluidOunceUk: "FLUID_OUNCE_UK";
    readonly GallonFluid: "GALLON_FLUID";
    readonly GallonUk: "GALLON_UK";
    readonly GillGi: "GILL_GI";
    readonly Hectoliter: "HECTOLITER";
    readonly Kiloliter: "KILOLITER";
    readonly Liter: "LITER";
    readonly Microliter: "MICROLITER";
    readonly MilliliterMl: "MILLILITER_ML";
    readonly MinimMin: "MINIM_MIN";
    readonly PeckUsDry: "PECK_US_DRY";
    readonly PintFluid: "PINT_FLUID";
    readonly PintUk: "PINT_UK";
    readonly PintUsDry: "PINT_US_DRY";
    readonly QuartFluid: "QUART_FLUID";
    readonly QuartUk: "QUART_UK";
    readonly QuartUsDry: "QUART_US_DRY";
};
export type VolumeUnitCode = (typeof volumeUnitCode)[keyof typeof volumeUnitCode];
export declare const wcoVersion: {
    readonly Wco_1997: "WCO_1997";
    readonly Wco_2002: "WCO_2002";
    readonly Wco_2007: "WCO_2007";
    readonly Wco_2012: "WCO_2012";
    readonly Wco_2017: "WCO_2017";
    readonly Wco_2022: "WCO_2022";
    readonly Wco_2027: "WCO_2027";
    readonly Wco_2032: "WCO_2032";
    readonly Wco_2037: "WCO_2037";
    readonly Wco_2042: "WCO_2042";
    readonly Wco_2047: "WCO_2047";
    readonly Wco_2052: "WCO_2052";
    readonly Wco_2057: "WCO_2057";
    readonly Wco_2062: "WCO_2062";
    readonly Wco_2067: "WCO_2067";
    readonly Wco_2072: "WCO_2072";
};
export type WcoVersion = (typeof wcoVersion)[keyof typeof wcoVersion];
export declare const webhookStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type WebhookStatus = (typeof webhookStatus)[keyof typeof webhookStatus];
export declare const webhookType: {
    readonly InclusivePriceSyncReady: "INCLUSIVE_PRICE_SYNC_READY";
    readonly IpSettingStatusChanged: "IP_SETTING_STATUS_CHANGED";
    readonly OrderCanceled: "ORDER_CANCELED";
    readonly OrderCreated: "ORDER_CREATED";
    readonly OrderShipping: "ORDER_SHIPPING";
    readonly OrderStatusChanged: "ORDER_STATUS_CHANGED";
    readonly OrderUpdated: "ORDER_UPDATED";
    readonly ShipmentCanceled: "SHIPMENT_CANCELED";
    readonly ShipmentCreated: "SHIPMENT_CREATED";
};
export type WebhookType = (typeof webhookType)[keyof typeof webhookType];
export declare const weightUnitCode: {
    readonly Gram: "GRAM";
    readonly Kilogram: "KILOGRAM";
    readonly Ounce: "OUNCE";
    readonly Pound: "POUND";
};
export type WeightUnitCode = (typeof weightUnitCode)[keyof typeof weightUnitCode];
export declare const zoneLandedCostConfiguration: {
    readonly DapForced: "DAP_FORCED";
    readonly ShippingProfile: "SHIPPING_PROFILE";
};
export type ZoneLandedCostConfiguration = (typeof zoneLandedCostConfiguration)[keyof typeof zoneLandedCostConfiguration];
export declare const zonosAttribution: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type ZonosAttribution = (typeof zonosAttribution)[keyof typeof zonosAttribution];
export type OrganizationQuery = {
    organization: {
        id: string;
        references: {
            storeId: number | null;
        } | null;
    } | null;
};
export type CartCalculateLandedCostMutation = {
    cartWorkflow: {
        id: string;
        items: Array<{
            amount: number;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            description: string | null;
            id: string;
            imageUrl: string | null;
            name: string | null;
            productId: string;
            quantity: number;
            restriction: {
                action: RestrictedItemAction;
                reason: string;
            } | null;
            sku: string | null;
        }>;
    };
    cartonizeWorkflow: Array<{
        id: string;
        items: Array<{
            item: {
                id: string;
            };
        }> | null;
        type: PackagingType;
    } | null> | null;
    checkoutSessionWorkflow: Array<{
        landedCostId: string;
        subtotals: {
            adjustments: number;
            duties: number;
            exchangeRate: {
                id: string;
                rate: number;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                type: ExchangeRateType;
            };
            fees: number;
            items: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            shipping: number;
            taxes: number;
            total: number;
        };
    }> | null;
    landedCostCalculateWorkflow: Array<{
        amountSubtotals: {
            landedCostTotal: number;
        } | null;
        landedCostGuaranteeCode: LandedCostGuaranteeCode;
        deMinimis: Array<{
            formula: string;
            threshold: DeMinimisThreshold;
            method: IncotermCode;
            note: string;
            type: DeMinimisType;
        }>;
        duties: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        fees: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        id: string;
        appliedAdjustments: Array<{
            adjustment: {
                name: string | null;
                source: AdjustmentSource | null;
            } | null;
            amount: number;
            item: {
                amount: number;
            } | null;
            type: LandedCostAdjustmentType | null;
        }> | null;
        method: IncotermCode;
        shipmentRating: {
            id: string;
        };
        taxes: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
    } | null> | null;
    partyCreateWorkflow: Array<{
        id: string;
        organization: string;
        type: PartyType | null;
    }>;
    shipmentRatingCalculateWorkflow: Array<{
        amount: number;
        currencyCode: CurrencyCode;
        displayName: string;
        id: string;
        shippingProfile: {
            transitTime: {
                guaranteedDelivery: string | null;
                max: number | null;
                min: number | null;
                type: TransitTypeCode | null;
            } | null;
        } | null;
    }>;
};
export type CalculateLandedCostMutation = {
    cartonizeWorkflow: Array<{
        id: string;
        items: Array<{
            item: {
                id: string;
            };
        }> | null;
        type: PackagingType;
    } | null> | null;
    checkoutSessionWorkflow: Array<{
        landedCostId: string;
        subtotals: {
            adjustments: number;
            duties: number;
            exchangeRate: {
                id: string;
                rate: number;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                type: ExchangeRateType;
            };
            fees: number;
            items: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            shipping: number;
            taxes: number;
            total: number;
        };
    }> | null;
    itemCreateWorkflow: Array<{
        amount: number;
        attributes: Array<{
            key: string | null;
            value: string | null;
        } | null> | null;
        description: string | null;
        id: string;
        imageUrl: string | null;
        name: string | null;
        productId: string;
        quantity: number;
        restriction: {
            action: RestrictedItemAction;
            reason: string;
        } | null;
        sku: string | null;
    }>;
    landedCostCalculateWorkflow: Array<{
        amountSubtotals: {
            landedCostTotal: number;
        } | null;
        appliedAdjustments: Array<{
            adjustment: {
                name: string | null;
                source: AdjustmentSource | null;
            } | null;
            amount: number;
            item: {
                amount: number;
            } | null;
            type: LandedCostAdjustmentType | null;
        }> | null;
        deMinimis: Array<{
            formula: string;
            method: IncotermCode;
            threshold: DeMinimisThreshold;
            note: string;
            type: DeMinimisType;
        }>;
        duties: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        fees: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        id: string;
        landedCostGuaranteeCode: LandedCostGuaranteeCode;
        method: IncotermCode;
        shipmentRating: {
            id: string;
        };
        taxes: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
    } | null> | null;
    partyCreateWorkflow: Array<{
        id: string;
        organization: string;
        type: PartyType | null;
    }>;
    shipmentRatingCalculateWorkflow: Array<{
        amount: number;
        currencyCode: CurrencyCode;
        displayName: string;
        id: string;
        shippingProfile: {
            transitTime: {
                guaranteedDelivery: string | null;
                max: number | null;
                min: number | null;
                type: TransitTypeCode | null;
            } | null;
        } | null;
    }>;
};
export type CartItemFragmentFragment = {
    amount: number;
    attributes: Array<{
        key: string | null;
        value: string | null;
    } | null> | null;
    description: string | null;
    id: string;
    imageUrl: string | null;
    name: string | null;
    productId: string;
    quantity: number;
    restriction: {
        action: RestrictedItemAction;
        reason: string;
    } | null;
    sku: string | null;
};
export type CheckoutPresentmentFragment = {
    landedCostId: string;
    subtotals: {
        adjustments: number;
        duties: number;
        exchangeRate: {
            id: string;
            rate: number;
            sourceCurrencyCode: CurrencyCode;
            targetCurrencyCode: CurrencyCode;
            type: ExchangeRateType;
        };
        fees: number;
        items: number;
        landedCostTotal: number;
        presentmentCurrencyCode: CurrencyCode;
        shipping: number;
        taxes: number;
        total: number;
    };
};
export type LandedCostFragment = {
    amountSubtotals: {
        landedCostTotal: number;
    } | null;
    appliedAdjustments: Array<{
        adjustment: {
            name: string | null;
            source: AdjustmentSource | null;
        } | null;
        amount: number;
        item: {
            amount: number;
        } | null;
        type: LandedCostAdjustmentType | null;
    }> | null;
    deMinimis: Array<{
        formula: string;
        method: IncotermCode;
        note: string;
        threshold: DeMinimisThreshold;
        type: DeMinimisType;
    }>;
    duties: Array<{
        amount: number;
        currencyCode: CurrencyCode;
    }>;
    fees: Array<{
        amount: number;
        currencyCode: CurrencyCode;
    }>;
    id: string;
    landedCostGuaranteeCode: LandedCostGuaranteeCode;
    method: IncotermCode;
    shipmentRating: {
        id: string;
    };
    taxes: Array<{
        amount: number;
        currencyCode: CurrencyCode;
    }>;
};
export type ShipmentRatingFragment = {
    amount: number;
    currencyCode: CurrencyCode;
    displayName: string;
    id: string;
    shippingProfile: {
        transitTime: {
            guaranteedDelivery: string | null;
            max: number | null;
            min: number | null;
            type: TransitTypeCode | null;
        } | null;
    } | null;
};
export type FulfillmentCenterQuery = {
    fulfillmentCenters: Array<{
        name: string;
        party: {
            location: {
                administrativeArea: string | null;
                administrativeAreaCode: string | null;
                countryCode: CountryCode;
                latitude: number | null;
                line1: string | null;
                line2: string | null;
                line3: string | null;
                line4: string | null;
                locality: string | null;
                longitude: number | null;
                plusCode: string | null;
                postalCode: string | null;
                propertyType: PropertyType | null;
            } | null;
        };
        type: FulfillmentCenterType;
    }> | null;
};
export type PartyInfoQuery = {
    party: {
        person: {
            email: string | null;
            firstName: string | null;
            lastName: string | null;
            metadata: Array<{
                key: string;
                value: string | null;
            } | null> | null;
            phone: string | null;
        } | null;
    } | null;
};
export type PaypalOrderCaptureMutation = {
    paypalOrderCapture: {
        order: {
            id: string;
        } | null;
    };
};
export type CheckItemRestrictionsMutation = {
    itemRestrictionApply: {
        id: string;
        items: Array<{
            action: ItemRestrictionAction | null;
            id: string;
            itemDescription: string | null;
            itemRestrictions: Array<{
                hsCode: string;
                id: string;
                note: string;
                sources: Array<string | null> | null;
                type: ItemRestrictionType;
            } | null> | null;
        } | null>;
    };
};
export type BulkClassifyMutation = {
    classificationsCalculate: Array<{
        description: string | null;
        hsCode: {
            code: string;
        } | null;
        name: string;
    }>;
};
export type GetTaxIdByCountryQuery = {
    taxIds: Array<{
        administrativeAreaCode: string | null;
        allowLowValueOrders: boolean | null;
        countryCode: CountryCode;
        id: string;
        method: TaxMethodType;
        mode: Mode | null;
        sendEmails: boolean | null;
        taxIdNumber: string;
        type: TaxIdType;
    } | null> | null;
};
export type CheckoutSessionCreateMutation = {
    checkoutSessionCreate: {
        cartId: string | null;
        clientSecret: string;
        id: string;
        landedCost: {
            amountSubtotals: {
                discounts: number | null;
                duties: number;
                fees: number;
                items: number;
                landedCostTotal: number;
                shipping: number;
                taxes: number;
            } | null;
            id: string;
            landedCostGuaranteeCode: LandedCostGuaranteeCode;
            method: IncotermCode;
            shipmentRating: {
                displayName: string;
            };
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
        organizationId: string;
        subtotals: {
            adjustments: number;
            duties: number;
            exchangeRate: {
                id: string;
                rate: number;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                type: ExchangeRateType;
            };
            fees: number;
            items: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            shipping: number;
            taxes: number;
            total: number;
        };
    };
};
export type CheckoutSessionPaymentIntentCreateMutation = {
    checkoutSessionPaymentIntentCreate: {
        cartId: string | null;
        clientSecret: string;
        id: string;
        landedCost: {
            amountSubtotals: {
                discounts: number | null;
                duties: number;
                fees: number;
                items: number;
                landedCostTotal: number;
                shipping: number;
                taxes: number;
            } | null;
            id: string;
            landedCostGuaranteeCode: LandedCostGuaranteeCode;
            method: IncotermCode;
            shipmentRating: {
                displayName: string;
            };
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
        organizationId: string;
        subtotals: {
            adjustments: number;
            duties: number;
            exchangeRate: {
                id: string;
                rate: number;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                type: ExchangeRateType;
            };
            fees: number;
            items: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            shipping: number;
            taxes: number;
            total: number;
        };
    };
};
export type PaypalOrderCreateMutation = {
    paypalOrderCreate: {
        paypalOrderId: string | null;
    };
};
export type ExchangeRateCreateMutation = {
    exchangeRateCreate: {
        expiresAt: string;
        rate: number;
        targetFormat: {
            currencyCode: CurrencyCode;
            decimalDelimiter: string;
            scale: number;
            symbol: string;
            symbolLocation: CurrencySymbolLocation | null;
            thousandsDelimiter: string;
        } | null;
        type: ExchangeRateType;
    } | null;
};
export type GetCheckoutSessionQuery = {
    checkoutSession: {
        landedCost: {
            id: string;
            root: {
                parties: Array<{
                    id: string;
                } | null> | null;
            } | null;
        } | null;
        order: {
            id: string;
        } | null;
        subtotals: {
            presentmentCurrencyCode: CurrencyCode;
        };
    };
};
export type ActiveDiscountsQuery = {
    rules: {
        totalCount: number;
    } | null;
};
export type InclusivePriceSettingFieldsFragment = {
    duty: {
        status: InclusivePriceSettingAdjustmentStatus;
    };
    fee: {
        status: InclusivePriceSettingAdjustmentStatus;
    };
    id: string;
    status: InclusivePriceSettingStatus;
    tax: {
        status: InclusivePriceSettingAdjustmentStatus;
    };
};
export type GetInclusivePriceSettingByCountryQuery = {
    inclusivePriceSettings: {
        edges: Array<{
            node: {
                duty: {
                    status: InclusivePriceSettingAdjustmentStatus;
                };
                fee: {
                    status: InclusivePriceSettingAdjustmentStatus;
                };
                id: string;
                status: InclusivePriceSettingStatus;
                tax: {
                    status: InclusivePriceSettingAdjustmentStatus;
                };
            };
        }>;
    } | null;
};
export type OrderCreateMutation = {
    orderCreate: {
        id: string;
    } | null;
};
export type ShippingZonesQuery = {
    shippingZones: Array<{
        countryCodes: Array<CountryCode> | null;
    } | null> | null;
};
export type CheckoutSessionUpdateMetadataMutation = {
    checkoutSessionUpdate: {
        id: string;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
    };
};
export type CheckoutSessionDetailsFragment = {
    cartId: string | null;
    clientSecret: string;
    id: string;
    landedCost: {
        amountSubtotals: {
            discounts: number | null;
            duties: number;
            fees: number;
            items: number;
            landedCostTotal: number;
            shipping: number;
            taxes: number;
        } | null;
        id: string;
        landedCostGuaranteeCode: LandedCostGuaranteeCode;
        method: IncotermCode;
        shipmentRating: {
            displayName: string;
        };
    } | null;
    metadata: Array<{
        key: string;
        value: string;
    } | null> | null;
    organizationId: string;
    subtotals: {
        adjustments: number;
        duties: number;
        exchangeRate: {
            id: string;
            rate: number;
            sourceCurrencyCode: CurrencyCode;
            targetCurrencyCode: CurrencyCode;
            type: ExchangeRateType;
        };
        fees: number;
        items: number;
        landedCostTotal: number;
        presentmentCurrencyCode: CurrencyCode;
        shipping: number;
        taxes: number;
        total: number;
    };
};
export type CheckoutSessionUpdateMutation = {
    checkoutSessionUpdate: {
        cartId: string | null;
        clientSecret: string;
        id: string;
        landedCost: {
            amountSubtotals: {
                discounts: number | null;
                duties: number;
                fees: number;
                items: number;
                landedCostTotal: number;
                shipping: number;
                taxes: number;
            } | null;
            id: string;
            landedCostGuaranteeCode: LandedCostGuaranteeCode;
            method: IncotermCode;
            shipmentRating: {
                displayName: string;
            };
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
        organizationId: string;
        subtotals: {
            adjustments: number;
            duties: number;
            exchangeRate: {
                id: string;
                rate: number;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                type: ExchangeRateType;
            };
            fees: number;
            items: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            shipping: number;
            taxes: number;
            total: number;
        };
    };
};
export type ZonosSettingsQuery = {
    appearanceSettings: {
        colorPrimary: string;
        colorSecondary: string;
        createdAt: string;
        createdBy: string;
        fontFamily: string;
        id: string;
        logoUrl: string;
        mode: Mode;
        organization: string;
        style: ElementsUiStyle;
        theme: ElementsUiTheme;
        updatedAt: string;
        updatedBy: string;
        zonosAttribution: ZonosAttribution | null;
    } | null;
    checkoutSettings: {
        allowedCharacterSets: AllowedCharacterSets;
        analyticsProviders: Array<{
            status: AnalyticsProviderStatus;
            type: AnalyticsProviderType;
        }>;
        createdAt: string;
        createdBy: string;
        customHTML: string;
        disabledCountries: Array<CountryCode> | null;
        updatedAt: string;
        externalServiceTokens: Array<{
            token: string;
            type: ExternalServiceTokenType;
        }>;
        id: string;
        mode: Mode;
        orderNotifications: {
            abandonedCart: {
                delay: number;
                discountPercent: number;
                status: {
                    active: NotificationActiveStatus;
                    sendCopiesTo: Array<string>;
                };
            };
            orderCancelled: {
                active: NotificationActiveStatus;
                sendCopiesTo: Array<string>;
            };
            orderShipped: {
                active: NotificationActiveStatus;
                sendCopiesTo: Array<string>;
            };
        };
        organization: string;
        placeOrderButtonSelector: string | null;
        subscriptionStatus: CheckoutSubscriptionStatus;
        successBehavior: CheckoutSuccessBehavior;
        successRedirectUrl: string;
        externalPaymentMethods: Array<{
            status: ExternalPaymentMethodStatus;
            type: ExternalPaymentMethodType;
        }> | null;
        updatedBy: string;
        visibilityStatus: CheckoutVisibilityStatus;
    } | null;
    helloSettings: {
        allowedDomains: Array<string>;
        anchorElementSelector: string;
        cartUrlPattern: string | null;
        createdAt: string;
        createdBy: string;
        currencyBehavior: HelloCurrencyBehavior;
        currencyElementSelector: string;
        dutyTaxEstimationBehavior: HelloEstimateBehavior;
        excludedUrlPatterns: Array<string>;
        homepageUrlPattern: string | null;
        id: string;
        mobileLocation: HelloMobileLocation;
        mode: Mode;
        organization: string;
        peekMessageBehavior: HelloPeekMessageBehavior;
        peekMessageDelay: number;
        productAddToCartElementSelector: string | null;
        productListUrlPattern: string | null;
        productDetailUrlPattern: string | null;
        productDescriptionElementSelector: string | null;
        productPriceElementSelector: string | null;
        productTitleElementSelector: string | null;
        restrictionBehavior: HelloRestrictionBehavior;
        updatedAt: string;
        updatedBy: string;
    } | null;
    onlineStoreSettings: {
        allowedDomains: Array<string>;
        url: string;
    };
    organization: {
        id: string;
        name: string;
        references: {
            storeId: number | null;
        } | null;
    } | null;
};
export type CheckoutSettingFragment = {
    allowedCharacterSets: AllowedCharacterSets;
    analyticsProviders: Array<{
        status: AnalyticsProviderStatus;
        type: AnalyticsProviderType;
    }>;
    createdAt: string;
    createdBy: string;
    customHTML: string;
    disabledCountries: Array<CountryCode> | null;
    externalPaymentMethods: Array<{
        status: ExternalPaymentMethodStatus;
        type: ExternalPaymentMethodType;
    }> | null;
    externalServiceTokens: Array<{
        token: string;
        type: ExternalServiceTokenType;
    }>;
    id: string;
    mode: Mode;
    orderNotifications: {
        abandonedCart: {
            delay: number;
            discountPercent: number;
            status: {
                active: NotificationActiveStatus;
                sendCopiesTo: Array<string>;
            };
        };
        orderCancelled: {
            active: NotificationActiveStatus;
            sendCopiesTo: Array<string>;
        };
        orderShipped: {
            active: NotificationActiveStatus;
            sendCopiesTo: Array<string>;
        };
    };
    organization: string;
    placeOrderButtonSelector: string | null;
    subscriptionStatus: CheckoutSubscriptionStatus;
    successBehavior: CheckoutSuccessBehavior;
    successRedirectUrl: string;
    updatedAt: string;
    updatedBy: string;
    visibilityStatus: CheckoutVisibilityStatus;
};
export type HelloSettingFragment = {
    allowedDomains: Array<string>;
    anchorElementSelector: string;
    cartUrlPattern: string | null;
    createdAt: string;
    createdBy: string;
    currencyBehavior: HelloCurrencyBehavior;
    currencyElementSelector: string;
    dutyTaxEstimationBehavior: HelloEstimateBehavior;
    excludedUrlPatterns: Array<string>;
    homepageUrlPattern: string | null;
    id: string;
    mobileLocation: HelloMobileLocation;
    mode: Mode;
    organization: string;
    peekMessageBehavior: HelloPeekMessageBehavior;
    peekMessageDelay: number;
    productAddToCartElementSelector: string | null;
    productDescriptionElementSelector: string | null;
    productDetailUrlPattern: string | null;
    productListUrlPattern: string | null;
    productPriceElementSelector: string | null;
    productTitleElementSelector: string | null;
    restrictionBehavior: HelloRestrictionBehavior;
    updatedAt: string;
    updatedBy: string;
};
export type AppearanceSettingFragment = {
    colorPrimary: string;
    colorSecondary: string;
    createdAt: string;
    createdBy: string;
    fontFamily: string;
    id: string;
    logoUrl: string;
    mode: Mode;
    organization: string;
    style: ElementsUiStyle;
    theme: ElementsUiTheme;
    updatedAt: string;
    updatedBy: string;
    zonosAttribution: ZonosAttribution | null;
};
export type OnlineStoreSettingsQuery = {
    onlineStoreSettings: {
        allowedDomains: Array<string>;
        url: string;
    };
};
export type GetOrderQuery = {
    order: {
        accountOrderNumber: string | null;
        amountSubtotals: {
            duties: number;
            fees: number;
            items: number;
            shipping: number;
            taxes: number;
            variance: number;
        };
        createdAt: string;
        currencyCode: CurrencyCode;
        id: string;
        items: Array<{
            amount: number;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            countryOfOrigin: CountryCode | null;
            description: string | null;
            hsCode: string | null;
            metadata: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            name: string | null;
            productId: string;
            quantity: number;
            sku: string | null;
        }> | null;
        landedCosts: Array<{
            amountSubtotals: {
                duties: number;
                fees: number;
                items: number;
                landedCostTotal: number;
                shipping: number;
                taxes: number;
            } | null;
            appliedAdjustments: Array<{
                amount: number;
                item: {
                    amount: number;
                    name: string | null;
                } | null;
            }> | null;
            duties: Array<{
                exchangeRate: {
                    rate: number;
                    sourceCurrencyCode: CurrencyCode;
                    targetCurrencyCode: CurrencyCode;
                } | null;
            }>;
            shipmentRating: {
                amount: number;
                currencyCode: CurrencyCode;
                details: Array<{
                    amount: number;
                    carrierCode: string;
                    type: ShipmentAmountType;
                }> | null;
                displayName: string;
                id: string;
                serviceLevelCode: string;
            };
        }> | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
        mode: Mode;
        parties: Array<{
            location: {
                administrativeArea: string | null;
                administrativeAreaCode: string | null;
                countryCode: CountryCode;
                line1: string | null;
                line2: string | null;
                line3: string | null;
                line4: string | null;
                locality: string | null;
                longitude: number | null;
                postalCode: string | null;
            } | null;
            person: {
                companyName: string | null;
                email: string | null;
                firstName: string | null;
                lastName: string | null;
                phone: string | null;
            } | null;
            type: PartyType | null;
        }> | null;
        references: Array<{
            key: string | null;
            value: string | null;
        }> | null;
        root: {
            exchangeRates: Array<{
                rate: number;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                type: ExchangeRateType;
            }>;
        } | null;
        status: OrderStatus;
        trackingNumbers: Array<string | null> | null;
    } | null;
};
export type OrderUpdateAccountOrderNumberMutation = {
    orderUpdateAccountOrderNumber: {
        accountOrderNumber: string | null;
    };
};
export type GetOrdersQuery = {
    orders: {
        edges: Array<{
            node: {
                accountOrderNumber: string | null;
                createdAt: string;
                id: string;
                organization: string;
            } | null;
        } | null> | null;
        pageInfo: {
            endCursor: string | null;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor: string | null;
        };
    } | null;
};
export type GetWebhooksQuery = {
    webhooks: {
        edges: Array<{
            node: {
                id: string;
                query: string;
                status: WebhookStatus;
                type: WebhookType;
                url: string;
            } | null;
        }>;
    };
};
export type CreateWebhookMutation = {
    webhookCreate: {
        id: string;
        organizationId: string;
        type: WebhookType;
        url: string;
    } | null;
};
export type UpdateWebhookMutation = {
    webhookUpdate: {
        id: string;
        organizationId: string;
        type: WebhookType;
        url: string;
    } | null;
};
export type DeleteWebhookMutation = {
    webhookDelete: Result | null;
};
export type GetCheckoutPlaceOrderButtonSelectorQuery = {
    checkoutSettings: {
        placeOrderButtonSelector: string | null;
    } | null;
};
export type AddTrackingNumberMutation = {
    orderAddTrackingNumber: {
        id: string;
        status: OrderStatus;
        trackingNumbers: Array<string | null> | null;
    } | null;
};
export type RemoveTrackingNumberMutation = {
    orderRemoveTrackingNumber: {
        id: string;
        status: OrderStatus;
        trackingNumbers: Array<string | null> | null;
    } | null;
};
export type CartQuery = {
    cart: {
        adjustments: Array<{
            amount: number;
            currencyCode: CurrencyCode;
            description: string | null;
            productId: string | null;
            sku: string | null;
            type: CartAdjustmentType;
        }>;
        createdAt: string;
        id: string;
        items: Array<{
            amount: number;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            countryOfOrigin: CountryCode | null;
            currencyCode: CurrencyCode;
            description: string | null;
            id: string;
            imageUrl: string | null;
            itemType: ItemType | null;
            measurements: Array<{
                type: ItemMeasurementType;
                unitOfMeasure: ItemUnitOfMeasure;
                value: number;
            } | null> | null;
            name: string | null;
            productId: string;
            quantity: number;
            sku: string | null;
        }>;
        metadata: Array<{
            key: string;
            value: string;
        }>;
        organizationId: string;
    } | null;
};
export type GetCartOrganizationInfoQuery = {
    onlineStoreSettings: {
        url: string;
    };
    organization: {
        references: {
            storeId: number | null;
        } | null;
    } | null;
};
export type CartCreateMutation = {
    cartCreate: {
        adjustments: Array<{
            amount: number;
            currencyCode: CurrencyCode;
            description: string | null;
            productId: string | null;
            sku: string | null;
            type: CartAdjustmentType;
        }>;
        id: string;
        items: Array<{
            amount: number;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            description: string | null;
            id: string;
            imageUrl: string | null;
            name: string | null;
            quantity: number;
            restriction: {
                action: RestrictedItemAction;
                reason: string;
            } | null;
            sku: string | null;
        }>;
        metadata: Array<{
            key: string;
            value: string;
        }>;
        organizationId: string;
    };
};
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    activeDiscounts(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<ActiveDiscountsQuery>;
    addTrackingNumber(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddTrackingNumberMutation>;
    bulkClassify(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<BulkClassifyMutation>;
    calculateLandedCost(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CalculateLandedCostMutation>;
    cart(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CartQuery>;
    cartCalculateLandedCost(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CartCalculateLandedCostMutation>;
    cartCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CartCreateMutation>;
    checkItemRestrictions(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckItemRestrictionsMutation>;
    checkoutSessionCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckoutSessionCreateMutation>;
    checkoutSessionPaymentIntentCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckoutSessionPaymentIntentCreateMutation>;
    checkoutSessionUpdate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckoutSessionUpdateMutation>;
    checkoutSessionUpdateMetadata(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckoutSessionUpdateMetadataMutation>;
    createWebhook(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateWebhookMutation>;
    deleteWebhook(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteWebhookMutation>;
    exchangeRateCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<ExchangeRateCreateMutation>;
    fulfillmentCenter(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<FulfillmentCenterQuery>;
    getCartOrganizationInfo(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCartOrganizationInfoQuery>;
    getCheckoutPlaceOrderButtonSelector(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCheckoutPlaceOrderButtonSelectorQuery>;
    getCheckoutSession(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCheckoutSessionQuery>;
    getInclusivePriceSettingByCountry(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetInclusivePriceSettingByCountryQuery>;
    getOrder(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrderQuery>;
    getOrders(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrdersQuery>;
    getTaxIdByCountry(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTaxIdByCountryQuery>;
    getWebhooks(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetWebhooksQuery>;
    onlineStoreSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<OnlineStoreSettingsQuery>;
    orderCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<OrderCreateMutation>;
    orderUpdateAccountOrderNumber(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<OrderUpdateAccountOrderNumberMutation>;
    organization(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<OrganizationQuery>;
    partyInfo(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<PartyInfoQuery>;
    paypalOrderCapture(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<PaypalOrderCaptureMutation>;
    paypalOrderCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<PaypalOrderCreateMutation>;
    removeTrackingNumber(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveTrackingNumberMutation>;
    shippingZones(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<ShippingZonesQuery>;
    updateWebhook(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateWebhookMutation>;
    zonosSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<ZonosSettingsQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
