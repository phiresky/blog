import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"
import * as yaml from "js-yaml"
import React, { useEffect, useState } from "react"
import { ResponsiveContainer } from "./ResponsiveContainer"

import { AttrProps } from "./Pandoc"

export type CodeProps = AttrProps & { language?: string; value: string }

type CodeChartYaml = {
	title: string
	height?: number
	nossr?: boolean
	categoryWidth?: number
	xUnit?: string
	subtitle?: string
	series: string | { name: string; key: string }[]
	data: { [name: string]: number } | { [name: string]: number }
}

const fillColors = ["#8884d8", "#82ca9d", "#ff5533"]
export function CodeBarChart(props: CodeProps): React.ReactElement {
	const info = yaml.load(props.value) as CodeChartYaml
	const dataObj = info.data
	const data = Array.isArray(dataObj)
		? dataObj
		: Object.entries(dataObj).map(([name, value]) => ({
				name,
				value,
		  }))
	const series = Array.isArray(info.series)
		? info.series
		: [{ name: info.series, key: "value" }]
	const [doRender, setDoRender] = useState(!info.nossr)
	useEffect(() => {
		if (!doRender) setDoRender(true)
	})
	if (!doRender) {
		return <div />
	}
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<p>
					{info.title}
					{info.subtitle && (
						<small>
							<br />
							{info.subtitle}
						</small>
					)}
				</p>
			</div>
			<ResponsiveContainer
				width="100%"
				height={info.height ?? 200}
				initialWidth={600}
				initialHeight={info.height ?? 200}
			>
				<BarChart data={data} layout="vertical">
					<XAxis type="number" unit={info.xUnit} />
					<YAxis
						type="category"
						dataKey="name"
						width={info.categoryWidth ?? 100}
					/>
					<Tooltip />
					<Legend />
					{series.map((s, i) => (
						<Bar
							key={s.key}
							dataKey={s.key}
							name={s.name}
							fill={fillColors[i % fillColors.length]}
						/>
					))}
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
