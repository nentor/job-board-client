import React from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export function Loader(props) {
  return (
    <ImSpinner2
      {...props}
      css={`
        vertical-align: middle;
        animation: ${rotate} 1s linear infinite;
      `}
    />
  )
}
