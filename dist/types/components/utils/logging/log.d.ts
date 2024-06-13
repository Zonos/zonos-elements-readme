type LogType = 'warn' | 'info' | 'log' | 'error';
export declare const log: (message: unknown, type?: LogType, ...additionalInfo: unknown[]) => void;
export {};
