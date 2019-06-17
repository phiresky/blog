import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Hero from "./Hero"
import Footer from "./Footer"
import Tracking from "./Tracking"
import { config } from "../config"

function Page(_props: {
	title?: string
	description?: string
	children: JSX.Element
}) {
	const props = { ...config, ..._props }
	return (
		<div>
			<Header {...props} />
			<main className="lh-copy">
				<Hero
					heroTitle={props.siteTitle}
					subtitle={props.siteDescription}
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
