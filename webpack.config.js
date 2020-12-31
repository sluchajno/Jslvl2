const path = require('path') //стороняя библиотека
const { ModuleFilenameHelpers } = require('webpack')
const VueLoaderPlugin = startRequire('vue-loader/dist/plugin')

module.exports = {
    // entry: './src/index.js',  //это чтобы не переименновывать main.js в index.js главный файл должен быть индекс джэс/ если файлы в папке src
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'index.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' },
                ],
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.css$/, //чтобы webpack понимал файлы css если файлы в папке src
                use: [
                    'style-loader', // ставить по порядку так, инжектит стили из js модуля в тэги style
                    {
                        loader: 'css-loader',  //трансформирует css файл в js модуль
                        options: {
                            modules: true
                        }
                    },
                ]
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
