import { useMutation } from '@tanstack/react-query'

import { postEvents } from '../../../api/events'
import { queryClient } from '../../../api/queryClient'

export const usePostEvent = () => {
  const { mutate, status, error } = useMutation(postEvents, {
    mutationKey: ['createEvent'],
    onSuccess: () => {
      queryClient.invalidateQueries(['getEvents'])
    },
  })
  return { mutate, status, error }
}
