import React from "react";
import styled from "styled-components";
import Img from "../Atoms/Img";
import Paragraf from "../Atoms/Paragraf";
import Button from "../Atoms/Button";

const StyleCard = styled.div`
  width: 380px;
  height: 520px;
  background-color: rgba(83, 90, 95, 1);
  margin: 40px;
  -webkit-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 10px 1px rgba(66, 68, 90, 1);
`;
const StyleButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Card = ({
  id,
  img,
  name,
  prcice,
  lot,
  remaining,
  buyButton,
  shellButton,
}) => {
  return (
    <StyleCard>
      <Img src={img} card />
      <Paragraf card>{name}</Paragraf>
      <Paragraf price>{prcice}</Paragraf>
      <StyleButton>
        {lot > 0 ? (
          <Button red onClick={() => shellButton(id)}>
            Sell
          </Button>
        ) : (
          <Button weathered onClick={() => shellButton(id)}>
            Sell
          </Button>
        )}

        <Paragraf card>{lot}</Paragraf>
        {remaining - prcice < 0 ? (
          <Button weatheredGreen>Buy</Button>
        ) : (
          <Button green onClick={() => buyButton(id)}>
            Buy
          </Button>
        )}
      </StyleButton>
    </StyleCard>
  );
};

export default Card;
