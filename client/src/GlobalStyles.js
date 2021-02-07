import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
  box-sizing: border-box;
}
:root {
  --titleFont: "'Poppins", sans-serif;
  --textFont: "Roboto", sans-serif;
  --background: #ededed;
  --background-dark: #3d4849;
  --text-color: #707070;
  --text-color-dark: #ffffff;
  --primary-color: #0f4e8f;
  --secondary-color: #ec9b49;
  --favorite-color:#dd755d;
}
body {
  margin: 0 ;
  font-family: 'Roboto', sans-serif;
  background-color: lightgoldenrodyellow;
  }
 
p{
  font-size: 1.125rem;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--titleFont);
  font-weight: bold;
  text-transform: uppercase;
}
`;

export default GlobalStyle;
