import React from 'react'
import styled from 'styled-components'
import { Post } from './Components'

const mockData = [
  {
    user: 'RandomUser',
    title: 'Нужда от компютър',
    contact: '0888888888',
    city: 'гр. Пловдив',
    category: 'computer',
    isNew: true,
  },
  {
    user: 'Sasho Dimitrov',
    title: 'Нужда от телефон',
    contact: '0999999999',
    city: 'гр. София',
    category: 'phone',
    isNew: false,
  },
  {
    user: 'Petur Raychev',
    title: 'Нужда от таблет',
    contact: '077777777',
    city: 'гр. София',
    category: 'tablet',
    isNew: true,
  },
  {
    user: 'RandomUser',
    title: 'Нужда от компютър',
    contact: '0888888888',
    city: 'гр. Пловдив',
    category: 'computer',
    isNew: true,
  },
  {
    user: 'Sasho Dimitrov',
    title: 'Нужда от телефон',
    contact: '0999999999',
    city: 'гр. София',
    category: 'phone',
    isNew: false,
  },
  {
    user: 'Petur Raychev',
    title: 'Нужда от таблет',
    contact: '077777777',
    city: 'гр. София',
    category: 'tablet',
    isNew: true,
  },
]

export const AdList = () => {
  return (
    <ListContainer>
      <Article>
        <List>
          {mockData.map((adPost) => {
            return <Post adPost={adPost}></Post>
          })}
        </List>
      </Article>
    </ListContainer>
  )
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Article = styled.article`
  clear: both;
  margin-bottom: 50px;
  text-size-adjust: 100%;
`

const ListContainer = styled.div`
  margin: 0 auto;
  max-width: 950px;

  @media only screen and (max-device-width: 480px) {
    width: auto;
  }

  @media only screen and (max-device-width: 1024px) {
    max-width: 900px;
  }

  @media only screen and (max-device-width: 480px) {
    padding: 10px 30px;
  }
`
