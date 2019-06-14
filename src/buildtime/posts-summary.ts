import "ts-node/register/transpile-only"
import { parsePosts } from "./parse-posts"
import { returnJson } from "./util"

const res = returnJson(async () => {
	const posts = await parsePosts()
	// remove content
	return { posts: posts.map(({ content_md, ...other }) => other) }
})
export default res
export type Summary = typeof res
