import React, { PureComponent, ReactNode } from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
// TODO: import languages
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow"
// https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada

class CodeBlock extends PureComponent<{ language?: string; value: string }> {
	render(): ReactNode {
		const { language, value } = this.props
		return (
			<SyntaxHighlighter language={language} style={theme as unknown}>
				{value.trim()}
			</SyntaxHighlighter>
		)
	}
}

export default CodeBlock
