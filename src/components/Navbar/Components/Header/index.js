import React, { useState, useRef } from 'react'
import styled from 'styled-components'

export const Header = ({ isActive, data }) => {
  return (
    <Container>
      <h1>{data[isActive].label}</h1>
      <Description>
        {data[isActive].description} <br />
        <Button>
          <strong>Start Searching</strong>
        </Button>
      </Description>
    </Container>
  )
}

export const Container = styled.div`
  font-size: 28px;
  color: black;
  padding: 50px;
  text-align: center;
`
export const Description = styled.div`
  font-size: 24px;
`
const Button = styled.button`
  margin: 1rem;
  background: #f03e3e;
  color: white;
  height: 2rem;
  width: 10rem;
  border: none;
  border-radius: 2px;
  transition: 0.2s all;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
`
