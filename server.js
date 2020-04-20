const http = require("http")
const fs = require("fs")
const express = require("express")
const app = express()
const hostname = "localhost"
const port = 3000

const users = [
    {   
        id: 1,
        name: "Anton",
        age: 24
    }, {
        id: 2,
        name: "Claes",
        age: 40
    }
]

app.use(express.json())
app.use(express.static("public"))

app.get("/users", (req, res) => {
    res.json(users)
})

app.get("/users/:userId", (req, res) => {
    const foundUser = users.find((user) => {
        if(user.id.toString() === req.params.userId) {
            return true
        } else {
            return false
        }
    })

    if(!foundUser) {
        res.status(404).send()
    } else {
        res.send(foundUser)
    }
})

app.post("/users", (req, res) => {
    let newUser = req.body
    newUser.id = s4()
    users.push(req.body)
    res.status(201).send()
})

let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

// const server = http.createServer((req, res) => {
//     console.log("Någon besökte sidan", req.url, req.connection.remoteAddress)

//     if (req.url == "./favicon.ico") {
//         res.statusCode = 404
//         res.end()
//         return
//     }

//     fs.readFile(`.${req.url == "/" ? "/public/index" : req.url}.html`, (err, data) => {
//         if (err) {
//             console.error(err)
//             res.statusCode = 500
//             res.end("Could not load file")
//         } else {
//             res.statusCode = 200
//                 res.setHeader("Content-Type", "text/html")
//                 res.write(data)
//                 res.end()
//         }
//     })
// })

app.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}`)
})