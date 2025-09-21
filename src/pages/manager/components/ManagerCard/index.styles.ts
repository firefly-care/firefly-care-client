import styled, { css } from "styled-components";

export const Card = styled.div<{ $interactive?: boolean; $selected?: boolean }>`
  width: 300px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 14px;
  padding: 14px;
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

export const Avatar = styled.div<{ src?: string; size?: number }>`
  ${({ size = 75, src }) => css`
    width: ${size}px;
    height: ${size}px;
    flex: 0 0 ${size}px;
    border-radius: 50%;
    background: ${src ? `url(${src}) center/cover` : "#d6d7da"};
  `}
`;

export const Label = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.black};
`;

export const Value = styled.span`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.black};
  /* font-weight: 600; */
`;
