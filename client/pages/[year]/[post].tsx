import "katex/dist/katex.min.css"
import {
	GetStaticPathsContext,
	GetStaticPathsResult,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from "next"
// import "prismjs/themes/prism-tomorrow.css"
import { WithRouterProps } from "next/dist/client/with-router"
import { withRouter } from "next/router"
import * as React from "react"
import { Fragment } from "react"
import { Post } from "../../../server/build-posts"
//import htmlParser from "react-markdown/plugins/html-parser"
import { Code } from "../../components/Code"
import Page from "../../components/Page"
import Pandoc, { attrProps, Renderers } from "../../components/Pandoc"
import { TooltipLink } from "../../components/TooltipLink"
import { config } from "../../config"
import { makeUrl } from "../../utils/content"
import { formatDate } from "../../utils/date"
import dynamic from "next/dynamic"
import CodeBlock from "../../components/CodeBlock"
import Head from "next/head"

//import { BlockMath, InlineMath } from "react-katex"

const BlockMath = dynamic<{ math: string }>(() =>
	import("react-katex").then((m) => m.BlockMath),
)
const InlineMath = dynamic<{ math: string }>(() =>
	import("react-katex").then((m) => m.InlineMath),
)
type Props = { post: Post }

declare module "react" {
	interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
		jsx?: boolean
		global?: boolean
	}
}

export async function getStaticPaths(
	_ctx: GetStaticPathsContext,
): Promise<GetStaticPathsResult> {
	const summary = await import("../../../posts-built/summary.json")
	return {
		paths: summary.posts.map((post) => "/" + makeUrl(post).slug),
		fallback: false,
	}
}
export async function getStaticProps(
	ctx: GetStaticPropsContext<{ year: string; post: string }>,
): Promise<GetStaticPropsResult<Props>> {
	const slug = `${ctx.params?.year || ""}/${ctx.params?.post || ""}`
	try {
		const post = (await import(
			`../../../posts-built/${slug}.md.json`
		)) as Post
		if (!post) throw Error(`null`)
		return { props: { post: { ...post } } }
	} catch (e: unknown) {
		throw Error(`could not find post ${slug}: ${String(e)}`)
	}
}

const renderers: Renderers = {
	Code: ({ c: [attr, text] }) => {
		const language = attr[1][0]
		if (language)
			return <CodeBlock language={language} inline wrap value={text} />
		return (
			<code
				{...attrProps([
					attr[0],
					[...attr[1], "not-highlighted"],
					attr[2],
				])}
			>
				{text}
			</code>
		)
	},
	CodeBlock: ({ c: [attr, text] }) => (
		<Code {...attrProps(attr)} language={attr[1][0]} value={text} />
	),
	Math: ({ c: e }) => {
		const [type, content] = e
		if (type.t === "InlineMath") return <InlineMath math={content} />
		else return <BlockMath math={content} />
	},
	Link: TooltipLink,
}
class PostUI extends React.Component<Props & WithRouterProps> {
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
				{meta.og_image && (
					<Head>
						<meta property="og:image" content={meta.og_image} />
					</Head>
				)}
				<Page
					title={
						meta.title +
						(meta.subtitle ? " - " + meta.subtitle : "")
					}
					description={post.preview}
					footer={footer}
				>
					<div className="content center mw7 pa3 pa4-ns">
						<h1 className="mt0 lh-title mb1">{meta.title}</h1>
						{meta.subtitle && (
							<p className="mt0">{meta.subtitle}</p>
						)}
						<PostDate post={post} />
						<Pandoc
							ele={post.content_ast}
							allowUnsanitizedHTML
							renderers={renderers}
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
		const urlBase = config.postSourceHistoryUrlBase
		const SLink = urlBase
			? ({ children = null as React.ReactNode }) => (
					<a href={urlBase + filename}>{children}</a>
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
