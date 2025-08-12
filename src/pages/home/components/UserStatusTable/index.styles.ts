import styled from "styled-components";

export const TableWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  ${({ theme }) => theme.fonts.Body2}
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.orange[50]};
  position: sticky;
  top: 0;
  z-index: 1;
  th {
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.gray[900]};
    border-left: none;
    border-right: none;
    text-align: center;
    ${({ theme }) => theme.fonts.Body2B}
    white-space: nowrap;
  }
`;

export const Tbody = styled.tbody`
  td {
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.gray[100]};
    text-align: center;
    border-left: none;
    border-right: none;
    white-space: nowrap;
  }
`;
