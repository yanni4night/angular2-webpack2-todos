/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.build.js
 *
 * changelog
 * 2016-10-27[15:17:01]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge({
    plugins: [
        new DashboardPlugin()
    ]
});