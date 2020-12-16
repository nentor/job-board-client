import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  max-width: 95rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background: #fff;
  padding: 1rem 3rem;
  margin: 0 auto;

  & p {
    font-size: 1.5rem;
  }

  & .requiredFields {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  & input,
  & textarea {
    font-size: 16.8px;
  }
`

export const NewListing = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
