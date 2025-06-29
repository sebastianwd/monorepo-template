import * as TanstackQuery from '@repo/trpc/tanstack-query'
import { createRouter as createTanstackRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'

import { routeTree } from './routeTree.gen'

// Create a new router instance
export const createRouter = () => {
  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      context: {
        ...TanstackQuery.getContext()
      },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,

      Wrap: (props: { children: React.ReactNode }) => {
        return <TanstackQuery.Provider>{props.children}</TanstackQuery.Provider>
      }
    }),
    TanstackQuery.getContext().queryClient
  )

  return router
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
