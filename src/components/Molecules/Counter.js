import React from "react";
import styled from "styled-components";
import Paragraf from "../Atoms/Paragraf";

const StyleCounter = styled.div`
  width: 100%;
  height: 80px;
  background-color: gray;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0px;
`;

const Counter = ({ remaining, percentage_of_expenses }) => {
  return (
    <StyleCounter>
      <Paragraf counter>Remaining: {remaining} USD</Paragraf>
      <Paragraf counter>
        You only spent {(100 - percentage_of_expenses).toFixed(6)}% of the
        total!
      </Paragraf>
    </StyleCounter>
  );
};

export default Counter;
