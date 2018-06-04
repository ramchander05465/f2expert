const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry:'./src/index.js',
    devtool:'cheap-module-eval-source-map',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:''
    },
    resolve:{
        extensions:['.js','jsx']
    },
    module:{
        rules:[
            {
                test:'/\.js$/',
                loader:'babel-loader',
                exclude:'/node-modules/'
            },
            {
                test:'/\.css$/',
                exclude:'/node-modules/',
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1,
                            modules:true,
                            localIdentName:'[name]__[local]__[hash:bash64:5]'
                        }
                    }
                ]
            },
            {
                test:'/\.(png|jpe?g|gif)/',
                loader:'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    }
}