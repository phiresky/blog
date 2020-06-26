import React from "react"
import { makeUrl, filterPosts } from "../utils/content"
import summary from "../../posts-built/summary.json"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import Page from "../components/Page"
import PagePreview from "../components/PagePreview"

export type LinkInfo = {
	text: string
	href: string
}

class Index extends React.Component<WithRouterProps> {
	render() {
		const postList = filterPosts(summary)
		return (
			<Page>
				<div className="center mw7 pa3 pa4-ns">
					{postList
						.filter((p) => !p.frontmatter.hidden)
						.map((article, i) => {
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
