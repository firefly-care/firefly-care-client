import styled from 'styled-components';

export const SectionHeader = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  padding: 18px 12px;
  ${({ theme }) => theme.fonts.Head3};
`;

export const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TR = styled.tr`
  border-bottom: 1px solid #e2e3e6;
`;

export const TD = styled.td`
  padding: 10px 12px;
  border: 1px solid #e2e3e6;
  ${({ theme }) => theme.fonts.Body1};
  color: #222;
  background: #fafbfc;

  &.label {
    background: ${({ theme }) => theme.colors.gray[50]};
    ${({ theme }) => theme.fonts.Body1B};
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    width: 18%;
    min-width: 120px;
  }

  &.value {
    background: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.Body1};
    color: ${({ theme }) => theme.colors.gray[600]};
    text-align: left;
    width: 32%;
    min-width: 160px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 1.5px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
  padding: 4px 12px;
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.gray[800]};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }
`;

export const ResetButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: 2px 8px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 16px;
  font-size: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

