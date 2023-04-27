export interface AuthReq {
  email?: string
  password?: string
}

export interface AuthRes {
  user: any
  token: {
    accessToken: string
    refreshToken?: string
  }
}
