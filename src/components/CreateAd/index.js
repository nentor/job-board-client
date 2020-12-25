import React from 'react'

import { createGlobalStyle } from 'styled-components'

import {
  InputGroup,
  NewListing,
  RequiredCircle,
  TextEditor,
  Title,
  SelectGroup,
  RadioGroup,
  FileUploader,
  Button,
} from './Components'

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
`

export const CreateAd = () => {
  return (
    <>
      <Reset />
      <NewListing>
        <Flex justifyBetween alignCenter>
          <FlexItem>
            <Title>First, tell us about the position</Title>
          </FlexItem>
          <FlexItem>
            <span className="requiredFields">
              Required Fields <RequiredCircle />
            </span>
          </FlexItem>
        </Flex>

        <InputGroup
          title="Job Title"
          inputText="Example: “Senior Designer”.   Titles must describe one position."
          isRequired={true}
        />

        <Flex>
          <FlexItem basis="50%">
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
          <FlexItem basis="50%">
            <Margin left={4}>
              <RadioGroup
                title="Job Type"
                choices={[{ value: 'Full-Time' }, { value: 'Contract' }]}
                isRequired={true}
              />
            </Margin>
          </FlexItem>
        </Flex>

        <Flex>
          <FlexItem basis="50%">
            <InputGroup
              title="Company HQ"
              inputText="Example: “Chicago, IL”,   “Stockholm, Sweden”"
              isRequired={true}
            />
          </FlexItem>
          <FlexItem basis="50%">
            <Margin left={4}>
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
            </Margin>
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

        <Flex>
          <FlexItem basis="50%">
            <InputGroup
              title="Company's Website URL"
              isRequired={true}
              inputText="Example: https://mybusiness.com/"
            />
          </FlexItem>
          <FlexItem basis="50%">
            <Margin left={4}>
              <InputGroup
                title="Email"
                isRequired={true}
                inputText="We’ll send your receipt and confirmation email here."
              />
            </Margin>
          </FlexItem>
        </Flex>

        <TextEditor title="Company Description" />

        <Margin top={3}>
          <Button>Post job listing</Button>
        </Margin>
      </NewListing>
    </>
  )
}
