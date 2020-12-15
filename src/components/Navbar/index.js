import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../hooks'
import { MobileNav } from './Components'
import { DesktopNav } from './Components'
import { SearchBar } from './Components'
import { Header } from './Components'

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
      label: 'Contacts',
      description: 'How to reach us',
      href: '/contact',
    },
  ]

  const [activeHeader, setActiveHeader] = useState(0)
  const [searchBar, setSearchBar] = useState(false)

  return (
    <>
      <MobileNav />
      <DesktopNav
        showSearchBar={setSearchBar}
        data={navig}
        setActiveHeader={setActiveHeader}
      />
      <SearchBar showSearch={searchBar} showSearchBar={setSearchBar} />
      <Header data={navig} isActive={activeHeader} />
    </>
  )
}
