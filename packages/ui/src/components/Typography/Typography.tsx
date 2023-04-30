import styled from '@emotion/styled'

import type { COLORS } from '../../constatnts/colors'

export type TypographyProps = {
  color?: keyof typeof COLORS | string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  textAlign?: string
  textTransform?: string
  textDecoration?: string
  textOverflow?: string
  whiteSpace?: string
  wordBreak?: string
  wordWrap?: string
  children?: React.ReactNode
}

export const Typography = styled.div<TypographyProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
  text-decoration: ${(props) => props.textDecoration};
  text-overflow: ${(props) => props.textOverflow};
  white-space: ${(props) => props.whiteSpace};
  word-break: ${(props) => props.wordBreak};
  word-wrap: ${(props) => props.wordWrap};
`
