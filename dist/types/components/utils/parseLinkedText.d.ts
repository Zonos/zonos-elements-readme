export type LinkedTextSegment = {
    type: 'text';
    value: string;
} | {
    href: string;
    text: string;
    type: 'link';
};
/**
 * Parse a string into an ordered list of plain-text and link segments.
 *
 * Supports Markdown-style links `[text](url)` and bare `https?://` URLs.
 * Anything else is returned as a plain text segment so callers can render it
 * as text (never `innerHTML`) — this is what keeps merchant-provided strings
 * safe from HTML injection in [[customMessage]] banners.
 *
 * @example
 * parseLinkedText('Visit [docs](https://example.com)')
 * // [
 * //   { type: 'text', value: 'Visit ' },
 * //   { type: 'link', href: 'https://example.com', text: 'docs' },
 * // ]
 */
export declare const parseLinkedText: (input: string) => LinkedTextSegment[];
