import styled from "styled-components";

export const TableWrapper = styled.div`
  margin-top: 32px;
`;

export const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TR = styled.tr`
  border-bottom: 1px solid #e2e3e6;
`;

export const TD = styled.td`
  padding: 10px 12px;
  border: 1px solid #e2e3e6;
  font-size: 1rem;
  color: #222;
  background: #fafbfc;

  &.label {
    background: ${({ theme }) => theme.colors.gray[50]};
    font-size: ${({ theme }) => theme.fonts.Body1B.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.Body1B.fontWeight};
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    width: 15%;
    min-width: 120px;
  }

  &.value {
    background: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.Body1.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.Body1.fontWeight};
    color: ${({ theme }) => theme.colors.gray[600]};
    text-align: left;
    width: 35%;
    min-width: 120px;
  }
`;