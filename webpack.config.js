const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //设置开发环境和生产环境
    mode: 'development',
    entry: {
        index: './lib/index.tsx'
    },
    //让webpck检测到这些后缀名的文件
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    //
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'FUI',
        libraryTarget: 'umd',
    },
    //设置相应的配置
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    //热更新html
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};