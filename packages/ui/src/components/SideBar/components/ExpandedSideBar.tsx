import { memo } from 'react'

import { COLORS } from '../../../constatnts/colors'
import Medium from '../../Typography/Medium'
import Small from '../../Typography/Small'
import { SIDEBAR_ITEMS } from '../constants'

import { MenuBox } from './CollapsedSideBar'
import LogoBLock from './LogoBlock'
import { useSideBarItem } from './useSideBarItem'

export default memo(function ExpandedSideBar() {
  const { handleClick, isActive } = useSideBarItem()

  return (
    <div className="h-screen ">
      <LogoBLock />
      <div className="mt-9 flex justify-start align-middle mb-3 ml-4">
        <Small color={COLORS.menuFont}>Меню</Small>
      </div>
      {SIDEBAR_ITEMS.map((item, index) => (
        <div
          className="flex align-middle"
          key={index}
          onClick={() => handleClick(item.path)}
        >
          <MenuBox
            className="flex flex-row w-full align-middle"
            active={isActive(item.path)}
          >
            <div className="mr-4">
              <item.Icon color={isActive(item.path) && COLORS.white} />
            </div>
            <div className="flex items-center">
              <Medium
                color={isActive(item.path) ? COLORS.white : COLORS.menuFont}
              >
                {item.title}
              </Medium>
            </div>
          </MenuBox>
        </div>
      ))}
    </div>
  )
})
