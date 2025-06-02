import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { FC } from 'react'

export const LayoutAddition: FC = () => {
  return <ReactQueryDevtools buttonPosition='bottom-right' />
}
