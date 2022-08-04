import React from "react";
import styled from "styled-components";
import Paragraf from "../Atoms/Paragraf";
import Img from "../Atoms/Img";
import ElonFoto from "../../Assets/Elon.jpg";

const StyleHeader = styled.div`
  height: 600px;
  margin: 0px 600px 0px 600px;
  text-align: center;
  align-items: center;
  padding-top: 30px;
  top: 80px;
  position: absolute;
`;

const Header = () => {
  return (
    <StyleHeader>
      <Img src={ElonFoto} />
      <Paragraf big>Spend Elon Musk money!</Paragraf>
      <Paragraf>
        If Elon cashed out all of his stocks & assets today he would have
        approximately <b>$217,000,000,000</b> (US Dollars) in his bank account.
      </Paragraf>
      <Paragraf>What would you spend it on?</Paragraf>
    </StyleHeader>
  );
};
export default Header;
