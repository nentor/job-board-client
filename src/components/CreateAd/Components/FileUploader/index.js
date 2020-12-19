import React from 'react'
import styled from 'styled-components'

import { Container, ListingTitle, RequiredCircle } from '../index'

const InputFileUpload = styled.input.attrs({
  type: 'file',
})`
  opacity: 0;
  min-height: 14rem;
  min-width: 88.2rem;
  cursor: pointer;
`

const InputFileUploadWrapper = styled.div`
  font-size: 0.95rem;
  padding: 1.6rem 1.2rem 1.6rem 1.2rem;
  cursor: auto;
  border: none rgba(144, 146, 148, 0.2);
  border-radius: 3px;
  margin: 0 0 5px 0;
  background-color: #f8f9fa;
  outline-width: 2px;
  outline-color: rgba(144, 146, 148, 0.2);

  position: relative;

  &::after {
    content: 'Click or drag your photo here to upload';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.75rem;
    pointer-events: none;
  }
`

export const FileUploader = ({ title, isRequired, inputText }) => {
  return (
    <Container>
      <ListingTitle>
        {title} {isRequired && <RequiredCircle />}
      </ListingTitle>
      <InputFileUploadWrapper>
        <InputFileUpload />
      </InputFileUploadWrapper>
      <p>{inputText}</p>
    </Container>
  )
}
