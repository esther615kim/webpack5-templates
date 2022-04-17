const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '',
    },
    // webpack 5 feature -live updating
    devServer: {
        port: 3010,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    //
    module: {
        rules: [
            // handle react files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modues/,
                // use - what to do with the js/jsx files
                use: {
                    loader: 'babel-loader',
                }
            },
            // handle styling files
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"],
            },
        ]
    },
    plugins: [

    ]
}