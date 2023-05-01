import { useQuery } from '@tanstack/react-query'

import { fetchEvents } from '../../api/events'

export const useTimeTable = () => {
  const { data } = useQuery(['getEvents'], () => fetchEvents(), {
    cacheTime: 0,
  })

  return {
    dataEvents: data?.data,
  }
}
