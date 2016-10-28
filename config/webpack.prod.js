/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.prod.js
 *
 * changelog
 * 2016-10-25[12:07:30]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    entry: {
        index: './src/index/index.aot.ts',
        about: './src/about/about.aot.ts',
        polyfill: './src/polyfill.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
});
