import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faAngleRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../hooks'

//

export const Navbar = () => {
  const [activeHeader, setActiveHeader] = useState(0)
  const [isFocused, setIsFocused] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [expandMobile, setExpandMobile] = useState(false)

  const searchContainerRef = useRef(null)

  useClickOutside(searchContainerRef, () => setSearchBar(false))

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

  return (
    <div>
      <Container ref={searchContainerRef}>
        <div>
          <Logo
            alt="Logo"
            src="https://avatars1.githubusercontent.com/u/72261383?s=200&v=4"
          />
          <Logo
            isMobile
            alt="Logo"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_469226.png&f=1&nofb=1"
          />
          <Button isLogo onClick={() => setMobile(!mobile)}></Button>
        </div>
        <MobileNavig isActive={mobile}>
          <SearchBar isMobile isActive={mobile} placeholder="Search Here..." />
          <Item isMobile>
            <MobileNavItem
              isFocused={isFocused === 1}
              onMouseEnter={() => setIsFocused(1)}
              onMouseLeave={() => setIsFocused(0)}
              onClick={() => setExpandMobile(!expandMobile)}
            >
              Categories&emsp;
              <FontAwesomeIcon icon={faAngleDown} />
            </MobileNavItem>
          </Item>
          <CategoriesExpand isActive={expandMobile}>
            <Item isMobile>
              <MobileNavItem
                isExtended
                isFocused={isFocused === 5}
                onMouseEnter={() => setIsFocused(5)}
                onMouseLeave={() => setIsFocused(0)}
              >
                Mobiles&emsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>
            <Item isMobile>
              <MobileNavItem
                isExtended
                isFocused={isFocused === 6}
                onMouseEnter={() => setIsFocused(6)}
                onMouseLeave={() => setIsFocused(0)}
              >
                PC&emsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>
            <Item isMobile>
              <MobileNavItem
                isExtended
                isFocused={isFocused === 7}
                onMouseEnter={() => setIsFocused(7)}
                onMouseLeave={() => setIsFocused(0)}
              >
                Laptops&emsp;
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>
          </CategoriesExpand>

          <Item isMobile>
            <MobileNavItem
              isFocused={isFocused === 2}
              onMouseEnter={() => setIsFocused(2)}
              onMouseLeave={() => setIsFocused(0)}
            >
              How to post an ad&emsp;
              <FontAwesomeIcon icon={faAngleRight} />
            </MobileNavItem>
          </Item>

          <Item isMobile>
            <MobileNavItem
              isFocused={isFocused === 3}
              onMouseEnter={() => setIsFocused(3)}
              onMouseLeave={() => setIsFocused(0)}
              onClick={() => setExpandMobile(3)}
            >
              About us&emsp;
              <FontAwesomeIcon icon={faAngleRight} />
            </MobileNavItem>
          </Item>
          <Item isMobile>
            <MobileNavItem
              isFocused={isFocused === 4}
              onMouseEnter={() => setIsFocused(4)}
              onMouseLeave={() => setIsFocused(0)}
              onClick={() => setExpandMobile(4)}
            >
              Community&emsp;
              <FontAwesomeIcon icon={faAngleRight} />
            </MobileNavItem>
          </Item>
        </MobileNavig>

        <Navig>
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
        </Navig>
        <SearchBar isActive={searchBar} placeholder="Search Here" />
      </Container>

      <Header>
        <h1>{navig[activeHeader].label}</h1>
        <Description>
          {navig[activeHeader].description} <br />
          <Button isFullWidth>
            <strong>Start Searching</strong>
          </Button>
          {/* <TestButton isRegular>Green</TestButton> */}
        </Description>
      </Header>
    </div>
  )
}

// const Test = (props) => {
//   return <div>clicked: {props.setIsOpen}</div>
// }

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
  box-shadow: ${(props) =>
    props.isFocused > 0 ? '0 1px 5px rgba(10, 10, 10, 0.8)' : 'none'};
  color: ${(props) => (props.isFocused > 0 ? 'red' : 'black')};
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

export const Container = styled.div`
  @media (max-width: 768px) {
    box-shadow: none;
    &::marker {
      display: none;
    }
  }
  background: white;
  margin: 0;
  @media (min-width: 768px) {
    position: fixed;
  }
  top: 0;
  width: 100%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`

export const Logo = styled.img`
  padding: 10px;
  height: 50px;
  width: 50px;
  margin-right: auto;
  float: left;
  @media (max-width: 768px) {
    display: none;
  }
  ${(props) =>
    props.isMobile &&
    `
    @media (min-width: 768px) {
      display:none;
    }
  @media (max-width: 768px) {
    display:block;
  }
  `}
`

export const Navig = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  list-style: none;
  justify-content: flex-end;
  font-size: 22px;
  margin: 0;
`
export const Item = styled.li`
  padding: 10px 3px;
  list-style: none;
  ${(props) =>
    props.isMobile &&
    `
  padding:0px;
  `}
`

export const NavigationItem = styled.button`
  background-color: ${(props) => (props.isFocused ? '#eee' : 'inherit')};
  color: ${(props) => (props.isFocused ? 'red' : 'black')};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  overflow: hidden;
`

export const Searching = styled(NavigationItem)`
  display: block;
  padding: 0;
  color: ${(props) => (props.isSearching ? 'black' : 'red')};
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
  ${(props) =>
    props.isLogo &&
    `
    display:none;
    @media (max-width: 768px) {
    display:block;
    position: inherit;
    transform: translate(-110%, 20%);
    background-color: transparent;
    font-size: 16px;
    padding: 25px 28.5px;
    cursor: pointer;
    border-radius: 5px;
  }
  `}
`

export const SearchBar = styled.input`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  position: relative;
  width: 100%;
  font-size: 15px;
  margin: 0px 0px 10px 60px;
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
  ${(props) =>
    props.isMobile &&
    `
    font-size: 20px;
    margin: 1rem;
    width: 93%;
  `}

  ::placeholder {
    color: #ddd;
  }
`

export const Header = styled.div`
  font-size: 28px;
  color: black;
  margin-top: 5rem;
  padding: 50px;
  text-align: center;
`
export const Description = styled.div`
  font-size: 24px;
`
