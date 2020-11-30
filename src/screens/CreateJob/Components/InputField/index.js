import React from 'react'
import styled from 'styled-components'

import { RequiredCircle } from '../index'

const Container = styled.div`
  margin-top: 30px;

  & label {
    font-weight: 900;
    color: #212529;
    font-size: 1.1rem;
    display: block;
  }
`

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

export const InputField = ({ type, title, inputText, isRequired }) => {
  return (
    <Container>
      <label htmlFor={title}>
        {title} {isRequired && <RequiredCircle />}
      </label>
      <Input id={title} type={type} />
      <p>{inputText}</p>
    </Container>
  )
}
