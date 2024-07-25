import { StripeConstructor, StripeAddressElementChangeEvent, ContactOption, PaymentIntent, Stripe } from '@stripe/stripe-js';
import { BrowserOptions } from '@sentry/browser';
import { z } from 'zod';
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';

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
};
type ExchangeRateType = (typeof exchangeRateType)[keyof typeof exchangeRateType];
declare const helloCurrencyBehavior: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type HelloCurrencyBehavior = (typeof helloCurrencyBehavior)[keyof typeof helloCurrencyBehavior];
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
declare const incotermCode: {
    readonly Cif: "CIF";
    readonly Custom: "CUSTOM";
    readonly Dap: "DAP";
    readonly Ddp: "DDP";
    readonly Fob: "FOB";
};
type IncotermCode = (typeof incotermCode)[keyof typeof incotermCode];
declare const itemMeasurementType: {
    readonly Height: "HEIGHT";
    readonly Length: "LENGTH";
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
    readonly Foot: "FOOT";
    readonly Gram: "GRAM";
    readonly Inch: "INCH";
    readonly Kilogram: "KILOGRAM";
    readonly Meter: "METER";
    readonly Millimeter: "MILLIMETER";
    readonly Ounce: "OUNCE";
    readonly Pound: "POUND";
    readonly Yard: "YARD";
};
type ItemUnitOfMeasure = (typeof itemUnitOfMeasure)[keyof typeof itemUnitOfMeasure];
declare const landedCostAdjustmentType: {
    readonly CartTotal: "CART_TOTAL";
    readonly Item: "ITEM";
    readonly Shipping: "SHIPPING";
};
type LandedCostAdjustmentType = (typeof landedCostAdjustmentType)[keyof typeof landedCostAdjustmentType];
declare const landedCostGuaranteeCode: {
    readonly InclusivePrice: "INCLUSIVE_PRICE";
    readonly NotApplicable: "NOT_APPLICABLE";
    readonly PostalDdp: "POSTAL_DDP";
    readonly PostalDdpInclusivePrice: "POSTAL_DDP_INCLUSIVE_PRICE";
    readonly Zonos: "ZONOS";
};
type LandedCostGuaranteeCode = (typeof landedCostGuaranteeCode)[keyof typeof landedCostGuaranteeCode];
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
    readonly Completed: "COMPLETED";
    readonly FraudHold: "FRAUD_HOLD";
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
    readonly Destination: "DESTINATION";
    readonly Origin: "ORIGIN";
    readonly Payee: "PAYEE";
    readonly Payor: "PAYOR";
};
type PartyType = (typeof partyType)[keyof typeof partyType];
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
    readonly Surcharge: "SURCHARGE";
};
type ShipmentAmountType = (typeof shipmentAmountType)[keyof typeof shipmentAmountType];
declare const zonosAttribution: {
    readonly Disabled: "DISABLED";
    readonly Enabled: "ENABLED";
};
type ZonosAttribution = (typeof zonosAttribution)[keyof typeof zonosAttribution];
type CalculateLandedCostMutation = {
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
        landedCost: {
            id: string;
        } | null;
        subtotals: {
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
        quantity: number;
        restriction: {
            action: RestrictedItemAction;
            reason: string;
        } | null;
        sku: string | null;
    }>;
    landedCostCalculateWorkflow: Array<{
        appliedAdjustments: Array<{
            amount: number;
            item: {
                amount: number;
            } | null;
            type: LandedCostAdjustmentType | null;
        } | null> | null;
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
            amount: number;
            displayName: string;
            currencyCode: CurrencyCode;
            id: string;
            maxTransitAt: string | null;
            minTransitAt: string | null;
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
        maxTransitAt: string | null;
        minTransitAt: string | null;
    }>;
};
type CheckItemRestrictionsMutation = {
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
type GetOrderQuery = {
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
                Adjustment: {
                    amount: number;
                } | null;
                amount: number;
                item: {
                    amount: number;
                    name: string | null;
                } | null;
            } | null> | null;
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

type CustomEventMap = {
    legacyCheckoutError: string;
    'zonos-checkout-success': {
        message: string;
    };
};

declare const envClientSchema: z.ZodObject<{
    NEXT_PUBLIC_FLAG_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_API_KEY: z.ZodString;
    NEXT_PUBLIC_ZONOS_CDN_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_JS_DELIVR_CDN_URL: z.ZodString;
    NEXT_PUBLIC_ZONOS_PACKAGE_VERSION: z.ZodString;
    NEXT_PUBLIC_ZONOS_ROUTE_URL: z.ZodString;
}, "strip", z.ZodTypeAny, {
    NEXT_PUBLIC_FLAG_URL: string;
    NEXT_PUBLIC_ZONOS_API_KEY: string;
    NEXT_PUBLIC_ZONOS_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_JS_DELIVR_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_PACKAGE_VERSION: string;
    NEXT_PUBLIC_ZONOS_ROUTE_URL: string;
}, {
    NEXT_PUBLIC_FLAG_URL: string;
    NEXT_PUBLIC_ZONOS_API_KEY: string;
    NEXT_PUBLIC_ZONOS_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_JS_DELIVR_CDN_URL: string;
    NEXT_PUBLIC_ZONOS_PACKAGE_VERSION: string;
    NEXT_PUBLIC_ZONOS_ROUTE_URL: string;
}>;
interface Env extends z.infer<typeof envClientSchema> {
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
    Sentry?: {
      init: (config: BrowserOptions) => void;
    };
    Stripe?: StripeConstructor;
    Zonos: Zonos;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    bcConfig?: unknown;
    /**
     * A flag to determine if the current page is a BigCommerce page
     */
    stencilBootstrap?: unknown;
    sentryOnLoad?: () => void;
  }

  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv extends Env {}
  }
}

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

