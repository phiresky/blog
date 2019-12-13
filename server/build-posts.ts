import { join, dirname } from "path"
import { promises as fs } from "fs"
import { promisify } from "util"
import { execFile as _execFile } from "child_process"
import { config } from "../src/config"

import {
	stringify as stripFormatting,
	Block,
	AnyElt,
	filter,
	PandocJson,
	Para,
	Inline,
	Image,
	EltType,
	Elt,
	Str,
	FilterAction,
	Format,
	Link,
	PandocMetaMap,
	metaMapToRaw,
} from "pandoc-filter"

const execFile = promisify(_execFile)

export const inputDir = join(__dirname, "../posts")
export const outputDir = join(__dirname, "../posts-built")

export type Frontmatter = {
	title: string
	date: string
	updated?: string
	hidden?: boolean
	[k: string]: any
}

function mergeStrsReduce(eles: AnyElt[], next: AnyElt) {
	if (eles.length > 0) {
		const left = eles[eles.length - 1]
		const gtrs: Partial<{ [k in EltType]: (e: Elt<k>) => string }> = {
			Str: e => e.c,
			Space: _ => " ",
			SoftBreak: _ => " ",
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
function makeLinksAbs(v: AnyElt, _: Format, meta: PandocMetaMap) {
	if (v.t === "Link" || v.t === "Image") {
		const [a, b, [url, title]] = v.c
		const Cons = v.t === "Link" ? Link : Image
		const base =
			(metaMapToRaw(meta) as any).blog?.[
				v.t === "Link" ? "relative_links" : "relative_images"
			] || ""
		const urL =
			new URL(url, "https://example.com").origin === "https://example.com"
				? base + url
				: url
		return Cons(a, b, [urL, title])
	}
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
			"--csl=ieee-with-url.csl",
			"--",
			path,
		],
		{ cwd: dirname(path) },
	)
	const _parsed: PandocJson = JSON.parse(stdout)
	const parsed = filter(
		_parsed,
		{ array: mergeStrs, single: makeLinksAbs },
		"",
	)
	const frontmatter: Frontmatter = metaMapToRaw(parsed.meta) as any
	const text = stripFormatting(parsed.blocks)
	const preview = text
		.trim()
		.replace(/\s+/g, " ")
		.substr(0, 300)
		.replace(/\s*\S+$/, "") // remove cut off word
	return { frontmatter, preview, content_ast: parsed.blocks as Block[] }
}
export async function parsePosts() {
	const d = join(__dirname, "/../posts")
	const posts = []
	for (const dir of await fs.readdir(d)) {
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

type ThenArg<T> = T extends Promise<infer U> ? U : T

export type Post = ThenArg<ReturnType<typeof parsePosts>>[0]
export type Summary = { posts: Omit<Post, "content_ast">[] }

const stringify = (o: any) => JSON.stringify(o, null, "\t")

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

if (require.main === module) build()
