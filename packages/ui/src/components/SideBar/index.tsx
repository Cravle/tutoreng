import { memo } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { COLORS } from '../../constatnts/colors'
import ExpandButton from '../ExpandButton/ExpandButton'

import CollapsedSideBar from './components/CollapsedSideBar'
import ExpandedSideBar from './components/ExpandedSideBar'
import { useSideBar } from './useSideBar'

export default memo(function SideBar() {
  const { collapsed, handleCollapse } = useSideBar()
  console.log(collapsed)

  return (
    <Root isExpanded={collapsed}>
      <Box onClick={handleCollapse}>
        <ExpandButton />
      </Box>
      {collapsed ? <CollapsedSideBar /> : <ExpandedSideBar />}
    </Root>
  )
})

const Root = styled.div<{
  isExpanded: boolean
}>`
  width: 78px;
  padding: 15px;
  background-color: #fff;
  border-right: 1px solid ${COLORS.mainBorder};
  position: relative;

  ${({ isExpanded }) =>
    !isExpanded &&
    css`
      width: 260px;
      padding: 12px;
    `}

  transition: width 0.3s ease-in-out;
`

const Box = styled.div`
  position: absolute;
  right: -12px;
  top: 50px;
`
