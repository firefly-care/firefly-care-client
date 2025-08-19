import styled, { css } from "styled-components";

export const Container = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding: 16px 24px;
  border-radius: 4px;
  display: grid;
  gap: 8px;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
`;

export const FilterSectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
export const Label = styled.label`
  width: 110px;
  ${({ theme }) => theme.fonts.Body1}
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const SelectFilterContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  ${({ theme }) => theme.fonts.Button2}
  color: ${({ theme }) => theme.colors.gray[400]};
  .arrow {
    margin-left: 10px;
    font-size: 0.75rem;
  }
  min-width: 150px;
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
  width: 100%;
`;

export const OptionItem = styled.li<{ selected: boolean }>`
  padding: 8px 10px;
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

export const DateRangePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;
  ${({ theme }) => theme.fonts.Button2}
  color: ${({ theme }) => theme.colors.gray[400]};
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const InputWrap = styled.div`
  position: relative;
  width: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.gray[600]};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const SearchIconContainer = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const BlackButton = styled.button`
  border-radius: 8px;
  padding: 10px 20px;
  gap: 4px;
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Button1}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

export const WhiteButton = styled.button`
  border-radius: 8px;
  padding: 10px 20px;
  border: 1.5px solid ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Button1}
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 24px;
  bottom: 16px;
  gap: 12px;
`;
