import { defineNitroPreset } from "nitropack/kit";

const genezio = defineNitroPreset(
  {
    extends: "aws_lambda",
  },
  {
    name: "genezio" as const,
    stdName: "genezio",
    url: import.meta.url,
  }
);
export default [genezio] as const;
