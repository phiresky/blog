import { Summary } from "../../server/build-posts"
import { config } from "../config"
import { SingleEntryPlugin } from "webpack"

export const isClientSide = !!(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
)
export function makeUrl(article_fname: string) {
	const slug = article_fname.replace(/\.[^.]+$/, "")
	const url = `${config.blogRoot}` + slug
	return { url, slug }
}

export function filterPosts(summary: Summary) {
	return summary.posts.sort((a, b) => {
		const aDate = Date.parse(a.frontmatter.date)
		const bDate = Date.parse(b.frontmatter.date)
		return bDate > aDate ? 1 : bDate < aDate ? -1 : 0
	})
}
