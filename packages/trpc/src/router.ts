import type { TRPCRouterRecord } from '@trpc/server'

import { createTRPCRouter, publicProcedure } from './init'
import { settingsRouter } from './routers/settings'

const peopleRouter = {
  list: publicProcedure.query(() => [
    {
      name: 'John Doe'
    },
    {
      name: 'Jane Doe'
    }
  ])
} satisfies TRPCRouterRecord

export const trpcRouter = createTRPCRouter({
  people: peopleRouter,
  settings: settingsRouter
})

export type TRPCRouter = typeof trpcRouter
