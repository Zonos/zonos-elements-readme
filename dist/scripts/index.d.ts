import { PayPalNamespace } from '@paypal/paypal-js';
import { StripeConstructor, StripeElements, StripeAddressElementChangeEvent, ContactOption, PaymentIntent, Stripe } from '@stripe/stripe-js';
import { infer, z } from 'zod';
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';

declare const iframeServices: {
    readonly GOOGLE_PLACES: "zonos--private-iframe-google-places-service-m9bmuh7g";
};
type IframeServiceId = (typeof iframeServices)[keyof typeof iframeServices];
type IframeFetchSuggestionsPayload = {
    request: google.maps.places.AutocompleteRequest;
    type: 'billing' | 'shipping';
};
type IframeSuggestionsResponsePayload = {
    suggestions: {
        id: string;
        matches: {
            endOffset: number;
            startOffset: number;
        }[];
        place: string;
    }[];
    type: 'billing' | 'shipping';
};
type IframePlacePayload = {
    placeId: string;
    type: 'billing' | 'shipping';
};
type IframePlaceResponsePayload = {
    placeDetails: {
        addressComponents: google.maps.places.Place['addressComponents'];
        displayName: google.maps.places.Place['displayName'];
        formattedAddress: google.maps.places.Place['formattedAddress'];
    };
    type: 'billing' | 'shipping';
};
type InitializePayload = Record<string, never>;
type EventPayloadMap = {
    fetchAutocompleteSuggestions: IframeFetchSuggestionsPayload;
    initializeGooglePlacesService: InitializePayload;
    onFetchAutocompleteSuggestions: IframeSuggestionsResponsePayload;
    onInitializeGooglePlacesService: InitializePayload;
    onPlaceSelected: IframePlaceResponsePayload;
    placeSelected: IframePlacePayload;
};
type EventPayloadKey = keyof EventPayloadMap;
/**
 * Base class for iframe services, being used for Iframe to communicate back to the parent window
 */
declare class IframeService {
    private readonly targetElement;
    private readonly targetId;
    constructor(targetElement: HTMLIFrameElement | Window, targetId: IframeServiceId);
    sendMessage: <U extends EventPayloadKey>(type: U, payload: EventPayloadMap[U]) => void;
    static iframeServices: {
        readonly GOOGLE_PLACES: "zonos--private-iframe-google-places-service-m9bmuh7g";
    };
    static sendMessage: <ITarget extends Window | HTMLIFrameElement, IType extends EventPayloadKey>({ id, payload, target, type, }: {
        id: IframeServiceId;
        payload: EventPayloadMap[IType];
        target: ITarget;
        type: IType;
    }) => void;
    static injectPrivateIframe: ({ id, onload, src, }: {
        id: string;
        src: string;
        onload: (prop: HTMLIFrameElement) => void;
    }) => HTMLIFrameElement;
}

type CustomEventMap = {
    legacyCheckoutError: string;
    'zonos-checkout-success': {
        message: string;
    };
};

declare const _envClientSchema: z.ZodObject<{
    NEXT_PUBLIC_FLAG_URL: z.ZodString;
    NEXT_PUBLIC_RELEASE_DATE: z.ZodString;
    NEXT_PUBLIC_ZONOS_API_KEY: z.ZodString;
    NEXT_PUBLIC_ZONOS_CDNJS_CDN_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_CDN_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_CLOUDFLARE_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_JS_DELIVR_CDN_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_PACKAGE_VERSION: z.ZodString;
    NEXT_PUBLIC_ZONOS_ROUTE_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_UNPKG_CDN_URL: z.ZodString;
}, "strip", z.ZodTypeAny, {
    NEXT_PUBLIC_FLAG_URL: string;
    NEXT_PUBLIC_RELEASE_DATE: string;
    NEXT_PUBLIC_ZONOS_API_KEY: string;
    NEXT_PUBLIC_ZONOS_CDNJS_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_CLOUDFLARE_URL: string;
    NEXT_PUBLIC_ZONOS_JS_DELIVR_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_PACKAGE_VERSION: string;
    NEXT_PUBLIC_ZONOS_ROUTE_URL: string;
    NEXT_PUBLIC_ZONOS_UNPKG_CDN_URL: string;
}, {
    NEXT_PUBLIC_FLAG_URL: string;
    NEXT_PUBLIC_RELEASE_DATE: string;
    NEXT_PUBLIC_ZONOS_API_KEY: string;
    NEXT_PUBLIC_ZONOS_CDNJS_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_CLOUDFLARE_URL: string;
    NEXT_PUBLIC_ZONOS_JS_DELIVR_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_PACKAGE_VERSION: string;
    NEXT_PUBLIC_ZONOS_ROUTE_URL: string;
    NEXT_PUBLIC_ZONOS_UNPKG_CDN_URL: string;
}>;
interface Env extends infer<typeof _envClientSchema> {
}

/* eslint-disable no-relative-import-paths/no-relative-import-paths */

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEvent<CustomEventMap[K]>) => void,
    ): void;
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    Stripe?: StripeConstructor;
    Zonos: Zonos;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    bcConfig?: unknown;
    /**
     * In bigcommerce domestic checkout page, some merchants might use Stripe address element for address population.
     */
    bcStripeElements?: StripeElements;
    /**
     * This flag would be set to true if zonosQaUrl is present in the query params and preview script loadZonos.js is injected to DOM
     */
    isZonosPreview?: boolean;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    stencilBootstrap?: unknown;
    /**
     * Currency selector to perform blur currency on init
     */
    zonosBlurCurrencyOnInitCurrencySelector?: string;
    /**
     * Interval id to perform blur currency on init
     */
    zonosBlurCurrencyOnInitIntervalId?: NodeJS.Timeout;
  }

  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv extends Env {}
  }
}

type MissingShippingFieldKey = 'lastName' | 'postal_code' | 'state';
type MissingShippingField = {
    key: MissingShippingFieldKey;
};

