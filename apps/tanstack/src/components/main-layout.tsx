import { observer, use$ } from '@legendapp/state/react'
import { Themes } from '@repo/trpc/constants'
import { useMemo } from 'react'
import { useDarkMode } from 'usehooks-ts'

import { useTheme } from '~/providers/theme-provider'

export const MainLayout = observer(({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  const { isDarkMode } = useDarkMode()

  const theme$ = use$(theme)

  const resolvedTheme = useMemo(() => {
    if (theme$.theme === Themes.SYSTEM) {
      return isDarkMode ? Themes.DARK : Themes.LIGHT
    }

    return theme$.theme
  }, [theme$.theme, isDarkMode])

  return <div data-theme={resolvedTheme}>{children}</div>
})
