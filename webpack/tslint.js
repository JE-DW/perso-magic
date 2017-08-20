var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'tslint-loader',
                enforce: 'pre',
            }
        ]
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        path: helpers.root('dist-linter'),
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
});
