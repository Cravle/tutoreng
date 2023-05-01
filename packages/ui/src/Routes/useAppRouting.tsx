import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '../api/user'
import useUserStore from '../stores/user.store'

export const useAppRouting = () => {
  const { data: userData } = useQuery(
    ['initialUser', localStorage.getItem('userId')],
    () => {
      const userId = localStorage.getItem('userId')
      return fetchUser(userId)
    },
    {
      onSuccess: (data) => {
        useUserStore.setState({ user: data })
      },
      refetchOnReconnect: false,
    },
  )

  return !!userData
}
