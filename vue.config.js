// vue.config.js
module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  pages: {
    index: {
      entry: "src/main.js",
      title: "cri_cafe"   
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
};