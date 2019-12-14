import { fromEntries } from "../utils/content"
import { Elt } from "pandoc-filter"
import Pandoc, { attrProps } from "./Pandoc"
import css from "styled-jsx/css"
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
			<a
				href={url}
				title={title || undefined}
				id={id}
				className={clazz.join(" ") + " tooltip"}
			>
				<style jsx>{style}</style>
				<Pandoc ele={inline} />
				<span className="tooltip-content">
					<b>{m.shorttitle || m.title}</b>
					{m.abstract && <p>{m.abstract}</p>}
					<i className="arr" />
				</span>
			</a>
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

const style = css`
	.tooltip {
		position: relative;

		.tooltip-content {
			min-width: 300px;
			/*max-width:400px;*/
			top: calc(100% + 12px);
			left: 50%;
			transform: translate(-50%, 0);
			padding: 20px;
			color: #666666;
			background-color: #eeeeee;
			font-weight: normal;
			font-size: 13px;
			border-radius: 8px;
			position: absolute;
			z-index: 99999999;
			box-sizing: border-box;
			box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
			display: none;
			i.arr {
				position: absolute;
				bottom: 100%;
				left: 50%;
				margin-left: -12px;
				width: 24px;
				height: 12px;
				overflow: hidden;

				&::after {
					content: "";
					position: absolute;
					width: 12px;
					height: 12px;
					left: 50%;
					transform: translate(-50%, 50%) rotate(45deg);
					background-color: #eeeeee;
					box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
				}
			}
		}
		&:hover .tooltip-content {
			display: block;
		}
	}
`
