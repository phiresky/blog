import { Store } from "./SqliteHttpvfsDemo"
import AsyncSelect from "react-select/async"
import debounce from "debounce-promise"
import { WorkerHttpvfs } from "sql.js-httpvfs"
import { useState } from "react"
type IndicatorInfo = {
	indicator_code: string
	topic: string
	indicator_name: string
	short_definition: string
	long_definition: string
	statistical_concept_and_methodology: string
	development_relevance: string
}
export async function search(db: WorkerHttpvfs["db"], author: string) {
	try {
		const query_inner = author
			.split(" ")
			.map((n) => n.replace(/"/g, ""))
			.map((e) => `"${e}"*`)
			.join(" ")
		const query = `${query_inner}`
		const sql_query = `select * from indicator_search where name match ? limit 20`
		console.log("executing search query", query, sql_query)
		const ret = (await db.query(sql_query, [query])) as IndicatorInfo[]
		return ret
	} catch (e) {
		console.error("authorsSearch", e)
		throw e
	}
}

const searchDebounce = debounce(search, 250, { leading: true })
export const FtsDemo: React.FC<{ store: Store }> = ({ store }) => {
	const [search, setSearch] = useState("")
	function setSelected(a: any) {
		console.log("plot", a)
	}
	return (
		<div>
			<AsyncSelect<{ name: string }>
				cacheOptions
				inputValue={search}
				onInputChange={(e) => setSearch(e)}
				loadOptions={(e) => searchDebounce(store.worker!.db, e)}
				getOptionLabel={(e) => e.name}
				getOptionValue={(e) => e.name}
				onChange={(e) => e && setSelected}
			/>
		</div>
	)
}
