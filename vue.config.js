const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    overlay: false,
  },
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: { drop_console: true },
            output: { comments: false },
          },
        }),
      ],
    };
  },
};
