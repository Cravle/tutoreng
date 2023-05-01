import type { User } from '@tutoreng/db'
import type { Request } from 'express'

interface RequestWithUser extends Request {
  user: User
}

export default RequestWithUser
