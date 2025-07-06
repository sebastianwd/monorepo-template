import base from '@repo/eslint-config/react'
import tseslint, { type ConfigArray } from 'typescript-eslint'

const config: ConfigArray = tseslint.config(...base, {
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off'
  }
})

export default config
