import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: #f03e3e;
  color: white;
  text-decoration: none;
  font-size: 1em;
  padding: 16px 30px 16px 30px;
  border-radius: 2px;
  border-color: transparent;
  display: inline-block;
  cursor: pointer;
`

export const Button = ({ children }) => {
  return <Btn>{children}</Btn>
}
