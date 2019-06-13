const SUMMARY_JSON = require("./content/summary.json")
const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript({
	exportPathMap: function() {
		const posts = {}
		const paths = {}
		SUMMARY_JSON.fileMap &&
			Object.keys(SUMMARY_JSON.fileMap).forEach(file => {
				const fileObj = SUMMARY_JSON.fileMap[file]
				const obj = {}
				if (fileObj.paths) {
					// Handle custom paths / aliases.
					obj.page = "/post"
					obj.query = {
						fullUrl: file.match(/^content(.+)\.json$/)[1],
					}
					fileObj.paths.forEach(path => {
						paths[path] = obj
					})
				} else if (file.indexOf("content") === 0) {
					// Handle posts.
					const page = file
						.split("content")
						.join("")
						.split(".json")
						.join("")
					posts[page] = {
						page: "/post",
						query: {
							fullUrl: page,
						},
					}
				}
			})
		console.log(posts, paths)
		return Object.assign(
			{
				"/": { page: "/" },
			},
			posts,
			paths,
		) // aliases
	},
	assetPrefix: "/blog",
})

console.log(module.exports)
