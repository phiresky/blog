import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import * as yaml from "js-yaml"
import React from "react"
import { ResponsiveContainer } from "./ResponsiveContainer"

import { AttrProps } from "./Pandoc"

export type CodeProps = AttrProps & { language?: string; value: string }

type CodeChartYaml = {
	title: string
	subtitle?: string
	series?: string
	data: { [name: string]: number }
}
export function CodeBarChart(props: CodeProps): React.ReactElement {
	const info = yaml.load(props.value) as CodeChartYaml
	const dataObj = info.data
	const data = Object.entries(dataObj).map(([name, value]) => ({
		name,
		value,
	}))

	/*const Wrap = isClientSide
		? (p: { children: any }) => (
				
					{p.children}
				</ResponsiveContainer>
		  )
		: (p: { children: any }) => <>{p.children}</>*/
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<p>{info.title}</p>
				{info.subtitle && <p>{info.subtitle}</p>}
			</div>
			<ResponsiveContainer
				width="100%"
				height={200}
				initialWidth={600}
				initialHeight={200}
			>
				<BarChart data={data} layout="vertical">
					<XAxis type="number" />
					<YAxis type="category" dataKey="name" width={100} />
					<Tooltip />
					<Legend />
					<Bar dataKey="value" name={info.series} fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
