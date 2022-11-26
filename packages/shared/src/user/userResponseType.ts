import type { User } from '@tutoreng/db/src'

export type UserResponseType = Omit<User, 'password'>
