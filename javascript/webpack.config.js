const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        //folder - can make multiple entry points
        path: path.resolve(__dirname, 'dist'),
        //file 
        filename: '[name].js'
    }
}