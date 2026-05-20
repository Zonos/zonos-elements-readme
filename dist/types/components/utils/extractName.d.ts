/**
 * Extract first name and last name from the name string
 * If first name and last name are provided, use them
 * If name is provided, extract and return the first and last name from the name string
 * If neither are provided, return an empty object
 */
export declare const extractName: ({ firstName, lastName, name, }: {
    firstName?: string;
    lastName?: string;
    name?: string;
}) => {
    firstName: string;
    lastName: string;
};
