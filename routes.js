const nextRoutes = require("next-routes")

module.exports = nextRoutes()
	.add("index", "/blog")
	.add("post", "/blog/:slug+")
