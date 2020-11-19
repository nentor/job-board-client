import styled from 'styled-components'

export const PostStyles = styled.div`
  display: inline-block;
  border: solid 1px rgba(130, 130, 130, 0.3);
  padding: 1rem;
  color: inherit;

  :hover {
    text-decoration: none;
    h3 {
      text-decoration: underline;
    }
  }
`
