/** Internal type. DO NOT USE DIRECTLY. */
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
import type { GraphQLClient, RequestOptions } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    DateTime: {
        input: string;
        output: string;
    };
    Decimal: {
        input: number;
        output: number;
    };
    JSON: {
        input: Record<string, unknown>;
        output: Record<string, unknown>;
    };
    Long: {
        input: number;
        output: number;
    };
    ZonedDateTime: {
        input: string;
        output: string;
    };
};
export declare const accountCreditReason: {
    readonly Conversion: "CONVERSION";
    readonly InvoiceCredit: "INVOICE_CREDIT";
    readonly ManualAdjustment: "MANUAL_ADJUSTMENT";
};
export type AccountCreditReason = (typeof accountCreditReason)[keyof typeof accountCreditReason];
export declare const accountCreditStatus: {
    readonly Active: "ACTIVE";
    readonly Converted: "CONVERTED";
    readonly Exhausted: "EXHAUSTED";
    readonly Void: "VOID";
};
export type AccountCreditStatus = (typeof accountCreditStatus)[keyof typeof accountCreditStatus];
export declare const accountCreditTransactionType: {
    readonly Adjustment: "ADJUSTMENT";
    readonly Apply: "APPLY";
    readonly ConversionIn: "CONVERSION_IN";
    readonly ConversionOut: "CONVERSION_OUT";
    readonly Grant: "GRANT";
    readonly Refund: "REFUND";
    readonly Restore: "RESTORE";
    readonly Void: "VOID";
};
export type AccountCreditTransactionType = (typeof accountCreditTransactionType)[keyof typeof accountCreditTransactionType];
export declare const accountHolderType: {
    readonly Company: "COMPANY";
    readonly Individual: "INDIVIDUAL";
};
export type AccountHolderType = (typeof accountHolderType)[keyof typeof accountHolderType];
export declare const accountingFeeType: {
    readonly AdditionalTariffLines: "ADDITIONAL_TARIFF_LINES";
    readonly Adjustment: "ADJUSTMENT";
    readonly Advancement: "ADVANCEMENT";
    readonly AirlineRecoveryFee: "AIRLINE_RECOVERY_FEE";
    readonly AirwallexTransferFee: "AIRWALLEX_TRANSFER_FEE";
    readonly AnnualPlatformFee: "ANNUAL_PLATFORM_FEE";
    readonly ApiCrossDocking: "API_CROSS_DOCKING";
    readonly ApiGuaranteeOrder: "API_GUARANTEE_ORDER";
    readonly ApiGuaranteeOrderLegacy: "API_GUARANTEE_ORDER_LEGACY";
    readonly ApiGuaranteePercent: "API_GUARANTEE_PERCENT";
    readonly ApiGuaranteePercentRevenueShare: "API_GUARANTEE_PERCENT_REVENUE_SHARE";
    readonly ApiTransactionPercent: "API_TRANSACTION_PERCENT";
    readonly AsendiaDisbursementFee: "ASENDIA_DISBURSEMENT_FEE";
    readonly AsendiaRemittanceFee: "ASENDIA_REMITTANCE_FEE";
    readonly AustraliaBondFee: "AUSTRALIA_BOND_FEE";
    readonly AustraliaDisbursement: "AUSTRALIA_DISBURSEMENT";
    readonly AustraliaDisbursementFee: "AUSTRALIA_DISBURSEMENT_FEE";
    readonly AustraliaRemittanceFee: "AUSTRALIA_REMITTANCE_FEE";
    readonly AustriaRemittanceFee: "AUSTRIA_REMITTANCE_FEE";
    readonly BelizeDisbursementFee: "BELIZE_DISBURSEMENT_FEE";
    readonly BelizeGuaranteeOrder: "BELIZE_GUARANTEE_ORDER";
    readonly BelizeRemittanceFee: "BELIZE_REMITTANCE_FEE";
    readonly BermudaBondFee: "BERMUDA_BOND_FEE";
    readonly BermudaDisbursementFee: "BERMUDA_DISBURSEMENT_FEE";
    readonly BermudaPrepayFee: "BERMUDA_PREPAY_FEE";
    readonly BermudaPrepayPercent: "BERMUDA_PREPAY_PERCENT";
    readonly BermudaPrepayPhotoDiscount: "BERMUDA_PREPAY_PHOTO_DISCOUNT";
    readonly BermudaRemittanceFee: "BERMUDA_REMITTANCE_FEE";
    readonly BhutanDisbursementFee: "BHUTAN_DISBURSEMENT_FEE";
    readonly BhutanGuaranteeOrder: "BHUTAN_GUARANTEE_ORDER";
    readonly BhutanRemittanceFee: "BHUTAN_REMITTANCE_FEE";
    readonly BigcommerceAccessFeePercRevenueShare: "BIGCOMMERCE_ACCESS_FEE_PERC_REVENUE_SHARE";
    readonly BigcommerceGuaranteeOrder: "BIGCOMMERCE_GUARANTEE_ORDER";
    readonly BpostDisbursementFee: "BPOST_DISBURSEMENT_FEE";
    readonly BpostRemittanceFee: "BPOST_REMITTANCE_FEE";
    readonly BrokerageFee: "BROKERAGE_FEE";
    readonly BugCredit: "BUG_CREDIT";
    readonly BugFix: "BUG_FIX";
    readonly CambodiaDisbursementFee: "CAMBODIA_DISBURSEMENT_FEE";
    readonly CambodiaRemittanceFee: "CAMBODIA_REMITTANCE_FEE";
    readonly CanadaBondFee: "CANADA_BOND_FEE";
    readonly CanadaDisbursementFee: "CANADA_DISBURSEMENT_FEE";
    readonly CanadaPrepayFee: "CANADA_PREPAY_FEE";
    readonly CanadaPrepayPercent: "CANADA_PREPAY_PERCENT";
    readonly CanadaPrepayPhotoDiscount: "CANADA_PREPAY_PHOTO_DISCOUNT";
    readonly CanadaRemittanceAmountRevenueShare: "CANADA_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly CanadaRemittanceFee: "CANADA_REMITTANCE_FEE";
    readonly CarrierBillShipping: "CARRIER_BILL_SHIPPING";
    readonly CaymanIslandsDisbursementFee: "CAYMAN_ISLANDS_DISBURSEMENT_FEE";
    readonly CaymanIslandsRemittanceFee: "CAYMAN_ISLANDS_REMITTANCE_FEE";
    readonly CbpCentralizedExaminationStationFee: "CBP_CENTRALIZED_EXAMINATION_STATION_FEE";
    readonly CbpHoldManagementFee: "CBP_HOLD_MANAGEMENT_FEE";
    readonly CbpReassessment: "CBP_REASSESSMENT";
    readonly CbpTradeSolutionPilot: "CBP_TRADE_SOLUTION_PILOT";
    readonly Chargeback: "CHARGEBACK";
    readonly ChargebackFee: "CHARGEBACK_FEE";
    readonly CheckoutCrossDocking: "CHECKOUT_CROSS_DOCKING";
    readonly CheckoutFraudCoverage: "CHECKOUT_FRAUD_COVERAGE";
    readonly CheckoutGuaranteeOrder: "CHECKOUT_GUARANTEE_ORDER";
    readonly CheckoutGuaranteeOrderLegacy: "CHECKOUT_GUARANTEE_ORDER_LEGACY";
    readonly CheckoutGuaranteePercent: "CHECKOUT_GUARANTEE_PERCENT";
    readonly CheckoutItemDiscountIglobal: "CHECKOUT_ITEM_DISCOUNT_IGLOBAL";
    readonly CheckoutMerchantFeeAdditionalInternational: "CHECKOUT_MERCHANT_FEE_ADDITIONAL_INTERNATIONAL";
    readonly CheckoutMerchantFeeAmount: "CHECKOUT_MERCHANT_FEE_AMOUNT";
    readonly CheckoutMerchantFeePaypalPercent: "CHECKOUT_MERCHANT_FEE_PAYPAL_PERCENT";
    readonly CheckoutMerchantFeePercent: "CHECKOUT_MERCHANT_FEE_PERCENT";
    readonly CheckoutMerchantProcessing: "CHECKOUT_MERCHANT_PROCESSING";
    readonly CheckoutShippingIglobal: "CHECKOUT_SHIPPING_IGLOBAL";
    readonly CheckoutTransactionOrderLegacy: "CHECKOUT_TRANSACTION_ORDER_LEGACY";
    readonly CheckoutTransactionPercent: "CHECKOUT_TRANSACTION_PERCENT";
    readonly Cod: "COD";
    readonly CorreosBondFee: "CORREOS_BOND_FEE";
    readonly CorreosDisbursementFee: "CORREOS_DISBURSEMENT_FEE";
    readonly CorreosRemittanceFee: "CORREOS_REMITTANCE_FEE";
    readonly Country: "COUNTRY";
    readonly CountryOfOrigin: "COUNTRY_OF_ORIGIN";
    readonly Coupon: "COUPON";
    readonly Ctp: "CTP";
    readonly CttCorreiosDisbursementFee: "CTT_CORREIOS_DISBURSEMENT_FEE";
    readonly CttCorreiosRemittanceAmountRevenueShare: "CTT_CORREIOS_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly CuracaoBondFee: "CURACAO_BOND_FEE";
    readonly CuracaoDisbursementFee: "CURACAO_DISBURSEMENT_FEE";
    readonly CuracaoRemittanceAmountRevenueShare: "CURACAO_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly CuracaoRemittanceFee: "CURACAO_REMITTANCE_FEE";
    readonly CurrencyConversionFee: "CURRENCY_CONVERSION_FEE";
    readonly CyprusBondFee: "CYPRUS_BOND_FEE";
    readonly CyprusDisbursementFee: "CYPRUS_DISBURSEMENT_FEE";
    readonly CyprusPrepayFee: "CYPRUS_PREPAY_FEE";
    readonly CyprusPrepayPercent: "CYPRUS_PREPAY_PERCENT";
    readonly CyprusPrepayPhotoDiscount: "CYPRUS_PREPAY_PHOTO_DISCOUNT";
    readonly CzechDisbursementFee: "CZECH_DISBURSEMENT_FEE";
    readonly CzechGuaranteeOrder: "CZECH_GUARANTEE_ORDER";
    readonly CzechRemittanceFee: "CZECH_REMITTANCE_FEE";
    readonly DashboardLite: "DASHBOARD_LITE";
    readonly DdpServiceFee: "DDP_SERVICE_FEE";
    readonly DdpServiceFeeBuffer: "DDP_SERVICE_FEE_BUFFER";
    readonly DefermentFee: "DEFERMENT_FEE";
    readonly DeutscheDisbursementFee: "DEUTSCHE_DISBURSEMENT_FEE";
    readonly DeutscheRemittanceFee: "DEUTSCHE_REMITTANCE_FEE";
    readonly Discount: "DISCOUNT";
    readonly DuplicatePayment: "DUPLICATE_PAYMENT";
    readonly Duty: "DUTY";
    readonly DutyBrokerageUs: "DUTY_BROKERAGE_US";
    readonly DutyFx: "DUTY_FX";
    readonly DutyRemittance: "DUTY_REMITTANCE";
    readonly DutyRemittanceAt: "DUTY_REMITTANCE_AT";
    readonly DutyRemittanceAx: "DUTY_REMITTANCE_AX";
    readonly DutyRemittanceBe: "DUTY_REMITTANCE_BE";
    readonly DutyRemittanceBg: "DUTY_REMITTANCE_BG";
    readonly DutyRemittanceCy: "DUTY_REMITTANCE_CY";
    readonly DutyRemittanceCz: "DUTY_REMITTANCE_CZ";
    readonly DutyRemittanceDe: "DUTY_REMITTANCE_DE";
    readonly DutyRemittanceDk: "DUTY_REMITTANCE_DK";
    readonly DutyRemittanceEe: "DUTY_REMITTANCE_EE";
    readonly DutyRemittanceEs: "DUTY_REMITTANCE_ES";
    readonly DutyRemittanceFi: "DUTY_REMITTANCE_FI";
    readonly DutyRemittanceFr: "DUTY_REMITTANCE_FR";
    readonly DutyRemittanceGb: "DUTY_REMITTANCE_GB";
    readonly DutyRemittanceGf: "DUTY_REMITTANCE_GF";
    readonly DutyRemittanceGp: "DUTY_REMITTANCE_GP";
    readonly DutyRemittanceGr: "DUTY_REMITTANCE_GR";
    readonly DutyRemittanceHr: "DUTY_REMITTANCE_HR";
    readonly DutyRemittanceHu: "DUTY_REMITTANCE_HU";
    readonly DutyRemittanceIc: "DUTY_REMITTANCE_IC";
    readonly DutyRemittanceIe: "DUTY_REMITTANCE_IE";
    readonly DutyRemittanceIt: "DUTY_REMITTANCE_IT";
    readonly DutyRemittanceLt: "DUTY_REMITTANCE_LT";
    readonly DutyRemittanceLu: "DUTY_REMITTANCE_LU";
    readonly DutyRemittanceLv: "DUTY_REMITTANCE_LV";
    readonly DutyRemittanceMc: "DUTY_REMITTANCE_MC";
    readonly DutyRemittanceMq: "DUTY_REMITTANCE_MQ";
    readonly DutyRemittanceMt: "DUTY_REMITTANCE_MT";
    readonly DutyRemittanceNl: "DUTY_REMITTANCE_NL";
    readonly DutyRemittancePl: "DUTY_REMITTANCE_PL";
    readonly DutyRemittancePt: "DUTY_REMITTANCE_PT";
    readonly DutyRemittanceRe: "DUTY_REMITTANCE_RE";
    readonly DutyRemittanceRo: "DUTY_REMITTANCE_RO";
    readonly DutyRemittanceSe: "DUTY_REMITTANCE_SE";
    readonly DutyRemittanceSi: "DUTY_REMITTANCE_SI";
    readonly DutyRemittanceSk: "DUTY_REMITTANCE_SK";
    readonly DutyRemittanceUs: "DUTY_REMITTANCE_US";
    readonly DutyRemittanceYt: "DUTY_REMITTANCE_YT";
    readonly DutyTax: "DUTY_TAX";
    readonly DutyTaxBuffer: "DUTY_TAX_BUFFER";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly EmiratesDisbursementFee: "EMIRATES_DISBURSEMENT_FEE";
    readonly EmiratesRemittanceFee: "EMIRATES_REMITTANCE_FEE";
    readonly EtsyGuaranteeOrder: "ETSY_GUARANTEE_ORDER";
    readonly EtsyGuaranteePercent: "ETSY_GUARANTEE_PERCENT";
    readonly EtsyMerchantFeePercent: "ETSY_MERCHANT_FEE_PERCENT";
    readonly ExistingConnectAdjustmentCredits: "EXISTING_CONNECT_ADJUSTMENT_CREDITS";
    readonly ExistingCreditNotes: "EXISTING_CREDIT_NOTES";
    readonly ExistingInvoiceLineRecordCredits: "EXISTING_INVOICE_LINE_RECORD_CREDITS";
    readonly ExistingInvoiceVoided: "EXISTING_INVOICE_VOIDED";
    readonly ForeignExchange: "FOREIGN_EXCHANGE";
    readonly ForeignExchangeRevenue: "FOREIGN_EXCHANGE_REVENUE";
    readonly ForeignTaxFilingFee: "FOREIGN_TAX_FILING_FEE";
    readonly FranceCustomsTax: "FRANCE_CUSTOMS_TAX";
    readonly FreeTrial: "FREE_TRIAL";
    readonly General: "GENERAL";
    readonly GeneralAdjustment: "GENERAL_ADJUSTMENT";
    readonly GhanaRemittanceFee: "GHANA_REMITTANCE_FEE";
    readonly GuaranteeOrder: "GUARANTEE_ORDER";
    readonly GuaranteeOrderDutyExempt: "GUARANTEE_ORDER_DUTY_EXEMPT";
    readonly GuaranteePercent: "GUARANTEE_PERCENT";
    readonly HaypostDisbursementFee: "HAYPOST_DISBURSEMENT_FEE";
    readonly HaypostRemittanceFee: "HAYPOST_REMITTANCE_FEE";
    readonly IglobalLandedCostGuaranteeBuffer: "IGLOBAL_LANDED_COST_GUARANTEE_BUFFER";
    readonly ImportServiceCharge: "IMPORT_SERVICE_CHARGE";
    readonly InclusivePricing: "INCLUSIVE_PRICING";
    readonly IsraelDisbursementFee: "ISRAEL_DISBURSEMENT_FEE";
    readonly IsraelRemittanceFee: "ISRAEL_REMITTANCE_FEE";
    readonly ItalianeRemittanceFee: "ITALIANE_REMITTANCE_FEE";
    readonly Item: "ITEM";
    readonly JapanDisbursementFee: "JAPAN_DISBURSEMENT_FEE";
    readonly JapanPrepayFee: "JAPAN_PREPAY_FEE";
    readonly JapanPrepayPercent: "JAPAN_PREPAY_PERCENT";
    readonly JapanPrepayPhotoDiscount: "JAPAN_PREPAY_PHOTO_DISCOUNT";
    readonly JapanRemittanceFee: "JAPAN_REMITTANCE_FEE";
    readonly KazpostDisbursementFee: "KAZPOST_DISBURSEMENT_FEE";
    readonly KazpostPrepayFee: "KAZPOST_PREPAY_FEE";
    readonly KazpostPrepayPercent: "KAZPOST_PREPAY_PERCENT";
    readonly KazpostPrepayPhotoDiscount: "KAZPOST_PREPAY_PHOTO_DISCOUNT";
    readonly KazpostRemittanceFee: "KAZPOST_REMITTANCE_FEE";
    readonly KenyaDisbursementFee: "KENYA_DISBURSEMENT_FEE";
    readonly KenyaRemittanceFee: "KENYA_REMITTANCE_FEE";
    readonly KoreaDisbursementFee: "KOREA_DISBURSEMENT_FEE";
    readonly KoreaGuaranteeOrder: "KOREA_GUARANTEE_ORDER";
    readonly KoreaPrepayDisbursementFee: "KOREA_PREPAY_DISBURSEMENT_FEE";
    readonly KoreaPrepayFee: "KOREA_PREPAY_FEE";
    readonly KoreaPrepayPercent: "KOREA_PREPAY_PERCENT";
    readonly KoreaPrepayPhotoDiscount: "KOREA_PREPAY_PHOTO_DISCOUNT";
    readonly KoreaRemittanceFee: "KOREA_REMITTANCE_FEE";
    readonly LaPosteBurkinaFasoDisbursementFee: "LA_POSTE_BURKINA_FASO_DISBURSEMENT_FEE";
    readonly LaPosteBurkinaFasoGuaranteeOrder: "LA_POSTE_BURKINA_FASO_GUARANTEE_ORDER";
    readonly LaPosteBurkinaFasoRemittanceFee: "LA_POSTE_BURKINA_FASO_REMITTANCE_FEE";
    readonly LaPosteDisbursementFee: "LA_POSTE_DISBURSEMENT_FEE";
    readonly LaPosteRemittanceAmountRevenueShare: "LA_POSTE_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly LaPosteRemittanceFee: "LA_POSTE_REMITTANCE_FEE";
    readonly LabelCertification: "LABEL_CERTIFICATION";
    readonly LandedCostGuarantee: "LANDED_COST_GUARANTEE";
    readonly LandedCostGuaranteeBuffer: "LANDED_COST_GUARANTEE_BUFFER";
    readonly LandedCostGuaranteeSubsidy: "LANDED_COST_GUARANTEE_SUBSIDY";
    readonly LatviaDisbursementFee: "LATVIA_DISBURSEMENT_FEE";
    readonly LatviaRemittanceFee: "LATVIA_REMITTANCE_FEE";
    readonly LiberiaBondFee: "LIBERIA_BOND_FEE";
    readonly LiberiaDisbursementFee: "LIBERIA_DISBURSEMENT_FEE";
    readonly LiberiaRemittanceFee: "LIBERIA_REMITTANCE_FEE";
    readonly LiechtensteinischeRemittanceFee: "LIECHTENSTEINISCHE_REMITTANCE_FEE";
    readonly MaltaDisbursementFee: "MALTA_DISBURSEMENT_FEE";
    readonly MaltaGuaranteeOrder: "MALTA_GUARANTEE_ORDER";
    readonly MaltaRemittanceFee: "MALTA_REMITTANCE_FEE";
    readonly MerchandiseProcessingFee: "MERCHANDISE_PROCESSING_FEE";
    readonly MerchantProcessing: "MERCHANT_PROCESSING";
    readonly MongolDisbursementFee: "MONGOL_DISBURSEMENT_FEE";
    readonly MongolGuaranteeOrder: "MONGOL_GUARANTEE_ORDER";
    readonly MongolRemittanceFee: "MONGOL_REMITTANCE_FEE";
    readonly MonthlyPlatformFee: "MONTHLY_PLATFORM_FEE";
    readonly MonthlySubscription: "MONTHLY_SUBSCRIPTION";
    readonly NetparcelDisbursementFee: "NETPARCEL_DISBURSEMENT_FEE";
    readonly NetparcelRemittanceFee: "NETPARCEL_REMITTANCE_FEE";
    readonly NewZealandDisbursementFee: "NEW_ZEALAND_DISBURSEMENT_FEE";
    readonly NewZealandRemittanceFee: "NEW_ZEALAND_REMITTANCE_FEE";
    readonly NigerDisbursementFee: "NIGER_DISBURSEMENT_FEE";
    readonly NigerRemittanceFee: "NIGER_REMITTANCE_FEE";
    readonly NigeriaDisbursementFee: "NIGERIA_DISBURSEMENT_FEE";
    readonly NigeriaRemittanceFee: "NIGERIA_REMITTANCE_FEE";
    readonly NonGuaranteeAdditionalTariffLines: "NON_GUARANTEE_ADDITIONAL_TARIFF_LINES";
    readonly NonGuaranteeAdvancement: "NON_GUARANTEE_ADVANCEMENT";
    readonly NonGuaranteeBrokerageFee: "NON_GUARANTEE_BROKERAGE_FEE";
    readonly NonGuaranteeCountry: "NON_GUARANTEE_COUNTRY";
    readonly NonGuaranteeCurrencyConversionFee: "NON_GUARANTEE_CURRENCY_CONVERSION_FEE";
    readonly NonGuaranteeDdpServiceFee: "NON_GUARANTEE_DDP_SERVICE_FEE";
    readonly NonGuaranteeDuty: "NON_GUARANTEE_DUTY";
    readonly NonGuaranteeDutyTax: "NON_GUARANTEE_DUTY_TAX";
    readonly NonGuaranteeFranceCustomsTax: "NON_GUARANTEE_FRANCE_CUSTOMS_TAX";
    readonly NonGuaranteeLandedCostBuffer: "NON_GUARANTEE_LANDED_COST_BUFFER";
    readonly NonGuaranteeLandedCostSubsidy: "NON_GUARANTEE_LANDED_COST_SUBSIDY";
    readonly NonGuaranteeShipping: "NON_GUARANTEE_SHIPPING";
    readonly NonGuaranteeStorageFee: "NON_GUARANTEE_STORAGE_FEE";
    readonly NonGuaranteeTax: "NON_GUARANTEE_TAX";
    readonly OmnivaDisbursementFee: "OMNIVA_DISBURSEMENT_FEE";
    readonly OmnivaPrepayFee: "OMNIVA_PREPAY_FEE";
    readonly OmnivaPrepayPercent: "OMNIVA_PREPAY_PERCENT";
    readonly OmnivaPrepayPhotoDiscount: "OMNIVA_PREPAY_PHOTO_DISCOUNT";
    readonly OmnivaRemittanceFee: "OMNIVA_REMITTANCE_FEE";
    readonly OrderError: "ORDER_ERROR";
    readonly Other: "OTHER";
    readonly PalletFee: "PALLET_FEE";
    readonly PartnerReferralRevenueShare: "PARTNER_REFERRAL_REVENUE_SHARE";
    readonly PaymentNoOrder: "PAYMENT_NO_ORDER";
    readonly PaypalCancel: "PAYPAL_CANCEL";
    readonly PaypalOrder: "PAYPAL_ORDER";
    readonly PaypalRefund: "PAYPAL_REFUND";
    readonly PeruBondFee: "PERU_BOND_FEE";
    readonly PeruDisbursementFee: "PERU_DISBURSEMENT_FEE";
    readonly PeruRemittanceFee: "PERU_REMITTANCE_FEE";
    readonly PgaAmsProcessing: "PGA_AMS_PROCESSING";
    readonly PgaAphis: "PGA_APHIS";
    readonly PgaBtaPriorNotice: "PGA_BTA_PRIOR_NOTICE";
    readonly PgaDisclaim: "PGA_DISCLAIM";
    readonly PgaDot: "PGA_DOT";
    readonly PgaFdaClearance: "PGA_FDA_CLEARANCE";
    readonly PlatformFee: "PLATFORM_FEE";
    readonly PostalOperator: "POSTAL_OPERATOR";
    readonly PostenBringDisbursementFee: "POSTEN_BRING_DISBURSEMENT_FEE";
    readonly PostenBringGuaranteeOrder: "POSTEN_BRING_GUARANTEE_ORDER";
    readonly PostenBringRemittanceFee: "POSTEN_BRING_REMITTANCE_FEE";
    readonly PostnlRemittanceFee: "POSTNL_REMITTANCE_FEE";
    readonly PostnordRemittanceFee: "POSTNORD_REMITTANCE_FEE";
    readonly PrepayProcessingFee: "PREPAY_PROCESSING_FEE";
    readonly ProfessionalServices: "PROFESSIONAL_SERVICES";
    readonly RefundError: "REFUND_ERROR";
    readonly RetriedPayout: "RETRIED_PAYOUT";
    readonly Review: "REVIEW";
    readonly RoyalMailRemittanceFee: "ROYAL_MAIL_REMITTANCE_FEE";
    readonly RwandaDisbursementFee: "RWANDA_DISBURSEMENT_FEE";
    readonly RwandaGuaranteeOrder: "RWANDA_GUARANTEE_ORDER";
    readonly RwandaRemittanceFee: "RWANDA_REMITTANCE_FEE";
    readonly SaintLuciaPrepayFee: "SAINT_LUCIA_PREPAY_FEE";
    readonly SaintLuciaPrepayPercent: "SAINT_LUCIA_PREPAY_PERCENT";
    readonly SaintLuciaPrepayPhotoDiscount: "SAINT_LUCIA_PREPAY_PHOTO_DISCOUNT";
    readonly SeychellesDisbursementFee: "SEYCHELLES_DISBURSEMENT_FEE";
    readonly SeychellesGuaranteeOrder: "SEYCHELLES_GUARANTEE_ORDER";
    readonly SeychellesRemittanceFee: "SEYCHELLES_REMITTANCE_FEE";
    readonly Shipping: "SHIPPING";
    readonly ShopifyAppSaleAdjustment: "SHOPIFY_APP_SALE_ADJUSTMENT";
    readonly ShopifyAppSaleCredit: "SHOPIFY_APP_SALE_CREDIT";
    readonly ShopifyAppSubscriptionSale: "SHOPIFY_APP_SUBSCRIPTION_SALE";
    readonly ShopifyGuaranteeOrder: "SHOPIFY_GUARANTEE_ORDER";
    readonly ShopifyGuaranteeOrderLegacy: "SHOPIFY_GUARANTEE_ORDER_LEGACY";
    readonly ShopifyGuaranteePercent: "SHOPIFY_GUARANTEE_PERCENT";
    readonly ShopifyGuaranteePercentInclusive: "SHOPIFY_GUARANTEE_PERCENT_INCLUSIVE";
    readonly ShopifyTransactionPercent: "SHOPIFY_TRANSACTION_PERCENT";
    readonly SierraLeoneBondFee: "SIERRA_LEONE_BOND_FEE";
    readonly SierraLeoneDisbursementFee: "SIERRA_LEONE_DISBURSEMENT_FEE";
    readonly SierraLeoneRemittanceFee: "SIERRA_LEONE_REMITTANCE_FEE";
    readonly SingaporeRemittanceFee: "SINGAPORE_REMITTANCE_FEE";
    readonly SortationFee: "SORTATION_FEE";
    readonly SriLankaDisbursementFee: "SRI_LANKA_DISBURSEMENT_FEE";
    readonly SriLankaGuaranteeOrder: "SRI_LANKA_GUARANTEE_ORDER";
    readonly SriLankaRemittanceFee: "SRI_LANKA_REMITTANCE_FEE";
    readonly StopDeliveryFee: "STOP_DELIVERY_FEE";
    readonly StorageFee: "STORAGE_FEE";
    readonly StoreCredit: "STORE_CREDIT";
    readonly StripeConnectTransfer: "STRIPE_CONNECT_TRANSFER";
    readonly StripeProcessingFee: "STRIPE_PROCESSING_FEE";
    readonly SwissDisbursementFee: "SWISS_DISBURSEMENT_FEE";
    readonly SwissRemittanceFee: "SWISS_REMITTANCE_FEE";
    readonly Tax: "TAX";
    readonly TaxRemittance: "TAX_REMITTANCE";
    readonly TogoDisbursementFee: "TOGO_DISBURSEMENT_FEE";
    readonly TogoPrepayFee: "TOGO_PREPAY_FEE";
    readonly TogoPrepayPercent: "TOGO_PREPAY_PERCENT";
    readonly TogoPrepayPhotoDiscount: "TOGO_PREPAY_PHOTO_DISCOUNT";
    readonly TogoRemittanceFee: "TOGO_REMITTANCE_FEE";
    readonly Transaction: "TRANSACTION";
    readonly TransactionOrder: "TRANSACTION_ORDER";
    readonly TransactionPercent: "TRANSACTION_PERCENT";
    readonly TransferBug: "TRANSFER_BUG";
    readonly TransferFromSvb: "TRANSFER_FROM_SVB";
    readonly TurkishDisbursementFee: "TURKISH_DISBURSEMENT_FEE";
    readonly TurkishGuaranteeOrder: "TURKISH_GUARANTEE_ORDER";
    readonly TurkishRemittanceFee: "TURKISH_REMITTANCE_FEE";
    readonly Type_01EntryFee: "TYPE_01_ENTRY_FEE";
    readonly Type_01HtsClassificationFee: "TYPE_01_HTS_CLASSIFICATION_FEE";
    readonly Type_01PerLineFee: "TYPE_01_PER_LINE_FEE";
    readonly Type_11EntryFee: "TYPE_11_ENTRY_FEE";
    readonly Type_11EntryFeeMinimum: "TYPE_11_ENTRY_FEE_MINIMUM";
    readonly Type_11EntryFeePga: "TYPE_11_ENTRY_FEE_PGA";
    readonly UgandaPrepayFee: "UGANDA_PREPAY_FEE";
    readonly UgandaPrepayPercent: "UGANDA_PREPAY_PERCENT";
    readonly UgandaPrepayPhotoDiscount: "UGANDA_PREPAY_PHOTO_DISCOUNT";
    readonly UkraineDisbursement: "UKRAINE_DISBURSEMENT";
    readonly UkraineDisbursementFee: "UKRAINE_DISBURSEMENT_FEE";
    readonly UkraineRemittanceFee: "UKRAINE_REMITTANCE_FEE";
    readonly Uncategorized: "UNCATEGORIZED";
    readonly UnmatchedDutyTaxCharges: "UNMATCHED_DUTY_TAX_CHARGES";
    readonly UnmatchedDutyTaxChargesCollectionFee: "UNMATCHED_DUTY_TAX_CHARGES_COLLECTION_FEE";
    readonly UnmatchedOrder: "UNMATCHED_ORDER";
    readonly UnmatchedPercent: "UNMATCHED_PERCENT";
    readonly UpsTransactionMinimum: "UPS_TRANSACTION_MINIMUM";
    readonly UspsPrepayFee: "USPS_PREPAY_FEE";
    readonly UspsPrepayPercent: "USPS_PREPAY_PERCENT";
    readonly UspsPrepayPhotoDiscount: "USPS_PREPAY_PHOTO_DISCOUNT";
    readonly UspsSubscription: "USPS_SUBSCRIPTION";
    readonly VanuatuBondFee: "VANUATU_BOND_FEE";
    readonly VanuatuDisbursementFee: "VANUATU_DISBURSEMENT_FEE";
    readonly VanuatuPrepayFee: "VANUATU_PREPAY_FEE";
    readonly VanuatuPrepayPercent: "VANUATU_PREPAY_PERCENT";
    readonly VanuatuPrepayPhotoDiscount: "VANUATU_PREPAY_PHOTO_DISCOUNT";
    readonly VanuatuRemittanceFee: "VANUATU_REMITTANCE_FEE";
    readonly WireFee: "WIRE_FEE";
    readonly ZonosApi: "ZONOS_API";
    readonly ZonosCheckoutSubscription: "ZONOS_CHECKOUT_SUBSCRIPTION";
    readonly ZonosClassifyApi: "ZONOS_CLASSIFY_API";
    readonly ZonosHello: "ZONOS_HELLO";
    readonly ZonosLandedCost: "ZONOS_LANDED_COST";
    readonly ZonosQuoter: "ZONOS_QUOTER";
    readonly ZonosSetupFee: "ZONOS_SETUP_FEE";
    readonly ZonosShipping: "ZONOS_SHIPPING";
    readonly ZonosSupport: "ZONOS_SUPPORT";
    readonly ZonosTransaction: "ZONOS_TRANSACTION";
};
export type AccountingFeeType = (typeof accountingFeeType)[keyof typeof accountingFeeType];
export declare const achievementCategory: {
    readonly Billing: "BILLING";
    readonly GoLive: "GO_LIVE";
    readonly Integration: "INTEGRATION";
    readonly Labels: "LABELS";
    readonly Setup: "SETUP";
    readonly Shipping: "SHIPPING";
};
export type AchievementCategory = (typeof achievementCategory)[keyof typeof achievementCategory];
export declare const achievementPlatform: {
    readonly AddOn: "ADD_ON";
    readonly All: "ALL";
    readonly Api: "API";
    readonly Bigcommerce: "BIGCOMMERCE";
    readonly CartCom: "CART_COM";
    readonly Custom: "CUSTOM";
    readonly Etsy: "ETSY";
    readonly Magento: "MAGENTO";
    readonly Miva: "MIVA";
    readonly Salesforce: "SALESFORCE";
    readonly Shopify: "SHOPIFY";
    readonly Volusion: "VOLUSION";
    readonly Wix: "WIX";
    readonly Woocommerce: "WOOCOMMERCE";
    readonly Xcart: "XCART";
    readonly ZonosJs: "ZONOS_JS";
};
export type AchievementPlatform = (typeof achievementPlatform)[keyof typeof achievementPlatform];
export declare const achievementStatusValue: {
    readonly Complete: "COMPLETE";
    readonly InProgress: "IN_PROGRESS";
    readonly Incomplete: "INCOMPLETE";
};
export type AchievementStatusValue = (typeof achievementStatusValue)[keyof typeof achievementStatusValue];
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
export declare const adjustmentSource: {
    readonly ApiRequest: "API_REQUEST";
    readonly Discount: "DISCOUNT";
    readonly PromoCode: "PROMO_CODE";
};
export type AdjustmentSource = (typeof adjustmentSource)[keyof typeof adjustmentSource];
export declare const adjustmentType: {
    readonly Charge: "CHARGE";
    readonly Credit: "CREDIT";
};
export type AdjustmentType = (typeof adjustmentType)[keyof typeof adjustmentType];
export declare const agency: {
    readonly Ams: "AMS";
    readonly Aphis: "APHIS";
    readonly Apl: "APL";
    readonly Cpsc: "CPSC";
    readonly Epa: "EPA";
    readonly Fda: "FDA";
    readonly Fws: "FWS";
};
export type Agency = (typeof agency)[keyof typeof agency];
export declare const aiModel: {
    readonly ClaudeHaiku_3_5: "CLAUDE_HAIKU_3_5";
    readonly ClaudeOpus_4: "CLAUDE_OPUS_4";
    readonly ClaudeSonnet_4: "CLAUDE_SONNET_4";
};
export type AiModel = (typeof aiModel)[keyof typeof aiModel];
export declare const airwallexAccountType: {
    readonly AirwallexAuCustomer: "AIRWALLEX_AU_CUSTOMER";
    readonly AirwallexPaymentsCustomer: "AIRWALLEX_PAYMENTS_CUSTOMER";
    readonly AirwallexUsCustomer: "AIRWALLEX_US_CUSTOMER";
};
export type AirwallexAccountType = (typeof airwallexAccountType)[keyof typeof airwallexAccountType];
export declare const airwallexPaymentLinkStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
};
export type AirwallexPaymentLinkStatus = (typeof airwallexPaymentLinkStatus)[keyof typeof airwallexPaymentLinkStatus];
export declare const alcoholRecipientType: {
    readonly Consumer: "CONSUMER";
    readonly Licensee: "LICENSEE";
};
export type AlcoholRecipientType = (typeof alcoholRecipientType)[keyof typeof alcoholRecipientType];
export declare const allOptIn: {
    readonly All: "ALL";
};
export type AllOptIn = (typeof allOptIn)[keyof typeof allOptIn];
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
export declare const amountDetailSourceType: {
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly Fee: "FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
    readonly StoreCredit: "STORE_CREDIT";
    readonly Tax: "TAX";
};
export type AmountDetailSourceType = (typeof amountDetailSourceType)[keyof typeof amountDetailSourceType];
export declare const amountDetailTarget: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly MerchantBase: "MERCHANT_BASE";
    readonly MerchantProvided: "MERCHANT_PROVIDED";
    readonly MerchantSettled: "MERCHANT_SETTLED";
    readonly ShopperPresented: "SHOPPER_PRESENTED";
    readonly ZonosBase: "ZONOS_BASE";
};
export type AmountDetailTarget = (typeof amountDetailTarget)[keyof typeof amountDetailTarget];
export declare const amsCertificateType: {
    readonly Inspection: "INSPECTION";
    readonly NopImport: "NOP_IMPORT";
    readonly Sc6Exemption: "SC6_EXEMPTION";
};
export type AmsCertificateType = (typeof amsCertificateType)[keyof typeof amsCertificateType];
export declare const amsDisclaimCode: {
    readonly A: "A";
};
export type AmsDisclaimCode = (typeof amsDisclaimCode)[keyof typeof amsDisclaimCode];
export declare const amsProgram: {
    readonly Eg: "EG";
    readonly Mo: "MO";
    readonly Or: "OR";
    readonly Pn: "PN";
};
export type AmsProgram = (typeof amsProgram)[keyof typeof amsProgram];
export declare const amsUnspscFragmentType: {
    readonly Class: "CLASS";
    readonly Commodity: "COMMODITY";
    readonly Family: "FAMILY";
    readonly Segment: "SEGMENT";
};
export type AmsUnspscFragmentType = (typeof amsUnspscFragmentType)[keyof typeof amsUnspscFragmentType];
export declare const amsWeightUnit: {
    readonly Kg: "KG";
    readonly Lb: "LB";
};
export type AmsWeightUnit = (typeof amsWeightUnit)[keyof typeof amsWeightUnit];
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
export declare const animalDrugApplicationType: {
    readonly AbbreviatedNada: "ABBREVIATED_NADA";
    readonly ConditionallyApprovedNada: "CONDITIONALLY_APPROVED_NADA";
    readonly Nada: "NADA";
    readonly Unspecified: "UNSPECIFIED";
};
export type AnimalDrugApplicationType = (typeof animalDrugApplicationType)[keyof typeof animalDrugApplicationType];
export declare const answerProvenance: {
    readonly Agent: "AGENT";
    readonly Copied: "COPIED";
    readonly Derived: "DERIVED";
    readonly Inferred: "INFERRED";
    readonly Manual: "MANUAL";
    readonly Supplied: "SUPPLIED";
};
export type AnswerProvenance = (typeof answerProvenance)[keyof typeof answerProvenance];
export declare const answerSource: {
    readonly AgentInferred: "AGENT_INFERRED";
    readonly CatalogData: "CATALOG_DATA";
    readonly MerchantProfile: "MERCHANT_PROFILE";
    readonly UserStated: "USER_STATED";
};
export type AnswerSource = (typeof answerSource)[keyof typeof answerSource];
export declare const answerType: {
    readonly Boolean: "BOOLEAN";
    readonly Checkbox: "CHECKBOX";
    readonly Date: "DATE";
    readonly Document: "DOCUMENT";
    readonly MultiSelect: "MULTI_SELECT";
    readonly Number: "NUMBER";
    readonly Reference: "REFERENCE";
    readonly SingleSelect: "SINGLE_SELECT";
    readonly Text: "TEXT";
};
export type AnswerType = (typeof answerType)[keyof typeof answerType];
export declare const aphisDisclaimCode: {
    readonly A: "A";
    readonly B: "B";
    readonly C: "C";
    readonly D: "D";
};
export type AphisDisclaimCode = (typeof aphisDisclaimCode)[keyof typeof aphisDisclaimCode];
export declare const aphisItemType: {
    readonly Component: "COMPONENT";
    readonly Product: "PRODUCT";
};
export type AphisItemType = (typeof aphisItemType)[keyof typeof aphisItemType];
export declare const aphisUnitOfMeasure: {
    readonly Amu: "AMU";
    readonly Bh: "BH";
    readonly Bqt: "BQT";
    readonly Bx: "BX";
    readonly Ct: "CT";
    readonly G: "G";
    readonly Kg: "KG";
    readonly L: "L";
    readonly Ml: "ML";
    readonly No: "NO";
    readonly Ptu: "PTU";
    readonly Sad: "SAD";
    readonly Stm: "STM";
};
export type AphisUnitOfMeasure = (typeof aphisUnitOfMeasure)[keyof typeof aphisUnitOfMeasure];
export declare const apiUsageEntityType: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly Organization: "ORGANIZATION";
};
export type ApiUsageEntityType = (typeof apiUsageEntityType)[keyof typeof apiUsageEntityType];
export declare const apiUsageRecordInterval: {
    readonly Daily: "DAILY";
    readonly Weekly: "WEEKLY";
};
export type ApiUsageRecordInterval = (typeof apiUsageRecordInterval)[keyof typeof apiUsageRecordInterval];
export declare const aplDisclaimCode: {
    readonly A: "A";
    readonly B: "B";
    readonly C: "C";
    readonly D: "D";
    readonly G: "G";
};
export type AplDisclaimCode = (typeof aplDisclaimCode)[keyof typeof aplDisclaimCode];
export declare const aplDisclaimGround: {
    readonly CommonCultivar: "COMMON_CULTIVAR";
    readonly CommonFoodCrop: "COMMON_FOOD_CROP";
    readonly NoPlantMaterial: "NO_PLANT_MATERIAL";
    readonly PlantsForPlanting: "PLANTS_FOR_PLANTING";
    readonly ScientificSpecimen: "SCIENTIFIC_SPECIMEN";
};
export type AplDisclaimGround = (typeof aplDisclaimGround)[keyof typeof aplDisclaimGround];
export declare const aplItemType: {
    readonly Component: "COMPONENT";
    readonly Product: "PRODUCT";
};
export type AplItemType = (typeof aplItemType)[keyof typeof aplItemType];
export declare const aplUnitOfMeasure: {
    readonly Cg: "CG";
    readonly Cm: "CM";
    readonly Cm2: "CM2";
    readonly Cm3: "CM3";
    readonly Ctl: "CTL";
    readonly G: "G";
    readonly Kg: "KG";
    readonly Kl: "KL";
    readonly L: "L";
    readonly M: "M";
    readonly M2: "M2";
    readonly M3: "M3";
    readonly Ml: "ML";
    readonly Mm: "MM";
    readonly Mm2: "MM2";
    readonly Mm3: "MM3";
};
export type AplUnitOfMeasure = (typeof aplUnitOfMeasure)[keyof typeof aplUnitOfMeasure];
export declare const appliesTo: {
    readonly BillDetail: "BILL_DETAIL";
    readonly DepositDetail: "DEPOSIT_DETAIL";
    readonly InvoiceDetail: "INVOICE_DETAIL";
    readonly PayoutDetail: "PAYOUT_DETAIL";
};
export type AppliesTo = (typeof appliesTo)[keyof typeof appliesTo];
export declare const auditLogChangeType: {
    readonly Create: "CREATE";
    readonly Delete: "DELETE";
    readonly Update: "UPDATE";
};
export type AuditLogChangeType = (typeof auditLogChangeType)[keyof typeof auditLogChangeType];
export declare const authorizationExpiryBehavior: {
    readonly Capture: "CAPTURE";
    readonly Ignore: "IGNORE";
    readonly Void: "VOID";
};
export type AuthorizationExpiryBehavior = (typeof authorizationExpiryBehavior)[keyof typeof authorizationExpiryBehavior];
export declare const balanceLedgerSource: {
    readonly Airwallex: "AIRWALLEX";
    readonly Paypal: "PAYPAL";
    readonly Stripe_1: "STRIPE_1";
    readonly Stripe_2: "STRIPE_2";
    readonly Svb: "SVB";
};
export type BalanceLedgerSource = (typeof balanceLedgerSource)[keyof typeof balanceLedgerSource];
export declare const balanceTransactionParentType: {
    readonly Bill: "BILL";
    readonly Deposit: "DEPOSIT";
    readonly Invoice: "INVOICE";
};
export type BalanceTransactionParentType = (typeof balanceTransactionParentType)[keyof typeof balanceTransactionParentType];
export declare const batchValidationSeverity: {
    readonly Error: "ERROR";
    readonly Warning: "WARNING";
};
export type BatchValidationSeverity = (typeof batchValidationSeverity)[keyof typeof batchValidationSeverity];
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
export declare const billingArrangement: {
    readonly Proxy: "PROXY";
    readonly Standard: "STANDARD";
};
export type BillingArrangement = (typeof billingArrangement)[keyof typeof billingArrangement];
export declare const billingCompanyAccountStanding: {
    readonly Current: "CURRENT";
    readonly Delinquent: "DELINQUENT";
};
export type BillingCompanyAccountStanding = (typeof billingCompanyAccountStanding)[keyof typeof billingCompanyAccountStanding];
export declare const billingCompanyAccountType: {
    readonly AirwallexAuCustomer: "AIRWALLEX_AU_CUSTOMER";
    readonly AirwallexBeneficiary: "AIRWALLEX_BENEFICIARY";
    readonly AirwallexConnectedAccount: "AIRWALLEX_CONNECTED_ACCOUNT";
    readonly AirwallexGlobalAccount: "AIRWALLEX_GLOBAL_ACCOUNT";
    readonly AirwallexPaymentsCustomer: "AIRWALLEX_PAYMENTS_CUSTOMER";
    readonly AirwallexPlatformAccount: "AIRWALLEX_PLATFORM_ACCOUNT";
    readonly AirwallexUsCustomer: "AIRWALLEX_US_CUSTOMER";
    readonly StripeBillingCustomer: "STRIPE_BILLING_CUSTOMER";
    readonly StripePaymentsConnectAccount: "STRIPE_PAYMENTS_CONNECT_ACCOUNT";
    readonly StripePaymentsCustomer: "STRIPE_PAYMENTS_CUSTOMER";
    readonly StripeThirdPartyBillingCustomer: "STRIPE_THIRD_PARTY_BILLING_CUSTOMER";
};
export type BillingCompanyAccountType = (typeof billingCompanyAccountType)[keyof typeof billingCompanyAccountType];
export declare const billingCompanyBusinessUnit: {
    readonly Ecommerce: "ECOMMERCE";
    readonly SupplyChain: "SUPPLY_CHAIN";
};
export type BillingCompanyBusinessUnit = (typeof billingCompanyBusinessUnit)[keyof typeof billingCompanyBusinessUnit];
export declare const billingCompanyExemptionType: {
    readonly CcFee: "CC_FEE";
    readonly LateFee: "LATE_FEE";
    readonly SaasTax: "SAAS_TAX";
};
export type BillingCompanyExemptionType = (typeof billingCompanyExemptionType)[keyof typeof billingCompanyExemptionType];
export declare const billingCompanyInvoiceProcessor: {
    readonly Stripe: "STRIPE";
    readonly Zonos: "ZONOS";
};
export type BillingCompanyInvoiceProcessor = (typeof billingCompanyInvoiceProcessor)[keyof typeof billingCompanyInvoiceProcessor];
export declare const billingDayOfWeek: {
    readonly Friday: "FRIDAY";
    readonly Monday: "MONDAY";
    readonly Saturday: "SATURDAY";
    readonly Sunday: "SUNDAY";
    readonly Thursday: "THURSDAY";
    readonly Tuesday: "TUESDAY";
    readonly Wednesday: "WEDNESDAY";
};
export type BillingDayOfWeek = (typeof billingDayOfWeek)[keyof typeof billingDayOfWeek];
export declare const billingOptionCode: {
    readonly DdpAndDdu: "DDP_AND_DDU";
    readonly ShipperOnly: "SHIPPER_ONLY";
    readonly ThirdParty: "THIRD_PARTY";
    readonly Unavailable: "UNAVAILABLE";
};
export type BillingOptionCode = (typeof billingOptionCode)[keyof typeof billingOptionCode];
export declare const billingScheduleInterval: {
    readonly Daily: "DAILY";
    readonly Monthly: "MONTHLY";
    readonly SemiMonthly: "SEMI_MONTHLY";
    readonly Weekly: "WEEKLY";
};
export type BillingScheduleInterval = (typeof billingScheduleInterval)[keyof typeof billingScheduleInterval];
export declare const billingSettingsStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type BillingSettingsStatus = (typeof billingSettingsStatus)[keyof typeof billingSettingsStatus];
export declare const billingStatusCode: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processed: "PROCESSED";
};
export type BillingStatusCode = (typeof billingStatusCode)[keyof typeof billingStatusCode];
export declare const brokerageAbiMessageType: {
    readonly Aq: "AQ";
    readonly Ax: "AX";
    readonly C1: "C1";
    readonly Cc: "CC";
    readonly Er: "ER";
    readonly Pf: "PF";
    readonly So: "SO";
    readonly Sx: "SX";
};
export type BrokerageAbiMessageType = (typeof brokerageAbiMessageType)[keyof typeof brokerageAbiMessageType];
export declare const brokerageAbiSendAction: {
    readonly Add: "ADD";
    readonly Replace: "REPLACE";
    readonly Update: "UPDATE";
};
export type BrokerageAbiSendAction = (typeof brokerageAbiSendAction)[keyof typeof brokerageAbiSendAction];
export declare const brokerageAbiSendApplication: {
    readonly CargoRelease: "CARGO_RELEASE";
    readonly CargoReleaseWithPga: "CARGO_RELEASE_WITH_PGA";
    readonly EntrySummary: "ENTRY_SUMMARY";
    readonly EntrySummaryCargoRelease: "ENTRY_SUMMARY_CARGO_RELEASE";
    readonly PgaOnly: "PGA_ONLY";
};
export type BrokerageAbiSendApplication = (typeof brokerageAbiSendApplication)[keyof typeof brokerageAbiSendApplication];
export declare const brokerageBatchChannel: {
    readonly Portal: "PORTAL";
    readonly Sftp: "SFTP";
};
export type BrokerageBatchChannel = (typeof brokerageBatchChannel)[keyof typeof brokerageBatchChannel];
export declare const brokerageBatchJobPhase: {
    readonly File: "FILE";
    readonly Upload: "UPLOAD";
    readonly Validate: "VALIDATE";
};
export type BrokerageBatchJobPhase = (typeof brokerageBatchJobPhase)[keyof typeof brokerageBatchJobPhase];
export declare const brokerageBatchJobStatus: {
    readonly Completed: "COMPLETED";
    readonly CompletedWithErrors: "COMPLETED_WITH_ERRORS";
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Submitted: "SUBMITTED";
};
export type BrokerageBatchJobStatus = (typeof brokerageBatchJobStatus)[keyof typeof brokerageBatchJobStatus];
export declare const brokerageCbpMessageCategory: {
    readonly Bond: "BOND";
    readonly CargoRelease: "CARGO_RELEASE";
    readonly Carrier: "CARRIER";
    readonly Census: "CENSUS";
    readonly Classification: "CLASSIFICATION";
    readonly Compliance: "COMPLIANCE";
    readonly Country: "COUNTRY";
    readonly Date: "DATE";
    readonly EntrySummary: "ENTRY_SUMMARY";
    readonly Manifest: "MANIFEST";
    readonly Notification: "NOTIFICATION";
    readonly Party: "PARTY";
    readonly Pga: "PGA";
    readonly Port: "PORT";
    readonly Rollup: "ROLLUP";
    readonly System: "SYSTEM";
    readonly Value: "VALUE";
};
export type BrokerageCbpMessageCategory = (typeof brokerageCbpMessageCategory)[keyof typeof brokerageCbpMessageCategory];
export declare const brokerageCbpMessageSemantic: {
    readonly AckAccepted: "ACK_ACCEPTED";
    readonly AckRejected: "ACK_REJECTED";
    readonly AllClear: "ALL_CLEAR";
    readonly BillLifecycle: "BILL_LIFECYCLE";
    readonly CbpExamPending: "CBP_EXAM_PENDING";
    readonly CbpHoldPlaced: "CBP_HOLD_PLACED";
    readonly CbpHoldRemoved: "CBP_HOLD_REMOVED";
    readonly CbpReviewInfo: "CBP_REVIEW_INFO";
    readonly CrCancelled: "CR_CANCELLED";
    readonly EditError: "EDIT_ERROR";
    readonly EditWarning: "EDIT_WARNING";
    readonly EntryCancellationUnset: "ENTRY_CANCELLATION_UNSET";
    readonly EntryCancelled: "ENTRY_CANCELLED";
    readonly EsCancelled: "ES_CANCELLED";
    readonly PgaHoldPlaced: "PGA_HOLD_PLACED";
    readonly PgaHoldRemoved: "PGA_HOLD_REMOVED";
    readonly PgaInfo: "PGA_INFO";
    readonly PgaMayProceed: "PGA_MAY_PROCEED";
    readonly PgaRejected: "PGA_REJECTED";
    readonly PgaUnderReview: "PGA_UNDER_REVIEW";
    readonly Released: "RELEASED";
    readonly SystemFailure: "SYSTEM_FAILURE";
    readonly Unknown: "UNKNOWN";
};
export type BrokerageCbpMessageSemantic = (typeof brokerageCbpMessageSemantic)[keyof typeof brokerageCbpMessageSemantic];
export declare const brokerageCbpSeverity: {
    readonly Error: "ERROR";
    readonly Fatal: "FATAL";
    readonly Info: "INFO";
    readonly Warning: "WARNING";
};
export type BrokerageCbpSeverity = (typeof brokerageCbpSeverity)[keyof typeof brokerageCbpSeverity];
export declare const brokerageCbpStream: {
    readonly CargoRelease: "CARGO_RELEASE";
    readonly EntrySummary: "ENTRY_SUMMARY";
    readonly PeriodicFee: "PERIODIC_FEE";
    readonly Unknown: "UNKNOWN";
};
export type BrokerageCbpStream = (typeof brokerageCbpStream)[keyof typeof brokerageCbpStream];
export declare const brokerageConsignmentSource: {
    readonly Api: "API";
    readonly Csv: "CSV";
};
export type BrokerageConsignmentSource = (typeof brokerageConsignmentSource)[keyof typeof brokerageConsignmentSource];
export declare const brokerageDocumentEvidenceStatus: {
    readonly Deleted: "DELETED";
    readonly Found: "FOUND";
    readonly Missing: "MISSING";
    readonly Unsupported: "UNSUPPORTED";
};
export type BrokerageDocumentEvidenceStatus = (typeof brokerageDocumentEvidenceStatus)[keyof typeof brokerageDocumentEvidenceStatus];
export declare const brokerageDocumentStatus: {
    readonly Active: "ACTIVE";
    readonly Deleted: "DELETED";
};
export type BrokerageDocumentStatus = (typeof brokerageDocumentStatus)[keyof typeof brokerageDocumentStatus];
export declare const brokerageDocumentType: {
    readonly CertificateOfOrigin: "CERTIFICATE_OF_ORIGIN";
    readonly ClearancePackage: "CLEARANCE_PACKAGE";
    readonly CommercialInvoice: "COMMERCIAL_INVOICE";
    readonly ConsolidationWorksheet: "CONSOLIDATION_WORKSHEET";
    readonly CountryOfCastCertificate: "COUNTRY_OF_CAST_CERTIFICATE";
    readonly CountryOfMeltAndPourCertificate: "COUNTRY_OF_MELT_AND_POUR_CERTIFICATE";
    readonly CountryOfOriginCertificate: "COUNTRY_OF_ORIGIN_CERTIFICATE";
    readonly CountryOfPourCertificate: "COUNTRY_OF_POUR_CERTIFICATE";
    readonly CountryOfSmeltCertificate: "COUNTRY_OF_SMELT_CERTIFICATE";
    readonly CpscCpc: "CPSC_CPC";
    readonly CpscGcc: "CPSC_GCC";
    readonly CustomsBond: "CUSTOMS_BOND";
    readonly CustomsDutyInvoice: "CUSTOMS_DUTY_INVOICE";
    readonly DotHs7: "DOT_HS7";
    readonly EntrySummary: "ENTRY_SUMMARY";
    readonly EpaForm_3520_1: "EPA_FORM_3520_1";
    readonly EpaForm_3520_21: "EPA_FORM_3520_21";
    readonly EpaTscaCertification: "EPA_TSCA_CERTIFICATION";
    readonly FccForm_740: "FCC_FORM_740";
    readonly FdaFacilityRegistration: "FDA_FACILITY_REGISTRATION";
    readonly FdaPriorNotice: "FDA_PRIOR_NOTICE";
    readonly Isf: "ISF";
    readonly MaterialCertificate: "MATERIAL_CERTIFICATE";
    readonly MillTestCertificate: "MILL_TEST_CERTIFICATE";
    readonly Other: "OTHER";
    readonly PackingList: "PACKING_LIST";
    readonly PowerOfAttorney: "POWER_OF_ATTORNEY";
    readonly TtbCola: "TTB_COLA";
    readonly UsdaPhytosanitaryCertificate: "USDA_PHYTOSANITARY_CERTIFICATE";
    readonly UsfwsForm_3_177: "USFWS_FORM_3_177";
};
export type BrokerageDocumentType = (typeof brokerageDocumentType)[keyof typeof brokerageDocumentType];
export declare const brokerageDutyDisputeCatalogAction: {
    readonly Created: "CREATED";
    readonly Failed: "FAILED";
    readonly Skipped: "SKIPPED";
    readonly Updated: "UPDATED";
};
export type BrokerageDutyDisputeCatalogAction = (typeof brokerageDutyDisputeCatalogAction)[keyof typeof brokerageDutyDisputeCatalogAction];
export declare const brokerageDutyDisputeClaimType: {
    readonly CountryOfOrigin: "COUNTRY_OF_ORIGIN";
    readonly DeclaredValue: "DECLARED_VALUE";
    readonly Description: "DESCRIPTION";
    readonly DutyExclusion: "DUTY_EXCLUSION";
    readonly HsCode: "HS_CODE";
    readonly Quantity: "QUANTITY";
    readonly Questionnaire: "QUESTIONNAIRE";
    readonly TariffLine: "TARIFF_LINE";
    readonly Weight: "WEIGHT";
};
export type BrokerageDutyDisputeClaimType = (typeof brokerageDutyDisputeClaimType)[keyof typeof brokerageDutyDisputeClaimType];
export declare const brokerageDutyDisputeEventType: {
    readonly ClaimDecided: "CLAIM_DECIDED";
    readonly Completed: "COMPLETED";
    readonly Created: "CREATED";
    readonly Expired: "EXPIRED";
    readonly Note: "NOTE";
    readonly ResolutionFailed: "RESOLUTION_FAILED";
    readonly ResolutionRequested: "RESOLUTION_REQUESTED";
    readonly Resolved: "RESOLVED";
    readonly ReviewCompleted: "REVIEW_COMPLETED";
    readonly ReviewRequested: "REVIEW_REQUESTED";
    readonly Submitted: "SUBMITTED";
    readonly Updated: "UPDATED";
    readonly Withdrawn: "WITHDRAWN";
};
export type BrokerageDutyDisputeEventType = (typeof brokerageDutyDisputeEventType)[keyof typeof brokerageDutyDisputeEventType];
export declare const brokerageDutyDisputeIneligibilityReason: {
    readonly DisputeExists: "DISPUTE_EXISTS";
    readonly NoDuties: "NO_DUTIES";
    readonly NotFiled: "NOT_FILED";
    readonly NotFound: "NOT_FOUND";
    readonly Paid: "PAID";
    readonly PastDeadline: "PAST_DEADLINE";
};
export type BrokerageDutyDisputeIneligibilityReason = (typeof brokerageDutyDisputeIneligibilityReason)[keyof typeof brokerageDutyDisputeIneligibilityReason];
export declare const brokerageDutyDisputeOutcome: {
    readonly Accepted: "ACCEPTED";
    readonly Denied: "DENIED";
    readonly Partial: "PARTIAL";
    readonly Review: "REVIEW";
};
export type BrokerageDutyDisputeOutcome = (typeof brokerageDutyDisputeOutcome)[keyof typeof brokerageDutyDisputeOutcome];
export declare const brokerageDutyDisputeStatus: {
    readonly Complete: "COMPLETE";
    readonly Draft: "DRAFT";
    readonly Expired: "EXPIRED";
    readonly ResolutionFailed: "RESOLUTION_FAILED";
    readonly Resolved: "RESOLVED";
    readonly Submitted: "SUBMITTED";
    readonly UnderReview: "UNDER_REVIEW";
    readonly Withdrawn: "WITHDRAWN";
};
export type BrokerageDutyDisputeStatus = (typeof brokerageDutyDisputeStatus)[keyof typeof brokerageDutyDisputeStatus];
export declare const brokerageDutyDisputeVerdict: {
    readonly Accepted: "ACCEPTED";
    readonly Deferred: "DEFERRED";
    readonly Denied: "DENIED";
    readonly Review: "REVIEW";
};
export type BrokerageDutyDisputeVerdict = (typeof brokerageDutyDisputeVerdict)[keyof typeof brokerageDutyDisputeVerdict];
export declare const brokerageEntryCancelReason: {
    readonly ClearedUnderAnotherEntry: "CLEARED_UNDER_ANOTHER_ENTRY";
    readonly ClearedUnderInformalEntry: "CLEARED_UNDER_INFORMAL_ENTRY";
    readonly ClericalError: "CLERICAL_ERROR";
    readonly Destroyed: "DESTROYED";
    readonly NonArrival: "NON_ARRIVAL";
    readonly NotAuthorizedForImport: "NOT_AUTHORIZED_FOR_IMPORT";
    readonly RefusedByImporter: "REFUSED_BY_IMPORTER";
    readonly ReplacedByCbpf_7512: "REPLACED_BY_CBPF_7512";
    readonly ReplacedByFtzAdmission: "REPLACED_BY_FTZ_ADMISSION";
    readonly Seized: "SEIZED";
    readonly SystemError: "SYSTEM_ERROR";
};
export type BrokerageEntryCancelReason = (typeof brokerageEntryCancelReason)[keyof typeof brokerageEntryCancelReason];
export declare const brokerageEntryClearanceStatus: {
    readonly Accepted: "ACCEPTED";
    readonly Cancelled: "CANCELLED";
    readonly CbpExam: "CBP_EXAM";
    readonly CbpHold: "CBP_HOLD";
    readonly Filed: "FILED";
    readonly PgaHold: "PGA_HOLD";
    readonly PgaMayProceed: "PGA_MAY_PROCEED";
    readonly PgaReview: "PGA_REVIEW";
    readonly Processing: "PROCESSING";
    readonly Rejected: "REJECTED";
    readonly Released: "RELEASED";
};
export type BrokerageEntryClearanceStatus = (typeof brokerageEntryClearanceStatus)[keyof typeof brokerageEntryClearanceStatus];
export declare const brokerageEntryType: {
    readonly Formal: "FORMAL";
    readonly Informal: "INFORMAL";
    readonly Postal: "POSTAL";
};
export type BrokerageEntryType = (typeof brokerageEntryType)[keyof typeof brokerageEntryType];
export declare const brokerageFeedMode: {
    readonly Live: "LIVE";
    readonly Test: "TEST";
};
export type BrokerageFeedMode = (typeof brokerageFeedMode)[keyof typeof brokerageFeedMode];
export declare const brokerageNatureOfTransaction: {
    readonly Documents: "DOCUMENTS";
    readonly ForResale: "FOR_RESALE";
    readonly Gift: "GIFT";
    readonly NotForResale: "NOT_FOR_RESALE";
    readonly Return: "RETURN";
};
export type BrokerageNatureOfTransaction = (typeof brokerageNatureOfTransaction)[keyof typeof brokerageNatureOfTransaction];
export declare const brokerageOpsNotificationChannel: {
    readonly Email: "EMAIL";
};
export type BrokerageOpsNotificationChannel = (typeof brokerageOpsNotificationChannel)[keyof typeof brokerageOpsNotificationChannel];
export declare const brokerageOpsNotificationType: {
    readonly BatchSubmitted: "BATCH_SUBMITTED";
};
export type BrokerageOpsNotificationType = (typeof brokerageOpsNotificationType)[keyof typeof brokerageOpsNotificationType];
export declare const brokerageOutreachRecipient: {
    readonly PostalOperator: "POSTAL_OPERATOR";
    readonly Shipper: "SHIPPER";
};
export type BrokerageOutreachRecipient = (typeof brokerageOutreachRecipient)[keyof typeof brokerageOutreachRecipient];
export declare const brokeragePgaAgency: {
    readonly Other: "OTHER";
    readonly UsAtf: "US_ATF";
    readonly UsCdc: "US_CDC";
    readonly UsCpsc: "US_CPSC";
    readonly UsDea: "US_DEA";
    readonly UsEpa: "US_EPA";
    readonly UsEpaTsca: "US_EPA_TSCA";
    readonly UsFcc: "US_FCC";
    readonly UsFda: "US_FDA";
    readonly UsNhtsa: "US_NHTSA";
    readonly UsOfac: "US_OFAC";
    readonly UsTtb: "US_TTB";
    readonly UsUsdaAms: "US_USDA_AMS";
    readonly UsUsdaAphis: "US_USDA_APHIS";
    readonly UsUsdaFsis: "US_USDA_FSIS";
    readonly UsUsfws: "US_USFWS";
};
export type BrokeragePgaAgency = (typeof brokeragePgaAgency)[keyof typeof brokeragePgaAgency];
export declare const brokeragePgaRequirementStrictness: {
    readonly Conditional: "CONDITIONAL";
    readonly Required: "REQUIRED";
};
export type BrokeragePgaRequirementStrictness = (typeof brokeragePgaRequirementStrictness)[keyof typeof brokeragePgaRequirementStrictness];
export declare const brokerageTransportationMode: {
    readonly AirContainer: "AIR_CONTAINER";
    readonly AirNonContainer: "AIR_NON_CONTAINER";
    readonly Auto: "AUTO";
    readonly BorderWaterborne: "BORDER_WATERBORNE";
    readonly FixedTransport: "FIXED_TRANSPORT";
    readonly Mail: "MAIL";
    readonly PassengerHandCarried: "PASSENGER_HAND_CARRIED";
    readonly Pedestrian: "PEDESTRIAN";
    readonly RailContainer: "RAIL_CONTAINER";
    readonly RailNonContainer: "RAIL_NON_CONTAINER";
    readonly RoadOther: "ROAD_OTHER";
    readonly TruckContainer: "TRUCK_CONTAINER";
    readonly TruckNonContainer: "TRUCK_NON_CONTAINER";
    readonly VesselContainer: "VESSEL_CONTAINER";
    readonly VesselNonContainer: "VESSEL_NON_CONTAINER";
};
export type BrokerageTransportationMode = (typeof brokerageTransportationMode)[keyof typeof brokerageTransportationMode];
export declare const brokerageWorkOrderEscalationTarget: {
    readonly Broker: "BROKER";
    readonly Engineering: "ENGINEERING";
};
export type BrokerageWorkOrderEscalationTarget = (typeof brokerageWorkOrderEscalationTarget)[keyof typeof brokerageWorkOrderEscalationTarget];
export declare const brokerageWorkOrderEventType: {
    readonly Assigned: "ASSIGNED";
    readonly AutoResolved: "AUTO_RESOLVED";
    readonly Cancelled: "CANCELLED";
    readonly Claimed: "CLAIMED";
    readonly Created: "CREATED";
    readonly Escalated: "ESCALATED";
    readonly Note: "NOTE";
    readonly Released: "RELEASED";
    readonly Resolved: "RESOLVED";
    readonly Resumed: "RESUMED";
    readonly Waiting: "WAITING";
};
export type BrokerageWorkOrderEventType = (typeof brokerageWorkOrderEventType)[keyof typeof brokerageWorkOrderEventType];
export declare const brokerageWorkOrderResolution: {
    readonly CancelledAndRefiled: "CANCELLED_AND_REFILED";
    readonly ConditionCleared: "CONDITION_CLEARED";
    readonly CorrectedPrefile: "CORRECTED_PREFILE";
    readonly NoActionRequired: "NO_ACTION_REQUIRED";
    readonly ReferenceDataFixedResent: "REFERENCE_DATA_FIXED_RESENT";
    readonly UnfileableAccepted: "UNFILEABLE_ACCEPTED";
};
export type BrokerageWorkOrderResolution = (typeof brokerageWorkOrderResolution)[keyof typeof brokerageWorkOrderResolution];
export declare const brokerageWorkOrderStatus: {
    readonly AutoResolved: "AUTO_RESOLVED";
    readonly Cancelled: "CANCELLED";
    readonly Open: "OPEN";
    readonly Resolved: "RESOLVED";
    readonly Waiting: "WAITING";
};
export type BrokerageWorkOrderStatus = (typeof brokerageWorkOrderStatus)[keyof typeof brokerageWorkOrderStatus];
export declare const brokerageWorkOrderSubjectType: {
    readonly Consignment: "CONSIGNMENT";
    readonly ConsignmentGreenLightFinding: "CONSIGNMENT_GREEN_LIGHT_FINDING";
    readonly Consolidation: "CONSOLIDATION";
    readonly DutyDispute: "DUTY_DISPUTE";
    readonly Entry: "ENTRY";
    readonly ManifestLine: "MANIFEST_LINE";
};
export type BrokerageWorkOrderSubjectType = (typeof brokerageWorkOrderSubjectType)[keyof typeof brokerageWorkOrderSubjectType];
export declare const brokerageWorkOrderType: {
    readonly AdcvdReview: "ADCVD_REVIEW";
    readonly CbpCancelled: "CBP_CANCELLED";
    readonly CbpExam: "CBP_EXAM";
    readonly CbpHold: "CBP_HOLD";
    readonly CustomsDescriptionReview: "CUSTOMS_DESCRIPTION_REVIEW";
    readonly DeniedPartyReview: "DENIED_PARTY_REVIEW";
    readonly DutyDisputeReview: "DUTY_DISPUTE_REVIEW";
    readonly EntryRejected: "ENTRY_REJECTED";
    readonly HsCodeReview: "HS_CODE_REVIEW";
    readonly PgaHold: "PGA_HOLD";
    readonly SubmissionFailed: "SUBMISSION_FAILED";
    readonly Unfileable: "UNFILEABLE";
    readonly ValidationBlocked: "VALIDATION_BLOCKED";
    readonly ValueReview: "VALUE_REVIEW";
};
export type BrokerageWorkOrderType = (typeof brokerageWorkOrderType)[keyof typeof brokerageWorkOrderType];
export declare const bulkJobStatus: {
    readonly Error: "ERROR";
    readonly FileSaved: "FILE_SAVED";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type BulkJobStatus = (typeof bulkJobStatus)[keyof typeof bulkJobStatus];
export declare const bundleImportMode: {
    readonly BundleOnly: "BUNDLE_ONLY";
    readonly BundleWithItems: "BUNDLE_WITH_ITEMS";
};
export type BundleImportMode = (typeof bundleImportMode)[keyof typeof bundleImportMode];
export declare const calculationMethodPriority: {
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
};
export type CalculationMethodPriority = (typeof calculationMethodPriority)[keyof typeof calculationMethodPriority];
export declare const carrierAccountApiUsage: {
    readonly BillDutyTax: "BILL_DUTY_TAX";
    readonly Label: "LABEL";
    readonly Rating: "RATING";
};
export type CarrierAccountApiUsage = (typeof carrierAccountApiUsage)[keyof typeof carrierAccountApiUsage];
export declare const carrierAccountCode: {
    readonly Apc: "APC";
    readonly Asendia: "ASENDIA";
    readonly Dhl: "DHL";
    readonly DhlEcommerce: "DHL_ECOMMERCE";
    readonly Fedex: "FEDEX";
    readonly JapanPost: "JAPAN_POST";
    readonly Ups: "UPS";
};
export type CarrierAccountCode = (typeof carrierAccountCode)[keyof typeof carrierAccountCode];
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
export declare const carrierApiCredentialTypeCode: {
    readonly AccessKey: "ACCESS_KEY";
    readonly AccessLicenseNumber: "ACCESS_LICENSE_NUMBER";
    readonly AccountNumber: "ACCOUNT_NUMBER";
    readonly ApiKey: "API_KEY";
    readonly ApiPassword: "API_PASSWORD";
    readonly ApiToken: "API_TOKEN";
    readonly BearerToken: "BEARER_TOKEN";
    readonly CustomerId: "CUSTOMER_ID";
    readonly MeterNumber: "METER_NUMBER";
    readonly PaymentCountryCode: "PAYMENT_COUNTRY_CODE";
    readonly SenderLocation: "SENDER_LOCATION";
    readonly ShipperNumber: "SHIPPER_NUMBER";
    readonly SiteId: "SITE_ID";
    readonly UserId: "USER_ID";
};
export type CarrierApiCredentialTypeCode = (typeof carrierApiCredentialTypeCode)[keyof typeof carrierApiCredentialTypeCode];
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
export declare const carrierApiRatingSource: {
    readonly Cache: "CACHE";
    readonly Live: "LIVE";
};
export type CarrierApiRatingSource = (typeof carrierApiRatingSource)[keyof typeof carrierApiRatingSource];
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
export declare const carrierBillingInvoiceCarrier: {
    readonly BroadReach: "BROAD_REACH";
};
export type CarrierBillingInvoiceCarrier = (typeof carrierBillingInvoiceCarrier)[keyof typeof carrierBillingInvoiceCarrier];
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
    readonly Asendia: "ASENDIA";
    readonly AustraliaPost: "AUSTRALIA_POST";
    readonly BermudaPost: "BERMUDA_POST";
    readonly CanadaPost: "CANADA_POST";
    readonly CyprusPost: "CYPRUS_POST";
    readonly Dhl: "DHL";
    readonly DhlEcommerce: "DHL_ECOMMERCE";
    readonly DirectLink: "DIRECT_LINK";
    readonly Ehub: "EHUB";
    readonly Envia: "ENVIA";
    readonly Fedex: "FEDEX";
    readonly Fedexxb: "FEDEXXB";
    readonly GlobalAccess: "GLOBAL_ACCESS";
    readonly JapanPost: "JAPAN_POST";
    readonly KazPost: "KAZ_POST";
    readonly Ups: "UPS";
    readonly Usps: "USPS";
};
export type CarrierCode = (typeof carrierCode)[keyof typeof carrierCode];
export declare const carrierCredentialTypeCode: {
    readonly AccessKey: "ACCESS_KEY";
    readonly AccessLicenseNumber: "ACCESS_LICENSE_NUMBER";
    readonly AccountNumber: "ACCOUNT_NUMBER";
    readonly ApiKey: "API_KEY";
    readonly ApiPassword: "API_PASSWORD";
    readonly ApiToken: "API_TOKEN";
    readonly BearerToken: "BEARER_TOKEN";
    readonly CustomerId: "CUSTOMER_ID";
    readonly MeterNumber: "METER_NUMBER";
    readonly PaymentCountryCode: "PAYMENT_COUNTRY_CODE";
    readonly RefreshToken: "REFRESH_TOKEN";
    readonly SenderLocation: "SENDER_LOCATION";
    readonly ShipperNumber: "SHIPPER_NUMBER";
    readonly SiteId: "SITE_ID";
    readonly TrackingEmail: "TRACKING_EMAIL";
    readonly TrackingPassword: "TRACKING_PASSWORD";
    readonly UserId: "USER_ID";
};
export type CarrierCredentialTypeCode = (typeof carrierCredentialTypeCode)[keyof typeof carrierCredentialTypeCode];
export declare const carrierFeeRuleApplicationType: {
    readonly Always: "ALWAYS";
    readonly FeePresent: "FEE_PRESENT";
};
export type CarrierFeeRuleApplicationType = (typeof carrierFeeRuleApplicationType)[keyof typeof carrierFeeRuleApplicationType];
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
export declare const carrierLabelType: {
    readonly Outbound: "OUTBOUND";
    readonly ReturnEmail: "RETURN_EMAIL";
    readonly ReturnPickup: "RETURN_PICKUP";
    readonly ReturnPrintLabel: "RETURN_PRINT_LABEL";
};
export type CarrierLabelType = (typeof carrierLabelType)[keyof typeof carrierLabelType];
export declare const carrierMultiFactorAuthMethod: {
    readonly CallPin: "CALL_PIN";
    readonly EmailPin: "EMAIL_PIN";
    readonly Invoice: "INVOICE";
    readonly SmsPin: "SMS_PIN";
    readonly TechSupport: "TECH_SUPPORT";
    readonly Token: "TOKEN";
};
export type CarrierMultiFactorAuthMethod = (typeof carrierMultiFactorAuthMethod)[keyof typeof carrierMultiFactorAuthMethod];
export declare const carrierRateType: {
    readonly Negotiated: "NEGOTIATED";
    readonly Retail: "RETAIL";
};
export type CarrierRateType = (typeof carrierRateType)[keyof typeof carrierRateType];
export declare const carrierSurchargeMeasureType: {
    readonly CubicFeet: "CUBIC_FEET";
    readonly Length: "LENGTH";
    readonly LengthComposite: "LENGTH_COMPOSITE";
    readonly LengthPlusGirth: "LENGTH_PLUS_GIRTH";
    readonly LongestSide: "LONGEST_SIDE";
    readonly SecondLongestSide: "SECOND_LONGEST_SIDE";
    readonly VolumetricWeight: "VOLUMETRIC_WEIGHT";
    readonly Weight: "WEIGHT";
};
export type CarrierSurchargeMeasureType = (typeof carrierSurchargeMeasureType)[keyof typeof carrierSurchargeMeasureType];
export declare const cartAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
    readonly Item: "ITEM";
    readonly OrderTotal: "ORDER_TOTAL";
    readonly PromoCode: "PROMO_CODE";
    readonly Shipping: "SHIPPING";
};
export type CartAdjustmentType = (typeof cartAdjustmentType)[keyof typeof cartAdjustmentType];
export declare const cartType: {
    readonly Checkout: "CHECKOUT";
    readonly Collect: "COLLECT";
    readonly Invoice: "INVOICE";
    readonly InvoiceCollect: "INVOICE_COLLECT";
    readonly LabelCollect: "LABEL_COLLECT";
    readonly PrepayCollect: "PREPAY_COLLECT";
    readonly Quote: "QUOTE";
};
export type CartType = (typeof cartType)[keyof typeof cartType];
export declare const cartonEfficiencyInterval: {
    readonly Day: "DAY";
    readonly Month: "MONTH";
    readonly Week: "WEEK";
};
export type CartonEfficiencyInterval = (typeof cartonEfficiencyInterval)[keyof typeof cartonEfficiencyInterval];
export declare const cartonPlacementsMode: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type CartonPlacementsMode = (typeof cartonPlacementsMode)[keyof typeof cartonPlacementsMode];
export declare const cashFlowProductType: {
    readonly LateFee: "LATE_FEE";
    readonly Postal: "POSTAL";
    readonly Standard: "STANDARD";
    readonly StripeBilling: "STRIPE_BILLING";
};
export type CashFlowProductType = (typeof cashFlowProductType)[keyof typeof cashFlowProductType];
export declare const cashFlowTablesEnumInput: {
    readonly Bill: "BILL";
    readonly Deposit: "DEPOSIT";
    readonly Invoice: "INVOICE";
    readonly Payout: "PAYOUT";
};
export declare const cashflowEmailRecipientStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
};
export type CashflowEmailRecipientStatus = (typeof cashflowEmailRecipientStatus)[keyof typeof cashflowEmailRecipientStatus];
export declare const cashflowEmailRecipientType: {
    readonly Bcc: "BCC";
    readonly Cc: "CC";
    readonly To: "TO";
};
export type CashflowEmailRecipientType = (typeof cashflowEmailRecipientType)[keyof typeof cashflowEmailRecipientType];
export declare const cashflowEmailType: {
    readonly All: "ALL";
    readonly InvoiceConfirmation: "INVOICE_CONFIRMATION";
    readonly InvoicePaymentReady: "INVOICE_PAYMENT_READY";
    readonly InvoicePaymentReminder: "INVOICE_PAYMENT_REMINDER";
    readonly InvoiceReady: "INVOICE_READY";
    readonly PostalInvoiceReady: "POSTAL_INVOICE_READY";
};
export type CashflowEmailType = (typeof cashflowEmailType)[keyof typeof cashflowEmailType];
export declare const catalogCsvColumnStrategy: {
    readonly Attribute: "ATTRIBUTE";
    readonly Field: "FIELD";
    readonly Ignore: "IGNORE";
    readonly Metadata: "METADATA";
};
export type CatalogCsvColumnStrategy = (typeof catalogCsvColumnStrategy)[keyof typeof catalogCsvColumnStrategy];
export declare const catalogCsvMappingFieldRequirement: {
    readonly Optional: "OPTIONAL";
    readonly Required: "REQUIRED";
    readonly RequiredOneOf: "REQUIRED_ONE_OF";
};
export type CatalogCsvMappingFieldRequirement = (typeof catalogCsvMappingFieldRequirement)[keyof typeof catalogCsvMappingFieldRequirement];
export declare const catalogItemExportJobAction: {
    readonly Email: "EMAIL";
    readonly None: "NONE";
};
export type CatalogItemExportJobAction = (typeof catalogItemExportJobAction)[keyof typeof catalogItemExportJobAction];
export declare const catalogItemMatchBehavior: {
    readonly Optional: "OPTIONAL";
    readonly Required: "REQUIRED";
    readonly RequiredForSubOrgs: "REQUIRED_FOR_SUB_ORGS";
};
export type CatalogItemMatchBehavior = (typeof catalogItemMatchBehavior)[keyof typeof catalogItemMatchBehavior];
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
export declare const categorySuggestionApplication: {
    readonly Never: "NEVER";
    readonly WhenWrong: "WHEN_WRONG";
};
export type CategorySuggestionApplication = (typeof categorySuggestionApplication)[keyof typeof categorySuggestionApplication];
export declare const categoryValidationVerdict: {
    readonly Correct: "CORRECT";
    readonly Wrong: "WRONG";
};
export type CategoryValidationVerdict = (typeof categoryValidationVerdict)[keyof typeof categoryValidationVerdict];
export declare const cbpBatchType: {
    readonly Filed: "FILED";
    readonly Paid: "PAID";
};
export type CbpBatchType = (typeof cbpBatchType)[keyof typeof cbpBatchType];
export declare const cbpSubmissionJobStatus: {
    readonly BlockedClassification: "BLOCKED_CLASSIFICATION";
    readonly Delivered: "DELIVERED";
    readonly Failed: "FAILED";
    readonly NoSubmissions: "NO_SUBMISSIONS";
    readonly Queued: "QUEUED";
    readonly ReadyForReview: "READY_FOR_REVIEW";
    readonly Running: "RUNNING";
};
export type CbpSubmissionJobStatus = (typeof cbpSubmissionJobStatus)[keyof typeof cbpSubmissionJobStatus];
export declare const cbpSubmissionReportType: {
    readonly InternationalMailDuty: "INTERNATIONAL_MAIL_DUTY";
    readonly LegacyCsv: "LEGACY_CSV";
};
export type CbpSubmissionReportType = (typeof cbpSubmissionReportType)[keyof typeof cbpSubmissionReportType];
export declare const cbpSubmissionStatus: {
    readonly Failed: "FAILED";
    readonly Filed: "FILED";
    readonly Paid: "PAID";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Ready: "READY";
    readonly Skipped: "SKIPPED";
};
export type CbpSubmissionStatus = (typeof cbpSubmissionStatus)[keyof typeof cbpSubmissionStatus];
export declare const channelConnectionStatus: {
    readonly Active: "ACTIVE";
    readonly Disabled: "DISABLED";
    readonly Error: "ERROR";
    readonly Pending: "PENDING";
};
export type ChannelConnectionStatus = (typeof channelConnectionStatus)[keyof typeof channelConnectionStatus];
export declare const channelOrderImportJobStatus: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Queued: "QUEUED";
    readonly Succeeded: "SUCCEEDED";
    readonly SucceededWithErrors: "SUCCEEDED_WITH_ERRORS";
};
export type ChannelOrderImportJobStatus = (typeof channelOrderImportJobStatus)[keyof typeof channelOrderImportJobStatus];
export declare const channelOrderImportRowOutcome: {
    readonly Created: "CREATED";
    readonly Error: "ERROR";
    readonly SkippedNoChange: "SKIPPED_NO_CHANGE";
    readonly TrackingUpdated: "TRACKING_UPDATED";
};
export type ChannelOrderImportRowOutcome = (typeof channelOrderImportRowOutcome)[keyof typeof channelOrderImportRowOutcome];
export declare const channelType: {
    readonly Amazon: "AMAZON";
    readonly Bigcommerce: "BIGCOMMERCE";
    readonly CustomApi: "CUSTOM_API";
    readonly CustomEmail: "CUSTOM_EMAIL";
    readonly Ebay: "EBAY";
    readonly Etsy: "ETSY";
    readonly Magento: "MAGENTO";
    readonly Mirakl: "MIRAKL";
    readonly Shopify: "SHOPIFY";
    readonly Squarespace: "SQUARESPACE";
    readonly Walmart: "WALMART";
    readonly Walmartca: "WALMARTCA";
    readonly Wix: "WIX";
    readonly Woocommerce: "WOOCOMMERCE";
};
export type ChannelType = (typeof channelType)[keyof typeof channelType];
export declare const chargeAttemptOutcome: {
    readonly HardDecline: "HARD_DECLINE";
    readonly NetworkError: "NETWORK_ERROR";
    readonly Pending: "PENDING";
    readonly ProcessorError: "PROCESSOR_ERROR";
    readonly Returned: "RETURNED";
    readonly Settled: "SETTLED";
    readonly SoftDecline: "SOFT_DECLINE";
    readonly Submitted: "SUBMITTED";
    readonly Succeeded: "SUCCEEDED";
};
export type ChargeAttemptOutcome = (typeof chargeAttemptOutcome)[keyof typeof chargeAttemptOutcome];
export declare const checkoutCartType: {
    readonly Checkout: "CHECKOUT";
    readonly Collect: "COLLECT";
};
export type CheckoutCartType = (typeof checkoutCartType)[keyof typeof checkoutCartType];
export declare const checkoutCompanyFieldsStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type CheckoutCompanyFieldsStatus = (typeof checkoutCompanyFieldsStatus)[keyof typeof checkoutCompanyFieldsStatus];
export declare const checkoutMerchantOfRecordType: {
    readonly Merchant: "MERCHANT";
    readonly Zonos: "ZONOS";
};
export type CheckoutMerchantOfRecordType = (typeof checkoutMerchantOfRecordType)[keyof typeof checkoutMerchantOfRecordType];
export declare const checkoutPaymentProcessorType: {
    readonly Airwallex: "AIRWALLEX";
    readonly Paypal: "PAYPAL";
    readonly Stripe: "STRIPE";
};
export type CheckoutPaymentProcessorType = (typeof checkoutPaymentProcessorType)[keyof typeof checkoutPaymentProcessorType];
export declare const checkoutPaypalOrderIntent: {
    readonly Authorize: "AUTHORIZE";
    readonly Capture: "CAPTURE";
};
export type CheckoutPaypalOrderIntent = (typeof checkoutPaypalOrderIntent)[keyof typeof checkoutPaypalOrderIntent];
export declare const checkoutProcessor: {
    readonly Airwallex: "AIRWALLEX";
    readonly Stripe: "STRIPE";
};
export type CheckoutProcessor = (typeof checkoutProcessor)[keyof typeof checkoutProcessor];
export declare const checkoutSessionCreationModeType: {
    readonly WithPaymentIntent: "WITH_PAYMENT_INTENT";
    readonly WithoutPaymentIntent: "WITHOUT_PAYMENT_INTENT";
};
export type CheckoutSessionCreationModeType = (typeof checkoutSessionCreationModeType)[keyof typeof checkoutSessionCreationModeType];
export declare const checkoutSessionPartyReferenceType: {
    readonly Destination: "DESTINATION";
    readonly Payor: "PAYOR";
};
export type CheckoutSessionPartyReferenceType = (typeof checkoutSessionPartyReferenceType)[keyof typeof checkoutSessionPartyReferenceType];
export declare const checkoutSessionStatus: {
    readonly Completed: "COMPLETED";
    readonly InProgress: "IN_PROGRESS";
};
export type CheckoutSessionStatus = (typeof checkoutSessionStatus)[keyof typeof checkoutSessionStatus];
export declare const checkoutSessionType: {
    readonly Checkout: "CHECKOUT";
    readonly Collect: "COLLECT";
    readonly DeclarationData: "DECLARATION_DATA";
    readonly Invoice: "INVOICE";
    readonly InvoiceCollect: "INVOICE_COLLECT";
    readonly LabelCollect: "LABEL_COLLECT";
    readonly PrepayCollect: "PREPAY_COLLECT";
    readonly PrepayInvoice: "PREPAY_INVOICE";
};
export type CheckoutSessionType = (typeof checkoutSessionType)[keyof typeof checkoutSessionType];
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
export declare const checkoutTaxExemptionReason: {
    readonly Charitable: "CHARITABLE";
    readonly DirectPay: "DIRECT_PAY";
    readonly EducationalOrganization: "EDUCATIONAL_ORGANIZATION";
    readonly FederalGovernment: "FEDERAL_GOVERNMENT";
    readonly Other: "OTHER";
    readonly ReligiousOrganization: "RELIGIOUS_ORGANIZATION";
    readonly Resale: "RESALE";
    readonly StateLocalGovernment: "STATE_LOCAL_GOVERNMENT";
    readonly TribalGovernment: "TRIBAL_GOVERNMENT";
    readonly Unspecified: "UNSPECIFIED";
};
export type CheckoutTaxExemptionReason = (typeof checkoutTaxExemptionReason)[keyof typeof checkoutTaxExemptionReason];
export declare const checkoutTaxExemptionRejectionCode: {
    readonly DuplicateJurisdiction: "DUPLICATE_JURISDICTION";
    readonly InvalidDateRange: "INVALID_DATE_RANGE";
    readonly MissingExemptionReference: "MISSING_EXEMPTION_REFERENCE";
    readonly UnknownCustomer: "UNKNOWN_CUSTOMER";
    readonly UnknownJurisdiction: "UNKNOWN_JURISDICTION";
};
export type CheckoutTaxExemptionRejectionCode = (typeof checkoutTaxExemptionRejectionCode)[keyof typeof checkoutTaxExemptionRejectionCode];
export declare const checkoutVarianceTestStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
};
export type CheckoutVarianceTestStatus = (typeof checkoutVarianceTestStatus)[keyof typeof checkoutVarianceTestStatus];
export declare const checkoutVisibilityStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type CheckoutVisibilityStatus = (typeof checkoutVisibilityStatus)[keyof typeof checkoutVisibilityStatus];
export declare const cherryPickFinalSetMode: {
    readonly Final: "FINAL";
    readonly NotFinal: "NOT_FINAL";
};
export type CherryPickFinalSetMode = (typeof cherryPickFinalSetMode)[keyof typeof cherryPickFinalSetMode];
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
export declare const classificationLevel: {
    readonly Advanced: "ADVANCED";
    readonly Base: "BASE";
    readonly Ultra: "ULTRA";
};
export type ClassificationLevel = (typeof classificationLevel)[keyof typeof classificationLevel];
export declare const classificationMethod: {
    readonly Augmented: "AUGMENTED";
    readonly Calculated: "CALCULATED";
    readonly Ultra: "ULTRA";
};
export type ClassificationMethod = (typeof classificationMethod)[keyof typeof classificationMethod];
export declare const classificationRequestField: {
    readonly Category: "CATEGORY";
    readonly Description: "DESCRIPTION";
    readonly Name: "NAME";
};
export type ClassificationRequestField = (typeof classificationRequestField)[keyof typeof classificationRequestField];
export declare const classifierPromptReplyFormat: {
    readonly Position: "POSITION";
    readonly Text: "TEXT";
    readonly Value: "VALUE";
};
export type ClassifierPromptReplyFormat = (typeof classifierPromptReplyFormat)[keyof typeof classifierPromptReplyFormat];
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
export declare const commercialInvoiceItemMeasurementType: {
    readonly AlcoholByVolume: "ALCOHOL_BY_VOLUME";
    readonly Height: "HEIGHT";
    readonly Length: "LENGTH";
    readonly TotalWeight: "TOTAL_WEIGHT";
    readonly Volume: "VOLUME";
    readonly Weight: "WEIGHT";
    readonly Width: "WIDTH";
};
export type CommercialInvoiceItemMeasurementType = (typeof commercialInvoiceItemMeasurementType)[keyof typeof commercialInvoiceItemMeasurementType];
export declare const commercialInvoiceItemUnitOfMeasure: {
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
export type CommercialInvoiceItemUnitOfMeasure = (typeof commercialInvoiceItemUnitOfMeasure)[keyof typeof commercialInvoiceItemUnitOfMeasure];
export declare const complianceAttributeSource: {
    readonly Document: "DOCUMENT";
    readonly Questionnaire: "QUESTIONNAIRE";
};
export type ComplianceAttributeSource = (typeof complianceAttributeSource)[keyof typeof complianceAttributeSource];
export declare const complianceDocumentAttributeNamespace: {
    readonly Composition: "COMPOSITION";
    readonly TradeAgreement: "TRADE_AGREEMENT";
};
export type ComplianceDocumentAttributeNamespace = (typeof complianceDocumentAttributeNamespace)[keyof typeof complianceDocumentAttributeNamespace];
export declare const complianceDocumentVerificationStatus: {
    readonly Unspecified: "UNSPECIFIED";
    readonly Unverified: "UNVERIFIED";
    readonly Verified: "VERIFIED";
};
export type ComplianceDocumentVerificationStatus = (typeof complianceDocumentVerificationStatus)[keyof typeof complianceDocumentVerificationStatus];
export declare const complianceObligationReason: {
    readonly ContentChanged: "CONTENT_CHANGED";
    readonly Expired: "EXPIRED";
    readonly NewlyApplicable: "NEWLY_APPLICABLE";
    readonly VersionRelease: "VERSION_RELEASE";
};
export type ComplianceObligationReason = (typeof complianceObligationReason)[keyof typeof complianceObligationReason];
export declare const complianceObligationStatus: {
    readonly Current: "CURRENT";
    readonly InProgress: "IN_PROGRESS";
    readonly NeedsReview: "NEEDS_REVIEW";
    readonly Unanswered: "UNANSWERED";
};
export type ComplianceObligationStatus = (typeof complianceObligationStatus)[keyof typeof complianceObligationStatus];
export declare const complianceProgramType: {
    readonly Fta: "FTA";
    readonly Other: "OTHER";
    readonly Pga: "PGA";
    readonly TariffMeasure: "TARIFF_MEASURE";
};
export type ComplianceProgramType = (typeof complianceProgramType)[keyof typeof complianceProgramType];
export declare const complianceProvenance: {
    readonly AgentAttested: "AGENT_ATTESTED";
    readonly CopiedAttested: "COPIED_ATTESTED";
    readonly InferredAttested: "INFERRED_ATTESTED";
    readonly Manual: "MANUAL";
};
export type ComplianceProvenance = (typeof complianceProvenance)[keyof typeof complianceProvenance];
export declare const complianceTranslationEntityType: {
    readonly AnswerOption: "ANSWER_OPTION";
    readonly Catalog: "CATALOG";
    readonly ComplianceProgram: "COMPLIANCE_PROGRAM";
    readonly Question: "QUESTION";
};
export type ComplianceTranslationEntityType = (typeof complianceTranslationEntityType)[keyof typeof complianceTranslationEntityType];
export declare const complianceTranslationJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly InProgress: "IN_PROGRESS";
    readonly Pending: "PENDING";
};
export type ComplianceTranslationJobStatus = (typeof complianceTranslationJobStatus)[keyof typeof complianceTranslationJobStatus];
export declare const complianceUnitOfMeasure: {
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
export type ComplianceUnitOfMeasure = (typeof complianceUnitOfMeasure)[keyof typeof complianceUnitOfMeasure];
export declare const compositionAttributeKey: {
    readonly CountryOfCast: "COUNTRY_OF_CAST";
    readonly CountryOfMeltAndPour: "COUNTRY_OF_MELT_AND_POUR";
    readonly CountryOfOrigin: "COUNTRY_OF_ORIGIN";
    readonly CountryOfPour: "COUNTRY_OF_POUR";
    readonly CountryOfSmelt: "COUNTRY_OF_SMELT";
    readonly MaterialOrigin: "MATERIAL_ORIGIN";
};
export type CompositionAttributeKey = (typeof compositionAttributeKey)[keyof typeof compositionAttributeKey];
export declare const conditionOperator: {
    readonly Answered: "ANSWERED";
    readonly Equals: "EQUALS";
    readonly Excludes: "EXCLUDES";
    readonly IncludesAll: "INCLUDES_ALL";
    readonly IncludesAny: "INCLUDES_ANY";
    readonly NotAnswered: "NOT_ANSWERED";
    readonly NotEquals: "NOT_EQUALS";
};
export type ConditionOperator = (typeof conditionOperator)[keyof typeof conditionOperator];
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
export declare const consignmentGreenLightFindingState: {
    readonly Open: "OPEN";
    readonly Resolved: "RESOLVED";
};
export type ConsignmentGreenLightFindingState = (typeof consignmentGreenLightFindingState)[keyof typeof consignmentGreenLightFindingState];
export declare const consignmentGreenLightResolutionOwner: {
    readonly Operator: "OPERATOR";
    readonly Shipper: "SHIPPER";
};
export type ConsignmentGreenLightResolutionOwner = (typeof consignmentGreenLightResolutionOwner)[keyof typeof consignmentGreenLightResolutionOwner];
export declare const consignmentGreenLightValueJustificationReason: {
    readonly DamagedOrRepaired: "DAMAGED_OR_REPAIRED";
    readonly GiftNotRetail: "GIFT_NOT_RETAIL";
    readonly Other: "OTHER";
    readonly Sample: "SAMPLE";
    readonly UsedSecondHand: "USED_SECOND_HAND";
};
export type ConsignmentGreenLightValueJustificationReason = (typeof consignmentGreenLightValueJustificationReason)[keyof typeof consignmentGreenLightValueJustificationReason];
export declare const consignmentItemReadiness: {
    readonly ActionRequired: "ACTION_REQUIRED";
    readonly Pending: "PENDING";
    readonly Ready: "READY";
};
export type ConsignmentItemReadiness = (typeof consignmentItemReadiness)[keyof typeof consignmentItemReadiness];
export declare const consignmentReadinessProfile: {
    readonly ComplianceInferred: "COMPLIANCE_INFERRED";
    readonly GreenLightInferred: "GREEN_LIGHT_INFERRED";
    readonly Standard: "STANDARD";
};
export type ConsignmentReadinessProfile = (typeof consignmentReadinessProfile)[keyof typeof consignmentReadinessProfile];
export declare const consignmentStatus: {
    readonly Accepted: "ACCEPTED";
    readonly Archived: "ARCHIVED";
    readonly Cancelled: "CANCELLED";
    readonly Candidate: "CANDIDATE";
    readonly Draft: "DRAFT";
    readonly Error: "ERROR";
    readonly Filed: "FILED";
    readonly Filing: "FILING";
    readonly Processing: "PROCESSING";
    readonly Ready: "READY";
    readonly Rejected: "REJECTED";
};
export type ConsignmentStatus = (typeof consignmentStatus)[keyof typeof consignmentStatus];
export declare const consolidationSort: {
    readonly ArrivalDateDesc: "ARRIVAL_DATE_DESC";
    readonly CreatedAtDesc: "CREATED_AT_DESC";
};
export type ConsolidationSort = (typeof consolidationSort)[keyof typeof consolidationSort];
export declare const consolidationStatus: {
    readonly Archived: "ARCHIVED";
    readonly Arrived: "ARRIVED";
    readonly Closed: "CLOSED";
    readonly InTransit: "IN_TRANSIT";
    readonly Pending: "PENDING";
    readonly Released: "RELEASED";
};
export type ConsolidationStatus = (typeof consolidationStatus)[keyof typeof consolidationStatus];
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
export declare const containerType: {
    readonly CatalogItem: "CATALOG_ITEM";
    readonly Consignment: "CONSIGNMENT";
    readonly Consolidation: "CONSOLIDATION";
    readonly Declaration: "DECLARATION";
    readonly LandedCost: "LANDED_COST";
};
export type ContainerType = (typeof containerType)[keyof typeof containerType];
export declare const contentType: {
    readonly Csv: "CSV";
};
export type ContentType = (typeof contentType)[keyof typeof contentType];
export declare const controlTier: {
    readonly DualUse: "DUAL_USE";
    readonly Munitions: "MUNITIONS";
    readonly Uncontrolled: "UNCONTROLLED";
};
export type ControlTier = (typeof controlTier)[keyof typeof controlTier];
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
    readonly Xk: "XK";
    readonly Ye: "YE";
    readonly Yt: "YT";
    readonly Za: "ZA";
    readonly Zm: "ZM";
    readonly Zw: "ZW";
};
export type CountryCode = (typeof countryCode)[keyof typeof countryCode];
export declare const countryOfOriginJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly Parsing: "PARSING";
    readonly Processing: "PROCESSING";
    readonly ReadyForExport: "READY_FOR_EXPORT";
    readonly Received: "RECEIVED";
};
export type CountryOfOriginJobStatus = (typeof countryOfOriginJobStatus)[keyof typeof countryOfOriginJobStatus];
export declare const credentialProvider: {
    readonly General: "GENERAL";
    readonly Organization: "ORGANIZATION";
    readonly Partner: "PARTNER";
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
export declare const currencyDisplayMode: {
    readonly Order: "ORDER";
    readonly Origin: "ORIGIN";
};
export type CurrencyDisplayMode = (typeof currencyDisplayMode)[keyof typeof currencyDisplayMode];
export declare const currencySymbolLocation: {
    readonly After: "AFTER";
    readonly Before: "BEFORE";
};
export type CurrencySymbolLocation = (typeof currencySymbolLocation)[keyof typeof currencySymbolLocation];
export declare const customsDescriptionValidationStatus: {
    readonly Incomplete: "INCOMPLETE";
    readonly Ready: "READY";
    readonly ReadyToSubheading: "READY_TO_SUBHEADING";
    readonly Unrecognizable: "UNRECOGNIZABLE";
};
export type CustomsDescriptionValidationStatus = (typeof customsDescriptionValidationStatus)[keyof typeof customsDescriptionValidationStatus];
export declare const customsDocumentCarrier: {
    readonly Dhl: "DHL";
    readonly Fedex: "FEDEX";
    readonly Ups: "UPS";
};
export type CustomsDocumentCarrier = (typeof customsDocumentCarrier)[keyof typeof customsDocumentCarrier];
export declare const customsDocumentFileType: {
    readonly Csv: "CSV";
    readonly Html: "HTML";
    readonly Jpg: "JPG";
    readonly Pdf: "PDF";
    readonly Png: "PNG";
    readonly Txt: "TXT";
    readonly Xlsx: "XLSX";
};
export type CustomsDocumentFileType = (typeof customsDocumentFileType)[keyof typeof customsDocumentFileType];
export declare const customsDocumentType: {
    readonly AuthorizationForm: "AUTHORIZATION_FORM";
    readonly CeConformityCertificate: "CE_CONFORMITY_CERTIFICATE";
    readonly CertificateOfOrigin: "CERTIFICATE_OF_ORIGIN";
    readonly CommercialInvoice: "COMMERCIAL_INVOICE";
    readonly ControlLogReceipt: "CONTROL_LOG_RECEIPT";
    readonly CustomsDeclaration: "CUSTOMS_DECLARATION";
    readonly ExportAccompanyingDocument: "EXPORT_ACCOMPANYING_DOCUMENT";
    readonly ExportLicense: "EXPORT_LICENSE";
    readonly ImportPermit: "IMPORT_PERMIT";
    readonly ManifestDocument: "MANIFEST_DOCUMENT";
    readonly Other: "OTHER";
    readonly PackingList: "PACKING_LIST";
    readonly PowerOfAttorney: "POWER_OF_ATTORNEY";
    readonly ProFormaInvoice: "PRO_FORMA_INVOICE";
    readonly SedDocument: "SED_DOCUMENT";
    readonly ShippersLetterOfInstruction: "SHIPPERS_LETTER_OF_INSTRUCTION";
    readonly UsmcaCertificate: "USMCA_CERTIFICATE";
};
export type CustomsDocumentType = (typeof customsDocumentType)[keyof typeof customsDocumentType];
export declare const customsHoldReason: {
    readonly Abandonment: "ABANDONMENT";
    readonly Confiscated: "CONFISCATED";
    readonly DutyNonpayment: "DUTY_NONPAYMENT";
    readonly Examination: "EXAMINATION";
    readonly GoodsNotCompliant: "GOODS_NOT_COMPLIANT";
    readonly GovernmentHold: "GOVERNMENT_HOLD";
    readonly MissingData: "MISSING_DATA";
    readonly MissingDocs: "MISSING_DOCS";
    readonly RefusedEntry: "REFUSED_ENTRY";
    readonly SecurityFail: "SECURITY_FAIL";
    readonly Unknown: "UNKNOWN";
};
export type CustomsHoldReason = (typeof customsHoldReason)[keyof typeof customsHoldReason];
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
export declare const customsRequirementFieldType: {
    readonly Checkbox: "CHECKBOX";
    readonly Date: "DATE";
    readonly List: "LIST";
    readonly Radio: "RADIO";
    readonly Textarea: "TEXTAREA";
    readonly Textbox: "TEXTBOX";
};
export type CustomsRequirementFieldType = (typeof customsRequirementFieldType)[keyof typeof customsRequirementFieldType];
export declare const customsRequirementRequiredness: {
    readonly Conditional: "CONDITIONAL";
    readonly No: "NO";
    readonly Yes: "YES";
};
export type CustomsRequirementRequiredness = (typeof customsRequirementRequiredness)[keyof typeof customsRequirementRequiredness];
export declare const customsRequirementScope: {
    readonly Product: "PRODUCT";
    readonly Shipment: "SHIPMENT";
};
export type CustomsRequirementScope = (typeof customsRequirementScope)[keyof typeof customsRequirementScope];
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
export declare const customsSpecEndUseType: {
    readonly ForResale: "FOR_RESALE";
    readonly NotForResale: "NOT_FOR_RESALE";
};
export type CustomsSpecEndUseType = (typeof customsSpecEndUseType)[keyof typeof customsSpecEndUseType];
export declare const customsSpecSourceType: {
    readonly ApiRequest: "API_REQUEST";
    readonly Catalog: "CATALOG";
    readonly Classify: "CLASSIFY";
    readonly OrganizationSetting: "ORGANIZATION_SETTING";
};
export type CustomsSpecSourceType = (typeof customsSpecSourceType)[keyof typeof customsSpecSourceType];
export declare const customsStage: {
    readonly CustomsCleared: "CUSTOMS_CLEARED";
    readonly CustomsFailed: "CUSTOMS_FAILED";
    readonly CustomsHold: "CUSTOMS_HOLD";
    readonly InCustoms: "IN_CUSTOMS";
    readonly PreCustoms: "PRE_CUSTOMS";
};
export type CustomsStage = (typeof customsStage)[keyof typeof customsStage];
export declare const dangerousGoodsAccessibility: {
    readonly Accessible: "ACCESSIBLE";
    readonly Inaccessible: "INACCESSIBLE";
};
export type DangerousGoodsAccessibility = (typeof dangerousGoodsAccessibility)[keyof typeof dangerousGoodsAccessibility];
export declare const dangerousGoodsCategory: {
    readonly BiologicalSubstance: "BIOLOGICAL_SUBSTANCE";
    readonly ConsumerCommodity: "CONSUMER_COMMODITY";
    readonly ExceptedQuantity: "EXCEPTED_QUANTITY";
    readonly FullyRegulated: "FULLY_REGULATED";
    readonly LimitedQuantity: "LIMITED_QUANTITY";
    readonly MagnetizedMaterial: "MAGNETIZED_MATERIAL";
    readonly NotRestrictedA02: "NOT_RESTRICTED_A02";
    readonly NotRestrictedA67: "NOT_RESTRICTED_A67";
    readonly NotRestrictedA70: "NOT_RESTRICTED_A70";
};
export type DangerousGoodsCategory = (typeof dangerousGoodsCategory)[keyof typeof dangerousGoodsCategory];
export declare const dangerousGoodsOption: {
    readonly HazardousMaterials: "HAZARDOUS_MATERIALS";
    readonly LimitedQuantitiesCommodities: "LIMITED_QUANTITIES_COMMODITIES";
    readonly OrmD: "ORM_D";
    readonly ReportableQuantities: "REPORTABLE_QUANTITIES";
    readonly SmallQuantityException: "SMALL_QUANTITY_EXCEPTION";
};
export type DangerousGoodsOption = (typeof dangerousGoodsOption)[keyof typeof dangerousGoodsOption];
export declare const dashboardUnit: {
    readonly Imperial: "IMPERIAL";
    readonly Metric: "METRIC";
};
export type DashboardUnit = (typeof dashboardUnit)[keyof typeof dashboardUnit];
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
export declare const declarationOrderPaymentCapture: {
    readonly Capture: "CAPTURE";
    readonly Ignore: "IGNORE";
};
export type DeclarationOrderPaymentCapture = (typeof declarationOrderPaymentCapture)[keyof typeof declarationOrderPaymentCapture];
export declare const declarationPaymentStatus: {
    readonly Authorized: "AUTHORIZED";
    readonly Open: "OPEN";
    readonly Paid: "PAID";
};
export type DeclarationPaymentStatus = (typeof declarationPaymentStatus)[keyof typeof declarationPaymentStatus];
export declare const declarationPreClearanceStatus: {
    readonly ConditionalRequirementsPending: "CONDITIONAL_REQUIREMENTS_PENDING";
    readonly MissingRequirements: "MISSING_REQUIREMENTS";
    readonly Ready: "READY";
};
export type DeclarationPreClearanceStatus = (typeof declarationPreClearanceStatus)[keyof typeof declarationPreClearanceStatus];
export declare const declarationSource: {
    readonly Direct: "DIRECT";
    readonly Post: "POST";
    readonly Prepay: "PREPAY";
    readonly Zonos: "ZONOS";
};
export type DeclarationSource = (typeof declarationSource)[keyof typeof declarationSource];
export declare const declarationStatus: {
    readonly Authorized: "AUTHORIZED";
    readonly ItmattReceived: "ITMATT_RECEIVED";
    readonly Open: "OPEN";
    readonly PartiallyShipped: "PARTIALLY_SHIPPED";
    readonly Shipped: "SHIPPED";
    readonly Voided: "VOIDED";
};
export type DeclarationStatus = (typeof declarationStatus)[keyof typeof declarationStatus];
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
export declare const detailCategoryStatus: {
    readonly Active: "ACTIVE";
    readonly Deleted: "DELETED";
};
export type DetailCategoryStatus = (typeof detailCategoryStatus)[keyof typeof detailCategoryStatus];
export declare const detailCategoryTaxableType: {
    readonly SaasTax: "SAAS_TAX";
};
export type DetailCategoryTaxableType = (typeof detailCategoryTaxableType)[keyof typeof detailCategoryTaxableType];
export declare const detailGroupInputType: {
    readonly Api: "API";
    readonly Charge: "CHARGE";
    readonly Credit: "CREDIT";
    readonly CtpCredit: "CTP_CREDIT";
    readonly GeneralAdjustment: "GENERAL_ADJUSTMENT";
    readonly InclusiveConfiguration: "INCLUSIVE_CONFIGURATION";
    readonly Order: "ORDER";
    readonly OrderCancel: "ORDER_CANCEL";
    readonly OrderCancelNoRefund: "ORDER_CANCEL_NO_REFUND";
    readonly OrderRefund: "ORDER_REFUND";
    readonly Postal: "POSTAL";
    readonly PostalCharge: "POSTAL_CHARGE";
    readonly PostalCredit: "POSTAL_CREDIT";
    readonly PostalOrderCancel: "POSTAL_ORDER_CANCEL";
};
export type DetailGroupInputType = (typeof detailGroupInputType)[keyof typeof detailGroupInputType];
export declare const deviceClass: {
    readonly ClassI: "CLASS_I";
    readonly ClassIi: "CLASS_II";
    readonly ClassIii: "CLASS_III";
    readonly NotClassified: "NOT_CLASSIFIED";
    readonly Unclassified: "UNCLASSIFIED";
    readonly Unspecified: "UNSPECIFIED";
};
export type DeviceClass = (typeof deviceClass)[keyof typeof deviceClass];
export declare const deviceEstablishmentRole: {
    readonly ForeignExporter: "FOREIGN_EXPORTER";
    readonly ForeignManufacturer: "FOREIGN_MANUFACTURER";
    readonly UnitedStatesManufacturer: "UNITED_STATES_MANUFACTURER";
};
export type DeviceEstablishmentRole = (typeof deviceEstablishmentRole)[keyof typeof deviceEstablishmentRole];
export declare const devicePremarketStatus: {
    readonly Exempt: "EXEMPT";
    readonly RequiredPma: "REQUIRED_PMA";
    readonly Required_510K: "REQUIRED_510K";
    readonly Unspecified: "UNSPECIFIED";
};
export type DevicePremarketStatus = (typeof devicePremarketStatus)[keyof typeof devicePremarketStatus];
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
export declare const disclaimType: {
    readonly A: "A";
    readonly B: "B";
};
export type DisclaimType = (typeof disclaimType)[keyof typeof disclaimType];
export declare const displayCurrency: {
    readonly DestinationCountry: "DESTINATION_COUNTRY";
    readonly StoreNative: "STORE_NATIVE";
};
export type DisplayCurrency = (typeof displayCurrency)[keyof typeof displayCurrency];
export declare const disputeClaimReviewTrigger: {
    readonly CitedCustomsRuling: "CITED_CUSTOMS_RULING";
    readonly ConflictingEvidence: "CONFLICTING_EVIDENCE";
    readonly UnreadableEvidence: "UNREADABLE_EVIDENCE";
    readonly UnsettledClassification: "UNSETTLED_CLASSIFICATION";
    readonly UnsupportedClaimType: "UNSUPPORTED_CLAIM_TYPE";
};
export type DisputeClaimReviewTrigger = (typeof disputeClaimReviewTrigger)[keyof typeof disputeClaimReviewTrigger];
export declare const disputeClaimType: {
    readonly CountryOfOrigin: "COUNTRY_OF_ORIGIN";
    readonly DeclaredValue: "DECLARED_VALUE";
    readonly Description: "DESCRIPTION";
    readonly HsCode: "HS_CODE";
    readonly Quantity: "QUANTITY";
    readonly Questionnaire: "QUESTIONNAIRE";
    readonly TariffLineNotApplicable: "TARIFF_LINE_NOT_APPLICABLE";
    readonly TariffRateChanged: "TARIFF_RATE_CHANGED";
    readonly TariffRateMiscalculated: "TARIFF_RATE_MISCALCULATED";
    readonly Weight: "WEIGHT";
};
export type DisputeClaimType = (typeof disputeClaimType)[keyof typeof disputeClaimType];
export declare const disputeClaimVerdict: {
    readonly Accepted: "ACCEPTED";
    readonly Denied: "DENIED";
    readonly Review: "REVIEW";
};
export type DisputeClaimVerdict = (typeof disputeClaimVerdict)[keyof typeof disputeClaimVerdict];
export declare const disputeEvidenceScope: {
    readonly Item: "ITEM";
    readonly Order: "ORDER";
};
export type DisputeEvidenceScope = (typeof disputeEvidenceScope)[keyof typeof disputeEvidenceScope];
export declare const disputeStatus: {
    readonly Closed: "CLOSED";
    readonly Lost: "LOST";
    readonly Open: "OPEN";
    readonly UnderReview: "UNDER_REVIEW";
    readonly Won: "WON";
};
export type DisputeStatus = (typeof disputeStatus)[keyof typeof disputeStatus];
export declare const disputeType: {
    readonly Arbitration: "ARBITRATION";
    readonly Chargeback: "CHARGEBACK";
    readonly Inquiry: "INQUIRY";
    readonly PreArbitration: "PRE_ARBITRATION";
};
export type DisputeType = (typeof disputeType)[keyof typeof disputeType];
export declare const documentExtractionStatus: {
    readonly Active: "ACTIVE";
    readonly Deleted: "DELETED";
    readonly Failed: "FAILED";
};
export type DocumentExtractionStatus = (typeof documentExtractionStatus)[keyof typeof documentExtractionStatus];
export declare const documentFilingType: {
    readonly Electronic: "ELECTRONIC";
    readonly HardCopy: "HARD_COPY";
};
export type DocumentFilingType = (typeof documentFilingType)[keyof typeof documentFilingType];
export declare const documentReferenceType: {
    readonly CatalogItem: "CATALOG_ITEM";
    readonly Item: "ITEM";
    readonly Order: "ORDER";
    readonly Product: "PRODUCT";
    readonly Shipment: "SHIPMENT";
    readonly Sku: "SKU";
    readonly TrackingNumber: "TRACKING_NUMBER";
};
export type DocumentReferenceType = (typeof documentReferenceType)[keyof typeof documentReferenceType];
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
export declare const documentVerdict: {
    readonly Block: "BLOCK";
    readonly NotEvaluated: "NOT_EVALUATED";
    readonly Pass: "PASS";
};
export type DocumentVerdict = (typeof documentVerdict)[keyof typeof documentVerdict];
export declare const domesticCheckoutStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type DomesticCheckoutStatus = (typeof domesticCheckoutStatus)[keyof typeof domesticCheckoutStatus];
export declare const draftDetailEventTrigger: {
    readonly ManifestMatched: "MANIFEST_MATCHED";
    readonly Manual: "MANUAL";
    readonly PaymentCapture: "PAYMENT_CAPTURE";
    readonly TrackingNumber: "TRACKING_NUMBER";
};
export type DraftDetailEventTrigger = (typeof draftDetailEventTrigger)[keyof typeof draftDetailEventTrigger];
export declare const draftExportHsCodePreference: {
    readonly Classification: "CLASSIFICATION";
    readonly Provided: "PROVIDED";
};
export type DraftExportHsCodePreference = (typeof draftExportHsCodePreference)[keyof typeof draftExportHsCodePreference];
export declare const draftHsCodePreference: {
    readonly Classification: "CLASSIFICATION";
    readonly Provided: "PROVIDED";
};
export type DraftHsCodePreference = (typeof draftHsCodePreference)[keyof typeof draftHsCodePreference];
export declare const drugListingType: {
    readonly Finished: "FINISHED";
    readonly Unfinished: "UNFINISHED";
};
export type DrugListingType = (typeof drugListingType)[keyof typeof drugListingType];
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
export declare const effectTarget: {
    readonly ItemAttribute: "ITEM_ATTRIBUTE";
    readonly ItemProductComposition: "ITEM_PRODUCT_COMPOSITION";
};
export type EffectTarget = (typeof effectTarget)[keyof typeof effectTarget];
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
export declare const emailDomainAuthenticationStatus: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Verified: "VERIFIED";
};
export type EmailDomainAuthenticationStatus = (typeof emailDomainAuthenticationStatus)[keyof typeof emailDomainAuthenticationStatus];
export declare const emailPreferenceCategory: {
    readonly AccountAndSecurity: "ACCOUNT_AND_SECURITY";
    readonly BetaAndResearch: "BETA_AND_RESEARCH";
    readonly Compliance: "COMPLIANCE";
    readonly Education: "EDUCATION";
    readonly Marketing: "MARKETING";
    readonly OnboardingAndSuccess: "ONBOARDING_AND_SUCCESS";
    readonly OperationalAlerts: "OPERATIONAL_ALERTS";
    readonly ProductUpdates: "PRODUCT_UPDATES";
    readonly ReportsAndInsights: "REPORTS_AND_INSIGHTS";
};
export type EmailPreferenceCategory = (typeof emailPreferenceCategory)[keyof typeof emailPreferenceCategory];
export declare const emailPreferenceStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type EmailPreferenceStatus = (typeof emailPreferenceStatus)[keyof typeof emailPreferenceStatus];
export declare const emailRecordStatusFilter: {
    readonly Bounced: "BOUNCED";
    readonly Clicked: "CLICKED";
    readonly Delivered: "DELIVERED";
    readonly Opened: "OPENED";
    readonly Pending: "PENDING";
    readonly SpamReported: "SPAM_REPORTED";
    readonly Suppressed: "SUPPRESSED";
};
export declare const emailSendingStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type EmailSendingStatus = (typeof emailSendingStatus)[keyof typeof emailSendingStatus];
export declare const emailStatsInterval: {
    readonly Day: "DAY";
    readonly Week: "WEEK";
};
export type EmailStatsInterval = (typeof emailStatsInterval)[keyof typeof emailStatsInterval];
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
    readonly BrokerageBatchSubmitted: "BROKERAGE_BATCH_SUBMITTED";
    readonly CarrierAccountReconnect: "CARRIER_ACCOUNT_RECONNECT";
    readonly CatalogComplianceCollect: "CATALOG_COMPLIANCE_COLLECT";
    readonly CatalogExport: "CATALOG_EXPORT";
    readonly CheckoutCollect: "CHECKOUT_COLLECT";
    readonly ClassificationExport: "CLASSIFICATION_EXPORT";
    readonly CurrentBillingCompany: "CURRENT_BILLING_COMPANY";
    readonly Custom: "CUSTOM";
    readonly DelinquentBillingCompany: "DELINQUENT_BILLING_COMPANY";
    readonly InclusivePriceExport: "INCLUSIVE_PRICE_EXPORT";
    readonly InvoiceConfirmation: "INVOICE_CONFIRMATION";
    readonly InvoicePaymentReady: "INVOICE_PAYMENT_READY";
    readonly InvoicePaymentReminder: "INVOICE_PAYMENT_REMINDER";
    readonly InvoiceReady: "INVOICE_READY";
    readonly InvoiceReceipt: "INVOICE_RECEIPT";
    readonly ManualClassificationExport: "MANUAL_CLASSIFICATION_EXPORT";
    readonly MerchantAccountDeactivation: "MERCHANT_ACCOUNT_DEACTIVATION";
    readonly MerchantOrderConfirmation: "MERCHANT_ORDER_CONFIRMATION";
    readonly MerchantReconciliationIssues: "MERCHANT_RECONCILIATION_ISSUES";
    readonly OrderCanceled: "ORDER_CANCELED";
    readonly OrderCollectConfirmation: "ORDER_COLLECT_CONFIRMATION";
    readonly OrderCombination: "ORDER_COMBINATION";
    readonly OrderConfirmation: "ORDER_CONFIRMATION";
    readonly OrderModification: "ORDER_MODIFICATION";
    readonly OrderReceipt: "ORDER_RECEIPT";
    readonly OrderShipped: "ORDER_SHIPPED";
    readonly PostalInvoiceReady: "POSTAL_INVOICE_READY";
    readonly PrepayCollect: "PREPAY_COLLECT";
    readonly PrepayCollectMissingTracking: "PREPAY_COLLECT_MISSING_TRACKING";
    readonly ReportExport: "REPORT_EXPORT";
    readonly ShipmentInfoCollect: "SHIPMENT_INFO_COLLECT";
    readonly Unknown: "UNKNOWN";
};
export type EmailTemplateType = (typeof emailTemplateType)[keyof typeof emailTemplateType];
export declare const endOfDayBehavior: {
    readonly Exempt: "EXEMPT";
    readonly Required: "REQUIRED";
};
export type EndOfDayBehavior = (typeof endOfDayBehavior)[keyof typeof endOfDayBehavior];
export declare const entityType: {
    readonly AppearanceSetting: "APPEARANCE_SETTING";
    readonly Carrier: "CARRIER";
    readonly CarrierAccount: "CARRIER_ACCOUNT";
    readonly CheckoutSetting: "CHECKOUT_SETTING";
    readonly CountryStateTaxRate: "COUNTRY_STATE_TAX_RATE";
    readonly Deminimis: "DEMINIMIS";
    readonly ExternalFulfillmentSetting: "EXTERNAL_FULFILLMENT_SETTING";
    readonly Fee: "FEE";
    readonly FeeRule: "FEE_RULE";
    readonly FulfillmentCenter: "FULFILLMENT_CENTER";
    readonly HsCode: "HS_CODE";
    readonly ItemSetting: "ITEM_SETTING";
    readonly LandedCostCarrier: "LANDED_COST_CARRIER";
    readonly LandedCostServiceLevel: "LANDED_COST_SERVICE_LEVEL";
    readonly LandedCostServiceLevelCountry: "LANDED_COST_SERVICE_LEVEL_COUNTRY";
    readonly LandedCostSetting: "LANDED_COST_SETTING";
    readonly Levy: "LEVY";
    readonly RateChart: "RATE_CHART";
    readonly Rule: "RULE";
    readonly ServiceLevel: "SERVICE_LEVEL";
    readonly ServiceLevelCountry: "SERVICE_LEVEL_COUNTRY";
    readonly ShippingProfile: "SHIPPING_PROFILE";
    readonly ShippingZone: "SHIPPING_ZONE";
    readonly StateSalesTax: "STATE_SALES_TAX";
    readonly StoreFeeRule: "STORE_FEE_RULE";
    readonly Unknown: "UNKNOWN";
};
export type EntityType = (typeof entityType)[keyof typeof entityType];
export declare const entryStatus: {
    readonly Accepted: "ACCEPTED";
    readonly Archived: "ARCHIVED";
    readonly Cancelled: "CANCELLED";
    readonly Draft: "DRAFT";
    readonly Error: "ERROR";
    readonly Filed: "FILED";
    readonly Rejected: "REJECTED";
    readonly Submitted: "SUBMITTED";
};
export type EntryStatus = (typeof entryStatus)[keyof typeof entryStatus];
export declare const entryType: {
    readonly Imdw: "IMDW";
    readonly Type_11: "TYPE_11";
    readonly Type_13: "TYPE_13";
};
export type EntryType = (typeof entryType)[keyof typeof entryType];
export declare const entryTypeExclusionCategory: {
    readonly Alcohol: "ALCOHOL";
    readonly AntiDumping: "ANTI_DUMPING";
    readonly Countervailing: "COUNTERVAILING";
    readonly OrderValueLimit: "ORDER_VALUE_LIMIT";
    readonly Other: "OTHER";
    readonly Quota: "QUOTA";
    readonly Tobacco: "TOBACCO";
};
export type EntryTypeExclusionCategory = (typeof entryTypeExclusionCategory)[keyof typeof entryTypeExclusionCategory];
export declare const entryTypeExclusionConditionType: {
    readonly ItemHsCountry: "ITEM_HS_COUNTRY";
    readonly OrderValue: "ORDER_VALUE";
};
export type EntryTypeExclusionConditionType = (typeof entryTypeExclusionConditionType)[keyof typeof entryTypeExclusionConditionType];
export declare const epaCertification: {
    readonly Negative: "NEGATIVE";
    readonly Positive: "POSITIVE";
};
export type EpaCertification = (typeof epaCertification)[keyof typeof epaCertification];
export declare const epaDisclaimCode: {
    readonly A: "A";
    readonly B: "B";
    readonly C: "C";
    readonly D: "D";
};
export type EpaDisclaimCode = (typeof epaDisclaimCode)[keyof typeof epaDisclaimCode];
export declare const epaFormType: {
    readonly Form_3520_1: "FORM_3520_1";
    readonly Form_3520_21: "FORM_3520_21";
};
export type EpaFormType = (typeof epaFormType)[keyof typeof epaFormType];
export declare const epaProgram: {
    readonly Hfc: "HFC";
    readonly Ods: "ODS";
    readonly Ps1: "PS1";
    readonly Ps2: "PS2";
    readonly Ps3: "PS3";
    readonly Ts1: "TS1";
    readonly Vne: "VNE";
};
export type EpaProgram = (typeof epaProgram)[keyof typeof epaProgram];
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
export declare const exchangeRateAmountType: {
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly Fee: "FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
    readonly Tax: "TAX";
};
export type ExchangeRateAmountType = (typeof exchangeRateAmountType)[keyof typeof exchangeRateAmountType];
export declare const exchangeRateSource: {
    readonly Cbp: "CBP";
    readonly Ecb: "ECB";
    readonly EuCustomsCzk: "EU_CUSTOMS_CZK";
    readonly EuCustomsDkk: "EU_CUSTOMS_DKK";
    readonly EuCustomsHuf: "EU_CUSTOMS_HUF";
    readonly EuCustomsPln: "EU_CUSTOMS_PLN";
    readonly EuCustomsRon: "EU_CUSTOMS_RON";
    readonly EuCustomsSek: "EU_CUSTOMS_SEK";
    readonly Fixer: "FIXER";
    readonly Static: "STATIC";
};
export type ExchangeRateSource = (typeof exchangeRateSource)[keyof typeof exchangeRateSource];
export declare const exchangeRateTargetType: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly MerchantBase: "MERCHANT_BASE";
    readonly MerchantProvided: "MERCHANT_PROVIDED";
    readonly MerchantSettled: "MERCHANT_SETTLED";
    readonly ShopperPresented: "SHOPPER_PRESENTED";
    readonly ZonosBase: "ZONOS_BASE";
};
export type ExchangeRateTargetType = (typeof exchangeRateTargetType)[keyof typeof exchangeRateTargetType];
export declare const exchangeRateType: {
    readonly Guaranteed: "GUARANTEED";
    readonly MidMarket: "MID_MARKET";
    readonly ProcessorQuoted: "PROCESSOR_QUOTED";
    readonly Settled: "SETTLED";
};
export type ExchangeRateType = (typeof exchangeRateType)[keyof typeof exchangeRateType];
export declare const expireCartType: {
    readonly Expired: "EXPIRED";
    readonly NotExpired: "NOT_EXPIRED";
};
export type ExpireCartType = (typeof expireCartType)[keyof typeof expireCartType];
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
export declare const fccEquipmentAuthorizationInferenceStatus: {
    readonly ComponentsMatched: "COMPONENTS_MATCHED";
    readonly InsufficientInformation: "INSUFFICIENT_INFORMATION";
    readonly Matched: "MATCHED";
    readonly NoMatch: "NO_MATCH";
    readonly NotRegulated: "NOT_REGULATED";
};
export type FccEquipmentAuthorizationInferenceStatus = (typeof fccEquipmentAuthorizationInferenceStatus)[keyof typeof fccEquipmentAuthorizationInferenceStatus];
export declare const fccEquipmentAuthorizationRelationship: {
    readonly ComponentOfProduct: "COMPONENT_OF_PRODUCT";
    readonly DifferentProduct: "DIFFERENT_PRODUCT";
    readonly RelatedProduct: "RELATED_PRODUCT";
    readonly SameProduct: "SAME_PRODUCT";
    readonly Unknown: "UNKNOWN";
};
export type FccEquipmentAuthorizationRelationship = (typeof fccEquipmentAuthorizationRelationship)[keyof typeof fccEquipmentAuthorizationRelationship];
export declare const fccEquipmentAuthorizationValidationVerdict: {
    readonly DefinitelyNotSame: "DEFINITELY_NOT_SAME";
    readonly DefinitelySame: "DEFINITELY_SAME";
    readonly Indeterminate: "INDETERMINATE";
    readonly LikelySame: "LIKELY_SAME";
    readonly UnlikelySame: "UNLIKELY_SAME";
};
export type FccEquipmentAuthorizationValidationVerdict = (typeof fccEquipmentAuthorizationValidationVerdict)[keyof typeof fccEquipmentAuthorizationValidationVerdict];
export declare const fccIdStatus: {
    readonly Malformed: "MALFORMED";
    readonly NotOnRecord: "NOT_ON_RECORD";
    readonly OnRecord: "ON_RECORD";
    readonly UnknownGrantee: "UNKNOWN_GRANTEE";
};
export type FccIdStatus = (typeof fccIdStatus)[keyof typeof fccIdStatus];
export declare const fccRadioType: {
    readonly Cellular: "CELLULAR";
    readonly Nfc: "NFC";
    readonly Other: "OTHER";
    readonly WifiBluetooth: "WIFI_BLUETOOTH";
};
export type FccRadioType = (typeof fccRadioType)[keyof typeof fccRadioType];
export declare const fccReferenceDataImportStatus: {
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Running: "RUNNING";
    readonly Succeeded: "SUCCEEDED";
};
export type FccReferenceDataImportStatus = (typeof fccReferenceDataImportStatus)[keyof typeof fccReferenceDataImportStatus];
export declare const fdaAffirmationCategory: {
    readonly Entity: "ENTITY";
    readonly Product: "PRODUCT";
    readonly Transport: "TRANSPORT";
};
export type FdaAffirmationCategory = (typeof fdaAffirmationCategory)[keyof typeof fdaAffirmationCategory];
export declare const fdaAffirmationConditionField: {
    readonly CountryOfOrigin: "COUNTRY_OF_ORIGIN";
    readonly EntityRole: "ENTITY_ROLE";
    readonly ImpactResistantLens: "IMPACT_RESISTANT_LENS";
    readonly IntendedUseCode: "INTENDED_USE_CODE";
    readonly ModeOfTransport: "MODE_OF_TRANSPORT";
    readonly ProcessingCode: "PROCESSING_CODE";
    readonly ProductCodeIndustry: "PRODUCT_CODE_INDUSTRY";
    readonly ProductCodePic: "PRODUCT_CODE_PIC";
    readonly ProductCodeSubclass: "PRODUCT_CODE_SUBCLASS";
    readonly Program: "PROGRAM";
    readonly RadiationStandard: "RADIATION_STANDARD";
};
export type FdaAffirmationConditionField = (typeof fdaAffirmationConditionField)[keyof typeof fdaAffirmationConditionField];
export declare const fdaCollapseMode: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type FdaCollapseMode = (typeof fdaCollapseMode)[keyof typeof fdaCollapseMode];
export declare const fdaProductCodeFragmentType: {
    readonly Class: "CLASS";
    readonly Industry: "INDUSTRY";
    readonly Product: "PRODUCT";
    readonly ProductIndicatorCode: "PRODUCT_INDICATOR_CODE";
    readonly Subclass: "SUBCLASS";
};
export type FdaProductCodeFragmentType = (typeof fdaProductCodeFragmentType)[keyof typeof fdaProductCodeFragmentType];
export declare const fdaProductCodeLevel: {
    readonly Class: "CLASS";
    readonly Pic: "PIC";
    readonly Subclass: "SUBCLASS";
};
export type FdaProductCodeLevel = (typeof fdaProductCodeLevel)[keyof typeof fdaProductCodeLevel];
export declare const fdaRadiationStandardStatus: {
    readonly Applicable: "APPLICABLE";
    readonly NonApplicable: "NON_APPLICABLE";
    readonly Unknown: "UNKNOWN";
};
export type FdaRadiationStandardStatus = (typeof fdaRadiationStandardStatus)[keyof typeof fdaRadiationStandardStatus];
export declare const fdaTissueRegistrationStatus: {
    readonly Inactive: "INACTIVE";
    readonly PreRegistered: "PRE_REGISTERED";
    readonly Registered: "REGISTERED";
};
export type FdaTissueRegistrationStatus = (typeof fdaTissueRegistrationStatus)[keyof typeof fdaTissueRegistrationStatus];
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
export declare const frontConversationStatus: {
    readonly Archived: "ARCHIVED";
    readonly Assigned: "ASSIGNED";
    readonly Trashed: "TRASHED";
    readonly Unassigned: "UNASSIGNED";
};
export type FrontConversationStatus = (typeof frontConversationStatus)[keyof typeof frontConversationStatus];
export declare const fulfillmentCenterType: {
    readonly ConsolidationCenter: "CONSOLIDATION_CENTER";
    readonly Primary: "PRIMARY";
    readonly Standard: "STANDARD";
};
export type FulfillmentCenterType = (typeof fulfillmentCenterType)[keyof typeof fulfillmentCenterType];
export declare const fwsCitesAppendix: {
    readonly I: "I";
    readonly Ii: "II";
    readonly Iii: "III";
    readonly None: "NONE";
};
export type FwsCitesAppendix = (typeof fwsCitesAppendix)[keyof typeof fwsCitesAppendix];
export declare const fwsDisclaimCode: {
    readonly Exempt: "EXEMPT";
    readonly NoWildlife: "NO_WILDLIFE";
};
export type FwsDisclaimCode = (typeof fwsDisclaimCode)[keyof typeof fwsDisclaimCode];
export declare const fwsItemType: {
    readonly Component: "COMPONENT";
    readonly Product: "PRODUCT";
};
export type FwsItemType = (typeof fwsItemType)[keyof typeof fwsItemType];
export declare const fwsPurposeCode: {
    readonly B: "B";
    readonly E: "E";
    readonly G: "G";
    readonly H: "H";
    readonly L: "L";
    readonly M: "M";
    readonly N: "N";
    readonly P: "P";
    readonly Q: "Q";
    readonly S: "S";
    readonly T: "T";
    readonly Z: "Z";
};
export type FwsPurposeCode = (typeof fwsPurposeCode)[keyof typeof fwsPurposeCode];
export declare const fwsSourceCode: {
    readonly A: "A";
    readonly C: "C";
    readonly D: "D";
    readonly F: "F";
    readonly I: "I";
    readonly O: "O";
    readonly R: "R";
    readonly U: "U";
    readonly W: "W";
    readonly X: "X";
};
export type FwsSourceCode = (typeof fwsSourceCode)[keyof typeof fwsSourceCode];
export declare const fwsUnitOfMeasure: {
    readonly Cm: "CM";
    readonly G: "G";
    readonly Kg: "KG";
    readonly L: "L";
    readonly M: "M";
    readonly M2: "M2";
    readonly M3: "M3";
    readonly Ml: "ML";
    readonly No: "NO";
};
export type FwsUnitOfMeasure = (typeof fwsUnitOfMeasure)[keyof typeof fwsUnitOfMeasure];
export declare const generalAdjustmentRecordCreateType: {
    readonly ConnectAccountAdjustment: "CONNECT_ACCOUNT_ADJUSTMENT";
    readonly InvoiceLineRecord: "INVOICE_LINE_RECORD";
};
export type GeneralAdjustmentRecordCreateType = (typeof generalAdjustmentRecordCreateType)[keyof typeof generalAdjustmentRecordCreateType];
export declare const generativeRole: {
    readonly Assistant: "ASSISTANT";
    readonly System: "SYSTEM";
    readonly User: "USER";
};
export type GenerativeRole = (typeof generativeRole)[keyof typeof generativeRole];
export declare const greenLightCheck: {
    readonly CountryOfOriginValidation: "COUNTRY_OF_ORIGIN_VALIDATION";
    readonly CustomsDescriptionValidation: "CUSTOMS_DESCRIPTION_VALIDATION";
    readonly DeniedPartyScreening: "DENIED_PARTY_SCREENING";
    readonly HsCodeCoherence: "HS_CODE_COHERENCE";
    readonly RegulationCheck: "REGULATION_CHECK";
    readonly RestrictionCheck: "RESTRICTION_CHECK";
    readonly ValueValidation: "VALUE_VALIDATION";
};
export type GreenLightCheck = (typeof greenLightCheck)[keyof typeof greenLightCheck];
export declare const greenLightCustomsDescriptionStatus: {
    readonly Incomplete: "INCOMPLETE";
    readonly Ready: "READY";
    readonly ReadyToSubheading: "READY_TO_SUBHEADING";
    readonly Unrecognizable: "UNRECOGNIZABLE";
};
export type GreenLightCustomsDescriptionStatus = (typeof greenLightCustomsDescriptionStatus)[keyof typeof greenLightCustomsDescriptionStatus];
export declare const greenLightRestrictionCategory: {
    readonly Cost: "COST";
    readonly DangerousGoods: "DANGEROUS_GOODS";
    readonly DocumentationRequired: "DOCUMENTATION_REQUIRED";
    readonly Information: "INFORMATION";
    readonly PermitRequired: "PERMIT_REQUIRED";
    readonly ProductCompliance: "PRODUCT_COMPLIANCE";
    readonly Prohibited: "PROHIBITED";
    readonly Quota: "QUOTA";
};
export type GreenLightRestrictionCategory = (typeof greenLightRestrictionCategory)[keyof typeof greenLightRestrictionCategory];
export declare const helloCountryDisplayBehavior: {
    readonly All: "ALL";
    readonly OnlyShippable: "ONLY_SHIPPABLE";
};
export type HelloCountryDisplayBehavior = (typeof helloCountryDisplayBehavior)[keyof typeof helloCountryDisplayBehavior];
export declare const helloCountryOverrideBehavior: {
    readonly Session: "SESSION";
    readonly UrlParam: "URL_PARAM";
};
export type HelloCountryOverrideBehavior = (typeof helloCountryOverrideBehavior)[keyof typeof helloCountryOverrideBehavior];
export declare const helloCurrencyBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type HelloCurrencyBehavior = (typeof helloCurrencyBehavior)[keyof typeof helloCurrencyBehavior];
export declare const helloDesktopLocation: {
    readonly BottomLeft: "BOTTOM_LEFT";
    readonly BottomRight: "BOTTOM_RIGHT";
    readonly TopLeft: "TOP_LEFT";
    readonly TopRight: "TOP_RIGHT";
};
export type HelloDesktopLocation = (typeof helloDesktopLocation)[keyof typeof helloDesktopLocation];
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
export declare const hsCodeTrustLevel: {
    readonly Certified: "CERTIFIED";
    readonly Elevated: "ELEVATED";
    readonly Standard: "STANDARD";
    readonly Verified: "VERIFIED";
};
export type HsCodeTrustLevel = (typeof hsCodeTrustLevel)[keyof typeof hsCodeTrustLevel];
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
export declare const inclusivePriceCheckoutStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type InclusivePriceCheckoutStatus = (typeof inclusivePriceCheckoutStatus)[keyof typeof inclusivePriceCheckoutStatus];
export declare const inclusivePriceConfigurationStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type InclusivePriceConfigurationStatus = (typeof inclusivePriceConfigurationStatus)[keyof typeof inclusivePriceConfigurationStatus];
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
export declare const inferenceStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type InferenceStatus = (typeof inferenceStatus)[keyof typeof inferenceStatus];
export declare const integrationSource: {
    readonly Header: "HEADER";
    readonly Manual: "MANUAL";
    readonly UrlInferred: "URL_INFERRED";
};
export type IntegrationSource = (typeof integrationSource)[keyof typeof integrationSource];
export declare const integrationStatus: {
    readonly Active: "ACTIVE";
    readonly Error: "ERROR";
    readonly Inactive: "INACTIVE";
};
export type IntegrationStatus = (typeof integrationStatus)[keyof typeof integrationStatus];
export declare const intendedAudience: {
    readonly Adult: "ADULT";
    readonly Child: "CHILD";
};
export type IntendedAudience = (typeof intendedAudience)[keyof typeof intendedAudience];
export declare const intendedUseType: {
    readonly Commercial: "COMMERCIAL";
    readonly Consumer: "CONSUMER";
    readonly Personal: "PERSONAL";
    readonly Research: "RESEARCH";
};
export type IntendedUseType = (typeof intendedUseType)[keyof typeof intendedUseType];
export declare const invoiceAmountSubtotalType: {
    readonly Adjustment: "ADJUSTMENT";
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly Fee: "FEE";
    readonly Item: "ITEM";
    readonly Other: "OTHER";
    readonly SecurityDeposit: "SECURITY_DEPOSIT";
    readonly SetupFee: "SETUP_FEE";
    readonly Shipping: "SHIPPING";
    readonly StoreCredit: "STORE_CREDIT";
    readonly Subscription: "SUBSCRIPTION";
    readonly Tax: "TAX";
    readonly TaxDutyCarrierCountry: "TAX_DUTY_CARRIER_COUNTRY";
    readonly ZonosFees: "ZONOS_FEES";
};
export type InvoiceAmountSubtotalType = (typeof invoiceAmountSubtotalType)[keyof typeof invoiceAmountSubtotalType];
export declare const invoiceCarrier: {
    readonly Dhl: "DHL";
    readonly Fedex: "FEDEX";
    readonly Ups: "UPS";
    readonly Zonos: "ZONOS";
};
export type InvoiceCarrier = (typeof invoiceCarrier)[keyof typeof invoiceCarrier];
export declare const invoiceCollectionMethod: {
    readonly AirwallexChargeAutomatically: "AIRWALLEX_CHARGE_AUTOMATICALLY";
    readonly AirwallexInvoice: "AIRWALLEX_INVOICE";
    readonly AirwallexPushPayment: "AIRWALLEX_PUSH_PAYMENT";
    readonly ChargeAutomatically: "CHARGE_AUTOMATICALLY";
    readonly CheckoutCollect: "CHECKOUT_COLLECT";
    readonly CreateOutstanding: "CREATE_OUTSTANDING";
    readonly SendInvoice: "SEND_INVOICE";
    readonly StripeBillingDraftInvoice: "STRIPE_BILLING_DRAFT_INVOICE";
    readonly StripeBillingInvoice: "STRIPE_BILLING_INVOICE";
    readonly StripeInvoiceChargeAutomatically: "STRIPE_INVOICE_CHARGE_AUTOMATICALLY";
};
export type InvoiceCollectionMethod = (typeof invoiceCollectionMethod)[keyof typeof invoiceCollectionMethod];
export declare const invoiceDayOfWeek: {
    readonly Friday: "FRIDAY";
    readonly Monday: "MONDAY";
    readonly Saturday: "SATURDAY";
    readonly Sunday: "SUNDAY";
    readonly Thursday: "THURSDAY";
    readonly Tuesday: "TUESDAY";
    readonly Wednesday: "WEDNESDAY";
};
export type InvoiceDayOfWeek = (typeof invoiceDayOfWeek)[keyof typeof invoiceDayOfWeek];
export declare const invoiceDetailCategoryInputType: {
    readonly AdditionalTariffLines: "ADDITIONAL_TARIFF_LINES";
    readonly Adjustment: "ADJUSTMENT";
    readonly Advancement: "ADVANCEMENT";
    readonly AirlineRecoveryFee: "AIRLINE_RECOVERY_FEE";
    readonly AirwallexTransferFee: "AIRWALLEX_TRANSFER_FEE";
    readonly AnnualPlatformFee: "ANNUAL_PLATFORM_FEE";
    readonly ApiAnnualFlat: "API_ANNUAL_FLAT";
    readonly ApiAnnualMonthlyFlat: "API_ANNUAL_MONTHLY_FLAT";
    readonly ApiCrossDocking: "API_CROSS_DOCKING";
    readonly ApiGuaranteeOrder: "API_GUARANTEE_ORDER";
    readonly ApiGuaranteeOrderLegacy: "API_GUARANTEE_ORDER_LEGACY";
    readonly ApiGuaranteePercent: "API_GUARANTEE_PERCENT";
    readonly ApiGuaranteePercentRevenueShare: "API_GUARANTEE_PERCENT_REVENUE_SHARE";
    readonly ApiMonthlyFlat: "API_MONTHLY_FLAT";
    readonly ApiTransactionPercent: "API_TRANSACTION_PERCENT";
    readonly ApiUsage: "API_USAGE";
    readonly AsendiaDisbursementFee: "ASENDIA_DISBURSEMENT_FEE";
    readonly AsendiaRemittanceFee: "ASENDIA_REMITTANCE_FEE";
    readonly AustraliaBondFee: "AUSTRALIA_BOND_FEE";
    readonly AustraliaDisbursement: "AUSTRALIA_DISBURSEMENT";
    readonly AustraliaDisbursementFee: "AUSTRALIA_DISBURSEMENT_FEE";
    readonly AustraliaRemittanceFee: "AUSTRALIA_REMITTANCE_FEE";
    readonly AustriaRemittanceFee: "AUSTRIA_REMITTANCE_FEE";
    readonly BelizeDisbursementFee: "BELIZE_DISBURSEMENT_FEE";
    readonly BelizeGuaranteeOrder: "BELIZE_GUARANTEE_ORDER";
    readonly BelizeRemittanceFee: "BELIZE_REMITTANCE_FEE";
    readonly BermudaBondFee: "BERMUDA_BOND_FEE";
    readonly BermudaDisbursementFee: "BERMUDA_DISBURSEMENT_FEE";
    readonly BermudaPrepayFee: "BERMUDA_PREPAY_FEE";
    readonly BermudaPrepayPercent: "BERMUDA_PREPAY_PERCENT";
    readonly BermudaPrepayPhotoDiscount: "BERMUDA_PREPAY_PHOTO_DISCOUNT";
    readonly BermudaRemittanceFee: "BERMUDA_REMITTANCE_FEE";
    readonly BhutanDisbursementFee: "BHUTAN_DISBURSEMENT_FEE";
    readonly BhutanGuaranteeOrder: "BHUTAN_GUARANTEE_ORDER";
    readonly BhutanRemittanceFee: "BHUTAN_REMITTANCE_FEE";
    readonly BigcommerceAccessFeePercRevenueShare: "BIGCOMMERCE_ACCESS_FEE_PERC_REVENUE_SHARE";
    readonly BigcommerceGuaranteeOrder: "BIGCOMMERCE_GUARANTEE_ORDER";
    readonly BpostDisbursementFee: "BPOST_DISBURSEMENT_FEE";
    readonly BpostRemittanceFee: "BPOST_REMITTANCE_FEE";
    readonly BrokerageFee: "BROKERAGE_FEE";
    readonly BugCredit: "BUG_CREDIT";
    readonly CambodiaDisbursementFee: "CAMBODIA_DISBURSEMENT_FEE";
    readonly CambodiaRemittanceFee: "CAMBODIA_REMITTANCE_FEE";
    readonly CanadaBondFee: "CANADA_BOND_FEE";
    readonly CanadaDisbursementFee: "CANADA_DISBURSEMENT_FEE";
    readonly CanadaPrepayFee: "CANADA_PREPAY_FEE";
    readonly CanadaPrepayPercent: "CANADA_PREPAY_PERCENT";
    readonly CanadaPrepayPhotoDiscount: "CANADA_PREPAY_PHOTO_DISCOUNT";
    readonly CanadaRemittanceAmountRevenueShare: "CANADA_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly CanadaRemittanceFee: "CANADA_REMITTANCE_FEE";
    readonly CaymanIslandsDisbursementFee: "CAYMAN_ISLANDS_DISBURSEMENT_FEE";
    readonly CaymanIslandsRemittanceFee: "CAYMAN_ISLANDS_REMITTANCE_FEE";
    readonly CbpCentralizedExaminationStationFee: "CBP_CENTRALIZED_EXAMINATION_STATION_FEE";
    readonly CbpHoldManagementFee: "CBP_HOLD_MANAGEMENT_FEE";
    readonly CbpReassessment: "CBP_REASSESSMENT";
    readonly CbpTradeSolutionPilot: "CBP_TRADE_SOLUTION_PILOT";
    readonly Chargeback: "CHARGEBACK";
    readonly ChargebackFee: "CHARGEBACK_FEE";
    readonly CheckoutCrossDocking: "CHECKOUT_CROSS_DOCKING";
    readonly CheckoutFraudCoverage: "CHECKOUT_FRAUD_COVERAGE";
    readonly CheckoutGuaranteeOrder: "CHECKOUT_GUARANTEE_ORDER";
    readonly CheckoutGuaranteeOrderLegacy: "CHECKOUT_GUARANTEE_ORDER_LEGACY";
    readonly CheckoutGuaranteePercent: "CHECKOUT_GUARANTEE_PERCENT";
    readonly CheckoutItemDiscountIglobal: "CHECKOUT_ITEM_DISCOUNT_IGLOBAL";
    readonly CheckoutMerchantFeeAdditionalInternational: "CHECKOUT_MERCHANT_FEE_ADDITIONAL_INTERNATIONAL";
    readonly CheckoutMerchantFeeAmount: "CHECKOUT_MERCHANT_FEE_AMOUNT";
    readonly CheckoutMerchantFeePaypalPercent: "CHECKOUT_MERCHANT_FEE_PAYPAL_PERCENT";
    readonly CheckoutMerchantFeePercent: "CHECKOUT_MERCHANT_FEE_PERCENT";
    readonly CheckoutMerchantProcessing: "CHECKOUT_MERCHANT_PROCESSING";
    readonly CheckoutShippingIglobal: "CHECKOUT_SHIPPING_IGLOBAL";
    readonly CheckoutSubscriptionAnnual: "CHECKOUT_SUBSCRIPTION_ANNUAL";
    readonly CheckoutSubscriptionMonthly: "CHECKOUT_SUBSCRIPTION_MONTHLY";
    readonly CheckoutTransactionOrderLegacy: "CHECKOUT_TRANSACTION_ORDER_LEGACY";
    readonly CheckoutTransactionPercent: "CHECKOUT_TRANSACTION_PERCENT";
    readonly ClassifyApiAnnualFlat: "CLASSIFY_API_ANNUAL_FLAT";
    readonly ClassifyApiAnnualMonthlyFlat: "CLASSIFY_API_ANNUAL_MONTHLY_FLAT";
    readonly ClassifyApiMonthlyFlat: "CLASSIFY_API_MONTHLY_FLAT";
    readonly ClassifyApiUsage: "CLASSIFY_API_USAGE";
    readonly Cod: "COD";
    readonly CorreosBondFee: "CORREOS_BOND_FEE";
    readonly CorreosDisbursementFee: "CORREOS_DISBURSEMENT_FEE";
    readonly CorreosRemittanceFee: "CORREOS_REMITTANCE_FEE";
    readonly Country: "COUNTRY";
    readonly CountryOfOrigin: "COUNTRY_OF_ORIGIN";
    readonly Coupon: "COUPON";
    readonly Ctp: "CTP";
    readonly CtpLoad: "CTP_LOAD";
    readonly CttCorreiosDisbursementFee: "CTT_CORREIOS_DISBURSEMENT_FEE";
    readonly CttCorreiosRemittanceAmountRevenueShare: "CTT_CORREIOS_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly CttExpressoDisbursementFee: "CTT_EXPRESSO_DISBURSEMENT_FEE";
    readonly CttExpressoRemittanceFee: "CTT_EXPRESSO_REMITTANCE_FEE";
    readonly CuracaoBondFee: "CURACAO_BOND_FEE";
    readonly CuracaoDisbursementFee: "CURACAO_DISBURSEMENT_FEE";
    readonly CuracaoRemittanceAmountRevenueShare: "CURACAO_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly CuracaoRemittanceFee: "CURACAO_REMITTANCE_FEE";
    readonly CurrencyConversionFee: "CURRENCY_CONVERSION_FEE";
    readonly CypressPrepayPercent: "CYPRESS_PREPAY_PERCENT";
    readonly CypressPrepayPhotoDiscount: "CYPRESS_PREPAY_PHOTO_DISCOUNT";
    readonly CyprusBondFee: "CYPRUS_BOND_FEE";
    readonly CyprusDisbursementFee: "CYPRUS_DISBURSEMENT_FEE";
    readonly CyprusPrepayFee: "CYPRUS_PREPAY_FEE";
    readonly CyprusPrepayPercent: "CYPRUS_PREPAY_PERCENT";
    readonly CyprusPrepayPhotoDiscount: "CYPRUS_PREPAY_PHOTO_DISCOUNT";
    readonly CyprusRemittanceFee: "CYPRUS_REMITTANCE_FEE";
    readonly CzechDisbursementFee: "CZECH_DISBURSEMENT_FEE";
    readonly CzechGuaranteeOrder: "CZECH_GUARANTEE_ORDER";
    readonly CzechRemittanceFee: "CZECH_REMITTANCE_FEE";
    readonly DashboardLite: "DASHBOARD_LITE";
    readonly DdpServiceFee: "DDP_SERVICE_FEE";
    readonly DdpServiceFeeBuffer: "DDP_SERVICE_FEE_BUFFER";
    readonly DefermentFee: "DEFERMENT_FEE";
    readonly DeutscheDisbursementFee: "DEUTSCHE_DISBURSEMENT_FEE";
    readonly DeutscheRemittanceFee: "DEUTSCHE_REMITTANCE_FEE";
    readonly Discount: "DISCOUNT";
    readonly DuplicatePayment: "DUPLICATE_PAYMENT";
    readonly Duty: "DUTY";
    readonly DutyBrokerageUs: "DUTY_BROKERAGE_US";
    readonly DutyFx: "DUTY_FX";
    readonly DutyRemittance: "DUTY_REMITTANCE";
    readonly DutyRemittanceAt: "DUTY_REMITTANCE_AT";
    readonly DutyRemittanceAx: "DUTY_REMITTANCE_AX";
    readonly DutyRemittanceBe: "DUTY_REMITTANCE_BE";
    readonly DutyRemittanceBg: "DUTY_REMITTANCE_BG";
    readonly DutyRemittanceCy: "DUTY_REMITTANCE_CY";
    readonly DutyRemittanceCz: "DUTY_REMITTANCE_CZ";
    readonly DutyRemittanceDe: "DUTY_REMITTANCE_DE";
    readonly DutyRemittanceDk: "DUTY_REMITTANCE_DK";
    readonly DutyRemittanceEe: "DUTY_REMITTANCE_EE";
    readonly DutyRemittanceEs: "DUTY_REMITTANCE_ES";
    readonly DutyRemittanceFi: "DUTY_REMITTANCE_FI";
    readonly DutyRemittanceFr: "DUTY_REMITTANCE_FR";
    readonly DutyRemittanceGb: "DUTY_REMITTANCE_GB";
    readonly DutyRemittanceGf: "DUTY_REMITTANCE_GF";
    readonly DutyRemittanceGp: "DUTY_REMITTANCE_GP";
    readonly DutyRemittanceGr: "DUTY_REMITTANCE_GR";
    readonly DutyRemittanceHr: "DUTY_REMITTANCE_HR";
    readonly DutyRemittanceHu: "DUTY_REMITTANCE_HU";
    readonly DutyRemittanceIc: "DUTY_REMITTANCE_IC";
    readonly DutyRemittanceIe: "DUTY_REMITTANCE_IE";
    readonly DutyRemittanceIt: "DUTY_REMITTANCE_IT";
    readonly DutyRemittanceLt: "DUTY_REMITTANCE_LT";
    readonly DutyRemittanceLu: "DUTY_REMITTANCE_LU";
    readonly DutyRemittanceLv: "DUTY_REMITTANCE_LV";
    readonly DutyRemittanceMc: "DUTY_REMITTANCE_MC";
    readonly DutyRemittanceMq: "DUTY_REMITTANCE_MQ";
    readonly DutyRemittanceMt: "DUTY_REMITTANCE_MT";
    readonly DutyRemittanceNl: "DUTY_REMITTANCE_NL";
    readonly DutyRemittancePl: "DUTY_REMITTANCE_PL";
    readonly DutyRemittancePt: "DUTY_REMITTANCE_PT";
    readonly DutyRemittanceRe: "DUTY_REMITTANCE_RE";
    readonly DutyRemittanceRo: "DUTY_REMITTANCE_RO";
    readonly DutyRemittanceSe: "DUTY_REMITTANCE_SE";
    readonly DutyRemittanceSi: "DUTY_REMITTANCE_SI";
    readonly DutyRemittanceSk: "DUTY_REMITTANCE_SK";
    readonly DutyRemittanceUs: "DUTY_REMITTANCE_US";
    readonly DutyRemittanceYt: "DUTY_REMITTANCE_YT";
    readonly DutyTaxBuffer: "DUTY_TAX_BUFFER";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly EmiratesDisbursementFee: "EMIRATES_DISBURSEMENT_FEE";
    readonly EmiratesRemittanceFee: "EMIRATES_REMITTANCE_FEE";
    readonly EtsyGuaranteeOrder: "ETSY_GUARANTEE_ORDER";
    readonly EtsyGuaranteePercent: "ETSY_GUARANTEE_PERCENT";
    readonly EtsyMerchantFeePercent: "ETSY_MERCHANT_FEE_PERCENT";
    readonly ExistingCreditNotes: "EXISTING_CREDIT_NOTES";
    readonly ForeignExchange: "FOREIGN_EXCHANGE";
    readonly ForeignExchangeRevenue: "FOREIGN_EXCHANGE_REVENUE";
    readonly ForeignTaxFilingFee: "FOREIGN_TAX_FILING_FEE";
    readonly FranceCustomsTax: "FRANCE_CUSTOMS_TAX";
    readonly FreeTrial: "FREE_TRIAL";
    readonly GeneralAdjustment: "GENERAL_ADJUSTMENT";
    readonly GhanaRemittanceFee: "GHANA_REMITTANCE_FEE";
    readonly GuaranteeOrder: "GUARANTEE_ORDER";
    readonly GuaranteeOrderDutyExempt: "GUARANTEE_ORDER_DUTY_EXEMPT";
    readonly GuaranteePercent: "GUARANTEE_PERCENT";
    readonly HaypostDisbursementFee: "HAYPOST_DISBURSEMENT_FEE";
    readonly HaypostRemittanceFee: "HAYPOST_REMITTANCE_FEE";
    readonly IglobalLandedCostGuaranteeBuffer: "IGLOBAL_LANDED_COST_GUARANTEE_BUFFER";
    readonly ImportServiceCharge: "IMPORT_SERVICE_CHARGE";
    readonly InclusivePricing: "INCLUSIVE_PRICING";
    readonly InvoiceForeignExchange: "INVOICE_FOREIGN_EXCHANGE";
    readonly IsraelDisbursementFee: "ISRAEL_DISBURSEMENT_FEE";
    readonly IsraelRemittanceFee: "ISRAEL_REMITTANCE_FEE";
    readonly ItalianeRemittanceFee: "ITALIANE_REMITTANCE_FEE";
    readonly Item: "ITEM";
    readonly JapanDisbursementFee: "JAPAN_DISBURSEMENT_FEE";
    readonly JapanPrepayFee: "JAPAN_PREPAY_FEE";
    readonly JapanPrepayPercent: "JAPAN_PREPAY_PERCENT";
    readonly JapanPrepayPhotoDiscount: "JAPAN_PREPAY_PHOTO_DISCOUNT";
    readonly JapanRemittanceFee: "JAPAN_REMITTANCE_FEE";
    readonly KazpostDisbursementFee: "KAZPOST_DISBURSEMENT_FEE";
    readonly KazpostPrepayFee: "KAZPOST_PREPAY_FEE";
    readonly KazpostPrepayPercent: "KAZPOST_PREPAY_PERCENT";
    readonly KazpostPrepayPhotoDiscount: "KAZPOST_PREPAY_PHOTO_DISCOUNT";
    readonly KazpostRemittanceFee: "KAZPOST_REMITTANCE_FEE";
    readonly KenyaDisbursementFee: "KENYA_DISBURSEMENT_FEE";
    readonly KenyaRemittanceFee: "KENYA_REMITTANCE_FEE";
    readonly KoreaDisbursementFee: "KOREA_DISBURSEMENT_FEE";
    readonly KoreaGuaranteeOrder: "KOREA_GUARANTEE_ORDER";
    readonly KoreaPrepayDisbursementFee: "KOREA_PREPAY_DISBURSEMENT_FEE";
    readonly KoreaPrepayFee: "KOREA_PREPAY_FEE";
    readonly KoreaPrepayPercent: "KOREA_PREPAY_PERCENT";
    readonly KoreaPrepayPhotoDiscount: "KOREA_PREPAY_PHOTO_DISCOUNT";
    readonly KoreaRemittanceFee: "KOREA_REMITTANCE_FEE";
    readonly LaPosteBurkinaFasoDisbursementFee: "LA_POSTE_BURKINA_FASO_DISBURSEMENT_FEE";
    readonly LaPosteBurkinaFasoGuaranteeOrder: "LA_POSTE_BURKINA_FASO_GUARANTEE_ORDER";
    readonly LaPosteBurkinaFasoRemittanceFee: "LA_POSTE_BURKINA_FASO_REMITTANCE_FEE";
    readonly LaPosteDisbursementFee: "LA_POSTE_DISBURSEMENT_FEE";
    readonly LaPosteRemittanceAmountRevenueShare: "LA_POSTE_REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly LaPosteRemittanceFee: "LA_POSTE_REMITTANCE_FEE";
    readonly LabelCertification: "LABEL_CERTIFICATION";
    readonly LandedCostGuarantee: "LANDED_COST_GUARANTEE";
    readonly LandedCostGuaranteeBuffer: "LANDED_COST_GUARANTEE_BUFFER";
    readonly LandedCostGuaranteeSubsidy: "LANDED_COST_GUARANTEE_SUBSIDY";
    readonly LandedCostSubscriptionAnnual: "LANDED_COST_SUBSCRIPTION_ANNUAL";
    readonly LandedCostSubscriptionMonthly: "LANDED_COST_SUBSCRIPTION_MONTHLY";
    readonly LatviaDisbursementFee: "LATVIA_DISBURSEMENT_FEE";
    readonly LatviaRemittanceFee: "LATVIA_REMITTANCE_FEE";
    readonly LiberiaBondFee: "LIBERIA_BOND_FEE";
    readonly LiberiaDisbursementFee: "LIBERIA_DISBURSEMENT_FEE";
    readonly LiberiaRemittanceFee: "LIBERIA_REMITTANCE_FEE";
    readonly LiechtensteinischeDisbursementFee: "LIECHTENSTEINISCHE_DISBURSEMENT_FEE";
    readonly LiechtensteinischeRemittanceFee: "LIECHTENSTEINISCHE_REMITTANCE_FEE";
    readonly MaltaDisbursementFee: "MALTA_DISBURSEMENT_FEE";
    readonly MaltaGuaranteeOrder: "MALTA_GUARANTEE_ORDER";
    readonly MaltaRemittanceFee: "MALTA_REMITTANCE_FEE";
    readonly MerchandiseProcessingFee: "MERCHANDISE_PROCESSING_FEE";
    readonly MerchantProcessing: "MERCHANT_PROCESSING";
    readonly MongolDisbursementFee: "MONGOL_DISBURSEMENT_FEE";
    readonly MongolGuaranteeOrder: "MONGOL_GUARANTEE_ORDER";
    readonly MongolRemittanceFee: "MONGOL_REMITTANCE_FEE";
    readonly MonthlyPlatformFee: "MONTHLY_PLATFORM_FEE";
    readonly MonthlySubscription: "MONTHLY_SUBSCRIPTION";
    readonly NetparcelDisbursementFee: "NETPARCEL_DISBURSEMENT_FEE";
    readonly NetparcelRemittanceFee: "NETPARCEL_REMITTANCE_FEE";
    readonly NewZealandDisbursementFee: "NEW_ZEALAND_DISBURSEMENT_FEE";
    readonly NewZealandRemittanceFee: "NEW_ZEALAND_REMITTANCE_FEE";
    readonly NigerDisbursementFee: "NIGER_DISBURSEMENT_FEE";
    readonly NigerRemittanceFee: "NIGER_REMITTANCE_FEE";
    readonly NigeriaDisbursementFee: "NIGERIA_DISBURSEMENT_FEE";
    readonly NigeriaRemittanceFee: "NIGERIA_REMITTANCE_FEE";
    readonly NonGuaranteeAdditionalTariffLines: "NON_GUARANTEE_ADDITIONAL_TARIFF_LINES";
    readonly NonGuaranteeAdvancement: "NON_GUARANTEE_ADVANCEMENT";
    readonly NonGuaranteeBrokerageFee: "NON_GUARANTEE_BROKERAGE_FEE";
    readonly NonGuaranteeCountry: "NON_GUARANTEE_COUNTRY";
    readonly NonGuaranteeCurrencyConversionFee: "NON_GUARANTEE_CURRENCY_CONVERSION_FEE";
    readonly NonGuaranteeDdpServiceFee: "NON_GUARANTEE_DDP_SERVICE_FEE";
    readonly NonGuaranteeDuty: "NON_GUARANTEE_DUTY";
    readonly NonGuaranteeDutyTax: "NON_GUARANTEE_DUTY_TAX";
    readonly NonGuaranteeFranceCustomsTax: "NON_GUARANTEE_FRANCE_CUSTOMS_TAX";
    readonly NonGuaranteeLandedCostBuffer: "NON_GUARANTEE_LANDED_COST_BUFFER";
    readonly NonGuaranteeLandedCostSubsidy: "NON_GUARANTEE_LANDED_COST_SUBSIDY";
    readonly NonGuaranteeShipping: "NON_GUARANTEE_SHIPPING";
    readonly NonGuaranteeStorageFee: "NON_GUARANTEE_STORAGE_FEE";
    readonly NonGuaranteeTax: "NON_GUARANTEE_TAX";
    readonly OmnivaDisbursementFee: "OMNIVA_DISBURSEMENT_FEE";
    readonly OmnivaPrepayFee: "OMNIVA_PREPAY_FEE";
    readonly OmnivaPrepayPercent: "OMNIVA_PREPAY_PERCENT";
    readonly OmnivaPrepayPhotoDiscount: "OMNIVA_PREPAY_PHOTO_DISCOUNT";
    readonly OmnivaRemittanceFee: "OMNIVA_REMITTANCE_FEE";
    readonly OrderError: "ORDER_ERROR";
    readonly Other: "OTHER";
    readonly PalletFee: "PALLET_FEE";
    readonly PartnerReferralRevenueShare: "PARTNER_REFERRAL_REVENUE_SHARE";
    readonly PaymentNoOrder: "PAYMENT_NO_ORDER";
    readonly PeruBondFee: "PERU_BOND_FEE";
    readonly PeruDisbursementFee: "PERU_DISBURSEMENT_FEE";
    readonly PeruRemittanceFee: "PERU_REMITTANCE_FEE";
    readonly PgaAmsProcessing: "PGA_AMS_PROCESSING";
    readonly PgaAphis: "PGA_APHIS";
    readonly PgaBtaPriorNotice: "PGA_BTA_PRIOR_NOTICE";
    readonly PgaDisclaim: "PGA_DISCLAIM";
    readonly PgaDot: "PGA_DOT";
    readonly PgaFdaClearance: "PGA_FDA_CLEARANCE";
    readonly PlatformFee: "PLATFORM_FEE";
    readonly PostalOperator: "POSTAL_OPERATOR";
    readonly PostalOperatorMinimum: "POSTAL_OPERATOR_MINIMUM";
    readonly PostenBringDisbursementFee: "POSTEN_BRING_DISBURSEMENT_FEE";
    readonly PostenBringGuaranteeOrder: "POSTEN_BRING_GUARANTEE_ORDER";
    readonly PostenBringRemittanceFee: "POSTEN_BRING_REMITTANCE_FEE";
    readonly PostnlRemittanceFee: "POSTNL_REMITTANCE_FEE";
    readonly PostnordRemittanceFee: "POSTNORD_REMITTANCE_FEE";
    readonly PrepayProcessingFee: "PREPAY_PROCESSING_FEE";
    readonly ProfessionalServices: "PROFESSIONAL_SERVICES";
    readonly RefundError: "REFUND_ERROR";
    readonly RetriedPayout: "RETRIED_PAYOUT";
    readonly Review: "REVIEW";
    readonly RoyalMailRemittanceFee: "ROYAL_MAIL_REMITTANCE_FEE";
    readonly RwandaDisbursementFee: "RWANDA_DISBURSEMENT_FEE";
    readonly RwandaGuaranteeOrder: "RWANDA_GUARANTEE_ORDER";
    readonly RwandaRemittanceFee: "RWANDA_REMITTANCE_FEE";
    readonly SaintLuciaPrepayFee: "SAINT_LUCIA_PREPAY_FEE";
    readonly SaintLuciaPrepayPercent: "SAINT_LUCIA_PREPAY_PERCENT";
    readonly SaintLuciaPrepayPhotoDiscount: "SAINT_LUCIA_PREPAY_PHOTO_DISCOUNT";
    readonly SecurityDeposit: "SECURITY_DEPOSIT";
    readonly SeychellesDisbursementFee: "SEYCHELLES_DISBURSEMENT_FEE";
    readonly SeychellesGuaranteeOrder: "SEYCHELLES_GUARANTEE_ORDER";
    readonly SeychellesRemittanceFee: "SEYCHELLES_REMITTANCE_FEE";
    readonly Shipping: "SHIPPING";
    readonly ShopifyAppSaleAdjustment: "SHOPIFY_APP_SALE_ADJUSTMENT";
    readonly ShopifyAppSaleCredit: "SHOPIFY_APP_SALE_CREDIT";
    readonly ShopifyAppSubscriptionSale: "SHOPIFY_APP_SUBSCRIPTION_SALE";
    readonly ShopifyGuaranteeOrder: "SHOPIFY_GUARANTEE_ORDER";
    readonly ShopifyGuaranteeOrderLegacy: "SHOPIFY_GUARANTEE_ORDER_LEGACY";
    readonly ShopifyGuaranteePercent: "SHOPIFY_GUARANTEE_PERCENT";
    readonly ShopifyGuaranteePercentInclusive: "SHOPIFY_GUARANTEE_PERCENT_INCLUSIVE";
    readonly ShopifyLandedCostSubscriptionAnnual: "SHOPIFY_LANDED_COST_SUBSCRIPTION_ANNUAL";
    readonly ShopifyLandedCostSubscriptionMonthly: "SHOPIFY_LANDED_COST_SUBSCRIPTION_MONTHLY";
    readonly ShopifySubscriptionAnnual: "SHOPIFY_SUBSCRIPTION_ANNUAL";
    readonly ShopifySubscriptionMonthly: "SHOPIFY_SUBSCRIPTION_MONTHLY";
    readonly ShopifyTransactionPercent: "SHOPIFY_TRANSACTION_PERCENT";
    readonly SierraLeoneBondFee: "SIERRA_LEONE_BOND_FEE";
    readonly SierraLeoneDisbursementFee: "SIERRA_LEONE_DISBURSEMENT_FEE";
    readonly SierraLeoneRemittanceFee: "SIERRA_LEONE_REMITTANCE_FEE";
    readonly SingaporeRemittanceFee: "SINGAPORE_REMITTANCE_FEE";
    readonly SortationFee: "SORTATION_FEE";
    readonly SriLankaDisbursementFee: "SRI_LANKA_DISBURSEMENT_FEE";
    readonly SriLankaGuaranteeOrder: "SRI_LANKA_GUARANTEE_ORDER";
    readonly SriLankaRemittanceFee: "SRI_LANKA_REMITTANCE_FEE";
    readonly StopDeliveryFee: "STOP_DELIVERY_FEE";
    readonly StorageFee: "STORAGE_FEE";
    readonly StoreCredit: "STORE_CREDIT";
    readonly StripeBalanceCurrencyConversion: "STRIPE_BALANCE_CURRENCY_CONVERSION";
    readonly StripeConnectTransfer: "STRIPE_CONNECT_TRANSFER";
    readonly StripeProcessingFee: "STRIPE_PROCESSING_FEE";
    readonly SubscriptionAnnual: "SUBSCRIPTION_ANNUAL";
    readonly SubscriptionAnnualMonthly: "SUBSCRIPTION_ANNUAL_MONTHLY";
    readonly SwissDisbursementFee: "SWISS_DISBURSEMENT_FEE";
    readonly SwissRemittanceFee: "SWISS_REMITTANCE_FEE";
    readonly Tax: "TAX";
    readonly TaxRemittance: "TAX_REMITTANCE";
    readonly TogoDisbursementFee: "TOGO_DISBURSEMENT_FEE";
    readonly TogoPrepayFee: "TOGO_PREPAY_FEE";
    readonly TogoPrepayPercent: "TOGO_PREPAY_PERCENT";
    readonly TogoPrepayPhotoDiscount: "TOGO_PREPAY_PHOTO_DISCOUNT";
    readonly TogoRemittanceFee: "TOGO_REMITTANCE_FEE";
    readonly TransactionOrder: "TRANSACTION_ORDER";
    readonly TransactionPercent: "TRANSACTION_PERCENT";
    readonly TransferBug: "TRANSFER_BUG";
    readonly TransferFromSvb: "TRANSFER_FROM_SVB";
    readonly TurkishDisbursementFee: "TURKISH_DISBURSEMENT_FEE";
    readonly TurkishGuaranteeOrder: "TURKISH_GUARANTEE_ORDER";
    readonly TurkishRemittanceFee: "TURKISH_REMITTANCE_FEE";
    readonly Type_01EntryFee: "TYPE_01_ENTRY_FEE";
    readonly Type_01HtsClassificationFee: "TYPE_01_HTS_CLASSIFICATION_FEE";
    readonly Type_01PerLineFee: "TYPE_01_PER_LINE_FEE";
    readonly Type_11EntryFee: "TYPE_11_ENTRY_FEE";
    readonly Type_11EntryFeeMinimum: "TYPE_11_ENTRY_FEE_MINIMUM";
    readonly Type_11EntryFeePga: "TYPE_11_ENTRY_FEE_PGA";
    readonly UgandaPrepayFee: "UGANDA_PREPAY_FEE";
    readonly UgandaPrepayPercent: "UGANDA_PREPAY_PERCENT";
    readonly UgandaPrepayPhotoDiscount: "UGANDA_PREPAY_PHOTO_DISCOUNT";
    readonly UkraineDisbursement: "UKRAINE_DISBURSEMENT";
    readonly UkraineDisbursementFee: "UKRAINE_DISBURSEMENT_FEE";
    readonly UkraineRemittanceFee: "UKRAINE_REMITTANCE_FEE";
    readonly Uncategorized: "UNCATEGORIZED";
    readonly UnmatchedDutyTaxCharges: "UNMATCHED_DUTY_TAX_CHARGES";
    readonly UnmatchedDutyTaxChargesCollectionFee: "UNMATCHED_DUTY_TAX_CHARGES_COLLECTION_FEE";
    readonly UnmatchedOrder: "UNMATCHED_ORDER";
    readonly UnmatchedPercent: "UNMATCHED_PERCENT";
    readonly UpsTransactionMinimum: "UPS_TRANSACTION_MINIMUM";
    readonly UspsPrepayFee: "USPS_PREPAY_FEE";
    readonly UspsPrepayPercent: "USPS_PREPAY_PERCENT";
    readonly UspsPrepayPhotoDiscount: "USPS_PREPAY_PHOTO_DISCOUNT";
    readonly UspsSubscription: "USPS_SUBSCRIPTION";
    readonly VanuatuBondFee: "VANUATU_BOND_FEE";
    readonly VanuatuDisbursementFee: "VANUATU_DISBURSEMENT_FEE";
    readonly VanuatuPrepayFee: "VANUATU_PREPAY_FEE";
    readonly VanuatuPrepayPercent: "VANUATU_PREPAY_PERCENT";
    readonly VanuatuPrepayPhotoDiscount: "VANUATU_PREPAY_PHOTO_DISCOUNT";
    readonly VanuatuRemittanceFee: "VANUATU_REMITTANCE_FEE";
    readonly WireFee: "WIRE_FEE";
    readonly ZonosApi: "ZONOS_API";
    readonly ZonosApiAnnualFlat: "ZONOS_API_ANNUAL_FLAT";
    readonly ZonosApiAnnualMonthlyFlat: "ZONOS_API_ANNUAL_MONTHLY_FLAT";
    readonly ZonosApiMonthlyFlat: "ZONOS_API_MONTHLY_FLAT";
    readonly ZonosApiUsage: "ZONOS_API_USAGE";
    readonly ZonosCheckoutSubscription: "ZONOS_CHECKOUT_SUBSCRIPTION";
    readonly ZonosCheckoutSubscriptionAnnual: "ZONOS_CHECKOUT_SUBSCRIPTION_ANNUAL";
    readonly ZonosCheckoutSubscriptionMonthly: "ZONOS_CHECKOUT_SUBSCRIPTION_MONTHLY";
    readonly ZonosClassifyApi: "ZONOS_CLASSIFY_API";
    readonly ZonosClassifyApiAnnualFlat: "ZONOS_CLASSIFY_API_ANNUAL_FLAT";
    readonly ZonosClassifyApiAnnualMonthlyFlat: "ZONOS_CLASSIFY_API_ANNUAL_MONTHLY_FLAT";
    readonly ZonosClassifyApiMonthlyFlat: "ZONOS_CLASSIFY_API_MONTHLY_FLAT";
    readonly ZonosClassifyApiUsage: "ZONOS_CLASSIFY_API_USAGE";
    readonly ZonosHello: "ZONOS_HELLO";
    readonly ZonosLandedCost: "ZONOS_LANDED_COST";
    readonly ZonosQuoter: "ZONOS_QUOTER";
    readonly ZonosSetupFee: "ZONOS_SETUP_FEE";
    readonly ZonosShipping: "ZONOS_SHIPPING";
    readonly ZonosSupport: "ZONOS_SUPPORT";
    readonly ZonosTransaction: "ZONOS_TRANSACTION";
};
export type InvoiceDetailCategoryInputType = (typeof invoiceDetailCategoryInputType)[keyof typeof invoiceDetailCategoryInputType];
export declare const invoiceDisplayPreference: {
    readonly DisplayAll: "DISPLAY_ALL";
    readonly DisplayBankingInstructionsOnly: "DISPLAY_BANKING_INSTRUCTIONS_ONLY";
    readonly DisplayMemoAndBankingInstructions: "DISPLAY_MEMO_AND_BANKING_INSTRUCTIONS";
    readonly DisplayMemoOnly: "DISPLAY_MEMO_ONLY";
    readonly DisplayNone: "DISPLAY_NONE";
    readonly DisplayPurchaseOrderAndBankingInstructions: "DISPLAY_PURCHASE_ORDER_AND_BANKING_INSTRUCTIONS";
    readonly DisplayPurchaseOrderAndMemo: "DISPLAY_PURCHASE_ORDER_AND_MEMO";
    readonly DisplayPurchaseOrderAndMemoAndBankingInstructions: "DISPLAY_PURCHASE_ORDER_AND_MEMO_AND_BANKING_INSTRUCTIONS";
    readonly DisplayPurchaseOrderOnly: "DISPLAY_PURCHASE_ORDER_ONLY";
    readonly DisplayTaxIdAndBankingInstructions: "DISPLAY_TAX_ID_AND_BANKING_INSTRUCTIONS";
    readonly DisplayTaxIdAndMemo: "DISPLAY_TAX_ID_AND_MEMO";
    readonly DisplayTaxIdAndMemoAndBankingInstructions: "DISPLAY_TAX_ID_AND_MEMO_AND_BANKING_INSTRUCTIONS";
    readonly DisplayTaxIdAndPurchaseOrder: "DISPLAY_TAX_ID_AND_PURCHASE_ORDER";
    readonly DisplayTaxIdAndPurchaseOrderAndBankingInstructions: "DISPLAY_TAX_ID_AND_PURCHASE_ORDER_AND_BANKING_INSTRUCTIONS";
    readonly DisplayTaxIdAndPurchaseOrderAndMemo: "DISPLAY_TAX_ID_AND_PURCHASE_ORDER_AND_MEMO";
    readonly DisplayTaxIdOnly: "DISPLAY_TAX_ID_ONLY";
};
export type InvoiceDisplayPreference = (typeof invoiceDisplayPreference)[keyof typeof invoiceDisplayPreference];
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
export declare const invoicePartyType: {
    readonly Destination: "DESTINATION";
    readonly Origin: "ORIGIN";
    readonly Payee: "PAYEE";
    readonly Payor: "PAYOR";
};
export type InvoicePartyType = (typeof invoicePartyType)[keyof typeof invoicePartyType];
export declare const invoiceProcessor: {
    readonly Stripe: "STRIPE";
};
export type InvoiceProcessor = (typeof invoiceProcessor)[keyof typeof invoiceProcessor];
export declare const invoiceScheduleGlobalStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type InvoiceScheduleGlobalStatus = (typeof invoiceScheduleGlobalStatus)[keyof typeof invoiceScheduleGlobalStatus];
export declare const invoiceScheduleInterval: {
    readonly Daily: "DAILY";
    readonly Monthly: "MONTHLY";
    readonly SemiMonthly: "SEMI_MONTHLY";
    readonly Weekly: "WEEKLY";
};
export type InvoiceScheduleInterval = (typeof invoiceScheduleInterval)[keyof typeof invoiceScheduleInterval];
export declare const invoiceSettingsStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type InvoiceSettingsStatus = (typeof invoiceSettingsStatus)[keyof typeof invoiceSettingsStatus];
export declare const invoiceStatus: {
    readonly Received: "RECEIVED";
    readonly Reconciled: "RECONCILED";
    readonly Voided: "VOIDED";
};
export type InvoiceStatus = (typeof invoiceStatus)[keyof typeof invoiceStatus];
export declare const invoiceUploadStatus: {
    readonly Error: "ERROR";
    readonly FailedReconciliation: "FAILED_RECONCILIATION";
    readonly PartiallyReconciled: "PARTIALLY_RECONCILED";
    readonly ProcessingReconciliation: "PROCESSING_RECONCILIATION";
    readonly Received: "RECEIVED";
    readonly Reconciled: "RECONCILED";
};
export type InvoiceUploadStatus = (typeof invoiceUploadStatus)[keyof typeof invoiceUploadStatus];
export declare const itemAmountTargetType: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly ItemProvided: "ITEM_PROVIDED";
    readonly MerchantBase: "MERCHANT_BASE";
    readonly MerchantProvided: "MERCHANT_PROVIDED";
    readonly MerchantSettled: "MERCHANT_SETTLED";
    readonly ShopperPresented: "SHOPPER_PRESENTED";
    readonly ZonosBase: "ZONOS_BASE";
};
export type ItemAmountTargetType = (typeof itemAmountTargetType)[keyof typeof itemAmountTargetType];
export declare const itemAttributeSource: {
    readonly Catalog: "CATALOG";
    readonly CatalogVerified: "CATALOG_VERIFIED";
    readonly CheckoutVerified: "CHECKOUT_VERIFIED";
    readonly UserProvided: "USER_PROVIDED";
};
export type ItemAttributeSource = (typeof itemAttributeSource)[keyof typeof itemAttributeSource];
export declare const itemKeyPreference: {
    readonly None: "NONE";
    readonly ProductId: "PRODUCT_ID";
    readonly Sku: "SKU";
};
export type ItemKeyPreference = (typeof itemKeyPreference)[keyof typeof itemKeyPreference];
export declare const itemMeasurementType: {
    readonly AlcoholByVolume: "ALCOHOL_BY_VOLUME";
    readonly Area: "AREA";
    readonly Count: "COUNT";
    readonly Height: "HEIGHT";
    readonly Length: "LENGTH";
    readonly TotalWeight: "TOTAL_WEIGHT";
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
export declare const itemRestrictionCarrier: {
    readonly AustraliaPost: "AUSTRALIA_POST";
    readonly Dhl: "DHL";
    readonly Fedex: "FEDEX";
    readonly Other: "OTHER";
    readonly Ups: "UPS";
};
export type ItemRestrictionCarrier = (typeof itemRestrictionCarrier)[keyof typeof itemRestrictionCarrier];
export declare const itemRestrictionType: {
    readonly Observation: "OBSERVATION";
    readonly Prohibition: "PROHIBITION";
    readonly Restriction: "RESTRICTION";
};
export type ItemRestrictionType = (typeof itemRestrictionType)[keyof typeof itemRestrictionType];
export declare const itemReverseAmountStatus: {
    readonly Applied: "APPLIED";
    readonly NotAppliedNegativeValue: "NOT_APPLIED_NEGATIVE_VALUE";
    readonly NotAppliedUnderDeMinimis: "NOT_APPLIED_UNDER_DE_MINIMIS";
};
export type ItemReverseAmountStatus = (typeof itemReverseAmountStatus)[keyof typeof itemReverseAmountStatus];
export declare const itemReverseAmountType: {
    readonly Duty: "DUTY";
    readonly DutyFee: "DUTY_FEE";
    readonly DutyTax: "DUTY_TAX";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly None: "NONE";
    readonly Tax: "TAX";
    readonly TaxFee: "TAX_FEE";
};
export type ItemReverseAmountType = (typeof itemReverseAmountType)[keyof typeof itemReverseAmountType];
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
    readonly Dozen: "DOZEN";
    readonly Each: "EACH";
    readonly Foot: "FOOT";
    readonly Gram: "GRAM";
    readonly Gross: "GROSS";
    readonly Inch: "INCH";
    readonly Kilogram: "KILOGRAM";
    readonly Liter: "LITER";
    readonly Meter: "METER";
    readonly Milliliter: "MILLILITER";
    readonly Millimeter: "MILLIMETER";
    readonly Ounce: "OUNCE";
    readonly Pair: "PAIR";
    readonly Percentage: "PERCENTAGE";
    readonly PolarizationDegree: "POLARIZATION_DEGREE";
    readonly Pound: "POUND";
    readonly ProofLiter: "PROOF_LITER";
    readonly SquareMeter: "SQUARE_METER";
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
    readonly Inferred: "INFERRED";
    readonly OrganizationSetting: "ORGANIZATION_SETTING";
    readonly TariffCompleted: "TARIFF_COMPLETED";
    readonly UserProvided: "USER_PROVIDED";
};
export type ItemValueSource = (typeof itemValueSource)[keyof typeof itemValueSource];
export declare const labelAlcoholRecipientType: {
    readonly Consumer: "CONSUMER";
    readonly Licensee: "LICENSEE";
};
export type LabelAlcoholRecipientType = (typeof labelAlcoholRecipientType)[keyof typeof labelAlcoholRecipientType];
export declare const labelAmountType: {
    readonly Discount: "DISCOUNT";
    readonly Fee: "FEE";
    readonly Insurance: "INSURANCE";
    readonly Quote: "QUOTE";
};
export type LabelAmountType = (typeof labelAmountType)[keyof typeof labelAmountType];
export declare const labelBatteryMaterialType: {
    readonly LithiumIon: "LITHIUM_ION";
    readonly LithiumMetal: "LITHIUM_METAL";
};
export type LabelBatteryMaterialType = (typeof labelBatteryMaterialType)[keyof typeof labelBatteryMaterialType];
export declare const labelBatteryPackingType: {
    readonly BatteryInsideEquipment: "BATTERY_INSIDE_EQUIPMENT";
    readonly BatteryOnly: "BATTERY_ONLY";
    readonly BatteryPackagedWithEquipment: "BATTERY_PACKAGED_WITH_EQUIPMENT";
};
export type LabelBatteryPackingType = (typeof labelBatteryPackingType)[keyof typeof labelBatteryPackingType];
export declare const labelBatteryRegulatorySubType: {
    readonly IataSectionI: "IATA_SECTION_I";
    readonly IataSectionIi: "IATA_SECTION_II";
};
export type LabelBatteryRegulatorySubType = (typeof labelBatteryRegulatorySubType)[keyof typeof labelBatteryRegulatorySubType];
export declare const labelBrokerType: {
    readonly Export: "EXPORT";
    readonly Import: "IMPORT";
};
export type LabelBrokerType = (typeof labelBrokerType)[keyof typeof labelBrokerType];
export declare const labelCarrierCode: {
    readonly Apc: "APC";
    readonly Asendia: "ASENDIA";
    readonly AustraliaPost: "AUSTRALIA_POST";
    readonly CanadaPost: "CANADA_POST";
    readonly Dhl: "DHL";
    readonly DhlEcommerce: "DHL_ECOMMERCE";
    readonly DirectLink: "DIRECT_LINK";
    readonly Ehub: "EHUB";
    readonly Envia: "ENVIA";
    readonly Fedex: "FEDEX";
    readonly Fedexxb: "FEDEXXB";
    readonly JapanPost: "JAPAN_POST";
    readonly Ups: "UPS";
    readonly Usps: "USPS";
};
export type LabelCarrierCode = (typeof labelCarrierCode)[keyof typeof labelCarrierCode];
export declare const labelCodCollectionType: {
    readonly Any: "ANY";
    readonly Cash: "CASH";
    readonly CompanyCheck: "COMPANY_CHECK";
    readonly GuaranteedFunds: "GUARANTEED_FUNDS";
    readonly PersonalCheck: "PERSONAL_CHECK";
};
export type LabelCodCollectionType = (typeof labelCodCollectionType)[keyof typeof labelCodCollectionType];
export declare const labelControlledExportType: {
    readonly Dea_036: "DEA_036";
    readonly Dea_236: "DEA_236";
    readonly Dea_486: "DEA_486";
    readonly DspLicenseAgreement: "DSP_LICENSE_AGREEMENT";
    readonly Dsp_05: "DSP_05";
    readonly Dsp_61: "DSP_61";
    readonly Dsp_73: "DSP_73";
    readonly Dsp_85: "DSP_85";
    readonly Dsp_94: "DSP_94";
    readonly FromForeignTradeZone: "FROM_FOREIGN_TRADE_ZONE";
    readonly ItarExemption: "ITAR_EXEMPTION";
    readonly LowValue: "LOW_VALUE";
    readonly WarehouseWithdrawal: "WAREHOUSE_WITHDRAWAL";
};
export type LabelControlledExportType = (typeof labelControlledExportType)[keyof typeof labelControlledExportType];
export declare const labelCustomsOptionType: {
    readonly CourtesyReturnLabel: "COURTESY_RETURN_LABEL";
    readonly ExhibitionTradeShow: "EXHIBITION_TRADE_SHOW";
    readonly FaultyItem: "FAULTY_ITEM";
    readonly FollowingRepair: "FOLLOWING_REPAIR";
    readonly ForRepair: "FOR_REPAIR";
    readonly ItemForLoan: "ITEM_FOR_LOAN";
    readonly Other: "OTHER";
    readonly Rejected: "REJECTED";
    readonly Replacement: "REPLACEMENT";
    readonly Trial: "TRIAL";
};
export type LabelCustomsOptionType = (typeof labelCustomsOptionType)[keyof typeof labelCustomsOptionType];
export declare const labelDangerousGoodsAccessibility: {
    readonly Accessible: "ACCESSIBLE";
    readonly Inaccessible: "INACCESSIBLE";
};
export type LabelDangerousGoodsAccessibility = (typeof labelDangerousGoodsAccessibility)[keyof typeof labelDangerousGoodsAccessibility];
export declare const labelDangerousGoodsCategory: {
    readonly BiologicalSubstance: "BIOLOGICAL_SUBSTANCE";
    readonly ConsumerCommodity: "CONSUMER_COMMODITY";
    readonly ExceptedQuantity: "EXCEPTED_QUANTITY";
    readonly FullyRegulated: "FULLY_REGULATED";
    readonly LimitedQuantity: "LIMITED_QUANTITY";
    readonly MagnetizedMaterial: "MAGNETIZED_MATERIAL";
    readonly NotRestrictedA02: "NOT_RESTRICTED_A02";
    readonly NotRestrictedA67: "NOT_RESTRICTED_A67";
    readonly NotRestrictedA70: "NOT_RESTRICTED_A70";
};
export type LabelDangerousGoodsCategory = (typeof labelDangerousGoodsCategory)[keyof typeof labelDangerousGoodsCategory];
export declare const labelDangerousGoodsOption: {
    readonly HazardousMaterials: "HAZARDOUS_MATERIALS";
    readonly LimitedQuantitiesCommodities: "LIMITED_QUANTITIES_COMMODITIES";
    readonly OrmD: "ORM_D";
    readonly ReportableQuantities: "REPORTABLE_QUANTITIES";
    readonly SmallQuantityException: "SMALL_QUANTITY_EXCEPTION";
};
export type LabelDangerousGoodsOption = (typeof labelDangerousGoodsOption)[keyof typeof labelDangerousGoodsOption];
export declare const labelDocumentIdProducer: {
    readonly Customer: "CUSTOMER";
    readonly Fedex: "FEDEX";
};
export type LabelDocumentIdProducer = (typeof labelDocumentIdProducer)[keyof typeof labelDocumentIdProducer];
export declare const labelDocumentProducer: {
    readonly Customer: "CUSTOMER";
    readonly FedexCls: "FEDEX_CLS";
    readonly FedexGtm: "FEDEX_GTM";
};
export type LabelDocumentProducer = (typeof labelDocumentProducer)[keyof typeof labelDocumentProducer];
export declare const labelEmailAggregationType: {
    readonly PerPackage: "PER_PACKAGE";
    readonly PerShipment: "PER_SHIPMENT";
};
export type LabelEmailAggregationType = (typeof labelEmailAggregationType)[keyof typeof labelEmailAggregationType];
export declare const labelEmailNotificationEventType: {
    readonly OnDelivery: "ON_DELIVERY";
    readonly OnEstimatedDelivery: "ON_ESTIMATED_DELIVERY";
    readonly OnException: "ON_EXCEPTION";
    readonly OnShipment: "ON_SHIPMENT";
    readonly OnTender: "ON_TENDER";
};
export type LabelEmailNotificationEventType = (typeof labelEmailNotificationEventType)[keyof typeof labelEmailNotificationEventType];
export declare const labelEmailNotificationFormatType: {
    readonly Html: "HTML";
    readonly Text: "TEXT";
};
export type LabelEmailNotificationFormatType = (typeof labelEmailNotificationFormatType)[keyof typeof labelEmailNotificationFormatType];
export declare const labelEmailRecipientType: {
    readonly Broker: "BROKER";
    readonly Other: "OTHER";
    readonly Recipient: "RECIPIENT";
    readonly Shipper: "SHIPPER";
    readonly ThirdParty: "THIRD_PARTY";
};
export type LabelEmailRecipientType = (typeof labelEmailRecipientType)[keyof typeof labelEmailRecipientType];
export declare const labelEtdDocumentType: {
    readonly CertificateOfOrigin: "CERTIFICATE_OF_ORIGIN";
    readonly CommercialInvoice: "COMMERCIAL_INVOICE";
    readonly NaftaCertificateOfOrigin: "NAFTA_CERTIFICATE_OF_ORIGIN";
    readonly ProFormaInvoice: "PRO_FORMA_INVOICE";
    readonly UsmcaCertificationOfOrigin: "USMCA_CERTIFICATION_OF_ORIGIN";
    readonly UsmcaCommercialInvoiceCertificationOfOrigin: "USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN";
};
export type LabelEtdDocumentType = (typeof labelEtdDocumentType)[keyof typeof labelEtdDocumentType];
export declare const labelFileType: {
    readonly Pdf: "PDF";
    readonly Zpl: "ZPL";
};
export type LabelFileType = (typeof labelFileType)[keyof typeof labelFileType];
export declare const labelFreightClass: {
    readonly Class_050: "CLASS_050";
    readonly Class_055: "CLASS_055";
    readonly Class_060: "CLASS_060";
    readonly Class_065: "CLASS_065";
    readonly Class_070: "CLASS_070";
    readonly Class_077_5: "CLASS_077_5";
    readonly Class_085: "CLASS_085";
    readonly Class_092_5: "CLASS_092_5";
    readonly Class_100: "CLASS_100";
    readonly Class_110: "CLASS_110";
    readonly Class_125: "CLASS_125";
    readonly Class_150: "CLASS_150";
    readonly Class_175: "CLASS_175";
    readonly Class_200: "CLASS_200";
    readonly Class_250: "CLASS_250";
    readonly Class_300: "CLASS_300";
    readonly Class_400: "CLASS_400";
    readonly Class_500: "CLASS_500";
};
export type LabelFreightClass = (typeof labelFreightClass)[keyof typeof labelFreightClass];
export declare const labelFreightCollectTermsType: {
    readonly NonRecourseShipperSigned: "NON_RECOURSE_SHIPPER_SIGNED";
    readonly Standard: "STANDARD";
};
export type LabelFreightCollectTermsType = (typeof labelFreightCollectTermsType)[keyof typeof labelFreightCollectTermsType];
export declare const labelFreightPackaging: {
    readonly Bag: "BAG";
    readonly Barrel: "BARREL";
    readonly Basket: "BASKET";
    readonly Box: "BOX";
    readonly Bucket: "BUCKET";
    readonly Bundle: "BUNDLE";
    readonly Cage: "CAGE";
    readonly Carton: "CARTON";
    readonly Case: "CASE";
    readonly Chest: "CHEST";
    readonly Coil: "COIL";
    readonly Crate: "CRATE";
    readonly Cylinder: "CYLINDER";
    readonly Drum: "DRUM";
    readonly Envelope: "ENVELOPE";
    readonly Hamper: "HAMPER";
    readonly Pail: "PAIL";
    readonly Pallet: "PALLET";
    readonly Pieces: "PIECES";
    readonly Reel: "REEL";
    readonly Roll: "ROLL";
    readonly Skid: "SKID";
    readonly Tank: "TANK";
    readonly ToteBin: "TOTE_BIN";
    readonly Tube: "TUBE";
};
export type LabelFreightPackaging = (typeof labelFreightPackaging)[keyof typeof labelFreightPackaging];
export declare const labelFreightRole: {
    readonly Consignee: "CONSIGNEE";
    readonly Shipper: "SHIPPER";
    readonly ThirdParty: "THIRD_PARTY";
};
export type LabelFreightRole = (typeof labelFreightRole)[keyof typeof labelFreightRole];
export declare const labelGuaranteeCode: {
    readonly Lcg: "LCG";
    readonly NotApplicable: "NOT_APPLICABLE";
};
export type LabelGuaranteeCode = (typeof labelGuaranteeCode)[keyof typeof labelGuaranteeCode];
export declare const labelHoldLocationType: {
    readonly FedexAuthorizedShipCenter: "FEDEX_AUTHORIZED_SHIP_CENTER";
    readonly FedexExpressStation: "FEDEX_EXPRESS_STATION";
    readonly FedexFreightServiceCenter: "FEDEX_FREIGHT_SERVICE_CENTER";
    readonly FedexGroundTerminal: "FEDEX_GROUND_TERMINAL";
    readonly FedexHomeDeliveryStation: "FEDEX_HOME_DELIVERY_STATION";
    readonly FedexOffice: "FEDEX_OFFICE";
    readonly FedexOnsite: "FEDEX_ONSITE";
    readonly FedexSelfServiceLocation: "FEDEX_SELF_SERVICE_LOCATION";
    readonly FedexShipAndGet: "FEDEX_SHIP_AND_GET";
    readonly FedexSmartPostHub: "FEDEX_SMART_POST_HUB";
};
export type LabelHoldLocationType = (typeof labelHoldLocationType)[keyof typeof labelHoldLocationType];
export declare const labelHomeDeliveryPremiumType: {
    readonly Appointment: "APPOINTMENT";
    readonly DateCertain: "DATE_CERTAIN";
    readonly Evening: "EVENING";
};
export type LabelHomeDeliveryPremiumType = (typeof labelHomeDeliveryPremiumType)[keyof typeof labelHomeDeliveryPremiumType];
export declare const labelMergeStatus: {
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly Merging: "MERGING";
    readonly Pending: "PENDING";
};
export type LabelMergeStatus = (typeof labelMergeStatus)[keyof typeof labelMergeStatus];
export declare const labelNonDeliveryOptionType: {
    readonly Abandon: "ABANDON";
    readonly Forward: "FORWARD";
    readonly ReturnAfterRetention: "RETURN_AFTER_RETENTION";
    readonly ReturnImmediately: "RETURN_IMMEDIATELY";
};
export type LabelNonDeliveryOptionType = (typeof labelNonDeliveryOptionType)[keyof typeof labelNonDeliveryOptionType];
export declare const labelNonDeliveryTransportType: {
    readonly Air: "AIR";
    readonly MostEconomical: "MOST_ECONOMICAL";
};
export type LabelNonDeliveryTransportType = (typeof labelNonDeliveryTransportType)[keyof typeof labelNonDeliveryTransportType];
export declare const labelPackageSpecialServiceType: {
    readonly Alcohol: "ALCOHOL";
    readonly Battery: "BATTERY";
    readonly DangerousGoods: "DANGEROUS_GOODS";
    readonly DryIce: "DRY_ICE";
    readonly NonStandardContainer: "NON_STANDARD_CONTAINER";
    readonly PriorityAlert: "PRIORITY_ALERT";
    readonly SignatureOption: "SIGNATURE_OPTION";
};
export type LabelPackageSpecialServiceType = (typeof labelPackageSpecialServiceType)[keyof typeof labelPackageSpecialServiceType];
export declare const labelPackingGroup: {
    readonly I: "I";
    readonly Ii: "II";
    readonly Iii: "III";
};
export type LabelPackingGroup = (typeof labelPackingGroup)[keyof typeof labelPackingGroup];
export declare const labelReferenceType: {
    readonly CustomerReference: "CUSTOMER_REFERENCE";
    readonly DepartmentNumber: "DEPARTMENT_NUMBER";
    readonly InvoiceNumber: "INVOICE_NUMBER";
    readonly PurchaseOrder: "PURCHASE_ORDER";
    readonly RmaNumber: "RMA_NUMBER";
    readonly ShipmentIntegrity: "SHIPMENT_INTEGRITY";
};
export type LabelReferenceType = (typeof labelReferenceType)[keyof typeof labelReferenceType];
export declare const labelReturnType: {
    readonly FedexTag: "FEDEX_TAG";
    readonly Pending: "PENDING";
    readonly PrintReturnLabel: "PRINT_RETURN_LABEL";
};
export type LabelReturnType = (typeof labelReturnType)[keyof typeof labelReturnType];
export declare const labelSignatureOptionType: {
    readonly Adult: "ADULT";
    readonly Default: "DEFAULT";
    readonly Direct: "DIRECT";
    readonly Indirect: "INDIRECT";
    readonly None: "NONE";
};
export type LabelSignatureOptionType = (typeof labelSignatureOptionType)[keyof typeof labelSignatureOptionType];
export declare const labelSize: {
    readonly EightByEleven: "EIGHT_BY_ELEVEN";
    readonly FourByEight: "FOUR_BY_EIGHT";
    readonly FourBySix: "FOUR_BY_SIX";
};
export type LabelSize = (typeof labelSize)[keyof typeof labelSize];
export declare const labelSpecialServiceType: {
    readonly Alcohol: "ALCOHOL";
    readonly Battery: "BATTERY";
    readonly BrokerSelectOption: "BROKER_SELECT_OPTION";
    readonly Cod: "COD";
    readonly DangerousGoods: "DANGEROUS_GOODS";
    readonly DryIce: "DRY_ICE";
    readonly ElectronicTradeDocuments: "ELECTRONIC_TRADE_DOCUMENTS";
    readonly EventNotification: "EVENT_NOTIFICATION";
    readonly HoldAtLocation: "HOLD_AT_LOCATION";
    readonly HomeDeliveryPremium: "HOME_DELIVERY_PREMIUM";
    readonly InsideDelivery: "INSIDE_DELIVERY";
    readonly InternationalControlledExport: "INTERNATIONAL_CONTROLLED_EXPORT";
    readonly NonStandardContainer: "NON_STANDARD_CONTAINER";
    readonly PriorityAlert: "PRIORITY_ALERT";
    readonly ReturnShipment: "RETURN_SHIPMENT";
    readonly ReturnsClearance: "RETURNS_CLEARANCE";
    readonly SaturdayDelivery: "SATURDAY_DELIVERY";
    readonly SaturdayPickup: "SATURDAY_PICKUP";
    readonly SignatureOption: "SIGNATURE_OPTION";
    readonly ThirdPartyConsignee: "THIRD_PARTY_CONSIGNEE";
};
export type LabelSpecialServiceType = (typeof labelSpecialServiceType)[keyof typeof labelSpecialServiceType];
export declare const labelStatusType: {
    readonly Created: "CREATED";
    readonly Voided: "VOIDED";
};
export type LabelStatusType = (typeof labelStatusType)[keyof typeof labelStatusType];
export declare const labelTaxIdType: {
    readonly Cnp: "CNP";
    readonly Cpf: "CPF";
    readonly Cuil: "CUIL";
    readonly Curp: "CURP";
    readonly Dan: "DAN";
    readonly Dni: "DNI";
    readonly Dtf: "DTF";
    readonly Dun: "DUN";
    readonly Ein: "EIN";
    readonly Eori: "EORI";
    readonly EuEori: "EU_EORI";
    readonly Fed: "FED";
    readonly Ftpc: "FTPC";
    readonly Ftz: "FTZ";
    readonly GbEori: "GB_EORI";
    readonly Gst: "GST";
    readonly Hmrc: "HMRC";
    readonly Ioss: "IOSS";
    readonly Lvg: "LVG";
    readonly Npwp: "NPWP";
    readonly Osr: "OSR";
    readonly Pan: "PAN";
    readonly Pcc: "PCC";
    readonly Pccc: "PCCC";
    readonly Rfc: "RFC";
    readonly Run: "RUN";
    readonly SaVat: "SA_VAT";
    readonly Ssn: "SSN";
    readonly Sta: "STA";
    readonly Tan: "TAN";
    readonly Tin: "TIN";
    readonly Trn: "TRN";
    readonly UaeTrn: "UAE_TRN";
    readonly Voec: "VOEC";
    readonly VoecNo: "VOEC_NO";
};
export type LabelTaxIdType = (typeof labelTaxIdType)[keyof typeof labelTaxIdType];
export declare const labelTermType: {
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
};
export type LabelTermType = (typeof labelTermType)[keyof typeof labelTermType];
export declare const landedCostAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
    readonly Item: "ITEM";
    readonly OrderTotal: "ORDER_TOTAL";
    readonly PromoCode: "PROMO_CODE";
    readonly Shipping: "SHIPPING";
};
export type LandedCostAdjustmentType = (typeof landedCostAdjustmentType)[keyof typeof landedCostAdjustmentType];
export declare const landedCostAmountTargetType: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly ItemProvided: "ITEM_PROVIDED";
    readonly MerchantBase: "MERCHANT_BASE";
    readonly MerchantProvided: "MERCHANT_PROVIDED";
    readonly MerchantSettled: "MERCHANT_SETTLED";
    readonly ShopperPresented: "SHOPPER_PRESENTED";
    readonly ZonosBase: "ZONOS_BASE";
};
export type LandedCostAmountTargetType = (typeof landedCostAmountTargetType)[keyof typeof landedCostAmountTargetType];
export declare const landedCostBillingPartyType: {
    readonly Customer: "CUSTOMER";
    readonly Merchant: "MERCHANT";
    readonly ThirdParty: "THIRD_PARTY";
    readonly Zonos: "ZONOS";
};
export type LandedCostBillingPartyType = (typeof landedCostBillingPartyType)[keyof typeof landedCostBillingPartyType];
export declare const landedCostBillingRuleDetailCategoryIdCreateType: {
    readonly Adjustment: "ADJUSTMENT";
    readonly ApiCrossDocking: "API_CROSS_DOCKING";
    readonly ApiCurrencyConversionFeeDiscount: "API_CURRENCY_CONVERSION_FEE_DISCOUNT";
    readonly ApiGuaranteeOrder: "API_GUARANTEE_ORDER";
    readonly ApiGuaranteeOrderLegacy: "API_GUARANTEE_ORDER_LEGACY";
    readonly ApiGuaranteePercent: "API_GUARANTEE_PERCENT";
    readonly ApiGuaranteePercentInclusive: "API_GUARANTEE_PERCENT_INCLUSIVE";
    readonly ApiGuaranteePercentRevenueShare: "API_GUARANTEE_PERCENT_REVENUE_SHARE";
    readonly ApiTransactionPercent: "API_TRANSACTION_PERCENT";
    readonly CheckoutCrossDocking: "CHECKOUT_CROSS_DOCKING";
    readonly CheckoutDutyTaxFeeIglobal: "CHECKOUT_DUTY_TAX_FEE_IGLOBAL";
    readonly CheckoutFraudCoverage: "CHECKOUT_FRAUD_COVERAGE";
    readonly CheckoutGuaranteeOrder: "CHECKOUT_GUARANTEE_ORDER";
    readonly CheckoutGuaranteeOrderLegacy: "CHECKOUT_GUARANTEE_ORDER_LEGACY";
    readonly CheckoutGuaranteePercent: "CHECKOUT_GUARANTEE_PERCENT";
    readonly CheckoutGuaranteePercentIglobal: "CHECKOUT_GUARANTEE_PERCENT_IGLOBAL";
    readonly CheckoutItemDiscountIglobal: "CHECKOUT_ITEM_DISCOUNT_IGLOBAL";
    readonly CheckoutMerchantFeeAdditionalInternational: "CHECKOUT_MERCHANT_FEE_ADDITIONAL_INTERNATIONAL";
    readonly CheckoutMerchantFeeAmount: "CHECKOUT_MERCHANT_FEE_AMOUNT";
    readonly CheckoutMerchantFeePaypalPercent: "CHECKOUT_MERCHANT_FEE_PAYPAL_PERCENT";
    readonly CheckoutMerchantFeePercent: "CHECKOUT_MERCHANT_FEE_PERCENT";
    readonly CheckoutMerchantProcessing: "CHECKOUT_MERCHANT_PROCESSING";
    readonly CheckoutShippingIglobal: "CHECKOUT_SHIPPING_IGLOBAL";
    readonly CheckoutTransactionPercent: "CHECKOUT_TRANSACTION_PERCENT";
    readonly CollectGuaranteeOrder: "COLLECT_GUARANTEE_ORDER";
    readonly CollectGuaranteePercent: "COLLECT_GUARANTEE_PERCENT";
    readonly CollectOrder: "COLLECT_ORDER";
    readonly CollectPercent: "COLLECT_PERCENT";
    readonly CollectTransactionOrder: "COLLECT_TRANSACTION_ORDER";
    readonly DutyRemittanceUs: "DUTY_REMITTANCE_US";
    readonly EtsyGuaranteeOrder: "ETSY_GUARANTEE_ORDER";
    readonly EtsyGuaranteePercent: "ETSY_GUARANTEE_PERCENT";
    readonly EtsyMerchantFeePercent: "ETSY_MERCHANT_FEE_PERCENT";
    readonly FranceCustomsTax: "FRANCE_CUSTOMS_TAX";
    readonly GuaranteeOrder: "GUARANTEE_ORDER";
    readonly ShopifyGuaranteeOrder: "SHOPIFY_GUARANTEE_ORDER";
    readonly ShopifyGuaranteeOrderLegacy: "SHOPIFY_GUARANTEE_ORDER_LEGACY";
    readonly ShopifyGuaranteePercent: "SHOPIFY_GUARANTEE_PERCENT";
    readonly ShopifyGuaranteePercentInclusive: "SHOPIFY_GUARANTEE_PERCENT_INCLUSIVE";
    readonly ShopifyTransactionPercent: "SHOPIFY_TRANSACTION_PERCENT";
    readonly Tax: "TAX";
    readonly TransactionOrder: "TRANSACTION_ORDER";
    readonly ZonosShipping: "ZONOS_SHIPPING";
};
export type LandedCostBillingRuleDetailCategoryIdCreateType = (typeof landedCostBillingRuleDetailCategoryIdCreateType)[keyof typeof landedCostBillingRuleDetailCategoryIdCreateType];
export declare const landedCostCalculationMethod: {
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
    readonly DdpAndDap: "DDP_AND_DAP";
    readonly DdpPreferred: "DDP_PREFERRED";
    readonly ZonosConfigured: "ZONOS_CONFIGURED";
};
export type LandedCostCalculationMethod = (typeof landedCostCalculationMethod)[keyof typeof landedCostCalculationMethod];
export declare const landedCostEndUse: {
    readonly Documents: "DOCUMENTS";
    readonly ForResale: "FOR_RESALE";
    readonly Gift: "GIFT";
    readonly NotForResale: "NOT_FOR_RESALE";
    readonly Return: "RETURN";
};
export type LandedCostEndUse = (typeof landedCostEndUse)[keyof typeof landedCostEndUse];
export declare const landedCostEntryTypeExclusionCategory: {
    readonly AntiDumping: "ANTI_DUMPING";
    readonly Countervailing: "COUNTERVAILING";
    readonly Quota: "QUOTA";
};
export type LandedCostEntryTypeExclusionCategory = (typeof landedCostEntryTypeExclusionCategory)[keyof typeof landedCostEntryTypeExclusionCategory];
export declare const landedCostFeeType: {
    readonly AdditionalTariffLines: "ADDITIONAL_TARIFF_LINES";
    readonly Adjustment: "ADJUSTMENT";
    readonly Advancement: "ADVANCEMENT";
    readonly BondFee: "BOND_FEE";
    readonly BrokerageFee: "BROKERAGE_FEE";
    readonly Buffer: "BUFFER";
    readonly Cod: "COD";
    readonly CollectOrder: "COLLECT_ORDER";
    readonly CollectPercent: "COLLECT_PERCENT";
    readonly Country: "COUNTRY";
    readonly CurrencyConversionFee: "CURRENCY_CONVERSION_FEE";
    readonly DdpServiceFee: "DDP_SERVICE_FEE";
    readonly Disbursement: "DISBURSEMENT";
    readonly DisbursementFee: "DISBURSEMENT_FEE";
    readonly DisbursementProcessing: "DISBURSEMENT_PROCESSING";
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly DutyFx: "DUTY_FX";
    readonly DutyItem: "DUTY_ITEM";
    readonly DutyShipping: "DUTY_SHIPPING";
    readonly GuaranteeOrder: "GUARANTEE_ORDER";
    readonly GuaranteePercent: "GUARANTEE_PERCENT";
    readonly InclusivePriceAdjustment: "INCLUSIVE_PRICE_ADJUSTMENT";
    readonly InclusivePricing: "INCLUSIVE_PRICING";
    readonly Item: "ITEM";
    readonly LandedCost: "LANDED_COST";
    readonly Other: "OTHER";
    readonly PartnerRevShare: "PARTNER_REV_SHARE";
    readonly PddpSurcharge: "PDDP_SURCHARGE";
    readonly PrepayDisbursement: "PREPAY_DISBURSEMENT";
    readonly PrepayDisbursementFee: "PREPAY_DISBURSEMENT_FEE";
    readonly PrepayFee: "PREPAY_FEE";
    readonly PrepayPercent: "PREPAY_PERCENT";
    readonly PrepayPhotoDiscount: "PREPAY_PHOTO_DISCOUNT";
    readonly RemittanceAmountRevenueShare: "REMITTANCE_AMOUNT_REVENUE_SHARE";
    readonly RemittanceFee: "REMITTANCE_FEE";
    readonly Shipping: "SHIPPING";
    readonly Tax: "TAX";
    readonly Transaction: "TRANSACTION";
    readonly ZonosAccessFee: "ZONOS_ACCESS_FEE";
    readonly ZonosLandedCost: "ZONOS_LANDED_COST";
    readonly ZonosLandedCostGuarantee: "ZONOS_LANDED_COST_GUARANTEE";
    readonly ZonosMerchantFee: "ZONOS_MERCHANT_FEE";
    readonly ZonosMerchantProcessing: "ZONOS_MERCHANT_PROCESSING";
    readonly ZonosTransaction: "ZONOS_TRANSACTION";
};
export type LandedCostFeeType = (typeof landedCostFeeType)[keyof typeof landedCostFeeType];
export declare const landedCostGuaranteeCode: {
    readonly CollectRemittance: "COLLECT_REMITTANCE";
    readonly Guaranteed: "GUARANTEED";
    readonly GuaranteedImport: "GUARANTEED_IMPORT";
    readonly GuaranteedRemit: "GUARANTEED_REMIT";
    readonly InclusivePrice: "INCLUSIVE_PRICE";
    readonly NotApplicable: "NOT_APPLICABLE";
    readonly PostalDdp: "POSTAL_DDP";
    readonly PostalDdpInclusivePrice: "POSTAL_DDP_INCLUSIVE_PRICE";
    readonly Zonos: "ZONOS";
    readonly ZonosImport: "ZONOS_IMPORT";
    readonly ZonosRemit: "ZONOS_REMIT";
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
export declare const landedCostPaymentProcessor: {
    readonly Airwallex: "AIRWALLEX";
    readonly Paypal: "PAYPAL";
    readonly Stripe: "STRIPE";
};
export type LandedCostPaymentProcessor = (typeof landedCostPaymentProcessor)[keyof typeof landedCostPaymentProcessor];
export declare const landedCostQuoteType: {
    readonly Api: "API";
    readonly Auditing: "AUDITING";
    readonly CarrierPay: "CARRIER_PAY";
    readonly CbpAssessed: "CBP_ASSESSED";
    readonly Checkout: "CHECKOUT";
    readonly Collect: "COLLECT";
    readonly DeclarationData: "DECLARATION_DATA";
    readonly Draft: "DRAFT";
    readonly Hello: "HELLO";
    readonly InclusiveConfiguration: "INCLUSIVE_CONFIGURATION";
    readonly InclusivePrice: "INCLUSIVE_PRICE";
    readonly Invoice: "INVOICE";
    readonly InvoiceCollect: "INVOICE_COLLECT";
    readonly LabelCollect: "LABEL_COLLECT";
    readonly PrepayCollect: "PREPAY_COLLECT";
    readonly PrepayInvoice: "PREPAY_INVOICE";
};
export type LandedCostQuoteType = (typeof landedCostQuoteType)[keyof typeof landedCostQuoteType];
export declare const landedCostSettingsEntryTypeExclusionCategory: {
    readonly AntiDumping: "ANTI_DUMPING";
    readonly Countervailing: "COUNTERVAILING";
    readonly Quota: "QUOTA";
};
export type LandedCostSettingsEntryTypeExclusionCategory = (typeof landedCostSettingsEntryTypeExclusionCategory)[keyof typeof landedCostSettingsEntryTypeExclusionCategory];
export declare const landedCostSettingsHsCodeConsolidationType: {
    readonly Hs10: "HS10";
    readonly Hs10Coo: "HS10_COO";
    readonly Hs6: "HS6";
    readonly Hs6Coo: "HS6_COO";
    readonly None: "NONE";
};
export type LandedCostSettingsHsCodeConsolidationType = (typeof landedCostSettingsHsCodeConsolidationType)[keyof typeof landedCostSettingsHsCodeConsolidationType];
export declare const landedCostTariffRate: {
    readonly Exact: "EXACT";
    readonly Maximum: "MAXIMUM";
    readonly Median: "MEDIAN";
    readonly Minimum: "MINIMUM";
    readonly ZonosPreferred: "ZONOS_PREFERRED";
};
export type LandedCostTariffRate = (typeof landedCostTariffRate)[keyof typeof landedCostTariffRate];
export declare const landedCostTaxRemittanceCalculationType: {
    readonly NoRemittance: "NO_REMITTANCE";
    readonly Remittance: "REMITTANCE";
};
export type LandedCostTaxRemittanceCalculationType = (typeof landedCostTaxRemittanceCalculationType)[keyof typeof landedCostTaxRemittanceCalculationType];
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
export declare const laneRuleAccess: {
    readonly Ddp: "DDP";
    readonly LcGuarantee: "LC_GUARANTEE";
    readonly PostalOperator: "POSTAL_OPERATOR";
    readonly PostalOperatorMerchant: "POSTAL_OPERATOR_MERCHANT";
};
export type LaneRuleAccess = (typeof laneRuleAccess)[keyof typeof laneRuleAccess];
export declare const laneRuleOperator: {
    readonly Eq: "EQ";
    readonly Gt: "GT";
    readonly Gte: "GTE";
    readonly Lt: "LT";
    readonly Lte: "LTE";
    readonly Neq: "NEQ";
};
export type LaneRuleOperator = (typeof laneRuleOperator)[keyof typeof laneRuleOperator];
export declare const laneRuleSubject: {
    readonly Cif: "CIF";
    readonly Cost: "COST";
    readonly Duty: "DUTY";
    readonly ItemsTotal: "ITEMS_TOTAL";
    readonly Tax: "TAX";
};
export type LaneRuleSubject = (typeof laneRuleSubject)[keyof typeof laneRuleSubject];
export declare const laneThresholdType: {
    readonly Duty: "DUTY";
    readonly Tax: "TAX";
};
export type LaneThresholdType = (typeof laneThresholdType)[keyof typeof laneThresholdType];
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
export declare const levyAttributeGateStatus: {
    readonly Allowed: "ALLOWED";
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type LevyAttributeGateStatus = (typeof levyAttributeGateStatus)[keyof typeof levyAttributeGateStatus];
export declare const linkType: {
    readonly AccountOnboarding: "ACCOUNT_ONBOARDING";
    readonly AccountUpdate: "ACCOUNT_UPDATE";
};
export type LinkType = (typeof linkType)[keyof typeof linkType];
export declare const locationValidationStatus: {
    readonly PartiallyVerified: "PARTIALLY_VERIFIED";
    readonly Unverified: "UNVERIFIED";
    readonly Verified: "VERIFIED";
};
export type LocationValidationStatus = (typeof locationValidationStatus)[keyof typeof locationValidationStatus];
export declare const locationVerifier: {
    readonly Melissa: "MELISSA";
};
export type LocationVerifier = (typeof locationVerifier)[keyof typeof locationVerifier];
export declare const magentoStockStatus: {
    readonly InStock: "IN_STOCK";
    readonly OutOfStock: "OUT_OF_STOCK";
    readonly PartiallyAllocable: "PARTIALLY_ALLOCABLE";
};
export type MagentoStockStatus = (typeof magentoStockStatus)[keyof typeof magentoStockStatus];
export declare const manifestDataSource: {
    readonly Cardit: "CARDIT";
    readonly Precon: "PRECON";
    readonly Predes: "PREDES";
    readonly Resdit: "RESDIT";
};
export type ManifestDataSource = (typeof manifestDataSource)[keyof typeof manifestDataSource];
export declare const manifestIncotermCode: {
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
};
export type ManifestIncotermCode = (typeof manifestIncotermCode)[keyof typeof manifestIncotermCode];
export declare const manifestItemMeasurementType: {
    readonly AlcoholByVolume: "ALCOHOL_BY_VOLUME";
    readonly Height: "HEIGHT";
    readonly Length: "LENGTH";
    readonly TotalWeight: "TOTAL_WEIGHT";
    readonly Volume: "VOLUME";
    readonly Weight: "WEIGHT";
    readonly Width: "WIDTH";
};
export type ManifestItemMeasurementType = (typeof manifestItemMeasurementType)[keyof typeof manifestItemMeasurementType];
export declare const manifestItemUnitOfMeasure: {
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
export type ManifestItemUnitOfMeasure = (typeof manifestItemUnitOfMeasure)[keyof typeof manifestItemUnitOfMeasure];
export declare const manifestLineClearanceOwner: {
    readonly Brokerage: "BROKERAGE";
    readonly Manifest: "MANIFEST";
};
export type ManifestLineClearanceOwner = (typeof manifestLineClearanceOwner)[keyof typeof manifestLineClearanceOwner];
export declare const manifestLineEndUse: {
    readonly Documents: "DOCUMENTS";
    readonly ForResale: "FOR_RESALE";
    readonly Gift: "GIFT";
    readonly NotForResale: "NOT_FOR_RESALE";
    readonly Return: "RETURN";
};
export type ManifestLineEndUse = (typeof manifestLineEndUse)[keyof typeof manifestLineEndUse];
export declare const manifestLineEntryTypeExclusionCategory: {
    readonly AntiDumping: "ANTI_DUMPING";
    readonly Countervailing: "COUNTERVAILING";
    readonly Quota: "QUOTA";
};
export type ManifestLineEntryTypeExclusionCategory = (typeof manifestLineEntryTypeExclusionCategory)[keyof typeof manifestLineEntryTypeExclusionCategory];
export declare const manifestPartyType: {
    readonly Destination: "DESTINATION";
    readonly Origin: "ORIGIN";
    readonly Payee: "PAYEE";
    readonly Payor: "PAYOR";
};
export type ManifestPartyType = (typeof manifestPartyType)[keyof typeof manifestPartyType];
export declare const manifestSource: {
    readonly Api: "API";
    readonly Ipc: "IPC";
    readonly Other: "OTHER";
    readonly PddpReconciliation: "PDDP_RECONCILIATION";
    readonly Post: "POST";
    readonly Upu: "UPU";
    readonly Usps: "USPS";
};
export type ManifestSource = (typeof manifestSource)[keyof typeof manifestSource];
export declare const manifestType: {
    readonly Brokerage: "BROKERAGE";
    readonly Standard: "STANDARD";
};
export type ManifestType = (typeof manifestType)[keyof typeof manifestType];
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
export declare const manualCredentialFieldRequirement: {
    readonly Optional: "OPTIONAL";
    readonly Required: "REQUIRED";
};
export type ManualCredentialFieldRequirement = (typeof manualCredentialFieldRequirement)[keyof typeof manualCredentialFieldRequirement];
export declare const manualCredentialFieldType: {
    readonly Password: "PASSWORD";
    readonly Text: "TEXT";
};
export type ManualCredentialFieldType = (typeof manualCredentialFieldType)[keyof typeof manualCredentialFieldType];
export declare const markDraftPendingAtMonthStartStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type MarkDraftPendingAtMonthStartStatus = (typeof markDraftPendingAtMonthStartStatus)[keyof typeof markDraftPendingAtMonthStartStatus];
export declare const marketProfileContext: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type MarketProfileContext = (typeof marketProfileContext)[keyof typeof marketProfileContext];
export declare const matchType: {
    readonly ExactMatch: "EXACT_MATCH";
    readonly NoMatch: "NO_MATCH";
    readonly PartialMatch: "PARTIAL_MATCH";
};
export type MatchType = (typeof matchType)[keyof typeof matchType];
export declare const measureDirection: {
    readonly Export: "EXPORT";
    readonly Import: "IMPORT";
};
export type MeasureDirection = (typeof measureDirection)[keyof typeof measureDirection];
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
export declare const modelVersion: {
    readonly Beta: "BETA";
    readonly Current: "CURRENT";
};
export type ModelVersion = (typeof modelVersion)[keyof typeof modelVersion];
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
export declare const notificationChannel: {
    readonly Email: "EMAIL";
    readonly Text: "TEXT";
    readonly Whatsapp: "WHATSAPP";
};
export type NotificationChannel = (typeof notificationChannel)[keyof typeof notificationChannel];
export declare const notificationFrequency: {
    readonly Daily: "DAILY";
    readonly Weekly: "WEEKLY";
};
export type NotificationFrequency = (typeof notificationFrequency)[keyof typeof notificationFrequency];
export declare const onboardSubscriptionType: {
    readonly DashboardLite: "DASHBOARD_LITE";
    readonly FreeTrial: "FREE_TRIAL";
    readonly PostalOperator: "POSTAL_OPERATOR";
};
export type OnboardSubscriptionType = (typeof onboardSubscriptionType)[keyof typeof onboardSubscriptionType];
export declare const orderBillingAdjustmentFeeType: {
    readonly AdditionalTariffLines: "ADDITIONAL_TARIFF_LINES";
    readonly Adjustment: "ADJUSTMENT";
    readonly Advancement: "ADVANCEMENT";
    readonly BrokerageFee: "BROKERAGE_FEE";
    readonly Buffer: "BUFFER";
    readonly Cod: "COD";
    readonly CollectOrder: "COLLECT_ORDER";
    readonly CollectPercent: "COLLECT_PERCENT";
    readonly Country: "COUNTRY";
    readonly CurrencyConversionFee: "CURRENCY_CONVERSION_FEE";
    readonly DdpServiceFee: "DDP_SERVICE_FEE";
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly FxFee: "FX_FEE";
    readonly FxFeeNonRefundedAmounts: "FX_FEE_NON_REFUNDED_AMOUNTS";
    readonly GeneralAdjustment: "GENERAL_ADJUSTMENT";
    readonly GuaranteeOrder: "GUARANTEE_ORDER";
    readonly GuaranteePercent: "GUARANTEE_PERCENT";
    readonly InclusivePriceAdjustment: "INCLUSIVE_PRICE_ADJUSTMENT";
    readonly InclusivePricing: "INCLUSIVE_PRICING";
    readonly Item: "ITEM";
    readonly Other: "OTHER";
    readonly Shipping: "SHIPPING";
    readonly StoreCredit: "STORE_CREDIT";
    readonly Tax: "TAX";
    readonly ZonosLandedCost: "ZONOS_LANDED_COST";
    readonly ZonosMerchantProcessing: "ZONOS_MERCHANT_PROCESSING";
    readonly ZonosTransaction: "ZONOS_TRANSACTION";
};
export type OrderBillingAdjustmentFeeType = (typeof orderBillingAdjustmentFeeType)[keyof typeof orderBillingAdjustmentFeeType];
export declare const orderBillingAdjustmentType: {
    readonly GeneralAdjustment: "GENERAL_ADJUSTMENT";
    readonly OrderCancel: "ORDER_CANCEL";
    readonly OrderCancelNoRefund: "ORDER_CANCEL_NO_REFUND";
    readonly OrderCreated: "ORDER_CREATED";
    readonly OrderModification: "ORDER_MODIFICATION";
    readonly OrderRefund: "ORDER_REFUND";
};
export type OrderBillingAdjustmentType = (typeof orderBillingAdjustmentType)[keyof typeof orderBillingAdjustmentType];
export declare const orderCombinationRefundDistributionStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type OrderCombinationRefundDistributionStatus = (typeof orderCombinationRefundDistributionStatus)[keyof typeof orderCombinationRefundDistributionStatus];
export declare const orderCompleteBillingMethod: {
    readonly BillingDgs: "BILLING_DGS";
    readonly Legacy: "LEGACY";
};
export type OrderCompleteBillingMethod = (typeof orderCompleteBillingMethod)[keyof typeof orderCompleteBillingMethod];
export declare const orderDirection: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
export type OrderDirection = (typeof orderDirection)[keyof typeof orderDirection];
export declare const orderMerchantOfRecordType: {
    readonly Merchant: "MERCHANT";
    readonly Zonos: "ZONOS";
};
export type OrderMerchantOfRecordType = (typeof orderMerchantOfRecordType)[keyof typeof orderMerchantOfRecordType];
export declare const orderModificationStatus: {
    readonly Committed: "COMMITTED";
    readonly Pending: "PENDING";
    readonly Voided: "VOIDED";
};
export type OrderModificationStatus = (typeof orderModificationStatus)[keyof typeof orderModificationStatus];
export declare const orderNoteType: {
    readonly Comment: "COMMENT";
    readonly NotificationSent: "NOTIFICATION_SENT";
    readonly OrderChange: "ORDER_CHANGE";
    readonly Shipment: "SHIPMENT";
    readonly Status: "STATUS";
};
export type OrderNoteType = (typeof orderNoteType)[keyof typeof orderNoteType];
export declare const orderPaymentAuthorizationExpirationBehavior: {
    readonly Capture: "CAPTURE";
    readonly Ignore: "IGNORE";
    readonly Void: "VOID";
};
export type OrderPaymentAuthorizationExpirationBehavior = (typeof orderPaymentAuthorizationExpirationBehavior)[keyof typeof orderPaymentAuthorizationExpirationBehavior];
export declare const orderPaymentStatus: {
    readonly Paid: "PAID";
    readonly PartiallyRefunded: "PARTIALLY_REFUNDED";
    readonly Refunded: "REFUNDED";
    readonly Unpaid: "UNPAID";
    readonly Voided: "VOIDED";
};
export type OrderPaymentStatus = (typeof orderPaymentStatus)[keyof typeof orderPaymentStatus];
export declare const orderRefundSubtotalType: {
    readonly Discount: "DISCOUNT";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
    readonly StoreCredit: "STORE_CREDIT";
};
export type OrderRefundSubtotalType = (typeof orderRefundSubtotalType)[keyof typeof orderRefundSubtotalType];
export declare const orderRelationType: {
    readonly Combination: "COMBINATION";
    readonly Replacement: "REPLACEMENT";
};
export type OrderRelationType = (typeof orderRelationType)[keyof typeof orderRelationType];
export declare const orderReturnIneligibleReason: {
    readonly NotDomestic: "NOT_DOMESTIC";
    readonly NotFulfilled: "NOT_FULFILLED";
};
export type OrderReturnIneligibleReason = (typeof orderReturnIneligibleReason)[keyof typeof orderReturnIneligibleReason];
export declare const orderReturnLabelSource: {
    readonly External: "EXTERNAL";
    readonly None: "NONE";
    readonly ZonosGenerated: "ZONOS_GENERATED";
};
export type OrderReturnLabelSource = (typeof orderReturnLabelSource)[keyof typeof orderReturnLabelSource];
export declare const orderReturnLineDisposition: {
    readonly Damaged: "DAMAGED";
    readonly Destroy: "DESTROY";
    readonly Restock: "RESTOCK";
};
export type OrderReturnLineDisposition = (typeof orderReturnLineDisposition)[keyof typeof orderReturnLineDisposition];
export declare const orderReturnLineReason: {
    readonly ChangedMind: "CHANGED_MIND";
    readonly DamagedInTransit: "DAMAGED_IN_TRANSIT";
    readonly Defective: "DEFECTIVE";
    readonly NotAsDescribed: "NOT_AS_DESCRIBED";
    readonly Other: "OTHER";
    readonly WrongItem: "WRONG_ITEM";
};
export type OrderReturnLineReason = (typeof orderReturnLineReason)[keyof typeof orderReturnLineReason];
export declare const orderReturnStatus: {
    readonly Approved: "APPROVED";
    readonly Canceled: "CANCELED";
    readonly Completed: "COMPLETED";
    readonly InTransit: "IN_TRANSIT";
    readonly Inspected: "INSPECTED";
    readonly LabelIssued: "LABEL_ISSUED";
    readonly Received: "RECEIVED";
    readonly Rejected: "REJECTED";
    readonly Requested: "REQUESTED";
};
export type OrderReturnStatus = (typeof orderReturnStatus)[keyof typeof orderReturnStatus];
export declare const orderStatus: {
    readonly Canceled: "CANCELED";
    readonly Combined: "COMBINED";
    readonly Completed: "COMPLETED";
    readonly FraudHold: "FRAUD_HOLD";
    readonly Hold: "HOLD";
    readonly InTransitToConsolidationCenter: "IN_TRANSIT_TO_CONSOLIDATION_CENTER";
    readonly Open: "OPEN";
    readonly PartiallyShipped: "PARTIALLY_SHIPPED";
    readonly PaymentFailed: "PAYMENT_FAILED";
    readonly PaymentPending: "PAYMENT_PENDING";
};
export type OrderStatus = (typeof orderStatus)[keyof typeof orderStatus];
export declare const orderTagAssignmentSource: {
    readonly AutomationRule: "AUTOMATION_RULE";
    readonly Manual: "MANUAL";
};
export type OrderTagAssignmentSource = (typeof orderTagAssignmentSource)[keyof typeof orderTagAssignmentSource];
export declare const orderTransactionBillingMethod: {
    readonly BillingDgs: "BILLING_DGS";
    readonly Legacy: "LEGACY";
};
export type OrderTransactionBillingMethod = (typeof orderTransactionBillingMethod)[keyof typeof orderTransactionBillingMethod];
export declare const orderType: {
    readonly Api: "API";
    readonly CarrierPay: "CARRIER_PAY";
    readonly Checkout: "CHECKOUT";
    readonly Collect: "COLLECT";
    readonly DeclarationData: "DECLARATION_DATA";
    readonly Draft: "DRAFT";
    readonly Invoice: "INVOICE";
    readonly InvoiceCollect: "INVOICE_COLLECT";
    readonly LabelCollect: "LABEL_COLLECT";
    readonly PrepayCollect: "PREPAY_COLLECT";
    readonly PrepayInvoice: "PREPAY_INVOICE";
};
export type OrderType = (typeof orderType)[keyof typeof orderType];
export declare const organizationBusinessUnit: {
    readonly Ecommerce: "ECOMMERCE";
    readonly SupplyChain: "SUPPLY_CHAIN";
};
export type OrganizationBusinessUnit = (typeof organizationBusinessUnit)[keyof typeof organizationBusinessUnit];
export declare const organizationFeePricingExclusion: {
    readonly Document: "DOCUMENT";
    readonly QualifiedGift: "QUALIFIED_GIFT";
    readonly Return: "RETURN";
    readonly ZeroDuty: "ZERO_DUTY";
    readonly ZeroDutyTaxFee: "ZERO_DUTY_TAX_FEE";
    readonly ZeroFee: "ZERO_FEE";
};
export type OrganizationFeePricingExclusion = (typeof organizationFeePricingExclusion)[keyof typeof organizationFeePricingExclusion];
export declare const organizationFeePricingQualifierType: {
    readonly Organization: "ORGANIZATION";
    readonly ParentOrganization: "PARENT_ORGANIZATION";
    readonly ParentRevShare: "PARENT_REV_SHARE";
    readonly PrepayCollect: "PREPAY_COLLECT";
    readonly PrepayCollectPhotoDiscount: "PREPAY_COLLECT_PHOTO_DISCOUNT";
    readonly RevShare: "REV_SHARE";
};
export type OrganizationFeePricingQualifierType = (typeof organizationFeePricingQualifierType)[keyof typeof organizationFeePricingQualifierType];
export declare const organizationStatus: {
    readonly Active: "ACTIVE";
    readonly Archived: "ARCHIVED";
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
    readonly Consolidator: "CONSOLIDATOR";
    readonly Developer: "DEVELOPER";
    readonly EvolveBrokerage: "EVOLVE_BROKERAGE";
    readonly Government: "GOVERNMENT";
    readonly Integrator: "INTEGRATOR";
    readonly Logistics: "LOGISTICS";
    readonly LogisticsCollect: "LOGISTICS_COLLECT";
    readonly Marketplace: "MARKETPLACE";
    readonly MarketplaceSeller: "MARKETPLACE_SELLER";
    readonly OnlineStore: "ONLINE_STORE";
    readonly OnlineStoreFedex: "ONLINE_STORE_FEDEX";
    readonly Other: "OTHER";
    readonly Partner: "PARTNER";
    readonly Platform: "PLATFORM";
    readonly PlatformMerchant: "PLATFORM_MERCHANT";
    readonly PlatformVendor: "PLATFORM_VENDOR";
    readonly PostalOperator: "POSTAL_OPERATOR";
    readonly PostalOperatorMerchant: "POSTAL_OPERATOR_MERCHANT";
    readonly RetailCenter: "RETAIL_CENTER";
    readonly RetailHq: "RETAIL_HQ";
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
export declare const packagingOptionOptimizationType: {
    readonly CarrierFee: "CARRIER_FEE";
    readonly PackagingOption: "PACKAGING_OPTION";
};
export type PackagingOptionOptimizationType = (typeof packagingOptionOptimizationType)[keyof typeof packagingOptionOptimizationType];
export declare const packagingOptionSource: {
    readonly Default: "DEFAULT";
    readonly Dynamic: "DYNAMIC";
    readonly General: "GENERAL";
    readonly Kit: "KIT";
    readonly Organization: "ORGANIZATION";
    readonly Simulate: "SIMULATE";
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
export declare const packingGroup: {
    readonly I: "I";
    readonly Ii: "II";
    readonly Iii: "III";
};
export type PackingGroup = (typeof packingGroup)[keyof typeof packingGroup];
export declare const packingPreference: {
    readonly AssignedBox: "ASSIGNED_BOX";
    readonly Consolidated: "CONSOLIDATED";
    readonly ShipsAlone: "SHIPS_ALONE";
};
export type PackingPreference = (typeof packingPreference)[keyof typeof packingPreference];
export declare const packingSlipPageSize: {
    readonly FourByEight: "FOUR_BY_EIGHT";
    readonly FourBySix: "FOUR_BY_SIX";
    readonly Letter: "LETTER";
};
export type PackingSlipPageSize = (typeof packingSlipPageSize)[keyof typeof packingSlipPageSize];
export declare const packingSlipStatus: {
    readonly Failed: "FAILED";
    readonly Generated: "GENERATED";
    readonly Generating: "GENERATING";
};
export type PackingSlipStatus = (typeof packingSlipStatus)[keyof typeof packingSlipStatus];
export declare const partiesToTransaction: {
    readonly NonRelated: "NON_RELATED";
    readonly Related: "RELATED";
};
export type PartiesToTransaction = (typeof partiesToTransaction)[keyof typeof partiesToTransaction];
export declare const partyType: {
    readonly Consignee: "CONSIGNEE";
    readonly Destination: "DESTINATION";
    readonly Exporter: "EXPORTER";
    readonly ImporterOfRecord: "IMPORTER_OF_RECORD";
    readonly Manufacturer: "MANUFACTURER";
    readonly Origin: "ORIGIN";
    readonly Payee: "PAYEE";
    readonly Payor: "PAYOR";
    readonly PortOfEntry: "PORT_OF_ENTRY";
    readonly UltimateConsignee: "ULTIMATE_CONSIGNEE";
};
export type PartyType = (typeof partyType)[keyof typeof partyType];
export declare const paymentAttributionSource: {
    readonly InvoiceDetailReference: "INVOICE_DETAIL_REFERENCE";
    readonly InvoicePaymentMethod: "INVOICE_PAYMENT_METHOD";
    readonly OrderDetailReference: "ORDER_DETAIL_REFERENCE";
};
export type PaymentAttributionSource = (typeof paymentAttributionSource)[keyof typeof paymentAttributionSource];
export declare const paymentInstrumentAccountHolderType: {
    readonly Company: "COMPANY";
    readonly Individual: "INDIVIDUAL";
};
export type PaymentInstrumentAccountHolderType = (typeof paymentInstrumentAccountHolderType)[keyof typeof paymentInstrumentAccountHolderType];
export declare const paymentInstrumentAccountType: {
    readonly Checking: "CHECKING";
    readonly Other: "OTHER";
    readonly Savings: "SAVINGS";
};
export type PaymentInstrumentAccountType = (typeof paymentInstrumentAccountType)[keyof typeof paymentInstrumentAccountType];
export declare const paymentInstrumentStatus: {
    readonly Active: "ACTIVE";
    readonly Disabled: "DISABLED";
    readonly Expired: "EXPIRED";
};
export type PaymentInstrumentStatus = (typeof paymentInstrumentStatus)[keyof typeof paymentInstrumentStatus];
export declare const paymentInstrumentType: {
    readonly BankAccount: "BANK_ACCOUNT";
    readonly Card: "CARD";
};
export type PaymentInstrumentType = (typeof paymentInstrumentType)[keyof typeof paymentInstrumentType];
export declare const paymentInstrumentVaultProvider: {
    readonly BasisTheory: "BASIS_THEORY";
};
export type PaymentInstrumentVaultProvider = (typeof paymentInstrumentVaultProvider)[keyof typeof paymentInstrumentVaultProvider];
export declare const paymentInstrumentVaultStatus: {
    readonly Completed: "COMPLETED";
    readonly RequiresCustomerAction: "REQUIRES_CUSTOMER_ACTION";
};
export type PaymentInstrumentVaultStatus = (typeof paymentInstrumentVaultStatus)[keyof typeof paymentInstrumentVaultStatus];
export declare const paymentMethodRemoveType: {
    readonly Airwallex: "AIRWALLEX";
    readonly Stripe_1: "STRIPE_1";
    readonly Stripe_2: "STRIPE_2";
};
export type PaymentMethodRemoveType = (typeof paymentMethodRemoveType)[keyof typeof paymentMethodRemoveType];
export declare const paymentNetworkTokenStatus: {
    readonly Active: "ACTIVE";
    readonly Disabled: "DISABLED";
    readonly Suspended: "SUSPENDED";
};
export type PaymentNetworkTokenStatus = (typeof paymentNetworkTokenStatus)[keyof typeof paymentNetworkTokenStatus];
export declare const paymentProcessorCode: {
    readonly Airwallex: "AIRWALLEX";
    readonly Paypal: "PAYPAL";
    readonly StoreCredit: "STORE_CREDIT";
    readonly Stripe: "STRIPE";
    readonly StripeTransfer: "STRIPE_TRANSFER";
};
export type PaymentProcessorCode = (typeof paymentProcessorCode)[keyof typeof paymentProcessorCode];
export declare const paymentProcessorTokenStatus: {
    readonly Active: "ACTIVE";
    readonly Disabled: "DISABLED";
};
export type PaymentProcessorTokenStatus = (typeof paymentProcessorTokenStatus)[keyof typeof paymentProcessorTokenStatus];
export declare const paymentTokenProvider: {
    readonly AirwallexAu: "AIRWALLEX_AU";
    readonly AirwallexUs: "AIRWALLEX_US";
    readonly Stripe_1: "STRIPE_1";
    readonly Stripe_2: "STRIPE_2";
};
export type PaymentTokenProvider = (typeof paymentTokenProvider)[keyof typeof paymentTokenProvider];
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
export declare const paypalOrderIntent: {
    readonly Authorize: "AUTHORIZE";
    readonly Capture: "CAPTURE";
};
export type PaypalOrderIntent = (typeof paypalOrderIntent)[keyof typeof paypalOrderIntent];
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
export declare const personTaxIdentifierType: {
    readonly Other: "OTHER";
};
export type PersonTaxIdentifierType = (typeof personTaxIdentifierType)[keyof typeof personTaxIdentifierType];
export declare const pgaAgency: {
    readonly UsCpsc: "US_CPSC";
    readonly UsDot: "US_DOT";
    readonly UsEpa: "US_EPA";
    readonly UsFcc: "US_FCC";
    readonly UsFda: "US_FDA";
    readonly UsNmfs: "US_NMFS";
    readonly UsTtb: "US_TTB";
    readonly UsUsda: "US_USDA";
    readonly UsUsfws: "US_USFWS";
};
export type PgaAgency = (typeof pgaAgency)[keyof typeof pgaAgency];
export declare const pgaFilingStatus: {
    readonly Accepted: "ACCEPTED";
    readonly Pending: "PENDING";
    readonly Rejected: "REJECTED";
    readonly Submitted: "SUBMITTED";
};
export type PgaFilingStatus = (typeof pgaFilingStatus)[keyof typeof pgaFilingStatus];
export declare const pgaRequirementStrictness: {
    readonly Conditional: "CONDITIONAL";
    readonly Required: "REQUIRED";
};
export type PgaRequirementStrictness = (typeof pgaRequirementStrictness)[keyof typeof pgaRequirementStrictness];
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
export declare const platformType: {
    readonly Bigcommerce: "BIGCOMMERCE";
    readonly CustomApi: "CUSTOM_API";
    readonly Etsy: "ETSY";
    readonly Magento: "MAGENTO";
    readonly Magento_2: "MAGENTO_2";
    readonly Miva: "MIVA";
    readonly Opencart: "OPENCART";
    readonly Other: "OTHER";
    readonly Prestashop: "PRESTASHOP";
    readonly Salesforce: "SALESFORCE";
    readonly Shopify: "SHOPIFY";
    readonly ThreeDCart: "THREE_D_CART";
    readonly Volusion: "VOLUSION";
    readonly Woocommerce: "WOOCOMMERCE";
    readonly Xcart: "XCART";
};
export type PlatformType = (typeof platformType)[keyof typeof platformType];
export declare const pluginCredentialType: {
    readonly Private: "PRIVATE";
    readonly Public: "PUBLIC";
};
export type PluginCredentialType = (typeof pluginCredentialType)[keyof typeof pluginCredentialType];
export declare const postalOperatorCode: {
    readonly J1Ca18: "J1CA18";
    readonly J1Caea: "J1CAEA";
    readonly J1Cafa: "J1CAFA";
    readonly J1Caga: "J1CAGA";
    readonly J1Caia: "J1CAIA";
    readonly J1Cala: "J1CALA";
    readonly J1Cama: "J1CAMA";
    readonly J1Cana: "J1CANA";
    readonly J1Caoa: "J1CAOA";
    readonly J1Cara: "J1CARA";
    readonly J1Casa: "J1CASA";
    readonly J1Cata: "J1CATA";
    readonly J1Catf: "J1CATF";
    readonly J1Caua: "J1CAUA";
    readonly J1Cawa: "J1CAWA";
    readonly J1Caxa: "J1CAXA";
    readonly J1Caza: "J1CAZA";
    readonly J1Cbaa: "J1CBAA";
    readonly J1Cbab: "J1CBAB";
    readonly J1Cbac: "J1CBAC";
    readonly J1Cbaf: "J1CBAF";
    readonly J1Cbba: "J1CBBA";
    readonly J1Cbda: "J1CBDA";
    readonly J1Cbea: "J1CBEA";
    readonly J1Cbef: "J1CBEF";
    readonly J1Cbfa: "J1CBFA";
    readonly J1Cbga: "J1CBGA";
    readonly J1Cbha: "J1CBHA";
    readonly J1Cbia: "J1CBIA";
    readonly J1Cbja: "J1CBJA";
    readonly J1Cbma: "J1CBMA";
    readonly J1Cbna: "J1CBNA";
    readonly J1Cboa: "J1CBOA";
    readonly J1Cbqa: "J1CBQA";
    readonly J1Cbra: "J1CBRA";
    readonly J1Cbrf: "J1CBRF";
    readonly J1Cbsa: "J1CBSA";
    readonly J1Cbta: "J1CBTA";
    readonly J1Cbwa: "J1CBWA";
    readonly J1Cbya: "J1CBYA";
    readonly J1Cbza: "J1CBZA";
    readonly J1Cc20: "J1CC20";
    readonly J1Cc28: "J1CC28";
    readonly J1Ccaa: "J1CCAA";
    readonly J1Ccab: "J1CCAB";
    readonly J1Ccaf: "J1CCAF";
    readonly J1Ccda: "J1CCDA";
    readonly J1Ccfa: "J1CCFA";
    readonly J1Ccga: "J1CCGA";
    readonly J1Ccha: "J1CCHA";
    readonly J1Cchf: "J1CCHF";
    readonly J1Ccia: "J1CCIA";
    readonly J1Ccka: "J1CCKA";
    readonly J1Ccla: "J1CCLA";
    readonly J1Ccma: "J1CCMA";
    readonly J1Ccna: "J1CCNA";
    readonly J1Ccnf: "J1CCNF";
    readonly J1Ccoa: "J1CCOA";
    readonly J1Ccra: "J1CCRA";
    readonly J1Ccsf: "J1CCSF";
    readonly J1Ccua: "J1CCUA";
    readonly J1Ccva: "J1CCVA";
    readonly J1Ccvf: "J1CCVF";
    readonly J1Ccwa: "J1CCWA";
    readonly J1Ccya: "J1CCYA";
    readonly J1Ccza: "J1CCZA";
    readonly J1Cczf: "J1CCZF";
    readonly J1Cd00: "J1CD00";
    readonly J1Cd01: "J1CD01";
    readonly J1Cdea: "J1CDEA";
    readonly J1Cdeb: "J1CDEB";
    readonly J1Cdef: "J1CDEF";
    readonly J1Cdja: "J1CDJA";
    readonly J1Cdka: "J1CDKA";
    readonly J1Cdkb: "J1CDKB";
    readonly J1Cdkf: "J1CDKF";
    readonly J1Cdma: "J1CDMA";
    readonly J1Cdoa: "J1CDOA";
    readonly J1Cdza: "J1CDZA";
    readonly J1Ceca: "J1CECA";
    readonly J1Ceea: "J1CEEA";
    readonly J1Cega: "J1CEGA";
    readonly J1Cegf: "J1CEGF";
    readonly J1Cera: "J1CERA";
    readonly J1Cesa: "J1CESA";
    readonly J1Cesf: "J1CESF";
    readonly J1Cesi: "J1CESI";
    readonly J1Ceta: "J1CETA";
    readonly J1Cfia: "J1CFIA";
    readonly J1Cfif: "J1CFIF";
    readonly J1Cfja: "J1CFJA";
    readonly J1Cfoa: "J1CFOA";
    readonly J1Cfra: "J1CFRA";
    readonly J1Cfrb: "J1CFRB";
    readonly J1Cfrd: "J1CFRD";
    readonly J1Cfrf: "J1CFRF";
    readonly J1Cgaa: "J1CGAA";
    readonly J1Cgba: "J1CGBA";
    readonly J1Cgbf: "J1CGBF";
    readonly J1Cgbi: "J1CGBI";
    readonly J1Cgda: "J1CGDA";
    readonly J1Cgea: "J1CGEA";
    readonly J1Cgga: "J1CGGA";
    readonly J1Cgha: "J1CGHA";
    readonly J1Cgib: "J1CGIB";
    readonly J1Cgla: "J1CGLA";
    readonly J1Cgma: "J1CGMA";
    readonly J1Cgna: "J1CGNA";
    readonly J1Cgqa: "J1CGQA";
    readonly J1Cgra: "J1CGRA";
    readonly J1Cgrf: "J1CGRF";
    readonly J1Cgta: "J1CGTA";
    readonly J1Cgwa: "J1CGWA";
    readonly J1Cgya: "J1CGYA";
    readonly J1Chka: "J1CHKA";
    readonly J1Chna: "J1CHNA";
    readonly J1Chra: "J1CHRA";
    readonly J1Chrf: "J1CHRF";
    readonly J1Chta: "J1CHTA";
    readonly J1Chua: "J1CHUA";
    readonly J1Chuf: "J1CHUF";
    readonly J1Cida: "J1CIDA";
    readonly J1Ciea: "J1CIEA";
    readonly J1Cief: "J1CIEF";
    readonly J1Cila: "J1CILA";
    readonly J1Cilf: "J1CILF";
    readonly J1Cima: "J1CIMA";
    readonly J1Cina: "J1CINA";
    readonly J1Ciqa: "J1CIQA";
    readonly J1Cira: "J1CIRA";
    readonly J1Cisa: "J1CISA";
    readonly J1Cisf: "J1CISF";
    readonly J1Cita: "J1CITA";
    readonly J1Citf: "J1CITF";
    readonly J1Cj1A: "J1CJ1A";
    readonly J1Cjea: "J1CJEA";
    readonly J1Cjma: "J1CJMA";
    readonly J1Cjoa: "J1CJOA";
    readonly J1Cjpa: "J1CJPA";
    readonly J1Cjpf: "J1CJPF";
    readonly J1Ckea: "J1CKEA";
    readonly J1Ckga: "J1CKGA";
    readonly J1Ckgb: "J1CKGB";
    readonly J1Ckgc: "J1CKGC";
    readonly J1Ckha: "J1CKHA";
    readonly J1Ckia: "J1CKIA";
    readonly J1Ckma: "J1CKMA";
    readonly J1Ckna: "J1CKNA";
    readonly J1Ckpa: "J1CKPA";
    readonly J1Ckra: "J1CKRA";
    readonly J1Ckwa: "J1CKWA";
    readonly J1Ckya: "J1CKYA";
    readonly J1Ckza: "J1CKZA";
    readonly J1Claa: "J1CLAA";
    readonly J1Clba: "J1CLBA";
    readonly J1Clca: "J1CLCA";
    readonly J1Clia: "J1CLIA";
    readonly J1Clka: "J1CLKA";
    readonly J1Clra: "J1CLRA";
    readonly J1Clsa: "J1CLSA";
    readonly J1Clta: "J1CLTA";
    readonly J1Clua: "J1CLUA";
    readonly J1Cluf: "J1CLUF";
    readonly J1Clva: "J1CLVA";
    readonly J1Clvf: "J1CLVF";
    readonly J1Clya: "J1CLYA";
    readonly J1Cmaa: "J1CMAA";
    readonly J1Cmaf: "J1CMAF";
    readonly J1Cmca: "J1CMCA";
    readonly J1Cmda: "J1CMDA";
    readonly J1Cmea: "J1CMEA";
    readonly J1Cmga: "J1CMGA";
    readonly J1Cmka: "J1CMKA";
    readonly J1Cmla: "J1CMLA";
    readonly J1Cmma: "J1CMMA";
    readonly J1Cmna: "J1CMNA";
    readonly J1Cmoa: "J1CMOA";
    readonly J1Cmra: "J1CMRA";
    readonly J1Cmsa: "J1CMSA";
    readonly J1Cmta: "J1CMTA";
    readonly J1Cmua: "J1CMUA";
    readonly J1Cmva: "J1CMVA";
    readonly J1Cmwa: "J1CMWA";
    readonly J1Cmxa: "J1CMXA";
    readonly J1Cmya: "J1CMYA";
    readonly J1Cmza: "J1CMZA";
    readonly J1Cnaa: "J1CNAA";
    readonly J1Cnca: "J1CNCA";
    readonly J1Cnea: "J1CNEA";
    readonly J1Cnga: "J1CNGA";
    readonly J1Cnia: "J1CNIA";
    readonly J1Cnla: "J1CNLA";
    readonly J1Cnlb: "J1CNLB";
    readonly J1Cnlf: "J1CNLF";
    readonly J1Cnoa: "J1CNOA";
    readonly J1Cnof: "J1CNOF";
    readonly J1Cnpa: "J1CNPA";
    readonly J1Cnra: "J1CNRA";
    readonly J1Cnua: "J1CNUA";
    readonly J1Cnza: "J1CNZA";
    readonly J1Coma: "J1COMA";
    readonly J1Cp00: "J1CP00";
    readonly J1Cpaa: "J1CPAA";
    readonly J1Cpea: "J1CPEA";
    readonly J1Cpfa: "J1CPFA";
    readonly J1Cpga: "J1CPGA";
    readonly J1Cpha: "J1CPHA";
    readonly J1Cpka: "J1CPKA";
    readonly J1Cpla: "J1CPLA";
    readonly J1Cplf: "J1CPLF";
    readonly J1Cpsa: "J1CPSA";
    readonly J1Cpta: "J1CPTA";
    readonly J1Cptf: "J1CPTF";
    readonly J1Cpya: "J1CPYA";
    readonly J1Cqaa: "J1CQAA";
    readonly J1Cqma: "J1CQMA";
    readonly J1Cqna: "J1CQNA";
    readonly J1Croa: "J1CROA";
    readonly J1Crof: "J1CROF";
    readonly J1Croi: "J1CROI";
    readonly J1Crsa: "J1CRSA";
    readonly J1Crsf: "J1CRSF";
    readonly J1Crua: "J1CRUA";
    readonly J1Crwa: "J1CRWA";
    readonly J1Csaa: "J1CSAA";
    readonly J1Csba: "J1CSBA";
    readonly J1Csca: "J1CSCA";
    readonly J1Csda: "J1CSDA";
    readonly J1Csea: "J1CSEA";
    readonly J1Cseb: "J1CSEB";
    readonly J1Csef: "J1CSEF";
    readonly J1Csga: "J1CSGA";
    readonly J1Csha: "J1CSHA";
    readonly J1Cshb: "J1CSHB";
    readonly J1Cshc: "J1CSHC";
    readonly J1Csia: "J1CSIA";
    readonly J1Csif: "J1CSIF";
    readonly J1Cska: "J1CSKA";
    readonly J1Cskf: "J1CSKF";
    readonly J1Csla: "J1CSLA";
    readonly J1Csma: "J1CSMA";
    readonly J1Csna: "J1CSNA";
    readonly J1Csnf: "J1CSNF";
    readonly J1Csoa: "J1CSOA";
    readonly J1Csra: "J1CSRA";
    readonly J1Cssa: "J1CSSA";
    readonly J1Csta: "J1CSTA";
    readonly J1Csva: "J1CSVA";
    readonly J1Csxa: "J1CSXA";
    readonly J1Csya: "J1CSYA";
    readonly J1Csza: "J1CSZA";
    readonly J1Ct20: "J1CT20";
    readonly J1Ctca: "J1CTCA";
    readonly J1Ctda: "J1CTDA";
    readonly J1Ctga: "J1CTGA";
    readonly J1Ctgf: "J1CTGF";
    readonly J1Ctha: "J1CTHA";
    readonly J1Cthf: "J1CTHF";
    readonly J1Ctja: "J1CTJA";
    readonly J1Ctka: "J1CTKA";
    readonly J1Ctla: "J1CTLA";
    readonly J1Ctma: "J1CTMA";
    readonly J1Ctmb: "J1CTMB";
    readonly J1Ctna: "J1CTNA";
    readonly J1Ctnf: "J1CTNF";
    readonly J1Ctoa: "J1CTOA";
    readonly J1Ctpa: "J1CTPA";
    readonly J1Ctra: "J1CTRA";
    readonly J1Ctrf: "J1CTRF";
    readonly J1Ctta: "J1CTTA";
    readonly J1Ctva: "J1CTVA";
    readonly J1Ctza: "J1CTZA";
    readonly J1Cuaa: "J1CUAA";
    readonly J1Cuab: "J1CUAB";
    readonly J1Cuga: "J1CUGA";
    readonly J1Cupu: "J1CUPU";
    readonly J1Cusa: "J1CUSA";
    readonly J1Cusb: "J1CUSB";
    readonly J1Cusf: "J1CUSF";
    readonly J1Cuya: "J1CUYA";
    readonly J1Cuza: "J1CUZA";
    readonly J1Cvaa: "J1CVAA";
    readonly J1Cvca: "J1CVCA";
    readonly J1Cvea: "J1CVEA";
    readonly J1Cvga: "J1CVGA";
    readonly J1Cvna: "J1CVNA";
    readonly J1Cvua: "J1CVUA";
    readonly J1Cwfa: "J1CWFA";
    readonly J1Cwoo: "J1CWOO";
    readonly J1Cwop: "J1CWOP";
    readonly J1Cwoq: "J1CWOQ";
    readonly J1Cwor: "J1CWOR";
    readonly J1Cwos: "J1CWOS";
    readonly J1Cwot: "J1CWOT";
    readonly J1Cwou: "J1CWOU";
    readonly J1Cwov: "J1CWOV";
    readonly J1Cwow: "J1CWOW";
    readonly J1Cwpn: "J1CWPN";
    readonly J1Cwpo: "J1CWPO";
    readonly J1Cwpp: "J1CWPP";
    readonly J1Cwpq: "J1CWPQ";
    readonly J1Cwpr: "J1CWPR";
    readonly J1Cwps: "J1CWPS";
    readonly J1Cwpt: "J1CWPT";
    readonly J1Cwpu: "J1CWPU";
    readonly J1Cwpv: "J1CWPV";
    readonly J1Cwpw: "J1CWPW";
    readonly J1Cwqn: "J1CWQN";
    readonly J1Cwqo: "J1CWQO";
    readonly J1Cwqp: "J1CWQP";
    readonly J1Cwqq: "J1CWQQ";
    readonly J1Cwqr: "J1CWQR";
    readonly J1Cwqs: "J1CWQS";
    readonly J1Cwqt: "J1CWQT";
    readonly J1Cwqu: "J1CWQU";
    readonly J1Cwqv: "J1CWQV";
    readonly J1Cwqw: "J1CWQW";
    readonly J1Cwrn: "J1CWRN";
    readonly J1Cwro: "J1CWRO";
    readonly J1Cwrp: "J1CWRP";
    readonly J1Cwrq: "J1CWRQ";
    readonly J1Cwrr: "J1CWRR";
    readonly J1Cwrs: "J1CWRS";
    readonly J1Cwrt: "J1CWRT";
    readonly J1Cwru: "J1CWRU";
    readonly J1Cwrv: "J1CWRV";
    readonly J1Cwrw: "J1CWRW";
    readonly J1Cwsa: "J1CWSA";
    readonly J1Cwsn: "J1CWSN";
    readonly J1Cwso: "J1CWSO";
    readonly J1Cwsp: "J1CWSP";
    readonly J1Cwsq: "J1CWSQ";
    readonly J1Cwsr: "J1CWSR";
    readonly J1Cwss: "J1CWSS";
    readonly J1Cwst: "J1CWST";
    readonly J1Cwsu: "J1CWSU";
    readonly J1Cwsv: "J1CWSV";
    readonly J1Cwsw: "J1CWSW";
    readonly J1Cwtn: "J1CWTN";
    readonly J1Cwto: "J1CWTO";
    readonly J1Cwtp: "J1CWTP";
    readonly J1Cwtq: "J1CWTQ";
    readonly J1Cwtr: "J1CWTR";
    readonly J1Cwts: "J1CWTS";
    readonly J1Cwtt: "J1CWTT";
    readonly J1Cwtu: "J1CWTU";
    readonly J1Cwtv: "J1CWTV";
    readonly J1Cwtw: "J1CWTW";
    readonly J1Cwun: "J1CWUN";
    readonly J1Cwuo: "J1CWUO";
    readonly J1Cwup: "J1CWUP";
    readonly J1Cwuq: "J1CWUQ";
    readonly J1Cwur: "J1CWUR";
    readonly J1Cwus: "J1CWUS";
    readonly J1Cwut: "J1CWUT";
    readonly J1Cwuu: "J1CWUU";
    readonly J1Cwuv: "J1CWUV";
    readonly J1Cwuw: "J1CWUW";
    readonly J1Cwvn: "J1CWVN";
    readonly J1Cwvo: "J1CWVO";
    readonly J1Cwvp: "J1CWVP";
    readonly J1Cwvq: "J1CWVQ";
    readonly J1Cwvr: "J1CWVR";
    readonly J1Cwvs: "J1CWVS";
    readonly J1Cwvt: "J1CWVT";
    readonly J1Cwvu: "J1CWVU";
    readonly J1Cwvv: "J1CWVV";
    readonly J1Cwwn: "J1CWWN";
    readonly J1Cwwp: "J1CWWP";
    readonly J1Cwwt: "J1CWWT";
    readonly J1Cwwv: "J1CWWV";
    readonly J1Cxza: "J1CXZA";
    readonly J1Cyea: "J1CYEA";
    readonly J1Cyua: "J1CYUA";
    readonly J1Czaa: "J1CZAA";
    readonly J1Czma: "J1CZMA";
    readonly J1Czwa: "J1CZWA";
    readonly J20: "J20";
    readonly J21: "J21";
    readonly J2B: "J2B";
    readonly J2C: "J2C";
    readonly J30: "J30";
    readonly J3I: "J3I";
    readonly J3M: "J3M";
    readonly J4: "J4";
    readonly J51: "J51";
    readonly J52: "J52";
    readonly J7C: "J7C";
    readonly Jj00C001: "JJ00C001";
    readonly Jj00C002: "JJ00C002";
    readonly Jj00C003: "JJ00C003";
    readonly Jj00C004: "JJ00C004";
    readonly Jj00C005: "JJ00C005";
    readonly Jj00C006: "JJ00C006";
    readonly Jj00C007: "JJ00C007";
    readonly Jj00C008: "JJ00C008";
    readonly Jj00C009: "JJ00C009";
    readonly Jj00C010: "JJ00C010";
    readonly Jj00C011: "JJ00C011";
    readonly Jj00C012: "JJ00C012";
    readonly Jj00C013: "JJ00C013";
    readonly Jj00C014: "JJ00C014";
    readonly Jj00C015: "JJ00C015";
    readonly Jj00C016: "JJ00C016";
    readonly Jj00C017: "JJ00C017";
    readonly Jj00C018: "JJ00C018";
    readonly Jj00C019: "JJ00C019";
    readonly Jj00C020: "JJ00C020";
    readonly Jj00C021: "JJ00C021";
    readonly Jj00C022: "JJ00C022";
    readonly Jj00C024: "JJ00C024";
    readonly Jj00C025: "JJ00C025";
    readonly Jj00C026: "JJ00C026";
    readonly Jj00C027: "JJ00C027";
    readonly Jj00C028: "JJ00C028";
    readonly Jj00C029: "JJ00C029";
    readonly Jj00C030: "JJ00C030";
    readonly Jj00C031: "JJ00C031";
    readonly Jj00C032: "JJ00C032";
    readonly Jj00C033: "JJ00C033";
    readonly Jj00C034: "JJ00C034";
    readonly Jj00C035: "JJ00C035";
    readonly Jj00C036: "JJ00C036";
    readonly Jj00C037: "JJ00C037";
    readonly Jj00C038: "JJ00C038";
    readonly Jj00C039: "JJ00C039";
    readonly Jj00Cz53: "JJ00CZ53";
    readonly Other: "OTHER";
};
export type PostalOperatorCode = (typeof postalOperatorCode)[keyof typeof postalOperatorCode];
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
export declare const processorCode: {
    readonly Airwallex: "AIRWALLEX";
    readonly Paypal: "PAYPAL";
    readonly Stripe: "STRIPE";
};
export type ProcessorCode = (typeof processorCode)[keyof typeof processorCode];
export declare const programStatus: {
    readonly Active: "ACTIVE";
    readonly Deprecated: "DEPRECATED";
    readonly Draft: "DRAFT";
};
export type ProgramStatus = (typeof programStatus)[keyof typeof programStatus];
export declare const programStrictness: {
    readonly Conditional: "CONDITIONAL";
    readonly Required: "REQUIRED";
};
export type ProgramStrictness = (typeof programStrictness)[keyof typeof programStrictness];
export declare const proofOfDeliveryType: {
    readonly Document: "DOCUMENT";
    readonly NoSignatureRequired: "NO_SIGNATURE_REQUIRED";
    readonly Signature: "SIGNATURE";
};
export type ProofOfDeliveryType = (typeof proofOfDeliveryType)[keyof typeof proofOfDeliveryType];
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
export declare const questionRequirement: {
    readonly Optional: "OPTIONAL";
    readonly Preferred: "PREFERRED";
    readonly Required: "REQUIRED";
};
export type QuestionRequirement = (typeof questionRequirement)[keyof typeof questionRequirement];
export declare const questionnaireInferState: {
    readonly NotInferred: "NOT_INFERRED";
    readonly Partial: "PARTIAL";
    readonly ReadyToAttest: "READY_TO_ATTEST";
};
export type QuestionnaireInferState = (typeof questionnaireInferState)[keyof typeof questionnaireInferState];
export declare const questionnaireReleaseImpact: {
    readonly Compatible: "COMPATIBLE";
    readonly Reanswer: "REANSWER";
    readonly Reattest: "REATTEST";
};
export type QuestionnaireReleaseImpact = (typeof questionnaireReleaseImpact)[keyof typeof questionnaireReleaseImpact];
export declare const questionnaireStatus: {
    readonly Active: "ACTIVE";
    readonly Deprecated: "DEPRECATED";
    readonly Draft: "DRAFT";
};
export type QuestionnaireStatus = (typeof questionnaireStatus)[keyof typeof questionnaireStatus];
export declare const rateLimitUsageInterval: {
    readonly Day: "DAY";
    readonly Hour: "HOUR";
    readonly Minute: "MINUTE";
};
export type RateLimitUsageInterval = (typeof rateLimitUsageInterval)[keyof typeof rateLimitUsageInterval];
export declare const ratingCachingType: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type RatingCachingType = (typeof ratingCachingType)[keyof typeof ratingCachingType];
export declare const ratingLoggingType: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type RatingLoggingType = (typeof ratingLoggingType)[keyof typeof ratingLoggingType];
export declare const recalculatorExchangeRateLogging: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type RecalculatorExchangeRateLogging = (typeof recalculatorExchangeRateLogging)[keyof typeof recalculatorExchangeRateLogging];
export declare const relationshipType: {
    readonly Complementary: "COMPLEMENTARY";
    readonly Parent: "PARENT";
    readonly Sibling: "SIBLING";
};
export type RelationshipType = (typeof relationshipType)[keyof typeof relationshipType];
export declare const reportExportJobNotificationBehavior: {
    readonly EmailOnCompletion: "EMAIL_ON_COMPLETION";
    readonly None: "NONE";
};
export type ReportExportJobNotificationBehavior = (typeof reportExportJobNotificationBehavior)[keyof typeof reportExportJobNotificationBehavior];
export declare const reportExportJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Error: "ERROR";
    readonly Initialized: "INITIALIZED";
    readonly Processing: "PROCESSING";
};
export type ReportExportJobStatus = (typeof reportExportJobStatus)[keyof typeof reportExportJobStatus];
export declare const reportExportJobType: {
    readonly InvoiceDetails: "INVOICE_DETAILS";
    readonly InvoiceSummary: "INVOICE_SUMMARY";
    readonly RemittanceNotInvoiced: "REMITTANCE_NOT_INVOICED";
};
export type ReportExportJobType = (typeof reportExportJobType)[keyof typeof reportExportJobType];
export declare const responseStatus: {
    readonly Complete: "COMPLETE";
    readonly Superseded: "SUPERSEDED";
};
export type ResponseStatus = (typeof responseStatus)[keyof typeof responseStatus];
export declare const responseTargetType: {
    readonly CatalogItem: "CATALOG_ITEM";
    readonly Item: "ITEM";
};
export type ResponseTargetType = (typeof responseTargetType)[keyof typeof responseTargetType];
export declare const restrictedItemAction: {
    readonly Block: "BLOCK";
    readonly BlockAll: "BLOCK_ALL";
    readonly Warn: "WARN";
};
export type RestrictedItemAction = (typeof restrictedItemAction)[keyof typeof restrictedItemAction];
export declare const restrictionBulkJobOperation: {
    readonly Upsert: "UPSERT";
};
export type RestrictionBulkJobOperation = (typeof restrictionBulkJobOperation)[keyof typeof restrictionBulkJobOperation];
export declare const restrictionBulkJobStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
};
export type RestrictionBulkJobStatus = (typeof restrictionBulkJobStatus)[keyof typeof restrictionBulkJobStatus];
export declare const restrictionBulkJobTarget: {
    readonly Restriction: "RESTRICTION";
    readonly RestrictionEmbedding: "RESTRICTION_EMBEDDING";
};
export type RestrictionBulkJobTarget = (typeof restrictionBulkJobTarget)[keyof typeof restrictionBulkJobTarget];
export declare const restrictionCarrier: {
    readonly AustraliaPost: "AUSTRALIA_POST";
};
export type RestrictionCarrier = (typeof restrictionCarrier)[keyof typeof restrictionCarrier];
export declare const restrictionCategory: {
    readonly Cost: "COST";
    readonly DangerousGoods: "DANGEROUS_GOODS";
    readonly Deforestation: "DEFORESTATION";
    readonly DocumentationRequired: "DOCUMENTATION_REQUIRED";
    readonly Information: "INFORMATION";
    readonly PermitRequired: "PERMIT_REQUIRED";
    readonly ProductCompliance: "PRODUCT_COMPLIANCE";
    readonly Prohibited: "PROHIBITED";
    readonly Quota: "QUOTA";
};
export type RestrictionCategory = (typeof restrictionCategory)[keyof typeof restrictionCategory];
export declare const restrictionConfidence: {
    readonly High: "HIGH";
    readonly Low: "LOW";
    readonly Medium: "MEDIUM";
};
export type RestrictionConfidence = (typeof restrictionConfidence)[keyof typeof restrictionConfidence];
export declare const restrictionOverrideTriggerType: {
    readonly EntryTypeIneligible: "ENTRY_TYPE_INELIGIBLE";
};
export type RestrictionOverrideTriggerType = (typeof restrictionOverrideTriggerType)[keyof typeof restrictionOverrideTriggerType];
export declare const result: {
    readonly Failure: "FAILURE";
    readonly Success: "SUCCESS";
};
export type Result = (typeof result)[keyof typeof result];
export declare const reverseAmountStatus: {
    readonly Applied: "APPLIED";
    readonly NotAppliedNegativeValue: "NOT_APPLIED_NEGATIVE_VALUE";
    readonly NotAppliedUnderDeMinimis: "NOT_APPLIED_UNDER_DE_MINIMIS";
};
export type ReverseAmountStatus = (typeof reverseAmountStatus)[keyof typeof reverseAmountStatus];
export declare const reverseAmountType: {
    readonly Duty: "DUTY";
    readonly DutyFee: "DUTY_FEE";
    readonly DutyTax: "DUTY_TAX";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly None: "NONE";
    readonly Tax: "TAX";
    readonly TaxFee: "TAX_FEE";
};
export type ReverseAmountType = (typeof reverseAmountType)[keyof typeof reverseAmountType];
export declare const riskLevel: {
    readonly High: "HIGH";
    readonly Low: "LOW";
    readonly Medium: "MEDIUM";
};
export type RiskLevel = (typeof riskLevel)[keyof typeof riskLevel];
export declare const roundingMethod: {
    readonly Custom: "CUSTOM";
    readonly Hundredth: "HUNDREDTH";
    readonly None: "NONE";
    readonly Tenth: "TENTH";
    readonly Thousandth: "THOUSANDTH";
    readonly Whole: "WHOLE";
};
export type RoundingMethod = (typeof roundingMethod)[keyof typeof roundingMethod];
export declare const scope: {
    readonly Default: "DEFAULT";
    readonly Stores: "STORES";
    readonly Websites: "WEBSITES";
};
export type Scope = (typeof scope)[keyof typeof scope];
export declare const serviceLevelAvailability: {
    readonly Contracted: "CONTRACTED";
    readonly Disabled: "DISABLED";
    readonly General: "GENERAL";
};
export type ServiceLevelAvailability = (typeof serviceLevelAvailability)[keyof typeof serviceLevelAvailability];
export declare const serviceLevelClearanceType: {
    readonly Consolidated: "CONSOLIDATED";
    readonly Courier: "COURIER";
    readonly Postal: "POSTAL";
};
export type ServiceLevelClearanceType = (typeof serviceLevelClearanceType)[keyof typeof serviceLevelClearanceType];
export declare const serviceLevelCountryCompatible: {
    readonly Compatible: "COMPATIBLE";
    readonly Force: "FORCE";
    readonly LcgForce: "LCG_FORCE";
    readonly NonCompatible: "NON_COMPATIBLE";
};
export type ServiceLevelCountryCompatible = (typeof serviceLevelCountryCompatible)[keyof typeof serviceLevelCountryCompatible];
export declare const serviceLevelCountryDeliveryDuty: {
    readonly Both: "BOTH";
    readonly Ddp: "DDP";
    readonly Ddu: "DDU";
    readonly None: "NONE";
};
export type ServiceLevelCountryDeliveryDuty = (typeof serviceLevelCountryDeliveryDuty)[keyof typeof serviceLevelCountryDeliveryDuty];
export declare const sessionLineStatus: {
    readonly Completed: "COMPLETED";
    readonly InProgress: "IN_PROGRESS";
    readonly ReadyForAttestation: "READY_FOR_ATTESTATION";
};
export type SessionLineStatus = (typeof sessionLineStatus)[keyof typeof sessionLineStatus];
export declare const sessionStatus: {
    readonly Abandoned: "ABANDONED";
    readonly Completed: "COMPLETED";
    readonly InProgress: "IN_PROGRESS";
    readonly ReadyForAttestation: "READY_FOR_ATTESTATION";
};
export type SessionStatus = (typeof sessionStatus)[keyof typeof sessionStatus];
export declare const settingsCopyType: {
    readonly CarrierAccount: "CARRIER_ACCOUNT";
    readonly LandedCostBillingRule: "LANDED_COST_BILLING_RULE";
    readonly LandedCostGuarantee: "LANDED_COST_GUARANTEE";
    readonly LandedCostSettings: "LANDED_COST_SETTINGS";
    readonly Rule: "RULE";
    readonly ShippingProfile: "SHIPPING_PROFILE";
    readonly ShippingZone: "SHIPPING_ZONE";
    readonly StoreFeeRule: "STORE_FEE_RULE";
};
export type SettingsCopyType = (typeof settingsCopyType)[keyof typeof settingsCopyType];
export declare const shipmentAmountType: {
    readonly Buffer: "BUFFER";
    readonly Discount: "DISCOUNT";
    readonly FuelSurcharge: "FUEL_SURCHARGE";
    readonly Insurance: "INSURANCE";
    readonly PublishedRate: "PUBLISHED_RATE";
    readonly RateChart: "RATE_CHART";
    readonly Surcharge: "SURCHARGE";
};
export type ShipmentAmountType = (typeof shipmentAmountType)[keyof typeof shipmentAmountType];
export declare const shipmentBatchJobStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly PartialSuccess: "PARTIAL_SUCCESS";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
};
export type ShipmentBatchJobStatus = (typeof shipmentBatchJobStatus)[keyof typeof shipmentBatchJobStatus];
export declare const shipmentBatchResultStatus: {
    readonly Cancelled: "CANCELLED";
    readonly Failed: "FAILED";
    readonly Pending: "PENDING";
    readonly Processing: "PROCESSING";
    readonly Retrying: "RETRYING";
    readonly Success: "SUCCESS";
};
export type ShipmentBatchResultStatus = (typeof shipmentBatchResultStatus)[keyof typeof shipmentBatchResultStatus];
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
export declare const shipmentConsolidationCarrier: {
    readonly AustraliaPost: "AUSTRALIA_POST";
    readonly CanadaPost: "CANADA_POST";
    readonly JapanPost: "JAPAN_POST";
};
export type ShipmentConsolidationCarrier = (typeof shipmentConsolidationCarrier)[keyof typeof shipmentConsolidationCarrier];
export declare const shipmentConsolidationStatus: {
    readonly Closed: "CLOSED";
    readonly ManifestCreated: "MANIFEST_CREATED";
    readonly Open: "OPEN";
    readonly Voided: "VOIDED";
};
export type ShipmentConsolidationStatus = (typeof shipmentConsolidationStatus)[keyof typeof shipmentConsolidationStatus];
export declare const shipmentContentsType: {
    readonly CommercialGoods: "COMMERCIAL_GOODS";
    readonly CommercialSample: "COMMERCIAL_SAMPLE";
    readonly Documents: "DOCUMENTS";
    readonly EcommerceGoods: "ECOMMERCE_GOODS";
    readonly Gift: "GIFT";
    readonly Other: "OTHER";
    readonly ReturnedGoods: "RETURNED_GOODS";
    readonly SaleOfGoods: "SALE_OF_GOODS";
};
export type ShipmentContentsType = (typeof shipmentContentsType)[keyof typeof shipmentContentsType];
export declare const shipmentDirection: {
    readonly Outbound: "OUTBOUND";
    readonly Return: "RETURN";
};
export type ShipmentDirection = (typeof shipmentDirection)[keyof typeof shipmentDirection];
export declare const shipmentDocumentType: {
    readonly CustomsDocuments: "CUSTOMS_DOCUMENTS";
    readonly Labels: "LABELS";
    readonly PackingSlips: "PACKING_SLIPS";
};
export type ShipmentDocumentType = (typeof shipmentDocumentType)[keyof typeof shipmentDocumentType];
export declare const shipmentNonDeliveryOptionType: {
    readonly Abandon: "ABANDON";
    readonly Forward: "FORWARD";
    readonly ReturnAfterRetention: "RETURN_AFTER_RETENTION";
    readonly ReturnImmediately: "RETURN_IMMEDIATELY";
};
export type ShipmentNonDeliveryOptionType = (typeof shipmentNonDeliveryOptionType)[keyof typeof shipmentNonDeliveryOptionType];
export declare const shipmentNonDeliveryTransportType: {
    readonly Air: "AIR";
    readonly MostEconomical: "MOST_ECONOMICAL";
};
export type ShipmentNonDeliveryTransportType = (typeof shipmentNonDeliveryTransportType)[keyof typeof shipmentNonDeliveryTransportType];
export declare const shipmentPackagingTypeCode: {
    readonly Bpm: "BPM";
    readonly BpmFlat: "BPM_FLAT";
    readonly BpmParcel: "BPM_PARCEL";
    readonly CustomerSuppliedPackage: "CUSTOMER_SUPPLIED_PACKAGE";
    readonly DhlBottleBox_1: "DHL_BOTTLE_BOX_1";
    readonly DhlBottleBox_2: "DHL_BOTTLE_BOX_2";
    readonly DhlBottleBox_3: "DHL_BOTTLE_BOX_3";
    readonly DhlBottleBox_6: "DHL_BOTTLE_BOX_6";
    readonly DhlBox_2A: "DHL_BOX_2A";
    readonly DhlBox_2B: "DHL_BOX_2B";
    readonly DhlBox_2C: "DHL_BOX_2C";
    readonly DhlBox_3: "DHL_BOX_3";
    readonly DhlBox_4: "DHL_BOX_4";
    readonly DhlBox_5: "DHL_BOX_5";
    readonly DhlBox_6: "DHL_BOX_6";
    readonly DhlBox_7: "DHL_BOX_7";
    readonly DhlBox_8: "DHL_BOX_8";
    readonly DhlCardEnvelope: "DHL_CARD_ENVELOPE";
    readonly DhlCardEnvelopeImperial: "DHL_CARD_ENVELOPE_IMPERIAL";
    readonly DhlExpressEnvelope: "DHL_EXPRESS_ENVELOPE";
    readonly DhlTubeLarge: "DHL_TUBE_LARGE";
    readonly DhlTubeSmall: "DHL_TUBE_SMALL";
    readonly DhlWineBottleBox_2: "DHL_WINE_BOTTLE_BOX_2";
    readonly DhlWineBottleBox_3: "DHL_WINE_BOTTLE_BOX_3";
    readonly DhlWineBottleBox_4: "DHL_WINE_BOTTLE_BOX_4";
    readonly DhlWineBottleBox_5: "DHL_WINE_BOTTLE_BOX_5";
    readonly EPacketLite: "E_PACKET_LITE";
    readonly EmsDocuments: "EMS_DOCUMENTS";
    readonly EmsMerchandise: "EMS_MERCHANDISE";
    readonly FedexBox: "FEDEX_BOX";
    readonly FedexEnvelope: "FEDEX_ENVELOPE";
    readonly FedexExtraLargeBox: "FEDEX_EXTRA_LARGE_BOX";
    readonly FedexLargeBox: "FEDEX_LARGE_BOX";
    readonly FedexLegalEnvelope: "FEDEX_LEGAL_ENVELOPE";
    readonly FedexMediumBox: "FEDEX_MEDIUM_BOX";
    readonly FedexPaddedPak: "FEDEX_PADDED_PAK";
    readonly FedexPak: "FEDEX_PAK";
    readonly FedexSmallBox: "FEDEX_SMALL_BOX";
    readonly FedexTube: "FEDEX_TUBE";
    readonly Fedex_10KgBox: "FEDEX_10KG_BOX";
    readonly Fedex_25KgBox: "FEDEX_25KG_BOX";
    readonly FirstClass: "FIRST_CLASS";
    readonly Flats: "FLATS";
    readonly InternationalParcel: "INTERNATIONAL_PARCEL";
    readonly Irregulars: "IRREGULARS";
    readonly LargeExpressBox: "LARGE_EXPRESS_BOX";
    readonly Letter: "LETTER";
    readonly LetterRegistered: "LETTER_REGISTERED";
    readonly Machineables: "MACHINEABLES";
    readonly MediaMail: "MEDIA_MAIL";
    readonly MediumExpressBox: "MEDIUM_EXPRESS_BOX";
    readonly Pak: "PAK";
    readonly Pallet: "PALLET";
    readonly ParcelPost: "PARCEL_POST";
    readonly Parcels: "PARCELS";
    readonly PrintedMatter: "PRINTED_MATTER";
    readonly PrintedMatterRegisteredContents: "PRINTED_MATTER_REGISTERED_CONTENTS";
    readonly Priority: "PRIORITY";
    readonly SmallExpressBox: "SMALL_EXPRESS_BOX";
    readonly SmallPacket: "SMALL_PACKET";
    readonly StandardFlat: "STANDARD_FLAT";
    readonly Tube: "TUBE";
    readonly UpsExpressBox: "UPS_EXPRESS_BOX";
    readonly UpsLetter: "UPS_LETTER";
    readonly Ups_10KgBox: "UPS_10KG_BOX";
    readonly Ups_25KgBox: "UPS_25KG_BOX";
    readonly YourPackaging: "YOUR_PACKAGING";
};
export type ShipmentPackagingTypeCode = (typeof shipmentPackagingTypeCode)[keyof typeof shipmentPackagingTypeCode];
export declare const shipmentRatingAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
};
export type ShipmentRatingAdjustmentType = (typeof shipmentRatingAdjustmentType)[keyof typeof shipmentRatingAdjustmentType];
export declare const shipmentRatingAmountTargetType: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly MerchantBase: "MERCHANT_BASE";
    readonly MerchantProvided: "MERCHANT_PROVIDED";
    readonly MerchantSettled: "MERCHANT_SETTLED";
    readonly ShipmentRatingProvided: "SHIPMENT_RATING_PROVIDED";
    readonly ShopperPresented: "SHOPPER_PRESENTED";
    readonly ZonosBase: "ZONOS_BASE";
};
export type ShipmentRatingAmountTargetType = (typeof shipmentRatingAmountTargetType)[keyof typeof shipmentRatingAmountTargetType];
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
export declare const shipmentRatingConfigurationStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type ShipmentRatingConfigurationStatus = (typeof shipmentRatingConfigurationStatus)[keyof typeof shipmentRatingConfigurationStatus];
export declare const shipmentRatingDirection: {
    readonly Outbound: "OUTBOUND";
    readonly Return: "RETURN";
};
export type ShipmentRatingDirection = (typeof shipmentRatingDirection)[keyof typeof shipmentRatingDirection];
export declare const shipmentRatingPriority: {
    readonly BestValue: "BEST_VALUE";
    readonly Price: "PRICE";
    readonly Speed: "SPEED";
};
export type ShipmentRatingPriority = (typeof shipmentRatingPriority)[keyof typeof shipmentRatingPriority];
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
export declare const shipmentRatingSource: {
    readonly ApiRequest: "API_REQUEST";
    readonly Checkout: "CHECKOUT";
};
export type ShipmentRatingSource = (typeof shipmentRatingSource)[keyof typeof shipmentRatingSource];
export declare const shipmentRatingSourceType: {
    readonly Cache: "CACHE";
    readonly Live: "LIVE";
    readonly Provided: "PROVIDED";
};
export type ShipmentRatingSourceType = (typeof shipmentRatingSourceType)[keyof typeof shipmentRatingSourceType];
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
export declare const shipmentRefundStatus: {
    readonly EligibleForRefund: "ELIGIBLE_FOR_REFUND";
    readonly NotApplicable: "NOT_APPLICABLE";
    readonly NotEligibleForRefund: "NOT_ELIGIBLE_FOR_REFUND";
};
export type ShipmentRefundStatus = (typeof shipmentRefundStatus)[keyof typeof shipmentRefundStatus];
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
export declare const shippingProfileStatus: {
    readonly Active: "ACTIVE";
    readonly Deleted: "DELETED";
};
export type ShippingProfileStatus = (typeof shippingProfileStatus)[keyof typeof shippingProfileStatus];
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
export declare const storeCreditApplicationMode: {
    readonly Full: "FULL";
    readonly None: "NONE";
    readonly Partial: "PARTIAL";
};
export type StoreCreditApplicationMode = (typeof storeCreditApplicationMode)[keyof typeof storeCreditApplicationMode];
export declare const storeCreditTransactionType: {
    readonly Credit: "CREDIT";
    readonly Debit: "DEBIT";
};
export type StoreCreditTransactionType = (typeof storeCreditTransactionType)[keyof typeof storeCreditTransactionType];
export declare const storeFeeRuleDetailCategoryIdCreateType: {
    readonly AdditionalTariffLines: "ADDITIONAL_TARIFF_LINES";
    readonly Advancement: "ADVANCEMENT";
    readonly AdvancementMin: "ADVANCEMENT_MIN";
    readonly AdvancementPercent: "ADVANCEMENT_PERCENT";
    readonly ApiCrossDockingBuffer: "API_CROSS_DOCKING_BUFFER";
    readonly ApiGuaranteeOrder: "API_GUARANTEE_ORDER";
    readonly ApiGuaranteeOrderLegacy: "API_GUARANTEE_ORDER_LEGACY";
    readonly ApiGuaranteePercent: "API_GUARANTEE_PERCENT";
    readonly ApiGuaranteePercentLegacy: "API_GUARANTEE_PERCENT_LEGACY";
    readonly ApiRevenueShareBuffer: "API_REVENUE_SHARE_BUFFER";
    readonly BigcommerceCrossDockingBuffer: "BIGCOMMERCE_CROSS_DOCKING_BUFFER";
    readonly BigcommerceGuaranteeOrder: "BIGCOMMERCE_GUARANTEE_ORDER";
    readonly BigcommerceGuaranteePercent: "BIGCOMMERCE_GUARANTEE_PERCENT";
    readonly BrexitFee: "BREXIT_FEE";
    readonly BrokerageFee: "BROKERAGE_FEE";
    readonly CheckoutGuaranteeOrder: "CHECKOUT_GUARANTEE_ORDER";
    readonly CheckoutGuaranteeOrderLegacy: "CHECKOUT_GUARANTEE_ORDER_LEGACY";
    readonly CheckoutGuaranteePercent: "CHECKOUT_GUARANTEE_PERCENT";
    readonly Cod: "COD";
    readonly CollectGuaranteeOrder: "COLLECT_GUARANTEE_ORDER";
    readonly CollectGuaranteePercent: "COLLECT_GUARANTEE_PERCENT";
    readonly CollectOrder: "COLLECT_ORDER";
    readonly CollectPercent: "COLLECT_PERCENT";
    readonly CollectTransactionOrder: "COLLECT_TRANSACTION_ORDER";
    readonly Country: "COUNTRY";
    readonly CrossDockBuffer: "CROSS_DOCK_BUFFER";
    readonly CurrencyConversionFee: "CURRENCY_CONVERSION_FEE";
    readonly Custom: "CUSTOM";
    readonly DdpServiceFee: "DDP_SERVICE_FEE";
    readonly DutyBuffer: "DUTY_BUFFER";
    readonly DutyTaxBuffer: "DUTY_TAX_BUFFER";
    readonly EtsyGuaranteeOrder: "ETSY_GUARANTEE_ORDER";
    readonly EtsyGuaranteePercent: "ETSY_GUARANTEE_PERCENT";
    readonly EtsyMerchantFeePercent: "ETSY_MERCHANT_FEE_PERCENT";
    readonly FranceCustomsTax: "FRANCE_CUSTOMS_TAX";
    readonly GuaranteeOrderDutyExempt: "GUARANTEE_ORDER_DUTY_EXEMPT";
    readonly LandedCostGuaranteeBuffer: "LANDED_COST_GUARANTEE_BUFFER";
    readonly LandedCostGuaranteeSubsidy: "LANDED_COST_GUARANTEE_SUBSIDY";
    readonly MagentoCrossDockingBuffer: "MAGENTO_CROSS_DOCKING_BUFFER";
    readonly MagentoGuaranteeOrder: "MAGENTO_GUARANTEE_ORDER";
    readonly MagentoGuaranteePercent: "MAGENTO_GUARANTEE_PERCENT";
    readonly PgaAmsProcessing: "PGA_AMS_PROCESSING";
    readonly PgaAphis: "PGA_APHIS";
    readonly PgaBtaPriorNotice: "PGA_BTA_PRIOR_NOTICE";
    readonly PgaDisclaim: "PGA_DISCLAIM";
    readonly PgaDot: "PGA_DOT";
    readonly PgaFdaClearance: "PGA_FDA_CLEARANCE";
    readonly ShippingFee: "SHIPPING_FEE";
    readonly ShopifyCrossDockingBuffer: "SHOPIFY_CROSS_DOCKING_BUFFER";
    readonly ShopifyDutyTaxBuffer: "SHOPIFY_DUTY_TAX_BUFFER";
    readonly ShopifyDutyTaxFeeBuffer: "SHOPIFY_DUTY_TAX_FEE_BUFFER";
    readonly ShopifyGuaranteeOrder: "SHOPIFY_GUARANTEE_ORDER";
    readonly ShopifyGuaranteeOrderLegacy: "SHOPIFY_GUARANTEE_ORDER_LEGACY";
    readonly ShopifyGuaranteePercent: "SHOPIFY_GUARANTEE_PERCENT";
    readonly ShopifyGuaranteePercentGuaranteeOrder: "SHOPIFY_GUARANTEE_PERCENT_GUARANTEE_ORDER";
    readonly TaxBuffer: "TAX_BUFFER";
    readonly TransactionOrder: "TRANSACTION_ORDER";
    readonly ZonosExportProcessing: "ZONOS_EXPORT_PROCESSING";
    readonly ZonosExportProcessingOffset: "ZONOS_EXPORT_PROCESSING_OFFSET";
};
export type StoreFeeRuleDetailCategoryIdCreateType = (typeof storeFeeRuleDetailCategoryIdCreateType)[keyof typeof storeFeeRuleDetailCategoryIdCreateType];
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
export declare const stripeCaptureMethod: {
    readonly Automatic: "AUTOMATIC";
    readonly AutomaticAsync: "AUTOMATIC_ASYNC";
    readonly Manual: "MANUAL";
};
export type StripeCaptureMethod = (typeof stripeCaptureMethod)[keyof typeof stripeCaptureMethod];
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
export declare const stripeTrialEndBehavior: {
    readonly Cancel: "CANCEL";
    readonly CreateInvoice: "CREATE_INVOICE";
    readonly Pause: "PAUSE";
};
export type StripeTrialEndBehavior = (typeof stripeTrialEndBehavior)[keyof typeof stripeTrialEndBehavior];
export declare const taxCalculationType: {
    readonly Cif: "CIF";
    readonly Custom: "CUSTOM";
    readonly Fob: "FOB";
};
export type TaxCalculationType = (typeof taxCalculationType)[keyof typeof taxCalculationType];
export declare const taxIdType: {
    readonly Cnp: "CNP";
    readonly Cuil: "CUIL";
    readonly Curp: "CURP";
    readonly Dan: "DAN";
    readonly Dni: "DNI";
    readonly Dtf: "DTF";
    readonly Dun: "DUN";
    readonly Ein: "EIN";
    readonly Eori: "EORI";
    readonly Fed: "FED";
    readonly Ftpc: "FTPC";
    readonly Ftz: "FTZ";
    readonly Gst: "GST";
    readonly Hmrc: "HMRC";
    readonly Ioss: "IOSS";
    readonly Lvg: "LVG";
    readonly Npwp: "NPWP";
    readonly Osr: "OSR";
    readonly Pan: "PAN";
    readonly Pcc: "PCC";
    readonly Pccc: "PCCC";
    readonly Rfc: "RFC";
    readonly Run: "RUN";
    readonly Ssn: "SSN";
    readonly Sta: "STA";
    readonly Tan: "TAN";
    readonly Tin: "TIN";
    readonly Trn: "TRN";
    readonly Voec: "VOEC";
};
export type TaxIdType = (typeof taxIdType)[keyof typeof taxIdType];
export declare const taxMethodType: {
    readonly BusinessNumber: "BUSINESS_NUMBER";
    readonly Consignment: "CONSIGNMENT";
    readonly Default: "DEFAULT";
    readonly Domestic: "DOMESTIC";
    readonly DomesticLcg: "DOMESTIC_LCG";
    readonly SellerOfRecord: "SELLER_OF_RECORD";
};
export type TaxMethodType = (typeof taxMethodType)[keyof typeof taxMethodType];
export declare const taxonKingdom: {
    readonly Animalia: "ANIMALIA";
    readonly Fungi: "FUNGI";
    readonly Plantae: "PLANTAE";
};
export type TaxonKingdom = (typeof taxonKingdom)[keyof typeof taxonKingdom];
export declare const termEndAction: {
    readonly Charge: "CHARGE";
    readonly Email: "EMAIL";
};
export type TermEndAction = (typeof termEndAction)[keyof typeof termEndAction];
export declare const testingPartyType: {
    readonly Lab: "LAB";
};
export type TestingPartyType = (typeof testingPartyType)[keyof typeof testingPartyType];
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
export declare const trackingStatusType: {
    readonly Cancelled: "CANCELLED";
    readonly Created: "CREATED";
    readonly Delivered: "DELIVERED";
    readonly Exception: "EXCEPTION";
    readonly InTransit: "IN_TRANSIT";
    readonly Unknown: "UNKNOWN";
};
export type TrackingStatusType = (typeof trackingStatusType)[keyof typeof trackingStatusType];
export declare const trackingType: {
    readonly Package: "PACKAGE";
    readonly Shipment: "SHIPMENT";
};
export type TrackingType = (typeof trackingType)[keyof typeof trackingType];
export declare const tradeAgreementStatus: {
    readonly Allowed: "ALLOWED";
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type TradeAgreementStatus = (typeof tradeAgreementStatus)[keyof typeof tradeAgreementStatus];
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
export declare const transmissionStatus: {
    readonly Accepted: "ACCEPTED";
    readonly Acknowledged: "ACKNOWLEDGED";
    readonly Error: "ERROR";
    readonly Pending: "PENDING";
    readonly Rejected: "REJECTED";
    readonly Sent: "SENT";
    readonly Success: "SUCCESS";
};
export type TransmissionStatus = (typeof transmissionStatus)[keyof typeof transmissionStatus];
export declare const transmissionType: {
    readonly Amendment: "AMENDMENT";
    readonly Cancellation: "CANCELLATION";
    readonly CargoRelease: "CARGO_RELEASE";
    readonly Delete: "DELETE";
    readonly EntrySummary: "ENTRY_SUMMARY";
    readonly Resend: "RESEND";
    readonly StatusQuery: "STATUS_QUERY";
};
export type TransmissionType = (typeof transmissionType)[keyof typeof transmissionType];
export declare const transportationMode: {
    readonly Air: "AIR";
    readonly InlandWaterway: "INLAND_WATERWAY";
    readonly Other: "OTHER";
    readonly Rail: "RAIL";
    readonly Road: "ROAD";
    readonly Sea: "SEA";
};
export type TransportationMode = (typeof transportationMode)[keyof typeof transportationMode];
export declare const unreconciledShipmentStatus: {
    readonly ChargeApprovedMerchant: "CHARGE_APPROVED_MERCHANT";
    readonly DisputeMerchant: "DISPUTE_MERCHANT";
};
export type UnreconciledShipmentStatus = (typeof unreconciledShipmentStatus)[keyof typeof unreconciledShipmentStatus];
export declare const upsAdminFeeRateType: {
    readonly CountrySpecific: "COUNTRY_SPECIFIC";
    readonly RestOfWorld: "REST_OF_WORLD";
};
export type UpsAdminFeeRateType = (typeof upsAdminFeeRateType)[keyof typeof upsAdminFeeRateType];
export declare const upsAdminFeeServiceLevelType: {
    readonly Economy: "ECONOMY";
    readonly Standard: "STANDARD";
    readonly Worldwide: "WORLDWIDE";
};
export type UpsAdminFeeServiceLevelType = (typeof upsAdminFeeServiceLevelType)[keyof typeof upsAdminFeeServiceLevelType];
export declare const upsBillingCountryCode: {
    readonly Ar: "AR";
    readonly At: "AT";
    readonly Au: "AU";
    readonly Be: "BE";
    readonly Br: "BR";
    readonly Ca: "CA";
    readonly Ch: "CH";
    readonly Cl: "CL";
    readonly Cn: "CN";
    readonly Co: "CO";
    readonly Cr: "CR";
    readonly Cz: "CZ";
    readonly De: "DE";
    readonly Dk: "DK";
    readonly Do: "DO";
    readonly Es: "ES";
    readonly Fi: "FI";
    readonly Fr: "FR";
    readonly Gb: "GB";
    readonly Hk: "HK";
    readonly Hu: "HU";
    readonly Id: "ID";
    readonly Ie: "IE";
    readonly In: "IN";
    readonly It: "IT";
    readonly Jp: "JP";
    readonly Kr: "KR";
    readonly Lu: "LU";
    readonly Mo: "MO";
    readonly Mx: "MX";
    readonly My: "MY";
    readonly Nl: "NL";
    readonly No: "NO";
    readonly Ph: "PH";
    readonly Pl: "PL";
    readonly Pr: "PR";
    readonly Pt: "PT";
    readonly Se: "SE";
    readonly Sg: "SG";
    readonly Th: "TH";
    readonly Tw: "TW";
    readonly Us: "US";
    readonly Vn: "VN";
};
export type UpsBillingCountryCode = (typeof upsBillingCountryCode)[keyof typeof upsBillingCountryCode];
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
    readonly TrialAccess: "TRIAL_ACCESS";
};
export type UsageRecordTypeCode = (typeof usageRecordTypeCode)[keyof typeof usageRecordTypeCode];
export declare const userAccessLevel: {
    readonly Admin: "ADMIN";
    readonly Custom: "CUSTOM";
    readonly Member: "MEMBER";
    readonly None: "NONE";
};
export type UserAccessLevel = (typeof userAccessLevel)[keyof typeof userAccessLevel];
export declare const valueOperator: {
    readonly GreaterThan: "GREATER_THAN";
    readonly GreaterThanOrEqual: "GREATER_THAN_OR_EQUAL";
};
export type ValueOperator = (typeof valueOperator)[keyof typeof valueOperator];
export declare const vaultProvider: {
    readonly BasisTheory: "BASIS_THEORY";
    readonly Processor: "PROCESSOR";
};
export type VaultProvider = (typeof vaultProvider)[keyof typeof vaultProvider];
export declare const vendorUserAccessLevel: {
    readonly Admin: "ADMIN";
    readonly Member: "MEMBER";
};
export type VendorUserAccessLevel = (typeof vendorUserAccessLevel)[keyof typeof vendorUserAccessLevel];
export declare const visibilityCode: {
    readonly Hide: "HIDE";
    readonly Optional: "OPTIONAL";
    readonly Required: "REQUIRED";
};
export type VisibilityCode = (typeof visibilityCode)[keyof typeof visibilityCode];
export declare const watchStatus: {
    readonly Active: "ACTIVE";
    readonly Completed: "COMPLETED";
    readonly Expired: "EXPIRED";
};
export type WatchStatus = (typeof watchStatus)[keyof typeof watchStatus];
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
    readonly CollectEmailSent: "COLLECT_EMAIL_SENT";
    readonly CollectEmailSentFailed: "COLLECT_EMAIL_SENT_FAILED";
    readonly CollectPaymentFailed: "COLLECT_PAYMENT_FAILED";
    readonly CollectPaymentLinkExpired: "COLLECT_PAYMENT_LINK_EXPIRED";
    readonly CollectPaymentLinkOpened: "COLLECT_PAYMENT_LINK_OPENED";
    readonly CollectPaymentSucceeded: "COLLECT_PAYMENT_SUCCEEDED";
    readonly ComplianceCollectRequest: "COMPLIANCE_COLLECT_REQUEST";
    readonly InclusivePriceConfigurationChanged: "INCLUSIVE_PRICE_CONFIGURATION_CHANGED";
    readonly InclusivePriceConfigurationCreated: "INCLUSIVE_PRICE_CONFIGURATION_CREATED";
    readonly InclusivePriceConfigurationDeleted: "INCLUSIVE_PRICE_CONFIGURATION_DELETED";
    readonly InclusivePriceConfigurationUpdated: "INCLUSIVE_PRICE_CONFIGURATION_UPDATED";
    readonly InclusivePriceSyncReady: "INCLUSIVE_PRICE_SYNC_READY";
    readonly InventoryCheck: "INVENTORY_CHECK";
    readonly InventoryRefund: "INVENTORY_REFUND";
    readonly IpSettingStatusChanged: "IP_SETTING_STATUS_CHANGED";
    readonly LandedCostComplianceReady: "LANDED_COST_COMPLIANCE_READY";
    readonly OrderCanceled: "ORDER_CANCELED";
    readonly OrderCombined: "ORDER_COMBINED";
    readonly OrderCreated: "ORDER_CREATED";
    readonly OrderModificationCommitted: "ORDER_MODIFICATION_COMMITTED";
    readonly OrderModificationCreated: "ORDER_MODIFICATION_CREATED";
    readonly OrderModificationStatusChanged: "ORDER_MODIFICATION_STATUS_CHANGED";
    readonly OrderPayoutDetailsReady: "ORDER_PAYOUT_DETAILS_READY";
    readonly OrderReturnCompleted: "ORDER_RETURN_COMPLETED";
    readonly OrderReturnCreated: "ORDER_RETURN_CREATED";
    readonly OrderReturnStatusChanged: "ORDER_RETURN_STATUS_CHANGED";
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
export declare const weightUnitType: {
    readonly Dimensional: "DIMENSIONAL";
    readonly Physical: "PHYSICAL";
};
export type WeightUnitType = (typeof weightUnitType)[keyof typeof weightUnitType];
export declare const zoneLandedCostConfiguration: {
    readonly DapForced: "DAP_FORCED";
    readonly ShippingProfile: "SHIPPING_PROFILE";
};
export type ZoneLandedCostConfiguration = (typeof zoneLandedCostConfiguration)[keyof typeof zoneLandedCostConfiguration];
export declare const zonosApp: {
    readonly Api: "API";
    readonly Checkout: "CHECKOUT";
    readonly Classify: "CLASSIFY";
    readonly DutyTax: "DUTY_TAX";
    readonly Hello: "HELLO";
    readonly Restrict: "RESTRICT";
    readonly Screen: "SCREEN";
};
export type ZonosApp = (typeof zonosApp)[keyof typeof zonosApp];
export declare const zonosAttribution: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
export type ZonosAttribution = (typeof zonosAttribution)[keyof typeof zonosAttribution];
export declare const zonosInvoiceCollectionMethod: {
    readonly AirwallexChargeAutomatically: "AIRWALLEX_CHARGE_AUTOMATICALLY";
    readonly AirwallexInvoice: "AIRWALLEX_INVOICE";
    readonly AirwallexPushPayment: "AIRWALLEX_PUSH_PAYMENT";
    readonly ChargeAutomatically: "CHARGE_AUTOMATICALLY";
    readonly CheckoutCollect: "CHECKOUT_COLLECT";
    readonly CreateOutstanding: "CREATE_OUTSTANDING";
    readonly SendInvoice: "SEND_INVOICE";
    readonly StripeBillingDraftInvoice: "STRIPE_BILLING_DRAFT_INVOICE";
    readonly StripeBillingInvoice: "STRIPE_BILLING_INVOICE";
    readonly StripeInvoiceChargeAutomatically: "STRIPE_INVOICE_CHARGE_AUTOMATICALLY";
};
export type ZonosInvoiceCollectionMethod = (typeof zonosInvoiceCollectionMethod)[keyof typeof zonosInvoiceCollectionMethod];
export declare const zonosInvoiceFeatureFlagKey: {
    readonly RedisAppCbpExchangeEnabled: "REDIS_APP_CBP_EXCHANGE_ENABLED";
    readonly RedisCcProcessingFeeEnabled: "REDIS_CC_PROCESSING_FEE_ENABLED";
    readonly RedisInvoiceFeesEnabled: "REDIS_INVOICE_FEES_ENABLED";
    readonly RedisInvoiceRolloverEnabled: "REDIS_INVOICE_ROLLOVER_ENABLED";
    readonly RedisLateFeesEnabled: "REDIS_LATE_FEES_ENABLED";
    readonly RedisSaasTaxEnabled: "REDIS_SAAS_TAX_ENABLED";
    readonly RedisZonosInvoiceProcessorEnabled: "REDIS_ZONOS_INVOICE_PROCESSOR_ENABLED";
};
export type ZonosInvoiceFeatureFlagKey = (typeof zonosInvoiceFeatureFlagKey)[keyof typeof zonosInvoiceFeatureFlagKey];
export declare const zonosInvoiceFinalizeAndChargeOutcome: {
    readonly AlreadyProcessed: "ALREADY_PROCESSED";
    readonly Charged: "CHARGED";
    readonly Failed: "FAILED";
    readonly InvoiceSent: "INVOICE_SENT";
    readonly NoDraftsFound: "NO_DRAFTS_FOUND";
    readonly VoidedZeroAmount: "VOIDED_ZERO_AMOUNT";
};
export type ZonosInvoiceFinalizeAndChargeOutcome = (typeof zonosInvoiceFinalizeAndChargeOutcome)[keyof typeof zonosInvoiceFinalizeAndChargeOutcome];
export declare const zonosInvoiceInternalExclusionType: {
    readonly TerminalFinality: "TERMINAL_FINALITY";
    readonly ZeroAmount: "ZERO_AMOUNT";
};
export type ZonosInvoiceInternalExclusionType = (typeof zonosInvoiceInternalExclusionType)[keyof typeof zonosInvoiceInternalExclusionType];
export declare const zonosInvoiceJobStatus: {
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly GenerateNew: "GENERATE_NEW";
    readonly Initialized: "INITIALIZED";
    readonly LandedCost: "LANDED_COST";
    readonly SendEmail: "SEND_EMAIL";
    readonly UpdateInvoices: "UPDATE_INVOICES";
    readonly VoidUnpaid: "VOID_UNPAID";
};
export type ZonosInvoiceJobStatus = (typeof zonosInvoiceJobStatus)[keyof typeof zonosInvoiceJobStatus];
export type ZonosInvoiceOrderBy = {
    direction?: InputMaybe<OrderDirection>;
    field: ZonosInvoiceOrderByField;
};
export declare const zonosInvoiceOrderByField: {
    readonly Amount: "AMOUNT";
    readonly CreatedAt: "CREATED_AT";
    readonly CurrencyCode: "CURRENCY_CODE";
};
export type ZonosInvoiceOrderByField = (typeof zonosInvoiceOrderByField)[keyof typeof zonosInvoiceOrderByField];
export declare const zonosInvoiceReprocessAction: {
    readonly Combine: "COMBINE";
    readonly KeepSeparate: "KEEP_SEPARATE";
};
export type ZonosInvoiceReprocessAction = (typeof zonosInvoiceReprocessAction)[keyof typeof zonosInvoiceReprocessAction];
export declare const zonosInvoiceReprocessProcessingMode: {
    readonly Process: "PROCESS";
    readonly Skip: "SKIP";
};
export type ZonosInvoiceReprocessProcessingMode = (typeof zonosInvoiceReprocessProcessingMode)[keyof typeof zonosInvoiceReprocessProcessingMode];
export declare const zonosInvoiceStatusFinality: {
    readonly NonTerminal: "NON_TERMINAL";
    readonly Terminal: "TERMINAL";
};
export type ZonosInvoiceStatusFinality = (typeof zonosInvoiceStatusFinality)[keyof typeof zonosInvoiceStatusFinality];
export declare const zonosInvoiceStatusUpdateInputType: {
    readonly Created: "CREATED";
    readonly Dispute: "DISPUTE";
    readonly Draft: "DRAFT";
    readonly ManualReview: "MANUAL_REVIEW";
    readonly Open: "OPEN";
    readonly Paid: "PAID";
    readonly Pending: "PENDING";
    readonly Uncollectible: "UNCOLLECTIBLE";
    readonly Void: "VOID";
};
export type ZonosInvoiceStatusUpdateInputType = (typeof zonosInvoiceStatusUpdateInputType)[keyof typeof zonosInvoiceStatusUpdateInputType];
export type CartCreateMutation = {
    cartCreate: {
        id: string;
        organizationId: string;
        createdAt: string;
        expiresAt: string | null;
        type: CartType | null;
        adjustments: Array<{
            amount: number;
            currencyCode: CurrencyCode;
            description: string | null;
            productId: string | null;
            sku: string | null;
            type: CartAdjustmentType;
        }>;
        items: Array<{
            id: string;
            amount: number;
            name: string | null;
            currencyCode: CurrencyCode;
            description: string | null;
            imageUrl: string | null;
            quantity: number;
            sku: string | null;
            productId: string;
            restriction: {
                reason: string;
                action: RestrictedItemAction;
            } | null;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            metadata: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
        }>;
        references: {
            checkoutSessionId: string | null;
            landedCostId: string | null;
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        }>;
    };
};
export type CartUpdateMutation = {
    cartUpdate: {
        id: string;
        organizationId: string;
        createdAt: string;
        expiresAt: string | null;
        type: CartType | null;
        adjustments: Array<{
            amount: number;
            currencyCode: CurrencyCode;
            description: string | null;
            productId: string | null;
            sku: string | null;
            type: CartAdjustmentType;
        }>;
        items: Array<{
            id: string;
            amount: number;
            name: string | null;
            currencyCode: CurrencyCode;
            description: string | null;
            imageUrl: string | null;
            quantity: number;
            sku: string | null;
            productId: string;
            restriction: {
                reason: string;
                action: RestrictedItemAction;
            } | null;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            metadata: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
        }>;
        references: {
            checkoutSessionId: string | null;
            landedCostId: string | null;
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        }>;
    };
};
export type CartByIdQuery = {
    cart: {
        id: string;
        organizationId: string;
        createdAt: string;
        expiresAt: string | null;
        type: CartType | null;
        adjustments: Array<{
            amount: number;
            currencyCode: CurrencyCode;
            description: string | null;
            productId: string | null;
            sku: string | null;
            type: CartAdjustmentType;
        }>;
        items: Array<{
            id: string;
            amount: number;
            name: string | null;
            currencyCode: CurrencyCode;
            description: string | null;
            imageUrl: string | null;
            quantity: number;
            sku: string | null;
            productId: string;
            restriction: {
                reason: string;
                action: RestrictedItemAction;
            } | null;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            metadata: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
        }>;
        references: {
            checkoutSessionId: string | null;
            landedCostId: string | null;
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        }>;
    } | null;
};
export type CartFragmentFragment = {
    id: string;
    organizationId: string;
    createdAt: string;
    expiresAt: string | null;
    type: CartType | null;
    adjustments: Array<{
        amount: number;
        currencyCode: CurrencyCode;
        description: string | null;
        productId: string | null;
        sku: string | null;
        type: CartAdjustmentType;
    }>;
    items: Array<{
        id: string;
        amount: number;
        name: string | null;
        currencyCode: CurrencyCode;
        description: string | null;
        imageUrl: string | null;
        quantity: number;
        sku: string | null;
        productId: string;
        restriction: {
            reason: string;
            action: RestrictedItemAction;
        } | null;
        attributes: Array<{
            key: string | null;
            value: string | null;
        } | null> | null;
        metadata: Array<{
            key: string | null;
            value: string | null;
        } | null> | null;
    }>;
    references: {
        checkoutSessionId: string | null;
        landedCostId: string | null;
    } | null;
    metadata: Array<{
        key: string;
        value: string;
    }>;
};
export type OrganizationQuery = {
    organization: {
        name: string;
        id: string;
        references: {
            storeId: number | null;
        } | null;
    } | null;
};
export type CheckoutCustomerProfileAuthenticateMutation = {
    checkoutCustomerProfileAuthenticate: {
        email: string | null;
        customerId: string;
        organizationId: string;
        name: string | null;
        phone: string | null;
        oneTimePassword: string | null;
        locations: Array<{
            email: string | null;
            name: string | null;
            phone: string | null;
            administrativeArea: string;
            countryCode: CountryCode;
            locality: string;
            line1: string;
            line2: string | null;
            postalCode: string;
        }> | null;
    };
};
export type CreateCollectQuoteMutation = {
    partyCreateWorkflow: Array<{
        id: string;
    }>;
    itemCreateWorkflow: Array<{
        id: string;
        amount: number;
        amountInclusive: number | null;
        hsCode: string | null;
        name: string | null;
        catalogItem: {
            id: string;
        } | null;
    }>;
    cartonizeWorkflow: Array<{
        id: string;
    } | null> | null;
    shipmentRatingCalculateWorkflow: Array<{
        id: string;
    }>;
    landedCostCalculateWorkflow: Array<{
        id: string;
        quoteType: LandedCostQuoteType | null;
        duties: Array<{
            amount: number;
        }>;
        taxes: Array<{
            amount: number;
        }>;
        fees: Array<{
            amount: number;
        }>;
        links: Array<{
            key: string;
            url: string;
        }> | null;
    } | null> | null;
};
export type LandedCostDetailFragment = {
    id: string;
    quoteType: LandedCostQuoteType | null;
    links: Array<{
        key: string;
        url: string;
    }> | null;
};
export type GetCartInfoQuery = {
    cartCheckoutWorkflow: {
        cart: {
            references: {
                checkoutSessionId: string | null;
                landedCostId: string | null;
            } | null;
        };
    };
};
export type StoreCreditAddCreditMutation = {
    storeCreditAddCredit: {
        id: string;
        checkoutCustomerId: string;
        currencyCode: CurrencyCode;
        balance: number;
    };
};
export type StoreCreditRemoveCreditMutation = {
    storeCreditRemoveCredit: {
        id: string;
        checkoutCustomerId: string;
        currencyCode: CurrencyCode;
        balance: number;
    };
};
export type StoreCreditsByCustomerQuery = {
    storeCreditsByCustomer: Array<{
        id: string;
        checkoutCustomerId: string;
        currencyCode: CurrencyCode;
        balance: number;
    }>;
};
export type InclusivePriceConfigurationsSyncMutation = {
    inclusivePriceConfigurationsSync: Array<{
        shipToCountry: CountryCode;
        dutyConfiguration: {
            status: InclusivePriceConfigurationStatus;
        } | null;
        taxConfiguration: {
            status: InclusivePriceConfigurationStatus;
        };
    }>;
};
export type OrganizationByStoreIdQuery = {
    organizations: {
        edges: Array<{
            node: {
                name: string;
                id: string;
            } | null;
        }>;
    } | null;
};
export type OrganizationsQuery = {
    organizations: {
        edges: Array<{
            node: {
                name: string;
                id: string;
                references: {
                    storeId: number | null;
                    companyId: number | null;
                } | null;
            } | null;
        }>;
    } | null;
};
export type CartCalculateLandedCostMutation = {
    partyCreateWorkflow: Array<{
        type: PartyType | null;
        id: string;
        organization: string;
    }>;
    cartWorkflow: {
        id: string;
        items: Array<{
            id: string;
            amount: number;
            name: string | null;
            description: string | null;
            imageUrl: string | null;
            quantity: number;
            sku: string | null;
            productId: string;
            reverseAmountDetail: Array<{
                inclusivePriceConfigurationId: string | null;
            }> | null;
            restriction: {
                reason: string;
                action: RestrictedItemAction;
            } | null;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
        }>;
    };
    cartonizeWorkflow: Array<{
        id: string;
        type: PackagingType;
        items: Array<{
            item: {
                id: string;
            };
        }> | null;
    } | null> | null;
    shipmentRatingCalculateWorkflow: Array<{
        id: string;
        displayName: string;
        currencyCode: CurrencyCode;
        amount: number;
        shippingProfile: {
            serviceLevel: {
                deliveryType: DeliveryType | null;
                code: string;
            };
            transitTime: {
                min: number | null;
                max: number | null;
                guaranteedDelivery: string | null;
                type: TransitTypeCode | null;
            } | null;
        } | null;
    }>;
    landedCostCalculateWorkflow: Array<{
        id: string;
        method: IncotermCode;
        rootId: string;
        landedCostGuaranteeCode: LandedCostGuaranteeCode;
        amountSubtotals: {
            landedCostTotal: number;
            items: number;
            shipping: number;
            discounts: number | null;
        } | null;
        shipmentRating: {
            id: string;
        };
        remittance: Array<{
            amount: number;
            description: string;
        }>;
        deMinimis: Array<{
            type: DeMinimisType;
            threshold: DeMinimisThreshold;
            method: IncotermCode;
            note: string;
            formula: string;
        }>;
        taxes: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        duties: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        fees: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        appliedAdjustments: Array<{
            amount: number;
            type: LandedCostAdjustmentType | null;
            adjustment: {
                source: AdjustmentSource | null;
                name: string | null;
            } | null;
            item: {
                amount: number;
            } | null;
        }> | null;
    } | null> | null;
    checkoutSessionWorkflow: Array<{
        landedCostId: string;
        subtotals: {
            items: number;
            shipping: number;
            duties: number;
            taxes: number;
            adjustments: number;
            fees: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            total: number;
            exchangeRate: {
                id: string;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                rate: number;
                type: ExchangeRateType;
            };
        };
    }> | null;
};
export type CalculateLandedCostMutation = {
    partyCreateWorkflow: Array<{
        type: PartyType | null;
        id: string;
        organization: string;
    }>;
    itemCreateWorkflow: Array<{
        id: string;
        amount: number;
        name: string | null;
        description: string | null;
        imageUrl: string | null;
        quantity: number;
        sku: string | null;
        productId: string;
        reverseAmountDetail: Array<{
            inclusivePriceConfigurationId: string | null;
        }> | null;
        restriction: {
            reason: string;
            action: RestrictedItemAction;
        } | null;
        attributes: Array<{
            key: string | null;
            value: string | null;
        } | null> | null;
    }>;
    cartonizeWorkflow: Array<{
        id: string;
        type: PackagingType;
        items: Array<{
            item: {
                id: string;
            };
        }> | null;
    } | null> | null;
    shipmentRatingCalculateWorkflow: Array<{
        id: string;
        displayName: string;
        currencyCode: CurrencyCode;
        amount: number;
        shippingProfile: {
            serviceLevel: {
                deliveryType: DeliveryType | null;
                code: string;
            };
            transitTime: {
                min: number | null;
                max: number | null;
                guaranteedDelivery: string | null;
                type: TransitTypeCode | null;
            } | null;
        } | null;
    }>;
    landedCostCalculateWorkflow: Array<{
        id: string;
        method: IncotermCode;
        rootId: string;
        landedCostGuaranteeCode: LandedCostGuaranteeCode;
        amountSubtotals: {
            landedCostTotal: number;
            items: number;
            shipping: number;
            discounts: number | null;
        } | null;
        shipmentRating: {
            id: string;
        };
        remittance: Array<{
            amount: number;
            description: string;
        }>;
        deMinimis: Array<{
            type: DeMinimisType;
            threshold: DeMinimisThreshold;
            method: IncotermCode;
            note: string;
            formula: string;
        }>;
        taxes: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        duties: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        fees: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        appliedAdjustments: Array<{
            amount: number;
            type: LandedCostAdjustmentType | null;
            adjustment: {
                source: AdjustmentSource | null;
                name: string | null;
            } | null;
            item: {
                amount: number;
            } | null;
        }> | null;
    } | null> | null;
    checkoutSessionWorkflow: Array<{
        landedCostId: string;
        subtotals: {
            items: number;
            shipping: number;
            duties: number;
            taxes: number;
            adjustments: number;
            fees: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            total: number;
            exchangeRate: {
                id: string;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                rate: number;
                type: ExchangeRateType;
            };
        };
    }> | null;
};
export type CartItemFragmentFragment = {
    id: string;
    amount: number;
    name: string | null;
    description: string | null;
    imageUrl: string | null;
    quantity: number;
    sku: string | null;
    productId: string;
    reverseAmountDetail: Array<{
        inclusivePriceConfigurationId: string | null;
    }> | null;
    restriction: {
        reason: string;
        action: RestrictedItemAction;
    } | null;
    attributes: Array<{
        key: string | null;
        value: string | null;
    } | null> | null;
};
export type CheckoutPresentmentFragment = {
    landedCostId: string;
    subtotals: {
        items: number;
        shipping: number;
        duties: number;
        taxes: number;
        adjustments: number;
        fees: number;
        landedCostTotal: number;
        presentmentCurrencyCode: CurrencyCode;
        total: number;
        exchangeRate: {
            id: string;
            sourceCurrencyCode: CurrencyCode;
            targetCurrencyCode: CurrencyCode;
            rate: number;
            type: ExchangeRateType;
        };
    };
};
export type LandedCostFragment = {
    id: string;
    method: IncotermCode;
    rootId: string;
    landedCostGuaranteeCode: LandedCostGuaranteeCode;
    amountSubtotals: {
        landedCostTotal: number;
        items: number;
        shipping: number;
        discounts: number | null;
    } | null;
    shipmentRating: {
        id: string;
    };
    remittance: Array<{
        amount: number;
        description: string;
    }>;
    deMinimis: Array<{
        type: DeMinimisType;
        threshold: DeMinimisThreshold;
        method: IncotermCode;
        note: string;
        formula: string;
    }>;
    taxes: Array<{
        amount: number;
        currencyCode: CurrencyCode;
    }>;
    duties: Array<{
        amount: number;
        currencyCode: CurrencyCode;
    }>;
    fees: Array<{
        amount: number;
        currencyCode: CurrencyCode;
    }>;
    appliedAdjustments: Array<{
        amount: number;
        type: LandedCostAdjustmentType | null;
        adjustment: {
            source: AdjustmentSource | null;
            name: string | null;
        } | null;
        item: {
            amount: number;
        } | null;
    }> | null;
};
export type ShipmentRatingFragment = {
    id: string;
    displayName: string;
    currencyCode: CurrencyCode;
    amount: number;
    shippingProfile: {
        serviceLevel: {
            deliveryType: DeliveryType | null;
            code: string;
        };
        transitTime: {
            min: number | null;
            max: number | null;
            guaranteedDelivery: string | null;
            type: TransitTypeCode | null;
        } | null;
    } | null;
};
export type FulfillmentCenterQuery = {
    shippingZones: Array<{
        countryCodes: Array<CountryCode> | null;
        fulfillmentCenter: {
            type: FulfillmentCenterType;
            party: {
                location: {
                    line1: string | null;
                    locality: string | null;
                    postalCode: string | null;
                    administrativeArea: string | null;
                    administrativeAreaCode: string | null;
                    countryCode: CountryCode;
                } | null;
            };
        } | null;
    } | null> | null;
    fulfillmentCenters: Array<{
        type: FulfillmentCenterType;
        party: {
            location: {
                line1: string | null;
                locality: string | null;
                postalCode: string | null;
                administrativeArea: string | null;
                administrativeAreaCode: string | null;
                countryCode: CountryCode;
            } | null;
        };
    }> | null;
};
export type PartyInfoQuery = {
    party: {
        person: {
            companyName: string | null;
            firstName: string | null;
            lastName: string | null;
            phone: string | null;
            email: string | null;
            metadata: Array<{
                key: string;
                value: string | null;
            } | null> | null;
        } | null;
        location: {
            administrativeArea: string | null;
            administrativeAreaCode: string | null;
            line1: string | null;
            line2: string | null;
            line3: string | null;
            postalCode: string | null;
            countryCode: CountryCode;
            locality: string | null;
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
            id: string;
            action: ItemRestrictionAction | null;
            itemDescription: string | null;
            itemRestrictions: Array<{
                hsCode: string;
                id: string;
                note: string;
                type: ItemRestrictionType;
                sources: Array<string | null> | null;
            } | null> | null;
        } | null>;
    };
};
export type BulkClassifyMutation = {
    classificationsCalculate: Array<{
        description: string | null;
        name: string;
        hsCode: {
            code: string;
        } | null;
    }>;
};
export type GetAirwallexPaymentIntentQuery = {
    airwallexPaymentIntent: {
        amount: number | null;
        currency: CurrencyCode | null;
        status: string;
    };
};
export type GetCollectCheckoutSessionQuery = {
    checkoutSession: {
        id: string;
        paymentIntentId: string | null;
        completedAt: string | null;
        clientSecret: string;
        paymentProcessor: CheckoutPaymentProcessorType | null;
        landedCost: {
            id: string;
            shortId: string | null;
        } | null;
        order: {
            id: string;
        } | null;
    };
};
export type GetPartyInfoByLandedCostIdQuery = {
    landedCost: {
        id: string;
        shortId: string | null;
        metadata: Array<{
            key: string;
            value: string;
        }> | null;
        root: {
            parties: Array<{
                type: PartyType | null;
                person: {
                    companyName: string | null;
                    firstName: string | null;
                    lastName: string | null;
                } | null;
                location: {
                    administrativeAreaCode: string | null;
                    countryCode: CountryCode;
                    line1: string | null;
                    line2: string | null;
                    locality: string | null;
                    postalCode: string | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
};
export type GetTaxIdByCountryQuery = {
    taxIds: Array<{
        id: string;
        method: TaxMethodType;
        mode: Mode | null;
        sendEmails: boolean | null;
        taxIdNumber: string;
        allowLowValueOrders: boolean | null;
        countryCode: CountryCode;
        administrativeAreaCode: string | null;
        type: TaxIdType;
    } | null> | null;
};
export type LandedCostSettingsQuery = {
    landedCostSettings: {
        landedCostGuarantee: LandedCostGuaranteeType | null;
        defaultNativeCurrency: CurrencyCode | null;
    } | null;
};
export type PartyCreateMutation = {
    partyCreate: {
        id: string;
    };
};
export type CheckoutSessionCreateMutation = {
    checkoutSessionCreate: {
        id: string;
        clientSecret: string;
        customerSessionClientSecret: string | null;
        cartId: string | null;
        completedAt: string | null;
        paymentProcessor: CheckoutPaymentProcessorType | null;
        organizationId: string;
        order: {
            id: string;
        } | null;
        references: {
            inclusivePriceConfigurationId: string | null;
        } | null;
        customerProfile: {
            name: string | null;
            email: string | null;
            storeCreditBalance: number | null;
            locations: Array<{
                name: string | null;
                email: string | null;
                phone: string | null;
                administrativeArea: string;
                countryCode: CountryCode;
                line1: string;
                line2: string | null;
                locality: string;
                postalCode: string;
            }> | null;
        } | null;
        varianceTestResults: Array<{
            selectedVariantKey: string;
            testKey: string;
        }> | null;
        subtotals: {
            items: number;
            shipping: number;
            duties: number;
            adjustments: number;
            taxes: number;
            fees: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            storeCredit: number;
            total: number;
            exchangeRate: {
                id: string;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                rate: number;
                type: ExchangeRateType;
            };
        };
        landedCost: {
            id: string;
            method: IncotermCode;
            rootId: string;
            landedCostGuaranteeCode: LandedCostGuaranteeCode;
            currencyCode: CurrencyCode;
            remittance: Array<{
                amount: number;
                description: string;
            }>;
            deMinimis: Array<{
                type: DeMinimisType;
                threshold: DeMinimisThreshold;
                method: IncotermCode;
                note: string;
                formula: string;
            }>;
            taxes: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            duties: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            fees: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            appliedAdjustments: Array<{
                amount: number;
                type: LandedCostAdjustmentType | null;
                adjustment: {
                    source: AdjustmentSource | null;
                    name: string | null;
                } | null;
                item: {
                    amount: number;
                } | null;
            }> | null;
            shipmentRating: {
                id: string;
                displayName: string;
                currencyCode: CurrencyCode;
                amount: number;
                shippingProfile: {
                    serviceLevel: {
                        deliveryType: DeliveryType | null;
                        code: string;
                    };
                    transitTime: {
                        min: number | null;
                        max: number | null;
                        guaranteedDelivery: string | null;
                        type: TransitTypeCode | null;
                    } | null;
                } | null;
            };
            amountSubtotals: {
                duties: number;
                discounts: number | null;
                fees: number;
                taxes: number;
                items: number;
                shipping: number;
                landedCostTotal: number;
            } | null;
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
    };
};
export type CheckoutSessionPaymentIntentCreateMutation = {
    checkoutSessionPaymentIntentCreate: {
        id: string;
        clientSecret: string;
        customerSessionClientSecret: string | null;
        cartId: string | null;
        completedAt: string | null;
        paymentProcessor: CheckoutPaymentProcessorType | null;
        organizationId: string;
        order: {
            id: string;
        } | null;
        references: {
            inclusivePriceConfigurationId: string | null;
        } | null;
        customerProfile: {
            name: string | null;
            email: string | null;
            storeCreditBalance: number | null;
            locations: Array<{
                name: string | null;
                email: string | null;
                phone: string | null;
                administrativeArea: string;
                countryCode: CountryCode;
                line1: string;
                line2: string | null;
                locality: string;
                postalCode: string;
            }> | null;
        } | null;
        varianceTestResults: Array<{
            selectedVariantKey: string;
            testKey: string;
        }> | null;
        subtotals: {
            items: number;
            shipping: number;
            duties: number;
            adjustments: number;
            taxes: number;
            fees: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            storeCredit: number;
            total: number;
            exchangeRate: {
                id: string;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                rate: number;
                type: ExchangeRateType;
            };
        };
        landedCost: {
            id: string;
            method: IncotermCode;
            rootId: string;
            landedCostGuaranteeCode: LandedCostGuaranteeCode;
            currencyCode: CurrencyCode;
            remittance: Array<{
                amount: number;
                description: string;
            }>;
            deMinimis: Array<{
                type: DeMinimisType;
                threshold: DeMinimisThreshold;
                method: IncotermCode;
                note: string;
                formula: string;
            }>;
            taxes: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            duties: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            fees: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            appliedAdjustments: Array<{
                amount: number;
                type: LandedCostAdjustmentType | null;
                adjustment: {
                    source: AdjustmentSource | null;
                    name: string | null;
                } | null;
                item: {
                    amount: number;
                } | null;
            }> | null;
            shipmentRating: {
                id: string;
                displayName: string;
                currencyCode: CurrencyCode;
                amount: number;
                shippingProfile: {
                    serviceLevel: {
                        deliveryType: DeliveryType | null;
                        code: string;
                    };
                    transitTime: {
                        min: number | null;
                        max: number | null;
                        guaranteedDelivery: string | null;
                        type: TransitTypeCode | null;
                    } | null;
                } | null;
            };
            amountSubtotals: {
                duties: number;
                discounts: number | null;
                fees: number;
                taxes: number;
                items: number;
                shipping: number;
                landedCostTotal: number;
            } | null;
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
    };
};
export type PaypalOrderCreateMutation = {
    paypalOrderCreate: {
        paypalOrderId: string | null;
    };
};
export type ExchangeRateCreateMutation = {
    exchangeRateCreate: {
        rate: number;
        type: ExchangeRateType;
        expiresAt: string;
        targetFormat: {
            currencyCode: CurrencyCode;
            decimalDelimiter: string;
            symbol: string;
            symbolLocation: CurrencySymbolLocation | null;
            thousandsDelimiter: string;
            scale: number;
        } | null;
    } | null;
};
export type CurrencyConversionCreateMutation = {
    currencyConversionCreate: {
        exchangeRate: {
            rate: number;
            type: ExchangeRateType;
            expiresAt: string;
            targetFormat: {
                currencyCode: CurrencyCode;
                decimalDelimiter: string;
                symbol: string;
                symbolLocation: CurrencySymbolLocation | null;
                thousandsDelimiter: string;
                scale: number;
            } | null;
        };
    };
};
export type CartCheckoutWorkflowQuery = {
    cartCheckoutWorkflow: {
        credentialTokenId: string;
        organizationId: string;
        cart: {
            id: string;
            type: CartType | null;
            createdAt: string;
            expiresAt: string | null;
            organization: {
                id: string;
                name: string;
                references: {
                    storeId: number | null;
                } | null;
            } | null;
            references: {
                checkoutSessionId: string | null;
                landedCostId: string | null;
            } | null;
            adjustments: Array<{
                amount: number;
                currencyCode: CurrencyCode;
                description: string | null;
                productId: string | null;
                sku: string | null;
                type: CartAdjustmentType;
            }>;
            items: Array<{
                id: string;
                amount: number;
                name: string | null;
                description: string | null;
                countryOfOrigin: CountryCode | null;
                currencyCode: CurrencyCode;
                itemType: ItemType | null;
                imageUrl: string | null;
                quantity: number;
                sku: string | null;
                productId: string;
                measurements: Array<{
                    type: ItemMeasurementType;
                    unitOfMeasure: ItemUnitOfMeasure;
                    value: number;
                } | null> | null;
                metadata: Array<{
                    key: string | null;
                    value: string | null;
                } | null> | null;
                attributes: Array<{
                    key: string | null;
                    value: string | null;
                } | null> | null;
            }>;
            metadata: Array<{
                key: string;
                value: string;
            }>;
        };
        shippingZones: Array<{
            countryCodes: Array<CountryCode> | null;
        } | null> | null;
        helloSettings: {
            desktopLocation: HelloDesktopLocation;
            allowedDomains: Array<string>;
            anchorElementSelector: string;
            cartUrlPattern: string | null;
            currencyBehavior: HelloCurrencyBehavior;
            currencyElementSelector: string;
            excludedUrlPatterns: Array<string>;
            countryOverrideBehavior: HelloCountryOverrideBehavior;
            widgetSize: number | null;
            id: string;
            createdAt: string;
            createdBy: string;
            mobileLocation: HelloMobileLocation;
            mode: Mode;
            organization: string;
            updatedAt: string;
            updatedBy: string;
            homepageUrlPattern: string | null;
            productDetailUrlPattern: string | null;
            productListUrlPattern: string | null;
            peekMessageDelay: number;
            peekMessageBehavior: HelloPeekMessageBehavior;
            restrictionBehavior: HelloRestrictionBehavior;
            dutyTaxEstimationBehavior: HelloEstimateBehavior;
            productAddToCartElementSelector: string | null;
            productDescriptionElementSelector: string | null;
            productPriceElementSelector: string | null;
            productTitleElementSelector: string | null;
            visibilityStatus: HelloVisibilityStatus;
            desktopLocationOverride: {
                anchor: HelloDesktopLocation;
                horizontalOffset: number;
                verticalOffset: number;
            } | null;
            countryDisplayRules: {
                countrySelector: {
                    behavior: HelloCountryDisplayBehavior;
                    excludedCountries: Array<CountryCode>;
                    includedCountries: Array<CountryCode>;
                };
                widgetVisibility: {
                    behavior: HelloCountryDisplayBehavior;
                    excludedCountries: Array<CountryCode>;
                    includedCountries: Array<CountryCode>;
                };
            };
            mobileLocationOverride: {
                anchor: HelloDesktopLocation;
                horizontalOffset: number;
                verticalOffset: number;
            } | null;
        };
        appearanceSettings: {
            colorPrimary: string;
            colorSecondary: string;
            fontFamily: string;
            logoUrl: string;
            style: ElementsUiStyle;
            supportedLocales: Array<string> | null;
            theme: ElementsUiTheme;
            zonosAttribution: ZonosAttribution | null;
            createdAt: string;
            createdBy: string;
            id: string;
            mode: Mode;
            organization: string;
            updatedAt: string;
            updatedBy: string;
        };
        checkoutSettings: {
            disabledCountries: Array<CountryCode> | null;
            allowedCharacterSets: AllowedCharacterSets;
            captureDelay: number;
            defaultCartExpiration: number;
            companyFieldsStatus: CheckoutCompanyFieldsStatus;
            domesticElementSelector: string | null;
            allowedSettlementCurrencies: AllowedSettlementCurrencies;
            successBehavior: CheckoutSuccessBehavior;
            customHTML: string;
            mode: Mode;
            successRedirectUrl: string;
            placeOrderButtonSelector: string | null;
            createdAt: string;
            createdBy: string;
            updatedAt: string;
            updatedBy: string;
            id: string;
            organization: string;
            subscriptionStatus: CheckoutSubscriptionStatus;
            visibilityStatus: CheckoutVisibilityStatus;
            merchantPolicyLinks: {
                termsAndConditions: {
                    link: string | null;
                } | null;
                privacyPolicy: {
                    link: string | null;
                } | null;
                refundPolicy: {
                    link: string | null;
                } | null;
                shippingPolicy: {
                    link: string | null;
                } | null;
                warrantyPolicy: {
                    link: string | null;
                } | null;
                euWithdrawalPolicy: {
                    maximumReturnShippingEstimate: number | null;
                    currencyCode: CurrencyCode;
                    status: NotificationActiveStatus | null;
                } | null;
            };
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
            externalPaymentMethods: Array<{
                status: ExternalPaymentMethodStatus;
                type: ExternalPaymentMethodType;
            }> | null;
            analyticsProviders: Array<{
                status: AnalyticsProviderStatus;
                type: AnalyticsProviderType;
            }>;
            externalServiceTokens: Array<{
                token: string;
                type: ExternalServiceTokenType;
            }>;
            varianceTestRegistrations: Array<{
                testKey: string;
                varianceAllocation: Array<{
                    percentage: number;
                    variantKey: string;
                }>;
            }> | null;
            plugins: {
                bigcommerce: {
                    allowBypassQuery: boolean;
                };
            };
        };
        onlineStoreSettings: {
            allowedDomains: Array<string>;
            url: string;
        };
        landedCostSettings: {
            landedCostGuarantee: LandedCostGuaranteeType | null;
            defaultNativeCurrency: CurrencyCode | null;
        };
    };
};
export type RenewCartExpirationTokenMutation = {
    cartUpdate: {
        expiresAt: string | null;
    };
};
export type GetCheckoutSessionQuery = {
    checkoutSession: {
        clientSecret: string;
        completedAt: string | null;
        customerProfile: {
            storeCreditBalance: number | null;
        } | null;
        subtotals: {
            presentmentCurrencyCode: CurrencyCode;
        };
        order: {
            id: string;
        } | null;
        landedCost: {
            id: string;
            root: {
                parties: Array<{
                    id: string;
                } | null> | null;
            } | null;
        } | null;
    };
};
export type PaypalOrderQuery = {
    paypalOrder: {
        intent: PaypalOrderIntent;
        status: PaypalOrderStatus | null;
    };
};
export type ActiveDiscountsQuery = {
    rules: {
        totalCount: number;
    } | null;
};
export type InclusivePriceConfigurationsQuery = {
    inclusivePriceConfigurations: {
        edges: Array<{
            node: {
                id: string;
                shipToCountry: CountryCode;
                effectiveRate: number;
                dutyConfiguration: {
                    rate: number;
                    status: InclusivePriceConfigurationStatus;
                } | null;
                taxConfiguration: {
                    rate: number;
                    status: InclusivePriceConfigurationStatus;
                };
                feeConfiguration: {
                    externalRate: number;
                    internalRate: number;
                } | null;
            };
        }>;
    } | null;
};
export type InclusivePriceConfigurationIdQuery = {
    inclusivePriceConfigurations: {
        edges: Array<{
            node: {
                id: string;
            };
        }>;
    } | null;
};
export type CheckoutSessionOrderCreateMutation = {
    checkoutSessionOrderCreate: {
        order: {
            id: string;
        } | null;
    };
};
export type GetReceiptCheckoutSessionQuery = {
    checkoutSession: {
        id: string;
        references: {
            orderChargeId: string | null;
        } | null;
        order: {
            id: string;
            type: OrderType | null;
            currencyCode: CurrencyCode;
            parties: Array<{
                type: PartyType | null;
                person: {
                    companyName: string | null;
                    email: string | null;
                    lastName: string | null;
                    firstName: string | null;
                } | null;
            }> | null;
            landedCosts: Array<{
                shortId: string | null;
            }> | null;
            charges: Array<{
                id: string;
                paymentProcessor: PaymentProcessorCode;
                createdAt: string;
                paymentMethods: Array<string> | null;
                paymentStatus: OrderPaymentStatus;
                cardDetail: {
                    last4: string | null;
                    cardBrand: string | null;
                } | null;
            }> | null;
            amountSubtotalsDetails: Array<{
                currencyCode: CurrencyCode;
                orderChargeId: string | null;
                amount: number;
                amountUnrounded: number;
                type: AmountDetailSourceType | null;
                targets: Array<AmountDetailTarget>;
            }> | null;
        } | null;
    };
};
export type GetReceiptOrderQuery = {
    order: {
        id: string;
        type: OrderType | null;
        currencyCode: CurrencyCode;
        parties: Array<{
            type: PartyType | null;
            person: {
                companyName: string | null;
                email: string | null;
                lastName: string | null;
                firstName: string | null;
            } | null;
        }> | null;
        landedCosts: Array<{
            shortId: string | null;
        }> | null;
        charges: Array<{
            id: string;
            paymentProcessor: PaymentProcessorCode;
            createdAt: string;
            paymentMethods: Array<string> | null;
            paymentStatus: OrderPaymentStatus;
            cardDetail: {
                last4: string | null;
                cardBrand: string | null;
            } | null;
        }> | null;
        amountSubtotalsDetails: Array<{
            currencyCode: CurrencyCode;
            orderChargeId: string | null;
            amount: number;
            amountUnrounded: number;
            type: AmountDetailSourceType | null;
            targets: Array<AmountDetailTarget>;
        }> | null;
    } | null;
};
export type ReceiptOrderFragment = {
    id: string;
    type: OrderType | null;
    currencyCode: CurrencyCode;
    parties: Array<{
        type: PartyType | null;
        person: {
            companyName: string | null;
            email: string | null;
            lastName: string | null;
            firstName: string | null;
        } | null;
    }> | null;
    landedCosts: Array<{
        shortId: string | null;
    }> | null;
    charges: Array<{
        id: string;
        paymentProcessor: PaymentProcessorCode;
        createdAt: string;
        paymentMethods: Array<string> | null;
        paymentStatus: OrderPaymentStatus;
        cardDetail: {
            last4: string | null;
            cardBrand: string | null;
        } | null;
    }> | null;
    amountSubtotalsDetails: Array<{
        currencyCode: CurrencyCode;
        orderChargeId: string | null;
        amount: number;
        amountUnrounded: number;
        type: AmountDetailSourceType | null;
        targets: Array<AmountDetailTarget>;
    }> | null;
};
export type GetCartForCollectReceiptQuery = {
    cartCheckoutWorkflow: {
        credentialTokenId: string;
        organizationId: string;
        cart: {
            id: string;
            type: CartType | null;
            createdAt: string;
            expiresAt: string | null;
            organization: {
                id: string;
                name: string;
                references: {
                    storeId: number | null;
                } | null;
            } | null;
            references: {
                checkoutSessionId: string | null;
                landedCostId: string | null;
            } | null;
            adjustments: Array<{
                amount: number;
                currencyCode: CurrencyCode;
                description: string | null;
                productId: string | null;
                sku: string | null;
                type: CartAdjustmentType;
            }>;
            items: Array<{
                id: string;
                amount: number;
                name: string | null;
                description: string | null;
                countryOfOrigin: CountryCode | null;
                currencyCode: CurrencyCode;
                itemType: ItemType | null;
                imageUrl: string | null;
                quantity: number;
                sku: string | null;
                productId: string;
                measurements: Array<{
                    type: ItemMeasurementType;
                    unitOfMeasure: ItemUnitOfMeasure;
                    value: number;
                } | null> | null;
                attributes: Array<{
                    key: string | null;
                    value: string | null;
                } | null> | null;
            }>;
            metadata: Array<{
                key: string;
                value: string;
            }>;
        };
        onlineStoreSettings: {
            url: string;
        };
    };
};
export type SelectCheckoutVarianceTestMutation = {
    checkoutVarianceTestRegistrationSelect: Array<{
        testKey: string;
        selectedVariantKey: string;
    }>;
};
export type ShippingZonesQuery = {
    shippingZones: Array<{
        countryCodes: Array<CountryCode> | null;
    } | null> | null;
};
export type StoreCreditApplyToCheckoutSessionMutation = {
    storeCreditApplyToCheckoutSession: {
        amount: number;
        balanceAfter: number;
        id: string;
        type: StoreCreditTransactionType;
    };
};
export type CheckoutSessionStoreCreditOrderCreateMutation = {
    checkoutSessionStoreCreditOrderCreate: {
        order: {
            id: string;
        } | null;
    };
};
export type GetCheckoutSessionAttributesQuery = {
    checkoutSession: {
        attributes: Array<{
            key: string;
            value: string;
        }>;
    };
};
export type GetCheckoutSessionReferencesQuery = {
    checkoutSession: {
        attributes: Array<{
            key: string;
            value: string;
        }>;
        references: {
            inclusivePriceConfigurationId: string | null;
            orderChargeId: string | null;
        } | null;
    };
};
export type CheckoutSessionUpdateAttributesMutation = {
    checkoutSessionUpdate: {
        id: string;
        attributes: Array<{
            key: string;
            value: string;
        }>;
    };
};
export type CheckoutSessionBaseCurrencyUpdateMutation = {
    checkoutSessionBaseCurrencyUpdate: {
        subtotals: {
            presentmentCurrencyCode: CurrencyCode;
            total: number;
        };
    };
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
    id: string;
    clientSecret: string;
    customerSessionClientSecret: string | null;
    cartId: string | null;
    completedAt: string | null;
    paymentProcessor: CheckoutPaymentProcessorType | null;
    organizationId: string;
    order: {
        id: string;
    } | null;
    references: {
        inclusivePriceConfigurationId: string | null;
    } | null;
    customerProfile: {
        name: string | null;
        email: string | null;
        storeCreditBalance: number | null;
        locations: Array<{
            name: string | null;
            email: string | null;
            phone: string | null;
            administrativeArea: string;
            countryCode: CountryCode;
            line1: string;
            line2: string | null;
            locality: string;
            postalCode: string;
        }> | null;
    } | null;
    varianceTestResults: Array<{
        selectedVariantKey: string;
        testKey: string;
    }> | null;
    subtotals: {
        items: number;
        shipping: number;
        duties: number;
        adjustments: number;
        taxes: number;
        fees: number;
        landedCostTotal: number;
        presentmentCurrencyCode: CurrencyCode;
        storeCredit: number;
        total: number;
        exchangeRate: {
            id: string;
            sourceCurrencyCode: CurrencyCode;
            targetCurrencyCode: CurrencyCode;
            rate: number;
            type: ExchangeRateType;
        };
    };
    landedCost: {
        id: string;
        method: IncotermCode;
        rootId: string;
        landedCostGuaranteeCode: LandedCostGuaranteeCode;
        currencyCode: CurrencyCode;
        remittance: Array<{
            amount: number;
            description: string;
        }>;
        deMinimis: Array<{
            type: DeMinimisType;
            threshold: DeMinimisThreshold;
            method: IncotermCode;
            note: string;
            formula: string;
        }>;
        taxes: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        duties: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        fees: Array<{
            amount: number;
            currencyCode: CurrencyCode;
        }>;
        appliedAdjustments: Array<{
            amount: number;
            type: LandedCostAdjustmentType | null;
            adjustment: {
                source: AdjustmentSource | null;
                name: string | null;
            } | null;
            item: {
                amount: number;
            } | null;
        }> | null;
        shipmentRating: {
            id: string;
            displayName: string;
            currencyCode: CurrencyCode;
            amount: number;
            shippingProfile: {
                serviceLevel: {
                    deliveryType: DeliveryType | null;
                    code: string;
                };
                transitTime: {
                    min: number | null;
                    max: number | null;
                    guaranteedDelivery: string | null;
                    type: TransitTypeCode | null;
                } | null;
            } | null;
        };
        amountSubtotals: {
            duties: number;
            discounts: number | null;
            fees: number;
            taxes: number;
            items: number;
            shipping: number;
            landedCostTotal: number;
        } | null;
    } | null;
    metadata: Array<{
        key: string;
        value: string;
    } | null> | null;
};
export type CheckoutSessionUpdateMutation = {
    checkoutSessionUpdate: {
        id: string;
        clientSecret: string;
        customerSessionClientSecret: string | null;
        cartId: string | null;
        completedAt: string | null;
        paymentProcessor: CheckoutPaymentProcessorType | null;
        organizationId: string;
        order: {
            id: string;
        } | null;
        references: {
            inclusivePriceConfigurationId: string | null;
        } | null;
        customerProfile: {
            name: string | null;
            email: string | null;
            storeCreditBalance: number | null;
            locations: Array<{
                name: string | null;
                email: string | null;
                phone: string | null;
                administrativeArea: string;
                countryCode: CountryCode;
                line1: string;
                line2: string | null;
                locality: string;
                postalCode: string;
            }> | null;
        } | null;
        varianceTestResults: Array<{
            selectedVariantKey: string;
            testKey: string;
        }> | null;
        subtotals: {
            items: number;
            shipping: number;
            duties: number;
            adjustments: number;
            taxes: number;
            fees: number;
            landedCostTotal: number;
            presentmentCurrencyCode: CurrencyCode;
            storeCredit: number;
            total: number;
            exchangeRate: {
                id: string;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                rate: number;
                type: ExchangeRateType;
            };
        };
        landedCost: {
            id: string;
            method: IncotermCode;
            rootId: string;
            landedCostGuaranteeCode: LandedCostGuaranteeCode;
            currencyCode: CurrencyCode;
            remittance: Array<{
                amount: number;
                description: string;
            }>;
            deMinimis: Array<{
                type: DeMinimisType;
                threshold: DeMinimisThreshold;
                method: IncotermCode;
                note: string;
                formula: string;
            }>;
            taxes: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            duties: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            fees: Array<{
                amount: number;
                currencyCode: CurrencyCode;
            }>;
            appliedAdjustments: Array<{
                amount: number;
                type: LandedCostAdjustmentType | null;
                adjustment: {
                    source: AdjustmentSource | null;
                    name: string | null;
                } | null;
                item: {
                    amount: number;
                } | null;
            }> | null;
            shipmentRating: {
                id: string;
                displayName: string;
                currencyCode: CurrencyCode;
                amount: number;
                shippingProfile: {
                    serviceLevel: {
                        deliveryType: DeliveryType | null;
                        code: string;
                    };
                    transitTime: {
                        min: number | null;
                        max: number | null;
                        guaranteedDelivery: string | null;
                        type: TransitTypeCode | null;
                    } | null;
                } | null;
            };
            amountSubtotals: {
                duties: number;
                discounts: number | null;
                fees: number;
                taxes: number;
                items: number;
                shipping: number;
                landedCostTotal: number;
            } | null;
        } | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
    };
};
export type ZonosSettingsQuery = {
    helloSettings: {
        desktopLocation: HelloDesktopLocation;
        allowedDomains: Array<string>;
        anchorElementSelector: string;
        cartUrlPattern: string | null;
        currencyBehavior: HelloCurrencyBehavior;
        currencyElementSelector: string;
        excludedUrlPatterns: Array<string>;
        countryOverrideBehavior: HelloCountryOverrideBehavior;
        widgetSize: number | null;
        id: string;
        createdAt: string;
        createdBy: string;
        mobileLocation: HelloMobileLocation;
        mode: Mode;
        organization: string;
        updatedAt: string;
        updatedBy: string;
        homepageUrlPattern: string | null;
        productDetailUrlPattern: string | null;
        productListUrlPattern: string | null;
        peekMessageDelay: number;
        peekMessageBehavior: HelloPeekMessageBehavior;
        restrictionBehavior: HelloRestrictionBehavior;
        dutyTaxEstimationBehavior: HelloEstimateBehavior;
        productAddToCartElementSelector: string | null;
        productDescriptionElementSelector: string | null;
        productPriceElementSelector: string | null;
        productTitleElementSelector: string | null;
        visibilityStatus: HelloVisibilityStatus;
        desktopLocationOverride: {
            anchor: HelloDesktopLocation;
            horizontalOffset: number;
            verticalOffset: number;
        } | null;
        countryDisplayRules: {
            countrySelector: {
                behavior: HelloCountryDisplayBehavior;
                excludedCountries: Array<CountryCode>;
                includedCountries: Array<CountryCode>;
            };
            widgetVisibility: {
                behavior: HelloCountryDisplayBehavior;
                excludedCountries: Array<CountryCode>;
                includedCountries: Array<CountryCode>;
            };
        };
        mobileLocationOverride: {
            anchor: HelloDesktopLocation;
            horizontalOffset: number;
            verticalOffset: number;
        } | null;
    } | null;
    appearanceSettings: {
        colorPrimary: string;
        colorSecondary: string;
        fontFamily: string;
        logoUrl: string;
        style: ElementsUiStyle;
        supportedLocales: Array<string> | null;
        theme: ElementsUiTheme;
        zonosAttribution: ZonosAttribution | null;
        createdAt: string;
        createdBy: string;
        id: string;
        mode: Mode;
        organization: string;
        updatedAt: string;
        updatedBy: string;
    } | null;
    checkoutSettings: {
        disabledCountries: Array<CountryCode> | null;
        allowedCharacterSets: AllowedCharacterSets;
        captureDelay: number;
        defaultCartExpiration: number;
        companyFieldsStatus: CheckoutCompanyFieldsStatus;
        domesticElementSelector: string | null;
        allowedSettlementCurrencies: AllowedSettlementCurrencies;
        successBehavior: CheckoutSuccessBehavior;
        customHTML: string;
        mode: Mode;
        successRedirectUrl: string;
        placeOrderButtonSelector: string | null;
        createdAt: string;
        createdBy: string;
        updatedAt: string;
        updatedBy: string;
        id: string;
        organization: string;
        subscriptionStatus: CheckoutSubscriptionStatus;
        visibilityStatus: CheckoutVisibilityStatus;
        merchantPolicyLinks: {
            termsAndConditions: {
                link: string | null;
            } | null;
            privacyPolicy: {
                link: string | null;
            } | null;
            refundPolicy: {
                link: string | null;
            } | null;
            shippingPolicy: {
                link: string | null;
            } | null;
            warrantyPolicy: {
                link: string | null;
            } | null;
            euWithdrawalPolicy: {
                maximumReturnShippingEstimate: number | null;
                currencyCode: CurrencyCode;
                status: NotificationActiveStatus | null;
            } | null;
        };
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
        externalPaymentMethods: Array<{
            status: ExternalPaymentMethodStatus;
            type: ExternalPaymentMethodType;
        }> | null;
        analyticsProviders: Array<{
            status: AnalyticsProviderStatus;
            type: AnalyticsProviderType;
        }>;
        externalServiceTokens: Array<{
            token: string;
            type: ExternalServiceTokenType;
        }>;
        varianceTestRegistrations: Array<{
            testKey: string;
            varianceAllocation: Array<{
                percentage: number;
                variantKey: string;
            }>;
        }> | null;
        plugins: {
            bigcommerce: {
                allowBypassQuery: boolean;
            };
        };
    } | null;
    organization: {
        id: string;
        name: string;
        references: {
            storeId: number | null;
        } | null;
    } | null;
    onlineStoreSettings: {
        allowedDomains: Array<string>;
        url: string;
    };
};
export type HelloSettingsQuery = {
    helloSettings: {
        desktopLocation: HelloDesktopLocation;
        allowedDomains: Array<string>;
        anchorElementSelector: string;
        cartUrlPattern: string | null;
        currencyBehavior: HelloCurrencyBehavior;
        currencyElementSelector: string;
        excludedUrlPatterns: Array<string>;
        countryOverrideBehavior: HelloCountryOverrideBehavior;
        widgetSize: number | null;
        id: string;
        createdAt: string;
        createdBy: string;
        mobileLocation: HelloMobileLocation;
        mode: Mode;
        organization: string;
        updatedAt: string;
        updatedBy: string;
        homepageUrlPattern: string | null;
        productDetailUrlPattern: string | null;
        productListUrlPattern: string | null;
        peekMessageDelay: number;
        peekMessageBehavior: HelloPeekMessageBehavior;
        restrictionBehavior: HelloRestrictionBehavior;
        dutyTaxEstimationBehavior: HelloEstimateBehavior;
        productAddToCartElementSelector: string | null;
        productDescriptionElementSelector: string | null;
        productPriceElementSelector: string | null;
        productTitleElementSelector: string | null;
        visibilityStatus: HelloVisibilityStatus;
        desktopLocationOverride: {
            anchor: HelloDesktopLocation;
            horizontalOffset: number;
            verticalOffset: number;
        } | null;
        countryDisplayRules: {
            countrySelector: {
                behavior: HelloCountryDisplayBehavior;
                excludedCountries: Array<CountryCode>;
                includedCountries: Array<CountryCode>;
            };
            widgetVisibility: {
                behavior: HelloCountryDisplayBehavior;
                excludedCountries: Array<CountryCode>;
                includedCountries: Array<CountryCode>;
            };
        };
        mobileLocationOverride: {
            anchor: HelloDesktopLocation;
            horizontalOffset: number;
            verticalOffset: number;
        } | null;
    } | null;
};
export type CheckoutSettingsQuery = {
    checkoutSettings: {
        disabledCountries: Array<CountryCode> | null;
        allowedCharacterSets: AllowedCharacterSets;
        captureDelay: number;
        defaultCartExpiration: number;
        companyFieldsStatus: CheckoutCompanyFieldsStatus;
        domesticElementSelector: string | null;
        allowedSettlementCurrencies: AllowedSettlementCurrencies;
        successBehavior: CheckoutSuccessBehavior;
        customHTML: string;
        mode: Mode;
        successRedirectUrl: string;
        placeOrderButtonSelector: string | null;
        createdAt: string;
        createdBy: string;
        updatedAt: string;
        updatedBy: string;
        id: string;
        organization: string;
        subscriptionStatus: CheckoutSubscriptionStatus;
        visibilityStatus: CheckoutVisibilityStatus;
        merchantPolicyLinks: {
            termsAndConditions: {
                link: string | null;
            } | null;
            privacyPolicy: {
                link: string | null;
            } | null;
            refundPolicy: {
                link: string | null;
            } | null;
            shippingPolicy: {
                link: string | null;
            } | null;
            warrantyPolicy: {
                link: string | null;
            } | null;
            euWithdrawalPolicy: {
                maximumReturnShippingEstimate: number | null;
                currencyCode: CurrencyCode;
                status: NotificationActiveStatus | null;
            } | null;
        };
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
        externalPaymentMethods: Array<{
            status: ExternalPaymentMethodStatus;
            type: ExternalPaymentMethodType;
        }> | null;
        analyticsProviders: Array<{
            status: AnalyticsProviderStatus;
            type: AnalyticsProviderType;
        }>;
        externalServiceTokens: Array<{
            token: string;
            type: ExternalServiceTokenType;
        }>;
        varianceTestRegistrations: Array<{
            testKey: string;
            varianceAllocation: Array<{
                percentage: number;
                variantKey: string;
            }>;
        }> | null;
        plugins: {
            bigcommerce: {
                allowBypassQuery: boolean;
            };
        };
    } | null;
};
export type AppearanceSettingsQuery = {
    appearanceSettings: {
        colorPrimary: string;
        colorSecondary: string;
        fontFamily: string;
        logoUrl: string;
        style: ElementsUiStyle;
        supportedLocales: Array<string> | null;
        theme: ElementsUiTheme;
        zonosAttribution: ZonosAttribution | null;
        createdAt: string;
        createdBy: string;
        id: string;
        mode: Mode;
        organization: string;
        updatedAt: string;
        updatedBy: string;
    } | null;
};
export type CheckoutSettingFragment = {
    disabledCountries: Array<CountryCode> | null;
    allowedCharacterSets: AllowedCharacterSets;
    captureDelay: number;
    defaultCartExpiration: number;
    companyFieldsStatus: CheckoutCompanyFieldsStatus;
    domesticElementSelector: string | null;
    allowedSettlementCurrencies: AllowedSettlementCurrencies;
    successBehavior: CheckoutSuccessBehavior;
    customHTML: string;
    mode: Mode;
    successRedirectUrl: string;
    placeOrderButtonSelector: string | null;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    id: string;
    organization: string;
    subscriptionStatus: CheckoutSubscriptionStatus;
    visibilityStatus: CheckoutVisibilityStatus;
    merchantPolicyLinks: {
        termsAndConditions: {
            link: string | null;
        } | null;
        privacyPolicy: {
            link: string | null;
        } | null;
        refundPolicy: {
            link: string | null;
        } | null;
        shippingPolicy: {
            link: string | null;
        } | null;
        warrantyPolicy: {
            link: string | null;
        } | null;
        euWithdrawalPolicy: {
            maximumReturnShippingEstimate: number | null;
            currencyCode: CurrencyCode;
            status: NotificationActiveStatus | null;
        } | null;
    };
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
    externalPaymentMethods: Array<{
        status: ExternalPaymentMethodStatus;
        type: ExternalPaymentMethodType;
    }> | null;
    analyticsProviders: Array<{
        status: AnalyticsProviderStatus;
        type: AnalyticsProviderType;
    }>;
    externalServiceTokens: Array<{
        token: string;
        type: ExternalServiceTokenType;
    }>;
    varianceTestRegistrations: Array<{
        testKey: string;
        varianceAllocation: Array<{
            percentage: number;
            variantKey: string;
        }>;
    }> | null;
    plugins: {
        bigcommerce: {
            allowBypassQuery: boolean;
        };
    };
};
export type HelloSettingFragment = {
    desktopLocation: HelloDesktopLocation;
    allowedDomains: Array<string>;
    anchorElementSelector: string;
    cartUrlPattern: string | null;
    currencyBehavior: HelloCurrencyBehavior;
    currencyElementSelector: string;
    excludedUrlPatterns: Array<string>;
    countryOverrideBehavior: HelloCountryOverrideBehavior;
    widgetSize: number | null;
    id: string;
    createdAt: string;
    createdBy: string;
    mobileLocation: HelloMobileLocation;
    mode: Mode;
    organization: string;
    updatedAt: string;
    updatedBy: string;
    homepageUrlPattern: string | null;
    productDetailUrlPattern: string | null;
    productListUrlPattern: string | null;
    peekMessageDelay: number;
    peekMessageBehavior: HelloPeekMessageBehavior;
    restrictionBehavior: HelloRestrictionBehavior;
    dutyTaxEstimationBehavior: HelloEstimateBehavior;
    productAddToCartElementSelector: string | null;
    productDescriptionElementSelector: string | null;
    productPriceElementSelector: string | null;
    productTitleElementSelector: string | null;
    visibilityStatus: HelloVisibilityStatus;
    desktopLocationOverride: {
        anchor: HelloDesktopLocation;
        horizontalOffset: number;
        verticalOffset: number;
    } | null;
    countryDisplayRules: {
        countrySelector: {
            behavior: HelloCountryDisplayBehavior;
            excludedCountries: Array<CountryCode>;
            includedCountries: Array<CountryCode>;
        };
        widgetVisibility: {
            behavior: HelloCountryDisplayBehavior;
            excludedCountries: Array<CountryCode>;
            includedCountries: Array<CountryCode>;
        };
    };
    mobileLocationOverride: {
        anchor: HelloDesktopLocation;
        horizontalOffset: number;
        verticalOffset: number;
    } | null;
};
export type AppearanceSettingFragment = {
    colorPrimary: string;
    colorSecondary: string;
    fontFamily: string;
    logoUrl: string;
    style: ElementsUiStyle;
    supportedLocales: Array<string> | null;
    theme: ElementsUiTheme;
    zonosAttribution: ZonosAttribution | null;
    createdAt: string;
    createdBy: string;
    id: string;
    mode: Mode;
    organization: string;
    updatedAt: string;
    updatedBy: string;
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
        createdAt: string;
        updatedAt: string;
        trackingNumbers: Array<string | null> | null;
        currencyCode: CurrencyCode;
        id: string;
        mode: Mode;
        status: OrderStatus;
        amountSubtotals: {
            duties: number;
            fees: number;
            items: number;
            taxes: number;
            shipping: number;
            variance: number;
            discounts: number | null;
        };
        checkoutSession: {
            subtotals: {
                exchangeRate: {
                    rate: number;
                    sourceCurrencyCode: CurrencyCode;
                    targetCurrencyCode: CurrencyCode;
                };
            };
        } | null;
        amountSubtotalsDetails: Array<{
            amount: number;
            currencyCode: CurrencyCode;
            type: AmountDetailSourceType | null;
            targets: Array<AmountDetailTarget>;
        }> | null;
        items: Array<{
            createdAt: string;
            amount: number;
            itemType: ItemType | null;
            parentProductId: string | null;
            description: string | null;
            hsCode: string | null;
            countryOfOrigin: CountryCode | null;
            name: string | null;
            productId: string;
            quantity: number;
            sku: string | null;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            metadata: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
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
            duties: Array<{
                exchangeRate: {
                    rate: number;
                    sourceCurrencyCode: CurrencyCode;
                    targetCurrencyCode: CurrencyCode;
                } | null;
            }>;
            shipmentRating: {
                id: string;
                amount: number;
                currencyCode: CurrencyCode;
                displayName: string;
                serviceLevelCode: string;
                details: Array<{
                    amount: number;
                    carrierCode: string;
                    type: ShipmentAmountType;
                }> | null;
            };
            appliedAdjustments: Array<{
                amount: number;
                adjustment: {
                    name: string | null;
                } | null;
                item: {
                    name: string | null;
                    amount: number;
                } | null;
            }> | null;
        }> | null;
        metadata: Array<{
            key: string;
            value: string;
        } | null> | null;
        parties: Array<{
            id: string;
            type: PartyType | null;
            person: {
                companyName: string | null;
                firstName: string | null;
                lastName: string | null;
                email: string | null;
                phone: string | null;
            } | null;
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
        }> | null;
        root: {
            exchangeRates: Array<{
                rate: number;
                sourceCurrencyCode: CurrencyCode;
                targetCurrencyCode: CurrencyCode;
                type: ExchangeRateType;
            }>;
        } | null;
        references: Array<{
            key: string | null;
            value: string | null;
        }> | null;
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
export type GetChannelConnectionsQuery = {
    channelConnections: {
        edges: Array<{
            node: {
                id: string;
                externalAccountId: string;
                status: ChannelConnectionStatus;
            };
        }>;
    };
};
export type ChannelConnectionCreateMutation = {
    channelConnectionCreate: {
        id: string;
        status: ChannelConnectionStatus;
    };
};
export type ChannelConnectionUpdateMutation = {
    channelConnectionUpdate: {
        id: string;
        status: ChannelConnectionStatus;
    };
};
export type ChannelConnectionDeleteMutation = {
    channelConnectionDelete: Result;
};
export type GetWebhooksQuery = {
    webhooks: {
        edges: Array<{
            node: {
                id: string;
                url: string;
                query: string;
                type: WebhookType;
                status: WebhookStatus;
                secret: string;
            } | null;
        }>;
    };
};
export type CreateWebhookMutation = {
    webhookCreate: {
        id: string;
        type: WebhookType;
        organizationId: string;
        url: string;
    } | null;
};
export type UpdateWebhookMutation = {
    webhookUpdate: {
        id: string;
        type: WebhookType;
        organizationId: string;
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
        id: string;
        createdAt: string;
        type: CartType | null;
        organization: {
            id: string;
            references: {
                storeId: number | null;
            } | null;
        } | null;
        references: {
            checkoutSessionId: string | null;
            landedCostId: string | null;
        } | null;
        adjustments: Array<{
            amount: number;
            currencyCode: CurrencyCode;
            description: string | null;
            productId: string | null;
            sku: string | null;
            type: CartAdjustmentType;
        }>;
        items: Array<{
            id: string;
            amount: number;
            name: string | null;
            description: string | null;
            countryOfOrigin: CountryCode | null;
            currencyCode: CurrencyCode;
            itemType: ItemType | null;
            imageUrl: string | null;
            quantity: number;
            sku: string | null;
            productId: string;
            measurements: Array<{
                type: ItemMeasurementType;
                unitOfMeasure: ItemUnitOfMeasure;
                value: number;
            } | null> | null;
            attributes: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
            metadata: Array<{
                key: string | null;
                value: string | null;
            } | null> | null;
        }>;
        metadata: Array<{
            key: string;
            value: string;
        }>;
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
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: {
    [x: string]: never;
}) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    activeDiscounts(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<ActiveDiscountsQuery>;
    addTrackingNumber(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<AddTrackingNumberMutation>;
    appearanceSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<AppearanceSettingsQuery>;
    bulkClassify(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<BulkClassifyMutation>;
    calculateLandedCost(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CalculateLandedCostMutation>;
    cart(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CartQuery>;
    cartById(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CartByIdQuery>;
    cartCalculateLandedCost(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CartCalculateLandedCostMutation>;
    cartCheckoutWorkflow(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CartCheckoutWorkflowQuery>;
    cartCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CartCreateMutation>;
    cartUpdate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CartUpdateMutation>;
    channelConnectionCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<ChannelConnectionCreateMutation>;
    channelConnectionDelete(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<ChannelConnectionDeleteMutation>;
    channelConnectionUpdate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<ChannelConnectionUpdateMutation>;
    checkItemRestrictions(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckItemRestrictionsMutation>;
    checkoutCustomerProfileAuthenticate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutCustomerProfileAuthenticateMutation>;
    checkoutSessionBaseCurrencyUpdate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionBaseCurrencyUpdateMutation>;
    checkoutSessionCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionCreateMutation>;
    checkoutSessionOrderCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionOrderCreateMutation>;
    checkoutSessionPaymentIntentCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionPaymentIntentCreateMutation>;
    checkoutSessionStoreCreditOrderCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionStoreCreditOrderCreateMutation>;
    checkoutSessionUpdate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionUpdateMutation>;
    checkoutSessionUpdateAttributes(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionUpdateAttributesMutation>;
    checkoutSessionUpdateMetadata(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSessionUpdateMetadataMutation>;
    checkoutSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CheckoutSettingsQuery>;
    createCollectQuote(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CreateCollectQuoteMutation>;
    createWebhook(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CreateWebhookMutation>;
    currencyConversionCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<CurrencyConversionCreateMutation>;
    deleteWebhook(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<DeleteWebhookMutation>;
    exchangeRateCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<ExchangeRateCreateMutation>;
    fulfillmentCenter(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<FulfillmentCenterQuery>;
    getAirwallexPaymentIntent(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetAirwallexPaymentIntentQuery>;
    getCartForCollectReceipt(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCartForCollectReceiptQuery>;
    getCartInfo(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCartInfoQuery>;
    getCartOrganizationInfo(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCartOrganizationInfoQuery>;
    getChannelConnections(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetChannelConnectionsQuery>;
    getCheckoutPlaceOrderButtonSelector(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCheckoutPlaceOrderButtonSelectorQuery>;
    getCheckoutSession(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCheckoutSessionQuery>;
    getCheckoutSessionAttributes(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCheckoutSessionAttributesQuery>;
    getCheckoutSessionReferences(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCheckoutSessionReferencesQuery>;
    getCollectCheckoutSession(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetCollectCheckoutSessionQuery>;
    getOrder(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetOrderQuery>;
    getOrders(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetOrdersQuery>;
    getPartyInfoByLandedCostId(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetPartyInfoByLandedCostIdQuery>;
    getReceiptCheckoutSession(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetReceiptCheckoutSessionQuery>;
    getReceiptOrder(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetReceiptOrderQuery>;
    getTaxIdByCountry(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetTaxIdByCountryQuery>;
    getWebhooks(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<GetWebhooksQuery>;
    helloSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<HelloSettingsQuery>;
    inclusivePriceConfigurationId(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<InclusivePriceConfigurationIdQuery>;
    inclusivePriceConfigurations(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<InclusivePriceConfigurationsQuery>;
    inclusivePriceConfigurationsSync(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<InclusivePriceConfigurationsSyncMutation>;
    landedCostSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<LandedCostSettingsQuery>;
    onlineStoreSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<OnlineStoreSettingsQuery>;
    orderUpdateAccountOrderNumber(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<OrderUpdateAccountOrderNumberMutation>;
    organization(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<OrganizationQuery>;
    organizationByStoreId(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<OrganizationByStoreIdQuery>;
    organizations(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<OrganizationsQuery>;
    partyCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<PartyCreateMutation>;
    partyInfo(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<PartyInfoQuery>;
    paypalOrder(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<PaypalOrderQuery>;
    paypalOrderCapture(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<PaypalOrderCaptureMutation>;
    paypalOrderCreate(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<PaypalOrderCreateMutation>;
    removeTrackingNumber(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<RemoveTrackingNumberMutation>;
    renewCartExpirationToken(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<RenewCartExpirationTokenMutation>;
    selectCheckoutVarianceTest(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<SelectCheckoutVarianceTestMutation>;
    shippingZones(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<ShippingZonesQuery>;
    storeCreditAddCredit(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<StoreCreditAddCreditMutation>;
    storeCreditApplyToCheckoutSession(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<StoreCreditApplyToCheckoutSessionMutation>;
    storeCreditRemoveCredit(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<StoreCreditRemoveCreditMutation>;
    storeCreditsByCustomer(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<StoreCreditsByCustomerQuery>;
    updateWebhook(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<UpdateWebhookMutation>;
    zonosSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit["signal"]): Promise<ZonosSettingsQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
export {};
