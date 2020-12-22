import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from './Components/Header'
import { AuthModal } from './Components/AuthModal'
import { Socials } from './Components/Socials'
import { Footer } from './Components/Footer'

import { Portal } from '../Portal'

export const Modal = ({ handleClose }) => {
  const [logIn, setLogIn] = useState(false)
  return (
    <>
      <Portal>
        <Container>
          <Wrapper>
            <MainForm>
              <Header />
              <FlexMain>
                <AuthModal logIn={logIn} />
                <Socials />
              </FlexMain>
            </MainForm>
            <Footer
              handleClose={handleClose}
              logIn={logIn}
              setLogIn={setLogIn}
            />
          </Wrapper>
        </Container>
      </Portal>
    </>
  )
}

const Container = styled.div`
  display: flex;
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

const MainForm = styled.form``
const FlexMain = styled.div`
  display: flex;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`
