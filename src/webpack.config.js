const path = require('path');

module.exports = [{
    entry: path.resolve(__dirname, 'mail.js'),
    output: {
        filename: 'mail.js',
        path: path.resolve(__dirname, '../build/js/'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
            }],
        }]
    },
}];