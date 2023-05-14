import type { Event } from 'react-big-calendar'
import { useParams } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'

import { deleteEvent } from '../../api/events'
import { queryClient } from '../../api/queryClient'
import useEventStore from '../../stores/events.store'
import useNotificationStore from '../../stores/notifications.store'
import useUserStore from '../../stores/user.store'

type UseEventDescription = {
  handleOpenForm: () => void
  handleClose: () => void
  data: {
    x: number
    y: number
    event: Event
  }
}

export const useEventDescription = ({
  handleOpenForm,
  handleClose,
  data,
}: UseEventDescription) => {
  const { userId } = useParams<{ userId: string }>()
  const setSelectedEvent = useEventStore((store) => store.setSelectedEvent)
  const setOwnerId = useEventStore((store) => store.setOwnerId)
  const currentUser = useUserStore((store) => store.user)
  const enqueueNotification = useNotificationStore(
    (store) => store.enqueueNotification,
  )
  const { mutate: removeEvent } = useMutation(
    () => deleteEvent(data.event.resource.id),
    {
      onSuccess: () => {
        handleClose()
        queryClient.invalidateQueries(['getEvents'])
        enqueueNotification('Подію успішно видалено', 'success')
      },
    },
  )

  const handleEdit = () => {
    setSelectedEvent(data.event.resource)
    setOwnerId(userId)
    handleOpenForm()
    handleClose()
  }

  return {
    handleEdit,
    removeEvent,
    currentUser,
  }
}
