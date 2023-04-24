import { memo } from 'react'

import { Typography, TypographyProps } from './Typography'

export default memo(function Medium({
  color,
  children,
  ...props
}: TypographyProps) {
  return (
    <Typography
      fontSize={'15px'}
      lineHeight={'18px'}
      fontWeight={'400'}
      color={color}
      {...props}
    >
      {children}
    </Typography>
  )
})
