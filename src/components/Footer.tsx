import React from "react"
import PropTypes from "prop-types"

function Footer(props: { copyright: string }) {
	const now = new Date()

	return (
		<footer className="center w5 f6 tc mt4">
			<p>
				<a href="https://github.com/phiresky/blog">
					View blog source on GitHub
				</a>
			</p>
		</footer>
	)
}

Footer.propTypes = {
	copyright: PropTypes.string.isRequired,
}

export default Footer
