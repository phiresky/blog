import React, { useEffect, useState } from "react"
import { withRouter } from "next/router"
import Page from "../components/Page"
import { NextPageContext } from "next"
import { Post } from "../../server/build-posts"
import ReactMarkdown from "react-markdown/with-html"
//import htmlParser from "react-markdown/plugins/html-parser"
import { Code } from "../components/Code"
// import "prismjs/themes/prism-tomorrow.css"
import { WithRouterProps } from "next/dist/client/with-router"
import { config } from "../config"
import { formatDate } from "../utils/date"
import "../post.scss"

type Props = { post: Post }

declare module "react" {
	interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
		jsx?: boolean
		global?: boolean
	}
}

class PostUI extends React.Component<Props & WithRouterProps> {
	static async getInitialProps(ctx: NextPageContext): Promise<Props> {
		// todo: only load single post
		//console.log(posts.map(p => makeUrl(p.filename)), ctx.asPath)

		const slug = ctx.query.slug
		const url = config.blogRoot + slug
		const post = require("../../posts-built/" + slug + ".md.json")

		if (!post) throw Error(`could not find post ${url}`)
		return { post }
	}
	render() {
		const { post } = this.props
		const meta = post.frontmatter
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
					code {
						border: 1px solid #ddd;
					}
					pre code {
						border: none;
					}
					pre {
						white-space: pre-wrap;
						word-wrap: break-word;
					}
				`}</style>
				<Page title={meta.title} description={post.preview}>
					<div className="content center mw7 pa3 pa4-ns">
						<h1 className="mt0 lh-title">{meta.title}</h1>
						<small className="db ttu o-40">
							<time dateTime={new Date(meta.date).toISOString()}>
								{formatDate(meta.date)}
							</time>
						</small>
						<ReactMarkdown
							escapeHtml={false}
							renderers={{ code: Code }}
							//astPlugins={[htmlParser()]}
						>
							{post.content_md}
						</ReactMarkdown>
					</div>
				</Page>
			</div>
		)
	}
}

export default withRouter(PostUI)
