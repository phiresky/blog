import debounce from "debounce-promise"
import React, { useEffect, useState } from "react"
import { FormatOptionLabelMeta } from "react-select"
import AsyncSelect from "react-select/async"
import VisibilitySensor from "react-visibility-sensor"
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { ResponsiveContainer } from "../components/ResponsiveContainer"
import { Store } from "./SqliteHttpvfsDemo"

type CountryInfo = {
	country_code: string
	short_name: string
}
type IndicatorInfo = {
	indicator_code: string
	topic: string
	indicator_name: string
	short_definition: string | null
	long_definition: string
	statistical_concept_and_methodology: string
	development_relevance: string
	snippet: string
	error?: true
}
export async function indicatorSearch(
	store: Store,
	author: string,
): Promise<IndicatorInfo[]> {
	if (author.length < 3) {
		return [{ error: "Type more..." } as unknown as IndicatorInfo]
	}
	try {
		const { db } = await store.ready
		const query_inner = author
			.split(" ")
			.map((n) => n.replace(/"/g, ""))
			.map((e) => `"${e}"*`)
			.join(" ")
		const query = `${query_inner}`
		const sql_query = `select *, snippet(indicator_search, -1, '§', '§', ' ... ', 32) as snippet from indicator_search where indicator_search match ? order by rank limit 10`
		console.log("executing search query", query, sql_query)
		const ret = (await db.query(sql_query, [query])) as IndicatorInfo[]
		return ret
	} catch (e) {
		console.error("authorsSearch", e)
		throw e
	}
}
const indicatorSearchDebounce = debounce(indicatorSearch, 250)

export async function countrySearch(
	store: Store,
	name: string,
): Promise<CountryInfo[]> {
	try {
		const { db } = await store.ready
		const sql_query = `select short_name, country_code from wdi_country where long_name like ? or short_name like ? or country_code like ? limit 10`
		console.log("executing search query", sql_query)
		const q = `%${name}%`
		const ret = (await db.query(sql_query, [q, q, q])) as CountryInfo[]
		return ret
	} catch (e) {
		console.error("authorsSearch", e)
		throw e
	}
}
const countrySearchDebounce = debounce(countrySearch, 250)
function IndicatorOption(
	indicator: IndicatorInfo,
	meta: FormatOptionLabelMeta<IndicatorInfo>,
) {
	if (indicator.error) return indicator.error
	if (meta.context === "value") return indicator.indicator_name
	const snippetReact = []
	for (const [i, part] of indicator.snippet.split("§").entries()) {
		snippetReact.push(
			i % 2 == 0 ? <span key={i}>{part}</span> : <b key={i}>{part}</b>,
		)
	}
	return (
		<>
			{indicator.indicator_name}
			<br />
			<small>{indicator.topic}</small>
			<br />
			<span style={{ color: "gray" }}>{snippetReact}</span>
		</>
	)
}
const defaultCountries = [
	{
		short_name: "United States",
		country_code: "USA",
	},
	{
		short_name: "Germany",
		country_code: "DEU",
	},
	{
		short_name: "India",
		country_code: "IND",
	},
	{
		short_name: "China",
		country_code: "CHN",
	},
	{
		short_name: "Korea",
		country_code: "KOR",
	},
]
const defaultIndicator = {
	indicator_code: "IT.NET.USER.ZS",
	topic: "Infrastructure: Communications",
	indicator_name: "Individuals using the Internet (% of population)",
	short_definition: null,
	long_definition:
		"Internet users are individuals who have used the Internet (from any location) in the last 3 months. The Internet can be used via a computer, mobile phone, personal digital assistant, games machine, digital TV etc.",
	statistical_concept_and_methodology:
		"The Internet is a world-wide public computer network. It provides access to a number of communication services including the World Wide Web and carries email, news, entertainment and data files, irrespective of the device used (not assumed to be only via a computer - it may also be by mobile phone, PDA, games machine, digital TV etc.). Access can be via a fixed or mobile network. For additional/latest information on sources and country notes, please also refer to: https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx",
	development_relevance:
		"The digital and information revolution has changed the way the world learns, communicates, does business, and treats illnesses. New information and communications technologies (ICT) offer vast opportunities for progress in all walks of life in all countries - opportunities for economic growth, improved health, better service delivery, learning through distance education, and social and cultural advances.\n\nToday's smartphones and tablets have computer power equivalent to that of yesterday's computers and provide a similar range of functions. Device convergence is thus rendering the conventional definition obsolete.\n\nComparable statistics on access, use, quality, and affordability of ICT are needed to formulate growth-enabling policies for the sector and to monitor and evaluate the sector's impact on development. Although basic access data are available for many countries, in most developing countries little is known about who uses ICT; what they are used for (school, work, business, research, government); and how they affect people and businesses. The global Partnership on Measuring ICT for Development is helping to set standards, harmonize information and communications technology statistics, and build statistical capacity in developing countries. However, despite significant improvements in the developing world, the gap between the ICT haves and have-nots remains.",
	snippet: "",
}

const COLORS = [
	"#7cb5ec",
	"#434348",
	"#90ed7d",
	"#f7a35c",
	"#8085e9",
	"#f15c80",
	"#e4d354",
	"#2b908f",
	"#f45b5b",
	"#91e8e1",
]

export const FtsDemo: React.FC<{ store: Store }> = ({ store }) => {
	const [visible, setVisible] = useState(false)
	const [countries, setCountries] = useState(
		defaultCountries as readonly CountryInfo[],
	)
	const [indicator, setIndicator] = useState(
		defaultIndicator as null | IndicatorInfo,
	)
	const [data, setData] = useState(
		null as null | { series: string[]; data: any[] },
	)
	async function plot() {
		if (!visible) return
		if (countries.length === 0 || !indicator) {
			setData(null)
			return
		}
		console.log("plot", countries, indicator)

		const { db } = await store.ready
		const res = (await db.query(
			"select short_name, year, value from wdi_data join wdi_country using (country_code) where country_code in (select value from json_each(?)) and indicator_code = ? order by year asc",
			[
				JSON.stringify(countries.map((c) => c.country_code)),
				indicator.indicator_code,
			],
		)) as {
			short_name: string
			year: number
			value: number
		}[]
		const entries = new Map<number, Record<string, number>>()
		for (const ele of res) {
			let y = entries.get(ele.year)
			if (!y) {
				y = { year: ele.year }
				entries.set(ele.year, y)
			}
			y[ele.short_name] = ele.value
		}
		console.log("plotres", res)
		setData({
			series: countries.map((c) => c.short_name),
			data: [...entries.values()],
		})
	}
	useEffect(() => {
		void plot()
	}, [indicator, countries, visible])
	return (
		<VisibilitySensor
			onChange={(e: React.SetStateAction<boolean>) => setVisible(e)}
		>
			<div className="sqlite-httpvfs-demo">
				Countries:{" "}
				<AsyncSelect<CountryInfo, true>
					value={countries}
					cacheOptions
					defaultOptions
					isMulti
					loadOptions={(e) => {
						return countrySearchDebounce(store, e)
					}}
					getOptionLabel={(e) => e.short_name}
					// formatOptionLabel={IndicatorOption}
					getOptionValue={(e) => e.country_code}
					onChange={(e) => setCountries(e)}
					// isOptionDisabled={(e) => !!e.error}
				/>
				Indicator:{" "}
				<AsyncSelect<IndicatorInfo>
					value={indicator}
					cacheOptions
					defaultOptions
					loadOptions={(e) => {
						return indicatorSearchDebounce(store, e)
					}}
					getOptionLabel={(e) => e.indicator_name}
					formatOptionLabel={IndicatorOption}
					getOptionValue={(e) => e.indicator_code}
					onChange={(e) => setIndicator(e)}
					isOptionDisabled={(e) => !!e.error}
				/>
				{data && (
					<ResponsiveContainer
						width="100%"
						height={300}
						initialWidth={600}
						initialHeight={300}
					>
						<LineChart data={data.data}>
							<XAxis dataKey="year" />
							<YAxis />
							<Tooltip />
							<Legend />
							{data.series.map((s, i) => (
								<Line
									key={s}
									type="monotone"
									dataKey={s}
									name={s}
									// fill={COLORS[i % COLORS.length]}
									stroke={COLORS[i % COLORS.length]}
									connectNulls
									strokeWidth={3}
								/>
							))}
						</LineChart>
					</ResponsiveContainer>
				)}
				{/*
					indicator_code: "IT.NET.USER.ZS",
	topic: "Infrastructure: Communications",
	indicator_name: "Individuals using the Internet (% of population)",
	short_definition: null,
	long_definition:
		"Internet users are individuals who have used the Internet (from any location) in the last 3 months. The Internet can be used via a computer, mobile phone, personal digital assistant, games machine, digital TV etc.",
	statistical_concept_and_methodology:
		"The Internet is a world-wide public computer network. It provides access to a number of communication services including the World Wide Web and carries email, news, entertainment and data files, irrespective of the device used (not assumed to be only via a computer - it may also be by mobile phone, PDA, games machine, digital TV etc.). Access can be via a fixed or mobile network. For additional/latest information on sources and country notes, please also refer to: https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx",
	development_relevance:
		"The digital and information revolution has changed the way the world learns, communicates, does business, and treats illnesses. New information and communications technologies (ICT) offer vast opportunities for progress in all walks of life in all countries - opportunities for economic growth, improved health, better service delivery, learning through distance education, and social and cultural advances.\n\nToday's smartphones and tablets have computer power equivalent to that of yesterday's computers and provide a similar range of functions. Device convergence is thus rendering the conventional definition obsolete.\n\nComparable statistics on access, use, quality, and affordability of ICT are needed to formulate growth-enabling policies for the sector and to monitor and evaluate the sector's impact on development. Although basic access data are available for many countries, in most developing countries little is known about who uses ICT; what they are used for (school, work, business, research, government); and how they affect people and businesses. The global Partnership on Measuring ICT for Development is helping to set standards, harmonize information and communications technology statistics, and build statistical capacity in developing countries. However, despite significant improvements in the developing world, the gap between the ICT haves and have-nots remains.",
	snippet: "",
}

*/}
				<details>
					<summary>Extra information about this indicator</summary>
					<dl className="maxheight">
						<dt>Indicator Code</dt>
						<dd>{indicator?.indicator_code}</dd>
						<dt>Long definition</dt>
						<dd>{indicator?.long_definition}</dd>
						<dt>Statistical concept and methodology</dt>
						<dd>
							{indicator?.statistical_concept_and_methodology}
						</dd>
						<dt>Development relevance</dt>
						<dd>{indicator?.development_relevance}</dd>
					</dl>
				</details>
			</div>
		</VisibilitySensor>
	)
}
