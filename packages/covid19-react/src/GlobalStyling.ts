import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Quicksand;
    font-size: 16px;

    & * {
      box-sizing: border-box;
    }
  }
`

export default GlobalStyle
