import type { Observable } from '@legendapp/state'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'
import { useObservableSyncedQuery } from '@legendapp/state/sync-plugins/tanstack-react-query'
import type { Theme } from '@repo/trpc/constants'
import { useTRPC } from '@repo/trpc/react'
import { createContext, type ReactNode, useContext } from 'react'

interface ThemeProviderState {
  theme: Observable<{ theme: Theme }>
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children, theme: initialTheme }: { children: ReactNode; theme: Theme }) {
  const trpc = useTRPC()

  const settings$ = useObservableSyncedQuery({
    query: {
      ...trpc.settings.get.queryOptions(),
      refetchOnMount: false,
      initialData: {
        theme: initialTheme
      }
    },
    persist: {
      name: 'settings',
      plugin: ObservablePersistLocalStorage,
      retrySync: true
    },
    mutation: trpc.settings.save.mutationOptions()
  })

  const value = {
    theme: settings$,
    setTheme: (newTheme: Theme) => {
      settings$.assign({
        theme: newTheme
      })
    }
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
