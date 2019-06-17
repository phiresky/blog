import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"

function Header(props: {
	title?: string
	siteTitle: string
	publicUrlBase: string
	blogRoot: string
	description?: string | undefined
	siteDescription: string
	stylesheets: string[] | undefined
}) {
	const description = props.description || props.siteDescription
	const title = (props.title ? props.title + " - " : "") + props.siteTitle
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link
				rel="alternate"
				type="application/rss+xml"
				title={`RSS feed of ${props.siteTitle}`}
				href={props.publicUrlBase + props.blogRoot + "rss.xml"}
			/>
			<link
				rel="alternate"
				type="application/atom+xml"
				title={`Atom feed of ${props.siteTitle}`}
				href={props.publicUrlBase + props.blogRoot + "atom.xml"}
			/>
			<link
				rel="alternate"
				type="application/json"
				title={`JSON feed of ${props.siteTitle}`}
				href={props.publicUrlBase + props.blogRoot + "feed.json"}
			/>
			{props.stylesheets &&
				props.stylesheets.length > 0 &&
				props.stylesheets.map((stylesheet, i) => {
					return <link key={i} rel="stylesheet" href={stylesheet} />
				})}
			<style>{`
          body {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          }
      `}</style>
		</Head>
	)
}

export default Header
