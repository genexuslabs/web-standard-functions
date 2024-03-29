module.exports = {
  env: {
    browser: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-react",
    "@typescript-eslint"
  ],
  root: true,
  ignorePatterns: ["node_modules", "src/**/**/*.spec.ts"],
  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: "semi",
              requireLast: true
            }
          }
        }
      }
    ],
    "@typescript-eslint/naming-convention": [
      "off",
      { selector: "variable", format: ["camelCase"] }
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["private-constructors"] }
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true
      }
    ],
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        path: "always",
        types: "prefer-import",
        lib: "always"
      }
    ],
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-parens": ["off", "always"],
    "brace-style": ["off", "off"],
    "comma-dangle": "off",
    curly: ["error", "multi-line"],
    "eol-last": "off",
    eqeqeq: ["error", "smart"],
    "id-denylist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "error",
    indent: "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "off",
    "linebreak-style": "off",
    "max-len": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-empty-function": "off",
    "no-eval": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-await": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "one-var": ["error", "never"],
    "padded-blocks": [
      "off",
      {
        blocks: "never"
      },
      {
        allowSingleLineBlocks: true
      }
    ],
    "quote-props": "off",
    quotes: "off",
    radix: "error",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-tag-spacing": [
      "off",
      {
        afterOpening: "allow",
        closingSlash: "allow"
      }
    ],
    "react/jsx-wrap-multilines": "off",
    semi: "error",
    "space-before-function-paren": "off",
    "space-in-parens": ["off", "never"],
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"]
      }
    ],
    "use-isnan": "error"
  }
};
