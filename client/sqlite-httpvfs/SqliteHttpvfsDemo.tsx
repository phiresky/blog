import * as React from "react"
import { createDbWorker, WorkerHttpvfs, SqliteStats } from "sql.js-httpvfs"
//import workerUrl from "sql.js-httpvfs/dist/sqlite.worker.js?resource"
//import wasmUrl from "sql.js-httpvfs/dist/sql-wasm.js?resource"
import { CodeProps } from "../components/Code"
import CodeBlock from "../components/CodeBlock"
import { observer } from "mobx-react"

class Store {
	worker: WorkerHttpvfs | null = null
	error = ""
	ready: Promise<WorkerHttpvfs>
	constructor() {
		console.log("STORE INIT")
		if (typeof window === "undefined") {
			this.ready = Promise.reject("[server side]")
			this.ready.catch(() => {
				// ignore
			})
		} else {
			Object.assign(window, { httpvfs: this })
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

		this.worker = await createDbWorker(
			new URLSearchParams(location.search).get("dbUrl") ||
				"https://phiresky.github.io/world-development-indicators-sqlite/split-db/config.json",

			workerUrl.toString(),
			wasmUrl.toString(),
		)
		return this.worker
	}
}
type Config = {
	autorun?: true
	diffstat?: true
	logPageReads?: true
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
	const [code, setCode] = React.useState(props.value)
	const [output, setOutput] = React.useState("")
	const [diffstat, setDiffstat] = React.useState<SqliteStats | null>(null)
	const [readPages, setReadPages] = React.useState<number[]>([])
	const [editMode, setEditMode] = React.useState(false)
	async function run() {
		setOutput("[running...]")
		console.log("running", code)
		try {
			const { db, worker } = await store.ready
			let statBefore
			if (config.diffstat) statBefore = await worker.getStats()
			if (config.logPageReads) await worker.getResetAccessedPages()
			const result = await db.query(code)
			console.log("DONE, setout")
			setOutput(JSON.stringify(result, null, 2))
			if (config.diffstat) {
				const statAfter = await worker.getStats()
				if (statBefore && statAfter) {
					setDiffstat({
						filename: statAfter.filename,
						totalBytes: statAfter.totalBytes,
						totalFetchedBytes:
							statAfter.totalFetchedBytes -
							statBefore.totalFetchedBytes,
						totalRequests:
							statAfter.totalRequests - statBefore.totalRequests,
					})
				}
			}
			if (config.logPageReads) {
				setReadPages(await worker.getResetAccessedPages())
			}
		} catch (e) {
			setOutput(`[error: ${String(e)}]`)
		}
	}
	function edit() {
		setEditMode(!editMode)
	}

	return (
		<div style={{}}>
			{!editMode ? (
				<CodeBlock language="sql" value={code} />
			) : (
				<textarea
					style={{
						color: "rgb(204, 204, 204)",
						background: "rgb(45, 45, 45) none repeat scroll 0% 0%",
						fontFamily:
							'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
						fontSize: "1em",
						textAlign: "left",
						whiteSpace: "pre",
						wordSpacing: "normal",
						wordBreak: "normal",
						overflowWrap: "normal",
						lineHeight: 1.5,
						hyphens: "none",
						padding: "1em",
						margin: "0.5em 0px",
						overflow: "auto",
						width: "100%",
						border: "none",
					}}
					value={code}
					onChange={(e) => setCode(e.currentTarget.value)}
				/>
			)}
			<button onClick={run}>Run</button>{" "}
			<button onClick={edit}>{editMode ? "Save" : "Edit"}</button>
			<CodeBlock language="json" value={output} />
			{config.diffstat && diffstat && (
				<SqliteStatsView stats={diffstat} />
			)}
			{config.logPageReads && <PageReadsView pages={readPages} />}
		</div>
	)
}

function formatBytes(b: number) {
	if (b > 1e6) {
		return (b / 1e6).toFixed(1) + "MB"
	}
	if (b > 1e3) {
		return (b / 1e3).toFixed(1) + "KB"
	}
	return `${b}B`
}

const SqliteStatsView: React.FC<{
	stats: SqliteStats
}> = observer(({ stats }) => {
	return (
		<>
			Sqlite stats: fetched {formatBytes(stats.totalFetchedBytes)} in{" "}
			{stats.totalRequests} requests (DB size:{" "}
			{formatBytes(stats.totalBytes)})
		</>
	)
})

const PageReadsView: React.FC<{ pages: number[] }> = observer(({ pages }) => {
	function show() {
		console.log(pages)
	}
	return <button onClick={show}>Show page reads ({pages.length})</button>
})
