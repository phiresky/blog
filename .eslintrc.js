module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json", "./client/tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "prettier"],
	settings: {
		next: {
			rootDir: "client",
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:@next/next/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:prettier/recommended",
		"prettier",
	],
	rules: {},
}
