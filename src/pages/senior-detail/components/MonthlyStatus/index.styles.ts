import styled from "styled-components";

export const MonthlyStatus = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  min-width: 420px;
  flex: 1;
`;

export const MonthlyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.fonts.Head3};
  margin-bottom: 18px;
  gap: 12px;
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const AddBtn = styled.button`
  background: ${({ theme }) => theme.colors.orange[50]};
  color: ${({ theme }) => theme.colors.orange[600]};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.orange[600]};
  border-radius: 6px;
  padding: 6px 12px;
  ${({ theme }) => theme.fonts.Button2};
  cursor: pointer;
  margin-right: 4px;
  transition: background 0.15s;
  &:hover {
    background: #f9f6e7;
  }
`;

export const MonthNav = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
  margin-top: 2px;
`;

export const Arrow = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  color: #222;
  font-weight: 600;
  user-select: none;
`;

export const Month = styled.span`
  ${({ theme }) => theme.fonts.Head3};
`;

export const StatusCards = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 15px;
`;

export const CareTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 5px;
  font-size: 1.08rem;
  width: 100%;
`;

export const CareTh = styled.th<{ width?: string }>`
  background: ${({ theme }) => theme.colors.orange[50]};
  padding: 12px 0;
  border-top: 1.8px solid #222;
  border-bottom: 1.8px solid #222;
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ width }) => width && `width: ${width};`}
`;

export const CareTr = styled.tr`
  border-bottom: 1.5px solid #222;
  width: 100%;
`;

export const CareTd = styled.td`
  height: 36px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CareResult = styled.td`
  height: 36px;
  text-align: center;
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const CareDate = styled.td`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
  height: 36px;
`;
