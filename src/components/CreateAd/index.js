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
  const data = [
    {
      children: [
        {
          isRequired: true,
          type: 'text',
          meta: {
            description: 'Job description',
            header: 'Job Title',
            name: 'jobTitle',
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
            name: 'category',
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
            name: 'jobType',
          },
          children: ['gosho', 'tosho', 'dancho'],
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
            name: 'description',
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
            name: 'photo',
          },
        },
      ],
    },
  ]

  const fields = {}

  for (let row of data) {
    for (let field of row.children) {
      fields[field.meta.name] = ''
    }
  }

  const { formState, setFormState, handleChange, handleSubmit } = useForm(
    fields
  )

  return (
    <>
      <Reset />
      <NewAd>
        {data.map(({ children }, key) => {
          return (
            <Flex justifyBetween alignCenter key={key}>
              {children &&
                children.map((child, key, arr) => {
                  const { isRequired, meta, children } = child

                  return (
                    <FlexItem basis={arr.length > 1 ? '50%' : '100%'} key={key}>
                      <Margin
                        left={
                          arr.length > 1 && key === arr.length - 1 ? '4' : '0'
                        }
                      >
                        {child.type === 'text' && (
                          <InputGroup
                            isRequired={isRequired}
                            title={meta.header}
                            inputText={meta.description}
                            onChange={handleChange}
                            value={formState[meta.name]}
                          />
                        )}
                        {child.type === 'number' && (
                          <InputGroup
                            isRequired={isRequired}
                            title={meta.header}
                            inputText={meta.description}
                            onChange={handleChange}
                            value={formState[meta.name]}
                          />
                        )}
                        {child.type === 'description' && (
                          <TextEditor
                            isRequired={isRequired}
                            title={meta.header}
                            value={formState[meta.name]}
                            setFormState={setFormState}
                            name={formState[meta.name]}
                          />
                        )}
                        {child.type === 'photo' && <FileUploader />}
                        {child.type === 'select' && (
                          <SelectGroup
                            isRequired={isRequired}
                            title={meta.header}
                            options={children}
                            inputText={meta.description}
                            value={formState[meta.name]}
                            onChange={handleChange}
                          />
                        )}
                        {child.type === 'radio' && (
                          <RadioGroup
                            isRequired={isRequired}
                            title={meta.header}
                            choices={children}
                            name={formState[meta.name]}
                            value={children[0]}
                            onChange={handleChange}
                          />
                        )}
                      </Margin>
                    </FlexItem>
                  )
                })}
            </Flex>
          )
        })}
        <Margin top={3}>
          <Button>Post job listing</Button>
        </Margin>
      </NewAd>
    </>
  )
}
