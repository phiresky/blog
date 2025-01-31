import React, { PureComponent, ReactNode } from "react"
import { PrismLight } from "react-syntax-highlighter"
// TODO: import languages
//  rg --no-filename '^```.*' | sort -u

import theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow"

import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/typescript"
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash"
import sql from "react-syntax-highlighter/dist/cjs/languages/prism/sql"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript"
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json"
import glsl from "react-syntax-highlighter/dist/cjs/languages/prism/glsl"

const SyntaxHighlighter = PrismLight as React.ComponentClass<any> & {
	registerLanguage(x: string, mod: any): void
}
SyntaxHighlighter.registerLanguage("markdown", markdown)
SyntaxHighlighter.registerLanguage("bash", bash)
SyntaxHighlighter.registerLanguage("sql", sql)
SyntaxHighlighter.registerLanguage("python", python)
SyntaxHighlighter.registerLanguage("typescript", typescript)
SyntaxHighlighter.registerLanguage("json", json)
SyntaxHighlighter.registerLanguage("glsl", glsl)
// https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada

class CodeBlock extends PureComponent<{
	language?: string
	value: string
	className?: string
	wrap?: boolean
	inline?: boolean
}> {
	render(): ReactNode {
		const {
			language,
			value,
			className,
			wrap = false,
			inline = false,
		} = this.props
		return (
			<SyntaxHighlighter
				className={className}
				language={language}
				style={theme as unknown}
				wrapLongLines={wrap}
				PreTag={inline ? "span" : undefined}
				customStyle={inline ? { padding: "0.1em" } : {}}
			>
				{value.trim()}
			</SyntaxHighlighter>
		)
	}
}

export default CodeBlock
