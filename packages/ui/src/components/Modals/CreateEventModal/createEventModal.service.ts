import { useMutation } from '@tanstack/react-query'
import type { EventCreateDto } from '@tutoreng/shared/src'

import { postEvents, updateEvent } from '../../../api/events'
import { queryClient } from '../../../api/queryClient'
import useNotificationStore from '../../../stores/notifications.store'

export const usePostEvent = () => {
  const enqueueNotification = useNotificationStore(
    (state) => state.enqueueNotification,
  )
  const { mutate, status, error } = useMutation(postEvents, {
    mutationKey: ['createEvent'],
    onSuccess: () => {
      queryClient.invalidateQueries(['getEvents'])
      enqueueNotification('Заняття створено', 'success')
    },
    onError: (error: Error) => {
      enqueueNotification(error.message, 'error')
    },
  })
  return { mutate, status, error }
}

export const useUpdateEvent = (id?: string) => {
  const enqueueNotification = useNotificationStore(
    (state) => state.enqueueNotification,
  )

  const { mutate, status, error } = useMutation(
    (data: Partial<EventCreateDto>) => updateEvent(data, id),
    {
      mutationKey: ['updateEvent'],
      onSuccess: () => {
        queryClient.invalidateQueries(['getEvents'])
        enqueueNotification('Заняття оновлено', 'success')
      },
      onError: (error: Error) => {
        enqueueNotification(error.message, 'error')
      },
    },
  )
  return { mutate, status, error }
}
