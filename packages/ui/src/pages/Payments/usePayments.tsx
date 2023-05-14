import { useMemo, useState } from 'react'

const HOURS_TO_PRICE: { [key: string]: number } = {
  1: 400,
  1.5: 550,
  2: 700,
}

export const usePayments = () => {
  const [counter, setCounter] = useState(0)
  const [hours, setHours] = useState(1)

  const totalPrice = useMemo(() => {
    return HOURS_TO_PRICE[hours] * counter
  }, [hours, counter])

  return {
    counter,
    setCounter,
    hours,
    setHours,
    totalPrice,
  }
}
