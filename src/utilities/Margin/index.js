import React from 'react'
import styled from 'styled-components'

export const Margin = ({ left, right, top, bottom, children }) => {
  const MargCss = styled.div`
    ${() => {
      let tempCss = ``
      if (left) {
        tempCss += `margin-left: ` + left / 2 + `rem;\n`
      }
      if (right) {
        tempCss += `margin-right: ` + right / 2 + `rem;\n`
      }
      if (top) {
        tempCss += `margin-top: ` + top / 2 + `rem;\n`
      }
      if (bottom) {
        tempCss += `margin-bottom: ` + bottom / 2 + `rem;`
      }
      return tempCss
    }}
  `

  return <MargCss> {children} </MargCss>
}
