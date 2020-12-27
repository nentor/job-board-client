import React from 'react'
import styled from 'styled-components'

import { Container, RequiredIndicator, Label } from '../index'

const Select = styled.select`
  font-size: 1.408rem;
  outline: none;
  height: 6rem;
  border: 1.5px solid rgba(144, 146, 148, 0.2);
`

export const SelectGroup = ({
  title,
  isRequired,
  options,
  value,
  name,
  onChange,
}) => {
  return (
    <Container>
      <Label name={title}>
        {title} {isRequired && <RequiredIndicator />}
      </Label>
      <Select id={title} value={value} name={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Container>
  )
}
