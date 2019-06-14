import React from "react"
import Page from "../components/Page"

class Error extends React.Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null
		return { statusCode }
	}

	render() {
		return (
			<Page title="404">
				<div className="center mw7 pa3 pa4-ns">
					{this.props.statusCode
						? `An error ${this.props.statusCode} occurred on server`
						: "An error occurred on client"}
				</div>
			</Page>
		)
	}
}

export default Error
