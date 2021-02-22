import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 1rem;
  background-color: var(--primary-color);
  color: darkblue;
  border-bottom: 2px solid var(--tertiary-color);
  width: 60%;
  color: var(--tertiary-color);
  width: 100%;

  h1 {
    margin: 0;
    text-transform: none !important;
  }

  h4 {
    margin: 0;
    text-transform: none !important;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <div>Backbutton</div>
      </Link>
      <Link to="/">
        <h1>badJokes 24/7</h1>{" "}
      </Link>
      <a href="https://github.com/lauravikanis/badJokes" target="_blank:">
        <div>Feedback</div>
      </a>
    </HeaderContainer>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;
