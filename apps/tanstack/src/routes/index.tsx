import { observer, use$ } from '@legendapp/state/react'
import type { Theme } from '@repo/trpc/constants'
import { Themes } from '@repo/trpc/constants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select'
import { createFileRoute } from '@tanstack/react-router'

import { useTheme } from '~/providers/theme-provider'

export const Route = createFileRoute('/')({
  component: observer(App)
})

function App() {
  const { theme, setTheme } = useTheme()
  const theme$ = use$(theme)

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='flex min-h-[50vh] flex-col items-center justify-center gap-4 p-8'>
        <h1 className='text-4xl font-bold text-primary'>Welcome to TanStack</h1>
        <p className='text-muted-foreground'>
          Edit <code className='rounded bg-muted px-1 py-0.5 text-muted-foreground'>src/routes/index.tsx</code> and save
          to reload.
        </p>
        <div className='flex gap-4'>
          <a
            className='text-accent-foreground hover:text-accent-foreground/80'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <a
            className='text-accent-foreground hover:text-accent-foreground/80'
            href='https://tanstack.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn TanStack
          </a>
        </div>
        <div className='mt-4'>
          <Select onValueChange={(value) => setTheme(value as Theme)} defaultValue={theme$.theme}>
            <SelectTrigger className='w-[200px]'>
              <SelectValue placeholder='Select a theme' />
            </SelectTrigger>
            <SelectContent>
              {Object.values(Themes).map((theme) => (
                <SelectItem key={theme} value={theme} className='capitalize'>
                  {theme}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>
    </div>
  )
}
