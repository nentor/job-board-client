import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Portal } from '../Portal'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

export const ModalLogIn = ({ handleClose }) => {
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
              <FlexCred>
                <Form>
                  <Credentials>
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
                  </Credentials>
                </Form>
                <Socials>
                  <SocialsTitle>Or Sign In In with your Socials</SocialsTitle>
                  <SocialButton facebook>
                    <FontAwesomeIcon icon={faFacebook} />
                    Facebook
                  </SocialButton>
                  <SocialButton google>
                    <FontAwesomeIcon icon={faGoogle} />
                    Google
                  </SocialButton>
                </Socials>
              </FlexCred>
              <Button signIn>Sign In</Button>
            </LogIn>
            <Plain>
              If you are already a member - <SwitchForm>Log In</SwitchForm>
            </Plain>
            <Button close onClick={handleClose}>
              ×
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
  background: red;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
`
const Wrapper = styled.div`
  margin-bottom: 15rem;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1rem 3rem #000;
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
const LogIn = styled.form``
const FlexCred = styled.div`
  display: flex;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
`
const Credentials = styled.div`
  float: left;
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
  otline: none;
  border: none;
  box-shadow: 0 1px 5px rgba(10, 10, 10, 0.3);
  margin-top: 3px;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.password &&
    `
        width: 100px;
        margin-right: 10px;
    `}
`
const Column = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 50%;
`
const Socials = styled.div`
  padding-left: 40px;
  border-left: 1px solid #e5e5e5;
  margin-left: 40px;
`
const SocialsTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`
const SocialButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  font-size: 17px;
  font-weight: 700;
  width: 100%;
  height: 30%;
  margin-top: 10px;
  border: none;
  box-shadow: 0 1px 5px rgba(10, 10, 10, 0.3);
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
  ${(props) =>
    props.facebook &&
    `
  color: #3b5998;

  `}
  ${(props) =>
    props.google &&
    `
  color: #db3236;

  `}
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: white;
  width: 5rem;
  height: 2rem;
  background: #f03e3e;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
  ${(props) =>
    props.signIn &&
    `

  `}
  ${(props) =>
    props.close &&
    `
    width: 2rem;

    font-size: 30px;
    background: transparent;
    align-self: center;
    border-radius: 50%;
    margin-top: 10px;
    color: black;
  `}
`
const Plain = styled.div`
  margin-top: 20px;
  display: flex;
`

const SwitchForm = styled.div`
  margin-left: 5px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #f03e3e;
  }
`
