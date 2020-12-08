import React from 'react'
import styled from 'styled-components'

import { Container, RequiredField } from '../index'

const Radio = styled.input.attrs({
  type: 'radio',
})`
  margin: 0 5px;
`

const RadioGroupWrapper = styled.div`
  display: flex;
`

export const RadioGroup = ({ title, isRequired, choices }) => {
  return (
    <Container>
      <RadioGroupWrapper>
        {choices.map((choice) => (
          <>
            <label htmlFor={choice.value}>{choice.value}</label>
            <Radio id={choice.value} value={choice.value} />
          </>
        ))}
      </RadioGroupWrapper>
    </Container>
  )
}
