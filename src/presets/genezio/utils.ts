import { resolve, dirname } from "pathe";
import fsp from "node:fs/promises";
import type { Nitro } from "nitropack/types";
import { error } from "openapi-typescript";

export async function generateFunctionFiles(nitro: Nitro) {
  const initialPath = dirname(nitro.options.output.dir);
  const genezioConfigPath = resolve(initialPath, "genezio.yaml");
  const genezioConfigContent = `
  # The name of the project.
  name: NitroApp
  # The region where the project is deployed. Available regions: us-east-1, eu-central-1
  region: us-east-1
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
