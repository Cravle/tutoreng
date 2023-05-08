import type { EventResponseType } from '@tutoreng/shared/src'
import { create } from 'zustand'

import type { EventType } from '../types/event'

interface IEventStore {
  selectedDate: EventType
  setSelectedDate: (selectedDate: EventType) => void

  selectedEvent: EventResponseType
  setSelectedEvent: (event: EventResponseType) => void
}

const useEventStore = create<IEventStore>((set) => ({
  selectedDate: null,
  setSelectedDate: (selectedDate: EventType) => set({ selectedDate }),

  selectedEvent: null,
  setSelectedEvent: (selectedEvent: EventResponseType) =>
    set({ selectedEvent }),
}))

export default useEventStore
