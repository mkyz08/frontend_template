const path = require('path');
const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
    mode: 'development',
    entry: {
      "index": path.resolve(src, 'js/index.js'),
      "test": path.resolve(src, 'js/test.js'),
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: dist
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              loaders: ['style-loader', 'css-loader?modules'],
            },
        ]
    },
//    devServer: {
//        contentBase: dist,
//        hot: true,
//        port: 3000
//    },
//    plugins: [
//        new webpack.HotModuleReplacementPlugin(),
//        new HtmlWebpackPlugin()
//    ],
//    devtool: 'cheap-module-eval-source-map'
    devtool: 'inline-source-map'
}
