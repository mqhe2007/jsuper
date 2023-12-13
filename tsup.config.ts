import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: "esm",
  dts: true,
  // experimentalDts: true,
  sourcemap: true,
  clean: true,
  target: "esnext",
  minify: true,
});
