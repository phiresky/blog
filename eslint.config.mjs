import typescriptEslint from "@typescript-eslint/eslint-plugin"
import prettier from "eslint-plugin-prettier"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...compat.extends(
		"eslint:recommended",
		"plugin:@next/next/recommended",
		"plugin:@typescript-eslint/strict",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:prettier/recommended",
		"prettier",
	),
	{ ignores: ["dist/", "client/.next/"] },
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			prettier,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: "script",

			parserOptions: {
				tsconfigRootDir: "/home/phire/data/dev/2022/blog",
				project: ["./tsconfig.json", "./client/tsconfig.json"],
			},
		},

		settings: {
			next: {
				rootDir: "client",
			},
		},

		rules: {
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
		},
	},
]