type SubmitEventData = {
    billingAddress: Record<keyof TranslatedAddressObject, string> | null;
    shippingAddress: Record<keyof TranslatedAddressObject, string>;
};

declare const colorPrefixes: readonly ["blue", "cyan", "green", "orange", "purple", "red", "gray", "glass"];
declare const colorContrasts: readonly ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"];
type ColorContrast = (typeof colorContrasts)[number];
type ColorPrefix = (typeof colorPrefixes)[number];
type Color = 'gray-0' | 'gray-50' | 'glass-0' | 'glass-50' | `${ColorPrefix}-${ColorContrast}` | 'gray-1100' | 'gray-1200' | 'glass-1100' | 'glass-1200';
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
type FontWeight = TextOptions[keyof TextOptions]['weight'] | 800;

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
    price: string;
    sublabel?: string;
    value: string | number;
};

type SpinnerColor = 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'black' | 'white';

type GridSpacing = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40;

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
         */
        "defaultAddress": ContactOption | null;
        /**
          * The title text for the address element
         */
        "titleText": string;
        /**
          * The type of address element to render
         */
        "type": 'billing' | 'shipping';
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
    interface ZonosAddressUpdateDialog {
        /**
          * Billing address that user has entered (optional if billing is the same as shipping)
         */
        "billingAddress": EnteredInfo | null;
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading": boolean;
        /**
          * Whether or not the dialog is loading
         */
        "dialogLoading": boolean;
        /**
          * Whether or not the dialog is open
         */
        "dialogOpen": boolean;
        /**
          * Whether or not the dialog is open
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
    interface ZonosBadge {
        /**
          * The size of the badge
          * @default 24
         */
        "badgeColor": ColorPrefix;
        /**
          * Whether or not the badge is bold
          * @default false
         */
        "bold": boolean;
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
          * The color of the button text and svg **NOTE**: If the button `variant` is set to 'standard', backgroundColor will be disregarded
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never });
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
         */
        "isDisabled": boolean;
        /**
          * Whether or not the button is loading
         */
        "loading": boolean;
        /**
          * Whether or not the button has a background
          * @default false
         */
        "noBackground": boolean;
        /**
          * Whether or not the button has a left padding
         */
        "noPaddingLeft": boolean;
        /**
          * Whether or not the button has a right padding
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
         */
        "withBoxShadow": boolean;
    }
    interface ZonosCard {
        /**
          * The actions to display in the header of the card
         */
        "actions"?: HTMLElement;
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
         */
        "spacing"?: string;
    }
    interface ZonosCartItems {
    }
    interface ZonosCartRestrictedItems {
        /**
          * This is to hide the section when the parent collapse on mobile
         */
        "hide": boolean;
    }
    interface ZonosCartSubtotal {
    }
    interface ZonosCheckbox {
        /**
          * background color of the checkbox
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
         */
        "fontSize": Size;
        /**
          * Whether or not the checkbox is checked
         */
        "isChecked": boolean;
        /**
          * Whether or not the checkbox is disabled
         */
        "isDisabled": boolean;
        /**
          * The label of the checkbox
         */
        "label"?: string;
        /**
          * Size of the checkbox
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
         */
        "defaultAddress": StripeStoreContactOption | null;
        /**
          * Force dialog to be open
         */
        "forceDialogOpen": boolean;
        /**
          * Setup all of the event listeners for the component on first load
         */
        "init": () => Promise<void>;
        /**
          * Flag to determine if the checkout is on mobile
         */
        "mobile": boolean;
        /**
          * Preview checkout without needing to click on the button. This would be useful for demo purpose
         */
        "preview": boolean;
        /**
          * For storybook to set to finish step, this is to trigger in the story for zonos-checkout-finish
         */
        "setToFinishStep": (forcePaymentStatus?: PaymentIntent['status']) => Promise<void>;
    }
    interface ZonosCheckoutFinish {
        /**
          * The border radius style of the dialog
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
         */
        "mobile": boolean;
    }
    interface ZonosCheckoutPayment {
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading": boolean;
        /**
          * Error occurred during payment
         */
        "paymentError": boolean;
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
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never }) | null;
        /**
          * Set the tab items data. This is to be used in storybook
         */
        "setTabItems": (tabItems: TabItems) => Promise<void>;
        /**
          * Set selected tab. Only set the tab if it's clickable
         */
        "setTabSelected": (tabValue: TabItem['value']) => Promise<void>;
        /**
          * Color of the tab progress bar and label, override the secondary color of the appearance settings
         */
        "tabColor"?: string | null;
    }
    interface ZonosCollapse {
        /**
          * Collapsed size when collapsed
         */
        "collapseSize": number;
        /**
          * Collapsed state of the element
         */
        "collapsed": boolean;
    }
    interface ZonosComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
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
          * Whether or not the dialog is open
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
          * Override the setting
          * @param config config that need to override the default setting
         */
        "overrideConfig": (config: LoadZonosParamsConfig) => Promise<void>;
        /**
          * Override country code for storybook
         */
        "overrideCountry": (countryCode: CountryCode) => Promise<void>;
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
    interface ZonosCustomMessage {
        /**
          * The custom message icon
         */
        "icon": string;
        /**
          * The custom message text
         */
        "message": string;
    }
    interface ZonosCustomerInfo {
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading": boolean;
        /**
          * Default address to use for the checkout (preview mode)
         */
        "defaultAddress": StripeStoreContactOption | null;
        /**
          * Whether or not the dialog is open
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
    interface ZonosDialog {
        /**
          * The border style of the button
          * @default ROUNDED
         */
        "borderStyle"?: ElementsUiStyle;
        /**
          * The header text for the dialog
         */
        "headerText": string;
        /**
          * The height of the dialog (max-width still 90vh)
         */
        "height"?: string;
        /**
          * Load loading spinner for the dialog or not
         */
        "isLoading": boolean;
        /**
          * The min height of the dialog
         */
        "minHeight"?: string;
        /**
          * Flag to determine if the checkout is on mobile
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
          * Force mobile styling instead of media query and use the passed location value
          * @default false
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
          * @default 'gray-1200'
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
         */
        "inputPlaceholder": string;
        /**
          * Input size
         */
        "inputSize": 'sm' | 'md' | 'lg' | 'xl';
        /**
          * Value of the input
         */
        "inputValue": string;
        /**
          * Disables the input
         */
        "isDisabled": boolean;
        /**
          * Error state of the input
         */
        "isError": boolean;
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
         */
        "defaultEmail": string | null;
        /**
          * The title text for the authentication element
         */
        "titleText": string;
    }
    interface ZonosLogo {
        /**
          * Theme to change the color of the logo
         */
        "theme": ElementsUiTheme;
        /**
          * The width of the logo
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
         */
        "collapsed": boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
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
         */
        "label": string;
    }
    interface ZonosShipping {
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading": boolean;
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
          * Initial selected value
         */
        "initialSelectedValue"?: string | number;
        /**
          * List of items to display
         */
        "items": ShippingRichRadioItem[];
        /**
          * Theme of the radio item
         */
        "theme"?: ElementsUiTheme;
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
    interface ZonosText {
        /**
          * The size of the text
         */
        "size"?: Size;
        /**
          * The icon element to display
         */
        "textColor": Color | (string & { _placeholder?: never });
        /**
          * Type of the text to display
         */
        "type": Type;
        /**
          * The weight of the text
         */
        "weight"?: FontWeight;
    }
    interface ZonosTooltip {
        /**
          * The title of the tooltip
         */
        "label": string;
        /**
          * The subtitle of the tooltip
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
}
interface ZonosAddressCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressElement;
}
interface ZonosAddressFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressFormElement;
}
interface ZonosAddressUpdateDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosAddressUpdateDialogElement;
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
interface ZonosConfirmDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosConfirmDialogElement;
}
interface ZonosControllerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosControllerElement;
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
interface ZonosShippingCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosShippingElement;
}
interface ZonosShippingRichRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLZonosShippingRichRadioElement;
}
declare global {
    interface HTMLZonosAddressElementEventMap {
        "invalidCharacters": boolean;
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
    interface HTMLZonosAddressUpdateDialogElementEventMap {
        "closeDialog": void;
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
    interface HTMLZonosCustomMessageElement extends Components.ZonosCustomMessage, HTMLStencilElement {
    }
    var HTMLZonosCustomMessageElement: {
        prototype: HTMLZonosCustomMessageElement;
        new (): HTMLZonosCustomMessageElement;
    };
    interface HTMLZonosCustomerInfoElementEventMap {
        "continueClicked": void;
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
    interface HTMLZonosLinkAuthenticationElement extends Components.ZonosLinkAuthentication, HTMLStencilElement {
    }
    var HTMLZonosLinkAuthenticationElement: {
        prototype: HTMLZonosLinkAuthenticationElement;
        new (): HTMLZonosLinkAuthenticationElement;
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
    interface HTMLZonosSpinnerElement extends Components.ZonosSpinner, HTMLStencilElement {
    }
    var HTMLZonosSpinnerElement: {
        prototype: HTMLZonosSpinnerElement;
        new (): HTMLZonosSpinnerElement;
    };
    interface HTMLZonosTextElement extends Components.ZonosText, HTMLStencilElement {
    }
    var HTMLZonosTextElement: {
        prototype: HTMLZonosTextElement;
        new (): HTMLZonosTextElement;
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
    interface HTMLElementTagNameMap {
        "zonos-address": HTMLZonosAddressElement;
        "zonos-address-display": HTMLZonosAddressDisplayElement;
        "zonos-address-form": HTMLZonosAddressFormElement;
        "zonos-address-update-dialog": HTMLZonosAddressUpdateDialogElement;
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
        "zonos-component": HTMLZonosComponentElement;
        "zonos-confirm-dialog": HTMLZonosConfirmDialogElement;
        "zonos-controller": HTMLZonosControllerElement;
        "zonos-country-flag": HTMLZonosCountryFlagElement;
        "zonos-country-select": HTMLZonosCountrySelectElement;
        "zonos-custom-message": HTMLZonosCustomMessageElement;
        "zonos-customer-info": HTMLZonosCustomerInfoElement;
        "zonos-dialog": HTMLZonosDialogElement;
        "zonos-hello": HTMLZonosHelloElement;
        "zonos-hello-dialog": HTMLZonosHelloDialogElement;
        "zonos-hello-dialog-footer": HTMLZonosHelloDialogFooterElement;
        "zonos-icon": HTMLZonosIconElement;
        "zonos-input": HTMLZonosInputElement;
        "zonos-language-select": HTMLZonosLanguageSelectElement;
        "zonos-link": HTMLZonosLinkElement;
        "zonos-link-authentication": HTMLZonosLinkAuthenticationElement;
        "zonos-logo": HTMLZonosLogoElement;
        "zonos-notification": HTMLZonosNotificationElement;
        "zonos-payment": HTMLZonosPaymentElement;
        "zonos-rest-state": HTMLZonosRestStateElement;
        "zonos-review": HTMLZonosReviewElement;
        "zonos-select-dialog-header": HTMLZonosSelectDialogHeaderElement;
        "zonos-shipping": HTMLZonosShippingElement;
        "zonos-shipping-rich-radio": HTMLZonosShippingRichRadioElement;
        "zonos-spinner": HTMLZonosSpinnerElement;
        "zonos-text": HTMLZonosTextElement;
        "zonos-tooltip": HTMLZonosTooltipElement;
        "zonos-v-stack": HTMLZonosVStackElement;
    }
}
declare namespace LocalJSX {
    interface ZonosAddress {
        /**
          * Default address for stripe
         */
        "defaultAddress"?: ContactOption | null;
        /**
          * Event to emit when address is not containing allowed character sets
         */
        "onInvalidCharacters"?: (event: ZonosAddressCustomEvent<boolean>) => void;
        /**
          * The title text for the address element
         */
        "titleText": string;
        /**
          * The type of address element to render
         */
        "type": 'billing' | 'shipping';
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
    interface ZonosAddressUpdateDialog {
        /**
          * Billing address that user has entered (optional if billing is the same as shipping)
         */
        "billingAddress": EnteredInfo | null;
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading"?: boolean;
        /**
          * Whether or not the dialog is loading
         */
        "dialogLoading": boolean;
        /**
          * Whether or not the dialog is open
         */
        "dialogOpen"?: boolean;
        /**
          * Whether or not the dialog is open
         */
        "isMobile"?: boolean;
        /**
          * Close dialog button click
         */
        "onCloseDialog"?: (event: ZonosAddressUpdateDialogCustomEvent<void>) => void;
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
    interface ZonosBadge {
        /**
          * The size of the badge
          * @default 24
         */
        "badgeColor"?: ColorPrefix;
        /**
          * Whether or not the badge is bold
          * @default false
         */
        "bold"?: boolean;
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
          * The color of the button text and svg **NOTE**: If the button `variant` is set to 'standard', backgroundColor will be disregarded
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never });
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
         */
        "isDisabled"?: boolean;
        /**
          * Whether or not the button is loading
         */
        "loading"?: boolean;
        /**
          * Whether or not the button has a background
          * @default false
         */
        "noBackground"?: boolean;
        /**
          * Whether or not the button has a left padding
         */
        "noPaddingLeft"?: boolean;
        /**
          * Whether or not the button has a right padding
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
         */
        "withBoxShadow"?: boolean;
    }
    interface ZonosCard {
        /**
          * The actions to display in the header of the card
         */
        "actions"?: HTMLElement;
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
         */
        "spacing"?: string;
    }
    interface ZonosCartItems {
    }
    interface ZonosCartRestrictedItems {
        /**
          * This is to hide the section when the parent collapse on mobile
         */
        "hide"?: boolean;
    }
    interface ZonosCartSubtotal {
    }
    interface ZonosCheckbox {
        /**
          * background color of the checkbox
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
         */
        "fontSize"?: Size;
        /**
          * Whether or not the checkbox is checked
         */
        "isChecked"?: boolean;
        /**
          * Whether or not the checkbox is disabled
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
         */
        "defaultAddress"?: StripeStoreContactOption | null;
        /**
          * Force dialog to be open
         */
        "forceDialogOpen"?: boolean;
        /**
          * Flag to determine if the checkout is on mobile
         */
        "mobile"?: boolean;
        /**
          * Preview checkout without needing to click on the button. This would be useful for demo purpose
         */
        "preview"?: boolean;
    }
    interface ZonosCheckoutFinish {
        /**
          * The border radius style of the dialog
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
         */
        "mobile"?: boolean;
    }
    interface ZonosCheckoutPayment {
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading"?: boolean;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosCheckoutPaymentCustomEvent<void>) => void;
        /**
          * Error occurred during payment
         */
        "paymentError"?: boolean;
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
         */
        "backgroundColor"?: Color | (string & { _placeholder?: never }) | null;
        /**
          * Color of the tab progress bar and label, override the secondary color of the appearance settings
         */
        "tabColor"?: string | null;
    }
    interface ZonosCollapse {
        /**
          * Collapsed size when collapsed
         */
        "collapseSize"?: number;
        /**
          * Collapsed state of the element
         */
        "collapsed"?: boolean;
    }
    interface ZonosComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
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
          * Whether or not the dialog is open
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
    interface ZonosCustomMessage {
        /**
          * The custom message icon
         */
        "icon"?: string;
        /**
          * The custom message text
         */
        "message"?: string;
    }
    interface ZonosCustomerInfo {
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading"?: boolean;
        /**
          * Default address to use for the checkout (preview mode)
         */
        "defaultAddress"?: StripeStoreContactOption | null;
        /**
          * Whether or not the dialog is open
         */
        "isMobile"?: boolean;
        /**
          * Event to emit when the continue button is clicked
         */
        "onContinueClicked"?: (event: ZonosCustomerInfoCustomEvent<void>) => void;
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
         */
        "headerText"?: string;
        /**
          * The height of the dialog (max-width still 90vh)
         */
        "height"?: string;
        /**
          * Load loading spinner for the dialog or not
         */
        "isLoading"?: boolean;
        /**
          * The min height of the dialog
         */
        "minHeight"?: string;
        /**
          * Flag to determine if the checkout is on mobile
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
          * Force mobile styling instead of media query and use the passed location value
          * @default false
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
          * @default 'gray-1200'
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
         */
        "inputPlaceholder"?: string;
        /**
          * Input size
         */
        "inputSize"?: 'sm' | 'md' | 'lg' | 'xl';
        /**
          * Value of the input
         */
        "inputValue"?: string;
        /**
          * Disables the input
         */
        "isDisabled"?: boolean;
        /**
          * Error state of the input
         */
        "isError"?: boolean;
        /**
          * Event to emit when input value changes
         */
        "onInputChange"?: (event: ZonosInputCustomEvent<string>) => void;
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
         */
        "defaultEmail"?: string | null;
        /**
          * The title text for the authentication element
         */
        "titleText": string;
    }
    interface ZonosLogo {
        /**
          * Theme to change the color of the logo
         */
        "theme"?: ElementsUiTheme;
        /**
          * The width of the logo
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
         */
        "collapsed"?: boolean;
        /**
          * Whether or not the component is being rendered with mobile styles
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
         */
        "label"?: string;
    }
    interface ZonosShipping {
        /**
          * Whether or not the continue button is loading
         */
        "continueLoading"?: boolean;
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
          * Initial selected value
         */
        "initialSelectedValue"?: string | number;
        /**
          * List of items to display
         */
        "items": ShippingRichRadioItem[];
        /**
          * Event emitted when an item is selected
         */
        "onRadioSelected"?: (event: ZonosShippingRichRadioCustomEvent<ShippingRichRadioItem>) => void;
        /**
          * Theme of the radio item
         */
        "theme"?: ElementsUiTheme;
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
    interface ZonosText {
        /**
          * The size of the text
         */
        "size"?: Size;
        /**
          * The icon element to display
         */
        "textColor"?: Color | (string & { _placeholder?: never });
        /**
          * Type of the text to display
         */
        "type"?: Type;
        /**
          * The weight of the text
         */
        "weight"?: FontWeight;
    }
    interface ZonosTooltip {
        /**
          * The title of the tooltip
         */
        "label"?: string;
        /**
          * The subtitle of the tooltip
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
    interface IntrinsicElements {
        "zonos-address": ZonosAddress;
        "zonos-address-display": ZonosAddressDisplay;
        "zonos-address-form": ZonosAddressForm;
        "zonos-address-update-dialog": ZonosAddressUpdateDialog;
        "zonos-badge": ZonosBadge;
        "zonos-banner": ZonosBanner;
        "zonos-button": ZonosButton;
        "zonos-card": ZonosCard;
        "zonos-cart-items": ZonosCartItems;
        "zonos-cart-restricted-items": ZonosCartRestrictedItems;
        "zonos-cart-subtotal": ZonosCartSubtotal;
        "zonos-checkbox": ZonosCheckbox;
        "zonos-checkout": ZonosCheckout;
        "zonos-checkout-finish": ZonosCheckoutFinish;
        "zonos-checkout-footer": ZonosCheckoutFooter;
        "zonos-checkout-payment": ZonosCheckoutPayment;
        "zonos-checkout-progress-tabs": ZonosCheckoutProgressTabs;
        "zonos-collapse": ZonosCollapse;
        "zonos-component": ZonosComponent;
        "zonos-confirm-dialog": ZonosConfirmDialog;
        "zonos-controller": ZonosController;
        "zonos-country-flag": ZonosCountryFlag;
        "zonos-country-select": ZonosCountrySelect;
        "zonos-custom-message": ZonosCustomMessage;
        "zonos-customer-info": ZonosCustomerInfo;
        "zonos-dialog": ZonosDialog;
        "zonos-hello": ZonosHello;
        "zonos-hello-dialog": ZonosHelloDialog;
        "zonos-hello-dialog-footer": ZonosHelloDialogFooter;
        "zonos-icon": ZonosIcon;
        "zonos-input": ZonosInput;
        "zonos-language-select": ZonosLanguageSelect;
        "zonos-link": ZonosLink;
        "zonos-link-authentication": ZonosLinkAuthentication;
        "zonos-logo": ZonosLogo;
        "zonos-notification": ZonosNotification;
        "zonos-payment": ZonosPayment;
        "zonos-rest-state": ZonosRestState;
        "zonos-review": ZonosReview;
        "zonos-select-dialog-header": ZonosSelectDialogHeader;
        "zonos-shipping": ZonosShipping;
        "zonos-shipping-rich-radio": ZonosShippingRichRadio;
        "zonos-spinner": ZonosSpinner;
        "zonos-text": ZonosText;
        "zonos-tooltip": ZonosTooltip;
        "zonos-v-stack": ZonosVStack;
    }
}

declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "zonos-address": LocalJSX.ZonosAddress & JSXBase.HTMLAttributes<HTMLZonosAddressElement>;
            "zonos-address-display": LocalJSX.ZonosAddressDisplay & JSXBase.HTMLAttributes<HTMLZonosAddressDisplayElement>;
            "zonos-address-form": LocalJSX.ZonosAddressForm & JSXBase.HTMLAttributes<HTMLZonosAddressFormElement>;
            "zonos-address-update-dialog": LocalJSX.ZonosAddressUpdateDialog & JSXBase.HTMLAttributes<HTMLZonosAddressUpdateDialogElement>;
            "zonos-badge": LocalJSX.ZonosBadge & JSXBase.HTMLAttributes<HTMLZonosBadgeElement>;
            "zonos-banner": LocalJSX.ZonosBanner & JSXBase.HTMLAttributes<HTMLZonosBannerElement>;
            "zonos-button": LocalJSX.ZonosButton & JSXBase.HTMLAttributes<HTMLZonosButtonElement>;
            "zonos-card": LocalJSX.ZonosCard & JSXBase.HTMLAttributes<HTMLZonosCardElement>;
            "zonos-cart-items": LocalJSX.ZonosCartItems & JSXBase.HTMLAttributes<HTMLZonosCartItemsElement>;
            "zonos-cart-restricted-items": LocalJSX.ZonosCartRestrictedItems & JSXBase.HTMLAttributes<HTMLZonosCartRestrictedItemsElement>;
            "zonos-cart-subtotal": LocalJSX.ZonosCartSubtotal & JSXBase.HTMLAttributes<HTMLZonosCartSubtotalElement>;
            "zonos-checkbox": LocalJSX.ZonosCheckbox & JSXBase.HTMLAttributes<HTMLZonosCheckboxElement>;
            "zonos-checkout": LocalJSX.ZonosCheckout & JSXBase.HTMLAttributes<HTMLZonosCheckoutElement>;
            "zonos-checkout-finish": LocalJSX.ZonosCheckoutFinish & JSXBase.HTMLAttributes<HTMLZonosCheckoutFinishElement>;
            "zonos-checkout-footer": LocalJSX.ZonosCheckoutFooter & JSXBase.HTMLAttributes<HTMLZonosCheckoutFooterElement>;
            "zonos-checkout-payment": LocalJSX.ZonosCheckoutPayment & JSXBase.HTMLAttributes<HTMLZonosCheckoutPaymentElement>;
            "zonos-checkout-progress-tabs": LocalJSX.ZonosCheckoutProgressTabs & JSXBase.HTMLAttributes<HTMLZonosCheckoutProgressTabsElement>;
            "zonos-collapse": LocalJSX.ZonosCollapse & JSXBase.HTMLAttributes<HTMLZonosCollapseElement>;
            "zonos-component": LocalJSX.ZonosComponent & JSXBase.HTMLAttributes<HTMLZonosComponentElement>;
            "zonos-confirm-dialog": LocalJSX.ZonosConfirmDialog & JSXBase.HTMLAttributes<HTMLZonosConfirmDialogElement>;
            "zonos-controller": LocalJSX.ZonosController & JSXBase.HTMLAttributes<HTMLZonosControllerElement>;
            "zonos-country-flag": LocalJSX.ZonosCountryFlag & JSXBase.HTMLAttributes<HTMLZonosCountryFlagElement>;
            "zonos-country-select": LocalJSX.ZonosCountrySelect & JSXBase.HTMLAttributes<HTMLZonosCountrySelectElement>;
            "zonos-custom-message": LocalJSX.ZonosCustomMessage & JSXBase.HTMLAttributes<HTMLZonosCustomMessageElement>;
            "zonos-customer-info": LocalJSX.ZonosCustomerInfo & JSXBase.HTMLAttributes<HTMLZonosCustomerInfoElement>;
            "zonos-dialog": LocalJSX.ZonosDialog & JSXBase.HTMLAttributes<HTMLZonosDialogElement>;
            "zonos-hello": LocalJSX.ZonosHello & JSXBase.HTMLAttributes<HTMLZonosHelloElement>;
            "zonos-hello-dialog": LocalJSX.ZonosHelloDialog & JSXBase.HTMLAttributes<HTMLZonosHelloDialogElement>;
            "zonos-hello-dialog-footer": LocalJSX.ZonosHelloDialogFooter & JSXBase.HTMLAttributes<HTMLZonosHelloDialogFooterElement>;
            "zonos-icon": LocalJSX.ZonosIcon & JSXBase.HTMLAttributes<HTMLZonosIconElement>;
            "zonos-input": LocalJSX.ZonosInput & JSXBase.HTMLAttributes<HTMLZonosInputElement>;
            "zonos-language-select": LocalJSX.ZonosLanguageSelect & JSXBase.HTMLAttributes<HTMLZonosLanguageSelectElement>;
            "zonos-link": LocalJSX.ZonosLink & JSXBase.HTMLAttributes<HTMLZonosLinkElement>;
            "zonos-link-authentication": LocalJSX.ZonosLinkAuthentication & JSXBase.HTMLAttributes<HTMLZonosLinkAuthenticationElement>;
            "zonos-logo": LocalJSX.ZonosLogo & JSXBase.HTMLAttributes<HTMLZonosLogoElement>;
            "zonos-notification": LocalJSX.ZonosNotification & JSXBase.HTMLAttributes<HTMLZonosNotificationElement>;
            "zonos-payment": LocalJSX.ZonosPayment & JSXBase.HTMLAttributes<HTMLZonosPaymentElement>;
            "zonos-rest-state": LocalJSX.ZonosRestState & JSXBase.HTMLAttributes<HTMLZonosRestStateElement>;
            "zonos-review": LocalJSX.ZonosReview & JSXBase.HTMLAttributes<HTMLZonosReviewElement>;
            "zonos-select-dialog-header": LocalJSX.ZonosSelectDialogHeader & JSXBase.HTMLAttributes<HTMLZonosSelectDialogHeaderElement>;
            "zonos-shipping": LocalJSX.ZonosShipping & JSXBase.HTMLAttributes<HTMLZonosShippingElement>;
            "zonos-shipping-rich-radio": LocalJSX.ZonosShippingRichRadio & JSXBase.HTMLAttributes<HTMLZonosShippingRichRadioElement>;
            "zonos-spinner": LocalJSX.ZonosSpinner & JSXBase.HTMLAttributes<HTMLZonosSpinnerElement>;
            "zonos-text": LocalJSX.ZonosText & JSXBase.HTMLAttributes<HTMLZonosTextElement>;
            "zonos-tooltip": LocalJSX.ZonosTooltip & JSXBase.HTMLAttributes<HTMLZonosTooltipElement>;
            "zonos-v-stack": LocalJSX.ZonosVStack & JSXBase.HTMLAttributes<HTMLZonosVStackElement>;
        }
    }
}

type CalculateLandedCostRequest = {
    billingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: string;
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
        email?: string;
        firstName: string;
        lastName: string;
        phone: string;
    };
    items: CartItem[];
    landedCostAdjustments?: {
        amount: number;
        type: LandedCostAdjustmentType;
    }[];
    metadata?: {
        key: string;
        value: string;
    }[];
    shippingAddress: {
        addressLine1: string;
        addressLine2?: string | undefined;
        city: string;
        country: string;
        postalCode: string;
        state: string;
    };
};

type CountryOverrideBehavior = 'URL_PARAM' | 'SESSION';
type ShowForCountries = 'ALL' | 'ONLY_SHIPPABLE' | CountryCode[];
type HelloConfig = {
    anchorElementSelector: string;
    cartUrlPattern: string | null;
    /**
     * The behavior to use when determining the country to use for the user.
     * @default 'URL_PARAM'
     */
    countryOverrideBehavior?: CountryOverrideBehavior;
    currencyBehavior: HelloCurrencyBehavior;
    currencyElementSelector: string;
    excludedUrlPatterns: Array<string>;
    homepageUrlPattern: string | null;
    mobileLocation: HelloMobileLocation;
    mode: Mode;
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
     * The countries to show the widget for.
     * @default ONLY_SHIPPABLE
     */
    showForCountries?: ShowForCountries;
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
    label: 'Customer' | 'Delivery' | 'Payment';
    value: 'customer-info' | 'shipping' | 'payment';
};
type TabItems = Record<TabItem['value'], TabItem>;
type ItemMeasurement = {
    /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
    type?: ItemMeasurementType;
    /** Indicates the `Measurement` units to be used. */
    unitOfMeasure?: ItemUnitOfMeasure;
    /** The `Measurement` value. */
    value?: number;
};
type CartItem = {
    amount: number;
    attributes?: {
        key: string;
        value: string;
    }[];
    countryOfOrigin?: string;
    currencyCode: string;
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
};

type BuildLandedCostParams = {
    billingAddress: CalculateLandedCostRequest['billingAddress'];
    billingContact: CalculateLandedCostRequest['billingContact'];
    checkoutSessionId: string;
    contact: CalculateLandedCostRequest['contact'];
    shippingAddress: CalculateLandedCostRequest['shippingAddress'];
    zonosApiRoute: string;
};
type BuildLandedCostResponse = (CalculateLandedCostMutation & {
    errors?: {
        message: string;
    }[];
}) | null;

type ZonosOrder = GetOrderQuery['order'];

type BuildCardDetailParams = {
    countryCode: CountryCode;
    currencyCode: CurrencyCode;
};
type CheckoutConfig = {
    /**
     * Validate address to allow specific character sets
     * @default ALL
     */
    allowedCharacterSets?: 'ALL' | 'LATIN';
    analyticsProviders: Array<{
        status: AnalyticsProviderStatus;
        type: AnalyticsProviderType;
    }>;
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
        orderConfirmation: {
            active: NotificationActiveStatus;
            sendCopiesTo: Array<string>;
        } | null;
        orderShipped: {
            active: NotificationActiveStatus;
            sendCopiesTo: Array<string>;
        };
    };
    organization: string;
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
    successRedirectUrl: string;
    visibilityStatus: CheckoutVisibilityStatus;
    /**
     * Cart info callback for checkout (optional)
     * @note will use temp cart data if available
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
     * @note will use temp cart data if available
     */
    buildLandedCost?: (params: BuildLandedCostParams) => Promise<BuildLandedCostResponse>;
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
     *   // Check if all items are available from the server. If the fetch is throwing an error, we will show a generic error message "Unable to check inventory. Please try again.".
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
    }) => Promise<string | null>;
    /**
     * Callback trigger when payment succeeds
     */
    onOrderSuccess?: (props: {
        zonosApiRoute: string;
        zonosOrder: ZonosOrder;
    }) => Promise<void>;
};

