const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "",
    },
    devtool: "source-map",
    // webpack 5 feature -live updating
    devServer: {
        port: 3020,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            // handle react files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modues/,
                // use - what to do with the js/jsx files
                use: {
                    loader: "babel-loader",
                },
            },
            // handle styling files
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // TS
            {
                test: /\.ts$/,
                exclude: /node_module/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
    //add resolve

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
