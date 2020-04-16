const http = require("http")
const fs = require("fs")

const hostname = "localhost"
const port = 3000

const server = http.createServer((req, res) => {
    console.log("Någon besökte sidan", req.url, req.connection.remoteAddress)

    if (req.url == "./favicon.ico") {
        res.statusCode = 404
        res.end()
        return
    }

    fs.readFile(`.${req.url == "/" ? "/index" : req.url}.html`, (err, data) => {
        if (err) {
            console.error(err)
            res.statusCode = 500
            res.end("Could not load file")
        } else {
            res.statusCode = 200
                res.setHeader("Content-Type", "text/html")
                res.write(data)
                res.end()
        }
    })
})

server.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`)
})