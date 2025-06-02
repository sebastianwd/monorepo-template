import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { TRPCOptionsProxy } from '@trpc/tanstack-react-query'

import { LayoutAddition } from '~/integrations/tanstack-query/layout'
import type { TRPCRouter } from '~/integrations/trpc/router'
import appCss from '~/main.css?url'

export interface MyRouterContext {
  queryClient: QueryClient
  trpc: TRPCOptionsProxy<TRPCRouter>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        title: 'TanStack Start Starter'
      }
    ],
    links: [{ rel: 'stylesheet', href: appCss, blocking: 'render' }]
  }),

  component: () => (
    <RootDocument>
      <Outlet />
      <TanStackRouterDevtools />
      <LayoutAddition />
    </RootDocument>
  )
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <noscript>
          <link rel='stylesheet' href={appCss} />
        </noscript>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
