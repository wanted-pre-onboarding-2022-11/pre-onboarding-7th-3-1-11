import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset},

  *,
  body {
    box-sizing: border-box;
  }
  
  body {
    cursor: default;
  }

  a,
  button {
    border: none;
    background-color: transparent;
    outline: none;
    text-decoration: none;
    cursor: pointer;
  }
`;

export { GlobalStyle };
