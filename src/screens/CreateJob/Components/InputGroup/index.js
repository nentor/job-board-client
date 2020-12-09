import React from 'react'
import styled from 'styled-components'

import { RequiredCircle, Container, ListingTitle } from '../index'

const Input = styled.input`
  max-width: 890px;
  width: 890px;
  margin: 5px 0 3px;
  font-size: 0.95rem;
  padding: 16px 12px 16px 12px;
  cursor: auto;
  border-color: rgba(144, 146, 148, 0.2);
  border-style: solid;
  border-radius: 3px;
  background-color: #f8f9fa;
  outline-width: 2px;
  outline-color: rgba(144, 146, 148, 0.2);
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
