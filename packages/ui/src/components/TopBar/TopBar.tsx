import { memo } from 'react'

import AvatarPlaceholder from '../../assets/AvatarPlaceholder.png'
import { COLORS } from '../../constatnts/colors'
import AddIcon from '../Icons/AddIcon'
import Bell from '../Icons/Bell'
import Medium from '../Typography/Medium'

export default memo(function TopBar() {
  return (
    <div className="w-full pr-9">
      <div className="flex justify-end">
        <div className="p-3 bg-menuBgHover flex items-center rounded-default  mr-12">
          <div>
            <AddIcon className="mr-3" />
          </div>

          <Medium color={COLORS.menuFont} fontWeight="700">
            1200 грн
          </Medium>
        </div>

        <div className="mr-12 flex items-center">
          <Bell />
        </div>

        <div>
          <img src={AvatarPlaceholder} />
        </div>
      </div>
    </div>
  )
})
