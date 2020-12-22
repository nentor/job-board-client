import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faItalic,
  faBold,
  faStrikethrough,
  faLink,
  faHeading,
  faQuoteRight,
  faCode,
  faListUl,
  faListOl,
} from '@fortawesome/free-solid-svg-icons'

const ToolRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const ToolGroup = styled.div`
  display: flex;
  border: 1px solid #bbb;
  border-top-color: #ccc;
  border-radius: 3px;
`

const ToolButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  outline: none;
  border: none;
`

export const Toolbar = () => {
  const buttons = [
    [
      {
        icon: faBold,
      },
      {
        icon: faItalic,
      },
      {
        icon: faStrikethrough,
      },
      {
        icon: faLink,
      },
    ],
    [
      {
        icon: faHeading,
      },
      {
        icon: faQuoteRight,
      },
      {
        icon: faCode,
      },
      {
        icon: faListUl,
      },
      {
        icon: faListOl,
      },
    ],
    [{}, {}],
  ]

  return (
    <div>
      <ToolRow>
        {buttons.map((buttons) => (
          <ToolGroup>
            {buttons.map((button) => (
              <ToolButton>
                <FontAwesomeIcon icon={button.icon} />
              </ToolButton>
            ))}
          </ToolGroup>
        ))}
      </ToolRow>
    </div>
  )
}
