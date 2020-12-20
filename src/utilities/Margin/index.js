import React from 'react'
import styled from 'styled-components'

const MargCss = styled.div`
  ${({ left }) => {
    if (left) {
      return `margin-left: ` + left / 2 + `rem;\n`
    }
  }}
  ${({ right }) => {
    if (right) {
      return `margin-right: ` + right / 2 + `rem;\n`
    }
  }}
    ${({ top }) => {
    if (top) {
      return `margin-top: ` + top / 2 + `rem;\n`
    }
  }}
    ${({ bottom }) => {
    if (bottom) {
      return `margin-bottom: ` + bottom / 2 + `rem;`
    }
  }}
`

export const Margin = ({ left, right, top, bottom, children }) => {
  return (
    <MargCss left={left} right={right} top={top} bottom={bottom}>
      {children}
    </MargCss>
  )
}
