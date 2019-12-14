import { fromEntries } from "../utils/content"
import { Elt } from "pandoc-filter"
import Pandoc, { attrProps } from "./Pandoc"
import css from "styled-jsx/css"
import Tooltip from "rc-tooltip"
import "rc-tooltip/assets/bootstrap_white.css"
/**
 * if link is a citation link, then add a tooltip describing the link target
 */
export function TooltipLink({
	c: [[id, clazz, kv], inline, [url, title]],
}: Elt<"Link">) {
	const attrs = fromEntries(kv)
	if (attrs["cite-meta"]) {
		const m = JSON.parse(attrs["cite-meta"])
		return (
			<Tooltip
				placement="bottom"
				overlay={
					<span className="tooltip-content">
						<b>{m.shorttitle || m.title}</b>
						{m.abstract && <p>{m.abstract}</p>}
						<i className="arr" />
					</span>
				}
			>
				<a
					href={url}
					title={title || undefined}
					id={id}
					className={clazz.join(" ")}
				>
					<Pandoc ele={inline} />
				</a>
			</Tooltip>
		)
	}
	return (
		<a
			href={url}
			title={title || undefined}
			{...attrProps([id, clazz, kv])}
		>
			<Pandoc ele={inline} />
		</a>
	)
}
