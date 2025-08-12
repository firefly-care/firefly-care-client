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
`

export const Latest = styled.span`
  font-size: ${({ theme }) => theme.fonts.Body2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2.fontWeight};
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
  background: #FAF6E7;
  font-size: ${({ theme }) => theme.fonts.Body2B.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2B.fontWeight};
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
  font-size: ${({ theme }) => theme.fonts.Body2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2.fontWeight};
  color: ${({ theme }) => theme.colors.gray[800]};
  background: #fff;
  text-align: center;
  border-top: none;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray[100]};
  border-left: none;
  border-right: none;
`;

export const ExcelBtn = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[500]};
  border: 1.5px solid;
  border-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 5px;
  padding: 5px 8px 5px 8px;
  font-size: ${({ theme }) => theme.fonts.Caption.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Caption.fontWeight};
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #f4f7fa;
  }
`;

export const ExcelIcon = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="4" fill="%2334A853"/><path d="M6.5 7.5h7v1h-7v-1zm0 2h7v1h-7v-1zm0 2h4v1h-4v-1z" fill="white"/></svg>') no-repeat center / contain;
`;