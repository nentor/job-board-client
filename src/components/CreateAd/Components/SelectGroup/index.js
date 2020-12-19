import React from 'react'
import styled from 'styled-components'

import { Container, RequiredCircle, ListingTitle } from '../index'

const Select = styled.select`
  font-size: 1.408rem;
  outline: none;
  height: 6rem;
  border: 1.5px solid rgba(144, 146, 148, 0.2);
`

export const SelectGroup = ({ title, isRequired, options }) => {
  return (
    <Container>
      <ListingTitle name={title}>
        {title} {isRequired && <RequiredCircle />}
      </ListingTitle>
      <Select id={title}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  )
}
