import "ts-node/register/transpile-only"
import { parsePosts, Post } from "./parse-posts"
import { returnJson } from "./util"

const res = returnJson(async () => {
	const posts = await parsePosts()
	return posts
})
export default res
export type Summary = typeof res
