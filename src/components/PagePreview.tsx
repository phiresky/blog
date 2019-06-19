import React from "react"
import { Link } from "../routes"
import { formatDate } from "../utils/date"

function PageLink(props: {
	href: string
	className?: string
	children: React.ReactNode
}) {
	return (
		<Link route={props.href}>
			<a
				className={`b black o-80 glow no-underline lh-solid ${props.className ||
					""}`}
			>
				{props.children}
			</a>
		</Link>
	)
}

function PagePreview(props: {
	href: string
	title: React.ReactNode
	preview: React.ReactNode
	date: string
}) {
	return (
		<div className="mb4 pb2 bb b--light-gray">
			<PageLink href={props.href} className="f3">
				{props.title}
			</PageLink>
			{props.preview && (
				<p className="mv1 o-60">
					{props.preview}
					<PageLink href={props.href}>
						<span> »</span>
					</PageLink>
				</p>
			)}
			{props.date && (
				<small className="db ttu o-40">
					<time key={new Date(props.date).toISOString()}>
						{formatDate(props.date)}
					</time>
				</small>
			)}
		</div>
	)
}

export default PagePreview
