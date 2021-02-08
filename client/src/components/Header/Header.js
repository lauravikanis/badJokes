import styled from "styled-components/macro";
import PropTypes from "prop-types";

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
      <div>Submit</div>
      <h1>badJokes 24/7</h1>
      <div>Menue</div>
    </HeaderContainer>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;
