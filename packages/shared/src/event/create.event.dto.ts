import type { ScheduleEvent } from '@tutoreng/db'

import type { WithoutDates } from '../types/WithoutDates'

export interface EventCreateDto extends WithoutDates<ScheduleEvent> {
  title: string
  dateFrom: Date
  dateTo: Date
  guests: string[]
  callUrl: string
  homeworkUrl: string | null
  teacherNotes: string | null
  studentNotes: string | null
  ownerId: string | null
}
