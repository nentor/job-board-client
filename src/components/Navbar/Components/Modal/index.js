import React, { useState, useRef, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from './Components/Header'
import { AuthModalSignIn } from './Components/AuthModalSignIn'
import { AuthModalLogIn } from './Components/AuthModalLogIn/index'
import { Socials } from './Components/Socials'
import { Footer } from './Components/Footer'
import { useClickOutside } from '../../../../hooks'

import { Portal } from '../Portal'

export const Modal = ({ handleClose }) => {
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      handleClose()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction)

    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  })

  const modalContainerRef = useRef(null)
  useClickOutside(modalContainerRef, handleClose)

  const [activeForm, setActiveForm] = useState('SignIn')
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <Portal>
        <Container>
          <Wrapper ref={modalContainerRef}>
            <MainForm>
              <Header />
              <FlexMain>
                {activeForm == 'SignIn' && (
                  <AuthModalSignIn
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                )}
                {activeForm == 'LogIn' && (
                  <AuthModalLogIn
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                )}
                <Socials />
              </FlexMain>
            </MainForm>
            <Footer
              handleClose={handleClose}
              activeForm={activeForm}
              setLogIn={() => setActiveForm('LogIn')}
              setSignIn={() => setActiveForm('SignIn')}
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
  @media (max-width: 968px) {
  } ;
`
const Wrapper = styled.div`
  margin-bottom: 15rem;
  display: flex;
  font-size: 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: #fff;
  padding: 2rem;
  box-shadow: 0 1rem 3rem #000;
  border-radius: 1rem;
  @media (max-width: 968px) {
    height: 100vh;
    width: 100vh;
    margin: 0;
  } ;
`
const MainForm = styled.form``
const FlexMain = styled.div`
  display: flex;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`
