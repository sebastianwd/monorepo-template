import { observer, use$ } from '@legendapp/state/react'
import { Themes } from '@repo/trpc/constants'
import { useMemo } from 'react'
import { useDarkMode } from 'usehooks-ts'

import { useTheme } from '~/providers/theme-provider'

export const MainLayout = observer(({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  const theme$ = use$(theme)

  return <div data-theme={theme$.theme}>{children}</div>
})
