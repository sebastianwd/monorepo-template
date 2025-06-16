import { zObjectValues } from '@repo/utils/zod'
import type { TRPCRouterRecord } from '@trpc/server'
import z from 'zod'

import { type Theme, Themes } from '../constants'
import { publicProcedure } from '../init'

const fakeDb = {
  settings: {
    theme: Themes.LIGHT
  }
} as {
  settings: {
    theme: Theme
  }
}

export const settingsRouter = {
  get: publicProcedure.query(() => {
    return { ...fakeDb.settings }
  }),
  save: publicProcedure
    .input(
      z.object({
        theme: zObjectValues(Themes)
      })
    )
    .mutation(({ input }) => {
      fakeDb.settings = { ...fakeDb.settings, ...input }
      return { ...fakeDb.settings }
    })
} satisfies TRPCRouterRecord
