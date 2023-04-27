import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import * as yup from 'yup'

import { PRODUCTS } from '../../../constatnts/products'
import useEventStore from '../../../stores/events.store'
const schema = yup.object({
  title: yup.string().required(),
  student: yup.string().required(),
  product: yup.string().required(),
  //datefns
  date: yup.date().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
})

type FormData = yup.InferType<typeof schema>

type UseCreateEvent = {
  handleClose: () => void
}
export const useCreateEvent = ({ handleClose }: UseCreateEvent) => {
  const selecteDate = useEventStore((state) => state.selectedDate)
  console.log(selecteDate)
  const setSelectedDate = useEventStore((store) => store.setSelectedDate)

  const startHoursAndMnutes = selecteDate?.startTime
    ?.toLocaleTimeString()
    .slice(0, 5)
  const endHoursAndMnutes = selecteDate?.endTime
    ?.toLocaleTimeString()
    .slice(0, 5)

  const date = new Date(selecteDate?.startTime)

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      student: '',
      product: PRODUCTS[0],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      date: dayjs(date),
      startTime: startHoursAndMnutes,
      endTime: endHoursAndMnutes,
    },
  })

  const handleClickOutside = () => {
    handleClose()
    setSelectedDate(null)
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    handleClose()
    setSelectedDate(null)
  }

  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0])

  const handleSelectProduct = (product: string) => {
    setSelectedProduct(product)
  }
  return {
    selectedProduct,
    handleSelectProduct,
    selecteDate,
    startHoursAndMnutes,
    endHoursAndMnutes,
    date,
    control,
    handleSubmit,
    onSubmit,
    handleClickOutside,
  }
}
