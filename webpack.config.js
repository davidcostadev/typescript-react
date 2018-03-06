const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    mode: 'development',
    entry: ['./app/main.tsx'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                // exclude: /node_modules/,
                use: ['babel-loader', 'awesome-typescript-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new CheckerPlugin(),
    ],
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    devtool: 'source-map',
    performance: {
        hints: false,
    },
}