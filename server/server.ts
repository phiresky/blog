// server.js
import next from "next"
import routes from "../client/routes"
import { createServer } from "http"

const app = next({
	dev: process.env.NODE_ENV !== "production",
	dir: "./client",
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
void app.prepare().then(() => {
	createServer(handler).listen(3000)
})
