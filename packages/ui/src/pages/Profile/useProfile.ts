import { useParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '../../api/user'

export const useProfile = () => {
  const { userId } = useParams<{ userId: string }>()
  const { data: pageOwnerData } = useQuery(
    ['user', userId],
    () => userId && fetchUser(userId),
  )

  return {
    pageOwnerData,
  }
}
