import nextRoutes from "next-routes"
import { config } from "./config"

const routes = new nextRoutes()
	.add("index", config.blogRoot.replace(/\/$/, ""))
	.add("post", config.blogRoot + ":slug+")
export default routes
export const Link = routes.Link
