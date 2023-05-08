import { useMutation } from '@tanstack/react-query'
import type { EventCreateDto } from '@tutoreng/shared/src'

import { postEvents, updateEvent } from '../../../api/events'
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

export const useUpdateEvent = (id?: string) => {
  const { mutate, status, error } = useMutation(
    (data: Partial<EventCreateDto>) => updateEvent(data, id),
    {
      mutationKey: ['updateEvent'],
      onSuccess: () => {
        queryClient.invalidateQueries(['getEvents'])
      },
    },
  )
  return { mutate, status, error }
}
