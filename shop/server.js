const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)
    const body = req.url === '/style.css'
        ? fs.readFileSync('shop/style.css')
        : fs.readFileSync('shop/index.html')
    res.end(body)
})