import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "jsuper",
  },
  plugins: [
    json(),
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
    terser(),
  ],
};
