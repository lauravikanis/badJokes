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
`;
const Header = () => {
  return (
    <HeaderContainer>
      <div>Home</div>
      <div>Logo</div>
      <div>Menue</div>
    </HeaderContainer>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;
