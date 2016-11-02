'use strict';
const webpack = require('webpack');
const path = require('path');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CONFIG = require('./config.js');

module.exports = {
    entry: {
        app: './src/browser.main.ts',
        polyfill: './src/polyfill.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '..', CONFIG.OUTPUT),
        publicPath: 'http://localhost:8080/'
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
                loader: "css!postcss!less"
            })
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: `url?limit=1024&name=[name].[ext]`
        }]
    },
    profile: true,
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: [`rm -rf ${CONFIG.OUTPUT}`]
        }),
        new ExtractTextPlugin(`[name].css`),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new BellOnBundlerErrorPlugin(),
        new webpack.DllReferencePlugin({
            sourceType: 'var',
            context: path.join(__dirname, '..'),
            manifest: require('../manifest.json')
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: './src/app.html',
            chunks: ['app', 'polyfill', 'vendor'],
            chunksSortMode: CONFIG.sortChunks
        }),
        new AddAssetHtmlPlugin({
            includeSourcemap: false,
            hash: true,
            filepath: require.resolve('../dll.js')
        })

    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        contentBase: `./${CONFIG.OUTPUT}`
    }
};
