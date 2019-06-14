import React, { useEffect, useState } from "react"
import { withRouter } from "next/router"
import Page from "../src/components/Page"
import { NextContext } from "next"
import posts from "../src/buildtime/get-post"
import { Post } from "../src/buildtime/parse-posts"
import { makeUrl } from "../src/utils/content"
import ReactMarkdown from "react-markdown"
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import { load } from "js-yaml"

type Props = { post: Post }

declare module "react" {
	interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
		jsx?: boolean
		global?: boolean
	}
}

class PostUI extends React.Component<Props> {
	static getInitialProps(ctx: NextContext): Props {
		// todo: only load single post
		//console.log(posts.map(p => makeUrl(p.filename)), ctx.asPath)

		// const slug = ctx.query.slug
		const post = posts.find(p => makeUrl(p.filename) === ctx.asPath)
		if (!post) throw Error(`could not find post ${ctx.asPath}`)
		return { post }
	}
	render() {
		const { post } = this.props
		console.log("props", this.props)
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
				<Page title={post.frontmatter.title}>
					<div className="content center mw7 pa3 pa4-ns">
						<h1 className="mt0 lh-title">
							{post.frontmatter.title}
						</h1>
						<ReactMarkdown renderers={{ code: Code }}>
							{post.content_md}
						</ReactMarkdown>
					</div>
				</Page>
			</div>
		)
	}
}
type CodeProps = { language?: string; value: string }

function Code(props: CodeProps) {
	const components: { [name: string]: React.ComponentType<CodeProps> } = {
		barchart: CodeBarChart,
	}
	const Component = components[(props.language || "") as any]
	if (Component) {
		return <Component {...props} />
	}
	return (
		<pre>
			<code className={`language-${props.language}`}>{props.value}</code>
		</pre>
	)
}
function CodeBarChart(props: CodeProps) {
	const info = load(props.value)
	console.log(info)
	let data = info.data
	if (typeof data === "object") {
		data = Object.entries(data).map(([name, value]) => ({
			name,
			value,
		}))
	}
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<p>{info.title}</p>
				{info.subtitle && <p>{info.subtitle}</p>}
			</div>
			<BarChart width={600} height={200} data={data} layout="vertical">
				<XAxis type="number" />
				<YAxis type="category" dataKey="name" width={200} />
				<Tooltip />
				<Legend />
				<Bar dataKey="value" name={info.seriesName} fill="#8884d8" />
			</BarChart>
		</div>
	)
}

export default withRouter(PostUI)
