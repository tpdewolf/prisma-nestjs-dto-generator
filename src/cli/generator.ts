import { generatorHandler } from "@prisma/generator-helper";
import { generate } from "./prisma-generator";

generatorHandler({
  onManifest: () => ({
    defaultOutput: "node_modules/@generated/type-graphql",
    prettyName: "Custom integration",
    requiresGenerators: ["prisma-client-js"],
  }),
  onGenerate: generate,
});
