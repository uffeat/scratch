import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import path from "node:path";
import { fileURLToPath } from "url";

/* Create __dirname to help aliases work reliably */
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  return {
    build: {
      manifest: true,
    },
    server: {
      cors: true,
      port: 3869,
    },
  };
});
