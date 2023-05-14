import type { ScheduleEvent } from '@tutoreng/db'
import type { EventCreateDto } from '@tutoreng/shared/src'

import { apiClient } from './client'

export const fetchEvents = async (userId?: string) => {
  console.log('fetchEvents')
  return apiClient.get<ScheduleEvent[]>(`/events/byUser/${userId}`)
}

export const postEvents = async (data: Omit<EventCreateDto, 'ownerId'>) => {
  return apiClient.post<ScheduleEvent>('/events', data)
}

export const updateEvent = async (
  data: Partial<EventCreateDto>,
  id: string,
) => {
  return apiClient.patch<ScheduleEvent>(`/events/${id}`, data)
}

export const deleteEvent = async (id: string) => {
  return apiClient.delete<ScheduleEvent>(`/events/${id}`)
}
