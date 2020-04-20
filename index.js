const express = require("express")
const app = express()

app.use(express.json())

const users = [
    {id: 1, name: "Anton", age: 24, food: "Pizza"},
    {id: 2, name: "Claes", age: 45, food: "Pasta"},
    {id: 3, name: "Joel", age: 16, food: "Hamburger"},
    {id: 4, name: "Cecilia", age: 35, food: "Sushi"},]

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/api/users", (req, res) => {
    res.send(users)
})

app.post("/api/users", (req, res) => {
    if (!req.body.name) {
        res.status(400).send("Name is required")
        return
    }

    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
        food: req.body.food
    }
    users.push(user)
    res.send(user)
})

app.put("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) {
        res.status(404).send("User not found")
        return
    }

    if (!req.body.name) {
        res.status(400).send("Name is required")
        return
    }

    user.name = req.body.name
    user.age = req.body.age
    user.food = req.body.food
    res.send(user)
})

app.delete("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) {
        res.status(404).send("User not found")
        return
    }

    const index = users.indexOf(user)
    users.splice(index, 1)

    res.send(user)
})

app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))
    if (!user) {
        res.status(404).send("User not found")
        res.send(user)
        return
    }
})

app.listen(3000, () => console.log("Port 3000"))