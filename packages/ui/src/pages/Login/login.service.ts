import { useMutation } from '@tanstack/react-query'
import { login } from '../../api/client'
import type { AuthRes } from '../../api/interfaces/auth'

export const loginService = (
  onSuccess: (data: AuthRes | undefined) => void,
) => {
  const { mutate, status, error } = useMutation(login, {
    mutationKey: ['login'],
    onSuccess: (data) => {
      onSuccess(data)
    },
  })
  return { mutate, status, error }
}
