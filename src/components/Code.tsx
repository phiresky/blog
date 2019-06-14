import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import { load } from "js-yaml"
import CodeBlock from "./CodeBlock"
import React from "react"

type CodeProps = { language?: string; value: string }

export function Code(props: CodeProps) {
	const components: { [name: string]: React.ComponentType<CodeProps> } = {
		barchart: CodeBarChart,
	}
	const Component = components[(props.language || "") as any]
	if (Component) {
		return <Component {...props} />
	}
	return <CodeBlock {...props} />
}
export function CodeBarChart(props: CodeProps) {
	const info = load(props.value)
	console.log(info)
	let data = info.data
	if (typeof data === "object") {
		data = Object.entries(data).map(([name, value]) => ({
			name,
			value,
		}))
	}
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<p>{info.title}</p>
				{info.subtitle && <p>{info.subtitle}</p>}
			</div>
			<BarChart width={600} height={200} data={data} layout="vertical">
				<XAxis type="number" />
				<YAxis type="category" dataKey="name" width={200} />
				<Tooltip />
				<Legend />
				<Bar dataKey="value" name={info.series} fill="#8884d8" />
			</BarChart>
		</div>
	)
}
