import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import { prefetchPosts } from '../../hooks'

export const Sidebar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onMouseEnter={() => prefetchPosts()}>
          <Link to="/blog">Blog</Link>
        </li>
        <hr />
        <li onMouseEnter={() => prefetchPosts()}>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </Container>
  )
}
