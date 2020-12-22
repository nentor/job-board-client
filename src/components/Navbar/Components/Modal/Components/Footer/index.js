import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Plain, Button } from '../AuthModal'

export const Footer = ({ handleClose, logIn, setLogIn }) => {
  return (
    <>
      <SignIn isActive={!logIn}>
        <Flex column>
          <Plain>
            Already a member?
            <SwitchForm onClick={() => setLogIn(true)}>Log In</SwitchForm>
          </Plain>
          <Button close onClick={handleClose}>
            ×
          </Button>
        </Flex>
      </SignIn>
      <LogIn isActive={logIn}>
        <Flex column>
          <Plain>
            Dont have an account yet?
            <SwitchForm onClick={() => setLogIn(false)}>Sign In</SwitchForm>
          </Plain>
          <Button close onClick={handleClose}>
            ×
          </Button>
        </Flex>
      </LogIn>
    </>
  )
}
const SignIn = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`
const LogIn = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`

const SwitchForm = styled.div`
  margin-left: 5px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #f03e3e;
  }
`
