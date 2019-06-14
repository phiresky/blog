// server.js
import next from "next"
import routes from "../src/routes"
const app = (next as any)({
	dev: process.env.NODE_ENV !== "production",
	dir: "./src",
})

const handler = routes.getRequestHandler(app)

/*// With express
const express = require("express")
app.prepare().then(() => {
	express()
		.use(handler)
		.listen(3000)
})*/

// Without express
const { createServer } = require("http")
app.prepare().then(() => {
	createServer(handler).listen(3000)
})
