import "ts-node/register/transpile-only"
import { returnJson } from "./util"
import { join } from "path"
import { promises as fs } from "fs"
import unified from "unified"
import markdown from "remark-parse"
import stringify from "remark-stringify"
import mdfrontmatter from "remark-frontmatter"
import stripmarkdown from "strip-markdown"

import { Root } from "../remark-ast"
import * as yaml from "js-yaml"

type Frontmatter = {
	date: string
	title: string
	[k: string]: any
}

function getMetaAndPreview(content: string) {
	const _processed = unified()
		.use(markdown)
		.use(mdfrontmatter, ["yaml"])
		.parse(content)
	const previewProcessor = unified()
		.use(stripmarkdown)
		.use(stringify)
	const preview = previewProcessor
		.stringify(previewProcessor.runSync(
			JSON.parse(JSON.stringify(_processed)),
		) as any)
		.trim()
		.replace(/\s+/g, "  ")
		.substr(0, 500)
		.replace(/\s*\S+$/, "...") // remove cut off word

	const processed = (_processed as any) as Root
	const first = processed.children[0]
	let frontmatter: Frontmatter
	if (first.type === "yaml") {
		frontmatter = yaml.load(first.value)
	} else frontmatter = { date: "NaN", title: "[No frontmatter given]" }
	return { frontmatter, preview }
}
export async function parsePosts() {
	const d = join(__dirname, "/../../posts")
	const posts = []
	for (const dir of await fs.readdir(d)) {
		for (const file of await fs.readdir(join(d, dir))) {
			const path = join(dir, file)
			const content = await fs.readFile(join(d, dir, file), "utf8")

			const { frontmatter, preview } = getMetaAndPreview(content)

			// remove frontmatter, hacky af
			const content_md = content
				.split("\n---\n")
				.slice(1)
				.join("\n---\n")
			posts.push({
				filename: path,
				frontmatter,
				preview,
				content_md,
			})
		}
	}
	return posts
}

type ThenArg<T> = T extends Promise<infer U> ? U : T

export type Post = ThenArg<ReturnType<typeof parsePosts>>[0]
