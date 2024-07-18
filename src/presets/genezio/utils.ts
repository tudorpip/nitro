import { resolve, dirname } from "pathe";
import fsp from "node:fs/promises";
import type { Nitro } from "nitropack/types";
export async function generateFunctionFiles(nitro: Nitro) {
  const name = await getNameFromPackage();
  const initialPath = dirname(nitro.options.output.dir);
  const genezioConfigPath = resolve(initialPath, "genezio.yaml");
  const genezioConfigContent = `
  # The name of the project.
  name: ${name}
  # The version of the Genezio YAML configuration to parse.
  yamlVersion: 2
  backend:
    path: .output/
    language:
        name: js
        packageManager: npm
    functions:
        - name: nitroServer
          path: server/
          handler: handler
          entry: index.mjs
          type: aws
  `.trim();
  try {
    await fsp.writeFile(genezioConfigPath, genezioConfigContent, {
      flag: "wx",
    });
  } catch {
    return;
  }
}
async function getNameFromPackage() {
  const defaultName = "nitro-app";
  try {
    const packageLockContent = await fsp.readFile("package-lock.json", "utf8");
    const packageLockJson = JSON.parse(packageLockContent);
    if (packageLockJson.name) {
      return packageLockJson.name;
    }
    return defaultName;
  } catch {
    return defaultName;
  }
}
