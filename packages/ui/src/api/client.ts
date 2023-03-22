import axios, { AxiosError } from 'axios'
import { AuthReq, AuthRes } from './interfaces/auth'

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
})

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
