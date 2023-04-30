import type { UserResponseType } from '@tutoreng/shared/src'

export interface AuthReq {
  email?: string
  password?: string
}

export interface AuthRes {
  user: UserResponseType
  tokens: {
    accessToken: string
    refreshToken?: string
  }
}
