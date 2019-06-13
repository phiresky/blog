import { SummaryJson } from "../../pages"

export function makeUrl(article: { dir: string; base: string }) {
	return (
		`/blog` +
		`${article.dir.split("content").join("")}/${article.base
			.split(".json")
			.join("")}`
	)
}

export function filterPosts(summaryJson: SummaryJson) {
	return (
		summaryJson &&
		summaryJson.fileMap &&
		Object.keys(summaryJson.fileMap)
			.filter(file => {
				if (file.match(/^content\/\d{4}\//)) {
					return true
				}
			})
			.map(file => {
				return summaryJson.fileMap[file]
			})
			.sort((a, b) => {
				const aDate = Date.parse(a.date)
				const bDate = Date.parse(b.date)
				return bDate > aDate ? 1 : bDate < aDate ? -1 : 0
			})
	)
}
