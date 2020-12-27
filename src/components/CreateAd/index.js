import React, { useEffect } from 'react'

import {
  InputGroup,
  NewAd,
  RequiredIndicator,
  TextEditor,
  Title,
  SelectGroup,
  RadioGroup,
  FileUploader,
  Button,
} from './Components'

import { Flex, FlexItem } from '../../utilities/Flex'
import { Margin } from '../../utilities/Margin'
import { Reset } from '../../components/Reset'
import { useForm } from '../../hooks/useForm'

export const CreateAd = () => {
  const { formState, setFormState, handleChange, handleSubmit } = useForm({
    jobTitle: '',
    category: '',
    jobType: 'Full-Time',
    companyHQ: '',
    regionalRestrictions: '',
    howToApply: '',
    jobDescription: '',
    companyName: '',
    companyStatement: '',
    logo: '',
    companyWebsiteURL: '',
    email: '',
    companyDescription: '',
  })

  useEffect(() => {
    console.log(formState)
  }, [formState])

  const data = [
    {
      children: [
        {
          isRequired: true,
          type: 'text',
          meta: {
            description: 'Job description',
            header: 'Job Title',
          },
        },
      ],
    },
    {
      children: [
        {
          isRequired: true,
          type: 'select',
          meta: {
            description: 'Job description',
            header: 'Job Title',
          },
          children: [
            'gosho',
            'gosho',
            'gosho',
            'gosho',
            'gosho',
            'gosho',
            'gosho',
          ],
        },
        {
          isRequired: true,
          type: 'radio',
          meta: {
            description: 'Job description',
            header: 'Job Title',
          },
          children: ['gosho', 'gosho'],
        },
      ],
    },
    {
      children: [
        {
          isRequired: true,
          type: 'description',
          meta: {
            description: 'Job description',
            header: 'Job Title',
          },
        },
      ],
    },
    {
      children: [
        {
          isRequired: true,
          type: 'photo',
          meta: {
            description: 'Job description',
            header: 'Job Title',
          },
        },
      ],
    },
  ]

  return (
    <>
      <Reset />
      <NewAd>
        <Flex justifyBetween alignCenter>
          <FlexItem>
            <Title>First, tell us about the position</Title>
          </FlexItem>
          <FlexItem>
            <span className="requiredFields">
              Required Fields <RequiredIndicator />
            </span>
          </FlexItem>
        </Flex>

        <InputGroup
          title="Job Title"
          inputText="Example: “Senior Designer”.   Titles must describe one position."
          isRequired={true}
          value={formState.jobTitle}
          onChange={handleChange}
          name="jobTitle"
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
              value={formState.category}
              onChange={handleChange}
              name="category"
            />
          </FlexItem>
          <FlexItem basis="50%">
            <Margin left={4}>
              <RadioGroup
                title="Job Type"
                choices={[{ value: 'Full-Time' }, { value: 'Contract' }]}
                isRequired={true}
                value={formState.jobType}
                onChange={handleChange}
                name="jobType"
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
              value={formState.companyHQ}
              onChange={handleChange}
              name="companyHQ"
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
                value={formState.regionalRestrictions}
                onChange={handleChange}
                name="regionalRestrictions"
              />
            </Margin>
          </FlexItem>
        </Flex>

        <InputGroup
          title="How to Apply"
          inputText="Link to Application page or Email address"
          isRequired={true}
          value={formState.howToApply}
          onChange={handleChange}
          name="howToApply"
        />

        <TextEditor
          title="Job Description"
          isRequired={true}
          value={formState.jobDescription}
          setFormState={setFormState}
          name="jobDescription"
        />

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
          value={formState.companyName}
          onChange={handleChange}
          name="companyName"
        />

        <InputGroup
          title="Company Statement"
          inputText="Enter your company or organization’s mission statement. This will be displayed on your company’s profile."
          value={formState.companyStatement}
          onChange={handleChange}
          name="companyStatement"
        />

        <FileUploader
          title="Logo"
          inputText="It’s highly recommended to use your Twitter or Facebook avatar. Optional — Your company logo will appear at the top of your listing."
          value={formState.logo}
          onChange={handleChange}
          name="logo"
        />

        <Flex>
          <FlexItem basis="50%">
            <InputGroup
              title="Company's Website URL"
              isRequired={true}
              inputText="Example: https://mybusiness.com/"
              value={formState.companyWebsiteURL}
              onChange={handleChange}
              name="companyWebsiteURL"
            />
          </FlexItem>
          <FlexItem basis="50%">
            <Margin left={4}>
              <InputGroup
                title="Email"
                isRequired={true}
                inputText="We’ll send your receipt and confirmation email here."
                value={formState.email}
                onChange={handleChange}
                name="email"
              />
            </Margin>
          </FlexItem>
        </Flex>

        <TextEditor
          title="Company Description"
          value={formState.companyDescription}
          setFormState={setFormState}
          name="companyDescription"
        />

        <Margin top={3}>
          <Button>Post job listing</Button>
        </Margin>
      </NewAd>
    </>
  )
}
