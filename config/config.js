/**
 * Copyright (C) 2016 yanni4night.com
 * config.js
 *
 * changelog
 * 2016-10-25[09:56:47]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

const highPriorityChunks = ['vendor', 'polyfill', 'common'];// later, higher

module.exports = {
    OUTPUT: 'dist',
    sortChunks: (prev, next) => {
        const prevName = prev.names[0];
        const nextName = next.names[0];

        return highPriorityChunks.indexOf(prevName) < highPriorityChunks.indexOf(nextName);
    }
};
