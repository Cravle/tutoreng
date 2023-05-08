import { create } from 'zustand'

import type { NotificationType } from '../types/notifications'

type Notification = {
  id: string
  message: string
  variant: NotificationType
}

type NotificationStore = {
  notifications: Notification[]
  enqueueNotification: (
    message: string,
    variant: Notification['variant'],
  ) => void
  removeNotification: (id: string) => void
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  enqueueNotification: (message, variant) => {
    set((state) => {
      const id = Date.now().toString()
      const notification: Notification = { id, message, variant }
      return { notifications: [...state.notifications, notification] }
    })
  },
  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id,
      ),
    }))
  },
}))

export default useNotificationStore
