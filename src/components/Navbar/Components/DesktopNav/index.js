import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../hooks'

export const DesktopNav = () => {
  return (
    <Container>
      <Logo
        alt="Logo"
        src="https://avatars1.githubusercontent.com/u/72261383?s=200&v=4"
      />
      {navig.map((item) => {
        return (
          //Uncomment whenever the links are ready
          <Item>
            <NavigationItem
              isFocused={isFocused === item.id}
              onMouseEnter={() => setIsFocused(item.id)}
              onMouseLeave={() => setIsFocused()}
              onClick={() => setActiveHeader(item.id)}
            >
              {navig[item.id].label}
            </NavigationItem>
          </Item>
        )
      })}
      <Item>
        <NavigationItem>
          <Searching
            isSearching={!isSearching}
            searchBar={!searchBar}
            onMouseEnter={() => setIsSearching(true)}
            onMouseLeave={() => setIsSearching(false)}
            onClick={() => setSearchBar(!searchBar)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Searching>
        </NavigationItem>
      </Item>
      <Button isRegular>
        <strong>Post</strong>
      </Button>
    </Container>
  )
}

export const Container = styled.div`
  @media (max-width: 968px) {
    display: none;
  }
`
