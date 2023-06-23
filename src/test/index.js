module.exports = {
	extends: ["../typescript"],
	rules: {
		"@angular-eslint/component-selector": "off",
		"@angular-eslint/directive-selector": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/unbound-method": "off",
		"jsdoc/check-indentation": "off",
		"jsdoc/newline-after-description": "off",
		"no-useless-constructor": "error",
		"@typescript-eslint/no-useless-constructor": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"prefer-const": "off"
	}
};
