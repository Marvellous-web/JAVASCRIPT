const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development', 
    entry: './src/operations.js',   
    output:{
        filename: 'main.js', 
        path: path.resolve(__dirname,'dist')
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename:'index.html', 
            template: path.resolve(__dirname,'src/home.html')
        })
    ]
};