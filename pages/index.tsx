import React from "react"
import Page from "../src/components/Page"
import PagePreview from "../src/components/PagePreview"
import { formatDate } from "../src/utils/date"
import { makeUrl, filterPosts } from "../src/utils/content"
import summary from "../src/buildtime/posts-summary"

export type LinkInfo = {
	text: string
	href: string
}
export type PostSummary = {
	title: string
	date: string
	page: string
	paths: string[]
	preview: string
	dir: string
	base: string
	ext: string
	sourceBase: string
	sourceExt: string
}
export interface PostJson extends PostSummary {
	bodyContent: string
	bodyHtml: string
}

export default class Index extends React.Component {
	render() {
		const postList = filterPosts(summary)
		return (
			<Page>
				<div className="center mw7 pa3 pa4-ns">
					{postList.map((article, i) => {
						const href = makeUrl(article.filename)
						const date = formatDate(article.frontmatter.date)
						return (
							<PagePreview
								title={article.frontmatter.title}
								preview={article.preview}
								date={date}
								href={href}
								key={i}
							/>
						)
					})}
				</div>
			</Page>
		)
	}
}
