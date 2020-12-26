import React from 'react'
import styled from 'styled-components'

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
