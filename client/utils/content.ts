import { PostSummary, Summary } from "../../server/build-posts"

export const isClientSide = !!(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
)
export function makeUrl(article: { filename: string }): { slug: string } {
	const slug = article.filename.replace(/\.[^.]+$/, "")
	return { slug }
}

export function filterPosts(summary: Summary): PostSummary[] {
	return summary.posts.sort((a, b) => {
		const aDate = Date.parse(a.frontmatter.date)
		const bDate = Date.parse(b.frontmatter.date)
		return bDate > aDate ? 1 : bDate < aDate ? -1 : 0
	})
}

/** Object.fromEntries ponyfill */
export function fromEntries<V>(
	iterable: Iterable<[string, V]>,
): Record<string, V> {
	return [...iterable].reduce(
		(obj, [key, val]) => {
			obj[key] = val
			return obj
		},
		{} as Record<string, V>,
	)
}
