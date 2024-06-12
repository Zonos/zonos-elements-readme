import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  { languageOptions: { globals: globals.browser } },
  {
    ...pluginJs.configs.recommended,
    files: ["__tests__/**/*.ts"],
  },
  {
    ...eslintPluginPrettier,
    files: ["__tests__/**/*.ts"],
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["__tests__/**/*.ts"],
  })),
];
