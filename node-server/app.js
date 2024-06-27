const express = require("express")
const http = require("http")
let app = express()
let server = http.createServer(app)
app.get("/some/url", (request, response) => {
    // Do Something
    response.send("Hello World")
})
app.post("/some/url", (request, response) => {
    // Do Something
    response.send("Goodbye World")
})
server.listen(3000)