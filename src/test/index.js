module.exports = {
	env: {
		browser: true,
		es6: true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		sourceType: "module"
	},
	plugins: ["eslint-plugin-import", "eslint-plugin-no-null", "eslint-plugin-unicorn", "eslint-plugin-jsdoc", "@typescript-eslint"],
	root: true,
	extends: ["plugin:@angular-eslint/recommended", "plugin:@angular-eslint/template/process-inline-templates"],
	rules: {
		"@angular-eslint/component-selector": "off",
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "off",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-comment": "error",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/dot-notation": "off",
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: false,
				allowTypedFunctionExpressions: false,
				allowHigherOrderFunctions: false,
				allowDirectConstAssertionInArrowFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true
			}
		],
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit",
				overrides: {
					accessors: "explicit",
					constructors: "explicit",
					parameterProperties: "explicit"
				}
			}
		],
		"@typescript-eslint/explicit-module-boundary-types": [
			"error",
			{
				allowArgumentsExplicitlyTypedAsAny: true,
				allowDirectConstAssertionInArrowFunctions: true,
				allowHigherOrderFunctions: false,
				allowTypedFunctionExpressions: false
			}
		],
		"@typescript-eslint/indent": [
			"off",
			4,
			{
				CallExpression: {
					arguments: "first"
				},
				ArrayExpression: "first",
				ObjectExpression: "first",
				FunctionDeclaration: {
					parameters: "first"
				},
				FunctionExpression: {
					parameters: "first"
				}
			}
		],
		"@typescript-eslint/member-ordering": "off",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				format: ["camelCase", "UPPER_CASE"],
				leadingUnderscore: "allow",
				trailingUnderscore: "allow"
			}
		],
		"@typescript-eslint/no-dynamic-delete": "off",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-extraneous-class": "off",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-inferrable-types": [
			"error",
			{
				ignoreParameters: true
			}
		],
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-require-imports": "off",
		"@typescript-eslint/no-shadow": [
			"error",
			{
				hoist: "all"
			}
		],
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/triple-slash-reference": [
			"error",
			{
				path: "always",
				types: "prefer-import",
				lib: "always"
			}
		],
		"@typescript-eslint/type-annotation-spacing": "off",
		"@typescript-eslint/typedef": [
			"error",
			{
				parameter: true,
				propertyDeclaration: true
			}
		],
		"@typescript-eslint/unbound-method": "error",
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": "error",
		"class-methods-use-this": "off",
		complexity: [
			"error",
			{
				max: 20
			}
		],
		"constructor-super": "error",
		curly: "error",
		"default-case": "error",
		"dot-notation": "off",
		eqeqeq: ["error", "always"],
		"guard-for-in": "error",
		"id-denylist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined", "undefined"],
		"id-match": "error",
		"import/no-default-export": "error",
		"import/no-deprecated": "error",
		"import/no-extraneous-dependencies": "off",
		"import/no-internal-modules": [
			"off",
			{
				allow: ["rxjs/*", "lodash/*", "core-js/*", "valdr/*", "angular-material/*"]
			}
		],
		"import/no-unassigned-import": "error",
		"import/order": "off",
		indent: "off",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-indentation": "error",
		"jsdoc/newline-after-description": "error",
		"jsdoc/no-types": "error",
		"max-classes-per-file": "off",
		"newline-per-chained-call": "off",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": [
			"off",
			{
				allow: [
					"log",
					"warn",
					"dir",
					"timeLog",
					"assert",
					"clear",
					"count",
					"countReset",
					"group",
					"groupEnd",
					"table",
					"dirxml",
					"error",
					"groupCollapsed",
					"Console",
					"profile",
					"profileEnd",
					"timeStamp",
					"context"
				]
			}
		],
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty": [
			"error",
			{
				allowEmptyCatch: true
			}
		],
		"no-empty-function": "off",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-fallthrough": "error",
		"no-invalid-this": "error",
		"no-magic-numbers": "off",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-null/no-null": "error",
		"no-param-reassign": "off",
		"no-redeclare": "error",
		"no-restricted-imports": ["error", "@angular/material", "lodash", "rxjs/internal", "rxjs/index", "rxjs/Rx", "lodash-es"],
		"no-return-await": "error",
		"no-sequences": "off",
		"no-shadow": "off",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "off",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "off",
		"no-unused-labels": "error",
		"no-useless-constructor": "error",
		"no-var": "error",
		"no-void": "error",
		"object-shorthand": "off",
		"one-var": ["error", "never"],
		"padding-line-between-statements": [
			"off",
			{
				blankLine: "always",
				prev: "*",
				next: "return"
			}
		],
		"prefer-const": [
			"error",
			{
				destructuring: "all"
			}
		],
		"prefer-object-spread": "error",
		"prefer-template": "off",
		radix: "error",
		"require-await": "off",
		"spaced-comment": [
			"error",
			"always",
			{
				markers: ["/"]
			}
		],
		"unicorn/filename-case": "error",
		"unicorn/prefer-switch": [
			"error",
			{
				minimumCases: 3
			}
		],
		"unicorn/prefer-ternary": "off",
		"use-isnan": "error",
		yoda: "off"
	}
};
