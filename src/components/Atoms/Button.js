import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 10px;
  margin: 1.5rem;

  ${({ red }) =>
    red &&
    css`
      background-color: rgb(221, 153, 153);
      color: rgb(0, 0, 0);
    `}
  ${({ weathered }) =>
    weathered &&
    css`
      opacity: 0;
    `}

  ${({ green }) =>
    green &&
    css`
      background-color: hsl(116, 50%, 73%);
    `}
  ${({ weatheredGreen }) =>
    weatheredGreen &&
    css`
      opacity: 0;
    `}
`;

export default Button;
