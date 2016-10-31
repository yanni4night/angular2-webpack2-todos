const webpack = require('webpack');
const path = require('path');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CONFIG = require('./config.js');

module.exports = {
    entry: {
        index: './src/index/index.aot.ts',
        about: './src/about/about.aot.ts',
        polyfill: './src/polyfill.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        filename: '[name].[chunkhash].js',
        publicPath: './',
        path: path.join(__dirname, '..', CONFIG.OUTPUT)
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript',
                'angular2-template'
            ],
            exclude: [/\.(spec|e2e)\.ts$/]
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css?minimize!postcss!less"
            })
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: `url?limit=10240&name=[name].[hash].[ext]`
        }]
    },
    bail: true,
    profile: true,
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: [`rm -rf ${CONFIG.OUTPUT}`]
        }),
        new ExtractTextPlugin(`[name].[contenthash].css`),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: `[name].[hash].js`,
            chunks: ['index', 'about', 'polyfill', 'vendor']
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: './src/index/index.html',
            chunks: ['index', 'polyfill', 'vendor', 'common'],
            chunksSortMode: CONFIG.sortChunks
        }),
        new HtmlWebpackPlugin({
            title: 'about',
            filename: 'about.html',
            template: './src/about/about.html',
            chunks: ['about', 'polyfill', 'vendor', 'common'],
            chunksSortMode: CONFIG.sortChunks
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};
