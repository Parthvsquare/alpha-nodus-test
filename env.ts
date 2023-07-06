import { defineConfig } from "@julr/vite-plugin-validate-env";
import { z } from "zod";

export default defineConfig({
  validator: "zod",
  schema: {
    VITE_GRAPHQL_URL: z.string(),
    VITE_ACCESS_TOKEN: z.string(),
    VITE_TENANT_DEV: z.string(),
  },
});
