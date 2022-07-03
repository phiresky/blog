declare module "react-syntax-highlighter"
declare module "react-syntax-highlighter/*"
declare module "react-katex" {
	export const BlockMath: React.FC<{ math: string }>
	export const InlineMath: React.FC<{ math: string }>
}
declare module "*.scss"

declare module "*?resource"

declare module "recharts/lib/util/*"
