import type React from 'react';
/**
 * Filter out all of the undefined values from the object so we don't have undefined css variable values
 */
export declare const styles: (props: React.CSSProperties & {
    [key: string]: string | undefined;
}) => Record<string, string>;
