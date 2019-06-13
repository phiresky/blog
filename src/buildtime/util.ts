export function returnJson<T>(getter: () => Promise<T>): T {
	const g = async () => ({
		code: `module.exports = (${JSON.stringify(await getter())});`,
	})
	return ((() =>
		g().catch(p => {
			console.error(p)
			throw p
		})) as any) as T
}
