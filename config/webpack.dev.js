/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.dev.js
 *
 * changelog
 * 2016-10-25[12:01:04]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

module.exports = webpackMerge(commonConfig, {
    output: {
        filename: '[name].[hash].js',
        publicPath: 'http://localhost:8080/'
    },
    plugins: [
        new BellOnBundlerErrorPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});