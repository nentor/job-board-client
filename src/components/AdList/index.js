import React from 'react'
import styled from 'styled-components'

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
            return (
              <Post>
                {adPost.isNew ? (
                  <>
                    <New>New</New>
                    <Highlight />
                  </>
                ) : (
                  <></>
                )}
                <Tooltip>
                  <Img />
                </Tooltip>
                <PostUrl>
                  <Span>{adPost.user}</Span>
                  <br />
                  <Title>{adPost.title}</Title>
                  <br />
                  <Span>{adPost.city}</Span>
                </PostUrl>
              </Post>
            )
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

const Post = styled.ul`
  list-style: none;
  display: list-item;
  margin-bottom: 8px;
  position: relative;
  padding: 18px 10px 18px 10px;
  border: none;
  border-radius: 1px;
  background-color: rgba(0, 170, 255, 0.2);

  @media only screen and (max-device-width: 480px) {
    padding: 30px 10px;
  }
`

const Tooltip = styled.div`
  position: absolute;
  display: inline-block;

  @media only screen and (max-device-width: 1024px) {
    display: none;
  }

  @media only screen and (max-device-width: 480px) {
    display: none;
  }
`
const Img = styled.div`
  background-image: url('https://we-work-remotely.imgix.net/logos/0017/0021/logo.gif?ixlib=rails-4.0.0&w=50&h=50&dpr=2&fit=fill&auto=compress');
  border: 1px solid black;
  position: absolute;
  left: -35px;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-position: center center;
  background-color: white;
  background-size: contain;
  height: 50px;
  width: 50px;
  margin-top: 15px;
  display: inline-block;
`
const PostUrl = styled.a`
  text-decoration: none;
  border-bottom-style: none;
`

const Span = styled.span`
  cursor: pointer;
  font-size: 1rem;
  margin-left: 25px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: calc(100% - 25px);
  text-decoration: none;
  color: black;
`

const Title = styled.span`
  cursor: pointer;
  margin-left: 25px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 10px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: calc(100% - 25px);
  text-decoration: none;
  color: black;
  font-weight: bold;
`
const New = styled.span`
  margin-top: 32px;
  padding: 6px 8px 3px 8px;
  margin-right: 0px;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: black;
  background-color: rgb(0, 170, 255);
  top: 40px;
  left: 842px;
  position: absolute;
  float: right;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    left: 250px !important;
    margin-top: 12px;
  }

  media only screen and (max-width: 1175px) {
    left: 800px;
  }
`

const Highlight = styled.span`
  border-radius: 4px;
  top: 8px;
  left: 930px;
  position: absolute;
  height: 88px;
  border-left: 4px solid rgb(0, 170, 255);

  @media only screen and (max-width: 1175px) {
    float: right;
    position: absolute;
    left: 920px;
  }

  @media only screen and (max-width: 480px) {
    float: right;
    position: absolute;
    left: 305px;
    height: 112px;
  }
`
