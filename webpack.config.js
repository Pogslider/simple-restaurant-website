
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'docs'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname,'docs'),
        },
        compress: false,
        port: 9000,
        hot: true,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/images/[name][hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname,'assets/images'), to: path.resolve(__dirname,'docs') },
            ],
        }),
    ]
};
