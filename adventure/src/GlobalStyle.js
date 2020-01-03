import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://www.fontify.me/wf/7ae0c162d7a54b07d9af0bfbdba6482e');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: font77490;
  }

  p {
    max-width: 65ch;
    font-family: "Open Sans"
  }
`;
