import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Cardcontainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  border-radius: 20px;
  color: darkblue;
  box-shadow: 0px 0px 7.5px #d88d41;
`;

const CardInside = styled.div`
  display: flex;
  font-family: "Yanone Kaffeesatz", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 20px;

  text-align: center;
  height: 4rem;
  box-shadow: inset 10px 5px 20px #d88d41;
`;

const Card = () => {
  return (
    <Cardcontainer>
      <CardInside>almost before we knew it, we had left the ground.</CardInside>
    </Cardcontainer>
  );
};

Card.propTypes = {
  type: PropTypes.string,
};

export default Card;
