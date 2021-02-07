import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
  box-sizing: border-box;
}
:root {
  --titleFont: "Abel", sans-serif;
  --textFont: "Abel", sans-serif;
  --background: #ededed;
  --background-dark: #3d4849;
  --text-color: #707070;
  --text-color-dark: #ffffff;
  --primary-color: #FFA500; //orange
  --secondary-color: #00008b ; //darkblue
  --favorite-color:#dd755d;
}
body {
  margin: 0 ;
  font-family: var(--titleFont);
  background-color: var(--primary-color);
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
