import React from 'react'

import { ListingTitle, RequiredCircle, Container } from '../index'

export const TextEditor = ({ title, isRequired }) => {
  return (
    <Container>
      <ListingTitle>
        {title} {isRequired && <RequiredCircle />}
      </ListingTitle>
      <textarea rows="12" cols="100"></textarea>
    </Container>
  )
}
