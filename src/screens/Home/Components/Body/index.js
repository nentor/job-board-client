import React from 'react'
import styled from 'styled-components'

import { AdList } from '../AdList'

export const Body = () => {
  return (
    <ListContainer>
      <AdList></AdList>
    </ListContainer>
  )
}
const ListContainer = styled.div`
  margin: 0 auto;
  max-width: 950px;
`
