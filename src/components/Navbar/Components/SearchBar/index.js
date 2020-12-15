import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useClickOutside } from '../../../../hooks'

export const SearchBar = ({ showSearch, showSearchBar }) => {
  // const searchContainerRef = useRef(null)
  // useClickOutside(searchContainerRef, () => showSearchBar(false))

  console.log('Search status: ', showSearch) // for debugging clickOutside hook
  if (showSearch) {
    return <Search placeholder="Search Here" />
  } else return <></>
}

export const Search = styled.input`
  display: block;
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
  ::placeholder {
    color: #ddd;
  }

  @media (max-width: 968px) {
    display: none;
  }
`
