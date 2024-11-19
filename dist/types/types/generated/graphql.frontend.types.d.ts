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
    String: {
        input: string;
        output: string;
    };
    bigint: {
        input: number;
        output: number;
    };
    json: {
        input: Record<string, unknown> | Record<string, unknown>[];
        output: Record<string, unknown> | Record<string, unknown>[];
    };
    jsonb: {
        input: Record<string, unknown> | Record<string, unknown>[];
        output: Record<string, unknown> | Record<string, unknown>[];
    };
    numeric: {
        input: number;
        output: number;
    };
    timestamp: {
        input: string;
        output: string;
    };
    timestamptz: {
        input: string;
        output: string;
    };
};
export declare const cursorOrdering: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
export type Cursor_Ordering = (typeof cursorOrdering)[keyof typeof cursorOrdering];
export declare const errorProjectNameEnum: {
    readonly Dashboard: "dashboard";
    readonly Elements: "elements";
    readonly ZonosCom: "zonos_com";
};
export declare const featureAspectKeyEnum: {
    readonly Checkout_2_0: "checkout_2_0";
    readonly ClassifyBulk: "classify_bulk";
    readonly ClassifyBulkExportViewConfidenceScore: "classify_bulk_export_view_confidence_score";
    readonly ClassifySingleRequest: "classify_single_request";
    readonly ComConsolidation: "com_consolidation";
    readonly DashboardCheckout_2Settings: "dashboard_checkout_2_settings";
    readonly DashboardHello_2Settings: "dashboard_hello_2_settings";
    readonly DashboardNewLabelUi: "dashboard_new_label_ui";
    readonly DashboardOrderApprove: "dashboard_order_approve";
    readonly DashboardOrderApproveNoCapture: "dashboard_order_approve_no_capture";
    readonly Dashboard_909Settings: "dashboard_909_settings";
    readonly DocsSearchOpenAiQa: "docs_search_open_ai_qa";
    readonly ExploreFrontendMutation: "explore_frontend_mutation";
    readonly ExploreWeaviateMutation: "explore_weaviate_mutation";
    readonly FeatureAspect: "feature_aspect";
    readonly FeatureFlagManagement: "feature_flag_management";
    readonly LocaleMessage: "locale_message";
    readonly NewCheckoutBeta: "new_checkout_beta";
    readonly NewPayoutReport: "new_payout_report";
    readonly PageAuditor: "page_auditor";
    readonly PromptExplorer: "prompt_explorer";
    readonly SupportTicketSystem: "support_ticket_system";
    readonly TeamAuditor: "team_auditor";
};
export type Feature_AspectKey_Enum = (typeof featureAspectKeyEnum)[keyof typeof featureAspectKeyEnum];
export declare const featureAudienceNameEnum: {
    readonly AccountsReceivable: "accounts_receivable";
    readonly CheckoutSales: "checkout_sales";
    readonly ClassifyBulkMerchant: "classify_bulk_merchant";
    readonly ClassifyBulkMerchantExportConfidenceScore: "classify_bulk_merchant_export_confidence_score";
    readonly CustomerSuccess: "customer_success";
    readonly DashboardLabelBetaMerchant: "dashboard_label_beta_merchant";
    readonly Designer: "designer";
    readonly DocsContributor: "docs_contributor";
    readonly Executive: "executive";
    readonly ExecutiveAssistant: "executive_assistant";
    readonly FeatureFlagAdmin: "feature_flag_admin";
    readonly Finance: "finance";
    readonly FrontendEngineer: "frontend_engineer";
    readonly I18nKnownLanguage: "i18n_known_language";
    readonly I18nSales: "i18n_sales";
    readonly ItHead: "it_head";
    readonly NewCheckoutMerchant: "new_checkout_merchant";
    readonly NewPayoutReportMerchant: "new_payout_report_merchant";
    readonly Onboarding: "onboarding";
    readonly PrincipalEngineer: "principal_engineer";
    readonly ProServeHead: "pro_serve_head";
    readonly ProductManager: "product_manager";
    readonly SupportTicketMerchants: "support_ticket_merchants";
    readonly TechLead: "tech_lead";
};
export type Feature_AudienceName_Enum = (typeof featureAudienceNameEnum)[keyof typeof featureAudienceNameEnum];
export declare const graphHubCategoryLabelEnum: {
    readonly Carrier: "carrier";
    readonly Catalog: "catalog";
    readonly Classify: "classify";
    readonly Label: "label";
    readonly LandedCost: "landed_cost";
};
export declare const graphHubDeployedSchemaLabelEnum: {
    readonly Auth: "auth";
    readonly Customer: "customer";
    readonly Frontend: "frontend";
    readonly Internal: "internal";
    readonly Viewport: "viewport";
};
export declare const localeElementsSupportedLocationCodeEnum: {
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
export type Locale_ElementsSupportedLocationCode_Enum = (typeof localeElementsSupportedLocationCodeEnum)[keyof typeof localeElementsSupportedLocationCodeEnum];
export declare const localeLocationCodeEnum: {
    readonly Aa: "aa";
    readonly Ab: "ab";
    readonly Ae: "ae";
    readonly Af: "af";
    readonly AfZa: "af_ZA";
    readonly Ak: "ak";
    readonly Am: "am";
    readonly An: "an";
    readonly Ar: "ar";
    readonly ArAe: "ar_AE";
    readonly ArBh: "ar_BH";
    readonly ArDz: "ar_DZ";
    readonly ArEg: "ar_EG";
    readonly ArIq: "ar_IQ";
    readonly ArJo: "ar_JO";
    readonly ArKw: "ar_KW";
    readonly ArLb: "ar_LB";
    readonly ArLy: "ar_LY";
    readonly ArMa: "ar_MA";
    readonly ArOm: "ar_OM";
    readonly ArQa: "ar_QA";
    readonly ArSa: "ar_SA";
    readonly ArSy: "ar_SY";
    readonly ArTn: "ar_TN";
    readonly ArYe: "ar_YE";
    readonly As: "as";
    readonly Av: "av";
    readonly Ay: "ay";
    readonly Az: "az";
    readonly Ba: "ba";
    readonly Be: "be";
    readonly BeBy: "be_BY";
    readonly Bg: "bg";
    readonly BgBg: "bg_BG";
    readonly Bh: "bh";
    readonly Bi: "bi";
    readonly Bm: "bm";
    readonly Bn: "bn";
    readonly Bo: "bo";
    readonly Br: "br";
    readonly Bs: "bs";
    readonly Ca: "ca";
    readonly CaEs: "ca_ES";
    readonly Ce: "ce";
    readonly Ch: "ch";
    readonly Co: "co";
    readonly Cr: "cr";
    readonly Cs: "cs";
    readonly CsCz: "cs_CZ";
    readonly Cu: "cu";
    readonly Cv: "cv";
    readonly Cy: "cy";
    readonly CyAzAz: "Cy_az_AZ";
    readonly CySrSp: "Cy_sr_SP";
    readonly CyUzUz: "Cy_uz_UZ";
    readonly Da: "da";
    readonly DaDk: "da_DK";
    readonly De: "de";
    readonly DeAt: "de_AT";
    readonly DeCh: "de_CH";
    readonly DeDe: "de_DE";
    readonly DeLi: "de_LI";
    readonly DeLu: "de_LU";
    readonly DivMv: "div_MV";
    readonly Dv: "dv";
    readonly Dz: "dz";
    readonly Ee: "ee";
    readonly El: "el";
    readonly ElGr: "el_GR";
    readonly En: "en";
    readonly EnAu: "en_AU";
    readonly EnBz: "en_BZ";
    readonly EnCa: "en_CA";
    readonly EnCb: "en_CB";
    readonly EnGb: "en_GB";
    readonly EnIe: "en_IE";
    readonly EnJm: "en_JM";
    readonly EnNz: "en_NZ";
    readonly EnPh: "en_PH";
    readonly EnTt: "en_TT";
    readonly EnUs: "en_US";
    readonly EnZa: "en_ZA";
    readonly EnZw: "en_ZW";
    readonly Eo: "eo";
    readonly Es: "es";
    readonly EsAr: "es_AR";
    readonly EsBo: "es_BO";
    readonly EsCl: "es_CL";
    readonly EsCo: "es_CO";
    readonly EsCr: "es_CR";
    readonly EsDo: "es_DO";
    readonly EsEc: "es_EC";
    readonly EsEs: "es_ES";
    readonly EsGt: "es_GT";
    readonly EsHn: "es_HN";
    readonly EsMx: "es_MX";
    readonly EsNi: "es_NI";
    readonly EsPa: "es_PA";
    readonly EsPe: "es_PE";
    readonly EsPr: "es_PR";
    readonly EsPy: "es_PY";
    readonly EsSv: "es_SV";
    readonly EsUy: "es_UY";
    readonly EsVe: "es_VE";
    readonly Et: "et";
    readonly EtEe: "et_EE";
    readonly Eu: "eu";
    readonly EuEs: "eu_ES";
    readonly Fa: "fa";
    readonly FaIr: "fa_IR";
    readonly Ff: "ff";
    readonly Fi: "fi";
    readonly FiFi: "fi_FI";
    readonly Fj: "fj";
    readonly Fo: "fo";
    readonly FoFo: "fo_FO";
    readonly Fr: "fr";
    readonly FrBe: "fr_BE";
    readonly FrCa: "fr_CA";
    readonly FrCh: "fr_CH";
    readonly FrFr: "fr_FR";
    readonly FrLu: "fr_LU";
    readonly FrMc: "fr_MC";
    readonly Fy: "fy";
    readonly Ga: "ga";
    readonly Gd: "gd";
    readonly Gl: "gl";
    readonly GlEs: "gl_ES";
    readonly Gn: "gn";
    readonly Gu: "gu";
    readonly GuIn: "gu_IN";
    readonly Gv: "gv";
    readonly Ha: "ha";
    readonly He: "he";
    readonly HeIl: "he_IL";
    readonly Hi: "hi";
    readonly HiIn: "hi_IN";
    readonly Ho: "ho";
    readonly Hr: "hr";
    readonly HrHr: "hr_HR";
    readonly Ht: "ht";
    readonly Hu: "hu";
    readonly HuHu: "hu_HU";
    readonly Hy: "hy";
    readonly HyAm: "hy_AM";
    readonly Hz: "hz";
    readonly Ia: "ia";
    readonly Id: "id";
    readonly Ie: "ie";
    readonly Ig: "ig";
    readonly Ii: "ii";
    readonly Ik: "ik";
    readonly Io: "io";
    readonly Is: "is";
    readonly IsIs: "is_IS";
    readonly It: "it";
    readonly ItCh: "it_CH";
    readonly ItIt: "it_IT";
    readonly Iu: "iu";
    readonly Ja: "ja";
    readonly JaJp: "ja_JP";
    readonly Jv: "jv";
    readonly Ka: "ka";
    readonly KaGe: "ka_GE";
    readonly Kg: "kg";
    readonly Ki: "ki";
    readonly Kj: "kj";
    readonly Kk: "kk";
    readonly KkKz: "kk_KZ";
    readonly Kl: "kl";
    readonly Km: "km";
    readonly Kn: "kn";
    readonly KnIn: "kn_IN";
    readonly Ko: "ko";
    readonly KoKr: "ko_KR";
    readonly Kr: "kr";
    readonly Ks: "ks";
    readonly Ku: "ku";
    readonly Kv: "kv";
    readonly Kw: "kw";
    readonly Ky: "ky";
    readonly KyKz: "ky_KZ";
    readonly La: "la";
    readonly Lb: "lb";
    readonly Lg: "lg";
    readonly Li: "li";
    readonly Ln: "ln";
    readonly Lo: "lo";
    readonly Lt: "lt";
    readonly LtAzAz: "Lt_az_AZ";
    readonly LtLt: "lt_LT";
    readonly LtSrSp: "Lt_sr_SP";
    readonly LtUzUz: "Lt_uz_UZ";
    readonly Lu: "lu";
    readonly Lv: "lv";
    readonly LvLv: "lv_LV";
    readonly Mg: "mg";
    readonly Mh: "mh";
    readonly Mi: "mi";
    readonly Mk: "mk";
    readonly MkMk: "mk_MK";
    readonly Ml: "ml";
    readonly Mn: "mn";
    readonly MnMn: "mn_MN";
    readonly Mr: "mr";
    readonly MrIn: "mr_IN";
    readonly Ms: "ms";
    readonly MsBn: "ms_BN";
    readonly MsMy: "ms_MY";
    readonly Mt: "mt";
    readonly My: "my";
    readonly Na: "na";
    readonly Nb: "nb";
    readonly NbNo: "nb_NO";
    readonly Nd: "nd";
    readonly Ne: "ne";
    readonly Ng: "ng";
    readonly Nl: "nl";
    readonly NlBe: "nl_BE";
    readonly NlNl: "nl_NL";
    readonly Nn: "nn";
    readonly NnNo: "nn_NO";
    readonly No: "no";
    readonly Nr: "nr";
    readonly Nv: "nv";
    readonly Ny: "ny";
    readonly Oc: "oc";
    readonly Oj: "oj";
    readonly Om: "om";
    readonly Or: "or";
    readonly Os: "os";
    readonly Pa: "pa";
    readonly PaIn: "pa_IN";
    readonly Pi: "pi";
    readonly Pl: "pl";
    readonly PlPl: "pl_PL";
    readonly Ps: "ps";
    readonly Pt: "pt";
    readonly PtBr: "pt_BR";
    readonly PtPt: "pt_PT";
    readonly Qu: "qu";
    readonly Rm: "rm";
    readonly Rn: "rn";
    readonly Ro: "ro";
    readonly RoRo: "ro_RO";
    readonly Ru: "ru";
    readonly RuRu: "ru_RU";
    readonly Rw: "rw";
    readonly Sa: "sa";
    readonly SaIn: "sa_IN";
    readonly Sc: "sc";
    readonly Sd: "sd";
    readonly Se: "se";
    readonly Set: "set";
    readonly SetId: "set_ID";
    readonly Sg: "sg";
    readonly Si: "si";
    readonly Sk: "sk";
    readonly SkSk: "sk_SK";
    readonly Sl: "sl";
    readonly SlSi: "sl_SI";
    readonly Sm: "sm";
    readonly Sn: "sn";
    readonly So: "so";
    readonly Sq: "sq";
    readonly SqAl: "sq_AL";
    readonly Sr: "sr";
    readonly Ss: "ss";
    readonly St: "st";
    readonly Su: "su";
    readonly Sv: "sv";
    readonly SvFi: "sv_FI";
    readonly SvSe: "sv_SE";
    readonly Sw: "sw";
    readonly SwKe: "sw_KE";
    readonly Ta: "ta";
    readonly TaIn: "ta_IN";
    readonly Te: "te";
    readonly TeIn: "te_IN";
    readonly Tg: "tg";
    readonly Th: "th";
    readonly ThTh: "th_TH";
    readonly Ti: "ti";
    readonly Tk: "tk";
    readonly Tl: "tl";
    readonly Tn: "tn";
    readonly To: "to";
    readonly Tr: "tr";
    readonly TrTr: "tr_TR";
    readonly Ts: "ts";
    readonly Tt: "tt";
    readonly TtRu: "tt_RU";
    readonly Tw: "tw";
    readonly Ty: "ty";
    readonly Ug: "ug";
    readonly Uk: "uk";
    readonly UkUa: "uk_UA";
    readonly Ur: "ur";
    readonly UrPk: "ur_PK";
    readonly Uz: "uz";
    readonly Ve: "ve";
    readonly Vi: "vi";
    readonly ViVn: "vi_VN";
    readonly Vo: "vo";
    readonly Wa: "wa";
    readonly Wo: "wo";
    readonly Xh: "xh";
    readonly Yi: "yi";
    readonly Yo: "yo";
    readonly Za: "za";
    readonly Zh: "zh";
    readonly ZhChs: "zh_CHS";
    readonly ZhCht: "zh_CHT";
    readonly ZhCn: "zh_CN";
    readonly ZhHk: "zh_HK";
    readonly ZhMo: "zh_MO";
    readonly ZhSg: "zh_SG";
    readonly ZhTw: "zh_TW";
    readonly Zu: "zu";
};
export type Locale_LocationCode_Enum = (typeof localeLocationCodeEnum)[keyof typeof localeLocationCodeEnum];
export declare const localePageNameEnum: {
    readonly CheckoutCustomerInfo: "checkout_customer_info";
    readonly CheckoutDefault: "checkout_default";
    readonly CheckoutPaymentInfo: "checkout_payment_info";
    readonly CheckoutShippingInfo: "checkout_shipping_info";
    readonly HelloCart: "hello_cart";
    readonly HelloDefault: "hello_default";
    readonly HelloHomepage: "hello_homepage";
    readonly HelloItemDetails: "hello_item_details";
    readonly HelloItemList: "hello_item_list";
};
export type Locale_PageName_Enum = (typeof localePageNameEnum)[keyof typeof localePageNameEnum];
export declare const orderBy: {
    readonly Asc: "asc";
    readonly AscNullsFirst: "asc_nulls_first";
    readonly AscNullsLast: "asc_nulls_last";
    readonly Desc: "desc";
    readonly DescNullsFirst: "desc_nulls_first";
    readonly DescNullsLast: "desc_nulls_last";
};
export type Order_By = (typeof orderBy)[keyof typeof orderBy];
export declare const promptBulkJobProjectLabelEnum: {
    readonly AccountWebInlineTranslate: "account_web_inline_translate";
    readonly DashboardElementsCustomMessageTranslation: "dashboard_elements_custom_message_translation";
    readonly DashboardWebDynamicTranslate: "dashboard_web_dynamic_translate";
    readonly DashboardWebInlineTranslate: "dashboard_web_inline_translate";
    readonly DocsSeo: "docs_seo";
    readonly DocsTranslation: "docs_translation";
    readonly ElementsTranslation: "elements_translation";
    readonly ExploreSchemaValidation: "explore_schema_validation";
    readonly ZonosComDynamicTranslate: "zonos_com_dynamic_translate";
    readonly ZonosComInlineTranslate: "zonos_com_inline_translate";
    readonly ZonosComMdxTranslate: "zonos_com_mdx_translate";
};
export type Prompt_BulkJobProjectLabel_Enum = (typeof promptBulkJobProjectLabelEnum)[keyof typeof promptBulkJobProjectLabelEnum];
export declare const promptBulkJobStatusEnum: {
    readonly Completed: "completed";
    readonly InProgress: "in_progress";
    readonly Queued: "queued";
};
export type Prompt_BulkJobStatus_Enum = (typeof promptBulkJobStatusEnum)[keyof typeof promptBulkJobStatusEnum];
export type FailToGetQuoteErrorsQuery = {
    error_event_aggregate: {
        aggregate: {
            count: number;
        } | null;
        nodes: Array<{
            createdAt: string;
            endpoint: string;
            errors: Record<string, unknown> | Record<string, unknown>[];
            href: string | null;
            id: number;
            metadata: Record<string, unknown> | Record<string, unknown>[] | null;
            requestPayload: Record<string, unknown> | Record<string, unknown>[];
            responseBody: Record<string, unknown> | Record<string, unknown>[] | null;
            status: number;
        }>;
    };
};
export type LocaleCountryMessagesQuery = {
    locale_countryCodesPage: Array<{
        countryCodes: Array<string> | null;
        countryCodesPageMessageLinks: Array<{
            id: number;
            message: {
                id: number;
                localeFrom: string;
                localeTo: string;
                textFrom: string;
                textTo: string;
            };
        }>;
        id: number;
        pageName: Locale_PageName_Enum;
    }>;
};
export type GetConversionEventBySessionIdAndOrgIdQuery = {
    usage_conversionEvent: Array<{
        countryCode: string | null;
        createdAt: string;
        eventName: string;
        id: number;
        metadata: Record<string, unknown> | Record<string, unknown>[] | null;
        organizationId: string;
        sessionId: string | null;
        stepSeconds: number | null;
    }>;
};
export type InsertConversionEventMutation = {
    insert_usage_conversionEvent_one: {
        id: number;
    } | null;
};
export type CreateErrorEventMutation = {
    insert_error_event: {
        returning: Array<{
            errors: Record<string, unknown> | Record<string, unknown>[];
            id: number;
            status: number;
        }>;
    } | null;
};
export type CreateScriptLoadEventMutation = {
    insert_usage_scriptLoadEvent: {
        affected_rows: number;
        returning: Array<{
            id: number;
        }>;
    } | null;
};
export type GetAudienceByAspectKeyQuery = {
    feature_audienceAspectLink: Array<{
        audience: {
            entityLinks: Array<{
                entity: {
                    email: string | null;
                    storeId: number | null;
                };
            }>;
            name: Feature_AudienceName_Enum;
        };
    }>;
};
export type AllSettingsQuery = {
    bigcommerce_settings: Array<{
        authToken: string;
        domain: string;
        id: number;
        storeHash: string;
        zonosCredentialToken: string | null;
        zonosIsNewVersion: boolean;
        zonosStoreId: number | null;
    }>;
};
export type CleanupTestErrorsMutation = {
    delete_error_event: {
        affected_rows: number;
    } | null;
};
export type HasPreviousErrorsQuery = {
    error_event: Array<{
        endpoint: string;
        errors: Record<string, unknown> | Record<string, unknown>[];
        metadata: Record<string, unknown> | Record<string, unknown>[] | null;
        requestPayload: Record<string, unknown> | Record<string, unknown>[];
    }>;
};
export type InsertOrderImportLockMutation = {
    insert_bigcommerce_orderImportLock_one: {
        id: number;
        note: string;
        orderId: string;
    } | null;
};
export type DeleteOrderImportLockMutation = {
    delete_bigcommerce_orderImportLock: {
        returning: Array<{
            id: number;
            note: string;
            orderId: string;
        }>;
    } | null;
};
export type InsertReserveOrderMutation = {
    insert_bigcommerce_reserveOrder: {
        returning: Array<{
            cartId: string;
            id: number;
        }>;
    } | null;
};
export type GetReserveOrderQuery = {
    bigcommerce_reserveOrder: Array<{
        cartId: string;
        id: number;
        orderId: string | null;
        storeHash: string;
    }>;
};
export type DeleteReserveOrdersMutation = {
    delete_bigcommerce_reserveOrder: {
        returning: Array<{
            id: number;
        }>;
    } | null;
};
export type DeleteAllStoreReserveOrdersMutation = {
    delete_bigcommerce_reserveOrder: {
        returning: Array<{
            id: number;
        }>;
    } | null;
};
export type UpdateReserveOrderMutation = {
    update_bigcommerce_reserveOrder_by_pk: {
        cartId: string;
        id: number;
        orderId: string | null;
        storeHash: string;
    } | null;
};
export type InsertReserveOrderEventMutation = {
    insert_bigcommerce_reserveOrderEvent_one: {
        id: number;
    } | null;
};
export type GetBigCommerceSettingsQuery = {
    bigcommerce_settings: Array<{
        authToken: string;
        createCustomerEnabled: boolean;
        dimensionUnits: string;
        domain: string;
        id: number;
        reserveOrderEnabled: boolean;
        storeHash: string;
        user: string;
        weightUnits: string;
        zonosCredentialToken: string | null;
        zonosIsNewVersion: boolean;
        zonosStoreId: number | null;
    }>;
};
export type UpsertBigCommerceSettingsMutation = {
    insert_bigcommerce_settings_one: {
        authToken: string;
        createCustomerEnabled: boolean;
        createdAt: string;
        dimensionUnits: string;
        domain: string;
        id: number;
        reserveOrderEnabled: boolean;
        storeHash: string;
        updatedAt: string;
        user: string;
        weightUnits: string;
        zonosCredentialToken: string | null;
        zonosIsNewVersion: boolean;
        zonosStoreId: number | null;
    } | null;
};
export type DeleteBigCommerceSettingsMutation = {
    delete_bigcommerce_settings: {
        affected_rows: number;
    } | null;
};
export type GetSettingsReserveOrdersQuery = {
    bigcommerce_settings: Array<{
        authToken: string;
        reserveOrders: Array<{
            cartId: string;
            orderId: string | null;
        }>;
        storeHash: string;
    }>;
};
export type InsertBigCommerceSettingsEventMutation = {
    insert_bigcommerce_settingsEvent_one: {
        id: number;
    } | null;
};
export type StoreVersionSettingQuery = {
    ux_zonosElementsSetting: Array<{
        currentVersion: string;
        previousVersion: string | null;
        storeId: number | null;
        token: string | null;
    }>;
};
export type CreateStoreVersionSettingMutation = {
    insert_ux_zonosElementsSetting: {
        affected_rows: number;
        returning: Array<{
            currentVersion: string;
            previousVersion: string | null;
            storeId: number | null;
        }>;
    } | null;
};
export type CleanupTestZonosElementSettingMutation = {
    delete_ux_zonosElementsSetting: {
        affected_rows: number;
    } | null;
};
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    allSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<AllSettingsQuery>;
    cleanupTestErrors(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CleanupTestErrorsMutation>;
    cleanupTestZonosElementSetting(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CleanupTestZonosElementSettingMutation>;
    createErrorEvent(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateErrorEventMutation>;
    createScriptLoadEvent(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateScriptLoadEventMutation>;
    createStoreVersionSetting(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateStoreVersionSettingMutation>;
    deleteAllStoreReserveOrders(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteAllStoreReserveOrdersMutation>;
    deleteBigCommerceSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteBigCommerceSettingsMutation>;
    deleteOrderImportLock(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOrderImportLockMutation>;
    deleteReserveOrders(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteReserveOrdersMutation>;
    failToGetQuoteErrors(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<FailToGetQuoteErrorsQuery>;
    getAudienceByAspectKey(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAudienceByAspectKeyQuery>;
    getBigCommerceSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBigCommerceSettingsQuery>;
    getConversionEventBySessionIdAndOrgId(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetConversionEventBySessionIdAndOrgIdQuery>;
    getReserveOrder(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetReserveOrderQuery>;
    getSettingsReserveOrders(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSettingsReserveOrdersQuery>;
    hasPreviousErrors(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<HasPreviousErrorsQuery>;
    insertBigCommerceSettingsEvent(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertBigCommerceSettingsEventMutation>;
    insertConversionEvent(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertConversionEventMutation>;
    insertOrderImportLock(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertOrderImportLockMutation>;
    insertReserveOrder(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertReserveOrderMutation>;
    insertReserveOrderEvent(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertReserveOrderEventMutation>;
    localeCountryMessages(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<LocaleCountryMessagesQuery>;
    storeVersionSetting(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<StoreVersionSettingQuery>;
    updateReserveOrder(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateReserveOrderMutation>;
    upsertBigCommerceSettings(variables?: {
        [x: string]: never;
    }, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpsertBigCommerceSettingsMutation>;
};
export type Sdk = ReturnType<typeof getSdk>;
