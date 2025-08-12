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
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);
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
  transition: background .15s, color .15s;
`;

/* 숫자 셀 */
export const PagerItem = styled.button<{ active?: boolean }>`
  ${sharedCell}
  min-width: 10px;
  border: 0;
  background: ${({ active, theme }) => (active ? theme.colors.orange[500] : "#fff")};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.gray[500])};
  font-size: ${({ theme }) => theme.fonts.Button1.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Button1.fontWeight};

  /* 이전 형제가 PagerItem이든 PagerArrow든 상관없이 모든 버튼과의 경계선 */
  & + button {
    box-shadow: inset 1px 0 0 ${({ theme }) => theme.colors.gray[200]};
  }

  &:hover {
    background: ${({ active, theme }) => (active ? theme.colors.orange[600] : theme.colors.gray[50])};
  }
`;

/* 좌/우 화살표 */
export const PagerArrow = styled.button<{ disabled?: boolean }>`
  ${sharedCell}
  width: 10px;
  border: 0;
  color: ${({ theme }) => theme.colors.gray[500]};
  background: #fff;

  /* 이전 형제가 PagerItem이든 PagerArrow든 모두 적용 */
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
  font-size: ${({ theme }) => theme.fonts.Button1.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Button1.fontWeight};
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.orange[600]};
  }
`;