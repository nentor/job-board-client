import React from 'react'
import styled from 'styled-components'
import { Margin } from '../../../../utilities/Margin'

import { ListingTitle, RequiredIndicator, Container } from '../'

import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('../../../Editor'), {
  ssr: false,
})

const Wrapper = styled((props) => <Container {...props} />)`
  .ck-editor__editable {
    min-height: 22.5rem;
  }

  .ck-editor__editable > * {
    font-size: 1.68rem;
    font-family: Arial;
  }
`

export const TextEditor = ({ title, isRequired }) => {
  return (
    <Wrapper>
      <Margin bottom={2}>
        <ListingTitle>
          {title} {isRequired && <RequiredIndicator />}
        </ListingTitle>
      </Margin>
      <Editor />
    </Wrapper>
  )
}
