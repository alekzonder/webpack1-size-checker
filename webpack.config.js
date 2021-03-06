var webpack = require('webpack');

module.exports = {
    resolve: {
        modulesDirectories: [
            'node_modules',
            'src'
        ]
    },
    entry: {
        app: "./src/app.js"
    },
    devtool: null,
    output: {
        path: "./public/app/",
        publicPath: "/public/app/",
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        loaders: [
        //     {
        //     test: /\.css$/,
        //     loader: 'style!css'
        // }, {
        //     test: /\.html$/,
        //     loader: "html"
        // },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'init'
        })
    ]
};
