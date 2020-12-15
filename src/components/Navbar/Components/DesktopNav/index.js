import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../../../hooks'

export const DesktopNav = ({ showSearchBar, setActiveHeader, data }) => {
  const searchContainerRef = useRef(null)
  useClickOutside(searchContainerRef, () => showSearchBar(false))

  return (
    <Container ref={searchContainerRef}>
      <Logo
        alt="Logo"
        src="https://avatars1.githubusercontent.com/u/72261383?s=200&v=4"
      />
      {data.map((item) => {
        return (
          <Item>
            <NavigationItem onClick={() => setActiveHeader(item.id)}>
              {data[item.id].label}
            </NavigationItem>
          </Item>
        )
      })}
      <Item>
        <NavigationItem>
          <Searching onClick={() => showSearchBar(true)}>
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
  display: flex;
  list-style: none;
  justify-content: flex-end;
  font-size: 22px;
  margin: 0;
  @media (max-width: 968px) {
    display: none;
  }
`
export const Logo = styled.img`
  padding: 10px;
  height: 50px;
  width: 50px;
  margin-right: auto;
  float: left;
`

export const Item = styled.li`
  padding: 10px 3px;
  list-style: none;
`
export const NavigationItem = styled.button`
  background-color: inherit;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  &:hover {
    color: red;
  }
  overflow: hidden;
`
export const Searching = styled(NavigationItem)`
  display: block;
  padding: 0;
  color: black;
  &:hover {
    color: red;
  }
`
const Button = styled.button`
  margin: 1rem;
  background: #f03e3e;
  color: white;
  height: 2rem;
  border: none;
  border-radius: 2px;
  transition: 0.2s all;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
  ${(props) =>
    props.isFullWidth &&
    `
  width: 10rem;
  `}
  ${(props) =>
    props.isRegular &&
    `
  width: 5rem;
  `}
`
