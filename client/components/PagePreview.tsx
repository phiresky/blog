import React, { ReactElement } from "react"
import Link from "next/link"
import { formatDate } from "../utils/date"

function PageLink(props: {
	href: string
	className?: string
	children: React.ReactNode
}) {
	return (
		<Link
			href={props.href}
			className={`b black o-80 glow no-underline lh-solid ${
				props.className || ""
			}`}
		>
			{props.children}
		</Link>
	)
}

function PagePreview(props: {
	href: string
	title: React.ReactNode
	subtitle?: React.ReactNode
	preview: React.ReactNode
	date: string
}): ReactElement {
	return (
		<div className="mb4 pb2 bb b--light-gray">
			<PageLink href={props.href} className="f3">
				{props.title}
			</PageLink>
			{props.subtitle && (
				<p className="mv1 o-60">
					<i>{props.subtitle}</i>
				</p>
			)}
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
