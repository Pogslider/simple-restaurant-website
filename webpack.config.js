
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname,'dist'),
        },
        compress: false,
        port: 9000,
        hot: true,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/, // находим все файлы .css
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource', // Используйте asset/resource для Webpack 5
                generator: {
                    filename: './assets/images/[name][hash][ext]', // Путь к изображениям в dist
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname,'assets/images'), to: path.resolve(__dirname,'dist') }, // Копирование изображений в dist
            ],
        }),
    ]
};
