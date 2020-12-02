import config from "./base";
import browsersync from "rollup-plugin-browsersync";
config.output.sourcemap = true;
config.plugins.push(browsersync({ server: ["dist", "static"] }));
export default config;
