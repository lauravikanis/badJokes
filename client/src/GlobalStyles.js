import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing: border-box;
}
:root {
  --titleFont: 'Raleway', sans-serif;
  --textFont: 'Raleway', sans-serif;
  --background: #ededed;
  --background-dark: #3d4849;
  --text-color: #707070;
  --text-color-dark: #ffffff;
  --primary-color: #0433BF; //kobald
  --secondary-color: #020F59; //darkblue
  --tertiary-color: #D9AA8F ; //sand
}
body {
  margin: 0 ;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  background-color: var(--primary-color);
  }
 
p{
  font-size: 1.125rem;
  color: var(--tertiary-color);

}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--titleFont);
  color: var(--tertiary-color);

  font-weight: bold;
  text-transform: uppercase;
}
`;

export default GlobalStyle;