declare const adjustmentSource: {
    readonly ApiRequest: "API_REQUEST";
    readonly Discount: "DISCOUNT";
    readonly PromoCode: "PROMO_CODE";
};
type AdjustmentSource = (typeof adjustmentSource)[keyof typeof adjustmentSource];
declare const allowedCharacterSets: {
    readonly All: "ALL";
    readonly Latin: "LATIN";
};
type AllowedCharacterSets = (typeof allowedCharacterSets)[keyof typeof allowedCharacterSets];
declare const allowedSettlementCurrencies: {
    readonly Local: "LOCAL";
    readonly LocalAndUsd: "LOCAL_AND_USD";
};
type AllowedSettlementCurrencies = (typeof allowedSettlementCurrencies)[keyof typeof allowedSettlementCurrencies];
declare const amountDetailSourceType: {
    readonly Discount: "DISCOUNT";
    readonly Duty: "DUTY";
    readonly DutyTaxFee: "DUTY_TAX_FEE";
    readonly Fee: "FEE";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
    readonly StoreCredit: "STORE_CREDIT";
    readonly Tax: "TAX";
};
type AmountDetailSourceType = (typeof amountDetailSourceType)[keyof typeof amountDetailSourceType];
declare const amountDetailTarget: {
    readonly BillingCompany: "BILLING_COMPANY";
    readonly MerchantBase: "MERCHANT_BASE";
    readonly MerchantProvided: "MERCHANT_PROVIDED";
    readonly MerchantSettled: "MERCHANT_SETTLED";
    readonly ShopperPresented: "SHOPPER_PRESENTED";
    readonly ZonosBase: "ZONOS_BASE";
};
type AmountDetailTarget = (typeof amountDetailTarget)[keyof typeof amountDetailTarget];
declare const analyticsProviderStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type AnalyticsProviderStatus = (typeof analyticsProviderStatus)[keyof typeof analyticsProviderStatus];
declare const analyticsProviderType: {
    readonly FacebookPixel: "FACEBOOK_PIXEL";
    readonly GoogleAnalytics: "GOOGLE_ANALYTICS";
};
type AnalyticsProviderType = (typeof analyticsProviderType)[keyof typeof analyticsProviderType];
declare const cartAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
    readonly Item: "ITEM";
    readonly OrderTotal: "ORDER_TOTAL";
    readonly PromoCode: "PROMO_CODE";
    readonly Shipping: "SHIPPING";
};
type CartAdjustmentType = (typeof cartAdjustmentType)[keyof typeof cartAdjustmentType];
declare const cartType: {
    readonly Checkout: "CHECKOUT";
    readonly Collect: "COLLECT";
    readonly Invoice: "INVOICE";
    readonly InvoiceCollect: "INVOICE_COLLECT";
    readonly LabelCollect: "LABEL_COLLECT";
    readonly PrepayCollect: "PREPAY_COLLECT";
    readonly Quote: "QUOTE";
};
type CartType = (typeof cartType)[keyof typeof cartType];
declare const checkoutCompanyFieldsStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type CheckoutCompanyFieldsStatus = (typeof checkoutCompanyFieldsStatus)[keyof typeof checkoutCompanyFieldsStatus];
declare const checkoutPaymentProcessorType: {
    readonly Airwallex: "AIRWALLEX";
    readonly Paypal: "PAYPAL";
    readonly Stripe: "STRIPE";
};
type CheckoutPaymentProcessorType = (typeof checkoutPaymentProcessorType)[keyof typeof checkoutPaymentProcessorType];
declare const checkoutSubscriptionStatus: {
    readonly Active: "ACTIVE";
    readonly Inactive: "INACTIVE";
    readonly Paused: "PAUSED";
};
type CheckoutSubscriptionStatus = (typeof checkoutSubscriptionStatus)[keyof typeof checkoutSubscriptionStatus];
declare const checkoutSuccessBehavior: {
    readonly CloseModal: "CLOSE_MODAL";
    readonly RedirectToSuccessPage: "REDIRECT_TO_SUCCESS_PAGE";
    readonly ZonosSuccessPage: "ZONOS_SUCCESS_PAGE";
};
type CheckoutSuccessBehavior = (typeof checkoutSuccessBehavior)[keyof typeof checkoutSuccessBehavior];
declare const checkoutVisibilityStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type CheckoutVisibilityStatus = (typeof checkoutVisibilityStatus)[keyof typeof checkoutVisibilityStatus];
declare const countryCode: {
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
type CountryCode = (typeof countryCode)[keyof typeof countryCode];
declare const currencyCode: {
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
type CurrencyCode = (typeof currencyCode)[keyof typeof currencyCode];
declare const deMinimisThreshold: {
    readonly Above: "ABOVE";
    readonly Below: "BELOW";
};
type DeMinimisThreshold = (typeof deMinimisThreshold)[keyof typeof deMinimisThreshold];
declare const deMinimisType: {
    readonly Duty: "DUTY";
    readonly Fee: "FEE";
    readonly Tax: "TAX";
};
type DeMinimisType = (typeof deMinimisType)[keyof typeof deMinimisType];
declare const deliveryType: {
    readonly Consolidated: "CONSOLIDATED";
    readonly Courier: "COURIER";
    readonly Postal: "POSTAL";
};
type DeliveryType = (typeof deliveryType)[keyof typeof deliveryType];
declare const elementsUiStyle: {
    readonly Rounded: "ROUNDED";
    readonly Sharp: "SHARP";
};
type ElementsUiStyle = (typeof elementsUiStyle)[keyof typeof elementsUiStyle];
declare const elementsUiTheme: {
    readonly Dark: "DARK";
    readonly Light: "LIGHT";
    readonly System: "SYSTEM";
};
type ElementsUiTheme = (typeof elementsUiTheme)[keyof typeof elementsUiTheme];
declare const exchangeRateType: {
    readonly Guaranteed: "GUARANTEED";
    readonly MidMarket: "MID_MARKET";
    readonly ProcessorQuoted: "PROCESSOR_QUOTED";
    readonly Settled: "SETTLED";
};
type ExchangeRateType = (typeof exchangeRateType)[keyof typeof exchangeRateType];
declare const externalPaymentMethodStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type ExternalPaymentMethodStatus = (typeof externalPaymentMethodStatus)[keyof typeof externalPaymentMethodStatus];
declare const externalPaymentMethodType: {
    readonly Paypal: "PAYPAL";
};
type ExternalPaymentMethodType = (typeof externalPaymentMethodType)[keyof typeof externalPaymentMethodType];
declare const externalServiceTokenType: {
    readonly PaypalClientId: "PAYPAL_CLIENT_ID";
    readonly StripePublishableToken: "STRIPE_PUBLISHABLE_TOKEN";
};
type ExternalServiceTokenType = (typeof externalServiceTokenType)[keyof typeof externalServiceTokenType];
declare const helloCountryDisplayBehavior: {
    readonly All: "ALL";
    readonly OnlyShippable: "ONLY_SHIPPABLE";
};
type HelloCountryDisplayBehavior = (typeof helloCountryDisplayBehavior)[keyof typeof helloCountryDisplayBehavior];
declare const helloCountryOverrideBehavior: {
    readonly Session: "SESSION";
    readonly UrlParam: "URL_PARAM";
};
type HelloCountryOverrideBehavior = (typeof helloCountryOverrideBehavior)[keyof typeof helloCountryOverrideBehavior];
declare const helloCurrencyBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type HelloCurrencyBehavior = (typeof helloCurrencyBehavior)[keyof typeof helloCurrencyBehavior];
declare const helloDesktopLocation: {
    readonly BottomLeft: "BOTTOM_LEFT";
    readonly BottomRight: "BOTTOM_RIGHT";
    readonly TopLeft: "TOP_LEFT";
    readonly TopRight: "TOP_RIGHT";
};
type HelloDesktopLocation = (typeof helloDesktopLocation)[keyof typeof helloDesktopLocation];
declare const helloEstimateBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type HelloEstimateBehavior = (typeof helloEstimateBehavior)[keyof typeof helloEstimateBehavior];
declare const helloMobileLocation: {
    readonly BottomLeft: "BOTTOM_LEFT";
    readonly BottomRight: "BOTTOM_RIGHT";
    readonly TopLeft: "TOP_LEFT";
    readonly TopRight: "TOP_RIGHT";
};
type HelloMobileLocation = (typeof helloMobileLocation)[keyof typeof helloMobileLocation];
declare const helloPeekMessageBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type HelloPeekMessageBehavior = (typeof helloPeekMessageBehavior)[keyof typeof helloPeekMessageBehavior];
declare const helloRestrictionBehavior: {
    readonly Disabled: "DISABLED";
    readonly RestrictAndBlock: "RESTRICT_AND_BLOCK";
    readonly RestrictAndWarn: "RESTRICT_AND_WARN";
};
type HelloRestrictionBehavior = (typeof helloRestrictionBehavior)[keyof typeof helloRestrictionBehavior];
declare const helloVisibilityStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type HelloVisibilityStatus = (typeof helloVisibilityStatus)[keyof typeof helloVisibilityStatus];
declare const inclusivePriceConfigurationStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type InclusivePriceConfigurationStatus = (typeof inclusivePriceConfigurationStatus)[keyof typeof inclusivePriceConfigurationStatus];
declare const incotermCode: {
    readonly Cif: "CIF";
    readonly Custom: "CUSTOM";
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
    readonly Fob: "FOB";
};
type IncotermCode = (typeof incotermCode)[keyof typeof incotermCode];
declare const itemMeasurementType: {
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
type ItemMeasurementType = (typeof itemMeasurementType)[keyof typeof itemMeasurementType];
declare const itemRestrictionAction: {
    readonly NoMatch: "NO_MATCH";
    readonly ObservationsApply: "OBSERVATIONS_APPLY";
    readonly ProhibitionsApply: "PROHIBITIONS_APPLY";
    readonly RestrictionsApply: "RESTRICTIONS_APPLY";
};
type ItemRestrictionAction = (typeof itemRestrictionAction)[keyof typeof itemRestrictionAction];
declare const itemRestrictionType: {
    readonly Observation: "OBSERVATION";
    readonly Prohibition: "PROHIBITION";
    readonly Restriction: "RESTRICTION";
};
type ItemRestrictionType = (typeof itemRestrictionType)[keyof typeof itemRestrictionType];
declare const itemType: {
    readonly Bundle: "BUNDLE";
    readonly DigitalGood: "DIGITAL_GOOD";
    readonly PartialItem: "PARTIAL_ITEM";
    readonly PhysicalGood: "PHYSICAL_GOOD";
    readonly Service: "SERVICE";
    readonly Subscription: "SUBSCRIPTION";
};
type ItemType = (typeof itemType)[keyof typeof itemType];
declare const itemUnitOfMeasure: {
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
type ItemUnitOfMeasure = (typeof itemUnitOfMeasure)[keyof typeof itemUnitOfMeasure];
declare const landedCostAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
    readonly Item: "ITEM";
    readonly OrderTotal: "ORDER_TOTAL";
    readonly PromoCode: "PROMO_CODE";
    readonly Shipping: "SHIPPING";
};
type LandedCostAdjustmentType = (typeof landedCostAdjustmentType)[keyof typeof landedCostAdjustmentType];
declare const landedCostGuaranteeCode: {
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
type LandedCostGuaranteeCode = (typeof landedCostGuaranteeCode)[keyof typeof landedCostGuaranteeCode];
declare const landedCostGuaranteeType: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type LandedCostGuaranteeType = (typeof landedCostGuaranteeType)[keyof typeof landedCostGuaranteeType];
declare const mode: {
    readonly Live: "LIVE";
    readonly Test: "TEST";
};
type Mode = (typeof mode)[keyof typeof mode];
declare const notificationActiveStatus: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type NotificationActiveStatus = (typeof notificationActiveStatus)[keyof typeof notificationActiveStatus];
declare const orderStatus: {
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
type OrderStatus = (typeof orderStatus)[keyof typeof orderStatus];
declare const packagingType: {
    readonly Envelope: "ENVELOPE";
    readonly Flat: "FLAT";
    readonly Package: "PACKAGE";
    readonly Pak: "PAK";
    readonly Parcel: "PARCEL";
    readonly Polybag: "POLYBAG";
    readonly Tube: "TUBE";
};
type PackagingType = (typeof packagingType)[keyof typeof packagingType];
declare const partyType: {
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
type PartyType = (typeof partyType)[keyof typeof partyType];
declare const paypalMockResponse: {
    readonly InstrumentDeclined: "INSTRUMENT_DECLINED";
    readonly InternalServerError: "INTERNAL_SERVER_ERROR";
    readonly TransactionRefused: "TRANSACTION_REFUSED";
};
type PaypalMockResponse = (typeof paypalMockResponse)[keyof typeof paypalMockResponse];
declare const restrictedItemAction: {
    readonly Block: "BLOCK";
    readonly BlockAll: "BLOCK_ALL";
    readonly Warn: "WARN";
};
type RestrictedItemAction = (typeof restrictedItemAction)[keyof typeof restrictedItemAction];
declare const shipmentAmountType: {
    readonly Buffer: "BUFFER";
    readonly Discount: "DISCOUNT";
    readonly FuelSurcharge: "FUEL_SURCHARGE";
    readonly Insurance: "INSURANCE";
    readonly PublishedRate: "PUBLISHED_RATE";
    readonly RateChart: "RATE_CHART";
    readonly Surcharge: "SURCHARGE";
};
type ShipmentAmountType = (typeof shipmentAmountType)[keyof typeof shipmentAmountType];
declare const transitTypeCode: {
    readonly BusinessDays: "BUSINESS_DAYS";
    readonly Days: "DAYS";
    readonly Weeks: "WEEKS";
};
type TransitTypeCode = (typeof transitTypeCode)[keyof typeof transitTypeCode];
declare const zonosAttribution: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type ZonosAttribution = (typeof zonosAttribution)[keyof typeof zonosAttribution];
type CalculateLandedCostMutation = {
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
type CheckItemRestrictionsMutation = {
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
type LandedCostSettingsQuery = {
    landedCostSettings: {
        landedCostGuarantee: LandedCostGuaranteeType | null;
        defaultNativeCurrency: CurrencyCode | null;
    } | null;
};
type CartCheckoutWorkflowQuery = {
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
type CheckoutSessionDetailsFragment = {
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
type HelloSettingFragment = {
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
type GetOrderQuery = {
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

type TranslatedText = {
    [key: string]: string;
};
type EnteredInfo = {
    city: string;
    country: CountryCode;
    email: string;
    line1: string;
    line2: string;
    name: string;
    phone: string;
    postal_code: string;
    state: string;
};
type ValidateAddressFields = Omit<StripeAddressElementChangeEvent['value']['address'], 'country'> & {
    name: string;
};
type TranslatedAddressObject = {
    [key in keyof ValidateAddressFields]?: TranslatedText;
};

/**
 * Values captured in the completion dialog for the fields that were missing from the Stripe
 * Link address. Only the keys that were actually requested (and therefore provided) are present.
 * When the last name is missing we also capture the first name, so the customer can correct the
 * whole name at once (Link often stores just a first name in its single name input).
 */
type AddressCompletionSubmit = {
    firstName?: string;
    lastName?: string;
    postal_code?: string;
    state?: string;
};

type SubmitEventData = {
    billingAddress: Record<keyof TranslatedAddressObject, string> | null;
    shippingAddress: Record<keyof TranslatedAddressObject, string>;
};

declare const colorPrefixes: readonly ["blue", "cyan", "green", "orange", "purple", "red", "gray", "glass"];
declare const colorContrasts: readonly ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
type ColorContrast = (typeof colorContrasts)[number];
type ColorPrefix = (typeof colorPrefixes)[number];
type Color = 'gray-0' | 'gray-50' | 'glass-0' | 'glass-50' | `${ColorPrefix}-${ColorContrast}` | 'gray-1000' | 'glass-1100' | 'glass-1200';
declare const checkboxColorPrefix: readonly ["blue", "cyan", "green", "orange", "purple", "red", "gray"];
type CheckboxColorPrefix = (typeof checkboxColorPrefix)[number];

type BannerIntent = 'default' | 'error' | 'success' | 'warning' | 'info';

declare const textOptions: {
    readonly pageHeader: {
        readonly label: "Page Header (3XL) · 34px (2.125rem)";
        readonly size: "3xl";
        readonly tag: "h2";
        readonly weight: 900;
    };
    readonly secondaryPageHeader: {
        readonly label: "Secondary Page Header (3XL) • 34px, 500 \"Medium\"";
        readonly size: "3xl";
        readonly tag: "h2";
        readonly weight: 500;
    };
    readonly header: {
        readonly label: "Header (2XL) · 28px (1.75rem)";
        readonly size: "2xl";
        readonly tag: "h3";
        readonly weight: 700;
    };
    readonly descriptionHeader: {
        readonly label: "Description Header (2XL) · 28px (1.75rem)";
        readonly size: "2xl";
        readonly tag: "h3";
        readonly weight: 700;
    };
    readonly title: {
        readonly label: "Title (XL) • 22px (1.375rem)";
        readonly size: "xl";
        readonly tag: "h4";
        readonly weight: 600;
    };
    readonly boldSubheader: {
        readonly label: "Bold Subheader (L) • 18px (1.125rem)";
        readonly size: "l";
        readonly tag: "h5";
        readonly weight: 700;
    };
    readonly semiBoldSubheader: {
        readonly label: "Semi Bold Subheader (L / H4) • 18px (1.125rem)";
        readonly size: "l";
        readonly tag: "h5";
        readonly weight: 600;
    };
    readonly subheader: {
        readonly label: "Subheader (L) • 18px (1.125rem)";
        readonly size: "l";
        readonly tag: "h5";
        readonly weight: 500;
    };
    readonly boldLabel: {
        readonly label: "Bold Label (Base) • 14px (.875rem)";
        readonly size: "base";
        readonly tag: "span";
        readonly weight: 700;
    };
    readonly semiBoldLabel: {
        readonly label: "Semi Bold Label (Base) • 14px (.875rem)";
        readonly size: "base";
        readonly tag: "span";
        readonly weight: 600;
    };
    readonly label: {
        readonly label: "Label (Base) • 14px (.875rem)";
        readonly size: "base";
        readonly tag: "span";
        readonly weight: 500;
    };
    readonly body: {
        readonly label: "Body (Base) • 14px (.875rem)";
        readonly size: "base";
        readonly tag: "span";
        readonly weight: 400;
    };
    readonly smallHeader: {
        readonly label: "Small header (S) • 12px (.75rem)";
        readonly size: "s";
        readonly tag: "span";
        readonly weight: 600;
    };
    readonly caption: {
        readonly label: "Caption (S) • 12px (.75rem)";
        readonly size: "s";
        readonly tag: "span";
        readonly weight: 400;
    };
    readonly hintText: {
        readonly label: "Hint text (XS) • 10px (.625rem)";
        readonly size: "xs";
        readonly tag: "span";
        readonly weight: 400;
    };
};
type TextOptions = typeof textOptions;
type Size = TextOptions[keyof TextOptions]['size'];
type Type = keyof TextOptions;
type FontWeight = TextOptions[keyof TextOptions]['weight'];

type CustomAddressErrors = {
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

declare const taxIdTypeOptions: {
    readonly MX: readonly [{
        readonly label: "RFC";
        readonly placeholder: "XAXX010101000";
        readonly value: "RFC";
    }, {
        readonly label: "CURP";
        readonly placeholder: "AAAA800101HDFRRR09";
        readonly value: "CURP";
    }];
    readonly PE: readonly [{
        readonly label: "DNI";
        readonly placeholder: "12345678";
        readonly value: "DNI";
    }, {
        readonly label: "RUC";
        readonly placeholder: "20123456789";
        readonly value: "RUC";
    }, {
        readonly label: "Carné de extranjería";
        readonly placeholder: "001234567";
        readonly value: "CE";
    }];
};
type TaxIdTypeOption = (typeof taxIdTypeOptions.MX)[number] | (typeof taxIdTypeOptions.PE)[number];
declare const checkoutTaxIdTypeValueList: readonly ["CE", "CURP", "DNI", "RFC", "RUC"];
type AssertEveryCheckoutTaxIdType<T extends readonly TaxIdTypeOption['value'][]> = Exclude<TaxIdTypeOption['value'], T[number]> extends never ? T : never;
/** Every document kind checkout can send. Older clients omit the field. */
declare const checkoutTaxIdTypeValues: AssertEveryCheckoutTaxIdType<typeof checkoutTaxIdTypeValueList>;
type CheckoutTaxIdTypeValue = (typeof checkoutTaxIdTypeValues)[number];

type StripeStoreContactOption = {
    address: {
        city: string;
        country: string;
        line1: string;
        line2?: string;
        postal_code: string;
        state: string;
    };
    email: string;
    name: string;
    phone?: string;
};

type TabItem = {
    index: number;
    isDone: boolean;
    label: 'Customer' | 'Shipping' | 'Payment';
    value: 'customer-info' | 'shipping' | 'payment';
};
type TabItems = Record<TabItem['value'], TabItem>;
type ItemMeasurement = {
    /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
    type: ItemMeasurementType;
    /** Indicates the `Measurement` units to be used. */
    unitOfMeasure: ItemUnitOfMeasure;
    /** The `Measurement` value. */
    value: number;
};
type CartItem = {
    amount: number;
    attributes?: {
        key: string;
        value: string;
    }[];
    countryOfOrigin?: CountryCode;
    currencyCode: CurrencyCode;
    description?: string;
    hsCode?: string;
    imageUrl?: string;
    itemType?: ItemType;
    measurements?: ItemMeasurement[];
    metadata?: {
        key: string;
        value: string;
    }[];
    name: string;
    productId?: string;
    quantity: number;
    sku?: string;
    gtin?: string;
    manufacturerProductId?: string;
};

type NotificationInit = {
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

type GridSpacing = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40;

declare const localeElementsSupportedLocationCodeEnum: {
    readonly Ar: "ar";
    readonly Da: "da";
    readonly De: "de";
    readonly En: "en";
    readonly Es: "es";
    readonly Fr: "fr";
    readonly He: "he";
    readonly Id: "id";
    readonly It: "it";
    readonly Ja: "ja";
    readonly Ko: "ko";
    readonly Nl: "nl";
    readonly No: "no";
    readonly Pl: "pl";
    readonly Pt: "pt";
    readonly Ru: "ru";
    readonly Sv: "sv";
    readonly Tr: "tr";
    readonly Vi: "vi";
    readonly Zh: "zh";
};
type Locale_ElementsSupportedLocationCode_Enum = (typeof localeElementsSupportedLocationCodeEnum)[keyof typeof localeElementsSupportedLocationCodeEnum];

type ICountry = {
    bigcommerceDisplayName?: string;
    code: CountryCode;
    currencyCode: string;
    displayName: string;
    languageCode: Locale_ElementsSupportedLocationCode_Enum;
};
type ICountryJson = {
    [countryCode: string]: ICountry;
};

type Items = CheckItemRestrictionsMutation['itemRestrictionApply']['items'];
type RestrictedItem = Items[number] & {
    name?: string;
};

declare const restStateType: readonly ["Boxes", "Earth", "EmptyBox", "Lock", "PigBank", "Scribble", "Search", "Settings", "ShoppingCart", "SpilledCup", "Switch", "TaxId", "Truck", "Warning"];
type RestStateType = (typeof restStateType)[number];

type ShippingRichRadioItem = {
    amount: number;
    caption?: string;
    label: string;
    landedCostId: string;
    method: IncotermCode;
    price: string;
    shipmentRatingId: string;
    sublabel?: string;
    value: string | number;
};

type SpinnerColor = 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'black' | 'white';

type CountryFieldLabelStateLabel = 'Commune' | 'County' | 'County or sector' | 'Department' | 'Derzhava' | 'District' | 'Do/Si' | 'Island' | 'Municipality' | 'Oblast' | 'Parish' | 'Prefecture' | 'Province' | 'Region' | 'State' | 'State or Territory' | 'State or province' | 'Village';
type CountryFieldLabelAddress1Label = 'Address line 1' | 'Address1' | 'Adresa vulytsi' | 'Street address' | 'Street or avenue' | 'Ulica';
type CountryFieldLabelAddress2Label = '' | 'Address 2' | 'Address line 2' | 'Address2' | 'Sector' | 'Street address 2';
type CountryFieldLabelAddress3Label = '' | 'Address line 3' | 'Address3' | 'CEDEX' | 'Street address 3';
type CountryFieldLabelCityLabel = '' | 'Area' | 'City' | 'City/Town' | 'Emirate' | 'Gorod' | 'Locality' | 'Misto' | 'Town' | 'Town / City' | 'Town or city';
type CountryFieldLabelZipLabel = '' | 'Code postal' | 'Indeks' | 'Kodepos' | 'Poshtovyy indeks' | 'Postal code' | 'Postcode' | 'ZIP code' | 'Zip';
type ICountryFieldLabelRegion = {
    interpayCode: string;
};
type CountryFields = {
    address1Label: CountryFieldLabelAddress1Label;
    address1Required: boolean;
    address1Show: boolean;
    address2Label: CountryFieldLabelAddress2Label;
    address2Required: boolean;
    address2Show: boolean;
    address3Label: CountryFieldLabelAddress3Label;
    address3Required: boolean;
    address3Show: boolean;
    cityLabel: CountryFieldLabelCityLabel;
    cityRequired: boolean;
    cityShow: boolean;
    countryCode: CountryCode;
    countryCodeLabel?: string;
    displayName: string;
    nameLabel: string;
    phoneCode: number;
    phoneFormat: string | null;
    phonePlaceholder: string | null;
    regions: Record<string, ICountryFieldLabelRegion> | null;
    stateLabel: CountryFieldLabelStateLabel;
    stateRequired: boolean;
    stateShow: boolean;
    zipFormat: string | null;
    zipLabel: CountryFieldLabelZipLabel;
    zipRegex: string | null;
    zipRequired: boolean;
    zipShow: boolean;
};

type InclusivePriceConfiguration = {
    configurations: {
        [key: string]: {
            rate: number;
            status: InclusivePriceConfigurationStatus;
        } | null;
    };
    effectiveRate: number;
    id: string;
    shipToCountry: CountryCode;
};
type InclusivePriceConfigurationResponse = InclusivePriceConfiguration[];

type GenericZonosSettings = {
    /**
     * BigCommerce customer group IDs that should bypass Zonos Checkout.
     * @description When a logged-in BigCommerce customer belongs to one of these groups
     * (e.g. resellers), they will be redirected to BigCommerce's native checkout
     * instead of going through Zonos international checkout.
     */
    bigcommerceBypassCustomerGroupIds?: number[];
    /**
     * Bigcommerce domestic checkout country selector.
     * @description This is the field selector for the country select element in the bigcommerce domestic checkout page. All themes might have different selectors, so we need to allow this to be configured.
     */
    bigcommerceDomesticCheckoutCountrySelector?: string;
    /**
     * CSS selector for BigCommerce's native currency selector element.
     * @description When Hello is actively converting prices (user is in a
     * shipping zone and BC's native currency matches the store's source
     * currency), matching element(s) are hidden so shoppers don't toggle
     * BC's selector and conflict with Hello's conversion. Selectors vary
     * by theme, so this is configured per merchant.
     */
    bigcommerceNativeCurrencySelector?: string;
    /**
     * Whether to blur the currency while initializing Zonos to avoid price flickering.
     */
    blurCurrencyOnInit?: boolean;
    /**
     * Country that should be enable the custom address fields in the checkout based on the country user is from.
     */
    countryCustomAddressEnabled?: CountryCode[];
    /**
     * List of countries and
     */
    countryFields?: Record<CountryCode, CountryFields>;
    /**
     * List of countries that are considered domestic countries.
     */
    domesticCountries?: CountryCode[];
    /**
     * URL of the hosted checkout.
     */
    hostedCheckoutUrl?: string;
    /**
     * Whether to redirect users to BigCommerce domestic checkout when they select a disabled country in the international checkout and the store source currency is USD.
     */
    isBigcommerceDomesticCheckoutRedirectEnabled?: boolean;
    /**
     * Use custom address fields in the checkout based on the country user is from.
     */
    shouldEnabledCustomAddress?: boolean;
    /**
     * For Collect: when the carrier does not provide a logo via the landed cost
     * metadata (`collectLogoUrl`), fall back to the organization's appearance logo.
     * When disabled (default), no logo is shown unless the carrier provides one.
     */
    shouldFallbackToOrganizationLogoForCollect?: boolean;
    /**
     * Whether or not Canadian shopper has to consent that they are aware of some procedures must happen after checking out otherwise the order will be returned
     */
    shouldFedExShippingConsentForCanadianShopper?: boolean;
    /**
     * When true, checkout requires a Peru tax id and lets the shopper pick the document type.
     * The API sets this from an organization list so stores can be added without a client release.
     */
    shouldRequirePeruTaxId?: boolean;
    /**
     * Signed token for Google Places API iframe access.
     */
    signedTokenGooglePlaces?: string;
    stripeCountryFieldLabels?: {
        [_key in CountryCode]?: {
            stateRequired: boolean;
            zipRequired: boolean;
        };
    };
    /**
     * List of countries that are allowed to use USD denominated cards for settlement.
     */
    usdSettlementCountryEnabled?: CountryCode[];
    /**
     * Ship-to countries affected by the EU right-of-withdrawal regulation. When the
     * buyer's destination is in this list (and the merchant has opted into the EU
     * withdrawal policy), the withdrawal notice is shown above the Pay button.
     * Sourced from the API so the affected-country list is controlled centrally
     * rather than hardcoded in the storefront; an absent/empty list shows it for no
     * country.
     */
    withdrawalCountryEnabled?: CountryCode[];
};

type SelectOption = {
    label: string;
    value: string;
};

type ToggleItem<TValue> = {
    isDisabled?: boolean;
    label: string;
    value: TValue;
};

type VirtualScrollRenderItem = (itemIndex: number) => HTMLElement | Promise<HTMLElement> | HTMLElement[] | Promise<HTMLElement[]> | Promise<HTMLElement>[];

/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

declare namespace Components {
    interface ZonosAddress {
        /**
          * Default address for stripe
          * @default []
         */
        "defaultAddress": ContactOption[];
        /**
          * Error message for short address code input
          * @default ''
         */
        "shortAddressCodeErrorMessage": string;
        /**
          * Which tax id control the error belongs on. Empty when there is no error.
          * @default ''
         */
        "taxIdErrorField": 'type' | 'value' | '';
        /**
          * Error message for tax id input
          * @default ''
         */
        "taxIdErrorMessage": string;
        /**
          * The title text for the address element
         */
        "titleText": string;
        /**
          * The type of address element to render
         */
        "type": 'billing' | 'shipping';
    }
    interface ZonosAddressCompletionDialog {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading": boolean;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "dialogOpen": boolean;
        /**
          * Whether or not the dialog is rendered in mobile mode
          * @default false
         */
        "isMobile": boolean;
        /**
          * The Zonos-required fields still missing from the selected address
          * @default []
         */
        "missingFields": MissingShippingField[];
        /**
          * The shipping address selected from Stripe, shown read-only for context
         */
        "shippingAddress": EnteredInfo;
        /**
          * Button color of the submit button
         */
        "submitBtnColor"?: string;
        /**
          * Button type of the submit button
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosAddressDisplay {
        /**
          * Title for the address display
         */
        "addressType": 'shipping' | 'billing';
        /**
          * Address to show up
         */
        "currentAddress": EnteredInfo;
    }
    interface ZonosAddressForm {
        /**
          * Title for the address form
         */
        "addressType": 'shipping' | 'billing';
        /**
          * Address to show up
         */
        "currentAddress": EnteredInfo;
        /**
          * Translated address
         */
        "translatedAddress": TranslatedAddressObject;
    }
    interface ZonosAddressSuggestions {
        /**
          * Suggestions to display
          * @default []
         */
        "suggestions": IframeSuggestionsResponsePayload['suggestions'];
        /**
          * Type of the address suggestions
         */
        "type": 'billing' | 'shipping';
    }
    interface ZonosAddressUpdateDialog {
        /**
          * Billing address that user has entered (optional if billing is the same as shipping)
         */
        "billingAddress": EnteredInfo | null;
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading": boolean;
        /**
          * Whether or not the dialog is loading
         */
        "dialogLoading": boolean;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "dialogOpen": boolean;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isMobile": boolean;
        /**
          * Shipping address that user has entered
         */
        "shippingAddress": EnteredInfo;
        /**
          * Button color of the submit button
         */
        "submitBtnColor"?: string;
        /**
          * Button type of the submit button
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
        /**
          * Translated address fields that GPT has translated
         */
        "translatedBillingAddress": TranslatedAddressObject;
        /**
          * Translated address fields that GPT has translated
         */
        "translatedShippingAddress": TranslatedAddressObject;
    }
    interface ZonosAirwallexPayment {
    }
    interface ZonosBadge {
        /**
          * The color of the badge
          * @default 24
         */
        "badgeColor": ColorPrefix | 'transparent';
        /**
          * Whether or not the badge is bold
          * @default false
         */
        "bold": boolean;
        /**
          * Callback for when the badge is dismissed. Also determines if dismiss icon shown.
         */
        "dismissHandler"?: () => void;
        /**
          * The icon element to display
          * @default null
         */
        "icon"?: HTMLZonosIconElement;
        /**
          * Position the icon to the right when icon is specified
          * @default false
         */
        "iconRight": boolean;
        /**
          * Whether or not the badge is loading
          * @default false
         */
        "loading": boolean;
        /**
          * Whether or not the badge is rounded
          * @default false
         */
        "rounded": boolean;
        /**
          * The size of the badge
          * @default 'default'
         */
        "size": 'small' | 'default';
    }
    interface ZonosBanner {
        /**
          * Whether or not the banner is bold
         */
        "bannerTitle"?: string;
        /**
          * Intent of the banner (success, warning, error)
         */
        "intent"?: BannerIntent;
    }
    interface ZonosButton {
        /**
          * The color of the button **NOTE**: If the button `variant` is set to 'standard', backgroundColor will be disregarded
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never });
        /**
          * Whether or not the button text color is bold
          * @default false
         */
        "bold": boolean;
        /**
          * The border style of the button
          * @default ROUNDED
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * The color of the button text and svg
         */
        "buttonColor"?: Color | (string & { _placeholder?: never });
        /**
          * The icon element to display
          * @default null
         */
        "icon": HTMLZonosIconElement | null;
        /**
          * Whether or not the icon is on the right
          * @default false
         */
        "iconRight"?: boolean;
        /**
          * Whether or not the button is disabled
          * @note Prop should not conflict name with native html attribute if the prop is also affected by another prop. The issue is the component has internal disabled
          * @prop ().
          * @prop decorator is to watch the update of the attribute of the component in the dom. And `disabled` prop is not an only factor to determine the component is disabled. isLoading
          * @prop () also affect that. <Host> is also referred to a component itself, if disabled prop is true, the `zonos-button` will have disabled attribute. So let's say when the loading state is true, and the component consume the zonos-button doesn't pass the disabled prop down. It accidentally turns the disabled prop on even thought the disabled state is not changed from the outside.
          * @default false
         */
        "isDisabled": boolean;
        /**
          * The content alignment within the button
          * @default 'center'
         */
        "justifyContent": 'center' | 'flex-end' | 'flex-start';
        /**
          * Whether or not the button is loading
          * @default false
         */
        "loading": boolean;
        /**
          * Whether or not the button has a background
          * @default false
         */
        "noBackground": boolean;
        /**
          * Whether or not the button has a left padding
          * @default false
         */
        "noPaddingLeft": boolean;
        /**
          * Whether or not the button has a right padding
          * @default false
         */
        "noPaddingRight": boolean;
        /**
          * The size of the button
          * @default 'sm'
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The theme of the button
         */
        "theme"?: ElementsUiTheme;
        /**
          * The variance of the button
          * @note If the button `variant` is set to 'standard', backgroundColor will be disregarded
          * @default standard
         */
        "variant": | 'primary'
    | 'success'
    | 'subtle'
    | 'outline'
    | 'standard'
    | 'danger'
    | 'warning';
        /**
          * Whether or not the button has a box shadow
          * @default false
         */
        "withBoxShadow": boolean;
    }
    interface ZonosCard {
        /**
          * The actions to display in the header of the card
         */
        "actions"?: HTMLElement;
        /**
          * The background color of the card
         */
        "backgroundColor"?: Color;
        /**
          * The border radius of the card
          * @default 6
         */
        "borderRadius"?: number;
        /**
          * The actions to display in the footer of the card
         */
        "footerActions"?: HTMLElement;
        /**
          * The content to display in the footer of the card
         */
        "footerContent"?: HTMLElement;
        /**
          * The height of the footer in pixels
         */
        "footerHeight"?: number;
        /**
          * The label to display in the header of the card
         */
        "label"?: HTMLElement;
        /**
          * The spacing to apply between elements in the card
          * @default '24px'
         */
        "spacing"?: string;
    }
    interface ZonosCartItems {
    }
    interface ZonosCartRestrictedItems {
        /**
          * This is to hide the section when the parent collapse on mobile
          * @default false
         */
        "hide": boolean;
    }
    interface ZonosCartSubtotal {
        /**
          * Button color of the submit button
         */
        "submitBtnColor"?: string;
        /**
          * Button type of the submit button
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosCheckbox {
        /**
          * background color of the checkbox
          * @default 'blue'
         */
        "backgroundColor": | CheckboxColorPrefix
    | (string & { _placeholder?: never });
        /**
          * The border style of the button
          * @default ROUNDED
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * Font size of the checkbox text
          * @default 'base'
         */
        "fontSize": Size;
        /**
          * Whether or not the checkbox is checked
          * @default false
         */
        "isChecked": boolean;
        /**
          * Whether or not the checkbox is disabled
          * @default false
         */
        "isDisabled": boolean;
        /**
          * The label of the checkbox
         */
        "label"?: string;
        /**
          * Size of the checkbox
          * @default 12
         */
        "size": 12 | 16 | 24;
    }
    interface ZonosCheckout {
        /**
          * Override appearance config
         */
        "appearanceSettingsOverride"?: Partial<AppearanceConfig>;
        /**
          * Close dialog action
         */
        "closeDialogHandler": (props?: { confirmed: boolean; }) => Promise<void>;
        /**
          * Default address to use for the checkout (preview mode)
          * @default []
         */
        "defaultAddress": | StripeStoreContactOption[]
    | StripeStoreContactOption;
        /**
          * Force dialog to be open
          * @default false
         */
        "forceDialogOpen": boolean;
        /**
          * Hidden mode to hide the checkout modal in preview mode
          * @default false
         */
        "hiddenMode": boolean;
        /**
          * Setup all of the event listeners for the component on first load
         */
        "init": () => Promise<void>;
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile": boolean;
        /**
          * For usage in storybook for a mocked flow.
         */
        "mockCheckoutSession": (session: CheckoutSessionDetailsFragment) => Promise<void>;
        /**
          * Override staging mode. Solely use for storybook
         */
        "overrideStagingMode"?: boolean;
        /**
          * Preview checkout without needing to click on the button. This would be useful for demo purpose
          * @default false
         */
        "preview": boolean;
        /**
          * For storybook to set to finish step, this is to trigger in the story for zonos-checkout-finish
         */
        "setToFinishStep": (forcePaymentStatus?: PaymentIntent["status"]) => Promise<void>;
        /**
          * Trigger the checkout international button
         */
        "triggerCheckoutInternational": () => Promise<void>;
    }
    interface ZonosCheckoutFinish {
        /**
          * The border radius style of the dialog
          * @default 'ROUNDED'
         */
        "borderRadius": ElementsUiStyle;
        /**
          * Override the notification message and title, bypass checking stripe payment status
         */
        "overrideNotification"?: {
    messages: string[];
    title: string;
    type: 'success' | 'error';
  };
        /**
          * Force status to test the UI for storybook
         */
        "storybookForceStatus"?: PaymentIntent['status'];
    }
    interface ZonosCheckoutFooter {
        /**
          * Theme to change the color of the logo
         */
        "dataTheme"?: ElementsUiTheme;
        /**
          * Override mobile mode
          * @default false
         */
        "mobile": boolean;
    }
    interface ZonosCheckoutPayment {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading": boolean;
        /**
          * Whether or not the checkout is in mobile mode
          * @default false
         */
        "isMobile": boolean;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosCheckoutProgressTabs {
        /**
          * Background color of the parent that's wrapped around the tab progress bar
          * @default null
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never }) | null;
        /**
          * Set the tab items data. This is to be used in storybook
         */
        "setTabItems": (tabItems: TabItems) => Promise<void>;
        /**
          * Set selected tab. Only set the tab if it's clickable
         */
        "setTabSelected": (tabValue: TabItem["value"]) => Promise<void>;
        /**
          * Color of the tab progress bar and label, override the secondary color of the appearance settings
          * @default null
         */
        "tabColor"?: string | null;
    }
    interface ZonosCollapse {
        /**
          * Collapsed size when collapsed
          * @default 0
         */
        "collapseSize": number;
        /**
          * Collapsed state of the element
          * @default false
         */
        "collapsed": boolean;
    }
    interface ZonosCollect {
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile": boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet": boolean;
    }
    interface ZonosCollectCartItems {
    }
    interface ZonosCollectFinish {
        /**
          * The border radius style of the dialog
          * @default 'ROUNDED'
         */
        "borderRadius": ElementsUiStyle;
        /**
          * The confirmation id for the collect order
          * @default null
         */
        "confirmationId": string | null;
        /**
          * Override the notification message and title, bypass checking stripe payment status
         */
        "overrideNotification"?: {
    messages: string[];
    title: string;
    type: 'success' | 'error';
  };
        /**
          * Force status to test the UI for storybook
         */
        "storybookForceStatus"?: PaymentIntent['status'];
    }
    interface ZonosCollectFooter {
        /**
          * Theme to change the color of the logo
         */
        "dataTheme"?: ElementsUiTheme;
        /**
          * Override mobile mode
          * @default false
         */
        "mobile": boolean;
        /**
          * Override tablet mode
          * @default false
         */
        "tablet": boolean;
    }
    interface ZonosCollectOrderDetails {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
         */
        "collapsed": boolean;
        /**
          * The landed cost id that is used to fetch the shipping address
          * @default ''
         */
        "landedCostId": string;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default true
         */
        "mobile": boolean;
    }
    interface ZonosCollectPayment {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading": boolean;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosCollectReview {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
          * @default false
         */
        "collapsed": boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default false
         */
        "mobile": boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet": boolean;
    }
    interface ZonosCollectSubtotal {
    }
    interface ZonosComponent {
        /**
          * The first name
          * @default ''
         */
        "first": string;
        /**
          * The last name
          * @default ''
         */
        "last": string;
        /**
          * The middle name
          * @default ''
         */
        "middle": string;
    }
    interface ZonosConfirmDialog {
        /**
          * Cancel button text
         */
        "dialogCancelBtnText"?: string;
        /**
          * Confirm button text
         */
        "dialogConfirmBtnText": string;
        /**
          * Dialog intent (for icon and button color)
          * @default "info"
         */
        "dialogIntent": 'info' | 'danger' | 'warn';
        /**
          * Whether or not the dialog is open
         */
        "dialogOpen": boolean;
        /**
          * Dialog subtitle text
          * @default null No subtitle
         */
        "dialogSubtitle": string | null;
        /**
          * Dialog title text
          * @default "Are you sure?"
         */
        "dialogTitle": string;
        /**
          * Type of dialog - "alert" - Only confirm button - "confirm" - Both Confirm and cancel buttons
          * @default "confirm"
         */
        "dialogType": 'alert' | 'confirm';
        /**
          * Dialog width
          * @default 350 px
         */
        "dialogWidth": number;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isMobile": boolean;
        /**
          * Whether or not to close the dialog when clicking outside of it
          * @default false
         */
        "noClickOutside": boolean;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
    }
    interface ZonosController {
        /**
          * The zonos config object
         */
        "config": LoadZonosParamsConfig;
        /**
          * Get appearance from setting
         */
        "getAppearanceSetting": () => Promise<AppearanceConfig>;
        /**
          * Method to initialize checkout element
         */
        "initCheckoutElement": (stripe: Stripe) => Promise<void>;
        /**
          * Method to initialize Collect element
         */
        "initCollectElement": (stripe: Stripe) => Promise<void>;
        /**
          * Method to initialize Collect element
         */
        "initInvoiceElement": (stripe: Stripe) => Promise<void>;
        /**
          * Override the setting
          * @param config config that need to override the default setting
         */
        "overrideConfig": (config: LoadZonosParamsConfig) => Promise<void>;
        /**
          * Override country code. Used in dashboard create test cart.
         */
        "overrideCountry": (countryCode: CountryCode) => Promise<void>;
        /**
          * Reset the Checkout session id and client secret (required for dashboard store switching)
         */
        "reset": () => Promise<void>;
        /**
          * Setup google font
         */
        "setupGoogleFont": (overrideFont?: string) => Promise<void>;
        /**
          * Show notification
         */
        "showNotification": (notification: NotificationInit) => Promise<void>;
        /**
          * Update the organizationName
         */
        "updateOrganizationName": (organizationName: string) => Promise<void>;
        /**
          * The zonos api key
         */
        "zonosApiKey": string;
    }
    interface ZonosCountryFlag {
        /**
          * The country code for the flag
          * @default localizationStore.selectedCountryCode
          * @example 'US'
         */
        "countryCode": CountryCode | null;
        /**
          * The size of the flag
         */
        "size"?: number;
    }
    interface ZonosCountrySelect {
        /**
          * Function to close the country select
          * @default () => {}
         */
        "handleOnClose": () => void;
    }
    interface ZonosCurrencyToggle {
    }
    interface ZonosCustomAddress {
        /**
          * Default address for stripe
          * @default []
         */
        "defaultAddress": ContactOption[];
        /**
          * Error message for short address code input
          * @default ''
         */
        "shortAddressCodeErrorMessage": string;
        /**
          * Which tax id control the error belongs on. Empty when there is no error.
          * @default ''
         */
        "taxIdErrorField": 'type' | 'value' | '';
        /**
          * Error message for tax id input
          * @default ''
         */
        "taxIdErrorMessage": string;
        /**
          * The title text for the address element
         */
        "titleText": string;
        /**
          * The type of address element to render
         */
        "type": 'billing' | 'shipping';
    }
    interface ZonosCustomMessage {
        /**
          * The custom message icon
          * @default ''
         */
        "icon": string;
        /**
          * The custom message text
          * @default ''
         */
        "message": string;
    }
    interface ZonosCustomerInfo {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading": boolean;
        /**
          * Default address to use for the checkout (preview mode)
          * @default []
         */
        "defaultAddress": StripeStoreContactOption[];
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isMobile": boolean;
        /**
          * Whether to override custom address form to be always visible
          * @default false
         */
        "shouldUseCustomAddressFormOverride": boolean;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosDialog {
        /**
          * The border style of the button
          * @default ROUNDED
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * The header text for the dialog
          * @default ''
         */
        "headerText": string;
        /**
          * The height of the dialog (max-width still 90vh)
         */
        "height"?: string;
        /**
          * Load loading spinner for the dialog or not
          * @default true
         */
        "isLoading": boolean;
        /**
          * The text that will be shown while loading
         */
        "loadingText"?: string;
        /**
          * The title of the loading text
         */
        "loadingTitle"?: string;
        /**
          * The min height of the dialog
         */
        "minHeight"?: string;
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile": boolean;
        /**
          * Whether or not to have body padding
          * @default false
         */
        "noBodyPadding": boolean;
        /**
          * Whether or not to have body padding
          * @default false
         */
        "noBorder": boolean;
        /**
          * Whether or not to close the dialog when clicking outside of it
          * @default false
         */
        "noClickOutside": boolean;
        /**
          * Whether or not to show the close button
          * @default false
         */
        "noCloseButton": boolean;
        /**
          * Whether or not to show the header
          * @default false
         */
        "noHeader": boolean;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "open": boolean;
        /**
          * The width of the dialog
          * @default 460px
         */
        "width": string;
    }
    interface ZonosEmptyStatePayment {
        /**
          * Text to display in the empty state
         */
        "emptyStateText": string;
        /**
          * Theme color of the icon
          * @default 'LIGHT'
         */
        "theme": ElementsUiTheme;
    }
    interface ZonosHStack {
        /**
          * The spacing between elements in the stack
          * @default 24
         */
        "spacing": GridSpacing;
    }
    interface ZonosHello {
        /**
          * Force left animation instead of detecting which side has more space
          * @default false
         */
        "animateFromLeftOverride"?: boolean;
        /**
          * Override the appearance settings
         */
        "appearanceSettingsOverride"?: Partial<AppearanceConfig>;
        /**
          * This method will convert the currency and return the converted value
          * @returns number
         */
        "convert": (value: number) => Promise<number>;
        /**
          * This method will call convert and format, and return the converted and formatted string
          * @returns string
         */
        "convertAndFormat": (value: number) => Promise<string>;
        /**
          * Override the configured desktop floating location. Takes precedence over `helloSettings.desktopLocationOverride` (HelloPlacement) and `helloSettings.desktopLocation`, and also drives the peek-message animation direction, so consumers no longer need `animateFromLeftOverride` for desktop positioning.
         */
        "desktopLocationOverride"?: HelloDesktopLocation;
        /**
          * This method will trigger the currency conversion and display the converted value
          * @returns void
         */
        "displayCurrency": () => Promise<void>;
        /**
          * This method will format the currency and return the formatted string
          * @returns number
         */
        "format": (value: number) => Promise<string>;
        /**
          * Get the country list the hello widget's country select is using
         */
        "getCountryList": () => Promise<ICountryJson | null>;
        /**
          * Override the configured mobile floating location (enum). Takes precedence over `helloSettings.mobileLocationOverride` (HelloPlacement) and `helloSettings.mobileLocation`.
         */
        "mobileLocationOverride"?: HelloMobileLocation;
        /**
          * This method show the hello dialog
          * @returns void
         */
        "openHelloDialog": (value: boolean) => Promise<void>;
    }
    interface ZonosHelloDialog {
        /**
          * Force left animation instead of detecting which side has more space
          * @default false
         */
        "animateFromLeftOverride"?: boolean;
        /**
          * Override the appearance settings
         */
        "appearanceSettings"?: Partial<AppearanceConfig>;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isOpen": boolean;
        /**
          * Force mobile styling instead of media query and use the passed location value
          * @default false
         */
        "mobileLocationOverride"?: HelloMobileLocation;
        /**
          * Item restrictions array if any
          * @default []
         */
        "restrictedItems": RestrictedItem[];
        /**
          * The function to set the open state
          * @default () => {}
         */
        "setIsOpen": (isOpen: boolean) => void;
    }
    interface ZonosHelloDialogFooter {
        /**
          * Appearance settings
         */
        "appearanceSettings"?: Partial<AppearanceConfig>;
        /**
          * Whether or not the country select dialog is open
          * @default false
         */
        "setShowCountrySelect": (value: boolean) => void;
        /**
          * Whether or not the language select dialog is open
          * @default false
         */
        "setShowLanguageSelect": (value: boolean) => void;
    }
    interface ZonosIcon {
        /**
          * Determines if the icon should be auto height instead of square
          * @default false
         */
        "autoHeight": boolean;
        /**
          * The content of the icon (full svg)
          * @example import RemoveIcon from './assets/removeIcon.svg'; ... <zonos-icon content={RemoveIcon}></zonos-icon> // or <zonos-icon content="<svg>...</svg>"></zonos-icon>
         */
        "content": string;
        /**
          * Color of the SVG
          * @default 'gray-1000'
         */
        "iconColor": Color | (string & { _placeholder?: never });
        /**
          * The size of the icon
          * @default 24
         */
        "size": number;
    }
    interface ZonosInput {
        /**
          * Input label
         */
        "inputLabel": string;
        /**
          * Placeholder for the input
          * @default ''
         */
        "inputPlaceholder": string;
        /**
          * Input size
          * @default 'md'
         */
        "inputSize": 'sm' | 'md' | 'lg' | 'xl';
        /**
          * Value of the input
          * @default ''
         */
        "inputValue": string;
        /**
          * Disables the input
          * @default false
         */
        "isDisabled": boolean;
        /**
          * Error state of the input
          * @default false
         */
        "isError": boolean;
    }
    interface ZonosInvoice {
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile": boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet": boolean;
    }
    interface ZonosInvoiceCartItems {
        /**
          * Whether the component is mobile
          * @default false
         */
        "isMobile": boolean;
    }
    interface ZonosInvoiceFinish {
        /**
          * The border radius style of the dialog
          * @default 'ROUNDED'
         */
        "borderRadius": ElementsUiStyle;
        /**
          * The confirmation id for the invoice order
          * @default null
         */
        "confirmationId": string | null;
        /**
          * Override the notification message and title, bypass checking stripe payment status
         */
        "overrideNotification"?: {
    messages: string[];
    title: string;
    type: 'success' | 'error';
  };
        /**
          * Force status to test the UI for storybook
         */
        "storybookForceStatus"?: PaymentIntent['status'];
    }
    interface ZonosInvoiceFooter {
        /**
          * Theme to change the color of the logo
         */
        "dataTheme"?: ElementsUiTheme;
        /**
          * Override mobile mode
          * @default false
         */
        "mobile": boolean;
        /**
          * Override tablet mode
          * @default false
         */
        "tablet": boolean;
    }
    interface ZonosInvoiceOrderDetails {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
         */
        "collapsed": boolean;
        /**
          * The landed cost id that is used to fetch the shipping address
          * @default ''
         */
        "landedCostId": string;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default true
         */
        "mobile": boolean;
    }
    interface ZonosInvoicePayment {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading": boolean;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosInvoiceReview {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
          * @default false
         */
        "collapsed": boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default false
         */
        "mobile": boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet": boolean;
    }
    interface ZonosInvoiceSubtotal {
        /**
          * Whether the component is mobile
          * @default false
         */
        "isMobile": boolean;
    }
    interface ZonosLanguageSelect {
        /**
          * Function to close the language select
          * @default () => {}
         */
        "handleOnClose": () => void;
    }
    interface ZonosLink {
        /**
          * The href for the link
          * @default ''
         */
        "href": string;
        /**
          * The title attribute for the link
         */
        "linkTitle"?: string;
        /**
          * The rel attribute for the link
         */
        "rel"?: string;
        /**
          * The target attribute for the link
         */
        "target"?: string;
    }
    interface ZonosLinkAuthentication {
        /**
          * Default email for stripe
          * @default null
         */
        "defaultEmail": string | null;
        /**
          * Email error text to dispaly
          * @default false
         */
        "isEmailError": boolean;
        /**
          * The title text for the authentication element
         */
        "titleText": string;
    }
    interface ZonosLoadingOverlay {
        /**
          * Whether or not the overlay is open
          * @default false
         */
        "open": boolean;
        /**
          * Spinner size (optional, default 40)
          * @default 40
         */
        "size": number;
        /**
          * Spinner color (optional)
         */
        "spinnerColor"?: | 'primary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
    | 'black'
    | 'white';
    }
    interface ZonosLogo {
        /**
          * Theme to change the color of the logo
          * @default 'LIGHT'
         */
        "theme": ElementsUiTheme;
        /**
          * The width of the logo
          * @default 'auto'
         */
        "width": string;
    }
    interface ZonosNotification {
        /**
          * Show a notification
         */
        "showNotification": (notification: NotificationInit) => Promise<void>;
    }
    interface ZonosPayment {
        /**
          * The title text for the authentication element
         */
        "titleText"?: string;
    }
    interface ZonosPaypalPayment {
    }
    interface ZonosPolicyConsent {
    }
    interface ZonosRestState {
        /**
          * The subtitle of the rest state
         */
        "restStateSubtitle": string;
        /**
          * The title of the rest state
         */
        "restStateTitle": string;
        /**
          * The type of rest state
         */
        "restStateType": RestStateType;
    }
    interface ZonosReview {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
          * @default false
         */
        "collapsed": boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default false
         */
        "mobile": boolean;
    }
    interface ZonosSelectDialogHeader {
        /**
          * Callback to do something on close
          * @default () => {}
         */
        "handleOnClose": () => void;
        /**
          * The label for the select dialog
          * @default ''
         */
        "label": string;
    }
    interface ZonosShipping {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading": boolean;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "isMobile": boolean;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosShippingRichRadio {
        /**
          * Override border color of the radio item
         */
        "borderColor"?: Color | (string & { _placeholder?: never });
        /**
          * Override border color of the radio item
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * Whether or not the radio item is in mobile mode
         */
        "isMobile": boolean;
        /**
          * List of items to display
         */
        "items": ShippingRichRadioItem[];
        /**
          * Selected item
          * @default {null|firstItem}
         */
        "selectedItem": ShippingRichRadioItem | null;
        /**
          * Theme of the radio item
         */
        "theme"?: ElementsUiTheme;
    }
    interface ZonosSkeleton {
        /**
          * Callback for when the skeleton is dismissed. Also determines if dismiss icon shown.
         */
        "dismissHandler"?: () => void;
        /**
          * The height of the skeleton
          * @default '14px'
         */
        "skeletonHeight"?: string;
        /**
          * The width of the skeleton
          * @default '100%'
         */
        "skeletonWidth": string;
    }
    interface ZonosSpinner {
        /**
          * The size of the spinner
          * @default 32
         */
        "size": number;
        /**
          * Color of the spinner
         */
        "spinnerColor"?: SpinnerColor;
    }
    interface ZonosStoreCredit {
        /**
          * Whether the component is enabled
          * @default true
         */
        "enabled": boolean;
    }
    /**
     * This component is input that has similar style to Stripe since we will use it with other Stripe elements when we don't want to use Link authentication element
     */
    interface ZonosStripeInput {
        /**
          * Autocomplete attribute for the input
         */
        "autoComplete"?: string;
        /**
          * Error message of the input
          * @default ''
         */
        "error"?: string;
        /**
          * Input label
         */
        "inputLabel": string;
        /**
          * Placeholder for the input
          * @default ''
         */
        "inputPlaceholder": string;
        /**
          * Value of the stripeInput
          * @default ''
         */
        "inputValue": string;
        /**
          * Disables the input
          * @default false
         */
        "isDisabled": boolean;
        /**
          * Error state of the input
          * @default false
         */
        "isError": boolean;
        /**
          * Name of the input
         */
        "name"?: string;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Secondary color to override secondary color from appearance secondary color in setting
         */
        "overrideSecondaryColor"?: string;
        /**
          * Whether the input is required
          * @default false
         */
        "required"?: boolean;
        /**
          * The value of the input.
          * @default ''
         */
        "value": string;
    }
    interface ZonosStripePhoneInput {
        /**
          * The autoComplete attribute for the phone input
          * @default ''
         */
        "autoComplete": string;
        /**
          * The country code of the phone input
          * @default null
         */
        "countryCode": CountryCode | null;
        /**
          * Available country options for the select dropdown
          * @default null
         */
        "countryOptions": GenericZonosSettings['countryFields'] | null;
        /**
          * Whether the input is disabled
          * @default false
         */
        "disabled": boolean;
        /**
          * Error message to display
         */
        "error"?: string;
        /**
          * Label text for the input
         */
        "inputLabel"?: string;
        /**
          * Current value of the phone input
         */
        "inputValue"?: string;
        /**
          * Minimum width of the phone input
         */
        "minWidth"?: string;
        /**
          * Override the primary color
         */
        "overridePrimaryColor"?: string;
        /**
          * Override the secondary color
         */
        "overrideSecondaryColor"?: string;
    }
    interface ZonosStripeSelect {
        /**
          * The autoComplete attribute for the select.
          * @default ''
         */
        "autoComplete": string;
        /**
          * Error message of the select
          * @default ''
         */
        "error": string;
        /**
          * Whether the select can be cleared
          * @default false
         */
        "isClearable": boolean;
        /**
          * Disables the select
          * @default false
         */
        "isDisabled": boolean;
        /**
          * Error state of the select
          * @default false
         */
        "isError": boolean;
        /**
          * Minimum width of the select
         */
        "minWidth"?: string;
        /**
          * Name of the select
         */
        "name"?: string;
        /**
          * Options for the select. Must be set using a query selector.
          * @default []
         */
        "options": SelectOption[];
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Secondary color to override secondary color from appearance secondary color in setting
         */
        "overrideSecondaryColor"?: string;
        /**
          * Whether the select is required
          * @default false
         */
        "required"?: boolean;
        /**
          * Select label
         */
        "selectLabel": string;
        /**
          * Placeholder for the select
          * @default ''
         */
        "selectPlaceholder": string;
        /**
          * Selected value of the select
          * @default ''
         */
        "selectedValue": string;
        /**
          * The value of the select.
          * @default ''
         */
        "value": string;
    }
    interface ZonosText {
        /**
          * The size of the text
         */
        "size"?: Size;
        /**
          * The icon element to display
          * @default 'gray-1000'
         */
        "textColor": Color | (string & { _placeholder?: never });
        /**
          * Type of the text to display
          * @default 'body'
         */
        "type": Type;
        /**
          * The weight of the text
         */
        "weight"?: FontWeight;
    }
    interface ZonosToggle {
        /**
          * Options for the toggle
          * @default []
         */
        "options": ToggleItem<string>[];
        /**
          * The selected option
         */
        "value": string;
    }
    interface ZonosTooltip {
        /**
          * The title of the tooltip
          * @default ''
         */
        "label": string;
        /**
          * The subtitle of the tooltip
          * @default ''
         */
        "subtitle": string;
    }
    interface ZonosVStack {
        /**
          * The spacing between elements in the stack
          * @default 24
         */
        "spacing": GridSpacing;
    }
    /**
     * Virtual scroll component for efficiently rendering large lists
     * The idea is from:
     * @ref https://github.com/beenotung/stencil-virtual-scroll/blob/master/src/components/virtual-scroll-list/virtual-scroll-list.scss
     * @ref https://github.dev/ionic-team/ionic-framework/blob/v6.7.5/core/src/components/virtual-scroll/virtual-scroll.tsx
     */
    interface ZonosVirtualScroll {
        /**
          * Buffer size in pixels for pre-rendering items outside viewport
          * @default 100
         */
        "buffer": number;
        /**
          * Fallback height used when specific item height is not provided
         */
        "fallbackItemHeight": number;
        /**
          * Array of heights for each item in pixels
         */
        "itemHeights": number[];
        /**
          * Width of each item in pixels
         */
        "itemWidth"?: number;
        /**
          * Function to render each item in the virtual scroll
         */
        "renderItem": VirtualScrollRenderItem;
    }
}
interface ZonosAddressCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressElement;
}
interface ZonosAddressCompletionDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressCompletionDialogElement;
}
interface ZonosAddressFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressFormElement;
}
interface ZonosAddressSuggestionsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressSuggestionsElement;
}
interface ZonosAddressUpdateDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressUpdateDialogElement;
}
interface ZonosAirwallexPaymentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAirwallexPaymentElement;
}
interface ZonosCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCheckboxElement;
}
interface ZonosCheckoutFinishCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCheckoutFinishElement;
}
interface ZonosCheckoutPaymentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCheckoutPaymentElement;
}
interface ZonosCollectFinishCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCollectFinishElement;
}
interface ZonosCollectOrderDetailsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCollectOrderDetailsElement;
}
interface ZonosCollectPaymentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCollectPaymentElement;
}
interface ZonosConfirmDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosConfirmDialogElement;
}
interface ZonosControllerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosControllerElement;
}
interface ZonosCustomAddressCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCustomAddressElement;
}
interface ZonosCustomerInfoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosCustomerInfoElement;
}
interface ZonosDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosDialogElement;
}
interface ZonosHelloDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosHelloDialogElement;
}
interface ZonosInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosInputElement;
}
interface ZonosInvoiceFinishCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosInvoiceFinishElement;
}
interface ZonosInvoiceOrderDetailsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosInvoiceOrderDetailsElement;
}
interface ZonosInvoicePaymentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosInvoicePaymentElement;
}
interface ZonosLinkAuthenticationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosLinkAuthenticationElement;
}
interface ZonosPaypalPaymentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosPaypalPaymentElement;
}
interface ZonosShippingCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosShippingElement;
}
interface ZonosShippingRichRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosShippingRichRadioElement;
}
interface ZonosStripeInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosStripeInputElement;
}
interface ZonosStripePhoneInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosStripePhoneInputElement;
}
interface ZonosStripeSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosStripeSelectElement;
}
interface ZonosToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosToggleElement;
}
declare global {
    interface HTMLZonosAddressElementEventMap {
        "invalidCharacters": boolean;
        "taxIdChanged": string;
    }
    interface HTMLZonosAddressElement extends Components.ZonosAddress, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosAddressElementEventMap>(type: K, listener: (this: HTMLZonosAddressElement, ev: ZonosAddressCustomEvent<HTMLZonosAddressElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosAddressElementEventMap>(type: K, listener: (this: HTMLZonosAddressElement, ev: ZonosAddressCustomEvent<HTMLZonosAddressElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosAddressElement: {
        prototype: HTMLZonosAddressElement;
        new (): HTMLZonosAddressElement;
    };
    interface HTMLZonosAddressCompletionDialogElementEventMap {
        "closeCompletionDialog": void;
        "completionSubmit": AddressCompletionSubmit;
    }
    interface HTMLZonosAddressCompletionDialogElement extends Components.ZonosAddressCompletionDialog, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosAddressCompletionDialogElementEventMap>(type: K, listener: (this: HTMLZonosAddressCompletionDialogElement, ev: ZonosAddressCompletionDialogCustomEvent<HTMLZonosAddressCompletionDialogElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosAddressCompletionDialogElementEventMap>(type: K, listener: (this: HTMLZonosAddressCompletionDialogElement, ev: ZonosAddressCompletionDialogCustomEvent<HTMLZonosAddressCompletionDialogElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosAddressCompletionDialogElement: {
        prototype: HTMLZonosAddressCompletionDialogElement;
        new (): HTMLZonosAddressCompletionDialogElement;
    };
    interface HTMLZonosAddressDisplayElement extends Components.ZonosAddressDisplay, HTMLStencilElement {
    }
    var HTMLZonosAddressDisplayElement: {
        prototype: HTMLZonosAddressDisplayElement;
        new (): HTMLZonosAddressDisplayElement;
    };
    interface HTMLZonosAddressFormElementEventMap {
        "addressChange": EnteredInfo;
    }
    interface HTMLZonosAddressFormElement extends Components.ZonosAddressForm, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosAddressFormElementEventMap>(type: K, listener: (this: HTMLZonosAddressFormElement, ev: ZonosAddressFormCustomEvent<HTMLZonosAddressFormElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosAddressFormElementEventMap>(type: K, listener: (this: HTMLZonosAddressFormElement, ev: ZonosAddressFormCustomEvent<HTMLZonosAddressFormElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosAddressFormElement: {
        prototype: HTMLZonosAddressFormElement;
        new (): HTMLZonosAddressFormElement;
    };
    interface HTMLZonosAddressSuggestionsElementEventMap {
        "suggestionSelected": EventPayloadMap['placeSelected'];
    }
    interface HTMLZonosAddressSuggestionsElement extends Components.ZonosAddressSuggestions, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosAddressSuggestionsElementEventMap>(type: K, listener: (this: HTMLZonosAddressSuggestionsElement, ev: ZonosAddressSuggestionsCustomEvent<HTMLZonosAddressSuggestionsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosAddressSuggestionsElementEventMap>(type: K, listener: (this: HTMLZonosAddressSuggestionsElement, ev: ZonosAddressSuggestionsCustomEvent<HTMLZonosAddressSuggestionsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosAddressSuggestionsElement: {
        prototype: HTMLZonosAddressSuggestionsElement;
        new (): HTMLZonosAddressSuggestionsElement;
    };
    interface HTMLZonosAddressUpdateDialogElementEventMap {
        "closeUpdateDialog": void;
        "continueClicked": SubmitEventData;
    }
    interface HTMLZonosAddressUpdateDialogElement extends Components.ZonosAddressUpdateDialog, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosAddressUpdateDialogElementEventMap>(type: K, listener: (this: HTMLZonosAddressUpdateDialogElement, ev: ZonosAddressUpdateDialogCustomEvent<HTMLZonosAddressUpdateDialogElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosAddressUpdateDialogElementEventMap>(type: K, listener: (this: HTMLZonosAddressUpdateDialogElement, ev: ZonosAddressUpdateDialogCustomEvent<HTMLZonosAddressUpdateDialogElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosAddressUpdateDialogElement: {
        prototype: HTMLZonosAddressUpdateDialogElement;
        new (): HTMLZonosAddressUpdateDialogElement;
    };
    interface HTMLZonosAirwallexPaymentElementEventMap {
        "airwallexPaymentSuccess": void;
        "airwallexPaymentError": void;
    }
    interface HTMLZonosAirwallexPaymentElement extends Components.ZonosAirwallexPayment, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosAirwallexPaymentElementEventMap>(type: K, listener: (this: HTMLZonosAirwallexPaymentElement, ev: ZonosAirwallexPaymentCustomEvent<HTMLZonosAirwallexPaymentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosAirwallexPaymentElementEventMap>(type: K, listener: (this: HTMLZonosAirwallexPaymentElement, ev: ZonosAirwallexPaymentCustomEvent<HTMLZonosAirwallexPaymentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosAirwallexPaymentElement: {
        prototype: HTMLZonosAirwallexPaymentElement;
        new (): HTMLZonosAirwallexPaymentElement;
    };
    interface HTMLZonosBadgeElement extends Components.ZonosBadge, HTMLStencilElement {
    }
    var HTMLZonosBadgeElement: {
        prototype: HTMLZonosBadgeElement;
        new (): HTMLZonosBadgeElement;
    };
    interface HTMLZonosBannerElement extends Components.ZonosBanner, HTMLStencilElement {
    }
    var HTMLZonosBannerElement: {
        prototype: HTMLZonosBannerElement;
        new (): HTMLZonosBannerElement;
    };
    interface HTMLZonosButtonElement extends Components.ZonosButton, HTMLStencilElement {
    }
    var HTMLZonosButtonElement: {
        prototype: HTMLZonosButtonElement;
        new (): HTMLZonosButtonElement;
    };
    interface HTMLZonosCardElement extends Components.ZonosCard, HTMLStencilElement {
    }
    var HTMLZonosCardElement: {
        prototype: HTMLZonosCardElement;
        new (): HTMLZonosCardElement;
    };
    interface HTMLZonosCartItemsElement extends Components.ZonosCartItems, HTMLStencilElement {
    }
    var HTMLZonosCartItemsElement: {
        prototype: HTMLZonosCartItemsElement;
        new (): HTMLZonosCartItemsElement;
    };
    interface HTMLZonosCartRestrictedItemsElement extends Components.ZonosCartRestrictedItems, HTMLStencilElement {
    }
    var HTMLZonosCartRestrictedItemsElement: {
        prototype: HTMLZonosCartRestrictedItemsElement;
        new (): HTMLZonosCartRestrictedItemsElement;
    };
    interface HTMLZonosCartSubtotalElement extends Components.ZonosCartSubtotal, HTMLStencilElement {
    }
    var HTMLZonosCartSubtotalElement: {
        prototype: HTMLZonosCartSubtotalElement;
        new (): HTMLZonosCartSubtotalElement;
    };
    interface HTMLZonosCheckboxElementEventMap {
        "checkboxSelected": boolean;
    }
    interface HTMLZonosCheckboxElement extends Components.ZonosCheckbox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCheckboxElementEventMap>(type: K, listener: (this: HTMLZonosCheckboxElement, ev: ZonosCheckboxCustomEvent<HTMLZonosCheckboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCheckboxElementEventMap>(type: K, listener: (this: HTMLZonosCheckboxElement, ev: ZonosCheckboxCustomEvent<HTMLZonosCheckboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCheckboxElement: {
        prototype: HTMLZonosCheckboxElement;
        new (): HTMLZonosCheckboxElement;
    };
    interface HTMLZonosCheckoutElement extends Components.ZonosCheckout, HTMLStencilElement {
    }
    var HTMLZonosCheckoutElement: {
        prototype: HTMLZonosCheckoutElement;
        new (): HTMLZonosCheckoutElement;
    };
    interface HTMLZonosCheckoutFinishElementEventMap {
        "closeClick": void;
    }
    interface HTMLZonosCheckoutFinishElement extends Components.ZonosCheckoutFinish, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCheckoutFinishElementEventMap>(type: K, listener: (this: HTMLZonosCheckoutFinishElement, ev: ZonosCheckoutFinishCustomEvent<HTMLZonosCheckoutFinishElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCheckoutFinishElementEventMap>(type: K, listener: (this: HTMLZonosCheckoutFinishElement, ev: ZonosCheckoutFinishCustomEvent<HTMLZonosCheckoutFinishElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCheckoutFinishElement: {
        prototype: HTMLZonosCheckoutFinishElement;
        new (): HTMLZonosCheckoutFinishElement;
    };
    interface HTMLZonosCheckoutFooterElement extends Components.ZonosCheckoutFooter, HTMLStencilElement {
    }
    var HTMLZonosCheckoutFooterElement: {
        prototype: HTMLZonosCheckoutFooterElement;
        new (): HTMLZonosCheckoutFooterElement;
    };
    interface HTMLZonosCheckoutPaymentElementEventMap {
        "continueClicked": void;
        "paypalSessionFailed": void;
        "paypalSessionDone": string;
    }
    interface HTMLZonosCheckoutPaymentElement extends Components.ZonosCheckoutPayment, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCheckoutPaymentElementEventMap>(type: K, listener: (this: HTMLZonosCheckoutPaymentElement, ev: ZonosCheckoutPaymentCustomEvent<HTMLZonosCheckoutPaymentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCheckoutPaymentElementEventMap>(type: K, listener: (this: HTMLZonosCheckoutPaymentElement, ev: ZonosCheckoutPaymentCustomEvent<HTMLZonosCheckoutPaymentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCheckoutPaymentElement: {
        prototype: HTMLZonosCheckoutPaymentElement;
        new (): HTMLZonosCheckoutPaymentElement;
    };
    interface HTMLZonosCheckoutProgressTabsElement extends Components.ZonosCheckoutProgressTabs, HTMLStencilElement {
    }
    var HTMLZonosCheckoutProgressTabsElement: {
        prototype: HTMLZonosCheckoutProgressTabsElement;
        new (): HTMLZonosCheckoutProgressTabsElement;
    };
    interface HTMLZonosCollapseElement extends Components.ZonosCollapse, HTMLStencilElement {
    }
    var HTMLZonosCollapseElement: {
        prototype: HTMLZonosCollapseElement;
        new (): HTMLZonosCollapseElement;
    };
    interface HTMLZonosCollectElement extends Components.ZonosCollect, HTMLStencilElement {
    }
    var HTMLZonosCollectElement: {
        prototype: HTMLZonosCollectElement;
        new (): HTMLZonosCollectElement;
    };
    interface HTMLZonosCollectCartItemsElement extends Components.ZonosCollectCartItems, HTMLStencilElement {
    }
    var HTMLZonosCollectCartItemsElement: {
        prototype: HTMLZonosCollectCartItemsElement;
        new (): HTMLZonosCollectCartItemsElement;
    };
    interface HTMLZonosCollectFinishElementEventMap {
        "closeClick": void;
    }
    interface HTMLZonosCollectFinishElement extends Components.ZonosCollectFinish, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCollectFinishElementEventMap>(type: K, listener: (this: HTMLZonosCollectFinishElement, ev: ZonosCollectFinishCustomEvent<HTMLZonosCollectFinishElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCollectFinishElementEventMap>(type: K, listener: (this: HTMLZonosCollectFinishElement, ev: ZonosCollectFinishCustomEvent<HTMLZonosCollectFinishElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCollectFinishElement: {
        prototype: HTMLZonosCollectFinishElement;
        new (): HTMLZonosCollectFinishElement;
    };
    interface HTMLZonosCollectFooterElement extends Components.ZonosCollectFooter, HTMLStencilElement {
    }
    var HTMLZonosCollectFooterElement: {
        prototype: HTMLZonosCollectFooterElement;
        new (): HTMLZonosCollectFooterElement;
    };
    interface HTMLZonosCollectOrderDetailsElementEventMap {
        "collapseClicked": boolean;
    }
    interface HTMLZonosCollectOrderDetailsElement extends Components.ZonosCollectOrderDetails, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCollectOrderDetailsElementEventMap>(type: K, listener: (this: HTMLZonosCollectOrderDetailsElement, ev: ZonosCollectOrderDetailsCustomEvent<HTMLZonosCollectOrderDetailsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCollectOrderDetailsElementEventMap>(type: K, listener: (this: HTMLZonosCollectOrderDetailsElement, ev: ZonosCollectOrderDetailsCustomEvent<HTMLZonosCollectOrderDetailsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCollectOrderDetailsElement: {
        prototype: HTMLZonosCollectOrderDetailsElement;
        new (): HTMLZonosCollectOrderDetailsElement;
    };
    interface HTMLZonosCollectPaymentElementEventMap {
        "continueClicked": void;
        "paypalSessionFailed": void;
        "paypalSessionDone": string;
        "airwallexPaymentDone": void;
    }
    interface HTMLZonosCollectPaymentElement extends Components.ZonosCollectPayment, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCollectPaymentElementEventMap>(type: K, listener: (this: HTMLZonosCollectPaymentElement, ev: ZonosCollectPaymentCustomEvent<HTMLZonosCollectPaymentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCollectPaymentElementEventMap>(type: K, listener: (this: HTMLZonosCollectPaymentElement, ev: ZonosCollectPaymentCustomEvent<HTMLZonosCollectPaymentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCollectPaymentElement: {
        prototype: HTMLZonosCollectPaymentElement;
        new (): HTMLZonosCollectPaymentElement;
    };
    interface HTMLZonosCollectReviewElement extends Components.ZonosCollectReview, HTMLStencilElement {
    }
    var HTMLZonosCollectReviewElement: {
        prototype: HTMLZonosCollectReviewElement;
        new (): HTMLZonosCollectReviewElement;
    };
    interface HTMLZonosCollectSubtotalElement extends Components.ZonosCollectSubtotal, HTMLStencilElement {
    }
    var HTMLZonosCollectSubtotalElement: {
        prototype: HTMLZonosCollectSubtotalElement;
        new (): HTMLZonosCollectSubtotalElement;
    };
    interface HTMLZonosComponentElement extends Components.ZonosComponent, HTMLStencilElement {
    }
    var HTMLZonosComponentElement: {
        prototype: HTMLZonosComponentElement;
        new (): HTMLZonosComponentElement;
    };
    interface HTMLZonosConfirmDialogElementEventMap {
        "confirmClicked": void;
        "cancelClicked": void;
    }
    interface HTMLZonosConfirmDialogElement extends Components.ZonosConfirmDialog, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosConfirmDialogElementEventMap>(type: K, listener: (this: HTMLZonosConfirmDialogElement, ev: ZonosConfirmDialogCustomEvent<HTMLZonosConfirmDialogElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosConfirmDialogElementEventMap>(type: K, listener: (this: HTMLZonosConfirmDialogElement, ev: ZonosConfirmDialogCustomEvent<HTMLZonosConfirmDialogElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosConfirmDialogElement: {
        prototype: HTMLZonosConfirmDialogElement;
        new (): HTMLZonosConfirmDialogElement;
    };
    interface HTMLZonosControllerElementEventMap {
        "paypalInitEvent": { paypalClientId: string };
        "stripeInitEvent": { publishableKey: string };
    }
    interface HTMLZonosControllerElement extends Components.ZonosController, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosControllerElementEventMap>(type: K, listener: (this: HTMLZonosControllerElement, ev: ZonosControllerCustomEvent<HTMLZonosControllerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosControllerElementEventMap>(type: K, listener: (this: HTMLZonosControllerElement, ev: ZonosControllerCustomEvent<HTMLZonosControllerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosControllerElement: {
        prototype: HTMLZonosControllerElement;
        new (): HTMLZonosControllerElement;
    };
    interface HTMLZonosCountryFlagElement extends Components.ZonosCountryFlag, HTMLStencilElement {
    }
    var HTMLZonosCountryFlagElement: {
        prototype: HTMLZonosCountryFlagElement;
        new (): HTMLZonosCountryFlagElement;
    };
    interface HTMLZonosCountrySelectElement extends Components.ZonosCountrySelect, HTMLStencilElement {
    }
    var HTMLZonosCountrySelectElement: {
        prototype: HTMLZonosCountrySelectElement;
        new (): HTMLZonosCountrySelectElement;
    };
    interface HTMLZonosCurrencyToggleElement extends Components.ZonosCurrencyToggle, HTMLStencilElement {
    }
    var HTMLZonosCurrencyToggleElement: {
        prototype: HTMLZonosCurrencyToggleElement;
        new (): HTMLZonosCurrencyToggleElement;
    };
    interface HTMLZonosCustomAddressElementEventMap {
        "invalidCharacters": boolean;
        "addressChange": {
    errors: CustomAddressErrors;
    type: 'billing' | 'shipping';
    value: StripeAddressElementChangeEvent;
  };
    }
    interface HTMLZonosCustomAddressElement extends Components.ZonosCustomAddress, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCustomAddressElementEventMap>(type: K, listener: (this: HTMLZonosCustomAddressElement, ev: ZonosCustomAddressCustomEvent<HTMLZonosCustomAddressElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCustomAddressElementEventMap>(type: K, listener: (this: HTMLZonosCustomAddressElement, ev: ZonosCustomAddressCustomEvent<HTMLZonosCustomAddressElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCustomAddressElement: {
        prototype: HTMLZonosCustomAddressElement;
        new (): HTMLZonosCustomAddressElement;
    };
    interface HTMLZonosCustomMessageElement extends Components.ZonosCustomMessage, HTMLStencilElement {
    }
    var HTMLZonosCustomMessageElement: {
        prototype: HTMLZonosCustomMessageElement;
        new (): HTMLZonosCustomMessageElement;
    };
    interface HTMLZonosCustomerInfoElementEventMap {
        "continueClicked": {
    billingAddress: StripeAddressElementChangeEvent | null;
    sameAsBilling: boolean;
    shippingAddress: StripeAddressElementChangeEvent | null;
  };
        "testContinueClicked": {
    billingAddress: StripeAddressElementChangeEvent | null;
    sameAsBilling: boolean;
    shippingAddress: StripeAddressElementChangeEvent | null;
  };
    }
    interface HTMLZonosCustomerInfoElement extends Components.ZonosCustomerInfo, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosCustomerInfoElementEventMap>(type: K, listener: (this: HTMLZonosCustomerInfoElement, ev: ZonosCustomerInfoCustomEvent<HTMLZonosCustomerInfoElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosCustomerInfoElementEventMap>(type: K, listener: (this: HTMLZonosCustomerInfoElement, ev: ZonosCustomerInfoCustomEvent<HTMLZonosCustomerInfoElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosCustomerInfoElement: {
        prototype: HTMLZonosCustomerInfoElement;
        new (): HTMLZonosCustomerInfoElement;
    };
    interface HTMLZonosDialogElementEventMap {
        "closeDialog": void;
    }
    interface HTMLZonosDialogElement extends Components.ZonosDialog, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosDialogElementEventMap>(type: K, listener: (this: HTMLZonosDialogElement, ev: ZonosDialogCustomEvent<HTMLZonosDialogElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosDialogElementEventMap>(type: K, listener: (this: HTMLZonosDialogElement, ev: ZonosDialogCustomEvent<HTMLZonosDialogElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosDialogElement: {
        prototype: HTMLZonosDialogElement;
        new (): HTMLZonosDialogElement;
    };
    interface HTMLZonosEmptyStatePaymentElement extends Components.ZonosEmptyStatePayment, HTMLStencilElement {
    }
    var HTMLZonosEmptyStatePaymentElement: {
        prototype: HTMLZonosEmptyStatePaymentElement;
        new (): HTMLZonosEmptyStatePaymentElement;
    };
    interface HTMLZonosHStackElement extends Components.ZonosHStack, HTMLStencilElement {
    }
    var HTMLZonosHStackElement: {
        prototype: HTMLZonosHStackElement;
        new (): HTMLZonosHStackElement;
    };
    interface HTMLZonosHelloElement extends Components.ZonosHello, HTMLStencilElement {
    }
    var HTMLZonosHelloElement: {
        prototype: HTMLZonosHelloElement;
        new (): HTMLZonosHelloElement;
    };
    interface HTMLZonosHelloDialogElementEventMap {
        "closeDialog": void;
    }
    interface HTMLZonosHelloDialogElement extends Components.ZonosHelloDialog, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosHelloDialogElementEventMap>(type: K, listener: (this: HTMLZonosHelloDialogElement, ev: ZonosHelloDialogCustomEvent<HTMLZonosHelloDialogElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosHelloDialogElementEventMap>(type: K, listener: (this: HTMLZonosHelloDialogElement, ev: ZonosHelloDialogCustomEvent<HTMLZonosHelloDialogElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosHelloDialogElement: {
        prototype: HTMLZonosHelloDialogElement;
        new (): HTMLZonosHelloDialogElement;
    };
    interface HTMLZonosHelloDialogFooterElement extends Components.ZonosHelloDialogFooter, HTMLStencilElement {
    }
    var HTMLZonosHelloDialogFooterElement: {
        prototype: HTMLZonosHelloDialogFooterElement;
        new (): HTMLZonosHelloDialogFooterElement;
    };
    interface HTMLZonosIconElement extends Components.ZonosIcon, HTMLStencilElement {
    }
    var HTMLZonosIconElement: {
        prototype: HTMLZonosIconElement;
        new (): HTMLZonosIconElement;
    };
    interface HTMLZonosInputElementEventMap {
        "inputChange": string;
    }
    interface HTMLZonosInputElement extends Components.ZonosInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosInputElementEventMap>(type: K, listener: (this: HTMLZonosInputElement, ev: ZonosInputCustomEvent<HTMLZonosInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosInputElementEventMap>(type: K, listener: (this: HTMLZonosInputElement, ev: ZonosInputCustomEvent<HTMLZonosInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosInputElement: {
        prototype: HTMLZonosInputElement;
        new (): HTMLZonosInputElement;
    };
    interface HTMLZonosInvoiceElement extends Components.ZonosInvoice, HTMLStencilElement {
    }
    var HTMLZonosInvoiceElement: {
        prototype: HTMLZonosInvoiceElement;
        new (): HTMLZonosInvoiceElement;
    };
    interface HTMLZonosInvoiceCartItemsElement extends Components.ZonosInvoiceCartItems, HTMLStencilElement {
    }
    var HTMLZonosInvoiceCartItemsElement: {
        prototype: HTMLZonosInvoiceCartItemsElement;
        new (): HTMLZonosInvoiceCartItemsElement;
    };
    interface HTMLZonosInvoiceFinishElementEventMap {
        "closeClick": void;
    }
    interface HTMLZonosInvoiceFinishElement extends Components.ZonosInvoiceFinish, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosInvoiceFinishElementEventMap>(type: K, listener: (this: HTMLZonosInvoiceFinishElement, ev: ZonosInvoiceFinishCustomEvent<HTMLZonosInvoiceFinishElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosInvoiceFinishElementEventMap>(type: K, listener: (this: HTMLZonosInvoiceFinishElement, ev: ZonosInvoiceFinishCustomEvent<HTMLZonosInvoiceFinishElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosInvoiceFinishElement: {
        prototype: HTMLZonosInvoiceFinishElement;
        new (): HTMLZonosInvoiceFinishElement;
    };
    interface HTMLZonosInvoiceFooterElement extends Components.ZonosInvoiceFooter, HTMLStencilElement {
    }
    var HTMLZonosInvoiceFooterElement: {
        prototype: HTMLZonosInvoiceFooterElement;
        new (): HTMLZonosInvoiceFooterElement;
    };
    interface HTMLZonosInvoiceOrderDetailsElementEventMap {
        "collapseClicked": boolean;
    }
    interface HTMLZonosInvoiceOrderDetailsElement extends Components.ZonosInvoiceOrderDetails, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosInvoiceOrderDetailsElementEventMap>(type: K, listener: (this: HTMLZonosInvoiceOrderDetailsElement, ev: ZonosInvoiceOrderDetailsCustomEvent<HTMLZonosInvoiceOrderDetailsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosInvoiceOrderDetailsElementEventMap>(type: K, listener: (this: HTMLZonosInvoiceOrderDetailsElement, ev: ZonosInvoiceOrderDetailsCustomEvent<HTMLZonosInvoiceOrderDetailsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosInvoiceOrderDetailsElement: {
        prototype: HTMLZonosInvoiceOrderDetailsElement;
        new (): HTMLZonosInvoiceOrderDetailsElement;
    };
    interface HTMLZonosInvoicePaymentElementEventMap {
        "continueClicked": void;
        "paypalSessionFailed": void;
        "paypalSessionDone": string;
    }
    interface HTMLZonosInvoicePaymentElement extends Components.ZonosInvoicePayment, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosInvoicePaymentElementEventMap>(type: K, listener: (this: HTMLZonosInvoicePaymentElement, ev: ZonosInvoicePaymentCustomEvent<HTMLZonosInvoicePaymentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosInvoicePaymentElementEventMap>(type: K, listener: (this: HTMLZonosInvoicePaymentElement, ev: ZonosInvoicePaymentCustomEvent<HTMLZonosInvoicePaymentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosInvoicePaymentElement: {
        prototype: HTMLZonosInvoicePaymentElement;
        new (): HTMLZonosInvoicePaymentElement;
    };
    interface HTMLZonosInvoiceReviewElement extends Components.ZonosInvoiceReview, HTMLStencilElement {
    }
    var HTMLZonosInvoiceReviewElement: {
        prototype: HTMLZonosInvoiceReviewElement;
        new (): HTMLZonosInvoiceReviewElement;
    };
    interface HTMLZonosInvoiceSubtotalElement extends Components.ZonosInvoiceSubtotal, HTMLStencilElement {
    }
    var HTMLZonosInvoiceSubtotalElement: {
        prototype: HTMLZonosInvoiceSubtotalElement;
        new (): HTMLZonosInvoiceSubtotalElement;
    };
    interface HTMLZonosLanguageSelectElement extends Components.ZonosLanguageSelect, HTMLStencilElement {
    }
    var HTMLZonosLanguageSelectElement: {
        prototype: HTMLZonosLanguageSelectElement;
        new (): HTMLZonosLanguageSelectElement;
    };
    interface HTMLZonosLinkElement extends Components.ZonosLink, HTMLStencilElement {
    }
    var HTMLZonosLinkElement: {
        prototype: HTMLZonosLinkElement;
        new (): HTMLZonosLinkElement;
    };
    interface HTMLZonosLinkAuthenticationElementEventMap {
        "linkAuthenticationChange": void;
    }
    interface HTMLZonosLinkAuthenticationElement extends Components.ZonosLinkAuthentication, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosLinkAuthenticationElementEventMap>(type: K, listener: (this: HTMLZonosLinkAuthenticationElement, ev: ZonosLinkAuthenticationCustomEvent<HTMLZonosLinkAuthenticationElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosLinkAuthenticationElementEventMap>(type: K, listener: (this: HTMLZonosLinkAuthenticationElement, ev: ZonosLinkAuthenticationCustomEvent<HTMLZonosLinkAuthenticationElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosLinkAuthenticationElement: {
        prototype: HTMLZonosLinkAuthenticationElement;
        new (): HTMLZonosLinkAuthenticationElement;
    };
    interface HTMLZonosLoadingOverlayElement extends Components.ZonosLoadingOverlay, HTMLStencilElement {
    }
    var HTMLZonosLoadingOverlayElement: {
        prototype: HTMLZonosLoadingOverlayElement;
        new (): HTMLZonosLoadingOverlayElement;
    };
    interface HTMLZonosLogoElement extends Components.ZonosLogo, HTMLStencilElement {
    }
    var HTMLZonosLogoElement: {
        prototype: HTMLZonosLogoElement;
        new (): HTMLZonosLogoElement;
    };
    interface HTMLZonosNotificationElement extends Components.ZonosNotification, HTMLStencilElement {
    }
    var HTMLZonosNotificationElement: {
        prototype: HTMLZonosNotificationElement;
        new (): HTMLZonosNotificationElement;
    };
    interface HTMLZonosPaymentElement extends Components.ZonosPayment, HTMLStencilElement {
    }
    var HTMLZonosPaymentElement: {
        prototype: HTMLZonosPaymentElement;
        new (): HTMLZonosPaymentElement;
    };
    interface HTMLZonosPaypalPaymentElementEventMap {
        "paypalSessionDone": { orderId: string };
        "paypalSessionFail": void;
    }
    interface HTMLZonosPaypalPaymentElement extends Components.ZonosPaypalPayment, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosPaypalPaymentElementEventMap>(type: K, listener: (this: HTMLZonosPaypalPaymentElement, ev: ZonosPaypalPaymentCustomEvent<HTMLZonosPaypalPaymentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosPaypalPaymentElementEventMap>(type: K, listener: (this: HTMLZonosPaypalPaymentElement, ev: ZonosPaypalPaymentCustomEvent<HTMLZonosPaypalPaymentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosPaypalPaymentElement: {
        prototype: HTMLZonosPaypalPaymentElement;
        new (): HTMLZonosPaypalPaymentElement;
    };
    interface HTMLZonosPolicyConsentElement extends Components.ZonosPolicyConsent, HTMLStencilElement {
    }
    var HTMLZonosPolicyConsentElement: {
        prototype: HTMLZonosPolicyConsentElement;
        new (): HTMLZonosPolicyConsentElement;
    };
    interface HTMLZonosRestStateElement extends Components.ZonosRestState, HTMLStencilElement {
    }
    var HTMLZonosRestStateElement: {
        prototype: HTMLZonosRestStateElement;
        new (): HTMLZonosRestStateElement;
    };
    interface HTMLZonosReviewElement extends Components.ZonosReview, HTMLStencilElement {
    }
    var HTMLZonosReviewElement: {
        prototype: HTMLZonosReviewElement;
        new (): HTMLZonosReviewElement;
    };
    interface HTMLZonosSelectDialogHeaderElement extends Components.ZonosSelectDialogHeader, HTMLStencilElement {
    }
    var HTMLZonosSelectDialogHeaderElement: {
        prototype: HTMLZonosSelectDialogHeaderElement;
        new (): HTMLZonosSelectDialogHeaderElement;
    };
    interface HTMLZonosShippingElementEventMap {
        "continueClicked": void;
    }
    interface HTMLZonosShippingElement extends Components.ZonosShipping, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosShippingElementEventMap>(type: K, listener: (this: HTMLZonosShippingElement, ev: ZonosShippingCustomEvent<HTMLZonosShippingElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosShippingElementEventMap>(type: K, listener: (this: HTMLZonosShippingElement, ev: ZonosShippingCustomEvent<HTMLZonosShippingElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosShippingElement: {
        prototype: HTMLZonosShippingElement;
        new (): HTMLZonosShippingElement;
    };
    interface HTMLZonosShippingRichRadioElementEventMap {
        "radioSelected": ShippingRichRadioItem;
    }
    interface HTMLZonosShippingRichRadioElement extends Components.ZonosShippingRichRadio, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosShippingRichRadioElementEventMap>(type: K, listener: (this: HTMLZonosShippingRichRadioElement, ev: ZonosShippingRichRadioCustomEvent<HTMLZonosShippingRichRadioElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosShippingRichRadioElementEventMap>(type: K, listener: (this: HTMLZonosShippingRichRadioElement, ev: ZonosShippingRichRadioCustomEvent<HTMLZonosShippingRichRadioElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosShippingRichRadioElement: {
        prototype: HTMLZonosShippingRichRadioElement;
        new (): HTMLZonosShippingRichRadioElement;
    };
    interface HTMLZonosSkeletonElement extends Components.ZonosSkeleton, HTMLStencilElement {
    }
    var HTMLZonosSkeletonElement: {
        prototype: HTMLZonosSkeletonElement;
        new (): HTMLZonosSkeletonElement;
    };
    interface HTMLZonosSpinnerElement extends Components.ZonosSpinner, HTMLStencilElement {
    }
    var HTMLZonosSpinnerElement: {
        prototype: HTMLZonosSpinnerElement;
        new (): HTMLZonosSpinnerElement;
    };
    interface HTMLZonosStoreCreditElement extends Components.ZonosStoreCredit, HTMLStencilElement {
    }
    var HTMLZonosStoreCreditElement: {
        prototype: HTMLZonosStoreCreditElement;
        new (): HTMLZonosStoreCreditElement;
    };
    interface HTMLZonosStripeInputElementEventMap {
        "inputChange": string;
    }
    /**
     * This component is input that has similar style to Stripe since we will use it with other Stripe elements when we don't want to use Link authentication element
     */
    interface HTMLZonosStripeInputElement extends Components.ZonosStripeInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosStripeInputElementEventMap>(type: K, listener: (this: HTMLZonosStripeInputElement, ev: ZonosStripeInputCustomEvent<HTMLZonosStripeInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosStripeInputElementEventMap>(type: K, listener: (this: HTMLZonosStripeInputElement, ev: ZonosStripeInputCustomEvent<HTMLZonosStripeInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosStripeInputElement: {
        prototype: HTMLZonosStripeInputElement;
        new (): HTMLZonosStripeInputElement;
    };
    interface HTMLZonosStripePhoneInputElementEventMap {
        "inputValueChange": {
    countryCode: CountryCode | null;
    isEmpty: boolean;
    phoneNumber: string;
    valid: boolean;
    wrongFormat: boolean;
  };
    }
    interface HTMLZonosStripePhoneInputElement extends Components.ZonosStripePhoneInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosStripePhoneInputElementEventMap>(type: K, listener: (this: HTMLZonosStripePhoneInputElement, ev: ZonosStripePhoneInputCustomEvent<HTMLZonosStripePhoneInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosStripePhoneInputElementEventMap>(type: K, listener: (this: HTMLZonosStripePhoneInputElement, ev: ZonosStripePhoneInputCustomEvent<HTMLZonosStripePhoneInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosStripePhoneInputElement: {
        prototype: HTMLZonosStripePhoneInputElement;
        new (): HTMLZonosStripePhoneInputElement;
    };
    interface HTMLZonosStripeSelectElementEventMap {
        "selectChange": string;
    }
    interface HTMLZonosStripeSelectElement extends Components.ZonosStripeSelect, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosStripeSelectElementEventMap>(type: K, listener: (this: HTMLZonosStripeSelectElement, ev: ZonosStripeSelectCustomEvent<HTMLZonosStripeSelectElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosStripeSelectElementEventMap>(type: K, listener: (this: HTMLZonosStripeSelectElement, ev: ZonosStripeSelectCustomEvent<HTMLZonosStripeSelectElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosStripeSelectElement: {
        prototype: HTMLZonosStripeSelectElement;
        new (): HTMLZonosStripeSelectElement;
    };
    interface HTMLZonosTextElement extends Components.ZonosText, HTMLStencilElement {
    }
    var HTMLZonosTextElement: {
        prototype: HTMLZonosTextElement;
        new (): HTMLZonosTextElement;
    };
    interface HTMLZonosToggleElementEventMap {
        "toggleChanged": string;
    }
    interface HTMLZonosToggleElement extends Components.ZonosToggle, HTMLStencilElement {
        addEventListener<K extends keyof HTMLZonosToggleElementEventMap>(type: K, listener: (this: HTMLZonosToggleElement, ev: ZonosToggleCustomEvent<HTMLZonosToggleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLZonosToggleElementEventMap>(type: K, listener: (this: HTMLZonosToggleElement, ev: ZonosToggleCustomEvent<HTMLZonosToggleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLZonosToggleElement: {
        prototype: HTMLZonosToggleElement;
        new (): HTMLZonosToggleElement;
    };
    interface HTMLZonosTooltipElement extends Components.ZonosTooltip, HTMLStencilElement {
    }
    var HTMLZonosTooltipElement: {
        prototype: HTMLZonosTooltipElement;
        new (): HTMLZonosTooltipElement;
    };
    interface HTMLZonosVStackElement extends Components.ZonosVStack, HTMLStencilElement {
    }
    var HTMLZonosVStackElement: {
        prototype: HTMLZonosVStackElement;
        new (): HTMLZonosVStackElement;
    };
    /**
     * Virtual scroll component for efficiently rendering large lists
     * The idea is from:
     * @ref https://github.com/beenotung/stencil-virtual-scroll/blob/master/src/components/virtual-scroll-list/virtual-scroll-list.scss
     * @ref https://github.dev/ionic-team/ionic-framework/blob/v6.7.5/core/src/components/virtual-scroll/virtual-scroll.tsx
     */
    interface HTMLZonosVirtualScrollElement extends Components.ZonosVirtualScroll, HTMLStencilElement {
    }
    var HTMLZonosVirtualScrollElement: {
        prototype: HTMLZonosVirtualScrollElement;
        new (): HTMLZonosVirtualScrollElement;
    };
    interface HTMLElementTagNameMap {
        "zonos-address": HTMLZonosAddressElement;
        "zonos-address-completion-dialog": HTMLZonosAddressCompletionDialogElement;
        "zonos-address-display": HTMLZonosAddressDisplayElement;
        "zonos-address-form": HTMLZonosAddressFormElement;
        "zonos-address-suggestions": HTMLZonosAddressSuggestionsElement;
        "zonos-address-update-dialog": HTMLZonosAddressUpdateDialogElement;
        "zonos-airwallex-payment": HTMLZonosAirwallexPaymentElement;
        "zonos-badge": HTMLZonosBadgeElement;
        "zonos-banner": HTMLZonosBannerElement;
        "zonos-button": HTMLZonosButtonElement;
        "zonos-card": HTMLZonosCardElement;
        "zonos-cart-items": HTMLZonosCartItemsElement;
        "zonos-cart-restricted-items": HTMLZonosCartRestrictedItemsElement;
        "zonos-cart-subtotal": HTMLZonosCartSubtotalElement;
        "zonos-checkbox": HTMLZonosCheckboxElement;
        "zonos-checkout": HTMLZonosCheckoutElement;
        "zonos-checkout-finish": HTMLZonosCheckoutFinishElement;
        "zonos-checkout-footer": HTMLZonosCheckoutFooterElement;
        "zonos-checkout-payment": HTMLZonosCheckoutPaymentElement;
        "zonos-checkout-progress-tabs": HTMLZonosCheckoutProgressTabsElement;
        "zonos-collapse": HTMLZonosCollapseElement;
        "zonos-collect": HTMLZonosCollectElement;
        "zonos-collect-cart-items": HTMLZonosCollectCartItemsElement;
        "zonos-collect-finish": HTMLZonosCollectFinishElement;
        "zonos-collect-footer": HTMLZonosCollectFooterElement;
        "zonos-collect-order-details": HTMLZonosCollectOrderDetailsElement;
        "zonos-collect-payment": HTMLZonosCollectPaymentElement;
        "zonos-collect-review": HTMLZonosCollectReviewElement;
        "zonos-collect-subtotal": HTMLZonosCollectSubtotalElement;
        "zonos-component": HTMLZonosComponentElement;
        "zonos-confirm-dialog": HTMLZonosConfirmDialogElement;
        "zonos-controller": HTMLZonosControllerElement;
        "zonos-country-flag": HTMLZonosCountryFlagElement;
        "zonos-country-select": HTMLZonosCountrySelectElement;
        "zonos-currency-toggle": HTMLZonosCurrencyToggleElement;
        "zonos-custom-address": HTMLZonosCustomAddressElement;
        "zonos-custom-message": HTMLZonosCustomMessageElement;
        "zonos-customer-info": HTMLZonosCustomerInfoElement;
        "zonos-dialog": HTMLZonosDialogElement;
        "zonos-empty-state-payment": HTMLZonosEmptyStatePaymentElement;
        "zonos-h-stack": HTMLZonosHStackElement;
        "zonos-hello": HTMLZonosHelloElement;
        "zonos-hello-dialog": HTMLZonosHelloDialogElement;
        "zonos-hello-dialog-footer": HTMLZonosHelloDialogFooterElement;
        "zonos-icon": HTMLZonosIconElement;
        "zonos-input": HTMLZonosInputElement;
        "zonos-invoice": HTMLZonosInvoiceElement;
        "zonos-invoice-cart-items": HTMLZonosInvoiceCartItemsElement;
        "zonos-invoice-finish": HTMLZonosInvoiceFinishElement;
        "zonos-invoice-footer": HTMLZonosInvoiceFooterElement;
        "zonos-invoice-order-details": HTMLZonosInvoiceOrderDetailsElement;
        "zonos-invoice-payment": HTMLZonosInvoicePaymentElement;
        "zonos-invoice-review": HTMLZonosInvoiceReviewElement;
        "zonos-invoice-subtotal": HTMLZonosInvoiceSubtotalElement;
        "zonos-language-select": HTMLZonosLanguageSelectElement;
        "zonos-link": HTMLZonosLinkElement;
        "zonos-link-authentication": HTMLZonosLinkAuthenticationElement;
        "zonos-loading-overlay": HTMLZonosLoadingOverlayElement;
        "zonos-logo": HTMLZonosLogoElement;
        "zonos-notification": HTMLZonosNotificationElement;
        "zonos-payment": HTMLZonosPaymentElement;
        "zonos-paypal-payment": HTMLZonosPaypalPaymentElement;
        "zonos-policy-consent": HTMLZonosPolicyConsentElement;
        "zonos-rest-state": HTMLZonosRestStateElement;
        "zonos-review": HTMLZonosReviewElement;
        "zonos-select-dialog-header": HTMLZonosSelectDialogHeaderElement;
        "zonos-shipping": HTMLZonosShippingElement;
        "zonos-shipping-rich-radio": HTMLZonosShippingRichRadioElement;
        "zonos-skeleton": HTMLZonosSkeletonElement;
        "zonos-spinner": HTMLZonosSpinnerElement;
        "zonos-store-credit": HTMLZonosStoreCreditElement;
        "zonos-stripe-input": HTMLZonosStripeInputElement;
        "zonos-stripe-phone-input": HTMLZonosStripePhoneInputElement;
        "zonos-stripe-select": HTMLZonosStripeSelectElement;
        "zonos-text": HTMLZonosTextElement;
        "zonos-toggle": HTMLZonosToggleElement;
        "zonos-tooltip": HTMLZonosTooltipElement;
        "zonos-v-stack": HTMLZonosVStackElement;
        "zonos-virtual-scroll": HTMLZonosVirtualScrollElement;
    }
}
declare namespace LocalJSX {
    type OneOf<K extends string, PropT, AttrT = PropT> = { [P in K]: PropT } & { [P in `attr:${K}`]?: never } | { [P in `attr:${K}`]: AttrT } & { [P in K]?: never };

    interface ZonosAddress {
        /**
          * Default address for stripe
          * @default []
         */
        "defaultAddress"?: ContactOption[];
        /**
          * Event to emit when address is not containing allowed character sets
         */
        "onInvalidCharacters"?: (event: ZonosAddressCustomEvent<boolean>) => void;
        /**
          * Event to emit when tax id is changed
         */
        "onTaxIdChanged"?: (event: ZonosAddressCustomEvent<string>) => void;
        /**
          * Error message for short address code input
          * @default ''
         */
        "shortAddressCodeErrorMessage"?: string;
        /**
          * Which tax id control the error belongs on. Empty when there is no error.
          * @default ''
         */
        "taxIdErrorField"?: 'type' | 'value' | '';
        /**
          * Error message for tax id input
          * @default ''
         */
        "taxIdErrorMessage"?: string;
        /**
          * The title text for the address element
         */
        "titleText": string;
        /**
          * The type of address element to render
         */
        "type": 'billing' | 'shipping';
    }
    interface ZonosAddressCompletionDialog {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading"?: boolean;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "dialogOpen"?: boolean;
        /**
          * Whether or not the dialog is rendered in mobile mode
          * @default false
         */
        "isMobile"?: boolean;
        /**
          * The Zonos-required fields still missing from the selected address
          * @default []
         */
        "missingFields"?: MissingShippingField[];
        /**
          * Close dialog button click
         */
        "onCloseCompletionDialog"?: (event: ZonosAddressCompletionDialogCustomEvent<void>) => void;
        /**
          * Emitted with the captured values when the customer completes the missing fields
         */
        "onCompletionSubmit"?: (event: ZonosAddressCompletionDialogCustomEvent<AddressCompletionSubmit>) => void;
        /**
          * The shipping address selected from Stripe, shown read-only for context
         */
        "shippingAddress": EnteredInfo;
        /**
          * Button color of the submit button
         */
        "submitBtnColor"?: string;
        /**
          * Button type of the submit button
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosAddressDisplay {
        /**
          * Title for the address display
         */
        "addressType": 'shipping' | 'billing';
        /**
          * Address to show up
         */
        "currentAddress": EnteredInfo;
    }
    interface ZonosAddressForm {
        /**
          * Title for the address form
         */
        "addressType": 'shipping' | 'billing';
        /**
          * Address to show up
         */
        "currentAddress": EnteredInfo;
        /**
          * Event to emit when the address is changed
         */
        "onAddressChange"?: (event: ZonosAddressFormCustomEvent<EnteredInfo>) => void;
        /**
          * Translated address
         */
        "translatedAddress": TranslatedAddressObject;
    }
    interface ZonosAddressSuggestions {
        /**
          * Event emitted when a suggestion is selected
         */
        "onSuggestionSelected"?: (event: ZonosAddressSuggestionsCustomEvent<EventPayloadMap['placeSelected']>) => void;
        /**
          * Suggestions to display
          * @default []
         */
        "suggestions"?: IframeSuggestionsResponsePayload['suggestions'];
        /**
          * Type of the address suggestions
         */
        "type": 'billing' | 'shipping';
    }
    interface ZonosAddressUpdateDialog {
        /**
          * Billing address that user has entered (optional if billing is the same as shipping)
         */
        "billingAddress": EnteredInfo | null;
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading"?: boolean;
        /**
          * Whether or not the dialog is loading
         */
        "dialogLoading": boolean;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "dialogOpen"?: boolean;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isMobile"?: boolean;
        /**
          * Close dialog button click
         */
        "onCloseUpdateDialog"?: (event: ZonosAddressUpdateDialogCustomEvent<void>) => void;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosAddressUpdateDialogCustomEvent<SubmitEventData>) => void;
        /**
          * Shipping address that user has entered
         */
        "shippingAddress": EnteredInfo;
        /**
          * Button color of the submit button
         */
        "submitBtnColor"?: string;
        /**
          * Button type of the submit button
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
        /**
          * Translated address fields that GPT has translated
         */
        "translatedBillingAddress": TranslatedAddressObject;
        /**
          * Translated address fields that GPT has translated
         */
        "translatedShippingAddress": TranslatedAddressObject;
    }
    interface ZonosAirwallexPayment {
        /**
          * Emitted when the Airwallex payment fails.
         */
        "onAirwallexPaymentError"?: (event: ZonosAirwallexPaymentCustomEvent<void>) => void;
        /**
          * Emitted when the Airwallex payment intent is confirmed successfully.
         */
        "onAirwallexPaymentSuccess"?: (event: ZonosAirwallexPaymentCustomEvent<void>) => void;
    }
    interface ZonosBadge {
        /**
          * The color of the badge
          * @default 24
         */
        "badgeColor"?: ColorPrefix | 'transparent';
        /**
          * Whether or not the badge is bold
          * @default false
         */
        "bold"?: boolean;
        /**
          * Callback for when the badge is dismissed. Also determines if dismiss icon shown.
         */
        "dismissHandler"?: () => void;
        /**
          * The icon element to display
          * @default null
         */
        "icon"?: HTMLZonosIconElement;
        /**
          * Position the icon to the right when icon is specified
          * @default false
         */
        "iconRight"?: boolean;
        /**
          * Whether or not the badge is loading
          * @default false
         */
        "loading"?: boolean;
        /**
          * Whether or not the badge is rounded
          * @default false
         */
        "rounded"?: boolean;
        /**
          * The size of the badge
          * @default 'default'
         */
        "size"?: 'small' | 'default';
    }
    interface ZonosBanner {
        /**
          * Whether or not the banner is bold
         */
        "bannerTitle"?: string;
        /**
          * Intent of the banner (success, warning, error)
         */
        "intent"?: BannerIntent;
    }
    interface ZonosButton {
        /**
          * The color of the button **NOTE**: If the button `variant` is set to 'standard', backgroundColor will be disregarded
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never });
        /**
          * Whether or not the button text color is bold
          * @default false
         */
        "bold"?: boolean;
        /**
          * The border style of the button
          * @default ROUNDED
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * The color of the button text and svg
         */
        "buttonColor"?: Color | (string & { _placeholder?: never });
        /**
          * The icon element to display
          * @default null
         */
        "icon"?: HTMLZonosIconElement | null;
        /**
          * Whether or not the icon is on the right
          * @default false
         */
        "iconRight"?: boolean;
        /**
          * Whether or not the button is disabled
          * @note Prop should not conflict name with native html attribute if the prop is also affected by another prop. The issue is the component has internal disabled
          * @prop ().
          * @prop decorator is to watch the update of the attribute of the component in the dom. And `disabled` prop is not an only factor to determine the component is disabled. isLoading
          * @prop () also affect that. <Host> is also referred to a component itself, if disabled prop is true, the `zonos-button` will have disabled attribute. So let's say when the loading state is true, and the component consume the zonos-button doesn't pass the disabled prop down. It accidentally turns the disabled prop on even thought the disabled state is not changed from the outside.
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * The content alignment within the button
          * @default 'center'
         */
        "justifyContent"?: 'center' | 'flex-end' | 'flex-start';
        /**
          * Whether or not the button is loading
          * @default false
         */
        "loading"?: boolean;
        /**
          * Whether or not the button has a background
          * @default false
         */
        "noBackground"?: boolean;
        /**
          * Whether or not the button has a left padding
          * @default false
         */
        "noPaddingLeft"?: boolean;
        /**
          * Whether or not the button has a right padding
          * @default false
         */
        "noPaddingRight"?: boolean;
        /**
          * The size of the button
          * @default 'sm'
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The theme of the button
         */
        "theme"?: ElementsUiTheme;
        /**
          * The variance of the button
          * @note If the button `variant` is set to 'standard', backgroundColor will be disregarded
          * @default standard
         */
        "variant"?: | 'primary'
    | 'success'
    | 'subtle'
    | 'outline'
    | 'standard'
    | 'danger'
    | 'warning';
        /**
          * Whether or not the button has a box shadow
          * @default false
         */
        "withBoxShadow"?: boolean;
    }
    interface ZonosCard {
        /**
          * The actions to display in the header of the card
         */
        "actions"?: HTMLElement;
        /**
          * The background color of the card
         */
        "backgroundColor"?: Color;
        /**
          * The border radius of the card
          * @default 6
         */
        "borderRadius"?: number;
        /**
          * The actions to display in the footer of the card
         */
        "footerActions"?: HTMLElement;
        /**
          * The content to display in the footer of the card
         */
        "footerContent"?: HTMLElement;
        /**
          * The height of the footer in pixels
         */
        "footerHeight"?: number;
        /**
          * The label to display in the header of the card
         */
        "label"?: HTMLElement;
        /**
          * The spacing to apply between elements in the card
          * @default '24px'
         */
        "spacing"?: string;
    }
    interface ZonosCartItems {
    }
    interface ZonosCartRestrictedItems {
        /**
          * This is to hide the section when the parent collapse on mobile
          * @default false
         */
        "hide"?: boolean;
    }
    interface ZonosCartSubtotal {
        /**
          * Button color of the submit button
         */
        "submitBtnColor"?: string;
        /**
          * Button type of the submit button
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosCheckbox {
        /**
          * background color of the checkbox
          * @default 'blue'
         */
        "backgroundColor"?: | CheckboxColorPrefix
    | (string & { _placeholder?: never });
        /**
          * The border style of the button
          * @default ROUNDED
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * Font size of the checkbox text
          * @default 'base'
         */
        "fontSize"?: Size;
        /**
          * Whether or not the checkbox is checked
          * @default false
         */
        "isChecked"?: boolean;
        /**
          * Whether or not the checkbox is disabled
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * The label of the checkbox
         */
        "label"?: string;
        /**
          * Event to emit when the checkbox is changed
         */
        "onCheckboxSelected"?: (event: ZonosCheckboxCustomEvent<boolean>) => void;
        /**
          * Size of the checkbox
          * @default 12
         */
        "size"?: 12 | 16 | 24;
    }
    interface ZonosCheckout {
        /**
          * Override appearance config
         */
        "appearanceSettingsOverride"?: Partial<AppearanceConfig>;
        /**
          * Default address to use for the checkout (preview mode)
          * @default []
         */
        "defaultAddress"?: | StripeStoreContactOption[]
    | StripeStoreContactOption;
        /**
          * Force dialog to be open
          * @default false
         */
        "forceDialogOpen"?: boolean;
        /**
          * Hidden mode to hide the checkout modal in preview mode
          * @default false
         */
        "hiddenMode"?: boolean;
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Override staging mode. Solely use for storybook
         */
        "overrideStagingMode"?: boolean;
        /**
          * Preview checkout without needing to click on the button. This would be useful for demo purpose
          * @default false
         */
        "preview"?: boolean;
    }
    interface ZonosCheckoutFinish {
        /**
          * The border radius style of the dialog
          * @default 'ROUNDED'
         */
        "borderRadius"?: ElementsUiStyle;
        /**
          * Event to emit when the continue button is clicked
         */
        "onCloseClick"?: (event: ZonosCheckoutFinishCustomEvent<void>) => void;
        /**
          * Override the notification message and title, bypass checking stripe payment status
         */
        "overrideNotification"?: {
    messages: string[];
    title: string;
    type: 'success' | 'error';
  };
        /**
          * Force status to test the UI for storybook
         */
        "storybookForceStatus"?: PaymentIntent['status'];
    }
    interface ZonosCheckoutFooter {
        /**
          * Theme to change the color of the logo
         */
        "dataTheme"?: ElementsUiTheme;
        /**
          * Override mobile mode
          * @default false
         */
        "mobile"?: boolean;
    }
    interface ZonosCheckoutPayment {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading"?: boolean;
        /**
          * Whether or not the checkout is in mobile mode
          * @default false
         */
        "isMobile"?: boolean;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosCheckoutPaymentCustomEvent<void>) => void;
        /**
          * Event to emit when the paypal session is done
         */
        "onPaypalSessionDone"?: (event: ZonosCheckoutPaymentCustomEvent<string>) => void;
        /**
          * Event to emit when the paypal session failed
         */
        "onPaypalSessionFailed"?: (event: ZonosCheckoutPaymentCustomEvent<void>) => void;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosCheckoutProgressTabs {
        /**
          * Background color of the parent that's wrapped around the tab progress bar
          * @default null
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never }) | null;
        /**
          * Color of the tab progress bar and label, override the secondary color of the appearance settings
          * @default null
         */
        "tabColor"?: string | null;
    }
    interface ZonosCollapse {
        /**
          * Collapsed size when collapsed
          * @default 0
         */
        "collapseSize"?: number;
        /**
          * Collapsed state of the element
          * @default false
         */
        "collapsed"?: boolean;
    }
    interface ZonosCollect {
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet"?: boolean;
    }
    interface ZonosCollectCartItems {
    }
    interface ZonosCollectFinish {
        /**
          * The border radius style of the dialog
          * @default 'ROUNDED'
         */
        "borderRadius"?: ElementsUiStyle;
        /**
          * The confirmation id for the collect order
          * @default null
         */
        "confirmationId"?: string | null;
        /**
          * Event to emit when the continue button is clicked
         */
        "onCloseClick"?: (event: ZonosCollectFinishCustomEvent<void>) => void;
        /**
          * Override the notification message and title, bypass checking stripe payment status
         */
        "overrideNotification"?: {
    messages: string[];
    title: string;
    type: 'success' | 'error';
  };
        /**
          * Force status to test the UI for storybook
         */
        "storybookForceStatus"?: PaymentIntent['status'];
    }
    interface ZonosCollectFooter {
        /**
          * Theme to change the color of the logo
         */
        "dataTheme"?: ElementsUiTheme;
        /**
          * Override mobile mode
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Override tablet mode
          * @default false
         */
        "tablet"?: boolean;
    }
    interface ZonosCollectOrderDetails {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
         */
        "collapsed": boolean;
        /**
          * The landed cost id that is used to fetch the shipping address
          * @default ''
         */
        "landedCostId"?: string;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default true
         */
        "mobile"?: boolean;
        /**
          * Emits the collapsed state of the zonos-collapse component
         */
        "onCollapseClicked"?: (event: ZonosCollectOrderDetailsCustomEvent<boolean>) => void;
    }
    interface ZonosCollectPayment {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading"?: boolean;
        /**
          * Event to emit when the Airwallex payment is completed successfully
         */
        "onAirwallexPaymentDone"?: (event: ZonosCollectPaymentCustomEvent<void>) => void;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosCollectPaymentCustomEvent<void>) => void;
        /**
          * Event to emit when the paypal session is done
         */
        "onPaypalSessionDone"?: (event: ZonosCollectPaymentCustomEvent<string>) => void;
        /**
          * Event to emit when the paypal session failed
         */
        "onPaypalSessionFailed"?: (event: ZonosCollectPaymentCustomEvent<void>) => void;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosCollectReview {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
          * @default false
         */
        "collapsed"?: boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet"?: boolean;
    }
    interface ZonosCollectSubtotal {
    }
    interface ZonosComponent {
        /**
          * The first name
          * @default ''
         */
        "first"?: string;
        /**
          * The last name
          * @default ''
         */
        "last"?: string;
        /**
          * The middle name
          * @default ''
         */
        "middle"?: string;
    }
    interface ZonosConfirmDialog {
        /**
          * Cancel button text
         */
        "dialogCancelBtnText"?: string;
        /**
          * Confirm button text
         */
        "dialogConfirmBtnText": string;
        /**
          * Dialog intent (for icon and button color)
          * @default "info"
         */
        "dialogIntent"?: 'info' | 'danger' | 'warn';
        /**
          * Whether or not the dialog is open
         */
        "dialogOpen": boolean;
        /**
          * Dialog subtitle text
          * @default null No subtitle
         */
        "dialogSubtitle"?: string | null;
        /**
          * Dialog title text
          * @default "Are you sure?"
         */
        "dialogTitle"?: string;
        /**
          * Type of dialog - "alert" - Only confirm button - "confirm" - Both Confirm and cancel buttons
          * @default "confirm"
         */
        "dialogType"?: 'alert' | 'confirm';
        /**
          * Dialog width
          * @default 350 px
         */
        "dialogWidth"?: number;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isMobile"?: boolean;
        /**
          * Whether or not to close the dialog when clicking outside of it
          * @default false
         */
        "noClickOutside"?: boolean;
        /**
          * Event to emit when the "Cancel" button is clicked
         */
        "onCancelClicked"?: (event: ZonosConfirmDialogCustomEvent<void>) => void;
        /**
          * Event to emit when the "Confirm" button is clicked
         */
        "onConfirmClicked"?: (event: ZonosConfirmDialogCustomEvent<void>) => void;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
    }
    interface ZonosController {
        /**
          * The zonos config object
         */
        "config": LoadZonosParamsConfig;
        /**
          * Event emitted to initialize paypal
         */
        "onPaypalInitEvent"?: (event: ZonosControllerCustomEvent<{ paypalClientId: string }>) => void;
        /**
          * Event emitted when stripe is initialized
         */
        "onStripeInitEvent"?: (event: ZonosControllerCustomEvent<{ publishableKey: string }>) => void;
        /**
          * The zonos api key
         */
        "zonosApiKey": string;
    }
    interface ZonosCountryFlag {
        /**
          * The country code for the flag
          * @default localizationStore.selectedCountryCode
          * @example 'US'
         */
        "countryCode"?: CountryCode | null;
        /**
          * The size of the flag
         */
        "size"?: number;
    }
    interface ZonosCountrySelect {
        /**
          * Function to close the country select
          * @default () => {}
         */
        "handleOnClose"?: () => void;
    }
    interface ZonosCurrencyToggle {
    }
    interface ZonosCustomAddress {
        /**
          * Default address for stripe
          * @default []
         */
        "defaultAddress"?: ContactOption[];
        /**
          * Event to emit when address is changed
         */
        "onAddressChange"?: (event: ZonosCustomAddressCustomEvent<{
    errors: CustomAddressErrors;
    type: 'billing' | 'shipping';
    value: StripeAddressElementChangeEvent;
  }>) => void;
        /**
          * Event to emit when address is not containing allowed character sets
         */
        "onInvalidCharacters"?: (event: ZonosCustomAddressCustomEvent<boolean>) => void;
        /**
          * Error message for short address code input
          * @default ''
         */
        "shortAddressCodeErrorMessage"?: string;
        /**
          * Which tax id control the error belongs on. Empty when there is no error.
          * @default ''
         */
        "taxIdErrorField"?: 'type' | 'value' | '';
        /**
          * Error message for tax id input
          * @default ''
         */
        "taxIdErrorMessage"?: string;
        /**
          * The title text for the address element
         */
        "titleText": string;
        /**
          * The type of address element to render
         */
        "type": 'billing' | 'shipping';
    }
    interface ZonosCustomMessage {
        /**
          * The custom message icon
          * @default ''
         */
        "icon"?: string;
        /**
          * The custom message text
          * @default ''
         */
        "message"?: string;
    }
    interface ZonosCustomerInfo {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading"?: boolean;
        /**
          * Default address to use for the checkout (preview mode)
          * @default []
         */
        "defaultAddress"?: StripeStoreContactOption[];
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isMobile"?: boolean;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosCustomerInfoCustomEvent<{
    billingAddress: StripeAddressElementChangeEvent | null;
    sameAsBilling: boolean;
    shippingAddress: StripeAddressElementChangeEvent | null;
  }>) => void;
        /**
          * Trigger continue button click even though fields're not validated for testing purposes
         */
        "onTestContinueClicked"?: (event: ZonosCustomerInfoCustomEvent<{
    billingAddress: StripeAddressElementChangeEvent | null;
    sameAsBilling: boolean;
    shippingAddress: StripeAddressElementChangeEvent | null;
  }>) => void;
        /**
          * Whether to override custom address form to be always visible
          * @default false
         */
        "shouldUseCustomAddressFormOverride"?: boolean;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosDialog {
        /**
          * The border style of the button
          * @default ROUNDED
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * The header text for the dialog
          * @default ''
         */
        "headerText"?: string;
        /**
          * The height of the dialog (max-width still 90vh)
         */
        "height"?: string;
        /**
          * Load loading spinner for the dialog or not
          * @default true
         */
        "isLoading"?: boolean;
        /**
          * The text that will be shown while loading
         */
        "loadingText"?: string;
        /**
          * The title of the loading text
         */
        "loadingTitle"?: string;
        /**
          * The min height of the dialog
         */
        "minHeight"?: string;
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Whether or not to have body padding
          * @default false
         */
        "noBodyPadding"?: boolean;
        /**
          * Whether or not to have body padding
          * @default false
         */
        "noBorder"?: boolean;
        /**
          * Whether or not to close the dialog when clicking outside of it
          * @default false
         */
        "noClickOutside"?: boolean;
        /**
          * Whether or not to show the close button
          * @default false
         */
        "noCloseButton"?: boolean;
        /**
          * Whether or not to show the header
          * @default false
         */
        "noHeader"?: boolean;
        /**
          * Close dialog button click
         */
        "onCloseDialog"?: (event: ZonosDialogCustomEvent<void>) => void;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "open"?: boolean;
        /**
          * The width of the dialog
          * @default 460px
         */
        "width"?: string;
    }
    interface ZonosEmptyStatePayment {
        /**
          * Text to display in the empty state
         */
        "emptyStateText": string;
        /**
          * Theme color of the icon
          * @default 'LIGHT'
         */
        "theme"?: ElementsUiTheme;
    }
    interface ZonosHStack {
        /**
          * The spacing between elements in the stack
          * @default 24
         */
        "spacing"?: GridSpacing;
    }
    interface ZonosHello {
        /**
          * Force left animation instead of detecting which side has more space
          * @default false
         */
        "animateFromLeftOverride"?: boolean;
        /**
          * Override the appearance settings
         */
        "appearanceSettingsOverride"?: Partial<AppearanceConfig>;
        /**
          * Override the configured desktop floating location. Takes precedence over `helloSettings.desktopLocationOverride` (HelloPlacement) and `helloSettings.desktopLocation`, and also drives the peek-message animation direction, so consumers no longer need `animateFromLeftOverride` for desktop positioning.
         */
        "desktopLocationOverride"?: HelloDesktopLocation;
        /**
          * Override the configured mobile floating location (enum). Takes precedence over `helloSettings.mobileLocationOverride` (HelloPlacement) and `helloSettings.mobileLocation`.
         */
        "mobileLocationOverride"?: HelloMobileLocation;
    }
    interface ZonosHelloDialog {
        /**
          * Force left animation instead of detecting which side has more space
          * @default false
         */
        "animateFromLeftOverride"?: boolean;
        /**
          * Override the appearance settings
         */
        "appearanceSettings"?: Partial<AppearanceConfig>;
        /**
          * Whether or not the dialog is open
          * @default false
         */
        "isOpen"?: boolean;
        /**
          * Force mobile styling instead of media query and use the passed location value
          * @default false
         */
        "mobileLocationOverride"?: HelloMobileLocation;
        /**
          * Close dialog button click
         */
        "onCloseDialog"?: (event: ZonosHelloDialogCustomEvent<void>) => void;
        /**
          * Item restrictions array if any
          * @default []
         */
        "restrictedItems"?: RestrictedItem[];
        /**
          * The function to set the open state
          * @default () => {}
         */
        "setIsOpen"?: (isOpen: boolean) => void;
    }
    interface ZonosHelloDialogFooter {
        /**
          * Appearance settings
         */
        "appearanceSettings"?: Partial<AppearanceConfig>;
        /**
          * Whether or not the country select dialog is open
          * @default false
         */
        "setShowCountrySelect"?: (value: boolean) => void;
        /**
          * Whether or not the language select dialog is open
          * @default false
         */
        "setShowLanguageSelect"?: (value: boolean) => void;
    }
    interface ZonosIcon {
        /**
          * Determines if the icon should be auto height instead of square
          * @default false
         */
        "autoHeight"?: boolean;
        /**
          * The content of the icon (full svg)
          * @example import RemoveIcon from './assets/removeIcon.svg'; ... <zonos-icon content={RemoveIcon}></zonos-icon> // or <zonos-icon content="<svg>...</svg>"></zonos-icon>
         */
        "content": string;
        /**
          * Color of the SVG
          * @default 'gray-1000'
         */
        "iconColor"?: Color | (string & { _placeholder?: never });
        /**
          * The size of the icon
          * @default 24
         */
        "size"?: number;
    }
    interface ZonosInput {
        /**
          * Input label
         */
        "inputLabel": string;
        /**
          * Placeholder for the input
          * @default ''
         */
        "inputPlaceholder"?: string;
        /**
          * Input size
          * @default 'md'
         */
        "inputSize"?: 'sm' | 'md' | 'lg' | 'xl';
        /**
          * Value of the input
          * @default ''
         */
        "inputValue"?: string;
        /**
          * Disables the input
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * Error state of the input
          * @default false
         */
        "isError"?: boolean;
        /**
          * Event to emit when input value changes
         */
        "onInputChange"?: (event: ZonosInputCustomEvent<string>) => void;
    }
    interface ZonosInvoice {
        /**
          * Flag to determine if the checkout is on mobile
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet"?: boolean;
    }
    interface ZonosInvoiceCartItems {
        /**
          * Whether the component is mobile
          * @default false
         */
        "isMobile"?: boolean;
    }
    interface ZonosInvoiceFinish {
        /**
          * The border radius style of the dialog
          * @default 'ROUNDED'
         */
        "borderRadius"?: ElementsUiStyle;
        /**
          * The confirmation id for the invoice order
          * @default null
         */
        "confirmationId"?: string | null;
        /**
          * Event to emit when the continue button is clicked
         */
        "onCloseClick"?: (event: ZonosInvoiceFinishCustomEvent<void>) => void;
        /**
          * Override the notification message and title, bypass checking stripe payment status
         */
        "overrideNotification"?: {
    messages: string[];
    title: string;
    type: 'success' | 'error';
  };
        /**
          * Force status to test the UI for storybook
         */
        "storybookForceStatus"?: PaymentIntent['status'];
    }
    interface ZonosInvoiceFooter {
        /**
          * Theme to change the color of the logo
         */
        "dataTheme"?: ElementsUiTheme;
        /**
          * Override mobile mode
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Override tablet mode
          * @default false
         */
        "tablet"?: boolean;
    }
    interface ZonosInvoiceOrderDetails {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
         */
        "collapsed": boolean;
        /**
          * The landed cost id that is used to fetch the shipping address
          * @default ''
         */
        "landedCostId"?: string;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default true
         */
        "mobile"?: boolean;
        /**
          * Emits the collapsed state of the zonos-collapse component
         */
        "onCollapseClicked"?: (event: ZonosInvoiceOrderDetailsCustomEvent<boolean>) => void;
    }
    interface ZonosInvoicePayment {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading"?: boolean;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosInvoicePaymentCustomEvent<void>) => void;
        /**
          * Event to emit when the paypal session is done
         */
        "onPaypalSessionDone"?: (event: ZonosInvoicePaymentCustomEvent<string>) => void;
        /**
          * Event to emit when the paypal session failed
         */
        "onPaypalSessionFailed"?: (event: ZonosInvoicePaymentCustomEvent<void>) => void;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosInvoiceReview {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
          * @default false
         */
        "collapsed"?: boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default false
         */
        "mobile"?: boolean;
        /**
          * Whether or not the component is being rendered with tablet styles
          * @default false
         */
        "tablet"?: boolean;
    }
    interface ZonosInvoiceSubtotal {
        /**
          * Whether the component is mobile
          * @default false
         */
        "isMobile"?: boolean;
    }
    interface ZonosLanguageSelect {
        /**
          * Function to close the language select
          * @default () => {}
         */
        "handleOnClose"?: () => void;
    }
    interface ZonosLink {
        /**
          * The href for the link
          * @default ''
         */
        "href"?: string;
        /**
          * The title attribute for the link
         */
        "linkTitle"?: string;
        /**
          * The rel attribute for the link
         */
        "rel"?: string;
        /**
          * The target attribute for the link
         */
        "target"?: string;
    }
    interface ZonosLinkAuthentication {
        /**
          * Default email for stripe
          * @default null
         */
        "defaultEmail"?: string | null;
        /**
          * Email error text to dispaly
          * @default false
         */
        "isEmailError"?: boolean;
        /**
          * Event emitted when the authentication element changes
         */
        "onLinkAuthenticationChange"?: (event: ZonosLinkAuthenticationCustomEvent<void>) => void;
        /**
          * The title text for the authentication element
         */
        "titleText": string;
    }
    interface ZonosLoadingOverlay {
        /**
          * Whether or not the overlay is open
          * @default false
         */
        "open"?: boolean;
        /**
          * Spinner size (optional, default 40)
          * @default 40
         */
        "size"?: number;
        /**
          * Spinner color (optional)
         */
        "spinnerColor"?: | 'primary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
    | 'black'
    | 'white';
    }
    interface ZonosLogo {
        /**
          * Theme to change the color of the logo
          * @default 'LIGHT'
         */
        "theme"?: ElementsUiTheme;
        /**
          * The width of the logo
          * @default 'auto'
         */
        "width"?: string;
    }
    interface ZonosNotification {
    }
    interface ZonosPayment {
        /**
          * The title text for the authentication element
         */
        "titleText"?: string;
    }
    interface ZonosPaypalPayment {
        /**
          * Event to emit when the paypal session is done
         */
        "onPaypalSessionDone"?: (event: ZonosPaypalPaymentCustomEvent<{ orderId: string }>) => void;
        /**
          * Event to emit when the paypal session is failed
         */
        "onPaypalSessionFail"?: (event: ZonosPaypalPaymentCustomEvent<void>) => void;
    }
    interface ZonosPolicyConsent {
    }
    interface ZonosRestState {
        /**
          * The subtitle of the rest state
         */
        "restStateSubtitle": string;
        /**
          * The title of the rest state
         */
        "restStateTitle": string;
        /**
          * The type of rest state
         */
        "restStateType": RestStateType;
    }
    interface ZonosReview {
        /**
          * Whether or not to show the collapse icon This is controled from the collapsed state of the zonos-collapse component to show the collapse icon
          * @default false
         */
        "collapsed"?: boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
          * @default false
         */
        "mobile"?: boolean;
    }
    interface ZonosSelectDialogHeader {
        /**
          * Callback to do something on close
          * @default () => {}
         */
        "handleOnClose"?: () => void;
        /**
          * The label for the select dialog
          * @default ''
         */
        "label"?: string;
    }
    interface ZonosShipping {
        /**
          * Whether or not the continue button is loading
          * @default false
         */
        "continueLoading"?: boolean;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "isMobile": boolean;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosShippingCustomEvent<void>) => void;
        /**
          * Submit button main color
         */
        "submitBtnColor"?: string;
        /**
          * Whether or not the checkout is in mobile mode
         */
        "submitBtnType"?: HTMLZonosButtonElement['variant'];
    }
    interface ZonosShippingRichRadio {
        /**
          * Override border color of the radio item
         */
        "borderColor"?: Color | (string & { _placeholder?: never });
        /**
          * Override border color of the radio item
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * Whether or not the radio item is in mobile mode
         */
        "isMobile": boolean;
        /**
          * List of items to display
         */
        "items": ShippingRichRadioItem[];
        /**
          * Event emitted when an item is selected
         */
        "onRadioSelected"?: (event: ZonosShippingRichRadioCustomEvent<ShippingRichRadioItem>) => void;
        /**
          * Selected item
          * @default {null|firstItem}
         */
        "selectedItem"?: ShippingRichRadioItem | null;
        /**
          * Theme of the radio item
         */
        "theme"?: ElementsUiTheme;
    }
    interface ZonosSkeleton {
        /**
          * Callback for when the skeleton is dismissed. Also determines if dismiss icon shown.
         */
        "dismissHandler"?: () => void;
        /**
          * The height of the skeleton
          * @default '14px'
         */
        "skeletonHeight"?: string;
        /**
          * The width of the skeleton
          * @default '100%'
         */
        "skeletonWidth"?: string;
    }
    interface ZonosSpinner {
        /**
          * The size of the spinner
          * @default 32
         */
        "size"?: number;
        /**
          * Color of the spinner
         */
        "spinnerColor"?: SpinnerColor;
    }
    interface ZonosStoreCredit {
        /**
          * Whether the component is enabled
          * @default true
         */
        "enabled"?: boolean;
    }
    /**
     * This component is input that has similar style to Stripe since we will use it with other Stripe elements when we don't want to use Link authentication element
     */
    interface ZonosStripeInput {
        /**
          * Autocomplete attribute for the input
         */
        "autoComplete"?: string;
        /**
          * Error message of the input
          * @default ''
         */
        "error"?: string;
        /**
          * Input label
         */
        "inputLabel": string;
        /**
          * Placeholder for the input
          * @default ''
         */
        "inputPlaceholder"?: string;
        /**
          * Value of the stripeInput
          * @default ''
         */
        "inputValue"?: string;
        /**
          * Disables the input
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * Error state of the input
          * @default false
         */
        "isError"?: boolean;
        /**
          * Name of the input
         */
        "name"?: string;
        /**
          * Event to emit when input value changes
         */
        "onInputChange"?: (event: ZonosStripeInputCustomEvent<string>) => void;
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Secondary color to override secondary color from appearance secondary color in setting
         */
        "overrideSecondaryColor"?: string;
        /**
          * Whether the input is required
          * @default false
         */
        "required"?: boolean;
        /**
          * The value of the input.
          * @default ''
         */
        "value"?: string;
    }
    interface ZonosStripePhoneInput {
        /**
          * The autoComplete attribute for the phone input
          * @default ''
         */
        "autoComplete"?: string;
        /**
          * The country code of the phone input
          * @default null
         */
        "countryCode"?: CountryCode | null;
        /**
          * Available country options for the select dropdown
          * @default null
         */
        "countryOptions"?: GenericZonosSettings['countryFields'] | null;
        /**
          * Whether the input is disabled
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Error message to display
         */
        "error"?: string;
        /**
          * Label text for the input
         */
        "inputLabel"?: string;
        /**
          * Current value of the phone input
         */
        "inputValue"?: string;
        /**
          * Minimum width of the phone input
         */
        "minWidth"?: string;
        /**
          * Emitted when the country or phone number changes
         */
        "onInputValueChange"?: (event: ZonosStripePhoneInputCustomEvent<{
    countryCode: CountryCode | null;
    isEmpty: boolean;
    phoneNumber: string;
    valid: boolean;
    wrongFormat: boolean;
  }>) => void;
        /**
          * Override the primary color
         */
        "overridePrimaryColor"?: string;
        /**
          * Override the secondary color
         */
        "overrideSecondaryColor"?: string;
    }
    interface ZonosStripeSelect {
        /**
          * The autoComplete attribute for the select.
          * @default ''
         */
        "autoComplete"?: string;
        /**
          * Error message of the select
          * @default ''
         */
        "error"?: string;
        /**
          * Whether the select can be cleared
          * @default false
         */
        "isClearable"?: boolean;
        /**
          * Disables the select
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * Error state of the select
          * @default false
         */
        "isError"?: boolean;
        /**
          * Minimum width of the select
         */
        "minWidth"?: string;
        /**
          * Name of the select
         */
        "name"?: string;
        /**
          * Event to emit when select value changes
         */
        "onSelectChange"?: (event: ZonosStripeSelectCustomEvent<string>) => void;
        /**
          * Options for the select. Must be set using a query selector.
          * @default []
         */
        "options"?: SelectOption[];
        /**
          * Primary color to override primary color from appearance primary color in setting.
         */
        "overridePrimaryColor"?: string;
        /**
          * Secondary color to override secondary color from appearance secondary color in setting
         */
        "overrideSecondaryColor"?: string;
        /**
          * Whether the select is required
          * @default false
         */
        "required"?: boolean;
        /**
          * Select label
         */
        "selectLabel": string;
        /**
          * Placeholder for the select
          * @default ''
         */
        "selectPlaceholder"?: string;
        /**
          * Selected value of the select
          * @default ''
         */
        "selectedValue"?: string;
        /**
          * The value of the select.
          * @default ''
         */
        "value"?: string;
    }
    interface ZonosText {
        /**
          * The size of the text
         */
        "size"?: Size;
        /**
          * The icon element to display
          * @default 'gray-1000'
         */
        "textColor"?: Color | (string & { _placeholder?: never });
        /**
          * Type of the text to display
          * @default 'body'
         */
        "type"?: Type;
        /**
          * The weight of the text
         */
        "weight"?: FontWeight;
    }
    interface ZonosToggle {
        /**
          * Event emitted when the toggle changes
         */
        "onToggleChanged"?: (event: ZonosToggleCustomEvent<string>) => void;
        /**
          * Options for the toggle
          * @default []
         */
        "options"?: ToggleItem<string>[];
        /**
          * The selected option
         */
        "value": string;
    }
    interface ZonosTooltip {
        /**
          * The title of the tooltip
          * @default ''
         */
        "label"?: string;
        /**
          * The subtitle of the tooltip
          * @default ''
         */
        "subtitle"?: string;
    }
    interface ZonosVStack {
        /**
          * The spacing between elements in the stack
          * @default 24
         */
        "spacing"?: GridSpacing;
    }
    /**
     * Virtual scroll component for efficiently rendering large lists
     * The idea is from:
     * @ref https://github.com/beenotung/stencil-virtual-scroll/blob/master/src/components/virtual-scroll-list/virtual-scroll-list.scss
     * @ref https://github.dev/ionic-team/ionic-framework/blob/v6.7.5/core/src/components/virtual-scroll/virtual-scroll.tsx
     */
    interface ZonosVirtualScroll {
        /**
          * Buffer size in pixels for pre-rendering items outside viewport
          * @default 100
         */
        "buffer"?: number;
        /**
          * Fallback height used when specific item height is not provided
         */
        "fallbackItemHeight": number;
        /**
          * Array of heights for each item in pixels
         */
        "itemHeights": number[];
        /**
          * Width of each item in pixels
         */
        "itemWidth"?: number;
        /**
          * Function to render each item in the virtual scroll
         */
        "renderItem": VirtualScrollRenderItem;
    }

    interface ZonosAddressAttributes {
        "type": 'billing' | 'shipping';
        "titleText": string;
        "taxIdErrorField": 'type' | 'value' | '';
        "taxIdErrorMessage": string;
        "shortAddressCodeErrorMessage": string;
    }
    interface ZonosAddressCompletionDialogAttributes {
        "continueLoading": boolean;
        "dialogOpen": boolean;
        "isMobile": boolean;
        "submitBtnColor": string;
        "submitBtnType": HTMLZonosButtonElement['variant'];
    }
    interface ZonosAddressDisplayAttributes {
        "addressType": 'shipping' | 'billing';
    }
    interface ZonosAddressFormAttributes {
        "addressType": 'shipping' | 'billing';
    }
    interface ZonosAddressSuggestionsAttributes {
        "type": 'billing' | 'shipping';
    }
    interface ZonosAddressUpdateDialogAttributes {
        "continueLoading": boolean;
        "dialogLoading": boolean;
        "dialogOpen": boolean;
        "submitBtnType": HTMLZonosButtonElement['variant'];
        "submitBtnColor": string;
        "isMobile": boolean;
    }
    interface ZonosBadgeAttributes {
        "bold": boolean;
        "badgeColor": ColorPrefix | 'transparent';
        "iconRight": boolean;
        "size": 'small' | 'default';
        "rounded": boolean;
        "loading": boolean;
    }
    interface ZonosBannerAttributes {
        "bannerTitle": string;
        "intent": BannerIntent;
    }
    interface ZonosButtonAttributes {
        "buttonColor": Color | (string & { _placeholder?: never });
        "backgroundColor": Color | (string & { _placeholder?: never });
        "borderStyle": ElementsUiStyle;
        "isDisabled": boolean;
        "iconRight": boolean;
        "size": 'sm' | 'md' | 'lg';
        "variant": | 'primary'
    | 'success'
    | 'subtle'
    | 'outline'
    | 'standard'
    | 'danger'
    | 'warning';
        "noBackground": boolean;
        "withBoxShadow": boolean;
        "noPaddingLeft": boolean;
        "noPaddingRight": boolean;
        "loading": boolean;
        "justifyContent": 'center' | 'flex-end' | 'flex-start';
        "bold": boolean;
        "theme": ElementsUiTheme;
    }
    interface ZonosCardAttributes {
        "backgroundColor": Color;
        "borderRadius": number;
        "footerHeight": number;
        "spacing": string;
    }
    interface ZonosCartRestrictedItemsAttributes {
        "hide": boolean;
    }
    interface ZonosCartSubtotalAttributes {
        "submitBtnType": HTMLZonosButtonElement['variant'];
        "submitBtnColor": string;
    }
    interface ZonosCheckboxAttributes {
        "backgroundColor": | CheckboxColorPrefix
    | (string & { _placeholder?: never });
        "label": string;
        "isChecked": boolean;
        "isDisabled": boolean;
        "size": 12 | 16 | 24;
        "fontSize": Size;
        "borderStyle": ElementsUiStyle;
    }
    interface ZonosCheckoutAttributes {
        "preview": boolean;
        "hiddenMode": boolean;
        "mobile": boolean;
        "overrideStagingMode": boolean;
        "forceDialogOpen": boolean;
    }
    interface ZonosCheckoutFinishAttributes {
        "borderRadius": ElementsUiStyle;
        "storybookForceStatus": PaymentIntent['status'];
    }
    interface ZonosCheckoutFooterAttributes {
        "mobile": boolean;
        "dataTheme": ElementsUiTheme;
    }
    interface ZonosCheckoutPaymentAttributes {
        "submitBtnType": HTMLZonosButtonElement['variant'];
        "continueLoading": boolean;
        "submitBtnColor": string;
        "isMobile": boolean;
        "overridePrimaryColor": string;
    }
    interface ZonosCheckoutProgressTabsAttributes {
        "tabColor": string | null;
        "backgroundColor": Color | (string & { _placeholder?: never }) | null;
    }
    interface ZonosCollapseAttributes {
        "collapsed": boolean;
        "collapseSize": number;
    }
    interface ZonosCollectAttributes {
        "mobile": boolean;
        "tablet": boolean;
    }
    interface ZonosCollectFinishAttributes {
        "borderRadius": ElementsUiStyle;
        "storybookForceStatus": PaymentIntent['status'];
        "confirmationId": string | null;
    }
    interface ZonosCollectFooterAttributes {
        "mobile": boolean;
        "tablet": boolean;
        "dataTheme": ElementsUiTheme;
    }
    interface ZonosCollectOrderDetailsAttributes {
        "mobile": boolean;
        "collapsed": boolean;
        "landedCostId": string;
    }
    interface ZonosCollectPaymentAttributes {
        "submitBtnType": HTMLZonosButtonElement['variant'];
        "continueLoading": boolean;
        "submitBtnColor": string;
        "overridePrimaryColor": string;
    }
    interface ZonosCollectReviewAttributes {
        "mobile": boolean;
        "tablet": boolean;
        "collapsed": boolean;
    }
    interface ZonosComponentAttributes {
        "first": string;
        "middle": string;
        "last": string;
    }
    interface ZonosConfirmDialogAttributes {
        "dialogTitle": string;
        "dialogIntent": 'info' | 'danger' | 'warn';
        "dialogSubtitle": string | null;
        "submitBtnColor": string;
        "dialogConfirmBtnText": string;
        "dialogWidth": number;
        "dialogCancelBtnText": string;
        "dialogType": 'alert' | 'confirm';
        "isMobile": boolean;
        "dialogOpen": boolean;
        "noClickOutside": boolean;
    }
    interface ZonosControllerAttributes {
        "zonosApiKey": string;
    }
    interface ZonosCountryFlagAttributes {
        "countryCode": CountryCode | null;
        "size": number;
    }
    interface ZonosCustomAddressAttributes {
        "type": 'billing' | 'shipping';
        "titleText": string;
        "taxIdErrorField": 'type' | 'value' | '';
        "taxIdErrorMessage": string;
        "shortAddressCodeErrorMessage": string;
    }
    interface ZonosCustomMessageAttributes {
        "icon": string;
        "message": string;
    }
    interface ZonosCustomerInfoAttributes {
        "continueLoading": boolean;
        "submitBtnType": HTMLZonosButtonElement['variant'];
        "submitBtnColor": string;
        "isMobile": boolean;
        "shouldUseCustomAddressFormOverride": boolean;
    }
    interface ZonosDialogAttributes {
        "open": boolean;
        "headerText": string;
        "width": string;
        "height": string;
        "minHeight": string;
        "noHeader": boolean;
        "loadingTitle": string;
        "loadingText": string;
        "noBodyPadding": boolean;
        "noBorder": boolean;
        "borderStyle": ElementsUiStyle;
        "noCloseButton": boolean;
        "noClickOutside": boolean;
        "mobile": boolean;
        "isLoading": boolean;
    }
    interface ZonosEmptyStatePaymentAttributes {
        "emptyStateText": string;
        "theme": ElementsUiTheme;
    }
    interface ZonosHStackAttributes {
        "spacing": GridSpacing;
    }
    interface ZonosHelloAttributes {
        "mobileLocationOverride": HelloMobileLocation;
        "desktopLocationOverride": HelloDesktopLocation;
        "animateFromLeftOverride": boolean;
    }
    interface ZonosHelloDialogAttributes {
        "isOpen": boolean;
        "mobileLocationOverride": HelloMobileLocation;
        "animateFromLeftOverride": boolean;
    }
    interface ZonosIconAttributes {
        "autoHeight": boolean;
        "iconColor": Color | (string & { _placeholder?: never });
        "content": string;
        "size": number;
    }
    interface ZonosInputAttributes {
        "inputValue": string;
        "inputLabel": string;
        "inputSize": 'sm' | 'md' | 'lg' | 'xl';
        "isDisabled": boolean;
        "isError": boolean;
        "inputPlaceholder": string;
    }
    interface ZonosInvoiceAttributes {
        "mobile": boolean;
        "tablet": boolean;
    }
    interface ZonosInvoiceCartItemsAttributes {
        "isMobile": boolean;
    }
    interface ZonosInvoiceFinishAttributes {
        "borderRadius": ElementsUiStyle;
        "storybookForceStatus": PaymentIntent['status'];
        "confirmationId": string | null;
    }
    interface ZonosInvoiceFooterAttributes {
        "mobile": boolean;
        "tablet": boolean;
        "dataTheme": ElementsUiTheme;
    }
    interface ZonosInvoiceOrderDetailsAttributes {
        "mobile": boolean;
        "collapsed": boolean;
        "landedCostId": string;
    }
    interface ZonosInvoicePaymentAttributes {
        "submitBtnType": HTMLZonosButtonElement['variant'];
        "continueLoading": boolean;
        "submitBtnColor": string;
        "overridePrimaryColor": string;
    }
    interface ZonosInvoiceReviewAttributes {
        "mobile": boolean;
        "tablet": boolean;
        "collapsed": boolean;
    }
    interface ZonosInvoiceSubtotalAttributes {
        "isMobile": boolean;
    }
    interface ZonosLinkAttributes {
        "href": string;
        "rel": string;
        "target": string;
        "linkTitle": string;
    }
    interface ZonosLinkAuthenticationAttributes {
        "titleText": string;
        "defaultEmail": string | null;
        "isEmailError": boolean;
    }
    interface ZonosLoadingOverlayAttributes {
        "open": boolean;
        "spinnerColor": | 'primary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
    | 'black'
    | 'white';
        "size": number;
    }
    interface ZonosLogoAttributes {
        "theme": ElementsUiTheme;
        "width": string;
    }
    interface ZonosPaymentAttributes {
        "titleText": string;
    }
    interface ZonosRestStateAttributes {
        "restStateSubtitle": string;
        "restStateTitle": string;
        "restStateType": RestStateType;
    }
    interface ZonosReviewAttributes {
        "mobile": boolean;
        "collapsed": boolean;
    }
    interface ZonosSelectDialogHeaderAttributes {
        "label": string;
    }
    interface ZonosShippingAttributes {
        "continueLoading": boolean;
        "submitBtnColor": string;
        "submitBtnType": HTMLZonosButtonElement['variant'];
        "isMobile": boolean;
    }
    interface ZonosShippingRichRadioAttributes {
        "borderColor": Color | (string & { _placeholder?: never });
        "borderStyle": ElementsUiStyle;
        "theme": ElementsUiTheme;
        "isMobile": boolean;
    }
    interface ZonosSkeletonAttributes {
        "skeletonWidth": string;
        "skeletonHeight": string;
    }
    interface ZonosSpinnerAttributes {
        "size": number;
        "spinnerColor": SpinnerColor;
    }
    interface ZonosStoreCreditAttributes {
        "enabled": boolean;
    }
    interface ZonosStripeInputAttributes {
        "name": string;
        "autoComplete": string;
        "inputValue": string;
        "inputLabel": string;
        "overridePrimaryColor": string;
        "overrideSecondaryColor": string;
        "isDisabled": boolean;
        "isError": boolean;
        "error": string;
        "inputPlaceholder": string;
        "value": string;
        "required": boolean;
    }
    interface ZonosStripePhoneInputAttributes {
        "autoComplete": string;
        "disabled": boolean;
        "error": string;
        "inputLabel": string;
        "overridePrimaryColor": string;
        "overrideSecondaryColor": string;
        "inputValue": string;
        "countryCode": CountryCode | null;
        "minWidth": string;
    }
    interface ZonosStripeSelectAttributes {
        "name": string;
        "selectedValue": string;
        "selectLabel": string;
        "overridePrimaryColor": string;
        "overrideSecondaryColor": string;
        "isDisabled": boolean;
        "isError": boolean;
        "error": string;
        "selectPlaceholder": string;
        "autoComplete": string;
        "value": string;
        "required": boolean;
        "isClearable": boolean;
        "minWidth": string;
    }
    interface ZonosTextAttributes {
        "textColor": Color | (string & { _placeholder?: never });
        "size": Size;
        "type": Type;
        "weight": FontWeight;
    }
    interface ZonosToggleAttributes {
        "value": string;
    }
    interface ZonosTooltipAttributes {
        "label": string;
        "subtitle": string;
    }
    interface ZonosVStackAttributes {
        "spacing": GridSpacing;
    }
    interface ZonosVirtualScrollAttributes {
        "itemWidth": number;
        "fallbackItemHeight": number;
        "buffer": number;
    }

    interface IntrinsicElements {
        "zonos-address": Omit<ZonosAddress, keyof ZonosAddressAttributes> & { [K in keyof ZonosAddress & keyof ZonosAddressAttributes]?: ZonosAddress[K] } & { [K in keyof ZonosAddress & keyof ZonosAddressAttributes as `attr:${K}`]?: ZonosAddressAttributes[K] } & { [K in keyof ZonosAddress & keyof ZonosAddressAttributes as `prop:${K}`]?: ZonosAddress[K] } & OneOf<"type", ZonosAddress["type"], ZonosAddressAttributes["type"]> & OneOf<"titleText", ZonosAddress["titleText"], ZonosAddressAttributes["titleText"]>;
        "zonos-address-completion-dialog": Omit<ZonosAddressCompletionDialog, keyof ZonosAddressCompletionDialogAttributes> & { [K in keyof ZonosAddressCompletionDialog & keyof ZonosAddressCompletionDialogAttributes]?: ZonosAddressCompletionDialog[K] } & { [K in keyof ZonosAddressCompletionDialog & keyof ZonosAddressCompletionDialogAttributes as `attr:${K}`]?: ZonosAddressCompletionDialogAttributes[K] } & { [K in keyof ZonosAddressCompletionDialog & keyof ZonosAddressCompletionDialogAttributes as `prop:${K}`]?: ZonosAddressCompletionDialog[K] };
        "zonos-address-display": Omit<ZonosAddressDisplay, keyof ZonosAddressDisplayAttributes> & { [K in keyof ZonosAddressDisplay & keyof ZonosAddressDisplayAttributes]?: ZonosAddressDisplay[K] } & { [K in keyof ZonosAddressDisplay & keyof ZonosAddressDisplayAttributes as `attr:${K}`]?: ZonosAddressDisplayAttributes[K] } & { [K in keyof ZonosAddressDisplay & keyof ZonosAddressDisplayAttributes as `prop:${K}`]?: ZonosAddressDisplay[K] } & OneOf<"addressType", ZonosAddressDisplay["addressType"], ZonosAddressDisplayAttributes["addressType"]>;
        "zonos-address-form": Omit<ZonosAddressForm, keyof ZonosAddressFormAttributes> & { [K in keyof ZonosAddressForm & keyof ZonosAddressFormAttributes]?: ZonosAddressForm[K] } & { [K in keyof ZonosAddressForm & keyof ZonosAddressFormAttributes as `attr:${K}`]?: ZonosAddressFormAttributes[K] } & { [K in keyof ZonosAddressForm & keyof ZonosAddressFormAttributes as `prop:${K}`]?: ZonosAddressForm[K] } & OneOf<"addressType", ZonosAddressForm["addressType"], ZonosAddressFormAttributes["addressType"]>;
        "zonos-address-suggestions": Omit<ZonosAddressSuggestions, keyof ZonosAddressSuggestionsAttributes> & { [K in keyof ZonosAddressSuggestions & keyof ZonosAddressSuggestionsAttributes]?: ZonosAddressSuggestions[K] } & { [K in keyof ZonosAddressSuggestions & keyof ZonosAddressSuggestionsAttributes as `attr:${K}`]?: ZonosAddressSuggestionsAttributes[K] } & { [K in keyof ZonosAddressSuggestions & keyof ZonosAddressSuggestionsAttributes as `prop:${K}`]?: ZonosAddressSuggestions[K] } & OneOf<"type", ZonosAddressSuggestions["type"], ZonosAddressSuggestionsAttributes["type"]>;
        "zonos-address-update-dialog": Omit<ZonosAddressUpdateDialog, keyof ZonosAddressUpdateDialogAttributes> & { [K in keyof ZonosAddressUpdateDialog & keyof ZonosAddressUpdateDialogAttributes]?: ZonosAddressUpdateDialog[K] } & { [K in keyof ZonosAddressUpdateDialog & keyof ZonosAddressUpdateDialogAttributes as `attr:${K}`]?: ZonosAddressUpdateDialogAttributes[K] } & { [K in keyof ZonosAddressUpdateDialog & keyof ZonosAddressUpdateDialogAttributes as `prop:${K}`]?: ZonosAddressUpdateDialog[K] } & OneOf<"dialogLoading", ZonosAddressUpdateDialog["dialogLoading"], ZonosAddressUpdateDialogAttributes["dialogLoading"]>;
        "zonos-airwallex-payment": ZonosAirwallexPayment;
        "zonos-badge": Omit<ZonosBadge, keyof ZonosBadgeAttributes> & { [K in keyof ZonosBadge & keyof ZonosBadgeAttributes]?: ZonosBadge[K] } & { [K in keyof ZonosBadge & keyof ZonosBadgeAttributes as `attr:${K}`]?: ZonosBadgeAttributes[K] } & { [K in keyof ZonosBadge & keyof ZonosBadgeAttributes as `prop:${K}`]?: ZonosBadge[K] };
        "zonos-banner": Omit<ZonosBanner, keyof ZonosBannerAttributes> & { [K in keyof ZonosBanner & keyof ZonosBannerAttributes]?: ZonosBanner[K] } & { [K in keyof ZonosBanner & keyof ZonosBannerAttributes as `attr:${K}`]?: ZonosBannerAttributes[K] } & { [K in keyof ZonosBanner & keyof ZonosBannerAttributes as `prop:${K}`]?: ZonosBanner[K] };
        "zonos-button": Omit<ZonosButton, keyof ZonosButtonAttributes> & { [K in keyof ZonosButton & keyof ZonosButtonAttributes]?: ZonosButton[K] } & { [K in keyof ZonosButton & keyof ZonosButtonAttributes as `attr:${K}`]?: ZonosButtonAttributes[K] } & { [K in keyof ZonosButton & keyof ZonosButtonAttributes as `prop:${K}`]?: ZonosButton[K] };
        "zonos-card": Omit<ZonosCard, keyof ZonosCardAttributes> & { [K in keyof ZonosCard & keyof ZonosCardAttributes]?: ZonosCard[K] } & { [K in keyof ZonosCard & keyof ZonosCardAttributes as `attr:${K}`]?: ZonosCardAttributes[K] } & { [K in keyof ZonosCard & keyof ZonosCardAttributes as `prop:${K}`]?: ZonosCard[K] };
        "zonos-cart-items": ZonosCartItems;
        "zonos-cart-restricted-items": Omit<ZonosCartRestrictedItems, keyof ZonosCartRestrictedItemsAttributes> & { [K in keyof ZonosCartRestrictedItems & keyof ZonosCartRestrictedItemsAttributes]?: ZonosCartRestrictedItems[K] } & { [K in keyof ZonosCartRestrictedItems & keyof ZonosCartRestrictedItemsAttributes as `attr:${K}`]?: ZonosCartRestrictedItemsAttributes[K] } & { [K in keyof ZonosCartRestrictedItems & keyof ZonosCartRestrictedItemsAttributes as `prop:${K}`]?: ZonosCartRestrictedItems[K] };
        "zonos-cart-subtotal": Omit<ZonosCartSubtotal, keyof ZonosCartSubtotalAttributes> & { [K in keyof ZonosCartSubtotal & keyof ZonosCartSubtotalAttributes]?: ZonosCartSubtotal[K] } & { [K in keyof ZonosCartSubtotal & keyof ZonosCartSubtotalAttributes as `attr:${K}`]?: ZonosCartSubtotalAttributes[K] } & { [K in keyof ZonosCartSubtotal & keyof ZonosCartSubtotalAttributes as `prop:${K}`]?: ZonosCartSubtotal[K] };
        "zonos-checkbox": Omit<ZonosCheckbox, keyof ZonosCheckboxAttributes> & { [K in keyof ZonosCheckbox & keyof ZonosCheckboxAttributes]?: ZonosCheckbox[K] } & { [K in keyof ZonosCheckbox & keyof ZonosCheckboxAttributes as `attr:${K}`]?: ZonosCheckboxAttributes[K] } & { [K in keyof ZonosCheckbox & keyof ZonosCheckboxAttributes as `prop:${K}`]?: ZonosCheckbox[K] };
        "zonos-checkout": Omit<ZonosCheckout, keyof ZonosCheckoutAttributes> & { [K in keyof ZonosCheckout & keyof ZonosCheckoutAttributes]?: ZonosCheckout[K] } & { [K in keyof ZonosCheckout & keyof ZonosCheckoutAttributes as `attr:${K}`]?: ZonosCheckoutAttributes[K] } & { [K in keyof ZonosCheckout & keyof ZonosCheckoutAttributes as `prop:${K}`]?: ZonosCheckout[K] };
        "zonos-checkout-finish": Omit<ZonosCheckoutFinish, keyof ZonosCheckoutFinishAttributes> & { [K in keyof ZonosCheckoutFinish & keyof ZonosCheckoutFinishAttributes]?: ZonosCheckoutFinish[K] } & { [K in keyof ZonosCheckoutFinish & keyof ZonosCheckoutFinishAttributes as `attr:${K}`]?: ZonosCheckoutFinishAttributes[K] } & { [K in keyof ZonosCheckoutFinish & keyof ZonosCheckoutFinishAttributes as `prop:${K}`]?: ZonosCheckoutFinish[K] };
        "zonos-checkout-footer": Omit<ZonosCheckoutFooter, keyof ZonosCheckoutFooterAttributes> & { [K in keyof ZonosCheckoutFooter & keyof ZonosCheckoutFooterAttributes]?: ZonosCheckoutFooter[K] } & { [K in keyof ZonosCheckoutFooter & keyof ZonosCheckoutFooterAttributes as `attr:${K}`]?: ZonosCheckoutFooterAttributes[K] } & { [K in keyof ZonosCheckoutFooter & keyof ZonosCheckoutFooterAttributes as `prop:${K}`]?: ZonosCheckoutFooter[K] };
        "zonos-checkout-payment": Omit<ZonosCheckoutPayment, keyof ZonosCheckoutPaymentAttributes> & { [K in keyof ZonosCheckoutPayment & keyof ZonosCheckoutPaymentAttributes]?: ZonosCheckoutPayment[K] } & { [K in keyof ZonosCheckoutPayment & keyof ZonosCheckoutPaymentAttributes as `attr:${K}`]?: ZonosCheckoutPaymentAttributes[K] } & { [K in keyof ZonosCheckoutPayment & keyof ZonosCheckoutPaymentAttributes as `prop:${K}`]?: ZonosCheckoutPayment[K] };
        "zonos-checkout-progress-tabs": Omit<ZonosCheckoutProgressTabs, keyof ZonosCheckoutProgressTabsAttributes> & { [K in keyof ZonosCheckoutProgressTabs & keyof ZonosCheckoutProgressTabsAttributes]?: ZonosCheckoutProgressTabs[K] } & { [K in keyof ZonosCheckoutProgressTabs & keyof ZonosCheckoutProgressTabsAttributes as `attr:${K}`]?: ZonosCheckoutProgressTabsAttributes[K] } & { [K in keyof ZonosCheckoutProgressTabs & keyof ZonosCheckoutProgressTabsAttributes as `prop:${K}`]?: ZonosCheckoutProgressTabs[K] };
        "zonos-collapse": Omit<ZonosCollapse, keyof ZonosCollapseAttributes> & { [K in keyof ZonosCollapse & keyof ZonosCollapseAttributes]?: ZonosCollapse[K] } & { [K in keyof ZonosCollapse & keyof ZonosCollapseAttributes as `attr:${K}`]?: ZonosCollapseAttributes[K] } & { [K in keyof ZonosCollapse & keyof ZonosCollapseAttributes as `prop:${K}`]?: ZonosCollapse[K] };
        "zonos-collect": Omit<ZonosCollect, keyof ZonosCollectAttributes> & { [K in keyof ZonosCollect & keyof ZonosCollectAttributes]?: ZonosCollect[K] } & { [K in keyof ZonosCollect & keyof ZonosCollectAttributes as `attr:${K}`]?: ZonosCollectAttributes[K] } & { [K in keyof ZonosCollect & keyof ZonosCollectAttributes as `prop:${K}`]?: ZonosCollect[K] };
        "zonos-collect-cart-items": ZonosCollectCartItems;
        "zonos-collect-finish": Omit<ZonosCollectFinish, keyof ZonosCollectFinishAttributes> & { [K in keyof ZonosCollectFinish & keyof ZonosCollectFinishAttributes]?: ZonosCollectFinish[K] } & { [K in keyof ZonosCollectFinish & keyof ZonosCollectFinishAttributes as `attr:${K}`]?: ZonosCollectFinishAttributes[K] } & { [K in keyof ZonosCollectFinish & keyof ZonosCollectFinishAttributes as `prop:${K}`]?: ZonosCollectFinish[K] };
        "zonos-collect-footer": Omit<ZonosCollectFooter, keyof ZonosCollectFooterAttributes> & { [K in keyof ZonosCollectFooter & keyof ZonosCollectFooterAttributes]?: ZonosCollectFooter[K] } & { [K in keyof ZonosCollectFooter & keyof ZonosCollectFooterAttributes as `attr:${K}`]?: ZonosCollectFooterAttributes[K] } & { [K in keyof ZonosCollectFooter & keyof ZonosCollectFooterAttributes as `prop:${K}`]?: ZonosCollectFooter[K] };
        "zonos-collect-order-details": Omit<ZonosCollectOrderDetails, keyof ZonosCollectOrderDetailsAttributes> & { [K in keyof ZonosCollectOrderDetails & keyof ZonosCollectOrderDetailsAttributes]?: ZonosCollectOrderDetails[K] } & { [K in keyof ZonosCollectOrderDetails & keyof ZonosCollectOrderDetailsAttributes as `attr:${K}`]?: ZonosCollectOrderDetailsAttributes[K] } & { [K in keyof ZonosCollectOrderDetails & keyof ZonosCollectOrderDetailsAttributes as `prop:${K}`]?: ZonosCollectOrderDetails[K] } & OneOf<"collapsed", ZonosCollectOrderDetails["collapsed"], ZonosCollectOrderDetailsAttributes["collapsed"]>;
        "zonos-collect-payment": Omit<ZonosCollectPayment, keyof ZonosCollectPaymentAttributes> & { [K in keyof ZonosCollectPayment & keyof ZonosCollectPaymentAttributes]?: ZonosCollectPayment[K] } & { [K in keyof ZonosCollectPayment & keyof ZonosCollectPaymentAttributes as `attr:${K}`]?: ZonosCollectPaymentAttributes[K] } & { [K in keyof ZonosCollectPayment & keyof ZonosCollectPaymentAttributes as `prop:${K}`]?: ZonosCollectPayment[K] };
        "zonos-collect-review": Omit<ZonosCollectReview, keyof ZonosCollectReviewAttributes> & { [K in keyof ZonosCollectReview & keyof ZonosCollectReviewAttributes]?: ZonosCollectReview[K] } & { [K in keyof ZonosCollectReview & keyof ZonosCollectReviewAttributes as `attr:${K}`]?: ZonosCollectReviewAttributes[K] } & { [K in keyof ZonosCollectReview & keyof ZonosCollectReviewAttributes as `prop:${K}`]?: ZonosCollectReview[K] };
        "zonos-collect-subtotal": ZonosCollectSubtotal;
        "zonos-component": Omit<ZonosComponent, keyof ZonosComponentAttributes> & { [K in keyof ZonosComponent & keyof ZonosComponentAttributes]?: ZonosComponent[K] } & { [K in keyof ZonosComponent & keyof ZonosComponentAttributes as `attr:${K}`]?: ZonosComponentAttributes[K] } & { [K in keyof ZonosComponent & keyof ZonosComponentAttributes as `prop:${K}`]?: ZonosComponent[K] };
        "zonos-confirm-dialog": Omit<ZonosConfirmDialog, keyof ZonosConfirmDialogAttributes> & { [K in keyof ZonosConfirmDialog & keyof ZonosConfirmDialogAttributes]?: ZonosConfirmDialog[K] } & { [K in keyof ZonosConfirmDialog & keyof ZonosConfirmDialogAttributes as `attr:${K}`]?: ZonosConfirmDialogAttributes[K] } & { [K in keyof ZonosConfirmDialog & keyof ZonosConfirmDialogAttributes as `prop:${K}`]?: ZonosConfirmDialog[K] } & OneOf<"dialogConfirmBtnText", ZonosConfirmDialog["dialogConfirmBtnText"], ZonosConfirmDialogAttributes["dialogConfirmBtnText"]> & OneOf<"dialogOpen", ZonosConfirmDialog["dialogOpen"], ZonosConfirmDialogAttributes["dialogOpen"]>;
        "zonos-controller": Omit<ZonosController, keyof ZonosControllerAttributes> & { [K in keyof ZonosController & keyof ZonosControllerAttributes]?: ZonosController[K] } & { [K in keyof ZonosController & keyof ZonosControllerAttributes as `attr:${K}`]?: ZonosControllerAttributes[K] } & { [K in keyof ZonosController & keyof ZonosControllerAttributes as `prop:${K}`]?: ZonosController[K] } & OneOf<"zonosApiKey", ZonosController["zonosApiKey"], ZonosControllerAttributes["zonosApiKey"]>;
        "zonos-country-flag": Omit<ZonosCountryFlag, keyof ZonosCountryFlagAttributes> & { [K in keyof ZonosCountryFlag & keyof ZonosCountryFlagAttributes]?: ZonosCountryFlag[K] } & { [K in keyof ZonosCountryFlag & keyof ZonosCountryFlagAttributes as `attr:${K}`]?: ZonosCountryFlagAttributes[K] } & { [K in keyof ZonosCountryFlag & keyof ZonosCountryFlagAttributes as `prop:${K}`]?: ZonosCountryFlag[K] };
        "zonos-country-select": ZonosCountrySelect;
        "zonos-currency-toggle": ZonosCurrencyToggle;
        "zonos-custom-address": Omit<ZonosCustomAddress, keyof ZonosCustomAddressAttributes> & { [K in keyof ZonosCustomAddress & keyof ZonosCustomAddressAttributes]?: ZonosCustomAddress[K] } & { [K in keyof ZonosCustomAddress & keyof ZonosCustomAddressAttributes as `attr:${K}`]?: ZonosCustomAddressAttributes[K] } & { [K in keyof ZonosCustomAddress & keyof ZonosCustomAddressAttributes as `prop:${K}`]?: ZonosCustomAddress[K] } & OneOf<"type", ZonosCustomAddress["type"], ZonosCustomAddressAttributes["type"]> & OneOf<"titleText", ZonosCustomAddress["titleText"], ZonosCustomAddressAttributes["titleText"]>;
        "zonos-custom-message": Omit<ZonosCustomMessage, keyof ZonosCustomMessageAttributes> & { [K in keyof ZonosCustomMessage & keyof ZonosCustomMessageAttributes]?: ZonosCustomMessage[K] } & { [K in keyof ZonosCustomMessage & keyof ZonosCustomMessageAttributes as `attr:${K}`]?: ZonosCustomMessageAttributes[K] } & { [K in keyof ZonosCustomMessage & keyof ZonosCustomMessageAttributes as `prop:${K}`]?: ZonosCustomMessage[K] };
        "zonos-customer-info": Omit<ZonosCustomerInfo, keyof ZonosCustomerInfoAttributes> & { [K in keyof ZonosCustomerInfo & keyof ZonosCustomerInfoAttributes]?: ZonosCustomerInfo[K] } & { [K in keyof ZonosCustomerInfo & keyof ZonosCustomerInfoAttributes as `attr:${K}`]?: ZonosCustomerInfoAttributes[K] } & { [K in keyof ZonosCustomerInfo & keyof ZonosCustomerInfoAttributes as `prop:${K}`]?: ZonosCustomerInfo[K] };
        "zonos-dialog": Omit<ZonosDialog, keyof ZonosDialogAttributes> & { [K in keyof ZonosDialog & keyof ZonosDialogAttributes]?: ZonosDialog[K] } & { [K in keyof ZonosDialog & keyof ZonosDialogAttributes as `attr:${K}`]?: ZonosDialogAttributes[K] } & { [K in keyof ZonosDialog & keyof ZonosDialogAttributes as `prop:${K}`]?: ZonosDialog[K] };
        "zonos-empty-state-payment": Omit<ZonosEmptyStatePayment, keyof ZonosEmptyStatePaymentAttributes> & { [K in keyof ZonosEmptyStatePayment & keyof ZonosEmptyStatePaymentAttributes]?: ZonosEmptyStatePayment[K] } & { [K in keyof ZonosEmptyStatePayment & keyof ZonosEmptyStatePaymentAttributes as `attr:${K}`]?: ZonosEmptyStatePaymentAttributes[K] } & { [K in keyof ZonosEmptyStatePayment & keyof ZonosEmptyStatePaymentAttributes as `prop:${K}`]?: ZonosEmptyStatePayment[K] } & OneOf<"emptyStateText", ZonosEmptyStatePayment["emptyStateText"], ZonosEmptyStatePaymentAttributes["emptyStateText"]>;
        "zonos-h-stack": Omit<ZonosHStack, keyof ZonosHStackAttributes> & { [K in keyof ZonosHStack & keyof ZonosHStackAttributes]?: ZonosHStack[K] } & { [K in keyof ZonosHStack & keyof ZonosHStackAttributes as `attr:${K}`]?: ZonosHStackAttributes[K] } & { [K in keyof ZonosHStack & keyof ZonosHStackAttributes as `prop:${K}`]?: ZonosHStack[K] };
        "zonos-hello": Omit<ZonosHello, keyof ZonosHelloAttributes> & { [K in keyof ZonosHello & keyof ZonosHelloAttributes]?: ZonosHello[K] } & { [K in keyof ZonosHello & keyof ZonosHelloAttributes as `attr:${K}`]?: ZonosHelloAttributes[K] } & { [K in keyof ZonosHello & keyof ZonosHelloAttributes as `prop:${K}`]?: ZonosHello[K] };
        "zonos-hello-dialog": Omit<ZonosHelloDialog, keyof ZonosHelloDialogAttributes> & { [K in keyof ZonosHelloDialog & keyof ZonosHelloDialogAttributes]?: ZonosHelloDialog[K] } & { [K in keyof ZonosHelloDialog & keyof ZonosHelloDialogAttributes as `attr:${K}`]?: ZonosHelloDialogAttributes[K] } & { [K in keyof ZonosHelloDialog & keyof ZonosHelloDialogAttributes as `prop:${K}`]?: ZonosHelloDialog[K] };
        "zonos-hello-dialog-footer": ZonosHelloDialogFooter;
        "zonos-icon": Omit<ZonosIcon, keyof ZonosIconAttributes> & { [K in keyof ZonosIcon & keyof ZonosIconAttributes]?: ZonosIcon[K] } & { [K in keyof ZonosIcon & keyof ZonosIconAttributes as `attr:${K}`]?: ZonosIconAttributes[K] } & { [K in keyof ZonosIcon & keyof ZonosIconAttributes as `prop:${K}`]?: ZonosIcon[K] } & OneOf<"content", ZonosIcon["content"], ZonosIconAttributes["content"]>;
        "zonos-input": Omit<ZonosInput, keyof ZonosInputAttributes> & { [K in keyof ZonosInput & keyof ZonosInputAttributes]?: ZonosInput[K] } & { [K in keyof ZonosInput & keyof ZonosInputAttributes as `attr:${K}`]?: ZonosInputAttributes[K] } & { [K in keyof ZonosInput & keyof ZonosInputAttributes as `prop:${K}`]?: ZonosInput[K] } & OneOf<"inputLabel", ZonosInput["inputLabel"], ZonosInputAttributes["inputLabel"]>;
        "zonos-invoice": Omit<ZonosInvoice, keyof ZonosInvoiceAttributes> & { [K in keyof ZonosInvoice & keyof ZonosInvoiceAttributes]?: ZonosInvoice[K] } & { [K in keyof ZonosInvoice & keyof ZonosInvoiceAttributes as `attr:${K}`]?: ZonosInvoiceAttributes[K] } & { [K in keyof ZonosInvoice & keyof ZonosInvoiceAttributes as `prop:${K}`]?: ZonosInvoice[K] };
        "zonos-invoice-cart-items": Omit<ZonosInvoiceCartItems, keyof ZonosInvoiceCartItemsAttributes> & { [K in keyof ZonosInvoiceCartItems & keyof ZonosInvoiceCartItemsAttributes]?: ZonosInvoiceCartItems[K] } & { [K in keyof ZonosInvoiceCartItems & keyof ZonosInvoiceCartItemsAttributes as `attr:${K}`]?: ZonosInvoiceCartItemsAttributes[K] } & { [K in keyof ZonosInvoiceCartItems & keyof ZonosInvoiceCartItemsAttributes as `prop:${K}`]?: ZonosInvoiceCartItems[K] };
        "zonos-invoice-finish": Omit<ZonosInvoiceFinish, keyof ZonosInvoiceFinishAttributes> & { [K in keyof ZonosInvoiceFinish & keyof ZonosInvoiceFinishAttributes]?: ZonosInvoiceFinish[K] } & { [K in keyof ZonosInvoiceFinish & keyof ZonosInvoiceFinishAttributes as `attr:${K}`]?: ZonosInvoiceFinishAttributes[K] } & { [K in keyof ZonosInvoiceFinish & keyof ZonosInvoiceFinishAttributes as `prop:${K}`]?: ZonosInvoiceFinish[K] };
        "zonos-invoice-footer": Omit<ZonosInvoiceFooter, keyof ZonosInvoiceFooterAttributes> & { [K in keyof ZonosInvoiceFooter & keyof ZonosInvoiceFooterAttributes]?: ZonosInvoiceFooter[K] } & { [K in keyof ZonosInvoiceFooter & keyof ZonosInvoiceFooterAttributes as `attr:${K}`]?: ZonosInvoiceFooterAttributes[K] } & { [K in keyof ZonosInvoiceFooter & keyof ZonosInvoiceFooterAttributes as `prop:${K}`]?: ZonosInvoiceFooter[K] };
        "zonos-invoice-order-details": Omit<ZonosInvoiceOrderDetails, keyof ZonosInvoiceOrderDetailsAttributes> & { [K in keyof ZonosInvoiceOrderDetails & keyof ZonosInvoiceOrderDetailsAttributes]?: ZonosInvoiceOrderDetails[K] } & { [K in keyof ZonosInvoiceOrderDetails & keyof ZonosInvoiceOrderDetailsAttributes as `attr:${K}`]?: ZonosInvoiceOrderDetailsAttributes[K] } & { [K in keyof ZonosInvoiceOrderDetails & keyof ZonosInvoiceOrderDetailsAttributes as `prop:${K}`]?: ZonosInvoiceOrderDetails[K] } & OneOf<"collapsed", ZonosInvoiceOrderDetails["collapsed"], ZonosInvoiceOrderDetailsAttributes["collapsed"]>;
        "zonos-invoice-payment": Omit<ZonosInvoicePayment, keyof ZonosInvoicePaymentAttributes> & { [K in keyof ZonosInvoicePayment & keyof ZonosInvoicePaymentAttributes]?: ZonosInvoicePayment[K] } & { [K in keyof ZonosInvoicePayment & keyof ZonosInvoicePaymentAttributes as `attr:${K}`]?: ZonosInvoicePaymentAttributes[K] } & { [K in keyof ZonosInvoicePayment & keyof ZonosInvoicePaymentAttributes as `prop:${K}`]?: ZonosInvoicePayment[K] };
        "zonos-invoice-review": Omit<ZonosInvoiceReview, keyof ZonosInvoiceReviewAttributes> & { [K in keyof ZonosInvoiceReview & keyof ZonosInvoiceReviewAttributes]?: ZonosInvoiceReview[K] } & { [K in keyof ZonosInvoiceReview & keyof ZonosInvoiceReviewAttributes as `attr:${K}`]?: ZonosInvoiceReviewAttributes[K] } & { [K in keyof ZonosInvoiceReview & keyof ZonosInvoiceReviewAttributes as `prop:${K}`]?: ZonosInvoiceReview[K] };
        "zonos-invoice-subtotal": Omit<ZonosInvoiceSubtotal, keyof ZonosInvoiceSubtotalAttributes> & { [K in keyof ZonosInvoiceSubtotal & keyof ZonosInvoiceSubtotalAttributes]?: ZonosInvoiceSubtotal[K] } & { [K in keyof ZonosInvoiceSubtotal & keyof ZonosInvoiceSubtotalAttributes as `attr:${K}`]?: ZonosInvoiceSubtotalAttributes[K] } & { [K in keyof ZonosInvoiceSubtotal & keyof ZonosInvoiceSubtotalAttributes as `prop:${K}`]?: ZonosInvoiceSubtotal[K] };
        "zonos-language-select": ZonosLanguageSelect;
        "zonos-link": Omit<ZonosLink, keyof ZonosLinkAttributes> & { [K in keyof ZonosLink & keyof ZonosLinkAttributes]?: ZonosLink[K] } & { [K in keyof ZonosLink & keyof ZonosLinkAttributes as `attr:${K}`]?: ZonosLinkAttributes[K] } & { [K in keyof ZonosLink & keyof ZonosLinkAttributes as `prop:${K}`]?: ZonosLink[K] };
        "zonos-link-authentication": Omit<ZonosLinkAuthentication, keyof ZonosLinkAuthenticationAttributes> & { [K in keyof ZonosLinkAuthentication & keyof ZonosLinkAuthenticationAttributes]?: ZonosLinkAuthentication[K] } & { [K in keyof ZonosLinkAuthentication & keyof ZonosLinkAuthenticationAttributes as `attr:${K}`]?: ZonosLinkAuthenticationAttributes[K] } & { [K in keyof ZonosLinkAuthentication & keyof ZonosLinkAuthenticationAttributes as `prop:${K}`]?: ZonosLinkAuthentication[K] } & OneOf<"titleText", ZonosLinkAuthentication["titleText"], ZonosLinkAuthenticationAttributes["titleText"]>;
        "zonos-loading-overlay": Omit<ZonosLoadingOverlay, keyof ZonosLoadingOverlayAttributes> & { [K in keyof ZonosLoadingOverlay & keyof ZonosLoadingOverlayAttributes]?: ZonosLoadingOverlay[K] } & { [K in keyof ZonosLoadingOverlay & keyof ZonosLoadingOverlayAttributes as `attr:${K}`]?: ZonosLoadingOverlayAttributes[K] } & { [K in keyof ZonosLoadingOverlay & keyof ZonosLoadingOverlayAttributes as `prop:${K}`]?: ZonosLoadingOverlay[K] };
        "zonos-logo": Omit<ZonosLogo, keyof ZonosLogoAttributes> & { [K in keyof ZonosLogo & keyof ZonosLogoAttributes]?: ZonosLogo[K] } & { [K in keyof ZonosLogo & keyof ZonosLogoAttributes as `attr:${K}`]?: ZonosLogoAttributes[K] } & { [K in keyof ZonosLogo & keyof ZonosLogoAttributes as `prop:${K}`]?: ZonosLogo[K] };
        "zonos-notification": ZonosNotification;
        "zonos-payment": Omit<ZonosPayment, keyof ZonosPaymentAttributes> & { [K in keyof ZonosPayment & keyof ZonosPaymentAttributes]?: ZonosPayment[K] } & { [K in keyof ZonosPayment & keyof ZonosPaymentAttributes as `attr:${K}`]?: ZonosPaymentAttributes[K] } & { [K in keyof ZonosPayment & keyof ZonosPaymentAttributes as `prop:${K}`]?: ZonosPayment[K] };
        "zonos-paypal-payment": ZonosPaypalPayment;
        "zonos-policy-consent": ZonosPolicyConsent;
        "zonos-rest-state": Omit<ZonosRestState, keyof ZonosRestStateAttributes> & { [K in keyof ZonosRestState & keyof ZonosRestStateAttributes]?: ZonosRestState[K] } & { [K in keyof ZonosRestState & keyof ZonosRestStateAttributes as `attr:${K}`]?: ZonosRestStateAttributes[K] } & { [K in keyof ZonosRestState & keyof ZonosRestStateAttributes as `prop:${K}`]?: ZonosRestState[K] } & OneOf<"restStateSubtitle", ZonosRestState["restStateSubtitle"], ZonosRestStateAttributes["restStateSubtitle"]> & OneOf<"restStateTitle", ZonosRestState["restStateTitle"], ZonosRestStateAttributes["restStateTitle"]> & OneOf<"restStateType", ZonosRestState["restStateType"], ZonosRestStateAttributes["restStateType"]>;
        "zonos-review": Omit<ZonosReview, keyof ZonosReviewAttributes> & { [K in keyof ZonosReview & keyof ZonosReviewAttributes]?: ZonosReview[K] } & { [K in keyof ZonosReview & keyof ZonosReviewAttributes as `attr:${K}`]?: ZonosReviewAttributes[K] } & { [K in keyof ZonosReview & keyof ZonosReviewAttributes as `prop:${K}`]?: ZonosReview[K] };
        "zonos-select-dialog-header": Omit<ZonosSelectDialogHeader, keyof ZonosSelectDialogHeaderAttributes> & { [K in keyof ZonosSelectDialogHeader & keyof ZonosSelectDialogHeaderAttributes]?: ZonosSelectDialogHeader[K] } & { [K in keyof ZonosSelectDialogHeader & keyof ZonosSelectDialogHeaderAttributes as `attr:${K}`]?: ZonosSelectDialogHeaderAttributes[K] } & { [K in keyof ZonosSelectDialogHeader & keyof ZonosSelectDialogHeaderAttributes as `prop:${K}`]?: ZonosSelectDialogHeader[K] };
        "zonos-shipping": Omit<ZonosShipping, keyof ZonosShippingAttributes> & { [K in keyof ZonosShipping & keyof ZonosShippingAttributes]?: ZonosShipping[K] } & { [K in keyof ZonosShipping & keyof ZonosShippingAttributes as `attr:${K}`]?: ZonosShippingAttributes[K] } & { [K in keyof ZonosShipping & keyof ZonosShippingAttributes as `prop:${K}`]?: ZonosShipping[K] } & OneOf<"isMobile", ZonosShipping["isMobile"], ZonosShippingAttributes["isMobile"]>;
        "zonos-shipping-rich-radio": Omit<ZonosShippingRichRadio, keyof ZonosShippingRichRadioAttributes> & { [K in keyof ZonosShippingRichRadio & keyof ZonosShippingRichRadioAttributes]?: ZonosShippingRichRadio[K] } & { [K in keyof ZonosShippingRichRadio & keyof ZonosShippingRichRadioAttributes as `attr:${K}`]?: ZonosShippingRichRadioAttributes[K] } & { [K in keyof ZonosShippingRichRadio & keyof ZonosShippingRichRadioAttributes as `prop:${K}`]?: ZonosShippingRichRadio[K] } & OneOf<"isMobile", ZonosShippingRichRadio["isMobile"], ZonosShippingRichRadioAttributes["isMobile"]>;
        "zonos-skeleton": Omit<ZonosSkeleton, keyof ZonosSkeletonAttributes> & { [K in keyof ZonosSkeleton & keyof ZonosSkeletonAttributes]?: ZonosSkeleton[K] } & { [K in keyof ZonosSkeleton & keyof ZonosSkeletonAttributes as `attr:${K}`]?: ZonosSkeletonAttributes[K] } & { [K in keyof ZonosSkeleton & keyof ZonosSkeletonAttributes as `prop:${K}`]?: ZonosSkeleton[K] };
        "zonos-spinner": Omit<ZonosSpinner, keyof ZonosSpinnerAttributes> & { [K in keyof ZonosSpinner & keyof ZonosSpinnerAttributes]?: ZonosSpinner[K] } & { [K in keyof ZonosSpinner & keyof ZonosSpinnerAttributes as `attr:${K}`]?: ZonosSpinnerAttributes[K] } & { [K in keyof ZonosSpinner & keyof ZonosSpinnerAttributes as `prop:${K}`]?: ZonosSpinner[K] };
        "zonos-store-credit": Omit<ZonosStoreCredit, keyof ZonosStoreCreditAttributes> & { [K in keyof ZonosStoreCredit & keyof ZonosStoreCreditAttributes]?: ZonosStoreCredit[K] } & { [K in keyof ZonosStoreCredit & keyof ZonosStoreCreditAttributes as `attr:${K}`]?: ZonosStoreCreditAttributes[K] } & { [K in keyof ZonosStoreCredit & keyof ZonosStoreCreditAttributes as `prop:${K}`]?: ZonosStoreCredit[K] };
        "zonos-stripe-input": Omit<ZonosStripeInput, keyof ZonosStripeInputAttributes> & { [K in keyof ZonosStripeInput & keyof ZonosStripeInputAttributes]?: ZonosStripeInput[K] } & { [K in keyof ZonosStripeInput & keyof ZonosStripeInputAttributes as `attr:${K}`]?: ZonosStripeInputAttributes[K] } & { [K in keyof ZonosStripeInput & keyof ZonosStripeInputAttributes as `prop:${K}`]?: ZonosStripeInput[K] } & OneOf<"inputLabel", ZonosStripeInput["inputLabel"], ZonosStripeInputAttributes["inputLabel"]>;
        "zonos-stripe-phone-input": Omit<ZonosStripePhoneInput, keyof ZonosStripePhoneInputAttributes> & { [K in keyof ZonosStripePhoneInput & keyof ZonosStripePhoneInputAttributes]?: ZonosStripePhoneInput[K] } & { [K in keyof ZonosStripePhoneInput & keyof ZonosStripePhoneInputAttributes as `attr:${K}`]?: ZonosStripePhoneInputAttributes[K] } & { [K in keyof ZonosStripePhoneInput & keyof ZonosStripePhoneInputAttributes as `prop:${K}`]?: ZonosStripePhoneInput[K] };
        "zonos-stripe-select": Omit<ZonosStripeSelect, keyof ZonosStripeSelectAttributes> & { [K in keyof ZonosStripeSelect & keyof ZonosStripeSelectAttributes]?: ZonosStripeSelect[K] } & { [K in keyof ZonosStripeSelect & keyof ZonosStripeSelectAttributes as `attr:${K}`]?: ZonosStripeSelectAttributes[K] } & { [K in keyof ZonosStripeSelect & keyof ZonosStripeSelectAttributes as `prop:${K}`]?: ZonosStripeSelect[K] } & OneOf<"selectLabel", ZonosStripeSelect["selectLabel"], ZonosStripeSelectAttributes["selectLabel"]>;
        "zonos-text": Omit<ZonosText, keyof ZonosTextAttributes> & { [K in keyof ZonosText & keyof ZonosTextAttributes]?: ZonosText[K] } & { [K in keyof ZonosText & keyof ZonosTextAttributes as `attr:${K}`]?: ZonosTextAttributes[K] } & { [K in keyof ZonosText & keyof ZonosTextAttributes as `prop:${K}`]?: ZonosText[K] };
        "zonos-toggle": Omit<ZonosToggle, keyof ZonosToggleAttributes> & { [K in keyof ZonosToggle & keyof ZonosToggleAttributes]?: ZonosToggle[K] } & { [K in keyof ZonosToggle & keyof ZonosToggleAttributes as `attr:${K}`]?: ZonosToggleAttributes[K] } & { [K in keyof ZonosToggle & keyof ZonosToggleAttributes as `prop:${K}`]?: ZonosToggle[K] } & OneOf<"value", ZonosToggle["value"], ZonosToggleAttributes["value"]>;
        "zonos-tooltip": Omit<ZonosTooltip, keyof ZonosTooltipAttributes> & { [K in keyof ZonosTooltip & keyof ZonosTooltipAttributes]?: ZonosTooltip[K] } & { [K in keyof ZonosTooltip & keyof ZonosTooltipAttributes as `attr:${K}`]?: ZonosTooltipAttributes[K] } & { [K in keyof ZonosTooltip & keyof ZonosTooltipAttributes as `prop:${K}`]?: ZonosTooltip[K] };
        "zonos-v-stack": Omit<ZonosVStack, keyof ZonosVStackAttributes> & { [K in keyof ZonosVStack & keyof ZonosVStackAttributes]?: ZonosVStack[K] } & { [K in keyof ZonosVStack & keyof ZonosVStackAttributes as `attr:${K}`]?: ZonosVStackAttributes[K] } & { [K in keyof ZonosVStack & keyof ZonosVStackAttributes as `prop:${K}`]?: ZonosVStack[K] };
        "zonos-virtual-scroll": Omit<ZonosVirtualScroll, keyof ZonosVirtualScrollAttributes> & { [K in keyof ZonosVirtualScroll & keyof ZonosVirtualScrollAttributes]?: ZonosVirtualScroll[K] } & { [K in keyof ZonosVirtualScroll & keyof ZonosVirtualScrollAttributes as `attr:${K}`]?: ZonosVirtualScrollAttributes[K] } & { [K in keyof ZonosVirtualScroll & keyof ZonosVirtualScrollAttributes as `prop:${K}`]?: ZonosVirtualScroll[K] } & OneOf<"fallbackItemHeight", ZonosVirtualScroll["fallbackItemHeight"], ZonosVirtualScrollAttributes["fallbackItemHeight"]>;
    }
}

declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "zonos-address": LocalJSX.IntrinsicElements["zonos-address"] & JSXBase.HTMLAttributes<HTMLZonosAddressElement>;
            "zonos-address-completion-dialog": LocalJSX.IntrinsicElements["zonos-address-completion-dialog"] & JSXBase.HTMLAttributes<HTMLZonosAddressCompletionDialogElement>;
            "zonos-address-display": LocalJSX.IntrinsicElements["zonos-address-display"] & JSXBase.HTMLAttributes<HTMLZonosAddressDisplayElement>;
            "zonos-address-form": LocalJSX.IntrinsicElements["zonos-address-form"] & JSXBase.HTMLAttributes<HTMLZonosAddressFormElement>;
            "zonos-address-suggestions": LocalJSX.IntrinsicElements["zonos-address-suggestions"] & JSXBase.HTMLAttributes<HTMLZonosAddressSuggestionsElement>;
            "zonos-address-update-dialog": LocalJSX.IntrinsicElements["zonos-address-update-dialog"] & JSXBase.HTMLAttributes<HTMLZonosAddressUpdateDialogElement>;
            "zonos-airwallex-payment": LocalJSX.IntrinsicElements["zonos-airwallex-payment"] & JSXBase.HTMLAttributes<HTMLZonosAirwallexPaymentElement>;
            "zonos-badge": LocalJSX.IntrinsicElements["zonos-badge"] & JSXBase.HTMLAttributes<HTMLZonosBadgeElement>;
            "zonos-banner": LocalJSX.IntrinsicElements["zonos-banner"] & JSXBase.HTMLAttributes<HTMLZonosBannerElement>;
            "zonos-button": LocalJSX.IntrinsicElements["zonos-button"] & JSXBase.HTMLAttributes<HTMLZonosButtonElement>;
            "zonos-card": LocalJSX.IntrinsicElements["zonos-card"] & JSXBase.HTMLAttributes<HTMLZonosCardElement>;
            "zonos-cart-items": LocalJSX.IntrinsicElements["zonos-cart-items"] & JSXBase.HTMLAttributes<HTMLZonosCartItemsElement>;
            "zonos-cart-restricted-items": LocalJSX.IntrinsicElements["zonos-cart-restricted-items"] & JSXBase.HTMLAttributes<HTMLZonosCartRestrictedItemsElement>;
            "zonos-cart-subtotal": LocalJSX.IntrinsicElements["zonos-cart-subtotal"] & JSXBase.HTMLAttributes<HTMLZonosCartSubtotalElement>;
            "zonos-checkbox": LocalJSX.IntrinsicElements["zonos-checkbox"] & JSXBase.HTMLAttributes<HTMLZonosCheckboxElement>;
            "zonos-checkout": LocalJSX.IntrinsicElements["zonos-checkout"] & JSXBase.HTMLAttributes<HTMLZonosCheckoutElement>;
            "zonos-checkout-finish": LocalJSX.IntrinsicElements["zonos-checkout-finish"] & JSXBase.HTMLAttributes<HTMLZonosCheckoutFinishElement>;
            "zonos-checkout-footer": LocalJSX.IntrinsicElements["zonos-checkout-footer"] & JSXBase.HTMLAttributes<HTMLZonosCheckoutFooterElement>;
            "zonos-checkout-payment": LocalJSX.IntrinsicElements["zonos-checkout-payment"] & JSXBase.HTMLAttributes<HTMLZonosCheckoutPaymentElement>;
            "zonos-checkout-progress-tabs": LocalJSX.IntrinsicElements["zonos-checkout-progress-tabs"] & JSXBase.HTMLAttributes<HTMLZonosCheckoutProgressTabsElement>;
            "zonos-collapse": LocalJSX.IntrinsicElements["zonos-collapse"] & JSXBase.HTMLAttributes<HTMLZonosCollapseElement>;
            "zonos-collect": LocalJSX.IntrinsicElements["zonos-collect"] & JSXBase.HTMLAttributes<HTMLZonosCollectElement>;
            "zonos-collect-cart-items": LocalJSX.IntrinsicElements["zonos-collect-cart-items"] & JSXBase.HTMLAttributes<HTMLZonosCollectCartItemsElement>;
            "zonos-collect-finish": LocalJSX.IntrinsicElements["zonos-collect-finish"] & JSXBase.HTMLAttributes<HTMLZonosCollectFinishElement>;
            "zonos-collect-footer": LocalJSX.IntrinsicElements["zonos-collect-footer"] & JSXBase.HTMLAttributes<HTMLZonosCollectFooterElement>;
            "zonos-collect-order-details": LocalJSX.IntrinsicElements["zonos-collect-order-details"] & JSXBase.HTMLAttributes<HTMLZonosCollectOrderDetailsElement>;
            "zonos-collect-payment": LocalJSX.IntrinsicElements["zonos-collect-payment"] & JSXBase.HTMLAttributes<HTMLZonosCollectPaymentElement>;
            "zonos-collect-review": LocalJSX.IntrinsicElements["zonos-collect-review"] & JSXBase.HTMLAttributes<HTMLZonosCollectReviewElement>;
            "zonos-collect-subtotal": LocalJSX.IntrinsicElements["zonos-collect-subtotal"] & JSXBase.HTMLAttributes<HTMLZonosCollectSubtotalElement>;
            "zonos-component": LocalJSX.IntrinsicElements["zonos-component"] & JSXBase.HTMLAttributes<HTMLZonosComponentElement>;
            "zonos-confirm-dialog": LocalJSX.IntrinsicElements["zonos-confirm-dialog"] & JSXBase.HTMLAttributes<HTMLZonosConfirmDialogElement>;
            "zonos-controller": LocalJSX.IntrinsicElements["zonos-controller"] & JSXBase.HTMLAttributes<HTMLZonosControllerElement>;
            "zonos-country-flag": LocalJSX.IntrinsicElements["zonos-country-flag"] & JSXBase.HTMLAttributes<HTMLZonosCountryFlagElement>;
            "zonos-country-select": LocalJSX.IntrinsicElements["zonos-country-select"] & JSXBase.HTMLAttributes<HTMLZonosCountrySelectElement>;
            "zonos-currency-toggle": LocalJSX.IntrinsicElements["zonos-currency-toggle"] & JSXBase.HTMLAttributes<HTMLZonosCurrencyToggleElement>;
            "zonos-custom-address": LocalJSX.IntrinsicElements["zonos-custom-address"] & JSXBase.HTMLAttributes<HTMLZonosCustomAddressElement>;
            "zonos-custom-message": LocalJSX.IntrinsicElements["zonos-custom-message"] & JSXBase.HTMLAttributes<HTMLZonosCustomMessageElement>;
            "zonos-customer-info": LocalJSX.IntrinsicElements["zonos-customer-info"] & JSXBase.HTMLAttributes<HTMLZonosCustomerInfoElement>;
            "zonos-dialog": LocalJSX.IntrinsicElements["zonos-dialog"] & JSXBase.HTMLAttributes<HTMLZonosDialogElement>;
            "zonos-empty-state-payment": LocalJSX.IntrinsicElements["zonos-empty-state-payment"] & JSXBase.HTMLAttributes<HTMLZonosEmptyStatePaymentElement>;
            "zonos-h-stack": LocalJSX.IntrinsicElements["zonos-h-stack"] & JSXBase.HTMLAttributes<HTMLZonosHStackElement>;
            "zonos-hello": LocalJSX.IntrinsicElements["zonos-hello"] & JSXBase.HTMLAttributes<HTMLZonosHelloElement>;
            "zonos-hello-dialog": LocalJSX.IntrinsicElements["zonos-hello-dialog"] & JSXBase.HTMLAttributes<HTMLZonosHelloDialogElement>;
            "zonos-hello-dialog-footer": LocalJSX.IntrinsicElements["zonos-hello-dialog-footer"] & JSXBase.HTMLAttributes<HTMLZonosHelloDialogFooterElement>;
            "zonos-icon": LocalJSX.IntrinsicElements["zonos-icon"] & JSXBase.HTMLAttributes<HTMLZonosIconElement>;
            "zonos-input": LocalJSX.IntrinsicElements["zonos-input"] & JSXBase.HTMLAttributes<HTMLZonosInputElement>;
            "zonos-invoice": LocalJSX.IntrinsicElements["zonos-invoice"] & JSXBase.HTMLAttributes<HTMLZonosInvoiceElement>;
            "zonos-invoice-cart-items": LocalJSX.IntrinsicElements["zonos-invoice-cart-items"] & JSXBase.HTMLAttributes<HTMLZonosInvoiceCartItemsElement>;
            "zonos-invoice-finish": LocalJSX.IntrinsicElements["zonos-invoice-finish"] & JSXBase.HTMLAttributes<HTMLZonosInvoiceFinishElement>;
            "zonos-invoice-footer": LocalJSX.IntrinsicElements["zonos-invoice-footer"] & JSXBase.HTMLAttributes<HTMLZonosInvoiceFooterElement>;
            "zonos-invoice-order-details": LocalJSX.IntrinsicElements["zonos-invoice-order-details"] & JSXBase.HTMLAttributes<HTMLZonosInvoiceOrderDetailsElement>;
            "zonos-invoice-payment": LocalJSX.IntrinsicElements["zonos-invoice-payment"] & JSXBase.HTMLAttributes<HTMLZonosInvoicePaymentElement>;
            "zonos-invoice-review": LocalJSX.IntrinsicElements["zonos-invoice-review"] & JSXBase.HTMLAttributes<HTMLZonosInvoiceReviewElement>;
            "zonos-invoice-subtotal": LocalJSX.IntrinsicElements["zonos-invoice-subtotal"] & JSXBase.HTMLAttributes<HTMLZonosInvoiceSubtotalElement>;
            "zonos-language-select": LocalJSX.IntrinsicElements["zonos-language-select"] & JSXBase.HTMLAttributes<HTMLZonosLanguageSelectElement>;
            "zonos-link": LocalJSX.IntrinsicElements["zonos-link"] & JSXBase.HTMLAttributes<HTMLZonosLinkElement>;
            "zonos-link-authentication": LocalJSX.IntrinsicElements["zonos-link-authentication"] & JSXBase.HTMLAttributes<HTMLZonosLinkAuthenticationElement>;
            "zonos-loading-overlay": LocalJSX.IntrinsicElements["zonos-loading-overlay"] & JSXBase.HTMLAttributes<HTMLZonosLoadingOverlayElement>;
            "zonos-logo": LocalJSX.IntrinsicElements["zonos-logo"] & JSXBase.HTMLAttributes<HTMLZonosLogoElement>;
            "zonos-notification": LocalJSX.IntrinsicElements["zonos-notification"] & JSXBase.HTMLAttributes<HTMLZonosNotificationElement>;
            "zonos-payment": LocalJSX.IntrinsicElements["zonos-payment"] & JSXBase.HTMLAttributes<HTMLZonosPaymentElement>;
            "zonos-paypal-payment": LocalJSX.IntrinsicElements["zonos-paypal-payment"] & JSXBase.HTMLAttributes<HTMLZonosPaypalPaymentElement>;
            "zonos-policy-consent": LocalJSX.IntrinsicElements["zonos-policy-consent"] & JSXBase.HTMLAttributes<HTMLZonosPolicyConsentElement>;
            "zonos-rest-state": LocalJSX.IntrinsicElements["zonos-rest-state"] & JSXBase.HTMLAttributes<HTMLZonosRestStateElement>;
            "zonos-review": LocalJSX.IntrinsicElements["zonos-review"] & JSXBase.HTMLAttributes<HTMLZonosReviewElement>;
            "zonos-select-dialog-header": LocalJSX.IntrinsicElements["zonos-select-dialog-header"] & JSXBase.HTMLAttributes<HTMLZonosSelectDialogHeaderElement>;
            "zonos-shipping": LocalJSX.IntrinsicElements["zonos-shipping"] & JSXBase.HTMLAttributes<HTMLZonosShippingElement>;
            "zonos-shipping-rich-radio": LocalJSX.IntrinsicElements["zonos-shipping-rich-radio"] & JSXBase.HTMLAttributes<HTMLZonosShippingRichRadioElement>;
            "zonos-skeleton": LocalJSX.IntrinsicElements["zonos-skeleton"] & JSXBase.HTMLAttributes<HTMLZonosSkeletonElement>;
            "zonos-spinner": LocalJSX.IntrinsicElements["zonos-spinner"] & JSXBase.HTMLAttributes<HTMLZonosSpinnerElement>;
            "zonos-store-credit": LocalJSX.IntrinsicElements["zonos-store-credit"] & JSXBase.HTMLAttributes<HTMLZonosStoreCreditElement>;
            /**
             * This component is input that has similar style to Stripe since we will use it with other Stripe elements when we don't want to use Link authentication element
             */
            "zonos-stripe-input": LocalJSX.IntrinsicElements["zonos-stripe-input"] & JSXBase.HTMLAttributes<HTMLZonosStripeInputElement>;
            "zonos-stripe-phone-input": LocalJSX.IntrinsicElements["zonos-stripe-phone-input"] & JSXBase.HTMLAttributes<HTMLZonosStripePhoneInputElement>;
            "zonos-stripe-select": LocalJSX.IntrinsicElements["zonos-stripe-select"] & JSXBase.HTMLAttributes<HTMLZonosStripeSelectElement>;
            "zonos-text": LocalJSX.IntrinsicElements["zonos-text"] & JSXBase.HTMLAttributes<HTMLZonosTextElement>;
            "zonos-toggle": LocalJSX.IntrinsicElements["zonos-toggle"] & JSXBase.HTMLAttributes<HTMLZonosToggleElement>;
            "zonos-tooltip": LocalJSX.IntrinsicElements["zonos-tooltip"] & JSXBase.HTMLAttributes<HTMLZonosTooltipElement>;
            "zonos-v-stack": LocalJSX.IntrinsicElements["zonos-v-stack"] & JSXBase.HTMLAttributes<HTMLZonosVStackElement>;
            /**
             * Virtual scroll component for efficiently rendering large lists
             * The idea is from:
             * @ref https://github.com/beenotung/stencil-virtual-scroll/blob/master/src/components/virtual-scroll-list/virtual-scroll-list.scss
             * @ref https://github.dev/ionic-team/ionic-framework/blob/v6.7.5/core/src/components/virtual-scroll/virtual-scroll.tsx
             */
            "zonos-virtual-scroll": LocalJSX.IntrinsicElements["zonos-virtual-scroll"] & JSXBase.HTMLAttributes<HTMLZonosVirtualScrollElement>;
        }
    }
}

type CalculateLandedCostAdjustmentInput = {
    amount: number;
    name?: string | null;
    productId: string | null;
    promoCode?: string | null;
    sku: string | null;
    type: LandedCostAdjustmentType;
};
type Extensions = {
    [key: string]: unknown;
} & {
    rule?: {
        description: string;
        id: string;
        name: string;
    };
    ruleMessageType?: 'CUSTOM' | 'DEFAULT';
    /** Set on shipment-rating errors emitted by a country constraint that blocked a service level. */
    source?: string;
};
type ApiError = {
    extensions?: Extensions | null;
    message: string;
};
type CalculateLandedCostRequest = {
    billingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
    billingContact: {
        firstName: string;
        lastName: string;
        phone: string;
    };
    checkoutSessionId: string;
    contact: {
        companyName?: string;
        email?: string;
        firstName: string;
        lastName: string;
        phone: string;
    };
    /**
     * When this is set, the created quote will not be shown on the Quote List page in the Zonos Dashboard.
     */
    isTest?: boolean;
    items: CartItem[];
    landedCostAdjustments?: CalculateLandedCostAdjustmentInput[];
    metadata?: {
        key: string;
        value: string;
    }[];
    /**
     * Short address code that the some destination countries require for the shipment.
     */
    shipToShortAddressCode?: string;
    /**
     * TaxId that the some destination countries require for the shipment.
     */
    shipToTaxId?: string;
    /**
     * Document kind selected in checkout. Mexico uses RFC or CURP.
     * Peru uses DNI, RUC, or CE.
     */
    shipToTaxIdType?: CheckoutTaxIdTypeValue;
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: CountryCode;
        postalCode: string;
        state: string;
    };
};

type NormalizedItemAttribute = {
    key: string;
    value: string;
};
type NormalizedTempCartItem = {
    amount: number;
    attributes: NormalizedItemAttribute[];
    countryOfOrigin: CountryCode | null;
    currencyCode: CurrencyCode;
    description: string | null;
    id: string;
    imageUrl: string | null;
    itemType: ItemType | null;
    measurements: {
        type: ItemMeasurementType;
        unitOfMeasure: ItemUnitOfMeasure;
        value: number;
    }[];
    metadata: {
        key: string;
        value: string;
    }[];
    name: string | null;
    productId: string | null;
    quantity: number;
    sku: string | null;
};
type NormalizedTempCart = {
    adjustments: {
        amount: number;
        currencyCode: CurrencyCode;
        description: string | null;
        productId: string | null;
        promoCode?: string | null;
        sku: string | null;
        type: CartAdjustmentType;
    }[];
    createdAt: string;
    credentialToken: string;
    expiresAt?: string | null;
    id: string;
    items: NormalizedTempCartItem[];
    metadata: {
        key: string;
        value: string;
    }[];
    references: {
        checkoutSessionId?: string | null;
        landedCostId?: string | null;
    } | null;
    storeBaseUrl: string;
    storeId: number;
    type: CartType;
};
type Settings = Omit<CartCheckoutWorkflowQuery['cartCheckoutWorkflow'], 'cart'> & LandedCostSettingsQuery & {
    genericSettings: GenericZonosSettings | null;
};
type CartCheckoutResult = {
    cartData: NormalizedTempCart;
    settings: Settings & {
        inclusivePriceConfigurations: InclusivePriceConfigurationResponse;
        organization: {
            id: string;
            name: string;
            references: {
                storeId: number | null;
            } | null;
        };
    };
    storeFaviconUrl: string;
    storeLogoUrl: string;
};

declare const stringsBase: {
    ' (Duties due at door)': {
        value: string;
    };
    ' (Duties prepaid)': {
        value: string;
    };
    '"[itemName]" is out of stock. Please remove it from your cart and try again.': {
        value: string;
    };
    'A confirmation email with your payment details has been sent for your records. If you have any questions or need support, our team is here to help.': {
        value: string;
    };
    'Above de minimis threshold for': {
        value: string;
    };
    'Add promotional code': {
        value: string;
    };
    Address: {
        value: string;
    };
    'Address 2': {
        value: string;
    };
    'Address line 1': {
        value: string;
    };
    'Address line 2': {
        value: string;
    };
    'Address line 3': {
        value: string;
    };
    Address1: {
        value: string;
    };
    Address2: {
        value: string;
    };
    Address3: {
        value: string;
    };
    'Adresa vulytsi': {
        value: string;
    };
    'Amount to apply: [amount]': {
        value: string;
    };
    'An unexpected error occurred when processing PayPal order.': {
        value: string;
    };
    Apply: {
        value: string;
    };
    'Apply full balance': {
        value: string;
    };
    'Are you sure?': {
        value: string;
    };
    Area: {
        value: string;
    };
    'Available balance: [amount]': {
        value: string;
    };
    Back: {
        value: string;
    };
    Billing: {
        value: string;
    };
    'Billing address': {
        value: string;
    };
    'Billing info': {
        value: string;
    };
    'By paying in USD, your card will be charged directly with no currency conversion. However, using a non-USD based card may result in additional currency conversion fees at the bank level.': {
        value: string;
    };
    CEDEX: {
        value: string;
    };
    'CPF/CNPJ number': {
        value: string;
    };
    CURP: {
        value: string;
    };
    Cancel: {
        value: string;
    };
    'Card number copied to clipboard': {
        value: string;
    };
    'Carn\u00E9 de extranjer\u00EDa': {
        value: string;
    };
    'Carn\u00E9 de extranjer\u00EDa must be 9 digits.': {
        value: string;
    };
    'Cart subtotal': {
        value: string;
    };
    City: {
        value: string;
    };
    'City/Town': {
        value: string;
    };
    'Click to copy the card number. Use any future expiration date and three number CVC.': {
        value: string;
    };
    'Click to pay in USD': {
        value: string;
    };
    Close: {
        value: string;
    };
    'Code postal': {
        value: string;
    };
    Commune: {
        value: string;
    };
    'Company name (optional)': {
        value: string;
    };
    'Complete your shipping address': {
        value: string;
    };
    Confirm: {
        value: string;
    };
    'Confirmation #:[confirmationId]': {
        value: string;
    };
    Contact: {
        value: string;
    };
    'Continue to international checkout': {
        value: string;
    };
    'Continue to shipping': {
        value: string;
    };
    "Couldn't place order": {
        value: string;
    };
    Country: {
        value: string;
    };
    County: {
        value: string;
    };
    'County or sector': {
        value: string;
    };
    Customer: {
        value: string;
    };
    'Customer information': {
        value: string;
    };
    'Customs charges for your recent purchase from [companyName] are available for payment': {
        value: string;
    };
    'Customs charges from your recent purchase are available for payment': {
        value: string;
    };
    'Customs fees total': {
        value: string;
    };
    DNI: {
        value: string;
    };
    'DNI must be 8 digits.': {
        value: string;
    };
    Delivery: {
        value: string;
    };
    'Delivery options': {
        value: string;
    };
    Department: {
        value: string;
    };
    Derzhava: {
        value: string;
    };
    Discounts: {
        value: string;
    };
    District: {
        value: string;
    };
    'Do/Si': {
        value: string;
    };
    "Don't close": {
        value: string;
    };
    'Due at delivery': {
        value: string;
    };
    'Due to the Australia tax law, all orders will be assessed at [percentage] GST regardless of order total.': {
        value: string;
    };
    'Due to the IOSS tax law, all orders will be assessed at [percentage] VAT regardless of order total.': {
        value: string;
    };
    'Due to the New Zealand tax law, all orders will be assessed at [percentage] GST regardless of order total.': {
        value: string;
    };
    'Due to the Singapore tax law, all orders will be assessed at [percentage] GST regardless of order total.': {
        value: string;
    };
    'Due to the UK tax law, all orders will be assessed at [percentage] VAT regardless of order total.': {
        value: string;
    };
    'Due to the VOEC tax law, all orders will be assessed at [percentage] VAT regardless of order total.': {
        value: string;
    };
    Duties: {
        value: string;
    };
    'Duties and fees': {
        value: string;
    };
    'Duties and fees included': {
        value: string;
    };
    'Duties and taxes will be applied to items and shipping.': {
        value: string;
    };
    'Duties and taxes will be charged upon delivery.': {
        value: string;
    };
    'Duties will apply to all orders.': {
        value: string;
    };
    'Duties will be charged upon delivery.': {
        value: string;
    };
    'Duties, taxes, and fees': {
        value: string;
    };
    'EORI number': {
        value: string;
    };
    Email: {
        value: string;
    };
    Emirate: {
        value: string;
    };
    'Enter amount': {
        value: string;
    };
    'Error creating Checkout': {
        value: string;
    };
    'Error updating Checkout': {
        value: string;
    };
    'Estimated [amount]': {
        value: string;
    };
    'Expected delivery': {
        value: string;
    };
    'Failed to create PayPal order. Please try again, or consider using an alternative method.': {
        value: string;
    };
    Failure: {
        value: string;
    };
    'Fedex Shipping Procedure': {
        value: string;
    };
    Fees: {
        value: string;
    };
    'First name': {
        value: string;
    };
    'Go to payment': {
        value: string;
    };
    Gorod: {
        value: string;
    };
    Guaranteed: {
        value: string;
    };
    Hide: {
        value: string;
    };
    'Hide non-prepaid options': {
        value: string;
    };
    "I agree to [merchantName]'s [policies]": {
        value: string;
    };
    'I agree to the [policies]': {
        value: string;
    };
    'If you later choose to exercise your right to withdrawal, you will be responsible for any associated return shipping costs, up to a maximum [amount].': {
        value: string;
    };
    'If you later choose to exercise your right to withdrawal, you will be responsible for any associated return shipping costs.': {
        value: string;
    };
    "If you select FedEx Ground as your shipping option, you'll need to complete a General Agency Agreement (GAA) after placing your order. This form allows FedEx to clear your package through Canadian customs on your behalf. FedEx will contact you directly\u2014usually by email or phone\u2014with instructions on how to complete the GAA. To avoid delays or the return of your package, please respond promptly to their request.": {
        value: string;
    };
    Indeks: {
        value: string;
    };
    'International shipping address detected': {
        value: string;
    };
    'Invalid CUIT/CUIL format. Must contain 11 digits, with or without dashes (XX-XXXXXXXX-X).': {
        value: string;
    };
    'Invalid CURP format. Must be 18 uppercase letters and numbers.': {
        value: string;
    };
    'Invalid RFC format. Must be 12\u201313 uppercase letters and numbers.': {
        value: string;
    };
    'Invalid promo code': {
        value: string;
    };
    'Invalid session': {
        value: string;
    };
    'Invalid short address code format. Must be 4 letters and 4 numbers.': {
        value: string;
    };
    'Invoice:': {
        value: string;
    };
    Island: {
        value: string;
    };
    'It looks like you placed an order recently ([date] at [time]) under order number #[orderNumber]. Check your email for the order confirmation. Are you sure you want to place another order?': {
        value: string;
    };
    'It looks like you placed an order recently ([date] at [time]). Check your email for the order confirmation. Are you sure you want to place another one?': {
        value: string;
    };
    'Keep shopping': {
        value: string;
    };
    'Know about duties and taxes before you buy. Shop with confidence!': {
        value: string;
    };
    Kodepos: {
        value: string;
    };
    'Last name': {
        value: string;
    };
    'Learn more.': {
        value: string;
    };
    Locality: {
        value: string;
    };
    'Missing required fields. Make sure all fields are completed.': {
        value: string;
    };
    Misto: {
        value: string;
    };
    Municipality: {
        value: string;
    };
    Name: {
        value: string;
    };
    'No countries found': {
        value: string;
    };
    'No payment method needed for staging': {
        value: string;
    };
    'No shipment rating selected. Please go back to the "Shipping" step and select a shipment rating to proceed.': {
        value: string;
    };
    'No shipping method selected': {
        value: string;
    };
    'No shipping methods found - please review and update your address details by selecting the "Customer" tab above. If you continue to encounter issues, contact our support team for assistance.': {
        value: string;
    };
    'No shipping methods found - try editing your address or contacting support if the error persists': {
        value: string;
    };
    'No store credit available': {
        value: string;
    };
    'Nothing due at delivery': {
        value: string;
    };
    'Nothing due at the door': {
        value: string;
    };
    OK: {
        value: string;
    };
    Oblast: {
        value: string;
    };
    'Order complete!': {
        value: string;
    };
    'Order details': {
        value: string;
    };
    'Order total': {
        value: string;
    };
    'Ordered from': {
        value: string;
    };
    'Orders to [countryName] must be over [threshold] to ship.': {
        value: string;
    };
    Parish: {
        value: string;
    };
    'Pay [orderTotal]': {
        value: string;
    };
    'Pay [organizationName]': {
        value: string;
    };
    'Pay [organizationName] duties, taxes and fees for your shipment': {
        value: string;
    };
    'Pay in USD (United States Dollar)?': {
        value: string;
    };
    Payment: {
        value: string;
    };
    'Payment failed': {
        value: string;
    };
    'Payment failed. Please reload the page and try another payment method.': {
        value: string;
    };
    'Payment failed. Please try another payment method.': {
        value: string;
    };
    'Payment method': {
        value: string;
    };
    "Payment processing. We'll update you when payment is received.": {
        value: string;
    };
    'Payment total': {
        value: string;
    };
    'Personal Customers Clearance Code': {
        value: string;
    };
    'Phone number': {
        value: string;
    };
    'Place order': {
        value: string;
    };
    'Place test order': {
        value: string;
    };
    'Please ensure your text uses the Latin alphabet only (A-Z, a-z).': {
        value: string;
    };
    'Please enter a valid email address.': {
        value: string;
    };
    'Please provide a mobile phone number.': {
        value: string;
    };
    'Please provide your first name.': {
        value: string;
    };
    'Please provide your last name.': {
        value: string;
    };
    'Poshtovyy indeks': {
        value: string;
    };
    'Postal code': {
        value: string;
    };
    Postcode: {
        value: string;
    };
    'Powered by': {
        value: string;
    };
    Prefecture: {
        value: string;
    };
    'Prepay duties and taxes at checkout': {
        value: string;
    };
    'Privacy policy': {
        value: string;
    };
    'Proceed with order': {
        value: string;
    };
    'Product prices already include duties and fees. No additional duties or fees will be added at checkout.': {
        value: string;
    };
    'Product prices already include duties, taxes and fees. No additional duties, taxes, or fees will be added at checkout.': {
        value: string;
    };
    'Product prices already include taxes. No additional taxes will be added at checkout.': {
        value: string;
    };
    Province: {
        value: string;
    };
    Quantity: {
        value: string;
    };
    RFC: {
        value: string;
    };
    'RFC or CURP number': {
        value: string;
    };
    RUC: {
        value: string;
    };
    'RUC must be 11 digits.': {
        value: string;
    };
    'Refund policy': {
        value: string;
    };
    Region: {
        value: string;
    };
    Reload: {
        value: string;
    };
    'Restricted item': {
        value: string;
    };
    'Restricted items found': {
        value: string;
    };
    'Return to cart': {
        value: string;
    };
    'Return to merchant site': {
        value: string;
    };
    'Save and continue': {
        value: string;
    };
    'Search countries': {
        value: string;
    };
    Sector: {
        value: string;
    };
    'See duty and tax thresholds': {
        value: string;
    };
    Select: {
        value: string;
    };
    'Select a country': {
        value: string;
    };
    'Select a language': {
        value: string;
    };
    'Selected address': {
        value: string;
    };
    'Session does not have valid landed cost. Please contact [organizationName] for assistance.': {
        value: string;
    };
    'Session timed out': {
        value: string;
    };
    'Shipment details': {
        value: string;
    };
    Shipping: {
        value: string;
    };
    'Shipping address': {
        value: string;
    };
    'Shipping address same as billing': {
        value: string;
    };
    'Shipping method': {
        value: string;
    };
    'Shipping policy': {
        value: string;
    };
    'Shopping cart expired': {
        value: string;
    };
    'Short address code': {
        value: string;
    };
    'Short address code is required.': {
        value: string;
    };
    Show: {
        value: string;
    };
    'Show non-prepaid options': {
        value: string;
    };
    'Something went wrong.': {
        value: string;
    };
    'Spend up to [threshold] duty free.': {
        value: string;
    };
    'Spend up to [threshold] tax free.': {
        value: string;
    };
    'Staging mode': {
        value: string;
    };
    State: {
        value: string;
    };
    'State or Territory': {
        value: string;
    };
    'State or province': {
        value: string;
    };
    'State/Province': {
        value: string;
    };
    'State/Province/Region/Prefecture': {
        value: string;
    };
    'Stay on this page': {
        value: string;
    };
    'Store credit': {
        value: string;
    };
    'Store credit covers your full order': {
        value: string;
    };
    'Street address': {
        value: string;
    };
    'Street address 2': {
        value: string;
    };
    'Street address 3': {
        value: string;
    };
    'Street or avenue': {
        value: string;
    };
    Subtotal: {
        value: string;
    };
    Success: {
        value: string;
    };
    'Tax id is required': {
        value: string;
    };
    'Tax id type': {
        value: string;
    };
    'Tax id type is required': {
        value: string;
    };
    Taxes: {
        value: string;
    };
    'Taxes and fees': {
        value: string;
    };
    'Taxes included': {
        value: string;
    };
    'Taxes will apply to all orders.': {
        value: string;
    };
    'Taxes, duties, and fees included': {
        value: string;
    };
    'Terms and conditions': {
        value: string;
    };
    'Test cards': {
        value: string;
    };
    'Test mode': {
        value: string;
    };
    'Thank you for submitting your payment. We appreciate your prompt attention.': {
        value: string;
    };
    'The field is incomplete': {
        value: string;
    };
    'The following items are unable to be shipped to your country and are not included in your cart total.': {
        value: string;
    };
    "The item you're looking for is currently unavailable in our inventory. Please check back later or contact support for assistance with availability.": {
        value: string;
    };
    'The low-value GST law passed July 1st, 2018 applies to this retailer.': {
        value: string;
    };
    'The purchase price covers duties, taxes and fees.': {
        value: string;
    };
    "There's been an error creating your checkout session. Please reload and try again or contact support if the error persists": {
        value: string;
    };
    "There's been an error updating your checkout session. Please reload and try again or contact support if the error persists": {
        value: string;
    };
    'This saved address is missing information required to ship internationally. Please add the details below.': {
        value: string;
    };
    'To ensure delivery all address details must be in Latin characters.': {
        value: string;
    };
    'Total paid': {
        value: string;
    };
    Town: {
        value: string;
    };
    'Town / City': {
        value: string;
    };
    'Town or city': {
        value: string;
    };
    'Translated address': {
        value: string;
    };
    Ulica: {
        value: string;
    };
    'Unable to apply store credit. Please try again.': {
        value: string;
    };
    'Unable to check inventory. Please try again.': {
        value: string;
    };
    'Unable to complete payment in [currency]. Please try again or select a different currency. If the issue persists, contact our support team for assistance.': {
        value: string;
    };
    'Unable to place order with store credit. Please try again.': {
        value: string;
    };
    'Unable to retrieve the checkout session at the moment. Please try again or contact our support team.': {
        value: string;
    };
    'Unique Labor Identification Code': {
        value: string;
    };
    'Update address': {
        value: string;
    };
    'Update your address': {
        value: string;
    };
    'Use store credit': {
        value: string;
    };
    'View GAA Form.': {
        value: string;
    };
    'View receipt': {
        value: string;
    };
    Village: {
        value: string;
    };
    'Warranty policy': {
        value: string;
    };
    "We couldn't complete your payment. Please verify the payment details and try again.": {
        value: string;
    };
    'We detected that you are shipping to a domestic address.': {
        value: string;
    };
    'We detected that you are shipping to an international address.': {
        value: string;
    };
    "We've sent an email confirmation of the order details for your review. And our team is carefully preparing your order so it arrives on time.": {
        value: string;
    };
    'Welcome to [storeName]': {
        value: string;
    };
    'Welcome!': {
        value: string;
    };
    'What you entered': {
        value: string;
    };
    'Would you like to close checkout and return to the site?': {
        value: string;
    };
    'You are being sent back to the shop to re-add items to your cart.': {
        value: string;
    };
    'You may incur additional fees from the shipping carrier by not prepaying.': {
        value: string;
    };
    'You must accept the policies to place this order': {
        value: string;
    };
    "You will be redirected back to the merchant's site in a few seconds.": {
        value: string;
    };
    'You will be redirected to domestic checkout shortly.': {
        value: string;
    };
    'You will be redirected to international checkout shortly.': {
        value: string;
    };
    "You're all set!": {
        value: string;
    };
    'Your [zipLabel] is invalid': {
        value: string;
    };
    'Your checkout session has expired. Please reload the page to continue.': {
        value: string;
    };
    'Your mobile phone number is incomplete.': {
        value: string;
    };
    'Your order has been successfully placed.': {
        value: string;
    };
    'Your payment went through successfully! Thank you for shopping with us! We hope you had an enjoyable experience and your support means the world to us.': {
        value: string;
    };
    'Your selected address ships internationally. Would you like to continue to international checkout, or stay here and select a domestic address?': {
        value: string;
    };
    'Your selected payment method requires additional verification. Please follow the instructions provided by your payment provider to complete the transaction.': {
        value: string;
    };
    'ZIP code': {
        value: string;
    };
    Zip: {
        value: string;
    };
    '[fieldLabel] is [currentLength] characters. Please shorten to [maxLength] or less or move the rest to address line 2.': {
        value: string;
    };
    '[fieldLabel] is [currentLength] characters. Please shorten to [maxLength] or less.': {
        value: string;
    };
    '[percentage] GST due on any order above [threshold].': {
        value: string;
    };
    'business days': {
        value: string;
    };
    'click to learn more': {
        value: string;
    };
    days: {
        value: string;
    };
    'restricted items': {
        value: string;
    };
    weeks: {
        value: string;
    };
};

type ITranslationKey = keyof typeof stringsBase;

type BuildLandedCostParams = {
    billingAddress: CalculateLandedCostRequest['billingAddress'];
    billingContact: CalculateLandedCostRequest['billingContact'];
    checkoutSessionId: string;
    contact: CalculateLandedCostRequest['contact'];
    landedCostAdjustments?: CalculateLandedCostRequest['landedCostAdjustments'];
    publicCredential: string;
    shippingAddress: CalculateLandedCostRequest['shippingAddress'];
    zonosApiRoute: string;
};
type BuildLandedCostResponse = (CalculateLandedCostMutation & {
    errors: ApiError[];
}) | null;

type ZonosOrder = GetOrderQuery['order'];

type BuildCardDetailParams = {
    countryCode: CountryCode;
    currencyCode: CurrencyCode;
};
type PromiseOrValue<T> = T | Promise<T>;
type PrefillAddress = {
    customerAddress1: string;
    customerAddress2?: string;
    customerCity?: string;
    /**
     * If country is not provided, it will try to pull from query params `zCountry` or `country` or `customerCountry` in the URL or fallback to user's selected country
     */
    customerCountry?: string;
    customerEmail: string;
    /**
     * Will use this value to prefill the first name field in the checkout form instead of `customerName`
     */
    customerFirstName: string;
    /**
     * Will use this value to prefill the last name field in the checkout form instead of `customerName`
     */
    customerLastName: string;
    /**
     * Will use this value to prefill if customerFirstName and customerLastName are not provided
     * @deprecated Use `customerFirstName` and `customerLastName` since Checkout uses 2 inputs for first and last name, there is not a good way to split the name into first and last name for some countries.
     */
    customerName?: string;
    customerPhone: string;
    customerState?: string;
    customerZip: string;
};
type CreateCartIdObject = {
    cartId: string;
    /**
     * Optional informational message rendered as a single info banner under the
     * Order total in Checkout. Each item in the array appears on a new line of
     * the same banner. Markdown links (`[text](url)`) are rendered as `<a>` tags.
     */
    customMessage?: string[];
    customerAuthenticationToken?: string;
    shippingData?: PrefillAddress | null;
};
type CheckoutConfig = {
    /**
     * Validate address to allow specific character sets
     * @default ALL
     */
    allowedCharacterSets?: 'ALL' | 'LATIN';
    /**
     * Enable settlement currencies to pay in USD
     * @default LOCAL
     */
    allowedSettlementCurrencies: AllowedSettlementCurrencies;
    /**
     * Always trigger International Checkout with this selector regardless of shipping zone
     */
    alwaysTriggerInternationalCheckoutSelector?: string | null;
    analyticsProviders: Array<{
        status: AnalyticsProviderStatus;
        type: AnalyticsProviderType;
    }>;
    /**
     * BigCommerce-specific identifiers forwarded by the Zonos loader script.
     * Consumed by runtime code that needs to hit the demo-app proxy on behalf
     * of a specific BigCommerce store (e.g. the `/checkouts/settings`
     * force-login check).
     */
    bigCommerceConfig?: {
        storeHash: string;
    };
    /**
     * Time that payment will be captured after the order is placed. Can't be overridden in Zonos.init
     */
    captureDelay?: number;
    /**
     * @default DISABLED - when false, company fields would not show up in the checkout form
     */
    companyFieldsStatus: 'ENABLED' | 'DISABLED';
    /**
     * Duration (in seconds) for which the cart remains valid for checkout in hosted checkout.
     * @default 3_600 (1 hour)
     */
    defaultCartExpiration?: number;
    /**
     * @default false - when false, the place order button will be disabled until the script is loaded
     * @note if set to true, the place order button will not be enabled or disabled
     */
    disablePlaceOrderButtonActivation?: boolean;
    /**
     * CSS selector for storefront elements that should be hidden once the
     * shopper is in a Zonos shipping zone (body has the `z-intl` class).
     * @description The selector is applied inside a `body.z-intl :is(...)`
     * rule that Zonos injects after settings load, so merchants don't need
     * to repeat `.z-intl` themselves. Multiple comma-separated selectors are
     * supported (e.g. `.cart-tax, .cart-shipping`).
     */
    domesticElementSelector?: string | null;
    externalPaymentMethods: Array<{
        status: ExternalPaymentMethodStatus;
        type: ExternalPaymentMethodType;
    }> | null;
    externalServiceTokens: {
        token: string;
        type: ExternalServiceTokenType;
    }[];
    /**
     * Merchant-configured policy URLs the buyer must consent to before placing an
     * order. Any policy whose `link` is null/empty is hidden from the consent UI.
     * The wrapping object lets the schema add fields (e.g. display name) later
     * without breaking existing consumers.
     */
    merchantPolicyLinks: {
        /**
         * EU right-of-withdrawal policy. When `status` is ENABLED, EU buyers see a
         * notice above the Pay button about return shipping costs they may owe.
         * Optional so configs written before this field existed still type-check.
         */
        euWithdrawalPolicy?: {
            currencyCode: CurrencyCode;
            maximumReturnShippingEstimate: number | null;
            status: NotificationActiveStatus | null;
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
        termsAndConditions: {
            link: string | null;
        } | null;
        warrantyPolicy: {
            link: string | null;
        } | null;
    } | null;
    /**
     * Test mode for checkout (sandbox or production)
     * @default TEST
     */
    mode: Mode;
    /**
     * Platform plugins. BigCommerce `allowBypassQuery` comes from the
     * zonos-settings response. The storefront does not default it on.
     */
    plugins?: {
        bigcommerce?: {
            /**
             * When `true`, a `zBypass` query on the BigCommerce checkout page skips
             * address detection for that page load. The parameter is removed from the
             * URL after it is read. `false` or omitted ignores the parameter.
             */
            allowBypassQuery?: boolean;
        };
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
    organization: string;
    /**
     * Place order button selector that only trigger International Checkout when shopper is in merchant's shipping zones
     */
    placeOrderButtonSelector: string | null;
    /**
     * @param subscriptionStatus subscription status for checkout, checkout only available if subscription status is ENABLED and visibility status is ENABLED
     *
     * **NOTE: this value can't be overridden in Zonos.init**
     */
    subscriptionStatus: CheckoutSubscriptionStatus;
    successBehavior: CheckoutSuccessBehavior;
    /**
     * The success page action text for checkout.
     * @note Default text supports translation automatically, but any custom text will not be translated.
     */
    successPageActionText?: string;
    /**
     * The success page subtitle text for checkout. Each item in the array will appear on a new line.
     * @note Default text supports translation automatically, but any custom text will not be translated.
     */
    successPageSubtitleText?: string[];
    /**
     * The success page title text for checkout.
     * @note Default text supports translation automatically, but any custom text will not be translated.
     */
    successPageTitleText?: string;
    /**
     * The URL to redirect to after a successful checkout.
     *
     * - When `successBehavior` is `REDIRECT_TO_SUCCESS_PAGE`, Checkout polls for the Zonos order and then redirects, appending `zOrderNumber` (and `orderId` for legacy).
     * - When `successBehavior` is `CLOSE_MODAL` and this URL is provided, Checkout redirects immediately after payment without waiting for the order, appending `zonosCheckoutSessionId`.
     *   In this flow Checkout does not poll for the order, so `onOrderSuccess` is **not** invoked as part of the redirect. The merchant should use `zonosCheckoutSessionId` on their success page (via the `checkoutSession` GraphQL query) to fetch the order details.
     */
    successRedirectUrl: string;
    visibilityStatus: CheckoutVisibilityStatus;
    /**
     * Cart info callback for checkout (optional),
     * @deprecated This is deprecated in favor of the new callback `createCartId`. The new API would only need the cart ID to retrieve cart data.
     * @note will attempt to use cart data if available
     * User can dispatch an event 'zonos--init-cart-info' to update the cart
     * @example
     * const initEvent = new CustomEvent<CartItem[]>('zonos--init-cart-info', {
     *    detail: cartItems,
     * });
     * document.body.dispatchEvent(initEvent);
     * @returns {object[]} - object with the the item info to be added to cart:
     * - amount: number;
     * - countryOfOrigin?: string;
     * - currencyCode: string;
     * - description?: string;
     * - hsCode?: string;
     * - imageUrl?: string;
     * - name: string;
     * - productId?: string;
     * - quantity: number;
     */
    buildCartDetail?: (params: BuildCardDetailParams) => Promise<CartItem[]>;
    /**
     * Calculate landed cost callback for checkout (optional)
     * @deprecated This is deprecated in favor of the new callback `createCartId`. When using the new callback, the cart details will be retrieved using the cart ID, so this callback would no longer be needed.
     * @note will attempt to use cart data if available
     */
    buildLandedCost?: (params: BuildLandedCostParams) => Promise<BuildLandedCostResponse>;
    /**
     * A callback that returns the cart id from `cartCreate` mutation. You would use your cart data to call the `cartCreate` mutation and return the cart ID that was created.
     * @note
     * The mutation `cartCreate` should be called on the server side
     * @returns string - Cart ID
     */
    createCartId?: () => PromiseOrValue<string | CreateCartIdObject>;
    /**
     * Callback trigger when the checkout is closed
     */
    onClose?: () => void;
    /**
     * This callback is optional. If provided, it will be called right before the payment is processed.
     * @param items - The cart items.
     * @returns {string | null} - The error message to display to the user. If the message is empty or null, the payment will proceed.
     * @example
     * onInventoryCheck: async ({ items }) => {
     *   // Check if all items are available from the server. If the fetch is throwing an error, show a generic error message "Unable to check inventory. Please try again.".
     *   const itemsInfo = await fetch('https://yourserver.com/api/get-available-items', {
     *     method: 'POST',
     *     body: JSON.stringify({ items }),
     *   });
     *   const items = await itemsInfo.json();
     *   // Filter out unavailable items.
     *   const unavailableItems = items.filter(item => !item.available);
     *   if (unavailableItems.length) {
     *     // Display an error message to the user.
     *     return `The following items are not available: ${unavailableItems.map(item => item.name).join(', ')}`;
     *   }
     *   // Proceed with the payment if you return an empty string or null.
     *   return '';
     * }
     */
    onInventoryCheck?: (params: {
        items: CartItem[];
    }, helpers?: {
        /**
         * The URL for the Zonos API.
         */
        zonosApiRoute: string;
        /**
         * Utility function to translate strings.
         */
        translate: (key: ITranslationKey) => string;
    }) => Promise<string | null>;
    /**
     * Callback trigger when payment succeeds
     */
    onOrderSuccess?: (props: {
        zonosApiRoute: string;
        zonosOrder: ZonosOrder;
    }) => Promise<void>;
};

type CountryOverrideBehavior = 'URL_PARAM' | 'SESSION';
/**
 * @deprecated Use `countryDisplayRules.widgetVisibility.behavior` instead.
 * Can still be set to override `countryDisplayRules.widgetVisibility.behavior`.
 */
type ShowForCountries = 'ALL' | 'ONLY_SHIPPABLE' | CountryCode[];
/**
 * @deprecated Use `countryDisplayRules.countrySelector.behavior` instead.
 * Can still be set to override `countryDisplayRules.countrySelector.behavior`.
 */
type ShowCountryList = 'ALL' | 'ONLY_SHIPPABLE' | CountryCode[];
type CountryDisplayRules = HelloSettingFragment['countryDisplayRules'];
type HelloConfig = {
    anchorElementSelector: string;
    cartUrlPattern: string | null;
    /**
     * Rules for controlling country display in the Hello widget.
     * Provides fine-grained control over which countries appear in the country selector dropdown
     * and which countries the widget is visible for, with include/exclude lists.
     */
    countryDisplayRules?: CountryDisplayRules;
    /**
     * The behavior to use when determining the country to use for the user.
     * @default 'URL_PARAM'
     */
    countryOverrideBehavior?: CountryOverrideBehavior;
    currencyBehavior: HelloCurrencyBehavior;
    currencyElementSelector: string;
    desktopLocation?: HelloDesktopLocation | null;
    /**
     * Fine-grained float placement (corner anchor + pixel offsets) from settings.
     * Distinct from the component `@Prop` of the same name, which remains an enum.
     * @default null
     */
    desktopLocationOverride?: HelloSettingFragment['desktopLocationOverride'];
    excludedUrlPatterns: Array<string>;
    homepageUrlPattern: string | null;
    mobileLocation: HelloMobileLocation | null;
    /**
     * Fine-grained float placement for mobile viewports from settings.
     * Distinct from the component `@Prop` of the same name, which remains an enum.
     * @default null
     */
    mobileLocationOverride?: HelloSettingFragment['mobileLocationOverride'];
    mode: Mode;
    /**
     * Position of floating hello if `anchorElementSelector` is not found after 3 seconds
     *
     * null: don't render if not found
     *
     * @default null
     */
    notFoundElementFallback: HelloMobileLocation | null;
    organization: string;
    peekMessageBehavior: HelloPeekMessageBehavior;
    peekMessageDelay: number;
    productAddToCartElementSelector: string | null;
    productDescriptionElementSelector: string | null;
    productDetailUrlPattern: string | null;
    productListUrlPattern: string | null;
    productTitleElementSelector: string | null;
    restrictionBehavior: HelloRestrictionBehavior;
    /**
     * @deprecated Use `countryDisplayRules.countrySelector` instead.
     * When set, overrides `countryDisplayRules.countrySelector.behavior`.
     * @default ONLY_SHIPPABLE
     */
    showCountryList?: ShowCountryList;
    /**
     * @deprecated Use `countryDisplayRules.widgetVisibility` instead.
     * When set, overrides `countryDisplayRules.widgetVisibility.behavior`.
     * @default ONLY_SHIPPABLE
     */
    showForCountries?: ShowForCountries;
    visibilityStatus?: 'ENABLED' | 'DISABLED';
    /**
     * Diameter of the collapsed Hello widget in pixels. Clamped to the supported
     * range at render time. When `null`, the widget falls back to the default size.
     */
    widgetSize: number | null;
    /**
     * Callback function to run after the Hello widget has been initialized. This should be triggered only once when hello is attached to the DOM.
     * **Note**: If hello is detached from the DOM and reattached, this callback will be called again.
     * @param params - The parameters containing the country code and currency code that hello is initialized with.
     */
    onInitSuccess?: (params: {
        countryCode: CountryCode;
        currencyCode: CurrencyCode;
    }) => Promise<void>;
};

declare const fallbackApiType: readonly ["cloudflare", "vercel"];
type FallBackApiType = (typeof fallbackApiType)[number];

type LogBulkLoadRequestPayload = {
    data: {
        apiType: FallBackApiType;
        connectionType?: string;
        href: string;
        isHostedCheckout: boolean;
        isMobile: boolean;
        loadTimeBrowserApi: number;
        loadTimeInternal: number;
        loadTimeTotal: number;
        metadata: Record<string, unknown>;
        screenHeight: number;
        screenWidth: number;
        userAgent: string;
    }[];
    storeId: number;
};

type AppearanceConfig = {
    colorPrimary?: string;
    colorSecondary?: string;
    fontFamily: string;
    fontSize2XL?: number;
    fontSize3XL?: number;
    fontSizeBase?: number;
    fontSizeInputLabel?: number;
    fontSizeInputValue?: number;
    fontSizeL?: number;
    fontSizeS?: number;
    fontSizeXL?: number;
    fontSizeXS?: number;
    logoUrl: string;
    style: ElementsUiStyle;
    /**
     * Locales the merchant offers in the language selector, as lowercase codes.
     * `null` offers every locale Elements supports. Plain `string[]`, matching the
     * `[String!]` the settings graph sends — a merchant's saved list is data, not a
     * compile-time constant, so `getSupportedLanguages` drops codes it can't render.
     */
    supportedLocales: string[] | null;
    theme: ElementsUiTheme;
    zonosAttribution: ZonosAttribution | null;
};

type LoadTimeApiLogInfo = LogBulkLoadRequestPayload['data'][number];

type TrackEventLog = {
    checkoutSessionId: string | null;
    eventCreated: number;
    eventName: string;
};
/**
 * Currency converter function to be used in Hello and Checkout
 * @note don't modify the element directly in this function, otherwise it might cause unexpected behavior like an infinite loop
 */
type CurrencyConverter = (props: {
    /**
     * Current currency code
     */
    currencyCode: CurrencyCode;
    /**
     * The original amount before conversion
     */
    originalAmount: number;
    /**
     * HTML element matching the selector specified in the helloSettings init
     */
    selector: HTMLElement;
    /**
     * Convert the amount to the target currency in Hello (no locale format)
     * @param convert amount
     * @return number
     * @example
     * const price = 100; // in USD
     * convert(100) // return 136.5 when selected country in Hello is Canada
     */
    convert: (amount: number) => number;
    /**
     * Convert the amount to the target currency and format it in Hello with locale formatting
     * @param amount
     * @returns string - CA$136.50
     * @example
     * const price = 100;
     * convertAndFormat(100) // return CA$136.50 when selected country in Hello is Canada
     */
    convertAndFormat: (amount: number) => string;
    /**
     * Format the given amount to locale format
     * @param amount
     * @returns string - CA$100.00
     * @example
     * const price = 100
     * format(100) // return CA$100.00 when selected country in Hello is Canada
     */
    format: (amount: number) => string;
}) => string;
/**
 * This function will use the `Intl.NumberFormat` API to format the number with native decimal and thousand separators
 */
type NumberFormat = (props: {
    amount: number;
}) => string;
type LoadZonosParamsConfig = {
    appearance?: Partial<AppearanceConfig>;
    checkoutSettings?: Partial<CheckoutConfig>;
    /**
     * Currency converter function to be used in Hello and Checkout
     * @note don't modify element directly in this function, otherwise it might cause unexpected behavior like an infinite loop
     */
    currencyConverter?: CurrencyConverter;
    helloSettings?: Partial<HelloConfig>;
    /**
     * Hello and Checkout are using the Intl.NumberFormat API to format the currency. You can either use the default currency display or customize it.
     *
     * ### There are 3 options to customize the currency format:
     * @option1 Simple currency display change
     * @example
     * Price: "1200.99"
     * End result: "$1,200.99"
     *
     * Zonos.init({
     *   overrideCurrencyFormat: {
     *     currencyDisplay: 'symbol'
     *   }
     * });
     * ------
     * @option2 Customize currency format (use `convert` and `format` in `currencyConverter`)
     * @note This function would override the default behavior of `format`, and `convertAndFormat` function inside of `CurrencyConverter`
     * @note You can combine this function with `currencyConverter` to customize the currency format
     * @example
     * Price:  "1200.99"
     * End result: "USD - 1,200.99"
     *
     * Zonos.init({
     *   // `format` function in `currencyConverter` will trigger this function instead.
     *   overrideCurrencyFormat: ({ amount, currencyCode, numberFormat }) => {
     *     return `- ${numberFormat({ amount })}`;
     *   }
     *   currencyConverter: ({ convert, currencyCode, originalAmount, selector }) => {
     *      const convertedAmount = convert(originalAmount);
     *      // `format` function will call `overrideCurrencyFormat` function instead and it will just format the converted amount
     *      const formattedAmount = `${currencyCode} ${format(convertedAmount)}`;
     *      selector.innerText = formattedAmount;
     *
     *      revealPrice();
     *      return formattedAmount;
     *    },
     * });
     *
     * ------
     * @option3 Customize currency format (use `convertAndFormat`)
     * @example
     * Price: "1200.99"
     * End result: "USD - 1,200.99"
     *
     * Zonos.init({
     *   // `format` function in `currencyConverter` will trigger this function instead.
     *   overrideCurrencyFormat: ({ amount, currencyCode, numberFormat }) => {
     *     return `${currencyCode} - ${numberFormat({ amount })}`;
     *   }
     *   currencyConverter: ({ convertAndFormat, originalAmount, selector }) => {
     *      // `convertAndFormat` function calls `format` under the hood, so it will also call `overrideCurrencyFormat` function
     *      const convertedAndFormatedAmount = convertAndFormat(originalAmount);
     *      selector.innerText = convertedAndFormatedAmount;
     *
     *      revealPrice();
     *      return formattedAmount;
     *    },
     * });
     */
    overrideCurrencyFormat?: {
        /**
         * `currencyDisplay` option in Intl.NumberFormat
         * @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay
         * @default 'symbol'
         *
         * @note These options won't apply, and will use '{amount} {currencyCode}' if the browser is IE.
         */
        currencyDisplay?: 'symbol' | 'code' | 'name' | 'narrowSymbol';
    }
    /**
     * Custom currency format function to be used in Hello and Checkout.
     * @note This function would override the default behavior of `format` function inside of `CurrencyConverter`
     * @note You can combine this function with `currencyConverter` to customize the currency format
     */
     | ((params: {
        /**
         * Amount to be formatted
         */
        amount: number;
        /**
         * Current selected currency code
         */
        currencyCode: CurrencyCode;
        /**
         * This function will use the `Intl.NumberFormat` API to format the number with native decimal and thousand separators
         */
        numberFormat: NumberFormat;
    }) => string);
    /**
     * Callback to be called when the country is changed
     */
    onCountryChange?: (props: {
        /**
         * @param countryCode Updated country code
         */
        countryCode: CountryCode;
        /**
         * @param currencyCode Updated currency code (null if the selected country is not in shipping zone as hello won't do currency conversion for non-shipping zone countries)
         */
        currencyCode: CurrencyCode | null;
        /**
         * @param isShippableCountry Flag to indicate if the selected country is in shipping zone
         */
        isShippableCountry: boolean;
    }) => void;
};
type LoadZonosParams = LoadZonosParamsConfig & {
    storeId?: number;
    /**
     * If cart id is provided in the url with query param zCartUUID, you don't need to provide zonosApiKey
     */
    zonosApiKey?: string;
};
interface Zonos {
    /**
     * Mock error response for Paypal. Mainly used for testing purposes
     */
    _paypalMockResponse: PaypalMockResponse | null;
    /**
     * Cart detail callback exposed from `checkoutSettings.buildCartDetail` on init.
     * Used to decide whether Stripe should be loaded.
     */
    buildCartDetail: CheckoutConfig['buildCartDetail'];
    cartData: NormalizedTempCart | null;
    cartId: string | null;
    /**
     * Cart settings from `getCartCheckout`
     */
    cartSettings: CartCheckoutResult['settings'] | null;
    /**
     * Cart id callback exposed from `checkoutSettings.createCartId` on init.
     * Used to decide whether Stripe should be loaded.
     */
    createCartId: CheckoutConfig['createCartId'];
    /**
     * Toggle debug mode (add query param 'zonosDebug=1' to url)
     * @default false
     */
    debug?: boolean;
    domain: string;
    doneInit: boolean;
    /**
     * Facebook Pixel ID (numeric string). Set from cart metadata or custom script.
     * When in iframe, used to tell parent's analyticsRelay to inject and configure the FB Pixel.
     */
    facebookPixelId: string | null;
    /**
     * True when FB Pixel is enabled and ready (either not in iframe, or parent relay has confirmed fbq ready).
     */
    facebookPixelReady: boolean;
    /**
     * Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX). Set from cart metadata or custom script.
     * When in iframe, used to tell parent's analyticsRelay to inject and configure GA.
     */
    googleAnalyticId: string | null;
    /**
     * True when GA is enabled and ready (either not in iframe, or parent relay has confirmed gtag ready).
     */
    googleAnalyticReady: boolean;
    /**
     * Log type for iframe, print out console or not
     */
    iframeLogType: string | null;
    isBigCommerce: boolean;
    /**
     * Settled native-checkout answer for `isBigCommerceNativeCheckoutPath`.
     * `undefined` means that checkout path is still waiting for host detection.
     */
    isBigCommerceNativeCheckout?: boolean;
    /** Pathname `isBigCommerceNativeCheckout` was settled for. */
    isBigCommerceNativeCheckoutPath?: string;
    /**
     * This will be set to true when it's called form collect
     */
    isCollect: boolean;
    /**
     * This will be set to true when it's called form invoice
     */
    isInvoice: boolean;
    /**
     * This will be set to true when it's called form legacy checkout
     */
    isLegacyCheckout: boolean;
    isNpm: boolean;
    loadTimeApiInfoList: LoadTimeApiLogInfo[];
    logIntervalId: NodeJS.Timeout | null;
    /** Flag if already alerted when preview domain is defined and it's connecting production environment */
    modeAlerted: boolean;
    /**
     * Override the default behavior of using the custom address form
     */
    overrideUseCustomAddressForm: boolean;
    paypal: PayPalNamespace | null;
    /**
     * Version release timestamp
     */
    releaseDate: string;
    /**
     * Show toggle on checkout modal to show amount in base or foreign currency.
     * Set this to true or set param `zonosShowBaseForeign=1` in url to show the toggle
     * @default false
     */
    showBaseForeign: boolean;
    /**
     * The time that loadZonos.js started to load
     */
    startLoadTime: number;
    storeId?: number;
    /** Stripe instance */
    stripe: Stripe;
    /**
     * Logs of tracking events
     */
    trackEventLogs: TrackEventLog[];
    version: string;
    zonosApiKey?: string;
    /**
     * Flag to send tracking event to api for conversion testing, since we don't send tracking event to api when in debug/development mode
     */
    zonosConversionTest?: boolean;
    /**
     * Zonos mode
     */
    zonosMode: 'production' | 'test' | null;
    zonosQaUrl: string | null;
    zonosQaUrlApi: string | null;
    displayCurrency: () => void;
    getCurrentTimestamp: () => number;
    init: (params: LoadZonosParams) => Promise<void>;
    injectSupportGoogleFont: (fontUrl: string) => void;
    openHelloDialog: (state?: boolean) => void;
    setupGoogleFont: (fontFamily: string) => void;
    showNotification: (props: NotificationInit) => void;
    /**
     * Trigger the checkout international button, always trigger Checkout even user are not in shipping zone
     */
    triggerCheckoutInternational: () => void;
    updateOrganizationName: (organizationName: string) => void;
}
declare abstract class Zonos {
    static zonosApiKey?: string;
    static stripe: Stripe;
    static storeId?: number;
    static doneInit: boolean;
    static cartSettings: CartCheckoutResult['settings'] | null;
    static debug: boolean;
    static zonosConversionTest: boolean;
    static _paypalMockResponse: PaypalMockResponse | null;
    static iframeLogType: string | null;
    static isBigCommerce: boolean;
    /**
     * Settled native-checkout answer for `isBigCommerceNativeCheckoutPath`.
     * Stored on `window.Zonos` so loadZonos.js, zonos.js, and the component
     * bundle read the same value. `undefined` means that checkout path is
     * still waiting for host detection.
     */
    static isBigCommerceNativeCheckout?: boolean;
    /** Pathname `isBigCommerceNativeCheckout` was settled for. */
    static isBigCommerceNativeCheckoutPath?: string;
    static releaseDate: string;
    static isLegacyCheckout: boolean;
    static googleAnalyticId: string | null;
    static googleAnalyticReady: boolean;
    static facebookPixelId: string | null;
    static facebookPixelReady: boolean;
    static startLoadTime: number;
    static domain: string;
    static showBaseForeign: boolean;
    static overrideUseCustomAddressForm: boolean;
    static isCollect: boolean;
    static isInvoice: boolean;
    /**
     * By default, the package will load from npm
     */
    static isNpm: boolean;
    static zonosQaUrl: string | null;
    static zonosQaUrlApi: string | null;
    static trackEventLogs: TrackEventLog[];
    static version: string;
    static modeAlerted: boolean;
    static cartData: NormalizedTempCart | null;
    static paypal: PayPalNamespace | null;
    static zonosMode: 'production' | 'test' | null;
    static IframeService: typeof IframeService;
    static getCurrentTimestamp: () => number;
    static cartId: string | null;
    static createCartId: CheckoutConfig['createCartId'];
    static buildCartDetail: CheckoutConfig['buildCartDetail'];
    private static zonosController;
    static loadTimeApiInfoList: LoadTimeApiLogInfo[];
    static logIntervalId: NodeJS.Timeout | null;
    static init: (params: LoadZonosParams) => Promise<void>;
    /**
     * Inject the hidden international checkout button to trigger checkout regardless of shipping zones
     */
    private static injectCheckoutInternationalButton;
    private static injectCustomScriptForHostedCheckout;
    static displayCurrency: () => void;
    static triggerCheckoutInternational: () => Promise<void>;
    static openHelloDialog: (value?: boolean) => void;
    static showNotification: (notification: NotificationInit) => void;
    static updateOrganizationName: (organizationName: string) => void;
    private static disablePlaceOrderButtons;
    /**
     * Zonos elements and its dependencies are using the native browser functions.
     * This function will restore the native browser functions that are overridden by the merchant's polyfills.
     * If the URL parameter `useMerchantPolyfill=1` is present, keep the merchant's polyfills instead of restoring native browser functions. This allows testing checkout compatibility with merchant polyfills.
     */
    private static restoreNativeBrowserFunctions;
    private static injectController;
    private static injectScript;
    /**
     * We now support loading Zonos via npm. For clients using npm, `zonosBase` will always load from the server side. Therefore, the `zonosLoadUrl` defined earlier won't work since it lacks access to client-side APIs such as `window` and `document`.
     */
    private static getZonosUrl;
    private static injectZonosCdn;
    private static injectStylesheet;
    private static injectZonosCss;
    private static injectFonts;
    static setupGoogleFont: (fontFamily: string) => void;
    static injectSupportGoogleFont: (fontUrl: string) => void;
}

export { Zonos };
