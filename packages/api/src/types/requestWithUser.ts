import type { Request } from 'express';
import { User } from '@tutoreng/db/src';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
