const path = require( 'path' );
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "src");

module.exports = {

    mode: 'production',

    entry: {
        background: path.join(srcDir, 'background.ts')
    },

    output: {
        path: path.resolve(__dirname, 'dist/js' ),
        filename: '[name].js',
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],

    node: {
        global: false
    }
};