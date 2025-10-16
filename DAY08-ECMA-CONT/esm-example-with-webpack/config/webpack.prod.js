const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const paths = require('./paths');

module.exports = function (env) {
    return merge(commonConfig(env), {
        mode: 'production',

        output: {
            path: paths.appBuildPath,
            publicPath: './',
            filename: `${paths.outputJSPath}[name].[hash].js`,
            chunkFilename: `${paths.outputJSPath}[id].[hash].chunk.js`
        },

        plugins: [
            new CleanWebpackPlugin()
        ],

        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        }
    });
}