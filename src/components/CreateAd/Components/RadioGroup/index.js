import React from 'react'
import styled from 'styled-components'

import { Container, RequiredCircle, ListingTitle } from '../index'

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

export const RadioGroup = ({ title, isRequired, choices }) => {
  return (
    <Container>
      <ListingTitle>Job Type {isRequired && <RequiredCircle />}</ListingTitle>
      <RadioGroupWrapper>
        {choices.map((choice) => (
          <div key={choice.value}>
            <RadioButton id={choice.value} value={choice.value} />
            <label htmlFor={choice.value}>{choice.value}</label>
          </div>
        ))}
      </RadioGroupWrapper>
    </Container>
  )
}
