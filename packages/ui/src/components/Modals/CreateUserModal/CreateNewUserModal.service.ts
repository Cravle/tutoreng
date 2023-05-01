import { useMutation } from '@tanstack/react-query'

import { queryClient } from '../../../api/queryClient'
import { postUser } from '../../../api/user'

export const createNewUserModalService = (onSuccess?: () => void) => {
  const { mutate, status, error } = useMutation(postUser, {
    mutationKey: ['newUser'],
    onSuccess: () => {
      onSuccess?.()
      queryClient.invalidateQueries(['users'])
    },
  })

  return { mutate, status, error }
}
