type LogType = 'warn' | 'info' | 'log' | 'error';
export declare const allLogs: string[];
export declare const getElapsedTime: () => {
    elapsedTime: number;
    elapsedTimePretty: string;
};
export declare const log: (message: unknown, type?: LogType, ..._additionalInfo: unknown[]) => void;
export {};
