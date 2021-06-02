const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3001
  },
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
		exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
        use: {
          loader: "babel-loader",
		    options: {
              presets: ['@babel/preset-env'],
            }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
		  MiniCssExtractPlugin.loader,
          'css-loader',
		  'postcss-loader',
          'sass-loader',
        ],
      },
	  {
	    test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif|jpe?g)$/,
	    use: [
	      {
		    options: {
		      name: "[name].[ext]",
		      outputPath: "assets/",
		    },
		    loader: "file-loader"
	      }
	    ]
	  },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
	new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
  ]
};
