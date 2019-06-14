import nextRoutes from "next-routes"

const routes = new nextRoutes()
	.add("index", "/blog")
	.add("post", "/blog/:slug+")
export default routes
export const Link = routes.Link
