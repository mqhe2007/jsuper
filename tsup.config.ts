import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  // experimentalDts: true,
  sourcemap: true,
  clean: true,
  target: "esnext",
  minify: true,
});
