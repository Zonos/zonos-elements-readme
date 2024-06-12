import { globSync } from "glob";
import { existsSync, rmSync, writeFileSync } from "fs";
import { cwd } from "process";

const redundantFilesToRemove = [
  `${cwd()}/src/types/generated/graphql.customer.types.ts`,
  `${cwd()}/src/types/generated/graphql.frontend.types.ts`,
];

const removeRedundantFiles = () => {
  redundantFilesToRemove.forEach((file) => {
    rmSync(file, { force: true });
  });
};

const rewriteEnvironmentFile = () => {
  // cleanup environment.d.ts
  const environmentPath = `${cwd()}/src/environment.d.ts`;
  // Only rewrite if the file exists
  if (!existsSync(environmentPath)) {
    return;
  }

  // Rewrite the file to only export empty object
  const fileContent = `export type Env = {};`;
  writeFileSync(environmentPath, fileContent);
};

/**
 * Check if the given path has production code (non-declaration files)
 * @param path glob path to check for production code (no extension needed)
 * @returns list of non-declaration files
 */
export const productionCodeCheck = (path: string) => {
  // Delete .ts file in "generated" folder
  removeRedundantFiles();

  // Rewrite the file to only export empty object
  rewriteEnvironmentFile();

  const fullPathWithExt = `${path}/**/*.{ts*,js*}`;
  const globPaths = globSync(fullPathWithExt);
  const hasNonDeclarationFiles = globPaths
    .filter((filePath) => !filePath.endsWith(".d.ts"))
    // Take out the current working directory from the file path
    .map((filePath) => filePath.replace(`${cwd()}/`, "./"));

  // Determine if there are files that are not declaration files, indicating the presence of production code
  return hasNonDeclarationFiles;
};
