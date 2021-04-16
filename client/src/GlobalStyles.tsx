import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing: border-box;
}
:root {
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
  font-family: var(--textFont);
  background-color: var(--primary-color);
  }
 
p{
  font-size: 1.125rem;
  color: var(--tertiary-color);

}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--textFont);
  color: var(--tertiary-color);

  font-weight: bold;
  text-transform: uppercase;
}

a{
  text-decoration:none;
  color:var(--tertiary-color);
}
`;

export default GlobalStyle;
