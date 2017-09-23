var config={
    entry: './main.js',

    output:{
        path: '/',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port : 8080
    },

    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_nodules/,
                loader : 'babel-loader',

                query:{
                    presets: ['es2016','react']
                }
            }
        ]
    }
}

module.exports = config;