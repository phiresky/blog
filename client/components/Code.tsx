import dynamic from "next/dynamic"
import React from "react"
import CodeBlock from "./CodeBlock"
import { AttrProps } from "./Pandoc"

export type CodeProps = AttrProps & { language?: string; value: string }

const CodeBarChart = dynamic<CodeProps>(() =>
	import("./CodeBarChart").then((m) => m.CodeBarChart),
)
const SqliteHttpvfsDemo = dynamic<CodeProps>(() =>
	import("../sqlite-httpvfs/SqliteHttpvfsDemo").then(
		(m) => m.SqliteHttpvfsDemo,
	),
)
const specialCodeBlockComponents: {
	[name: string]: React.ComponentType<CodeProps> | undefined
} = {
	barchart: CodeBarChart,
	"sqlite-httpvfs-demo": SqliteHttpvfsDemo,
}

export function Code(props: CodeProps): React.ReactElement {
	const Component = specialCodeBlockComponents[props.language || ""]
	if (Component) {
		return <Component {...props} />
	}
	return <CodeBlock {...props} />
}
