const withCSS = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")
require("ts-node").register({
	transpileOnly: true,
	project: "tsconfig.server.json",
})
const { config } = require("./config")
const { makeUrl } = require("./utils/content")
const summary = require("../posts-built/summary.json")
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const isProd = process.env.NODE_ENV === "production"

module.exports = withSass(
	withCSS({
		assetPrefix: isProd ? config.blogRoot : "/",
		async exportPathMap() {
			const { posts } = summary
			const o = {
				[config.blogRoot]: { page: "/index" },
			}
			for (const post of posts) {
				const { url, slug } = makeUrl(post.filename)
				o[url] = { page: "/post", query: { slug } }
			}
			console.log(o)
			return o
		},
	}),
)
