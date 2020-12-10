import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background: #fff;
  /* padding: 30px; */
  padding: 10px 30px;
`

export const NewListing = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
