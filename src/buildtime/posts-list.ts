import "ts-node/register"
import { returnJson } from "./util"
import { join } from "path"
import { promises as fs } from "fs"

export default returnJson(async () => {
	const d = join(__dirname, "/../../posts")
	const posts = []
	for (const dir of await fs.readdir(d)) {
		for (const file of await fs.readdir(join(d, dir))) {
			const path = join(dir, file)
			console.log(path)
			posts.push({
				file: path,
				content: await fs.readFile(join(d, dir, file), "utf8"),
			})
		}
	}
	return posts
})
