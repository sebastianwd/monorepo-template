import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json']
    }),
    tanstackStart(),
    tailwindcss()
  ]
})

export default config
