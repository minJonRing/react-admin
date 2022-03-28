const path = require('path');
const WebpackBar = require('webpackbar');

const resolve = dir => path.resolve(__dirname, dir);
module.exports = (arvg) => {
    return {
        webpack: {
            alias: {
                '@': resolve('src')
            },
            plugins: [
                new WebpackBar(),
            ],
            configure: (webpackConfig) => {

                return webpackConfig;
            },
        },
    }
}