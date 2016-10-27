/**
 * Copyright (C) 2016 yanni4night.com
 * webpack.config.js
 *
 * changelog
 * 2016-10-25[08:57:17]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const env = process.env.NODE_ENV;

switch (env) {
case 'prod':
case 'production':
    module.exports = require('./config/webpack.prod.js');
    break;
case 'dev':
case 'development':
    module.exports = require('./config/webpack.dev.js');
    break;
default:
    module.exports = require('./config/webpack.build.js');
}