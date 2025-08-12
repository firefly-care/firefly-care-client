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
  font-size: ${({ theme }) => theme.fonts.Head3.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Head3.fontWeight};
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
  font-size: ${({ theme }) => theme.fonts.Button2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Button2.fontWeight};
  cursor: pointer;
  margin-right: 4px;
  transition: background 0.15s;
  &:hover {
    background: #f9f6e7;
  }
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
  background: url('data:image/svg+xml;utf8,<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="4" fill="%2334A853"/><path d="M6.5 7.5h7v1h-7v-1zm0 2h7v1h-7v-1zm0 2h4v1h-4v-1z" fill="white"/></svg>') no-repeat center/contain;
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
  font-size: ${({ theme }) => theme.fonts.Head3.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Head3.fontWeight};
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
  font-size: ${({ theme }) => theme.fonts.Body2B.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2B.fontWeight};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
`;

export const StatusLabelCount = styled.div`
  font-size: ${({ theme }) => theme.fonts.Body1B.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body1B.fontWeight};
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
  font-size: ${({ theme }) => theme.fonts.Body1B.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body1B.fontWeight};
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
  font-size: ${({ theme }) => theme.fonts.Body2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2.fontWeight};
  color: ${({ theme }) => theme.colors.gray[500]};
  height: 36px;
`;

export const CareDate = styled(CareTd)`
  font-size: ${({ theme }) => theme.fonts.Body2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2.fontWeight};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
`;

export const CareTag = styled.span<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 6px;
  padding: 3px 7px 3px 7px;
  font-size: ${({ theme }) => theme.fonts.Caption.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Caption.fontWeight};
  color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  align-items: center;
  gap: 3px;
`;

export const CareTagIcon = styled.span`
  font-size: 0.9rem;
  margin-right: 2px;
`;