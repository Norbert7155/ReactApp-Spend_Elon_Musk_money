import styled, { css } from "styled-components";

const Paragraf = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.light};
  margin-top: 20px;

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.bold};
    `}

  ${({ card }) =>
    card &&
    css`
      text-align: center;
      color: white;
    `}

    ${({ price }) =>
    price &&
    css`
      text-align: center;
      color: white;
      font-size: ${({ theme }) => theme.fontSize.s};
    `}

    ${({ counter }) =>
    counter &&
    css`
      color: white;
      font-size: ${({ theme }) => theme.fontSize.l};
    `}
`;

export default Paragraf;
