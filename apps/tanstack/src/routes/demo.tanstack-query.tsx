import { useTRPC } from '@repo/trpc/react'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demo/tanstack-query')({
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery(context.trpc.people.list.queryOptions())
  },

  component: TanStackQueryDemo
})

function TanStackQueryDemo() {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.people.list.queryOptions())

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl'>People list</h1>
      <ul>{data?.map((person) => <li key={person.name}>{person.name}</li>)}</ul>
    </div>
  )
}
