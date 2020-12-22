import React, { useState } from 'react'
import { useForm } from '../../../../../../hooks/useForm'
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

export const AuthModalLogIn = ({ isChecked, setIsChecked }) => {
  useForm({ email: '', password: '' })
  return (
    <>
      <Form>
        <Credentials>
          <FormGroup>
            <Label>E-mail</Label>
            <br />
            <Input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <br />
            <Input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
            ></Input>
          </FormGroup>
        </Credentials>
        <Button type="submit" signIn onClick={onSubmit}>
          Log In
        </Button>

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
