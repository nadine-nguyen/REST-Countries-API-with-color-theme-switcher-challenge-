import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };
  body {
    margin: 0;
    color: ${(props) => props.theme.text};
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.background};
    min-height: 100vh;
  }
`;

export default GlobalStyle;
