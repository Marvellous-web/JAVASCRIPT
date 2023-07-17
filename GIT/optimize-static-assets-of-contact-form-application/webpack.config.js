// provide webpack configuration code here

const path= require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode : 'development',
    entry : './src/js/script.js',
    output:{
        filename : 'main.js',
        path : path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin ({
            filename : 'home.html',
            template : path.resolve(__dirname,'./src/index.html')
        })
    ],
    module:{
        rules:[
            {test:/\.css$/, use:['style-loader','css-loader']}
        ]
    }
};