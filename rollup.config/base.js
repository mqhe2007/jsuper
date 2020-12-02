import babel from "rollup-plugin-babel";
export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "jsuper",
  },
  plugins: [
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
  ],
};
