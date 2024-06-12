import { globSync } from "glob";
import { rmSync, writeFileSync } from "fs";
import { cwd } from "process";

const redundantFilesToRemove = [
  `graphql.customer.types.ts`,
  `graphql.frontend.types.ts`,
];

const removeRedundantFiles = (path: string) => {
  const filePathsToRemove = globSync(
    redundantFilesToRemove.map((file) => `${path}/**/${file}`),
  );
  filePathsToRemove.forEach((file) => {
    rmSync(file, { force: true });
  });
};

const rewriteEnvironmentFile = (path: string) => {
  // cleanup environment.d.ts
  const environmentPaths = globSync(`${path}/**/environment.d.ts`);
  // Only rewrite if the file exists
  if (!environmentPaths.length) {
    return;
  }

  // Rewrite the file to only export empty object
  const fileContent = `export type Env = {};`;
  environmentPaths.forEach((environmentPath) => {
    writeFileSync(environmentPath, fileContent);
  });
};

/**
 * Check if the given path has production code (non-declaration files)
 * @param path glob path to check for production code (no extension needed)
 * @returns list of non-declaration files
 */
export const productionCodeCheck = (path: string) => {
  // Delete .ts file in "generated" folder
  removeRedundantFiles(path);

  // Rewrite the file to only export empty object
  rewriteEnvironmentFile(path);

  const fullPathWithExt = `${path}/**/*.{ts*,js*}`;
  const globPaths = globSync(fullPathWithExt);
  const hasNonDeclarationFiles = globPaths
    .filter((filePath) => !filePath.endsWith(".d.ts"))
    // Take out the current working directory from the file path
    .map((filePath) => filePath.replace(`${cwd()}/`, "./"));

  // Determine if there are files that are not declaration files, indicating the presence of production code
  return hasNonDeclarationFiles;
};
