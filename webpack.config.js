const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path          = require('path');

console.log(path.resolve(__dirname, 'public'))

module.exports = {
    entry: [
        //polyfill: '@babel/polyfill',
        //main: './src/client/index.js'
        './src/client/index.js'
    ],
    mode: "development",
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
        }),
        new VueLoaderPlugin()
    ],
    output:{
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    }
};