type AppearanceConfig = {
    colorPrimary?: string;
    colorSecondary?: string;
    fontFamily: string;
    logoUrl: string;
    style: ElementsUiStyle;
    theme: ElementsUiTheme;
    zonosAttribution: ZonosAttribution | null;
};

type TempCartItem = {
    additionalCharge: boolean;
    boxNumber: number | null;
    countryOfOrigin: string | null;
    description: string | null;
    discount: boolean;
    foreignUnitPrice: number | null;
    giftCard: boolean;
    height: number | null;
    id: number | null;
    imageURL: string | null;
    itemBrand: string | null;
    itemCategory: string | null;
    itemColor: string | null;
    itemCustomization: string | null;
    itemDescriptionDetailed: string | null;
    itemDescriptionLong: string | null;
    itemDiscountAmount: number | null;
    itemDoSell: boolean;
    itemFabricContent: string | null;
    itemForwarded: boolean;
    itemHSCode: string | null;
    itemLtlClass: string | null;
    itemMaterial: string | null;
    itemPickingLocation: string | null;
    itemShipFromLocation: string | null;
    itemShippingAmount: number | null;
    itemSize: string | null;
    itemURL: string | null;
    itemUnitPriceHide: boolean;
    length: number | null;
    nonShippable: boolean;
    productId: string | null;
    quantity: number | null;
    sku: string | null;
    status: string | null;
    unitPrice: number | null;
    weight: number | null;
    weightUnits: string | null;
    width: number | null;
};
type TempCart = {
    additionalHandling: boolean;
    boxCount: string | null;
    /**
     * @param contShopingUrl should always be set, backend will ensure this. If not set, backend will fallback to the store vendor url
     */
    contShoppingURL: string;
    createdInMillis: number | null;
    customerId: string | null;
    customerNote: string | null;
    discountAmount: number | null;
    domesticShippingCharge: number | null;
    exchangeRate: number | null;
    externalConfirmationPageURL: string | null;
    footerHtml: string | null;
    giftCardDescription: string | null;
    giftCardForeignTotal: number | null;
    giftCardTotal: number | null;
    guid: string;
    iGlobalId: string | null;
    id: number;
    iglobalCheckoutFlags: string | null;
    interpayRateOfferId: string | null;
    items: TempCartItem[] | null;
    message: string | null;
    misc1: string | null;
    misc2: string | null;
    misc3: string | null;
    misc4: string | null;
    misc5: string | null;
    misc6: string | null;
    poAllowed: boolean;
    referenceId: string | null;
    shippingAmountOverride: number | null;
    showForeignCurrency: boolean;
    storeId: number;
    usedInMillis: number | null;
    vendorPassedCurrencyCode: string | null;
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
     * Hello and Checkout are using using the Intl.NumberFormat API to format the currency. You can either use the default currency display or customize it.
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
     * Custom currency format function to be used in Hello and Checkout
     */
     | ((params: {
        amount: number;
        countryCode: CurrencyCode;
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
         * @param currencyCode Updated currency code
         */
        currencyCode: CurrencyCode;
    }) => void;
};
type LoadZonosParams = LoadZonosParamsConfig & {
    storeId: number;
    /**
     * Temporary cart UUID to be used for legacy zonos checkout. If this is provided, no need to configure `buildCartDetail`, `buildLandedCost` callback, zonosApiKey or storeId
     * @note This would be deprecated in the future when we fully migrate to new zonos checkout
     */
    tempCartUUID?: string;
    zonosApiKey: string;
};
interface Zonos {
    /**
     * Toggle debug mode (add query param 'zonosDebug=1' to url)
     * @default false
     */
    debug?: boolean;
    doneInit: boolean;
    isBigCommerce: boolean;
    isNpm: boolean;
    /** Flag if already alerted when preview domain is defined and it's connecting production environment */
    modeAlerted: boolean;
    storeId: number;
    /** Stripe instance */
    stripe: Stripe;
    tempCartData: TempCart | null;
    version: string;
    zonosApiKey: string;
    /**
     * Flag to send tracking event to api for conversion testing, since we don't send tracking event to api when in debug/development mode
     */
    zonosConversionTest?: boolean;
    zonosQaUrl: string | null;
    displayCurrency: () => void;
    getCurrentTimestamp: () => number;
    init: (params: LoadZonosParams) => Promise<void>;
    injectSupportGoogleFont: (fontUrl: string) => void;
    openHelloDialog: (state?: boolean) => void;
    setupGoogleFont: (fontFamily: string) => void;
    showNotification: (props: NotificationInit) => void;
    updateOrganizationName: (organizationName: string) => void;
}
declare abstract class Zonos {
    static zonosApiKey: string;
    static stripe: Stripe;
    static storeId: number;
    static doneInit: boolean;
    static debug: boolean;
    static zonosConversionTest: boolean;
    static isBigCommerce: boolean;
    /**
     * By default, the package will load from npm
     */
    static isNpm: boolean;
    static zonosQaUrl: string | null;
    static version: string;
    static modeAlerted: boolean;
    static tempCartData: TempCart | null;
    static getCurrentTimestamp: () => number;
    private static zonosController;
    static init: ({ appearance, checkoutSettings, currencyConverter, helloSettings, onCountryChange, overrideCurrencyFormat, storeId, zonosApiKey, }: LoadZonosParams) => Promise<void>;
    static displayCurrency: () => void;
    static openHelloDialog: (value?: boolean) => void;
    static showNotification: (notification: NotificationInit) => void;
    static updateOrganizationName: (organizationName: string) => void;
    private static disablePlaceOrderButtons;
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
