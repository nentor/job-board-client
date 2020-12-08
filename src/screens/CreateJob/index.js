import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Flex, { FlexItem } from 'styled-flex-component'

import {
  InputGroup,
  NewListing,
  RequiredCircle,
  TextEditor,
  Title,
  SelectGroup,
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
        <InputGroup
          title="Job Title"
          inputText="Example: “Senior Designer”.   Titles must describe one position."
          isRequired={true}
        />
        <Flex>
          <FlexItem>
            <SelectGroup
              title="Category"
              isRequired={true}
              options={[
                'Design',
                'Programming',
                'Customer Support',
                'Copywriting',
                'DevOps and SysAdmin',
                'Sales and Marketing',
                'Business, Management and Finance',
                'Product',
                'All Other Remote',
              ]}
            />
          </FlexItem>
          <FlexItem></FlexItem>
        </Flex>
      </NewListing>
    </>
  )
}
