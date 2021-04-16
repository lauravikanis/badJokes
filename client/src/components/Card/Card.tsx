import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--primary-color);
  border-radius: 20px;
  color: darkblue;
  border: 2px solid var(--tertiary-color);
  width: 60%;
  margin: 5%;
`;

export default Card;
