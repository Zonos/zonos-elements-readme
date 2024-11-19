/**
 * Converts an HTML string to Markdown format, strips unnecessary Markdown tags,
 * and returns an array of cleaned Markdown text blocks..
 *
 * This utility function is useful for transforming HTML into Markdown and cleaning
 * it by removing extra or unwanted Markdown elements, resulting in an array of
 * plain Markdown text segments.
 *
 * @param {string} htmlString - The input HTML string to be converted and cleaned.
 *
 * @example
 * const htmlInput = "<h1>Hello World</h1><p>This is a paragraph.</p>";
 * const result = cleanHtmlMarkdown(htmlInput);
 * console.info(result); // Outputs cleaned HTML after conversion and processing
 */
export declare const cleanHtmlMarkdown: (htmlString: string) => string[];
