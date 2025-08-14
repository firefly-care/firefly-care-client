import styled from 'styled-components';

export const ChecklistTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #e2e3e6;
    padding: 10px 12px;
    background: #fff;
  }

  .label {
    background: ${({ theme }) => theme.colors.gray[50]};
    ${({ theme }) => theme.fonts.Body1};
    text-align: center;
  }
`;

export const RadioGroup = styled.div<{ $disabled?: boolean }>`
  display: inline-flex;
  gap: 14px;
  align-items: center;
  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  input {
    vertical-align: middle;
  }
  label {
    cursor: pointer;
  }

  input[type='radio']:checked {
    accent-color: ${({ theme }) => theme.colors.orange[500]};
  }
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

  &.q {
    background: ${({ theme }) => theme.colors.white};
    text-align: left;
  }

  &.radio {
    background: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  &.radio-container {
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const ResultTitleRow = styled.div`
  width: 100%;
  padding: 10px 12px;
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.gray[900]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  background: ${({ theme }) => theme.colors.gray[50]};
`;
