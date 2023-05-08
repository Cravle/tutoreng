import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { useQuery } from '@tanstack/react-query'
import type { EventCreateDto } from '@tutoreng/shared/src'
import dayjs from 'dayjs'
import * as yup from 'yup'

import { fetchUsers } from '../../../api/user'
import { PRODUCTS } from '../../../constatnts/products'
import useEventStore from '../../../stores/events.store'

import { usePostEvent, useUpdateEvent } from './createEventModal.service'
const schema = yup.object({
  title: yup.string().required(),
  student: yup.string().required(),
  // product: yup.string().required(),
  callUrl: yup.string().url(),
  //datefns
  date: yup.date().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
})

export type EventFormData = yup.InferType<typeof schema>

type UseCreateEvent = {
  handleClose: () => void
}
export const useCreateEvent = ({ handleClose }: UseCreateEvent) => {
  const { data: studentsData } = useQuery(['students'], () =>
    fetchUsers('student'),
  )
  const selectedEvent = useEventStore((store) => store.selectedEvent)

  const { mutate: addEvent } = usePostEvent()
  const { mutate: updateEvent } = useUpdateEvent(selectedEvent?.id)

  const selectDate = useEventStore((state) => state.selectedDate)
  const setSelectedDate = useEventStore((store) => store.setSelectedDate)
  const setSelectedEvent = useEventStore((store) => store.setSelectedEvent)
  console.log(selectedEvent, 'selected event')

  const startHoursAndMnutes = selectDate?.startTime
    ?.toLocaleTimeString()
    .slice(0, 5)
  const endHoursAndMnutes = selectDate?.endTime
    ?.toLocaleTimeString()
    .slice(0, 5)

  const date = new Date(selectDate?.startTime || Date.now())

  const { control, handleSubmit, setValue } = useForm<EventFormData>({
    resolver: yupResolver(schema),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: selectedEvent
      ? {
          title: selectedEvent.title,
          student:
            studentsData?.data.find(
              (student) => student.id === selectedEvent.guests[0].id,
            ) || '',
          // product: PRODUCTS[0],
          date: dayjs(selectedEvent.dateFrom),
          startTime: dayjs(selectedEvent.dateFrom).format('HH:mm'),
          endTime: dayjs(selectedEvent.dateTo).format('HH:mm'),
          callUrl: selectedEvent.callUrl,
        }
      : {
          title: '',
          student: '',
          callUrl: '',
          // product: PRODUCTS[0],
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          date: dayjs(date) || dayjs(Date.now()),
          startTime: startHoursAndMnutes,
          endTime: endHoursAndMnutes,
        },
  })

  useEffect(() => {
    if (selectedEvent && studentsData) {
      console.log(studentsData, ' 111 studentsData')
      console.log(selectedEvent, ' 111 selectedEvent')
      setValue(
        'student',
        studentsData.data.find(
          (student) => student.id === selectedEvent.guests[0].user.id,
        )?.id,
      )
    }
  }, [studentsData])

  const handleClickOutside = () => {
    handleClose()
    setSelectedDate(null)
    setSelectedEvent(null)
  }

  const onSubmit = (data: EventFormData) => {
    const [startHours, startMinutes] = data.startTime.split(':')
    const [endHours, endMinutes] = data.endTime.split(':')

    const startTime = new Date(
      data.date.getFullYear(),
      data.date.getMonth(),
      data.date.getDate(),
      Number(startHours),
      Number(startMinutes),
    )

    const endTime = new Date(
      data.date.getFullYear(),
      data.date.getMonth(),
      data.date.getDate(),
      Number(endHours),
      Number(endMinutes),
    )

    console.log(startTime, endTime, 'start end time')

    console.log(data, 'data submit')
    const dataToSend: Omit<EventCreateDto, 'ownerId'> = {
      title: data.title,
      callUrl: data.callUrl,
      guests: [data.student],
      dateFrom: startTime,
      dateTo: endTime,
      homeworkUrl: null,
      studentNotes: null,
      teacherNotes: null,
    }
    console.log(dataToSend, 'data to send')
    handleClose()
    if (selectedEvent) {
      updateEvent(dataToSend)
      setSelectedDate(null)
      return
    }
    addEvent(dataToSend)
    setSelectedDate(null)
  }

  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0])

  const handleSelectProduct = (product: string) => {
    setSelectedProduct(product)
  }
  return {
    selectedProduct,
    handleSelectProduct,
    selecteDate: selectDate,
    startHoursAndMnutes,
    endHoursAndMnutes,
    date,
    control,
    handleSubmit,
    onSubmit,
    handleClickOutside,
    students: studentsData?.data,
  }
}
