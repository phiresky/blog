import * as p from "pandoc-filter"
import * as React from "react"
import { Fragment } from "react"

type Renderers = Partial<
	{ [k in p.EltType]: React.FunctionComponent<p.Elt<k>> }
>
type PandocConfig = {
	allowUnsanitizedHTML?: boolean
	renderers?: Renderers
	imageUrlBase?: string
}
const PandocConfigContext = React.createContext<PandocConfig>({})

/**
 * convert pandoc AST Attr to react props (id and class)
 */
function ap([id, classes, _attrs]: p.Attr): {
	id: string | undefined
	className: string | undefined
} {
	// if (attrs.length > 0) console.log("unused attrs", attrs)
	return { id: id || undefined, className: classes.join(" ") || undefined }
}
export const attrProps = ap

function Simp(tag: keyof JSX.IntrinsicElements, className?: string) {
	const Tag = tag
	return (p: { c: p.AnyElt[] }) => (
		<Tag className={className}>
			<Pandoc ele={p.c} />
		</Tag>
	)
}
function SimpAttr(tag: keyof JSX.IntrinsicElements) {
	const Tag = tag
	return ({ c: [attr, ele] }: { c: [p.Attr, p.AnyElt[]] }) => (
		<Tag {...ap(attr)}>
			<Pandoc ele={ele} />
		</Tag>
	)
}

export const defaultRenderers: Renderers = {
	// inline
	Str: ({ c: e }) => <>{e}</>,
	Plain: ({ c: e }) => <Pandoc ele={e} />,
	Emph: Simp("em"),
	Strong: Simp("b"),
	Strikeout: Simp("s"),
	Superscript: Simp("sup"),
	Subscript: Simp("sub"),
	SmallCaps: Simp("span", "small-caps"),
	SoftBreak: () => <>{"\n"}</>, // usually rendered as a space
	Quoted: ({ c: [a, b] }) => (
		<span className="quoted">
			{a.t === "DoubleQuote" ? '"' : "'"}
			<Pandoc ele={b} />
			{a.t === "DoubleQuote" ? '"' : "'"}
		</span>
	),
	Link: ({ c: [attr, inline, [url, title]] }) => (
		<a href={url} title={title || undefined} {...ap(attr)}>
			<Pandoc ele={inline} />
		</a>
	),
	Space: (_) => <> </>,
	Cite: ({ c: [cites, inline] }) => (
		<span
			className="citation"
			data-cites={cites.map((e) => e.citationId).join(" ")}
		>
			<Pandoc ele={inline} />
		</span>
	),
	Code: ({ c: [attr, str] }) => <code {...ap(attr)}>{str}</code>,
	HorizontalRule: () => <hr />,
	LineBreak: () => <br />,

	// block
	Header: ({ c: [lvl, attr, c] }) => {
		const H = `h${lvl}` as "h1"
		return (
			<H {...ap(attr)}>
				<Pandoc ele={c} />
			</H>
		)
	},
	CodeBlock: ({ c: [attr, text] }) => (
		<pre {...ap(attr)}>
			<code>{text}</code>
		</pre>
	),
	Span: SimpAttr("span"),
	Para: Simp("p"),
	BlockQuote: Simp("blockquote"),
	BulletList: ({ c: blocks }) => (
		<ul>
			{blocks.map((e, i) => (
				<li key={i}>
					<Pandoc ele={e} key={i} />
				</li>
			))}
		</ul>
	),
	OrderedList: ({ c: [[a, b, _], blocks] }) => (
		<ol
			start={a}
			type={
				({
					Decimal: "1",
					LowerAlpha: "a",
					UpperAlpha: "A",
					LowerRoman: "i",
					UpperRoman: "I",
					DefaultStyle: "1",
					Example: undefined,
				} as const)[b.t]
			}
		>
			{blocks.map((e, i) => (
				<li key={i}>
					<Pandoc ele={e} key={i} />
				</li>
			))}
		</ol>
	),
	DefinitionList: ({ c: e }) => (
		<dl>
			{e.map(([t, d], i) => (
				<Fragment key={i}>
					<dt>
						<Pandoc ele={t} />
					</dt>
					{d.map((d, i) => (
						<dd key={i}>
							<Pandoc key={i} ele={d} />
						</dd>
					))}
				</Fragment>
			))}
		</dl>
	),
	Div: SimpAttr("div"),
	Image: ({ c: [a, _b, [src, title]] }) => (
		<img src={src} title={title} {...ap(a)} />
	), // todo: alt text
	RawBlock: ({ c: [type, content] }) => (
		<PandocConfigContext.Consumer>
			{(config) =>
				type === "html" && config.allowUnsanitizedHTML ? (
					<div dangerouslySetInnerHTML={{ __html: content }} />
				) : (
					<div className={`raw raw-${type}`}>{content}</div>
				)
			}
		</PandocConfigContext.Consumer>
	),
}

export default function Pandoc({
	ele,
	...config
}: {
	ele: p.AnyElt | p.AnyElt[]
} & PandocConfig): React.ReactElement {
	if (Object.keys(config).length > 0)
		return (
			<PandocConfigContext.Provider value={config}>
				<Pandoc ele={ele} />
			</PandocConfigContext.Provider>
		)
	if (Array.isArray(ele))
		return (
			<>
				{ele.map((p, i) => (
					<Pandoc key={i} ele={p} />
				))}
			</>
		)
	return (
		<PandocConfigContext.Consumer>
			{(config) => {
				const renderers = { ...defaultRenderers, ...config.renderers }
				if (ele.t in renderers) {
					const C = renderers[ele.t] as React.FunctionComponent<
						p.AnyElt
					>
					return <C {...ele} />
				} else return <>[UNK:{ele.t}]</>
			}}
		</PandocConfigContext.Consumer>
	)
}

export const PandocConfigProvider = PandocConfigContext.Provider
