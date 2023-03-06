const path = require("path");
console.log(__dirname);

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html", // source template
      filename: "index.html", // output as dist/index.html
      title: "Index Page", // when using title option,
    },
  },
  outputDir: path.join(__dirname, "..", "./backend/front"),
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
  },
  css: {
    extract: {
      filename:
        "filname" + "-" + require("./package.json").version + ".min.css",
    },
  },
  configureWebpack: {
    output: {
      filename: "filname" + "-" + require("./package.json").version + ".min.js",
    },
    optimization: {
      splitChunks: false,
    },
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
};
