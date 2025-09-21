import styled, { css } from "styled-components";

export const Card = styled.div<{ $interactive?: boolean; $selected?: boolean }>`
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 14px;
  padding: 20px 25px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);
  ${p =>
    p.$interactive &&
    css`
      cursor: pointer;
      transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.02s ease;
      &:hover {
        box-shadow: 0 6px 18px rgba(41, 45, 50, 0.1);
      }
      &:active {
        transform: translateY(1px);
      }
    `}
  ${p =>
    p.$selected &&
    css`
      border-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 0 0 3px rgba(240, 184, 90, 0.25);
    `}
`;

export const Grid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr 1fr;
`;

export const SearchBarWrap = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #e1e3e8;
  border-radius: 22px;
  padding: 12px 40px 12px 16px;
  font-size: 14px;
  outline: none;
  &::placeholder {
    color: #9aa0aa;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
`;
