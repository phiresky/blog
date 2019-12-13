import React, { useEffect, useState, Fragment } from "react"
import { withRouter } from "next/router"
import Page from "../components/Page"
import { NextPageContext } from "next"
import { Post, Frontmatter } from "../../server/build-posts"
import ReactMarkdown from "react-markdown/with-html"
//import htmlParser from "react-markdown/plugins/html-parser"
import { Code } from "../components/Code"
// import "prismjs/themes/prism-tomorrow.css"
import { WithRouterProps } from "next/dist/client/with-router"
import { config } from "../config"
import { formatDate } from "../utils/date"
import "../post.scss"
import Pandoc from "../components/Pandoc"

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
		let footer = undefined
		if (config.postSourceUrlBase) {
			footer = (
				<a href={config.postSourceUrlBase + post.filename}>
					View post source on GitHub
				</a>
			)
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
				<Page
					title={meta.title}
					description={post.preview}
					footer={footer}
				>
					<div className="content center mw7 pa3 pa4-ns">
						<h1 className="mt0 lh-title">{meta.title}</h1>
						<PostDate post={post} />
						<Pandoc
							ele={post.content_ast}
							escapeHTML={false}
							renderers={
								{
									/*CodeBlock: ({ e: [attr, text] }) => (
									<Code language={attr[1][0]} value={text} />
								),*/
								}
							}
						/>
						{/*<ReactMarkdown
							escapeHtml={false}
							renderers={{ code: Code }}
							//astPlugins={[htmlParser()]}
						>
							{post.content_md}
						</ReactMarkdown>*/}
					</div>
				</Page>
			</div>
		)
	}
}
function PostDate({ post: { frontmatter: meta, filename } }: { post: Post }) {
	let updated = null
	if (meta.updated) {
		const SLink = config.postSourceHistoryUrlBase
			? ({ children = null as any }) => (
					<a href={config.postSourceHistoryUrlBase + filename}>
						{children}
					</a>
			  )
			: Fragment
		updated = (
			<>
				{" • "}
				<SLink>
					{"Last Update "}
					<time dateTime={new Date(meta.date).toISOString()}>
						{formatDate(meta.updated)}
					</time>
				</SLink>
			</>
		)
	}
	return (
		<small className="db ttu o-40">
			<time
				dateTime={
					meta.date ? new Date(meta.date).toISOString() : undefined
				}
			>
				{formatDate(meta.date)}
			</time>
			{updated}
		</small>
	)
}

export default withRouter(PostUI)
