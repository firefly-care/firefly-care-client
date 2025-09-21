import styled, { css } from "styled-components";

export const Container = styled.div<{ $interactive?: boolean; $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border: 1px solid ${({ theme }) => theme?.colors?.gray?.[200] ?? "#E7E7EA"};
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);
  gap: 25px;

  ${p =>
    p.$interactive &&
    css`
      cursor: pointer;
      transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.02s ease;
      &:hover { box-shadow: 0 6px 18px rgba(41, 45, 50, 0.1); }
      &:active { transform: translateY(1px); }
    `}
  ${p =>
    p.$selected &&
    css`
      border-color: ${({ theme }) => theme?.colors?.white ?? "#fff"};
      box-shadow: 0 0 0 3px rgba(240, 184, 90, 0.25);
    `}
`;
