const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        //folder - can make multiple entry points
        path: path.resolve(__dirname, "dist"),
        //file
        filename: "[name][contenthash].js",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        // open -true open the browser automatically after run dev
        open: true,
        // hot - hot reloading
        hot: true,
        // compress -enable gzip comression
        compress: true,
        // redirect 404 to index.html
        historyApiFallback: true,
    },
    // to handle loaders add module
    module: {
        // add rules of array for each loader(or file-type)
        rules: [
            {
                test: /\.scss$/, // any file ends with .scss
                use: ["style-loader", "css-loader", "sass-loader"], // will use these
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Cat Gallery App",
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
};
