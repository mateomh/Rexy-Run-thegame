const path = require('path');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    'production-dependencies': ['phaser'],
  },
  output: {
    filename: 'app.main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: ['env'],
            // },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          { loader: 'file-loader' },
          {
            loader: 'image-webpack-loader',
            options: {
              // Compresses JPEG images
              mozjpeg: {
                progressive: true,
              },
              // Compresses PNG images
              optipng: {
                enabled: false,
              },
              // Compresses PNG images
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              // Compresses GIF images
              gifsicle: {
                interlaced: false,
              },
              // Compresses JPG and PNG into WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'production-dependencies',
      filename: 'production-dependencies.bundle.js',
    }),

    // new CopyWebpackPlugin([
    //   // {
    //   //   from: path.resolve(__dirname, 'index.html'),
    //   //   to: path.resolve(__dirname, 'dist'),
    //   // },
    //   {
    //     from: path.resolve(__dirname, 'assets/', '**', '*'),
    //     to: path.resolve(__dirname, 'dist/'),
    //   },
    // ]),
  ],
};