import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Modal = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>Join OverReacted for Free</Title>
          <Description>
            Access thousands of online classes in design, business, and more!
          </Description>
        </Header>
        <LogIn>
          <Form>
            <FormGroup>
              <Label>Full Name</Label>
              <br />
              <Input type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Label>Email Address</Label>
              <br />
              <Input type="e-mail"></Input>
            </FormGroup>
            <Column>
              <FormGroup>
                <Label>Password</Label>
                <br />
                <Input password type="password"></Input>
              </FormGroup>
              <FormGroup>
                <Label>Confirm Password</Label>
                <br />
                <Input password type="password"></Input>
              </FormGroup>
            </Column>
          </Form>
          <Socials>
            <h1>Or log In with your Socials</h1>
            <SocialButton facebook>
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </SocialButton>
            <SocialButton google>
              <FontAwesomeIcon icon={faGoogle} />
              Google
            </SocialButton>
          </Socials>
        </LogIn>
        <Button>Sign In</Button>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 30px 10px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
`
const Header = styled.div`
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
const LogIn = styled.form`
  display: flex;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`
const FormGroup = styled.div`
  dislay: flex;
  flex-direction: column;
  margin-bottom: 10px;
  vertical-align: baseline;
`
const Label = styled.label``
const Input = styled.input`
  width: 210px;
  ${(props) =>
    props.password &&
    `
        width: 100px;
        margin-right: 10px;
    `}
`
const Column = styled.div`
  display: flex;

  width: 50%;
`
const Socials = styled.div`
  padding-left: 40px;
  border-left: 1px solid #e5e5e5;
  margin-left: 40px;
`
const SocialButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  border-radius: 10px;
  width: 120px;
  height: 40px;
  margin-top: 10px;
  ${(props) =>
    props.facebook &&
    `
  background: #3b5998;
  `}
  ${(props) =>
    props.google &&
    `
  background: #db3236;
  `}
`

const Button = styled.a`
  text-align: center;
  font-size: 19px;
  color: white;
  width: 100px;
  height: 30px;
  background: #db3236;
`
