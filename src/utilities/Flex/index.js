import React from 'react'
import styled from 'styled-components'

export const Flex = ({ column, justifyBetween, alignCenter, children }) => {
  const FlexStyled = styled.div`
    display: flex;
    ${() => {
      return `flex-direction: ` + (column ? `column` : `row`) + `;`
    }}
    ${() => {
      return (
        `justify-content: ` +
        (justifyBetween ? `space-between` : `flex-start`) +
        `;`
      )
    }}
      ${() => {
      return `align-items: ` + (alignCenter ? `center` : `scretch`) + `;`
    }}
  `

  return <FlexStyled> {children} </FlexStyled>
}

export const FlexItem = ({ basis, children }) => {
  const ItemStyled = styled.div`
    display: block;
    flex-grow: 0;
    ${() => {
      return `flex-basis: ` + (basis ? basis : `auto`) + `;`
    }}
  `

  return <ItemStyled> {children} </ItemStyled>
}
