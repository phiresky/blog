import React, { useEffect, useState } from "react"
import { withRouter } from "next/router"
import Page from "../src/components/Page"
import { NextPageContext } from "next"
import posts from "../src/buildtime/get-post"
import { Post } from "../src/buildtime/parse-posts"
import { makeUrl } from "../src/utils/content"
import ReactMarkdown from "react-markdown/with-html"
//import htmlParser from "react-markdown/plugins/html-parser"
import { Code } from "../src/components/Code"
import "prismjs/themes/prism-tomorrow.css"

type Props = { post: Post }

declare module "react" {
	interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
		jsx?: boolean
		global?: boolean
	}
}

class PostUI extends React.Component<Props> {
	static getInitialProps(ctx: NextPageContext): Props {
		// todo: only load single post
		//console.log(posts.map(p => makeUrl(p.filename)), ctx.asPath)

		const slug = ctx.query.slug
		const url = "/blog/" + slug
		const post = posts.find(p => makeUrl(p.filename) === url)

		if (!post) throw Error(`could not find post ${url}`)
		return { post }
	}
	render() {
		const { post } = this.props
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
				<Page title={post.frontmatter.title}>
					<div className="content center mw7 pa3 pa4-ns">
						<h1 className="mt0 lh-title">
							{post.frontmatter.title}
						</h1>
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
