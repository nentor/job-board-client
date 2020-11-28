import React from 'react'
import styled from 'styled-components'

export const RequiredCircle = styled.span`
  &::before {
    content: '';
    background: #f03e3e;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    position: relative;
    top: -2px;
    left: 4px;
  }
`
