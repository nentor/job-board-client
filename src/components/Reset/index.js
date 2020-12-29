import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
`
