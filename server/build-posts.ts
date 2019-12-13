import { join } from "path"
import { promises as fs } from "fs"
import { Root } from "./remark-ast"
import * as yaml from "js-yaml"
import { promisify } from "util"
import { execFile as _execFile } from "child_process"
import * as x from "pandoc-url2cite/dist/util"
import { stringify as stripFormatting, Block } from "pandoc-filter"

const execFile = promisify(_execFile)

export const inputDir = join(__dirname, "../posts")
export const outputDir = join(__dirname, "../posts-built")

export type Frontmatter = {
	title: string
	date: string
	updated?: string
	[k: string]: any
}

async function getMetaAndPreview(path: string) {
	const { stdout } = await execFile("pandoc", [
		"-t",
		"json",
		"--filter=" +
			require.resolve("pandoc-url2cite/dist/pandoc-url2cite.js"),
		"--filter=pandoc-citeproc",
		"--",
		path,
	])
	const parsed = JSON.parse(stdout)
	const frontmatter: Frontmatter = x.fromMetaMap(parsed.meta) as any
	console.log(parsed.meta, frontmatter)
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
	const summary = { posts: posts.map(({ content_ast, ...other }) => other) }
	await fs.mkdir(outputDir, { recursive: true })
	await fs.writeFile(join(outputDir, "summary.json"), stringify(summary))
	for (const post of posts) {
		const path = join(outputDir, post.filename + ".json")
		await fs.mkdir(join(path, ".."), { recursive: true })

		await fs.writeFile(path, stringify(post))
	}
}

if (require.main === module) build()
