import React from 'react'
import styled from 'styled-components'

const FlexStyled = styled.div`
  display: flex;
  ${({ column }) => {
    return `flex-direction: ` + (column ? `column` : `row`) + `;`
  }}
  ${({ justifyBetween }) => {
    return (
      `justify-content: ` +
      (justifyBetween ? `space-between` : `flex-start`) +
      `;`
    )
  }}
  ${({ alignCenter }) => {
    return `align-items: ` + (alignCenter ? `center` : `scretch`) + `;`
  }}
`

const ItemStyled = styled.div`
  display: block;
  flex-grow: 0;
  ${({ basis }) => {
    return `flex-basis: ` + (basis ? basis : `auto`) + `;`
  }}
`

export const Flex = ({ column, justifyBetween, alignCenter, children }) => {
  return (
    <FlexStyled
      column={column}
      justifyBetween={justifyBetween}
      alignCenter={alignCenter}
    >
      {' '}
      {children}{' '}
    </FlexStyled>
  )
}

export const FlexItem = ({ basis, children }) => {
  return <ItemStyled basis={basis}> {children} </ItemStyled>
}
