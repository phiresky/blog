import { join, dirname } from "path"
import { promises as fs } from "fs"
import { promisify } from "util"
import { execFile as _execFile } from "child_process"
import anchorme from "anchorme"
import { ListingProps, BaseTokenProps, URL } from "anchorme/dist/node/types"
import {
	stringify as stripFormatting,
	Block,
	AnyElt,
	filter,
	PandocJson,
	EltType,
	Elt,
	Str,
	Link,
	metaMapToRaw,
	Format,
	PandocMetaMap,
	Plain,
	Inline,
	Para,
} from "pandoc-filter"

const execFile = promisify(_execFile)

export const inputDir = join(__dirname, "../posts")
export const outputDir = join(__dirname, "../posts-built")

export type Frontmatter = {
	title: string
	subtitle?: string
	date: string
	updated?: string
	hidden?: boolean
	[k: string]: unknown
}

function mergeStrsReduce(eles: AnyElt[], next: AnyElt) {
	if (eles.length > 0) {
		const left = eles[eles.length - 1]
		const gtrs: Partial<{ [k in EltType]: (e: Elt<k>) => string }> = {
			Str: (e) => e.c,
			Space: (_) => " ",
			SoftBreak: (_) => " ",
		}
		if (left.t in gtrs && next.t in gtrs) {
			eles.pop()
			return [
				...eles,
				Str(gtrs[left.t]!(left as any) + gtrs[next.t]!(next as any)),
			]
		}
	}
	return [...eles, next]
}
function mergeStrs(v: AnyElt[]) {
	return v.reduce(mergeStrsReduce, [])
}
/*function isLinkRelative(url: string) {
	return new URL(url, "https://example.com").origin === "https://example.com"
}
function makeLinksAbs(v: AnyElt, _: Format, meta: PandocMetaMap) {
	if (v.t === "Link" || v.t === "Image") {
		const [a, b, [url, title]] = v.c
		const Cons = v.t === "Link" ? Link : Image
		const base =
			metaMapToRaw(meta).blog?.[
				v.t === "Link" ? "relative_links" : "relative_images"
			] || ""
		const urL = isLinkRelative(urL) ? base + url : url
		return Cons(a, b, [urL, title])
	}
}*/

type FullAnchorme = ListingProps | ({ isText: true } & BaseTokenProps)
function anchormeFullList(text: string): FullAnchorme[] {
	const matches = anchorme.list(text)

	const elements: FullAnchorme[] = []
	let lastIndex = 0
	matches.forEach((match) => {
		// Push text located before matched string
		if (match.start > lastIndex) {
			elements.push({
				isText: true,
				start: lastIndex,
				end: match.start,
				string: text.substring(lastIndex, match.start),
			})
		}

		// Push Link component
		elements.push(match)

		lastIndex = match.end
	})

	// Push remaining text
	if (text.length > lastIndex) {
		elements.push({
			isText: true,
			start: lastIndex,
			end: text.length,
			string: text.substring(lastIndex),
		})
	}

	return elements
}

function _mapInlines(inlines: Inline[]) {
	return inlines.flatMap<Inline>((v) => {
		if (v.t === "Str") {
			return anchormeFullList(v.c).map((e) => {
				if (
					((e as URL).isURL && !(e as URL).protocol) ||
					("isText" in e && e.isText)
				) {
					// if is url but doesn't have protocol
					return Str(e.string)
				} else
					return Link(
						["", ["auto-linked"], []],
						[Str(e.string)],
						[e.string, ""],
					)
			})
		} else return [v]
	})
}
function autoDetectLinks(v: AnyElt, _: Format, _meta: PandocMetaMap) {
	if (v.t === "Plain") return Plain(_mapInlines(v.c))
	if (v.t === "Para") return Para(_mapInlines(v.c))
	return v
}

async function getMetaAndPreview(path: string) {
	const { stdout } = await execFile(
		"pandoc",
		[
			"-t",
			"json",
			"-M",
			"url2cite-link-output=sup",
			"--filter=" +
				require.resolve("pandoc-url2cite/dist/pandoc-url2cite.js"),
			"--filter=pandoc-citeproc",
			"--csl=../ieee-with-url.csl",
			"--",
			path,
		],
		{ cwd: dirname(path) },
	)
	const _parsed = JSON.parse(stdout) as PandocJson
	const parsed = await filter(
		_parsed,
		{ array: mergeStrs, single: autoDetectLinks },
		"",
	)
	const frontmatter = metaMapToRaw(parsed.meta) as Frontmatter
	const text = stripFormatting(parsed.blocks)
	const preview = text
		.trim()
		.replace(/\s+/g, " ")
		.substr(0, 300)
		.replace(/\s*\S+$/, "") // remove cut off word
	return { frontmatter, preview, content_ast: parsed.blocks }
}
export async function parsePosts(): Promise<Post[]> {
	const d = join(__dirname, "/../posts")
	const posts = []
	for (const dir of await fs.readdir(d)) {
		if (!(await fs.stat(join(d, dir))).isDirectory()) continue
		for (const file of await fs.readdir(join(d, dir))) {
			if (!/\.md$/.test(file)) continue
			const path = join(dir, file)

			const {
				frontmatter,
				preview,
				content_ast,
			} = await getMetaAndPreview(join(d, dir, file))

			posts.push({
				filename: path,
				frontmatter,
				preview,
				content_ast,
			})
		}
	}
	return posts
}

export type Post = {
	filename: string
	frontmatter: Frontmatter
	preview: string
	content_ast: Block[]
}
export type PostSummary = Omit<Post, "content_ast">
export type Summary = { posts: PostSummary[] }

const stringify = (o: unknown) => JSON.stringify(o, null, "\t")

async function build() {
	const posts = await parsePosts()
	const summary = {
		posts: posts.map(({ content_ast, ...other }) => other),
	}
	await fs.mkdir(outputDir, { recursive: true })
	await fs.writeFile(join(outputDir, "summary.json"), stringify(summary))
	for (const post of posts) {
		const path = join(outputDir, post.filename + ".json")
		await fs.mkdir(join(path, ".."), { recursive: true })

		await fs.writeFile(path, stringify(post))
	}
}

if (require.main === module) build().catch((e) => console.error(e))
