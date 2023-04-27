import type { ScheduleEvent } from '@tutoreng/db/src'

import type { WithoutDates } from '../types/WithoutDates'

export interface EventCreateDto extends WithoutDates<ScheduleEvent> {
  title: string
  dateFrom: Date
  dateTo: Date
  guests: string[]
  zoomurl: string
  homeworkUrl: string | null
  teacherNotes: string | null
  studentNotes: string | null
  ownerId: string | null
}
