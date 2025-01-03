export declare const placeTestOrder: () => Promise<{
    errors: string[];
    json: null;
} | {
    errors: never[];
    json: import("../../../types/generated/graphql.internal.types").OrderCreateMutation;
}>;
