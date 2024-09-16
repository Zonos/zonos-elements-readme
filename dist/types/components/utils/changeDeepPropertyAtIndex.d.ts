import type { IDeepKeyofAtIndex, IDeepPropertyTypeAtIndex } from "../../types/utils/deep/IDeepKeyofAtIndex";
/**
 * Will change a nested property on an object (with array), and return a copy of the object with only that property changed.
 *
 * If a leaf field is optional, and not specified on the initial object, it will add it.
 *
 * **KeyPath only suggest on the field path that has array**
 *
 * Uses lodash `set` internally. @link https://lodash.com/docs/4.17.15#set
 *
 * @param propertyPath The path to the property, with nested keys separated by the delimiter.
 * @param index Position of desired field want to set
 * @param value The value to change it to.
 *
 * @example
 * const t = {
    my: {
      friend: {
        paul: {
          age: 32,
          childrens: [
            {
              name: "Janny",
              sex: "MALE",
            },
            {
              name: "Kicha",
              sex: "FEMALE"
            }
          ]
        },
      },
    },
  };

    const out = changeDeepPropertyAtIndex(
      obj: t, propertyPath: 'my.friend.paul.childrens[number].name',
      index: 1, value:
      "Ketchup"
    );

    // Output:
    out === {
      my: {
        friend: {
          paul: {
            age: 32,
            childrenName: [
              {
                name: "Janny";
                sex: "MALE",
              },
              {
                name: "Ketchup" // <== Change here
                sex: "FEMALE"
              }
            ]
          },
        },
      },
    };
 */
export declare const changeDeepPropertyAtIndex: <T extends object, P extends IDeepKeyofAtIndex<T, Depth>, Depth extends 0 | 2 | 1 | 3 | 5 | 8 | 4 | 6 | 7 | 9 = 4>({ index, obj, propertyPath, value, }: {
    index: number;
    obj: T;
    propertyPath: P;
    value: IDeepPropertyTypeAtIndex<T, P, Depth>;
}) => T;
