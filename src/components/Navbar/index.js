import React, { useState, useRef } from 'react'
import {
  MobileNav,
  SearchBar,
  Header,
  DesktopNav,
  Modal,
  ModalLogIn,
} from './Components'

export const Navbar = () => {
  const navig = [
    {
      id: 0,
      label: 'Home',
      description: 'Welcome to OverReacted',
      href: '/home',
    },
    {
      id: 1,
      label: 'Categories',
      description: 'Choose a category',
      href: '/categories',
    },
    {
      id: 2,
      label: 'Contacts',
      description: 'How to reach us',
      href: '/contact',
    },
  ]

  const [activeHeader, setActiveHeader] = useState(0)
  const [searchBar, setSearchBar] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [logIn, setLogIn] = useState(false)

  return (
    <>
      {signIn && (
        <ModalLogIn
          handleClose={() => setSignIn(false)}
          switchToSignIn={() => setLogIn(false)}
          logged={logIn}
        />
      )}
      {signIn && (
        <Modal
          switchToLogIn={() => setLogIn(true)}
          handleClose={() => setSignIn(false)}
          signed={logIn}
        />
      )}

      <MobileNav />
      <DesktopNav
        showSearchBar={setSearchBar}
        data={navig}
        setActiveHeader={setActiveHeader}
        signIn={signIn}
        setSignIn={setSignIn}
      />
      <SearchBar showSearch={searchBar} showSearchBar={setSearchBar} />
      <Header data={navig} isActive={activeHeader} />
    </>
  )
}
