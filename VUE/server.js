// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     // const body = req.url === '/style.css'
//     //     ? fs.readFileSync('public/style.css')
//     //     : fs.readFileSync('public/index.html')
//     // res.end(body)

//     const publicPath = './public'

//     let body = null
//     try {
//         body = fs.readFileSync(`${publicPath}${req.url}`)
//     } catch (e) {
//         body = fs.readFileSync(`${publicPath}/index.html`)
//     }
//     res.end(body)
// })

// const port = process.env.PORT || 3000
// server.listen(port)

const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('./public'))
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('Server started!')
})

app.get('/itemslist/:page', (req, res) => {
    const page = req.params.page
    fs.readFile(`./public/database/page${page}.json`, 'utf8', (err, data) => {
        console.log(err)
        res.send(data)
    })
})

app.post('/itemslist', (req, res) => {
    // 1) Прочитать существующий файл page3.json
    // 2) Узнать, какой ID был последним
    // 3) Создать объект с новым ID и с данными, пришедшими от клиента
    // 4) Записать обновленный JSON в файл
    // 5) Отдать результат обратно клиенту
    const filePath = './public/database/page1.json'

    fs.readFile(filePath, 'utf8', (err, data) => {
        const offset = 10
        const list = JSON.parse(data || '{}')
        const amountOfData = Object.keys(list).length
        const newID = offset + amountOfData + 1
        const newItem = req.body
        console.log(req.body)
        newItem.id = newID
        list[newItem.id] = newItem

        fs.writeFile(filePath, JSON.stringify(list), (err) => {
            if (err) {
                console.log(err)
            }
            res.send(list)
        })
    })
})
