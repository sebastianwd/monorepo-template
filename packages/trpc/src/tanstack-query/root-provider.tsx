import { QueryClient } from '@tanstack/react-query'
import { createTRPCClient, httpBatchStreamLink } from '@trpc/client'
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'
import type { ReactNode } from 'react'
import superjson from 'superjson'

import { TRPCProvider } from '../react'
import type { TRPCRouter } from '../router'

function getUrl() {
  const base = (() => {
    if (typeof window !== 'undefined') return ''
    return `http://localhost:${process.env.PORT ?? 3000}`
  })()
  return `${base}/api/trpc`
}

export const trpcClient = createTRPCClient<TRPCRouter>({
  links: [
    httpBatchStreamLink({
      transformer: superjson,
      url: getUrl()
    })
  ]
})

const queryClient = new QueryClient({
  defaultOptions: {
    dehydrate: { serializeData: superjson.serialize },
    hydrate: { deserializeData: superjson.deserialize }
  }
})

const serverHelpers = createTRPCOptionsProxy({
  client: trpcClient,
  queryClient: queryClient
})

export function getContext() {
  return {
    queryClient,
    trpc: serverHelpers
  }
}

export function Provider({ children }: { children: ReactNode }) {
  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      {children}
    </TRPCProvider>
  )
}
