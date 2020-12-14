import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../../../hooks'

export const MobileNav = () => {
  const [expand, setExpand] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const expandedContainerRef = useRef(null)

  useClickOutside(expandedContainerRef, () => setExpand(false))

  return (
    <>
      <Logo
        onClick={() => setIsVisible(!isVisible)}
        isMobile
        alt="Logo"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_469226.png&f=1&nofb=1"
      />
      {isVisible && (
        <>
          <Container isActive={isVisible}>
            <SearchBar placeholder="Search Here..." />
            <Item ref={expandedContainerRef} isMobile>
              <MobileNavItem onClick={() => setExpand(!expand)}>
                Categories&emsp;
                <FontAwesomeIcon icon={faAngleDown} />
              </MobileNavItem>
            </Item>
            <CategoriesExpand isActive={expand}>
              <Item isMobile>
                <MobileNavItem isExtended>
                  Mobiles&emsp;
                  <FontAwesomeIcon icon={faAngleRight} />
                </MobileNavItem>
              </Item>
              <Item isMobile>
                <MobileNavItem isExtended>
                  PC&emsp;
                  <FontAwesomeIcon icon={faAngleRight} />
                </MobileNavItem>
              </Item>
              <Item isMobile>
                <MobileNavItem isExtended>
                  Laptops&emsp;
                  <FontAwesomeIcon icon={faAngleRight} />
                </MobileNavItem>
              </Item>
            </CategoriesExpand>

            <Item isMobile>
              <MobileNavItem>
                How to post an ad&emsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>

            <Item isMobile>
              <MobileNavItem>
                About us&emsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>
            <Item isMobile>
              <MobileNavItem>
                Community&emsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>
          </Container>
        </>
      )}
    </>
  )
}

export const Container = styled.div`
  display: block;
  @media (min-width: 968px) {
    display: none;
  }
`
export const Logo = styled.img`
  &:hover {
    cursor: pointer;
  }
  padding: 10px;
  height: 50px;
  width: 50px;
  margin-right: auto;
  float: left;
`

export const MobileNavig = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  background: white;
  width: 100%;
`

export const MobileNavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  background: inherit;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
    color: red;
  }
  width: 100%;
  height: 3.5rem;
  border: none;
  &:focus {
    outline: none;
  }
  margin: 0 0rem;
  padding: 0;
  border-top: 1px solid #ccc;
  ${(props) =>
    props.isExtended &&
    `
    height: 3rem;
    width: 97%;
    margin: auto;
    background: #fee;
  `}
`

// Need to add expand containers for all the menu items
export const CategoriesExpand = styled.div`
  display: ${(props) => (props.isActive == 1 ? 'block' : 'none')};
  background: inherit;
`

export const SearchBar = styled.input`
  position: relative;
  font-size: 20px;
  width: 93%;
  margin: 1rem;
  height: auto;
  border: none;
  box-shadow: 0 1px 5px rgba(10, 10, 10, 0.3);
  float: left;
  &:active {
    border: none;
  }
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #ddd;
  }
`
export const Item = styled.li`
  padding: 0px;
  list-style: none;
`
