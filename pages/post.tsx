import React, { useEffect, useState } from "react"
import { withRouter } from "next/router"
import Page from "../src/components/Page"

import CONFIG from "../content/index.json"
import { PostJson } from "."

class Post extends React.Component {
	render() {
		const props = this.props
		console.log("post", props)
		let pageJson: PostJson = {} as any
		if (props.router.query) {
			if (props.router.query.fullUrl) {
				pageJson = require(`../content${props.router.query.fullUrl}.json`)
			}
		}

		return (
			<div>
				<style jsx global>{`
					.content a {
						color: #0365a5;
						text-decoration: none;
						border-bottom: 1px solid #dfdfdf;
						transition: all 300ms ease;
					}

					a:hover,
					a:focus {
						border-bottom-color: currentColor;
					}

					code {
						background-color: #eee;
						line-height: 1;
						border-radius: 2px;
						padding: 1px;
					}
					code:not(.hljs) {
						border: 1px solid #ddd;
					}
				`}</style>
				<Page title={pageJson.title}>
					<Body {...pageJson} />
				</Page>
			</div>
		)
	}
}

function Body(props: { title: string; bodyHtml: string }) {
	return (
		<div className="content center mw7 pa3 pa4-ns">
			<h1 className="mt0 lh-title">{props.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: props.bodyHtml }}></div>
		</div>
	)
}

export default withRouter(Post)
