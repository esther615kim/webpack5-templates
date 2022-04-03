const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // add it down as a plugin

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
        // prevent bundle files stacked up
        clean: true,
        // added in webpack 5
        assetModuleFilename: 'assets/[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        // open -true open the browser automatically after run dev
        open: true,
        // hot - hot reloading
        hot: true,
        // compress -enable gzip compression
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
            {
                test: /\.js$/,
                exclude: /node_modues/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //!
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Cat Gallery App",
            filename: 'index.html',
            template: 'src/template.html',
        }),
        new BundleAnalyzerPlugin(),
    ]
};
