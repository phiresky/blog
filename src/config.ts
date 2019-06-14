import { LinkInfo } from "../pages"

export type ConfigJson = {
	siteTitle: string
	description: string
	stylesheets: string[]
	topLinks: LinkInfo[]

	backgroundClass: string
	copyright: string
	siteId: string
	bodyContent: string
	bodyHtml: string
	dir: string
	base: string
	ext: string
	sourceBase: string
	sourceExt: string
}
export const config: ConfigJson = {
	siteTitle: "My Blog",
	description: "About my personal projects and other stuff",
	stylesheets: ["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],
	topLinks: [
		{
			text: "Github",
			href: "https://github.com/phiresky/",
		},
	],
	backgroundClass: "bg-dark-gray",
	copyright: "",
	siteId: "",
	bodyContent: "",
	bodyHtml: "",
	dir: "content",
	base: "index.json",
	ext: ".json",
	sourceBase: "index.md",
	sourceExt: ".md",
}
