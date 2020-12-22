import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Wrap>
      <Title>Join OverReacted for Free</Title>
      <Description>
        Access thousands of products or offer one yourself!
      </Description>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-bottom: 40px;
`
const Title = styled.h1`
  font-size: 20px;
  margin: 0 0 5px;
`
const Description = styled.div`
  font-size: 17px;
  opacity: 0.8;
`
