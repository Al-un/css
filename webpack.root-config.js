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
  // When output folder name is different from input folder name
  const outputFolder =
    'output' in framework ? framework.output : framework.folder;

  // Webpack root configuration
  return Object.assign(
    {
      // Input/Outpus management
      entry: {
        main: `./${framework.folder}/app.js`
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist', outputFolder),
        publicPath: '/',
        library: 'app'
      },
      resolve: {
        // https://webpack.js.org/configuration/resolve/#resolve-modules
        // https://gist.github.com/sokra/27b24881210b56bbaff7#resolving-options
        // https://moduscreate.com/blog/es6-es2015-import-no-relative-path-webpack/
        modules: [
          path.resolve(__dirname, 'common'),
          path.resolve('./node_modules')
        ]
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
        new CleanWebpackPlugin([`dist/${outputFolder}`]),
        new ManifestPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ],
      // Module
      module: {
        rules: [
          // Dependent HTML files
          // https://webpack.js.org/loaders/html-loader/#export-into-html-files
          {
            test: /\.html$/,
            exclude: path.resolve(__dirname, framework.folder, 'index.html'),
            use: [
              {
                loader: 'file-loader',
                options: { name: '[name].[ext]', outputPath: 'html/' }
              },
              'extract-loader',
              { loader: 'html-loader', options: { minimize: true } }
            ]
          },
          // Styles
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
