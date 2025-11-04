/*
 * Copyright (c) 2025 Axel "Foley" Karlsson and contributors.
 *
 * Use of this source code is governed by the MIT License, which you may
 * view in its entirety in the LICENSE file, found in the project's root directory.
 */

import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { globalIgnores } from "eslint/config"

export default tseslint.config([
    globalIgnores([ "dist" ]),
    {
        files: [ "**/*.{ts,tsx}" ],

        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite
        ],

        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                projectService: true
            }
        },

        rules: {
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/consistent-type-exports": "error",
            "@typescript-eslint/no-namespace": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
            "@typescript-eslint/no-unsafe-call": "error",
            "@typescript-eslint/prefer-find": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/prefer-includes": "error",
            "@typescript-eslint/prefer-optional-chain": "error",
            "@typescript-eslint/prefer-readonly": "error",
            "class-methods-use-this": "off",
            "@typescript-eslint/class-methods-use-this": "error",
            "no-array-constructor": "off",
            "@typescript-eslint/no-array-constructor": "error",
            "@typescript-eslint/no-deprecated": "error",
            "@typescript-eslint/consistent-type-definitions": [
                "error",
                "interface"
            ],
            "@typescript-eslint/consistent-type-assertions": [
                "error",
                {
                    assertionStyle: "as"
                }
            ],
            "@typescript-eslint/consistent-indexed-object-style": [
                "error",
                "record"
            ],
            "@typescript-eslint/class-literal-property-style": [
                "error",
                "fields"
            ],
            "@typescript-eslint/array-type": [
                "error",
                {
                    default: "generic"
                }
            ],
            "@typescript-eslint/no-confusing-void-expression": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": "error",
            "prefer-template": "error",
            "prefer-const": "error",
            "no-nested-ternary": "error",
            "no-new": "error",
            "no-alert": "error",
            "func-style": [
                "error",
                "declaration",
                {
                    allowArrowFunctions: true
                }
            ],
            "eqeqeq": "error",
            "curly": "error"
        }
    }
])
