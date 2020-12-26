import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;

  & p {
    font-size: 1.408rem;
  }
`

const LabelWrapper = styled.label`
  font-weight: 900;
  color: #212529;
  font-size: 1.76rem;
  display: block;
  margin-bottom: 0.6rem;
`

export const Label = ({ name, children }) => {
  return <LabelWrapper htmlFor={name}>{children}</LabelWrapper>
}

export const Title = styled.h2`
  padding: 3rem 0 1.5rem 0;
  font-weight: bold;
  font-size: 2.4rem;
  color: #f03e3e;
`

export const RequiredIndicator = styled.span`
  &::before {
    content: '';
    background: #f03e3e;
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    position: relative;
    top: -0.2rem;
    left: 0.4rem;
  }
`
