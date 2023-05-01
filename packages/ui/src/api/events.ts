import type { ScheduleEvent } from '@tutoreng/db'
import type { EventCreateDto } from '@tutoreng/shared/src'

import { apiClient } from './client'

export const fetchEvents = async (search?: string) => {
  console.log('fetchEvents')
  return apiClient.get<ScheduleEvent[]>(
    '/events/byUser',
    search ? { params: { search } } : undefined,
  )
}

export const postEvents = async (data: Omit<EventCreateDto, 'ownerId'>) => {
  apiClient.post<ScheduleEvent>('/events', data)
}
