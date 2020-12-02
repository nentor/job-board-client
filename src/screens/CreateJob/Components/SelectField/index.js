import React from 'react'
import styled from 'styled-components'

import { Container } from '../index'

const Select = styled.select`
  font-size: 0.8em;
  outline: none;
  width: 435px;
  height: 60px;
  border: 1.5px solid rgba(144, 146, 148, 0.2);
`

export const SelectField = ({ options }) => {
  return (
    <Container>
      <Select>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    </Container>
  )
}
