var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path .resolve(__dirname, 'Controller/');
var DIST_DIR = path .resolve(__dirname, 'View/');

var config = {
    entry: SRC_DIR + "/React_app.js",
    output: {
        path: DIST_DIR + "/public/javascripts/",
        filename: "bundle.js",
        publicPath: DIST_DIR + "/public" 
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;