const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // historyApiFallback: true,
        // noInfo: true,
        contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8080,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})
module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
