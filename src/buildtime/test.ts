module.exports = function() {
	const x = require("fs").readdirSync("..")
	return { code: `module.exports = (${JSON.stringify(x)})` }
}
