interface Position {}

interface Node<T extends string = string> {
	position: Position
	type: T
}

interface NodeList<T extends string = string, TItem extends Node = Node>
	extends Node<T> {
	children: TItem[]
}

export interface Root extends NodeList<"root", Item> {}

type Item =
	| Yaml
	| Toml
	| Paragraph
	| Emphasis
	| Paragraph
	| Strong
	| Text
	| InlineCode
	| ThematicBreak
	| Code
	| List
	| Link

// remark-frontmatter
interface Yaml extends Node<"yaml"> {
	value: string
}
interface Toml extends Node<"toml"> {
	value: string
}

interface Paragraph extends NodeList<"paragraph", Item> {}
interface Emphasis extends NodeList<"emphasis", Item> {}
interface Paragraph extends NodeList<"paragraph", Item> {}
interface Strong extends NodeList<"strong", Item> {}
interface List extends NodeList<"list", ListItem> {
	lang: string
	value: string
	ordered: boolean
	spreak: boolean
}
interface ListItem extends NodeList<"listItem", Item> {
	spread: boolean
	checked: null
}

interface Text extends Node<"text"> {
	value: string
}
interface InlineCode extends Node<"inlineCode"> {}
interface ThematicBreak extends Node<"thematicBreak"> {}
interface Code extends Node<"code"> {
	lang: string
	value: string
}
interface Link extends NodeList<"link", Item> {
	title: null | string
	url: string
}
interface Image extends Node<"image"> {
	title: null | string
	url: string
	alt: string
}
