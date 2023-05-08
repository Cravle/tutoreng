import { memo } from 'react'

import styled from '@emotion/styled'

import { COLORS } from '../../constatnts/colors'

type ChoseButtonProps = {
  onClick?: () => void
  title: string
  active: boolean
}

export default memo(function ChoseButton({
  onClick,
  active,
  title,
}: ChoseButtonProps) {
  return (
    <Root onClick={onClick} active={active}>
      {title}
    </Root>
  )
})

const Root = styled.div<{ active?: boolean }>`
  cursor: pointer;
  padding: 11px 12px;
  border-radius: 7px;
  border: 1px solid
    ${({ active }) => (active ? COLORS.button : COLORS.menuFont)};

  color: ${({ active }) => (active ? COLORS.button : COLORS.menuFont)};
  background-color: ${({ active }) =>
    active ? COLORS.lightButton : COLORS.white};
`
