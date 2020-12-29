import React from 'react'

import {
  InputGroup,
  NewAd,
  TextEditor,
  SelectGroup,
  RadioGroup,
  ImgUpload,
  Button,
} from './Components'

import { Flex, FlexItem } from '../../utilities/Flex'
import { Margin } from '../../utilities/Margin'
import { Reset } from '../../components/Reset'
import { useForm } from '../../hooks/useForm'

export const CreateAd = ({ data }) => {
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
        {data?.map(({ children }, key) => {
          return (
            <Flex justifyBetween alignCenter key={key}>
              {children?.map((child, key, arr) => {
                const { isRequired, meta, children } = child

                return (
                  <FlexItem basis={arr.length > 1 ? '50%' : '100%'} key={key}>
                    <Margin
                      left={
                        arr.length > 1 && key === arr.length - 1 ? '4' : '0'
                      }
                    >
                      {(child.type === 'text' || child.type === 'number') && (
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
                          inputText={meta.description}
                        />
                      )}
                      {child.type === 'photo' && (
                        <ImgUpload
                          title={meta.header}
                          isRequired={isRequired}
                          inputText={meta.description}
                        />
                      )}
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
                          name={meta.name}
                          value={formState[meta.name] || children[0]}
                          onChange={handleChange}
                          inputText={meta.description}
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
