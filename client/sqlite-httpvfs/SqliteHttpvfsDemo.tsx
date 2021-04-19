import * as React from "react"
import { createDbWorker, WorkerHttpvfs, SqliteStats } from "sql.js-httpvfs"
//import workerUrl from "sql.js-httpvfs/dist/sqlite.worker.js?resource"
//import wasmUrl from "sql.js-httpvfs/dist/sql-wasm.js?resource"
import { CodeProps } from "../components/Code"
import CodeBlock from "../components/CodeBlock"
import { observer } from "mobx-react"
import {
	faCircle,
	faEdit,
	faInfoCircle,
	faKeyboard,
	faPlay,
	faSave,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import Modal from "react-modal"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { storeAnnotation } from "mobx/dist/internal"
Modal.setAppElement(".lh-copy")

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
	statsConnected = false
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

		const dbDir =
			new URLSearchParams(location.search).get("dbUrl") ||
			"/world-development-indicators-sqlite/split-db"

		this.worker = await createDbWorker(
			[
				{
					from: "jsonconfig",
					virtualFilename: "wdi.sqlite3",
					configUrl: dbDir + "/config.json",
				},
				{
					from: "inline",
					virtualFilename: "dbstat.sqlite3",
					config: {
						serverMode: "full",
						requestChunkSize: 4096,
						url: dbDir + "/dbstat.sqlite3",
					},
				},
			],
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
	const [readPages, setReadPages] = React.useState<number[] | null>(null)
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
		<div className="sqlite-httpvfs-demo">
			<div className="box-title">Demo</div>
			<div className="with-inner-title">
				<div className="inner-title">
					<div>Input SQL</div>
					<div role="button" className="floatright" onClick={edit}>
						{editMode ? (
							<>
								<Icon icon={faSave} size="sm" /> Save
							</>
						) : (
							<>
								<Icon icon={faKeyboard} size="sm" /> Edit
							</>
						)}
					</div>
				</div>
				{!editMode ? (
					<CodeBlock className="inner" language="sql" value={code} />
				) : (
					<textarea
						className="like-codeblock inner"
						value={code}
						onChange={(e) => setCode(e.currentTarget.value)}
					/>
				)}
			</div>

			<div className="with-inner-title hanging">
				<div className="inner-title">
					{output ? (
						<>
							<div>Output JSON</div>{" "}
							<div role="button" onClick={run}>
								<Icon icon={faPlay} size="sm" /> Rerun
							</div>
						</>
					) : (
						<div role="button" onClick={run}>
							<Icon icon={faPlay} size="sm" /> Run
						</div>
					)}
				</div>
				{output ? (
					<CodeBlock
						className="inner"
						language="json"
						value={output}
					/>
				) : (
					<div style={{ paddingBottom: "1ex" }} />
				)}
			</div>
			{config.diffstat && diffstat && (
				<SqliteStatsView stats={diffstat} readPages={readPages} />
			)}
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
	readPages: number[] | null
}> = observer(({ stats, readPages }) => {
	return (
		<div className="with-inner-title hanging">
			<div className="inner-title">
				<div>Sqlite stats</div>
				{readPages && <PageReadsView pages={readPages} />}
			</div>
			<div className="inner like-codeblock">
				fetched {formatBytes(stats.totalFetchedBytes)} in{" "}
				{stats.totalRequests} requests (DB size:{" "}
				{formatBytes(stats.totalBytes)})
			</div>
		</div>
	)
})

type PageInfo = {
	pageno: number
	name: string
	pagetype: string
	number_of_cells: number
	payload_bytes: number
	unused_bytes: number
}
const PageReadsView: React.FC<{ pages: number[] }> = observer(({ pages }) => {
	const store = getStore()
	const [data, setData] = React.useState("Loading..." as string | PageInfo[])
	async function show() {
		setIsOpen(true)
		if (!store.worker || !store.worker.db) {
			setData("no db")
			return
		}
		try {
			if (!store.statsConnected) {
				await store.worker?.db.query(`attach 'dbstat.sqlite3' as stat`)
				store.statsConnected = true
			}
			const res = (await store.worker?.db.query(`
				select *, n.name, t.name as pagetype from stat.stat s
				join stat.names n on n.id = s.name
				join stat.pagetypes t on t.id = s.pagetype 
				where pageno in (${pages.join(",")})
			`)) as PageInfo[]
			console.log(pages, res)
			res.sort(
				(a, b) => pages.indexOf(a.pageno) - pages.indexOf(b.pageno),
			)
			setData(res)
		} catch (e) {
			console.error(e)
			setData(String(e))
		}
	}
	const [modalIsOpen, setIsOpen] = React.useState(false)
	console.log("ISOPEN", modalIsOpen)
	return (
		<>
			<div role="button" className="floatright" onClick={show}>
				<Icon icon={faInfoCircle} /> Show read pages ({pages.length})
			</div>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
				Loaded pages:
				{typeof data === "string" ? (
					data
				) : (
					<table>
						<thead>
							<tr>
								<th>Read Request</th>
								<th>Page Number</th>
								<th>Object</th>
								<th>Page Type</th>
								<th>Number of cells in page</th>
								<th>Payload bytes</th>
								<th>Unused bytes</th>
							</tr>
						</thead>
						<tbody>
							{data.map((e, i) => (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>{e.pageno}</td>
									<td>{e.name}</td>
									<td>{e.pagetype}</td>
									<td>{e.number_of_cells}</td>
									<td>{e.payload_bytes}</td>
									<td>{e.unused_bytes}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
				<button onClick={() => setIsOpen(false)}>Close</button>
			</Modal>
		</>
	)
})
