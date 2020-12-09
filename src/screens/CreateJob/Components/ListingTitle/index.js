import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  font-weight: 900;
  color: #212529;
  font-size: 1.1rem;
  display: block;
`

export const ListingTitle = ({ name }) => {
  return <Label htmlFor={name}>{children}</Label>
}
