import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 10px;
  overflow: hidden;
`;

export const SmallBtn = styled.button`
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  background: #fff;
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.gray[700]};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`;

export const TH = styled.th`
  background: #faf6e7;
  font-weight: 600;
  padding: 12px;
  text-align: center;
  border-bottom: 2px solid #e2e3e6;
`;

export const TD = styled.td`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #e2e3e6;
`;

export const PaginationWrapper = styled.div`
  margin-top: 10px;
  position: relative;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`;

export const PageButton = styled.button`
  background: #f2c94c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #e2b94c;
  }
`;