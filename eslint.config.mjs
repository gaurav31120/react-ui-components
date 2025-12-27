// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// @ts-check

import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        ignores: [
            'dist',
            'node_modules',
            'eslint.config.mjs',
            'tsconfig.json',
            'jest.config.mjs',
        ],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            'dot-notation': 'error',
        },
    },
)
