import * as React from "react"
import { createDbWorker, WorkerHttpvfsDatabase } from "sql.js-httpvfs"
//import workerUrl from "sql.js-httpvfs/dist/sqlite.worker.js?resource"
//import wasmUrl from "sql.js-httpvfs/dist/sql-wasm.js?resource"
import { CodeProps } from "../components/Code"
import CodeBlock from "../components/CodeBlock"

class Store {
	db: WorkerHttpvfsDatabase | null = null
	error = ""
	ready: Promise<WorkerHttpvfsDatabase>
	constructor() {
		if (typeof window === "undefined") {
			this.ready = Promise.reject("[server side]")
			this.ready.catch(() => {
				// ignore
			})
		} else {
			this.ready = this.init()
		}
	}
	async init() {
		/*
		const workerUrl = new URL(
			"sql.js-httpvfs/dist/sqlite.worker.js",
			import.meta.url,
		)
		const wasmUrl = new URL(
			"sql.js-httpvfs/dist/sql-wasm.wasm",
			import.meta.url,
		)*/
		// until nextjs fixes their webpack5 support:
		const workerUrl = "/blog/sqlite.worker.js"
		const wasmUrl = "/blog/sql-wasm.wasm"

		return await createDbWorker(
			new URLSearchParams(location.search).get("dbUrl") ||
				"https://phiresky.github.io/world-development-indicators-sqlite/split-db/config.json",

			workerUrl.toString(),
			wasmUrl.toString(),
		)
	}
}
type Config = {
	autorun?: boolean
}
type Z = (keyof Config)[]

let store: Store
function getStore() {
	if (!store) store = new Store()
	return store
}

export const SqliteHttpvfsDemo: React.FC<CodeProps> = (props) => {
	const store = getStore()
	const config: Config = {}
	for (const cls of (props.className?.split(" ") || []) as Z) {
		config[cls] = true
	}
	React.useEffect(() => {
		if (config.autorun) void run()
	}, [])
	const [output, setOutput] = React.useState("")
	async function run() {
		setOutput("[running...]")
		try {
			const db = await store.ready
			const result = await db.query(props.value)
			setOutput(JSON.stringify(result, null, 2))
		} catch (e) {
			setOutput(`[error: ${String(e)}]`)
		}
	}

	return (
		<div style={{}}>
			<CodeBlock language="sql" value={props.value} />
			<button onClick={run}>Run</button>
			<CodeBlock language="json" value={output} />
		</div>
	)
}
