import * as p from "pandoc-filter"
import * as React from "react"
import { Fragment } from "react"
import { Code } from "./Code"

type Renderers = Partial<
	{ [k in p.EltType]: React.FunctionComponent<{ e: p.EltMap[k] }> }
>
type PandocConfig = {
	escapeHTML?: boolean
	renderers?: Renderers
	imageUrlBase?: string
}
const PandocConfigContext = React.createContext<PandocConfig>({
	escapeHTML: true,
	renderers: {},
})

function ap([id, classes, attrs]: p.Attr) {
	if (attrs.length > 0) console.log("unused attrs", attrs)
	return { id: id || undefined, className: classes.join(" ") || undefined }
}

function Simp(tag: keyof JSX.IntrinsicElements, className?: string) {
	const Tag = tag
	return (p: { e: p.AnyElt[] }) => (
		<Tag className={className}>
			<Pandoc ele={p.e} />
		</Tag>
	)
}
function SimpAttr(tag: keyof JSX.IntrinsicElements) {
	const Tag = tag
	return ({ e: [attr, ele] }: { e: [p.Attr, p.AnyElt[]] }) => (
		<Tag {...ap(attr)}>
			<Pandoc ele={ele} />
		</Tag>
	)
}

const defaultRenderers: Renderers = {
	// inline
	Str: ({ e }) => <>{e}</>,
	Plain: ({ e }) => <Pandoc ele={e} />,
	Emph: Simp("em"),
	Strong: Simp("b"),
	Strikeout: Simp("s"),
	Superscript: Simp("sup"),
	Subscript: Simp("sub"),
	SmallCaps: Simp("span", "small-caps"),
	SoftBreak: () => <>{"\n"}</>, // usually rendered as a space
	Quoted: ({ e: [a, b] }) => (
		<span className="quoted">
			{a.t === "DoubleQuote" ? '"' : "'"}
			<Pandoc ele={b} />
			{a.t === "DoubleQuote" ? '"' : "'"}
		</span>
	),
	Link: ({ e: [attr, inline, [url, title]] }) => (
		<a href={url} title={title || undefined} {...ap(attr)}>
			<Pandoc ele={inline} />
		</a>
	),
	Space: _ => <> </>,
	Cite: ({ e: [cites, inline] }) => (
		<span
			className="citation"
			data-cites={cites.map(e => e.citationId).join(" ")}
		>
			<Pandoc ele={inline} />
		</span>
	),
	Code: ({ e: [attr, str] }) => <code {...ap(attr)}>{str}</code>,
	HorizontalRule: () => <hr />,
	LineBreak: () => <br />,

	// block
	Header: ({ e: [lvl, attr, c] }) => {
		const H = ("h" + lvl) as "h1"
		return (
			<H {...ap(attr)}>
				<Pandoc ele={c} />
			</H>
		)
	},
	CodeBlock: ({ e: [attr, text] }) => (
		<pre {...ap(attr)}>
			<code>{text}</code>
		</pre>
	),
	Para: Simp("p"),
	BlockQuote: Simp("blockquote"),
	BulletList: ({ e: blocks }) => (
		<ul>
			{blocks.map((e, i) => (
				<li key={i}>
					<Pandoc ele={e} key={i} />
				</li>
			))}
		</ul>
	),
	OrderedList: ({ e: [[a, b, _], blocks] }) => (
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
	DefinitionList: ({ e }) => (
		<dl>
			{e.map(([t, d], i) => (
				<Fragment key={i}>
					<dt>
						<Pandoc ele={t} />
					</dt>
					{d.map((d, i) => (
						<dd>
							<Pandoc key={i} ele={d} />
						</dd>
					))}
				</Fragment>
			))}
		</dl>
	),
	Div: SimpAttr("div"),
	Image: ({ e: [a, b, [src, title]] }) => (
		<img src={src} title={title} {...ap(a)} />
	), // todo: alt text
	RawBlock: ({ e: [type, content] }) => (
		<PandocConfigContext.Consumer>
			{config =>
				type === "html" && !config.escapeHTML ? (
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
} & PandocConfig) {
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
			{config => {
				const renderers = { ...defaultRenderers, ...config.renderers }
				if (ele.t in renderers) {
					const C = renderers[ele.t] as any
					return <C e={ele.c} />
				} else return <>[UNK:{ele.t}]</>
			}}
		</PandocConfigContext.Consumer>
	)
}

export const PandocConfigProvider = PandocConfigContext.Provider
