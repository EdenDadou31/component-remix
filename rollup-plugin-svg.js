import url from "@rollup/plugin-url";

export default function svg(options = {}) {
  return url({
    include: ["**/*.svg"],
    limit: 10000,
    ...options,
  });
}
