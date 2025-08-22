import styled, { css } from "styled-components";

export const TableInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: ${({ theme }) => theme.colors.white};
`;

export const TableRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Latest = styled.span`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const StyledTable = styled.table<{
  $compact?: boolean;
  $zebra?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  thead th {
    vertical-align: middle;
  }
  ${({ $compact }) =>
    $compact
      ? css`
          th,
          td {
            padding: 8px 10px;
          }
        `
      : css`
          th,
          td {
            padding: 12px 14px;
          }
        `}
`;

export const TH = styled.th<{ $sticky?: boolean }>`
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.orange[50]};
  text-align: center;
  white-space: nowrap;

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 2;
    `}
`;
export const THSub = styled(TH)`
  top: 42px;
  z-index: 1;
`;

export const TR = styled.tr<{ $clickable?: boolean }>`
  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      &:hover td {
        background: rgba(0, 0, 0, 0.03);
      }
    `}
  text-align: center;
`;

export const TD = styled.td`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray[900]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;
