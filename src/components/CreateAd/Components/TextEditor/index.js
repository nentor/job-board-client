import React from 'react'
import styled from 'styled-components'
import { Margin } from 'styled-components-spacing'

import { ListingTitle, RequiredCircle, Container } from '../'

import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('../../../Editor'), {
  ssr: false,
})

export const TextEditor = ({ title, isRequired }) => {
  return (
    <Container>
      <Margin bottom={2}>
        <ListingTitle>
          {title} {isRequired && <RequiredCircle />}
        </ListingTitle>
      </Margin>
      <Editor />
    </Container>
  )
}
