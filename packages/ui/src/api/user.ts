import { RoleEnum } from '@tutoreng/db'
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

export const getStudents = async () => {
  const res = await apiClient.get<UserResponseType[]>(
    `/users/role/${RoleEnum.STUDENT}`,
  )

  return res.data
}

export const patchUser = async (data: Partial<UserCreateDto>, id: string) => {
  const res = await apiClient.patch<UserResponseType>(`/users/${id}`, data)

  return res
}

export const updatePassword = async (
  data: { oldPassword: string; newPassword: string },
  id: string,
) => {
  const res = await apiClient.patch<UserResponseType>(
    `/users/${id}/password`,
    data,
  )

  return res
}
