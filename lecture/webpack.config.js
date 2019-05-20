const path = require('path');

// webpack 실행 방법: npx webpack
module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 실서비스: hidden-source-map
    resolve:{
        extensions: ['*', '.js', '.jsx']
    },
    entry:{
        entry: './src/index.js',
    }, // 입력
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
            options:{
                presets:[
                   ['@babel/preset-env', {
                        targets:{
                            browsers: ["> 5% in KR"], // browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "react-hot-loader/babel"
                ],
            }
        }]
    },
    plugins:[],
    output: {
        publicPath: './dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
      },
      devServer: {
        contentBase: './dist'
      }
};