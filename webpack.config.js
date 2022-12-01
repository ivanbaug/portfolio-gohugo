const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: './custom_bs5/src/js/main.js',
  // Plugin path: https://stackoverflow.com/questions/52893799/how-to-specify-output-directory-with-mini-css-extract-plugin
  plugins: [new miniCssExtractPlugin({
    filename: "./../../../../custom_bs5/out_bs5/customBS5.css", // change this RELATIVE to your output.path (see output for the js asset)!
  })],
  output: {
    filename: 'customBS5.js',
    path: path.resolve(__dirname, './themes/pfTheme/assets/js')
  },
  devServer: {
    static: path.resolve(__dirname, './custom_bs5/out_html'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // // Adds CSS to the DOM by injecting a `<style>` tag
            // loader: 'style-loader'
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
