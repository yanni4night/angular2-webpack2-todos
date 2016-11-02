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
