import type { UserCreateDto, UserResponseType } from '@tutoreng/shared/src'

import { apiClient } from './client'
import type { ApiPaginatedResponse } from './interfaces'

export const fetchUser = async (id: string) => {
  const response = await apiClient.get<UserResponseType>(`/users/${id}`)

  return response.data
}

export const fetchUsers = async (search?: string) => {
  const response = await apiClient.get<ApiPaginatedResponse<UserResponseType>>(
    '/users',
    search ? { params: { search } } : undefined,
  )

  return response.data
}

export const postUser = async (data: UserCreateDto) => {
  const res = await apiClient.post<UserResponseType>('/users', data)

  return res.data
}
