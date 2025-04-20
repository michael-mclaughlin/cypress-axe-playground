const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/components/index.tsx',
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                        {
                            loader: "babel-loader"
                        },
                        {
                            loader: 'react-svg-loader',
                            options: {
                                jsx: true // true outputs JSX tags
                            }
                        }
                    ],
                
            }
            
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'components', 'index.html'),
        }),
        // new MiniCssExtractPlugin({
        //   filename: "./src/yourfile.css",
        // }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
};
