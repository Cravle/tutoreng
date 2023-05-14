import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { fetchUser } from '../../api/user'

export const useBaseSchedule = (userId?: string) => {
  const [openEventModal, setOpenEventModal] = useState<boolean>(false)

  const { data: user } = useQuery(
    ['user', userId],
    () => userId && fetchUser(userId),
  )

  return {
    openEventModal,
    setOpenEventModal,
    user,
  }
}
