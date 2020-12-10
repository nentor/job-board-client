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
  RadioGroup,
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
        <Flex>
          <FlexItem>
            <InputGroup
              title="Job Title"
              inputText="Example: “Senior Designer”.   Titles must describe one position."
              isRequired={true}
            />
          </FlexItem>
        </Flex>
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
          <FlexItem>
            <RadioGroup
              title="Job Type"
              choices={[{ value: 'Full Name' }, { value: 'Contract' }]}
              isRequired={true}
            />
          </FlexItem>
        </Flex>
        <Flex>
          <FlexItem>
            <InputGroup
              title="Company HQ"
              inputText="Example: “Chicago, IL”,   “Stockholm, Sweden”"
              isRequired={true}
            />
          </FlexItem>
          <FlexItem>
            <SelectGroup
              title="Regional Restrictions"
              isRequired={true}
              options={[
                'Anywhere (100% Remote) Only',
                'USA Only',
                'North America Only',
                'Europe Only',
                'Americas Only',
                'Canada Only',
                'EMEA Only',
                'Asia Only',
                'Africa Only',
                "Other (don't specify)",
              ]}
            />
          </FlexItem>
        </Flex>
        <Flex>
          <FlexItem>
            <InputGroup
              title="How to Apply"
              inputText="Link to Application page or Email address"
              isRequired={true}
            />
          </FlexItem>
        </Flex>
        <Flex>
          <FlexItem>
            <TextEditor title="Job Description" isRequired={true} />
          </FlexItem>
        </Flex>
        <Flex column>
          <FlexItem>
            <Title>Tell Us More About Your Company</Title>
          </FlexItem>
          <FlexItem>
            <p>
              Posted before? Just enter your email and logo, all other info will
              be pulled in from your last position!
            </p>
          </FlexItem>
        </Flex>
        <Flex>
          <FlexItem>
            <InputGroup title="Company Name" isRequired={true} />
          </FlexItem>
        </Flex>
      </NewListing>
    </>
  )
}
