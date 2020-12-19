import React from 'react'
import styled from 'styled-components'

import { RequiredCircle, Container, ListingTitle } from '../index'

const Input = styled.input`
  margin: 0 0 3px;
  /* font-size: 1.52rem; */
  padding: 1.6rem 1.2rem 1.6rem 1.2rem;
  height: 5.7rem;
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
