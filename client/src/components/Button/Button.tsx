import styled from "styled-components/macro";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  background-color: var(--primary-color);
  border-radius: 20px;
  color: darkblue;
  border: 2px solid var(--tertiary-color);
  width: 60%;
  margin: 5%;

  :active {
    background-color: var(--tertiary-color);
    color: var(--primary-color);
  }
`;

export default Button;
