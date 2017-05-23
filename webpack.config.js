const webpack = require('webpack');
const path = require('path');
// const sourceMapSupport = require('source-map-support');
const dataPath = path.join(__dirname, './data');
const scriptsPath = path.join(__dirname, './scripts');
const buildPath = path.join(__dirname, './build');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';


let plugins = [];

if (isProd) {
  plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    //performs search-and-replace operations on the original source code. 
    // Any occurrence of process.env.NODE_ENV in the imported 
    // code is replaced by "production"
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  );
}
let graphQLConfig = Object.assign({
  entry: [
    'babel-polyfill',
    path.join(__dirname, './server.js'),
  ],
  output: {
    path: buildPath,
    filename: '[build].backend.js',
    sourceMapFilename: '[build].backend.map',
    libraryTarget: 'commonjs',
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: true,
    __dirname: true,
  },
  externals: [
    /^(?!\.|\/).+/i, //ignore node modules
    /^[a-z\-0-9]+$/, //all non-relative modules are external
  ],
  plugins: plugins,
    //ignore css files if loading client-side files server-side(in future)?
    // new NormalModuleReplacementPlugin(/\.css$/, 'node-noop')
  ,
  cache: true,
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [
        scriptsPath,
        dataPath,
      ],
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0'],
      },
    }]
  },
  devtool: isProd ? 'source-map' : 'inline-source-map',
});

module.exports = graphQLConfig;

