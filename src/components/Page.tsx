import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Hero from "./Hero"
import Footer from "./Footer"
import Tracking from "./Tracking"
import { config } from "../config"

// rrtod body = children
function Page(_props: { title?: string; children: JSX.Element }) {
	const props = { ...config, ..._props }
	return (
		<div>
			<Header
				siteTitle={
					(props.title ? props.title + " - " : "") + props.siteTitle
				}
				description={props.description}
				stylesheets={props.stylesheets}
			/>
			<main className="lh-copy">
				<Hero
					heroTitle={props.siteTitle}
					subtitle={props.description}
					topLinks={props.topLinks}
					backgroundClass={props.backgroundClass}
				/>
				{props.children}
				<Footer copyright={props.copyright} />
				{props.siteId && <Tracking siteId={props.siteId} />}
			</main>
		</div>
	)
}

export default Page
