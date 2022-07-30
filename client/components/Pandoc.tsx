import { CaughtException } from "mobx/dist/internal"
import * as p from "pandoc-filter"
import * as React from "react"
import { Fragment } from "react"
import internal from "stream"

export type Renderers = Partial<{
	[k in p.EltType]: React.FunctionComponent<p.Elt<k>>
}>
type PandocConfig = {
	allowUnsanitizedHTML?: boolean
	renderers?: Renderers
	imageUrlBase?: string
}
const PandocConfigContext = React.createContext<PandocConfig>({})

/**
 * convert pandoc AST Attr to react props (id and class)
 */
function ap([id, classes, attrs]: p.Attr): AttrProps {
	// if (attrs.length > 0) console.log("unused attrs", attrs)
	return {
		id: id || undefined,
		className: classes.join(" ") || undefined,
		...Object.fromEntries(attrs.map(([k, v]) => [`data-${k}`, v])),
	} as AttrProps
}
export type AttrProps = {
	id?: string
	className?: string
	[attrs: string]: string | undefined
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
	Para: ({ c }) => {
		// hack for figures which can't be inside a p in html
		if (c.length === 1 && c[0].t === "Image") return Simp("div")({ c })
		return Simp("p")({ c })
	},
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
				(
					{
						Decimal: "1",
						LowerAlpha: "a",
						UpperAlpha: "A",
						LowerRoman: "i",
						UpperRoman: "I",
						DefaultStyle: "1",
						Example: undefined,
					} as const
				)[b.t]
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
	Image: ({ c: [a, inlines, [src, title]] }) => {
		// todo: alt text
		const img = <img src={src} title={title} {...ap(a)} />
		if (inlines.length > 0) {
			return (
				<figure>
					{img}
					<figcaption>
						<Pandoc ele={inlines} />
					</figcaption>
				</figure>
			)
		}
		return img
	},
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
	RawInline: ({ c: [type, content] }) => (
		<PandocConfigContext.Consumer>
			{(config) =>
				type === "html" && config.allowUnsanitizedHTML ? (
					<span dangerouslySetInnerHTML={{ __html: content }} />
				) : (
					<span className={`raw raw-${type}`}>{content}</span>
				)
			}
		</PandocConfigContext.Consumer>
	),
	Table: ({ c }) => {
		type Table = [
			p.Attr,
			Caption,
			ColSpec[],
			TableHead,
			TableBody[],
			TableFoot,
		]
		type Caption = [ShortCaption | null, p.Block[]]
		type ShortCaption = p.Inline[]
		type ColSpec = [p.Alignment, { t: "ColWidth"; c: number }]
		type TableHead = [p.Attr, Row[]]
		type Row = [p.Attr, Cell[]]
		type Cell = [p.Attr, p.Alignment, RowSpan, ColSpan, p.Block[]]
		type RowSpan = number
		type ColSpan = number
		/** A body of a table, with an intermediate head, intermediate body, and the specified number of row header columns in the intermediate body. */
		type TableBody = [p.Attr, RowHeadColumns, Row[], Row[]]
		type RowHeadColumns = number
		type TableFoot = [p.Attr, Row[]]

		const [
			attr,
			caption,
			colspec,
			[theadattr, thead],
			tablebody,
			tablefoot,
		] = c as any as Table
		return (
			<table>
				<thead {...ap(theadattr)}>
					{thead.map(([attr, row], i) => (
						<tr {...ap(attr)} key={i}>
							{row.map(
								(
									[attr, alignment, rowspan, colspan, blocks],
									i,
								) => (
									<th {...ap(attr)} key={i}>
										<Pandoc ele={blocks} />
									</th>
								),
							)}
						</tr>
					))}
				</thead>
				<tbody>
					{tablebody.map(([attr, rowheadcols, r1, r2], i) => (
						<Fragment key={i}>
							{r1.map(([attr, row], i) => (
								<tr key={`r1-${i}`}>
									{row.map(
										(
											[
												attr,
												alignment,
												rowspan,
												colspan,
												blocks,
											],
											i,
										) => (
											<td key={i}>
												<Pandoc ele={blocks} />
											</td>
										),
									)}
								</tr>
							))}
							{r2.map(([attr, row], i) => (
								<tr key={`r2-${i}`}>
									{row.map(
										(
											[
												attr,
												alignment,
												rowspan,
												colspan,
												blocks,
											],
											i,
										) => (
											<td key={i}>
												<Pandoc ele={blocks} />
											</td>
										),
									)}
								</tr>
							))}
						</Fragment>
					))}
				</tbody>
			</table>
		) // todo: caption
	},
	Note: ({ c }) => {
		const [shown, setShown] = React.useState(false)
		return (
			<>
				<span onClick={(e) => setShown(!shown)}>
					<span className="clickable">*</span>
					{shown && (
						<div className="footnote">
							<Pandoc ele={c} />
						</div>
					)}
				</span>
			</>
		)
	},
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
					const C = renderers[
						ele.t
					] as React.FunctionComponent<p.AnyElt>
					return <C {...ele} />
				} else return <>[Not implemented markdown element:{ele.t}]</>
			}}
		</PandocConfigContext.Consumer>
	)
}

export const PandocConfigProvider = PandocConfigContext.Provider
