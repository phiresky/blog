/* const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})*/

require("ts-node").register({
	transpileOnly: true,
	project: "tsconfig.json",
})
const { config } = require("./config")
const isProd = process.env.NODE_ENV === "production"

module.exports = {
	basePath: config.blogRoot.slice(0, -1),
	assetPrefix: config.blogRoot.slice(0, -1),
	trailingSlash: true,
	reactStrictMode: true,
	output: "export",
	eslint: { ignoreDuringBuilds: true },
}
