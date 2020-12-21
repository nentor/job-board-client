import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Portal } from '../Portal'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Modal = ({ handleClose, switchToLogIn, signed }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <Portal>
        <Container isActive={!signed}>
          <Wrapper>
            <Header>
              <Title>Join OverReacted for Free</Title>
              <Description>
                Access thousands of products or offer one yourself!
              </Description>
            </Header>
            <LogIn>
              <FlexMain>
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

                    <FormGroup>
                      <Label>Password</Label>
                      <br />
                      <Input type="password"></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>Confirm Password</Label>
                      <br />

                      <Input type="password"></Input>
                    </FormGroup>
                  </Credentials>

                  <Button signIn>Sign In</Button>
                  <Terms>
                    <Customcheckbox
                      isChecked={isChecked}
                      onClick={() => setIsChecked(!isChecked)}
                    >
                      {/* <Checkmark isChecked={isChecked} /> */}
                    </Customcheckbox>
                    I Agree with the terms and conditions
                  </Terms>
                </Form>
                <Socials>
                  <SocialsTitle>Or Sign In In with your Socials</SocialsTitle>
                  <SocialButton facebook>
                    <FontAwesomeIcon icon={faFacebook} />
                    <BtnText>Facebook</BtnText>
                  </SocialButton>
                  <SocialButton google>
                    <FontAwesomeIcon icon={faGoogle} />
                    <BtnText>Google</BtnText>
                  </SocialButton>
                </Socials>
              </FlexMain>
            </LogIn>
            <Flex column>
              <Plain>
                Already a member?
                <SwitchForm onClick={switchToLogIn}>Log In</SwitchForm>
              </Plain>
              <Button close onClick={handleClose}>
                ×
              </Button>
            </Flex>
          </Wrapper>
        </Container>
      </Portal>
    </>
  )
}

const Container = styled.div`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  width: 100vw;
  height: 100vh;
  background: rgba(250, 250, 250, 0.6);
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
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
const FlexMain = styled.div`
  display: flex;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`
const Flex = styled.div`
  display: flex;
  ${(props) =>
    props.column &&
    `
  flex-direction: column;
  align-items: center;
  `}
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
  width: 270px;
  font-size: 16px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
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
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  border-left: 1px solid #e5e5e5;
  margin-left: 40px;
  @media (max-width: 968px) {
    padding: 20px 0 0 0;
    margin: 20px 0 0 0;
    border: none;
    border-top: 1px solid #e5e5e5;
  }
`
const SocialsTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`
const SocialButton = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  width: 8.5rem;
  padding: 12px 12px 10px;
  color: white;
  font-weight: 400;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
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
  @media (max-width: 968px) {
    width: 70%;
  }
`
const BtnText = styled.div`
  padding-left: 2.5rem;
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
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
  ${(props) =>
    props.signIn &&
    `
    width: 280px;
    margin-top: 10px;
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
const Terms = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
`

const Customcheckbox = styled.div`
  transition: all 0.3s;
  position: inherit;
  cursor: pointer;
  top: 0;
  left: 0;
  background: #eee;
  ${(props) =>
    props.isChecked &&
    `
    background: #f03e3e;
    transform: rotate(45deg);
  `}
  height: 15px;
  width: 15px;
  margin: 5px;
  border: 1px solid #ccc;
  &:hover {
    background: ${(props) => (props.isChecked ? '#d01e1e' : '#ccc')};
  }
`
// const Checkmark = styled.div`
//   opacity: ${(props) => (props.isChecked ? 1 : 0)};
//   position: fixed;
//   top: 28rem;
//   left: 9.5rem;
//   width: 3px;
//   height: 7px;
//   border: solid white;
//   border-width: 0 3px 3px 0;
//   transform: rotate(45deg);
//   @media (max-width: 968px) {
//     top: 23.6rem;
//     left: 15.8rem;
//   }
// `
