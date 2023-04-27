import { memo } from 'react'

import { COLORS } from '../../constatnts/colors'
import NewEventIcon from '../Icons/NewEventIcon'
import Medium from '../Typography/Medium'

type NewEventButtonProps = {
  onClick?: () => void
}

export default memo(function NewEventButton({ onClick }: NewEventButtonProps) {
  return (
    <div
      className="bg-white px-7 py-4_5 rounded-25px shadow-default border border-mainBorder cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        <div className="mr-18px">
          <NewEventIcon />
        </div>
        <Medium color={COLORS.menuFont}>Створити заняття</Medium>
      </div>
    </div>
  )
})
