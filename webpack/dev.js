var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'developement';

let devConfig = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    stats: 'errors-only'
});

module.exports = function(env) {
    let public_path = './';

    if (env && env.public_path) {
        public_path = env.public_path;
    }

    var config = {
        output: {
            publicPath: public_path,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'PUBLIC_PATH': JSON.stringify(public_path),
                    'ENV':  JSON.stringify(ENV)
                }
            })
        ]
    };
    return webpackMerge(devConfig, config);
};