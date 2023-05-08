import type { ScheduleEvent } from '@tutoreng/db'
import type { UserResponseType } from 'src/user'

export interface EventResponseType extends ScheduleEvent {
  guests: {
    eventId: string
    userId: string
    id: string
    user: UserResponseType
  }[]
  owner: UserResponseType
}
