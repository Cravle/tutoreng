import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '../api/user'

export const appRoutingService = (id: string) => {
  const {
    data: user,
    status,
    error,
  } = useQuery(['user'], () => fetchUser(id), {})
  return { user, status, error }
}
