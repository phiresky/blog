import React from "react"
import PropTypes from "prop-types"
import { Link } from "../routes"
import { LinkInfo } from "../pages"
import { config } from "../config"

function Hero(props: {
	backgroundClass: string
	topLinks: LinkInfo[]
	heroTitle: string
	subtitle: string
}) {
	return (
		<div className={`relative tc ${props.backgroundClass}`}>
			<div className="mw7 center white">
				<div className="pv4">
					{/*<h1 className="f2 normal lh-title ma0 pa0">
						<Link route={config.blogRoot}>
							<a
								className="white no-underline"
								href={config.blogRoot}
							>
								{props.heroTitle}
							</a>
						</Link>
	</h1>*/}
					<h4 className="normal o-70 ma0 pt2 pb3 ph1">
						{props.subtitle}
					</h4>
					<div>
						{props.topLinks &&
							props.topLinks.length > 0 &&
							props.topLinks.map((link, i) => {
								const isExternal = link.href.match(/^https?:/)
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
										<Link route={link.href} key={i}>
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

Hero.propTypes = {
	backgroundClass: PropTypes.string,
	topLinks: PropTypes.array,
	heroTitle: PropTypes.string,
	subtitle: PropTypes.string,
}

Hero.defaultProps = {
	backgroundClass: "bg-mid-gray",
	topLinks: [],
	heroTitle: "",
	subtitle: "",
}

export default Hero
