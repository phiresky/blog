const withCSS = require("@zeit/next-css")

import { makeUrl } from "./src/utils/content"
import summary from "./posts-built/summary.json"

const isProd = process.env.NODE_ENV === "production"

export default withCSS({
	assetPrefix: isProd ? "/blog" : "/",
	async exportPathMap() {
		const { posts } = summary
		const o = {
			"/blog": { page: "/index" },
		}
		for (const post of posts) {
			o[makeUrl(post.filename)] = { page: "/post" }
		}
		return o
	},
})
