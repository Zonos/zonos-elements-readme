export declare const textOptions: {
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
export type Size = TextOptions[keyof TextOptions]['size'];
export type Type = keyof TextOptions;
export type FontWeight = TextOptions[keyof TextOptions]['weight'];
export {};
