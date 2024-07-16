import type { IDeepKeyof, IDeepPropertyType } from "../../types/utils/deep/IDeepKeyof";
/**
 * Will change a nested property on an object, and return a copy of the object with only that property changed.
 *
 * If a leaf field is optional, and not specified on the initial object, it will add it.
 *
 * Uses lodash `set` internally. @link https://lodash.com/docs/4.17.15#set
 *
 * @param propertyPath The path to the property, with nested keys separated by the delimiter.
 * @param value The value to change it to.
 *
 * @example
 * const t: T = {
    my: {
      friend: {
        paul: {
          age: 32,
        },
      },
    },
  };

    const out = changeDeepProperty({
      obj: t,
      propertyPath: 'my.friend.paul.age',
      value: 40
    );

    // Output:
    out === {
      my: {
        friend: {
          paul: {
            age: 40,
          },
        },
      },
    };
 */
export declare const changeDeepProperty: <T extends Record<string, unknown>, P extends IDeepKeyof<T, Depth>, Depth extends 0 | 1 | 2 | 3 | 5 | 8 | 6 | 4 | 7 | 9 = 4>({ obj, propertyPath, value, }: {
    obj: T;
    propertyPath: P;
    value: IDeepPropertyType<T, P, Depth>;
}) => T;
