var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  //项目入口文件
  entry: ["@babel/polyfill", './src/main.js'],
  output: {
    //打包出口路径
    path: path.resolve(__dirname, './dist'),
    //通过devServer访问路径
    publicPath: '/dist/',
    //打包后的文件名
    filename: 'main.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },{
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
      },{
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader?indentedSyntax'
          ]
      },{
        test: /\.vue$/,
        loader: 'vue-loader'
      },{
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },{
        test: /\.js$/, exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  mode:'development',
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
};