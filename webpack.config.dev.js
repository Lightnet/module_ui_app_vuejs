const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path          = require('path');

console.log(path.resolve(__dirname, 'public'))

module.exports = {
    mode: "development",
    entry: [
        './src/client/index.js'
    ],
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
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    output:{
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    }
};