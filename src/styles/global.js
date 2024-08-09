import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg_color};
  }

  body, button, input, a {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
  }
`