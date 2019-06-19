import React from "react"
import { config } from "../config"

function Footer(props: { override?: JSX.Element }) {
	return (
		<footer className="center w5 f6 tc mt4">
			<p>
				{props.override || (
					<a href={config.blogSourceUrl}>
						View blog source on GitHub
					</a>
				)}
			</p>
		</footer>
	)
}

export default Footer
