import { memo } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { COLORS } from '../../../constatnts/colors'
import Small from '../../Typography/Small'
import { SIDEBAR_ITEMS } from '../constants'

import LogoBLock from './LogoBlock'
import { useSideBarItem } from './useSideBarItem'

export default memo(function CollapsedSideBar() {
  const { handleClick, isActive } = useSideBarItem()

  return (
    <div className="h-screen ">
      <LogoBLock collapsed />

      <div className="mt-9 flex justify-center align-middle mb-3">
        <Small color={COLORS.menuFont}>Меню</Small>
      </div>
      <div>
        {SIDEBAR_ITEMS.map((item, index) => (
          <div
            className="flex justify-center align-middle w-full mb-3"
            key={index}
            onClick={() => handleClick(item.path)}
          >
            <MenuBox active={isActive(item.path)}>
              <item.Icon color={isActive(item.path) && COLORS.white} />
            </MenuBox>
          </div>
        ))}
      </div>
    </div>
  )
})

export const MenuBox = styled.div<{ active?: boolean }>`
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: ${COLORS.menuBgHover};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${COLORS.primary};
      :hover {
        background-color: ${COLORS.primary};
      }
    `}
`
