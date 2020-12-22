import React, { useState } from 'react'
import {
  Form,
  Credentials,
  FormGroup,
  Label,
  Input,
  Button,
  Flex,
  Terms,
  Customcheckbox,
  Plain,
} from '../AuthModalSignIn'

export const AuthModalLogIn = ({ isChecked, setIsChecked, logIn }) => {
  return (
    <>
      <Form logIn isActive={logIn}>
        <Credentials>
          <FormGroup>
            <Label>E-mail</Label>
            <br />
            <Input type="email"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <br />
            <Input type="password"></Input>
          </FormGroup>
        </Credentials>
        <Button signIn>Sign In</Button>

        <Flex left>
          <Terms>
            <Customcheckbox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
            ></Customcheckbox>
            Remember me
          </Terms>
          <Plain text>Forgot password?</Plain>
        </Flex>
      </Form>
    </>
  )
}
