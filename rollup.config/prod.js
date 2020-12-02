import config from "./base";
import { terser } from "rollup-plugin-terser";
config.plugins.push(terser());
export default config;
