import { useQuery } from '@tanstack/react-query'

import { fetchEvents } from '../../api/events'
import useUserStore from '../../stores/user.store'

export const useTimeTable = (userId?: string) => {
  const currentUser = useUserStore((store) => store.user)

  const { data } = useQuery(
    ['getEvents', userId],
    () => fetchEvents(userId || currentUser.id),
    {
      cacheTime: 0,
    },
  )

  return {
    dataEvents: data?.data,
  }
}
