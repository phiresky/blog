import { LinkInfo } from "./pages"

export type ConfigJson = {
	siteTitle: string
	siteDescription: string
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
	/** must end with slash */
	blogRoot: string
}
export const config: ConfigJson = {
	siteTitle: "phiresky's blog",
	siteDescription: "About my personal projects and other stuff",
	stylesheets: [],
	topLinks: [
		{
			text: "Blog",
			href: "https://phiresky.github.io/blog/",
		},
		{
			text: "GitHub",
			href: "https://github.com/phiresky/",
		},
	],
	backgroundClass: "bg-dark-gray",
	copyright: "",
	siteId: "UA-39197996-3",
	bodyContent: "",
	bodyHtml: "",
	dir: "content",
	base: "index.json",
	ext: ".json",
	sourceBase: "index.md",
	sourceExt: ".md",
	blogRoot: "/blog/",
}
