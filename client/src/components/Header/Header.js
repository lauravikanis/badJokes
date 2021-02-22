import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary-color);
  color: darkblue;
  border-bottom: 2px solid var(--tertiary-color);
  color: var(--tertiary-color);
  width: 100%;

  h1 {
    margin: 0;
    text-transform: none !important;
    white-space: nowrap;
  }
`;
const HeaderIcon = styled(FontAwesomeIcon)`
  font-size: 1.75rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderIcon icon={faHome} />
      </Link>
      <Link to="/">
        <h1>badJokes 24/7</h1>
      </Link>
      <a href="https://github.com/lauravikanis/badJokes" target="_blank:">
        <HeaderIcon icon={faGithub} />
      </a>
    </HeaderContainer>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;
