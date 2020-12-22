import React from 'react'
import styled from 'styled-components'
import { Margin } from 'styled-components-spacing'

import { ListingTitle, RequiredCircle, Container } from '../'

import { Toolbar } from './Toolbar'

export const TextEditor = ({ title, isRequired }) => {
  return (
    <Container>
      <Margin bottom={2}>
        <ListingTitle>
          {title} {isRequired && <RequiredCircle />}
        </ListingTitle>
      </Margin>
      <Toolbar />
      <textarea rows="12" cols="100"></textarea>
    </Container>
  )
}
