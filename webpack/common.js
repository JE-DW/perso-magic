var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');
var tslint = require('tslint');

module.exports = {

    output: {
        path: helpers.root('dist/'),
        filename: '[name].js'
    },

    entry: {
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: /default\.scss$/,
                loader: 'css-to-string-loader!css!sass'
            },
            {
                test: /\.scss$/,
                include: /default\.scss$/,
                loader: 'style-loader!style!css!sass'
            }
        ],
        noParse: [
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                htmlLoader: {
                    minimize: false
                },
                sassLoader: {
                    includePaths: [
                        helpers.root('src/style')
                    ]
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets/images',
                to: 'assets/images'
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: 'node_modules/systemjs/dist/system.src.js',
                to: 'vendor/systemjs/system.src.js'
            }
        ]),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        )
    ]
};
