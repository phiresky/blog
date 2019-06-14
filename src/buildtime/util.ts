/**
 * return a val-loader packable thing and trick typescript
 */
export function returnJson<C, T>(getter: (config: C) => Promise<T>): T {
	if ((global as any).__is_next_config) {
		return getter as any
	}
	const g = async (config: C) => {
		try {
			const contextDependencies = [
				__dirname,
				require("path").join(__dirname, "..", "..", "posts", "2019"),
			]
			// console.log(contextDependencies)
			return {
				code: `module.exports = (${JSON.stringify(
					await getter(config),
				)});`,
				contextDependencies,
			}
		} catch (e) {
			console.error(e)
			throw e
		}
	}
	return g as any
}
