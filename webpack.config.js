const path = require('path') //стороняя библиотека
const { ModuleFilenameHelpers } = require('webpack')

module.export = {
    entry: './src/main.js',  //это чтобы не переименновывать main.js в index.js главный файл должен быть индекс джэс/ если файлы в папке src
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.css$/, //чтобы webpack понимал файлы css если файлы в папке src
                use: [
                    { loader: 'style-loader' }, // ставить по порядку так, инжектит стили из js модуля в тэги style
                    { loader: 'css-loader' }, //трансформирует css файл в js модуль
                ]
            }

        ]
    }
}
