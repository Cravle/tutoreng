import { memo, useCallback, useState } from 'react'

import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar'
import withDragAndDrop, {
  withDragAndDropProps,
} from 'react-big-calendar/lib/addons/dragAndDrop'

import { Paper } from '@mui/material'
import addHours from 'date-fns/addHours'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import parse from 'date-fns/parse'
import startOfHour from 'date-fns/startOfHour'
import startOfWeek from 'date-fns/startOfWeek'

import useEventStore from '../../stores/events.store'
import useUserStore from '../../stores/user.store'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

type TimeTableprops = {
  handleOpenEventModal: () => void
}

export default memo(function TimeTable({
  handleOpenEventModal,
}: TimeTableprops) {
  const user = useUserStore((store) => store.user)
  const setSelectedDate = useEventStore((store) => store.setSelectedDate)
  const [events, setEvents] = useState<Event[]>([
    {
      title: 'Learn cool stuff',
      resource: {
        color: 'red',
      },
      start,
      end,
    },
  ])

  const onEventResize: withDragAndDropProps['onEventResize'] = (data) => {
    const { start, end } = data

    setEvents((currentEvents) => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      }
      return [...currentEvents, firstEvent]
    })
  }

  const handleSelectEvent = useCallback((event: Event) => {
    console.log(event)
  }, [])

  const handleSelectSlot = useCallback((event: Event) => {
    handleOpenEventModal()
    setSelectedDate({
      startTime: event.start,
      endTime: event.end,
    })
  }, [])

  const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => {
    console.log(data)
  }

  return (
    <div className={'w-full flex flex-grow flex-col'}>
      <div>
        <Paper className="p-2 rounded-lg ">
          <DnDCalendar
            className="h-calender"
            defaultView="week"
            events={events}
            localizer={localizer}
            onEventDrop={onEventDrop}
            onEventResize={onEventResize}
            onSelectEvent={handleSelectEvent}
            onDoubleClickEvent={(event) => console.log(event)}
            onSelectSlot={handleSelectSlot}
            resizable={user?.role !== 'STUDENT'}
            selectable={user?.role !== 'STUDENT'}
            draggableAccessor={() => user?.role !== 'STUDENT'}
            eventPropGetter={(event: any) => ({
              style: {
                backgroundColor: event?.resource.color,
              },
            })}
            components={{
              event: ({ event }: any) => <span>{event.title}</span>,
            }}
          />
        </Paper>
      </div>
    </div>
  )
})

const locales = {
  'en-US': enUS,
}
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const DnDCalendar = withDragAndDrop(Calendar)
