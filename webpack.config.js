// webpack.config.js
module.exports = {
  // ... autres configurations ...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      // ... autres règles ...
    ],
  },
};
