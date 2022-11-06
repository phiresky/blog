import { LinkInfo } from "./pages"

export type ConfigJson = {
	siteTitle: string
	siteDescription: string
	stylesheets: string[]
	topLinks: LinkInfo[]

	backgroundClass: string
	siteId: string
	/** must end with slash */
	blogRoot: string
	/** publicUrlBase + blogRoot is the publicly accessible url of the blog - needed for RSS etc feeds */
	publicUrlBase: string
	/** unique id of the blog for RSS */
	id: string
	blogSourceUrl: string
	/** url base to link to at bottom of page */
	postSourceUrlBase?: string
	/** url base to link when a post is updated */
	postSourceHistoryUrlBase?: string
}
export const config: ConfigJson = {
	siteTitle: "phiresky's blog",
	siteDescription: "About my personal projects and other stuff",
	stylesheets: [],
	id: "https://phiresky.github.io/blog/",
	publicUrlBase: "https://phiresky.github.io",
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
	siteId: "G-MN8GSWEESP",
	blogRoot: "/blog/",
	blogSourceUrl: "https://github.com/phiresky/blog",
	postSourceUrlBase: "https://github.com/phiresky/blog/blob/master/posts/",
	postSourceHistoryUrlBase:
		"https://github.com/phiresky/blog/commits/master/posts/",
}
