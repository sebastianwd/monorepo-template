/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import swdEslintPlugin from 'swd-eslint-config'
import tseslint, { type ConfigArray } from 'typescript-eslint'

export default tseslint.config(...swdEslintPlugin.configs.base, ...swdEslintPlugin.configs.react()) as ConfigArray
