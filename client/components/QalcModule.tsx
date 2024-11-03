import { CodeProps } from "./Code"
import * as qalc from "qalc-react/dist/src/ui/components/GUI"

export default function Qalc(props: CodeProps) {
	return (
		<qalc.GUI
			presetLines={props.value.split("\n")}
			external
			header={false}
			hideInputUntilClick
		/>
	)
}
