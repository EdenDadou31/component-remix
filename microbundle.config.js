import svgr from "@svgr/rollup";
import svg from "rollup-plugin-svg";

export default {
  rollup(config, options) {
    config.plugins = [
      svgr(),
      svg({
        base64: true,
      }),
      ...config.plugins,
    ];
    return config;
  },
};
