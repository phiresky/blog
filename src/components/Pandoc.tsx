import * as React from "react"
import * as p from "pandoc-filter"
import { isClientSide } from "../utils/content"
import CodeBlock from "./CodeBlock"
import { Fragment } from "react"
import { Code } from "./Code"

type E = p.Inline | p.Block

type ks = keyof p.EltMap

type PandocConfig = { escapeHTML?: boolean }
const PandocConfigContext = React.createContext<PandocConfig>({
	escapeHTML: true,
})

function ap([id, classes, attrs]: p.Attr) {
	if (attrs.length > 0) console.log("unused attrs", attrs)
	return { id: id || undefined, className: classes.join(" ") || undefined }
}

function Simp(tag: keyof JSX.IntrinsicElements, className?: string) {
	const Tag = tag
	return (ele: E[]) => (
		<Tag className={className}>
			<Pandoc ele={ele} />
		</Tag>
	)
}
function SimpAttr(tag: keyof JSX.IntrinsicElements) {
	const Tag = tag
	return ([attr, ele]: [p.Attr, E[]]) => (
		<Tag {...ap(attr)}>
			<Pandoc ele={ele} />
		</Tag>
	)
}

const eles: Partial<{ [k in ks]: React.FunctionComponent<p.EltMap[k]> }> = {
	// inline
	Str: p => <>{p}</>,
	Plain: p => <Pandoc ele={p} />,
	Emph: Simp("em"),
	Strong: Simp("b"),
	Strikeout: Simp("s"),
	Superscript: Simp("sup"),
	Subscript: Simp("sub"),
	SmallCaps: Simp("span", "small-caps"),
	SoftBreak: () => <>{"\n"}</>, // usually rendered as a space
	Quoted: ([a, b]) => (
		<span>
			{a.t === "DoubleQuote" ? '"' : "'"}
			<Pandoc ele={b} />
			{a.t === "DoubleQuote" ? '"' : "'"}
		</span>
	),
	Link: ([attr, inline, [url, title]]) => (
		<a href={url} title={title || undefined} {...ap(attr)}>
			<Pandoc ele={inline} />
		</a>
	),
	Space: p => <> </>,
	Cite: ([cites, inline]) => (
		<span
			className="citation"
			data-cites={cites.map(e => e.citationId).join(" ")}
		>
			<Pandoc ele={inline} />
		</span>
	),
	Code: ([attr, str]) => <code {...ap(attr)}>{str}</code>,
	HorizontalRule: () => <hr />,
	LineBreak: () => <br />,

	// block
	Header: ([lvl, attr, c]) => {
		const H = ("h" + lvl) as "h1"
		return (
			<H {...ap(attr)}>
				<Pandoc ele={c} />
			</H>
		)
	},
	CodeBlock: ([attr, text]) => (
		<Code language={attr[1][0]} value={text} />
		/*<pre {...ap(attr)}>
			<code>{text}</code>
		</pre>*/
	),
	Para: Simp("p"),
	BlockQuote: Simp("blockquote"),
	BulletList: blocks => (
		<ul>
			{blocks.map((e, i) => (
				<li key={i}>
					<Pandoc ele={e} key={i} />
				</li>
			))}
		</ul>
	),
	OrderedList: ([[a, b, _], blocks]) => (
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
	DefinitionList: els => (
		<dl>
			{els.map(([t, d], i) => (
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
	Image: ([a, b, [src, title]]) => <img src={src} title={title} {...ap(a)} />, // todo: alt text
	RawBlock: ([type, content]) => (
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
	config,
}: {
	ele: E | E[]
	config?: PandocConfig
}) {
	if (config)
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
	if (ele.t in eles) {
		const c = eles[ele.t] as any
		return c(ele.c)
	}
	return <>[UNK:{ele.t}]</>
}

export const PandocConfig = PandocConfigContext.Provider
