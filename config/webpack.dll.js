const webpack = require('webpack');
const path = require('path');

const vendors = [
    './src/polyfill.ts',
    './src/vendor.ts'
];

module.exports = {
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript',
            exclude: [/\.(spec|e2e)\.ts$/]
        }]
    },
    output: {
        path: path.join(__dirname, '..'),
        filename: '[name].js',
        library: '[name]_[hash]',
        libraryTarget: 'var'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    entry: {
        dll: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]_[hash]',
            context: __dirname
        }),
    ],
};
