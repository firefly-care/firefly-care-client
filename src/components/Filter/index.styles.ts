import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.gray[400]};
  .arrow {
    margin-left: 10px;
    font-size: 0.75rem;
  }
`;

export const OptionList = styled.ul`
  position: absolute;
  z-index: 10;
  margin-top: 4px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;
  overflow-y: auto;
  min-width: max-content;
`;

export const OptionItem = styled.li<{ selected: boolean }>`
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0.25rem;
  border-radius: 2px;
  cursor: pointer;
  ${({ theme }) => theme.fonts.Body3};
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.gray[50]};
    `}
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;
