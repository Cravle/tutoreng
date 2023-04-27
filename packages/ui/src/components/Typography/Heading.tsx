import { memo } from 'react'

import { Typography, TypographyProps } from './Typography'

export default memo(function Heading({ color, children }: TypographyProps) {
  return (
    <Typography
      fontSize={'20px'}
      lineHeight={'23px'}
      fontWeight={'700'}
      color={color}
    >
      {children}
    </Typography>
  )
})
