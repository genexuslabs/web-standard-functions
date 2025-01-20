import globals from "globals";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import eslintTsPlugin from "@typescript-eslint/eslint-plugin";
import eslintTsParser from "@typescript-eslint/parser";
import stylisticTsPlugin from "@stylistic/eslint-plugin-ts";
import { fileURLToPath } from "url";
import { dirname } from "path";

export default [
  {
    files: ["src/**/*.ts"],
    ignores: ["node_modules", "src/**/**/*.spec.ts"],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: eslintTsParser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
        sourceType: "module"
      }
    },

    plugins: {
      import: importPlugin,
      jsdoc: jsdocPlugin,
      eslintTsPlugin: eslintTsPlugin,
      "@stylistic/ts": stylisticTsPlugin
    },
    rules: {
      "eslintTsPlugin/await-thenable": "error",
      "eslintTsPlugin/consistent-type-assertions": "error",
      "eslintTsPlugin/indent": "off",
      "@stylistic/ts/member-delimiter-style": [
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
      "eslintTsPlugin/naming-convention": [
        "off",
        { selector: "variable", format: ["camelCase"] }
      ],
      "eslintTsPlugin/no-empty-function": [
        "error",
        { allow: ["private-constructors"] }
      ],
      "eslintTsPlugin/no-floating-promises": "error",
      "eslintTsPlugin/no-misused-new": "error",
      "eslintTsPlugin/no-unnecessary-qualifier": "error",
      "eslintTsPlugin/no-unnecessary-type-assertion": "error",
      "eslintTsPlugin/no-unused-expressions": [
        "error",
        {
          allowTaggedTemplates: true,
          allowShortCircuit: true
        }
      ],
      "eslintTsPlugin/prefer-namespace-keyword": "error",
      "eslintTsPlugin/quotes": "off",
      "@stylistic/ts/semi": ["error"],
      "eslintTsPlugin/triple-slash-reference": [
        "error",
        {
          path: "always",
          types: "prefer-import",
          lib: "always"
        }
      ],
      "eslintTsPlugin/type-annotation-spacing": "off",
      "eslintTsPlugin/unified-signatures": "error",
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
  }
];
