import styled, { css } from "styled-components";

export const TableSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -5px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  height: 40px;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.orange[200]};
  background: ${({ theme }) => theme.colors.orange[100]};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px 12px 0 0;
  padding: 0px 16px;
  ${({ theme }) => theme.fonts.Body2B};
  cursor: pointer;

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.orange[400]};
      border-color: ${theme.colors.orange[400]};
      color: #fff;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
    `}
`;

export const ExcelBox = styled.div`
  align-self: flex-start;
`;

export const TableWrapper = styled.div`
  overflow-y: auto;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  border: 1px solid ${({ theme }) => theme.colors.orange[200]};
  border-radius: 0px 14px 14px 14px;
  background: #fff;
  margin-top: 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  ${({ theme }) => theme.fonts.Body2};
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.orange[50]};
  position: sticky;
  top: 0;
  z-index: 1;
  th {
    padding: 12px;
    text-align: center;
    ${({ theme }) => theme.fonts.Body2B}
    white-space: nowrap;
  }
`;

export const Tbody = styled.tbody`
  td {
    height: 45px;
    padding: 5px 0px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};
    text-align: center;
    white-space: nowrap;
  }
`;

export const ResultBadge = styled.span<{ $variant?: "danger" | "neutral" }>`
  display: inline-block;
  padding: 5px 9px;
  border-radius: 5px;
  ${({ $variant, theme }) =>
    $variant === "danger"
      ? css`
          background: ${theme.colors.red[500]};
          color: #fff;
        `
      : css`
          background: ${theme.colors.gray[200]};
          color: ${theme.colors.white};
        `}
`;
