import axios, { AxiosError } from 'axios'

import type { AuthReq, AuthRes } from './interfaces/auth'

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
})

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userId')
    }
    return Promise.reject(error)
  },
)

export const login = async ({ email, password }: AuthReq) => {
  try {
    const { data } = await apiClient.post<AuthRes>('/login', {
      email,
      password,
    })
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error?.response?.data
    }
  }
}

export const test = async () => {
  try {
    const { data } = await apiClient.get('/test')
    return data
  } catch (error) {
    console.log(error)
  }
}
