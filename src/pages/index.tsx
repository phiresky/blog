import React from "react"
import Page from "../components/Page"
import PagePreview from "../components/PagePreview"
import { formatDate } from "../utils/date"
import { makeUrl, filterPosts } from "../utils/content"
import summary from "../../posts-built/summary.json"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"

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

class Index extends React.Component<WithRouterProps> {
	render() {
		const postList = filterPosts(summary)
		return (
			<Page>
				<div className="center mw7 pa3 pa4-ns">
					{postList.map((article, i) => {
						const { url } = makeUrl(article)
						return (
							<PagePreview
								title={article.frontmatter.title}
								preview={article.preview}
								date={article.frontmatter.date}
								href={url}
								key={i}
							/>
						)
					})}
				</div>
			</Page>
		)
	}
}
export default withRouter(Index)
