/**
 * return a val-loader packable thing and trick typescript
 */
export function returnJson<C, T>(getter: (config: C) => Promise<T>): T {
	const g = async (config: C) => {
		try {
			return {
				code: `module.exports = (${JSON.stringify(
					await getter(config),
				)});`,
				contextDependencies: [__dirname],
			}
		} catch (e) {
			console.error(e)
			throw e
		}
	}
	return g as any
}
