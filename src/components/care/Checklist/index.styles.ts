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
  gap: 20px;
  align-items: center;
  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  input {
    vertical-align: middle;
    appearance: none;
    width: 14px;
    height: 14px;
    border: 2px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    position: relative;
  }

  input[type="radio"]:checked {
    border-color: ${({ theme }) => theme.colors.orange[500]};
    background-color: ${({ theme }) => theme.colors.white};
  }

  input[type="radio"]:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    background-color: ${({ theme }) => theme.colors.orange[500]};
    border-radius: 50%; 
  }

  label {
    cursor: pointer;
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
