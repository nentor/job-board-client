import React from 'react'

import {
  InputField,
  NewListing,
  RequiredCircle,
  TextEditor,
  Title,
} from './Components'

export const CreateJob = () => {
  return (
    <NewListing>
      <Title>Hello World</Title>
      <p>
        Required Fields <RequiredCircle />
      </p>
    </NewListing>
  )
}
