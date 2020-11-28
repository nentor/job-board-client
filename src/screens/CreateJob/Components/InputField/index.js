import React from 'react'
import styled from 'styled-components'

import { RequiredCircle } from '../index'

const Input = styled.input`
  max-width: 890px;
  width: 890px;
`

export const InputField = ({ type, title, inputText, isRequired }) => {
  return (
    <>
      <h3>
        {title} {isRequired && <RequiredCircle />}
      </h3>
      <input type={type} />
      <p>{inputText}</p>
    </>
  )
}
