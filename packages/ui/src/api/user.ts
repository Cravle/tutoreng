import type { UserResponseType } from '@tutoreng/shared/src'

import { apiClient } from './client'
import type { ApiPaginatedResponse } from './interfaces'

export const fetchUser = async (id: string) => {
  const response = await apiClient.get<UserResponseType>(`/users/${id}`)

  return response.data
}

export const fetchUsers = async () => {
  const response = await apiClient.get<ApiPaginatedResponse<UserResponseType>>(
    '/users',
  )

  return response.data
}
