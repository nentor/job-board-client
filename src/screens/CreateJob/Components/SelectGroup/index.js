import React from 'react'
import styled from 'styled-components'

import { Container, RequiredCircle, ListingTitle } from '../index'

const Select = styled.select`
  font-size: 0.8em;
  outline: none;
  width: 435px;
  height: 60px;
  border: 1.5px solid rgba(144, 146, 148, 0.2);
  margin-top: 5px;
`

export const SelectGroup = ({ title, isRequired, options }) => {
  return (
    <Container>
      <ListingTitle name={title}>
        {title} {isRequired && <RequiredCircle />}
      </ListingTitle>
      <Select id={title}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    </Container>
  )
}
