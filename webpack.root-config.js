const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

/**
 * Provides a root webpack configuration for development to be enhanced by
 * framework specific parameters
 *
 * @param {Object} framework framework definition with `name` and `folder` properties
 * @param {Object} options framework specific parameters
 */
function devConfig(framework, options) {
  const outputFolder = framework.output || framework.folder;

  return Object.assign(
    {
      // Input/Outpus management
      entry: {
        main: `./${framework.folder}/app.js`
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist', outputFolder),
        publicPath: '/'
      },
      // Building mode
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: {
        hot: true,
        publicPath: '/'
      },
      // Plugins
      plugins: [
        // https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
          title: framework.name,
          template: path.resolve(__dirname, framework.folder, 'index.html'),
          filename: 'index.html',
          // https://github.com/joshbuchea/HEAD#meta
          meta: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            'theme-color': '#1fa3c4',
            description: `Testing ${framework.name} framework`
          },
          // for reading/debugging
          minify: false
        }),
        new CleanWebpackPlugin([`dist/${framework.folder}`]),
        new ManifestPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ],
      // Module
      module: {
        rules: [
          {
            test: /\.(scss)$/,
            use: [
              { loader: 'style-loader' }, // inject CSS to page
              { loader: 'css-loader' }, // translates CSS into CommonJS modules
              {
                loader: 'postcss-loader', // Run postcss actions
                options: {
                  // postcss plugins, can be exported to postcss.config.js
                  plugins: function() {
                    return [require('autoprefixer')];
                  }
                }
              },
              { loader: 'sass-loader' } // compiles Sass to CSS
            ]
          }
        ]
      }
    },
    options
  );
}

module.exports = devConfig;
