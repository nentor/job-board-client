import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Portal } from '../Portal'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Modal = ({ handleClose }) => {
  return (
    <>
      <Portal>
        <Container>
          <Wrapper>
            <Header>
              <Title>Join OverReacted for Free</Title>
              <Description>
                Access thousands of products or offer one yourself!
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
                <h1>Or Sign In In with your Socials</h1>
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
            <Button close onClick={handleClose}>
              Close
            </Button>
          </Wrapper>
        </Container>
      </Portal>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  margin-bottom: 30rem;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
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
`
const FormGroup = styled.div`
  dislay: flex;
  flex-direction: column;
  margin-bottom: 10px;
  vertical-align: baseline;
`
const Label = styled.label``
const Input = styled.input`
  width: 216px;
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
  cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: white;
  width: 100px;
  height: 30px;
  background: #db3236;
  cursor: pointer;
  ${(props) =>
    props.close &&
    `
    background: transparent;
    height: auto;
    width: auto;
    padding: 10px;
    color: black;
  `}
`
