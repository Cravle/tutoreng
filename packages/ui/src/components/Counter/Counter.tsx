import { memo, useState } from 'react'

import { COLORS } from '../../constatnts/colors'
import Medium from '../Typography/Medium'

type CounterProps = {
  onChange?: (value: number) => void
}

export default memo(function Counter({ onChange }: CounterProps) {
  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue((prev) => {
      onChange && onChange(prev + 1)
      return prev + 1
    })
  }

  const handleDecrement = () => {
    setValue((prev) => {
      if (prev === 0) {
        onChange(0)
        return 0
      }
      onChange && onChange(prev - 1)
      return prev - 1
    })
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <button
        className="bg-menuBgHover p-1 w-6 flex items-center justify-center rounded-full border-r-mainBorder"
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="p-3 ">
        <Medium color={COLORS.button}>{value}</Medium>
      </div>
      <button
        className="bg-menuBgHover p-1 w-6 flex items-center justify-center rounded-full border border-r-mainBorder "
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
})
