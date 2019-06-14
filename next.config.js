const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript({
	assetPrefix: "/blog",
	exportPathMap() {
		return {
			"/blog": { page: "/index" },
			"/blog/2019/rga": { page: "/post" },
		}
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
