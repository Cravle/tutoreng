import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '../api/user'
import useUserStore from '../stores/user.store'

export const useAppRouting = () => {
  const { data: userData, isLoading } = useQuery(
    ['initialUser'],
    () => {
      const userId = localStorage.getItem('userId')
      console.log('userId', userId)
      if (!userId) {
        return null
      }
      return fetchUser(userId)
    },
    {
      onSuccess: (data) => {
        useUserStore.setState({ user: data })
      },
      refetchOnReconnect: false,
      cacheTime: 0,
    },
  )

  console.log('userData', userData)

  return { isAuth: !!userData, isLoading }
}
