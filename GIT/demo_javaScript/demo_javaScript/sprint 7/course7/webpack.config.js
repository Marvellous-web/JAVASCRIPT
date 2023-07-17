const path= require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.export ={
    mode : 'development',
    entry : './src/demo.js',
    output:{
        filname : 'main.js',
        path : path.resolve(__dirname,'dist')
    },
    Plugins: [
        new HtmlWebpackPlugin ({
            filname : 'insex.html',
            template : path.resolve(__dirname,'src/demo.html')
        })
    ]
    
};