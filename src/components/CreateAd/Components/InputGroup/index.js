import React from 'react'
import styled from 'styled-components'

import { RequiredCircle, Container, ListingTitle } from '../index'

const Input = styled.input`
  margin: 0 0 3px;
  padding: 1.6rem 1.2rem 1.6rem 1.2rem;
  height: 5.7rem;
  cursor: auto;
  border: 3px solid rgba(144, 146, 148, 0.2);
  outline: 2px none rgba(144, 146, 148, 0.2);
  background-color: #f8f9fa;
`

export const InputGroup = ({ type, title, inputText, isRequired }) => {
  return (
    <Container>
      <ListingTitle name={title}>
        {title} {isRequired && <RequiredCircle />}
      </ListingTitle>
      <Input id={title} type={type} />
      <p>{inputText}</p>
    </Container>
  )
}
