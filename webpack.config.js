const path = require('path');
//const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./test/index.js'],
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './js'
    }
}