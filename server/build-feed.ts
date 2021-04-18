import { promises as fs } from "fs"
import { Feed } from "feed"
import { config } from "../client/config"
import summary from "../posts-built/summary.json"
import { makeUrl } from "../client/utils/content"
import { join } from "path"
const outDir = join(__dirname, "..", "client", "public", "blog")

const feed = new Feed({
	title: config.siteTitle,
	description: config.siteDescription,
	id: config.id,
	copyright: "yup",
})

for (const post of summary.posts) {
	feed.addItem({
		title: post.frontmatter.title,
		date: new Date(post.frontmatter.date),
		link: config.publicUrlBase + config.blogRoot + makeUrl(post).slug,
		description: post.preview + "...",
	})
}
async function write() {
	await fs.mkdir(outDir, { recursive: true })
	await fs.writeFile(join(outDir, "rss.xml"), feed.rss2())
	await fs.writeFile(join(outDir, "atom.xml"), feed.atom1())
	await fs.writeFile(join(outDir, "feed.json"), feed.json1())
}

if (require.main === module) write().catch((e) => console.error(e))
