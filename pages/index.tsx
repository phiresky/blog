import React from "react"
import Page from "../src/components/Page"
import PagePreview from "../src/components/PagePreview"
import { formatDate } from "../src/utils/date"
import { makeUrl, filterPosts } from "../src/utils/content"
import pl from "../src/buildtime/posts-list"

export type LinkInfo = {
	text: string
	href: string
}
export type SummaryJson = {
	fileMap: {
		[fname: string]: PostSummary
	}
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
		const summaryJson = pl
		return <code>{JSON.stringify(summaryJson)}</code>
		const postList = filterPosts(summaryJson)
		return (
			<Page>
				<div className="center mw7 pa3 pa4-ns">
					{postList.map((article, i) => {
						const href = makeUrl(article)
						const date = formatDate(article.date)
						return (
							<PagePreview
								title={article.title}
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
