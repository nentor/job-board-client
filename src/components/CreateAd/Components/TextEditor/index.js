import React from 'react'
import styled from 'styled-components'
import { Margin } from 'styled-components-spacing'

import { ListingTitle, RequiredCircle, Container } from '../'

import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('../../../Editor'), {
  ssr: false,
})

const Wrapper = styled((props) => <Container {...props} />)`
  .ck-editor__editable {
    min-height: 22.5rem;
  }
`

export const TextEditor = ({ title, isRequired }) => {
  return (
    <Wrapper>
      <Margin bottom={2}>
        <ListingTitle>
          {title} {isRequired && <RequiredCircle />}
        </ListingTitle>
      </Margin>
      <Editor />
    </Wrapper>
  )
}
