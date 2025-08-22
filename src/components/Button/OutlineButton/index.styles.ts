import styled, { css } from "styled-components";

interface ClearBtnProps {
  colorType: "white" | "black";
}

export const ClearBtn = styled.button<ClearBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Button1};
  cursor: pointer;
  gap: 6px;

  ${({ colorType, theme }) =>
    colorType === "white"
      ? css`
          background: #fff;
          color: ${theme.colors.black};
        `
      : css`
          background: ${theme.colors.black};
          color: #fff;
        `}
`;
