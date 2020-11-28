import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Flex, { FlexItem } from 'styled-flex-component'

import {
  InputField,
  NewListing,
  RequiredCircle,
  TextEditor,
  Title,
} from './Components'

const Reset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }
`

export const CreateJob = () => {
  return (
    <>
      <Reset />
      <NewListing>
        <Flex justifyBetween alignCenter>
          <FlexItem>
            <Title>First, tell us about the position</Title>
          </FlexItem>
          <FlexItem>
            <p>
              Required Fields <RequiredCircle />
            </p>
          </FlexItem>
        </Flex>
      </NewListing>
    </>
  )
}
