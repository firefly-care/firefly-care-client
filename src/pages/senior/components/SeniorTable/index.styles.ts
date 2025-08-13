import styled from "styled-components";

export const TableInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
`;

export const TableCount = styled.span`
  font-size: 1rem;
  color: #888;
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

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* margin-bottom: 18px; */
  background: #fff;
  font-size: 1.05rem;
`;

export const TH = styled.th`
  background: #faf6e7;
  ${({ theme }) => theme.fonts.Body2B};
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.black};
  border-left: none;
  border-right: none;
`;

export const TR = styled.tr`
  border-bottom: 1px solid #e2e3e6;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const TD = styled.td`
  padding: 7px 7px;
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray[800]};
  background: #fff;
  text-align: center;
  border-top: none;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray[100]};
  border-left: none;
  border-right: none;
`;
