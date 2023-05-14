import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { queryClient } from '../../../api/queryClient'
import { postUser } from '../../../api/user'
import useNotificationStore from '../../../stores/notifications.store'

export const createNewUserModalService = (onSuccess?: () => void) => {
  const enqueueNotification = useNotificationStore(
    (state) => state.enqueueNotification,
  )
  const { mutate, status, error } = useMutation(postUser, {
    mutationKey: ['newUser'],
    onSuccess: () => {
      onSuccess?.()
      enqueueNotification('Користувача створено', 'success')
      queryClient.invalidateQueries(['users'])
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        enqueueNotification(error.response?.data?.message, 'error')
      }
    },
  })

  return { mutate, status, error }
}
