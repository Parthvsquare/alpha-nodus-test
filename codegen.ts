import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: [
    "./src/graphql/mutation/*.graphql",
    "./src/graphql/query/*.graphql",
  ],
  generates: {
    "./src/types/generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: true,
      },
      hooks: { afterOneFileWrite: ["tslint --fix"] },
    },
  },
  config: {
    namingConvention: "keep",
    withHooks: true,
  },
  hooks: { afterAllFileWrite: ["tslint --fix"] },
};
export default config;
