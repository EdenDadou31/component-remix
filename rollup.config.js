import url from "rollup-plugin-url";

export default {
  plugins: [
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ["**/*.svg"],
      emitFiles: true,
    }),
  ],
};
