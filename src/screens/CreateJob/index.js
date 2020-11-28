import React from 'react'
import { createGlobalStyle } from 'styled-components'

import {
  InputField,
  NewListing,
  RequiredCircle,
  TextEditor,
  Title,
} from './Components'

const Reset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }
`

export const CreateJob = () => {
  return (
    <>
      <Reset />
      <NewListing>
        <Title>Hello World</Title>
        <p>
          Required Fields <RequiredCircle />
        </p>
      </NewListing>
    </>
  )
}
