// vueでscssを使うための設定
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "./src/assets/scss/prepends.scss";'
            }
        }
    }
};
