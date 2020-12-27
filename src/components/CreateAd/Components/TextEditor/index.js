import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Margin } from '../../../../utilities/Margin'

import { Label, RequiredIndicator, Container } from '../'

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

export const TextEditor = ({
  title,
  isRequired,
  name,
  value,
  setFormState,
}) => {
  const handleChange = (event, editor) => {
    setFormState((prevState) => {
      return { ...prevState, [name]: editor.getData() }
    })
  }

  return (
    <Wrapper>
      <Margin bottom={2}>
        <Label>
          {title} {isRequired && <RequiredIndicator />}
        </Label>
      </Margin>
      <Editor name={name} data={value} onChange={handleChange} />
    </Wrapper>
  )
}
