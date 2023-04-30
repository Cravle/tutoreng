import { useEffect } from 'react'

import { fetchUser } from '../api/user'
import useUserStore from '../stores/user.store'

export const useAppRouting = () => {
  const isAuth =
    useUserStore((store) => store.user) || localStorage.getItem('userId')
  const user = useUserStore((store) => store.user) || null
  const userId = localStorage.getItem('userId')

  useEffect(() => {
    if (user) {
      return
    }

    if (userId) {
      ;(async () => {
        const user = await fetchUser(userId)
        console.log(user, 'user')

        useUserStore.setState({ user })
      })()
    }
  }, [])

  return isAuth
}
