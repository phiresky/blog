import React, { ReactNode } from "react"
import Page from "../components/Page"

class Error extends React.Component<{ statusCode: null | number }> {
	render(): ReactNode {
		return (
			<Page title="404">
				<div className="center mw7 pa3 pa4-ns">404 Page not found</div>
			</Page>
		)
	}
}

export default Error
