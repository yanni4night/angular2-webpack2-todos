/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.common.js
 *
 * changelog
 * 2016-10-25[12:00:29]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CONFIG = require('./config.js');

module.exports = {
    output: {
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
                'awesome-typescript?tsconfig=tsconfig.json',
                'angular2-template'
            ],
            exclude: [/\.(spec|e2e)\.ts$/]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css?minimize!postcss"
            })
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css?minimize!postcss!less"
            })
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: `url?limit=1024&name=[name].[hash].[ext]`
        }]
    },
    bail: true,
    profile: true,
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: [`rm -rf ${CONFIG.OUTPUT}`]
        }),
        new ExtractTextPlugin(`[name].[contenthash].css`),
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
