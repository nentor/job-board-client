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
  margin-top: 20px;

  & div {
    padding-right: 30px;

    display: flex;
    align-items: center;
  }
`

export const RadioGroup = ({ title, isRequired, choices }) => {
  return (
    <Container>
      <ListingTitle>Job Type {isRequired && <RequiredCircle />}</ListingTitle>
      <RadioGroupWrapper>
        {choices.map((choice) => (
          <div>
            <RadioButton id={choice.value} value={choice.value} />
            <label htmlFor={choice.value}>{choice.value}</label>
          </div>
        ))}
      </RadioGroupWrapper>
    </Container>
  )
}
