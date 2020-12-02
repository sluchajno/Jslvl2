const { merge } = require('webpack-merge') //нужен для того чтобы,
const base = require('./webpack.config.js')

module.exports = merge(base, {
    output: {
        publicPath: '/js'
    },
    devServer: {
        contentBase: './public',
        port: 8080,
        host: 'localhost',
        hot: true,
    }
})