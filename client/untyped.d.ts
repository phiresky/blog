declare module "react-markdown/with-html"

declare module "remark-parse"
declare module "remark-stringify"
declare module "remark-frontmatter"
declare module "strip-markdown"
declare module "react-syntax-highlighter"
declare module "react-syntax-highlighter/*"
declare module "react-katex" {
	export const BlockMath: React.FC<{ math: string }>
	export const InlineMath: React.FC<{ math: string }>
}
declare module "*.scss"

declare module "*?resource"
