import React from 'react'
import styled from 'styled-components'

import { ListingTitle, RequiredCircle, Container } from '../index'

import { Toolbar } from './Toolbar'

export const TextEditor = ({ title, isRequired }) => {
  return (
    <Container>
      <ListingTitle>
        {title} {isRequired && <RequiredCircle />}
      </ListingTitle>
      <Toolbar />
      <textarea rows="12" cols="100"></textarea>
    </Container>
  )
}
