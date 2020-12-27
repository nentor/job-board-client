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
      <NewAd></NewAd>
    </>
  )
}
