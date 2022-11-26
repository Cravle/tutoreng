import type { UserResponseType } from 'src/user/userResponseType'

export interface LoginResponseDto {
  accessToken: string
  refreshToken: string
  user: UserResponseType
}
