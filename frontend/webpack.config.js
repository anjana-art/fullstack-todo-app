const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Don't process node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve files from the public folder
    },
    compress: true,
    port: 3001, // Port for the development server
    host: '0.0.0.0', //allow access from outside the container
    hot: true, // enable hot module replacement
    historyApiFallback: true, // enable history api fallback for react router
  },
  mode: 'development', // Set mode to 'development' or 'production'
};