import { create } from 'zustand'

import type { EventType } from '../types/event'

interface IEventStore {
  selectedDate: EventType
  setSelectedDate: (selectedDate: EventType) => void
}

const useEventStore = create<IEventStore>((set) => ({
  selectedDate: null,
  setSelectedDate: (selectedDate: EventType) => set({ selectedDate }),
}))

export default useEventStore
