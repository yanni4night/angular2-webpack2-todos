const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript'
            ],
            exclude: [/\.e2e\.ts$/]
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css!postcss!less"
            })
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: `url?limit=10240&name=[name].[ext]`
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new ExtractTextPlugin(`[name].css`),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
