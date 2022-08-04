import styled, { css } from "styled-components";

const Img = styled.img`
  justify-content: center;
  align-items: center;

  ${({ card }) =>
    card &&
    css`
      width: 380px;
      height: 350px;
      object-fit: cover;
    `}
`;
export default Img;
