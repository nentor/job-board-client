import React from 'react'
import styled from 'styled-components'

import { Container, RequiredIndicator, Label } from '../index'

const RadioButton = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 3px;
`

const RadioGroupWrapper = styled.div`
  display: flex;
  font-size: 1.76rem;
  margin-top: 1.4rem;

  & div {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      padding-right: 3rem;
    }
  }
`

export const RadioGroup = ({
  title,
  isRequired,
  choices,
  value,
  name,
  onChange,
}) => {
  return (
    <Container>
      <Label>Job Type {isRequired && <RequiredIndicator />}</Label>
      <RadioGroupWrapper name={name}>
        {choices.map((choice) => (
          <div key={choice.value}>
            <RadioButton
              id={choice.value}
              name={name}
              value={choice.value}
              checked={value === choice.value}
              onChange={onChange}
            />
            <label htmlFor={choice.value}>{choice.value}</label>
          </div>
        ))}
      </RadioGroupWrapper>
    </Container>
  )
}
