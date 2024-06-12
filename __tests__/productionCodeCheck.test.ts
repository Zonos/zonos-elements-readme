import { productionCodeCheck } from "__tests__/productionCodeCheck";
import { cwd } from "process";

describe("Make sure there is no production code in this repository", () => {
  test("Shoud not have js or ts files under `src` folder", () => {
    const directoryPath = `${cwd()}/src`;
    const hasProductionCode = productionCodeCheck(directoryPath);
    expect(hasProductionCode).toStrictEqual([]);
  });

  test("Should give back all non declaration files in the mock folder", () => {
    const mockFolderPath = `${cwd()}/__tests__/__mocks__/productionCodeCheck`;
    const hasProductionCode = productionCodeCheck(mockFolderPath);
    expect(hasProductionCode).toMatchInlineSnapshot(`
      [
        "./__tests__/__mocks__/productionCodeCheck/mockTypescriptFile.ts",
        "./__tests__/__mocks__/productionCodeCheck/mockTsxFile.tsx",
        "./__tests__/__mocks__/productionCodeCheck/mockJsxFile.jsx",
        "./__tests__/__mocks__/productionCodeCheck/mockJsFile.js",
      ]
    `);
  });
});
