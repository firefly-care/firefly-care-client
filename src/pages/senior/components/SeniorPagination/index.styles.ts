import styled, { css } from "styled-components";

export const BottomArea = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  margin-top: 18px;
`;

export const PaginationBar = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
`;

const sharedCell = css`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  font-size: 1rem;
  line-height: 1;
  user-select: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
`;

export const PagerItem = styled.button<{ active?: boolean }>`
  ${sharedCell}
  min-width: 10px;
  border: 0;
  background: ${({ active, theme }) =>
    active ? theme.colors.orange[500] : "#fff"};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.gray[500]};
  ${({ theme }) => theme.fonts.Button1};

  & + button {
    box-shadow: inset 1px 0 0 ${({ theme }) => theme.colors.gray[200]};
  }

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.orange[600] : theme.colors.gray[50]};
  }
`;

export const PagerArrow = styled.button<{ disabled?: boolean }>`
  ${sharedCell}
  width: 10px;
  border: 0;
  color: ${({ theme }) => theme.colors.gray[500]};
  background: #fff;

  & + button {
    box-shadow: inset 1px 0 0 ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ disabled, theme }) =>
    disabled
      ? `
    color: ${theme.colors.gray[300]};
    cursor: default;
    pointer-events: none;
    background: #fff;
  `
      : `
    &:hover { background: ${theme.colors.gray[50]}; }
  `}
`;

export const RegisterBtn = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.orange[500]};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 20px;
  ${({ theme }) => theme.fonts.Button1};
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.orange[600]};
  }
`;
