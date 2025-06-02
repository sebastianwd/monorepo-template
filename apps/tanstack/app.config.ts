import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from '@tanstack/react-start/config'
import type { App as VinxiApp } from 'vinxi'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config: Promise<VinxiApp> = defineConfig({
  tsr: {
    appDirectory: 'src'
  },
  vite: {
    plugins: [
      viteTsConfigPaths({
        projects: ['./tsconfig.json']
      }),
      tailwindcss()
    ]
  }
})

export default config
