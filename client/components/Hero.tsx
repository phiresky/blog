import React from "react"
import Link from "next/link"
import { LinkInfo } from "../pages"

function Hero(props: {
	backgroundClass: string
	topLinks: LinkInfo[]
	heroTitle: string
	subtitle: string
}): React.ReactElement {
	return (
		<div className={`relative tc ${props.backgroundClass}`}>
			<div className="mw7 center white">
				<div className="pv4">
					<h1 className="f2 normal lh-title ma0 pa0">
						<Link href={"/"}>
							<a className="white no-underline">
								{props.heroTitle}
							</a>
						</Link>
					</h1>

					<h4 className="normal o-70 ma0 pt2 pb3 ph1">
						{props.subtitle}
					</h4>
					<div>
						{props.topLinks &&
							props.topLinks.length > 0 &&
							props.topLinks.map((link, i) => {
								const isExternal = /^https?:/.exec(link.href)
								const cls = "dib f6 white no-underline pa1 ma1"
								if (isExternal)
									return (
										<a
											href={link.href}
											key={i}
											className={cls}
										>
											{link.text}
										</a>
									)
								else
									return (
										<Link href={link.href} key={i}>
											<a className={cls} key={i}>
												{link.text}
											</a>
										</Link>
									)
							})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
