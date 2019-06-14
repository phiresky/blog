require("ts-node/register/transpile-only")
const withCSS = require("@zeit/next-css")

global.__is_next_config = true // hacky lol
const { default: postsSummary } = require("./src/buildtime/posts-summary")
global.__is_next_config = false
const { makeUrl } = require("./src/utils/content")
const isProd = process.env.NODE_ENV === "production"

module.exports = withCSS({
	assetPrefix: isProd ? "/blog" : "/",
	async exportPathMap() {
		const { posts } = await postsSummary()
		const o = {
			"/blog": { page: "/index" },
		}
		for (const post of posts) {
			o[makeUrl(post.filename)] = { page: "/post" }
		}
		return o
	},
	webpack(config, options) {
		const tsrule = config.module.rules.find(
			r => r.test.source === "\\.(ts|tsx)$",
		)
		tsrule.exclude = /node_modules|buildtime/ // don't run babel on buildtime code
		/*config.module.rules.unshift({
			test: /\/buildtime\/.*\/\.(ts|tsx)/,
			use: [{ loader: "val-loader" }, tsrule.use],
		})*/
		config.module.rules.unshift({
			test: /\/buildtime\//,
			use: [
				{ loader: "val-loader" },
				{
					loader: "ts-loader",
					options: {
						transpileOnly: true,
						compilerOptions: { module: "commonjs" },
					},
				},
			],
		})

		return config
	},
})
