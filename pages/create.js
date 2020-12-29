import React from 'react'
import { CreateAd } from '../src/components'

const CreateAdPage = ({ data }) => {
  return <CreateAd data={data} />
}

export async function getStaticProps() {
  const mockData = [
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

  return {
    props: {
      data: mockData,
    },
  }
}
export default CreateAdPage
