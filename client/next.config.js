const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

require("ts-node").register({
	transpileOnly: true,
	project: "tsconfig.json",
})
const { config } = require("./config")
const summary = require("../posts-built/summary.json")
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const isProd = process.env.NODE_ENV === "production"

module.exports = withBundleAnalyzer({
	assetPrefix: isProd ? config.blogRoot : "/",
	webpack: (config) => {
		console.log(config)
		config.output.assetModuleFilename = "[name][ext]"
		return config
	},
	basePath: config.blogRoot.slice(0, -1),
	assetPrefix: config.blogRoot.slice(0, -1),
	trailingSlash: true,
	future: {
		webpack5: true,
	},
})
