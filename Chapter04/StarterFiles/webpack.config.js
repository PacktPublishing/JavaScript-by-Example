/**
 * Environment variables used in this configuration:
 * NODE_ENV
 */

require('dotenv').config();
const webpack = require('webpack');
const glob = require('glob-all');
// const PurifyCSSPlugin = require('purifycss-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * flag Used to check if the environment is production or not
 */
const isProduction = (process.env.NODE_ENV === 'production');

/**
 * Include hash to filenames for cache busting - only at production
 */
const fileNamePrefix = isProduction? '[chunkhash].' : '';

/**
 * An instance of ExtractTextPlugin
 */
const extractLess = new ExtractTextPlugin({
    filename: fileNamePrefix + "[name].css",
});

/**
 * Options to clean dist folder
 */
const pathsToClean = [
  'dist'
];
const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: [],
};

module.exports = {
  context: __dirname,
  entry: {
    home: './src/js/home.js',
  },
  output: {
      path: __dirname + "/dist",
      filename: fileNamePrefix + '[name].js',
      publicPath: '/dist/',
      library: 'bundle'
  },
  devServer: { // Configuration for webpack-dev-server
    compress: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015'],
            plugins: ['transform-custom-element-classes']
          }
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]'
            }
          },
          'img-loader' // optional image compression remove this if img-loader binary build fails in your OS
        ],
      },
      {
        test: /\.(less|css)$/,
        use:
        isProduction
        ?
          extractLess.extract({ // Use the instance of ExtractTextPlugin for CSS files
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ],
            fallback: {
              loader: 'style-loader',
              options: {
                sourceMap: true
              }
            },
          })
        :
          [
            {
              loader: 'style-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true
              }
            }
          ]
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.DefinePlugin({ // Remove this plugin if you don't plan to define any global constants
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};


/**
 * Non-Production plugins
 */
if(!isProduction) {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin() // HMR plugin will cause problems with [chunkhash]
  );
}

/**
 * Production only plugins
 */
if(isProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true // use false if you want to disable source maps in production
    }),
    extractLess, // Make sure ExtractTextPlugin instance is included in array before the PurifyCSSPlugin
    // new PurifyCSSPlugin({ // PurifyCSSPlugin disabled since it causes problems with bootstrap animation & toastr
    //   paths: glob.sync([
    //     __dirname + '/*.html',
    //     __dirname + '/node_modules/jquery/dist/*.js',
    //     __dirname + './node_modules/bootstrap/dist/js/*.js',
    //     __dirname + './node_modules/toastr/toastr.js'
    //   ]),
    //   minimize: true,
    // }),
    function() { // Create a manifest.json file that contain the hashed file names of generated static resources
      this.plugin("done", function(status) {
        require("fs").writeFileSync(
          __dirname + "/dist/manifest.json",
          JSON.stringify(status.toJson().assetsByChunkName)
        );
      });
    },
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  );
}
