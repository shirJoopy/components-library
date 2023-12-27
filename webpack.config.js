// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production', // or 'development' for non-minified output
  entry: './src/index.ts', // Entry point of your library (TypeScript file)
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'joopy-library.js', // Output file name
    library: 'JoopyLibrary', // Exported global variable name
    libraryTarget: 'umd', // Universal Module Definition (UMD) format
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Apply loader to .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Use ts-loader for TypeScript
        },
      },
      {
        test: /\.svg$/, // Apply loader to .svg files
        use: ['@svgr/webpack'], // Use @svgr/webpack for handling SVG files
      },
      // Add loaders for other file types (e.g., CSS) as needed
    ],
  },
};
