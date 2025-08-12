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

export const StatusCardBG = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 15px;
  padding: 10px;
  flex: 1;
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const StatusIconBG = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
`;

export const StatusLabelText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StatusLabelMain = styled.div`
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
`;

export const StatusLabelCount = styled.div`
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.black};
`;

export const CareTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 5px;
  font-size: 1.08rem;
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
`;

export const CareTd = styled.td`
  padding: 7px 0;
  text-align: center;
  background: #fff;
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.gray[500]};
  height: 36px;
`;

export const CareDate = styled(CareTd)`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
`;

export const CareTag = styled.span<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 6px;
  padding: 3px 7px 3px 7px;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  align-items: center;
  gap: 3px;
`;

export const CareTagIcon = styled.span`
  font-size: 0.9rem;
  margin-right: 2px;
`;
