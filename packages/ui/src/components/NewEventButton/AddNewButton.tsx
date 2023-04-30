import { memo } from 'react'

import { COLORS } from '../../constatnts/colors'
import NewEventIcon from '../Icons/NewEventIcon'
import Medium from '../Typography/Medium'

type AddNewButtonProps = {
  onClick?: () => void
  title: string
}

export default memo(function AddNewButton({
  onClick,
  title,
}: AddNewButtonProps) {
  return (
    <div
      className="bg-white px-7 py-4_5 rounded-25px shadow-default border border-mainBorder cursor-pointer w-full"
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        <div className="mr-18px">
          <NewEventIcon />
        </div>
        <Medium color={COLORS.menuFont}>{title}</Medium>
      </div>
    </div>
  )
})
