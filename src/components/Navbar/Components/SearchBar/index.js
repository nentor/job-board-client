import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useClickOutside } from '../../../../hooks'

export const SearchBar = ({ showSearch, showSearchBar }) => {
  // const searchContainerRef = useRef(null)
  // useClickOutside(searchContainerRef, () => showSearchBar(false))

  // if (showSearch) {
  return <Search showSearch={showSearch} placeholder="Search Here" />
  // } else return <></>
}

export const Search = styled.input`
  display: ${(props) => (props.showSearch ? 'block' : 'none')};
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

  ${(props) =>
    props.isMobile &&
    `
    box-shadow: none;
    display: block;
  font-size: 16px;
  width: 93%;
  margin: 1rem;
  padding: 4px;

  `}
`
