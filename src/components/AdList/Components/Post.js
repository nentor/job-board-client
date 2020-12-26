import React from 'react'
import styled from 'styled-components'

export const Post = ({ adPost }) => {
  return (
    <ListEnt>
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
    </ListEnt>
  )
}

const ListEnt = styled.li`
  display: list-item;
  margin-bottom: 8px;
  position: relative;
  padding: 18px 10px 18px 10px;
  border: none;
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
  background: white
    url('https://we-work-remotely.imgix.net/logos/0017/0021/logo.gif?ixlib=rails-4.0.0&w=50&h=50&dpr=2&fit=fill&auto=compress')
    center center/contain no-repeat;
  border: 1px solid black;
  position: absolute;
  left: -35px;
  border-radius: 50%;
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
  margin: 8px 10px 8px 25px;
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
  padding: 6px 8px 3px 8px;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: black;
  background-color: rgb(0, 170, 255);
  top: 40px;
  left: 842px;
  position: absolute;
  float: right;
  border-radius: 3px;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    left: calc(100% - 25%) !important;
    margin-top: 12px;
  }

  @media only screen and (max-width: 1175px) {
    left: calc(100% - 10%);
  }
`

const Highlight = styled.span`
  border-radius: 4px;
  top: 8px;
  left: 930px;
  float: right;
  position: absolute;
  height: 88px;
  border-left: 4px solid rgb(0, 170, 255);

  @media only screen and (max-width: 1175px) {
    left: calc(100% - 1%);
  }

  @media only screen and (max-width: 480px) {
    left: calc(100% - 5%);
    height: 112px;
  }
`
