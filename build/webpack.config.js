
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); 
module.exports={
    devtool: '#source-map',
    entry:{
        main:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,"../dist/static"),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!postcss-loader'
            },
            {
                test:/\.styl$/,
                loader:'stylus-loader'
            },
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(path.resolve(__dirname,"../dist")),
        new HtmlWebpackPlugin({
            filename: path.join(path.resolve(__dirname,"../dist"),'index.html'),
            template: 'index.html',
            inject: true
          })
    ],
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 8080
      }

}