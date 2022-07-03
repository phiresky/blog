import "@fortawesome/fontawesome-svg-core/styles.css"
import {
	faInfoCircle,
	faKeyboard,
	faPlay,
	faSave,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { observer } from "mobx-react"
import * as React from "react"
import Modal from "react-modal"
import {
	createDbWorker,
	PageReadLog,
	SqliteStats,
	WorkerHttpvfs,
} from "sql.js-httpvfs"
//import workerUrl from "sql.js-httpvfs/dist/sqlite.worker.js?resource"
//import wasmUrl from "sql.js-httpvfs/dist/sql-wasm.js?resource"
import { CodeProps } from "../components/Code"
import CodeBlock from "../components/CodeBlock"
import { FtsDemo } from "./FtsDemo"
Modal.setAppElement(".lh-copy")

export class Store {
	private worker: WorkerHttpvfs | null = null
	error = ""
	ready: Promise<WorkerHttpvfs>
	constructor() {
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
	async init(): Promise<WorkerHttpvfs> {
		const workerUrl = new URL(
			"sql.js-httpvfs/dist/sqlite.worker.js",
			import.meta.url,
		)
		console.log("worker url", workerUrl)
		const wasmUrl = new URL(
			"sql.js-httpvfs/dist/sql-wasm.wasm",
			import.meta.url,
		)

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

		await store.worker?.db.query(`select * from sqlite_master`) // cache the main pages
		await store.worker?.worker.evalCode(`
			function getFlag(country_code) {
				// just some unicode magic
				return String.fromCodePoint(...Array.from(country_code||"")
					.map(c => 127397 + c.codePointAt()));
			}
			
			await db.create_function("get_flag", getFlag)`)
		return this.worker
	}
}
type Config = {
	autorun?: true
	diffstat?: true
	logPageReads?: true
	defaultPageReadTable?: true
	ftsDemo?: true
	js?: true
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
	if (config.ftsDemo) return <FtsDemo store={store} />
	React.useEffect(() => {
		if (config.autorun) void run()
	}, [])
	const [code, setCode] = React.useState(props.value)
	const [output, setOutput] = React.useState("" as string | JSX.Element)
	const [diffstat, setDiffstat] = React.useState<SqliteStats | null>(null)
	const [readPages, setReadPages] = React.useState<PageReadLog[] | null>(null)
	const [editMode, setEditMode] = React.useState(false)
	const [inputHeight, setInputHeight] = React.useState(100)
	async function run() {
		setOutput("[running...]")
		const isJS = config.js || false
		console.log("running", code)
		try {
			const { db, worker } = await store.ready
			let statBefore
			if (config.diffstat) statBefore = await worker.getStats()
			if (config.logPageReads) await worker.getResetAccessedPages()
			const result = await (isJS
				? (worker.evalCode(code) as unknown)
				: db.query(code))
			let out = JSON.stringify(result, null, 2)
			if (!out)
				out =
					"[no output, make sure your last statement has `return` before it]"
			if (out.length > 50000)
				out =
					out.slice(0, 50000) +
					`\n[... (output truncated, total length ${out.length})]`
			setOutput(out)
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
			if (String(e).includes("SharedArrayBuffer")) {
				setOutput(
					<>
						[error: {String(e)}]<br />
						Your browser might either be too old to support
						SharedArrayBuffer, or too new and have some Spectre
						protections enabled that don't work on GitHub Pages
						since they don't allow setting the necessary isolation
						headers. Try going to{" "}
						<a href="https://phiresky.netlify.app/blog/2021/hosting-sqlite-databases-on-github-pages/">
							the Netlify mirror of this blog
						</a>{" "}
						for the DOM demos.
					</>,
				)
			} else {
				setOutput(`[error: ${String(e)}]`)
			}
		}
	}
	function edit() {
		if (!editMode) {
			setReadPages(null)
			setDiffstat(null)
			setOutput("")
		}
		setEditMode(!editMode)
	}

	let outputDiv

	if (output) {
		if (typeof output === "string") {
			outputDiv = (
				<CodeBlock
					className="inner-body maxheight"
					language="json"
					wrap
					value={output}
				/>
			)
		} else {
			outputDiv = <div className="like-codeblock">{output}</div>
		}
	} else {
		outputDiv = <div style={{ paddingBottom: "1ex" }} />
	}

	return (
		<div className="sqlite-httpvfs-demo">
			<div className="box-title">{config.js ? "JS " : ""}Demo</div>
			<div className="with-inner-title">
				<div className="inner-title">
					<div>Input {config.js ? "JavaScript" : "SQL"}</div>
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
					<div
						className="inner-body"
						ref={(e) => e && setInputHeight(e?.clientHeight)}
					>
						<CodeBlock
							className="inner-body"
							language={config.js ? "typescript" : "sql"}
							wrap
							value={code}
						/>
					</div>
				) : (
					<textarea
						spellCheck={false}
						className="like-codeblock inner-body"
						style={{ height: inputHeight }}
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
							<div
								role="button"
								onClick={run}
								className="floatright"
							>
								<Icon icon={faPlay} size="sm" /> Rerun
							</div>
						</>
					) : (
						<div role="button" onClick={run}>
							<Icon icon={faPlay} size="sm" /> Run
						</div>
					)}
				</div>
				{outputDiv}
			</div>
			{config.diffstat && diffstat && (
				<SqliteStatsView
					stats={diffstat}
					readPages={readPages}
					defaultFlipped={config.defaultPageReadTable}
				/>
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

type PageReadReq = PageReadLog & {
	page?: PageInfo
}
const SqliteStatsView: React.FC<{
	stats: SqliteStats
	readPages: PageReadLog[] | null
	defaultFlipped?: boolean
}> = observer(({ stats, readPages, defaultFlipped }) => {
	const store = getStore()
	const [modalIsOpen, setIsOpen] = React.useState(false)
	const [interacted, setInteracted] = React.useState(false)
	const [data, setData] = React.useState(
		"Loading..." as string | PageReadLog[],
	)
	React.useEffect(() => {
		if (defaultFlipped && !modalIsOpen && readPages && !interacted) {
			console.log("showing effect")
			void show()
		}
	}, [defaultFlipped, modalIsOpen, readPages, interacted])
	async function show() {
		// asetAni(true)
		// setTimeout(() => setAni(false), 500)
		if (modalIsOpen) {
			setIsOpen(false)
			return
		}
		setIsOpen(true)
		setInteracted(true)
		const { db } = await store.ready
		if (!readPages) return
		try {
			if (!store.statsConnected) {
				await db.query(`attach 'dbstat.sqlite3' as stat`)
				store.statsConnected = true
			}
			const pageinfos = (await db.query(`
				select *, n.name, t.name as pagetype from stat.stat s
				join stat.names n on n.id = s.name
				join stat.pagetypes t on t.id = s.pagetype 
				where pageno in (${readPages.map((i) => i.pageno).join(",")})
			`)) as PageInfo[]
			const pageInfoMap = new Map(pageinfos.map((a) => [a.pageno, a]))

			setData(
				readPages.map((readReq) => {
					const pageInfo = pageInfoMap.get(readReq.pageno)
					return { ...readReq, page: pageInfo }
				}),
			)
		} catch (e) {
			console.error(e)
			setData(String(e))
		}
	}

	return (
		<div className={`flip-box ${modalIsOpen ? "flipped" : "unflipped"}`}>
			<div className="flip-box-inner">
				<div className="flip-box-front">
					<div className="with-inner-title hanging">
						<div className="inner-title">
							<div>Sqlite stats</div>
							{readPages && (
								<div
									role="button"
									className="floatright"
									onClick={show}
								>
									<Icon icon={faInfoCircle} /> Show page read
									log ({readPages.length} reads)
								</div>
							)}
						</div>
						<div className="inner-body like-codeblock">
							fetched {formatBytes(stats.totalFetchedBytes)} in{" "}
							{stats.totalRequests} requests (DB size:{" "}
							{formatBytes(stats.totalBytes)})
						</div>
					</div>
				</div>
				<div className="flip-box-back">
					<div className="with-inner-title hanging">
						<div className="inner-title">
							<div>Sqlite Page Read Requests</div>
							{readPages && (
								<div
									role="button"
									className="floatright"
									onClick={show}
								>
									<Icon icon={faInfoCircle} /> Back to stats
								</div>
							)}
						</div>
						<div className="inner-body page-list maxheight">
							{data && <PageReadsView pages={data} />}
						</div>
					</div>
				</div>
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
const PageReadsView: React.FC<{ pages: string | PageReadReq[] }> = observer(
	({ pages }) => {
		if (pages.length === 0) return <>[no data pages requested]</>
		if (typeof pages === "string") return <>{pages}</>

		return (
			<table>
				<thead>
					<tr>
						<th>Page</th>
						<th>Cache</th>
						<th>Access pattern</th>
						<th>Table / Index</th>
						<th>Page Type</th>
						{/*<th>Number of cells in page</th>
						<th>Payload</th>
						<th>Unused</th>*/}
					</tr>
				</thead>
				<tbody>
					{pages.map((e, i) => (
						<tr key={i}>
							<td>{e.pageno}</td>
							<td>{e.wasCached ? "hit" : "miss"}</td>
							<td>
								{e.wasCached
									? ""
									: (e.prefetch
											? `sequential, prefetch ${e.prefetch} pages`
											: `random`) +
									  ` (${e.prefetch + 1} KiB XHR)`}
							</td>
							<td>{e.page?.name ?? "[system]"}</td>
							<td>{e.page?.pagetype}</td>
							{/*<td>{e.page?.number_of_cells}</td>
							<td
								title={`${
									e.page?.payload_bytes || "?"
								} Bytes Payload`}
							>
								{e.page
									? (
											100 *
											(e.page.payload_bytes / 1024)
									  ).toFixed(0) + "%"
									: ""}
							</td>
							<td>
								{e.page
									? (
											(100 * e.page.unused_bytes) /
											1024
									  ).toFixed(0) + "%"
									: ""}
									</td>*/}
						</tr>
					))}
				</tbody>
			</table>
		)
	},
)
