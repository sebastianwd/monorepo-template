import { useTRPC } from '@repo/trpc/react'
import type { TRPCRouter } from '@repo/trpc/router'
import { type QueryClient, useQuery } from '@tanstack/react-query'
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { TRPCOptionsProxy } from '@trpc/tanstack-react-query'

import { MainLayout } from '~/components/main-layout'
import { LayoutAddition } from '~/integrations/tanstack-query/layout'
import appCss from '~/main.css?url'
import { ThemeProvider } from '~/providers/theme-provider'

export interface MyRouterContext {
  queryClient: QueryClient
  trpc: TRPCOptionsProxy<TRPCRouter>
}

const App = () => {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.settings.get.queryOptions())

  return (
    <RootDocument>
      <ThemeProvider theme={data!.theme}>
        <MainLayout>
          <Outlet />
          <TanStackRouterDevtools />
          <LayoutAddition />
        </MainLayout>
      </ThemeProvider>
    </RootDocument>
  )
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
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery(context.trpc.settings.get.queryOptions())
  },
  component: App
})

const RootDocument = ({ children }: { children: React.ReactNode }) => {
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
