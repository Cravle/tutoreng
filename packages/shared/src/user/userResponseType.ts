import type { User } from '@tutoreng/db'

export type UserResponseType = Omit<User, 'password'>
