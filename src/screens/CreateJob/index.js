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
  FileUploader,
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

        <InputGroup
          title="How to Apply"
          inputText="Link to Application page or Email address"
          isRequired={true}
        />

        <TextEditor title="Job Description" isRequired={true} />

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

        <InputGroup
          title="Company Name"
          isRequired={true}
          inputText="Enter your company or organization’s name."
        />

        <InputGroup
          title="Company Statement"
          inputText="Enter your company or organization’s mission statement. This will be displayed on your company’s profile."
        />

        <FileUploader
          title="Logo"
          inputText="It’s highly recommended to use your Twitter or Facebook avatar. Optional — Your company logo will appear at the top of your listing."
        />
      </NewListing>
    </>
  )
}
