import styled from "styled-components";

export const ChartSection = styled.div`
  flex: 2;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
`;

export const ChartTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ChartTitle = styled.h2`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.gray[900]};
  align-self: center;
`;

export const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ChartDate = styled.span`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Arrow = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  color: #222;
  font-weight: 600;
  user-select: none;
`;

export const HoverLabelBox = styled.div`
  width: 120px;
  height: 40px;
  background: #fff;
  border: 2px solid #222;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  .label-title {
    font-size: 13px;
    color: #888;
    margin-bottom: 2px;
  }
  .label-main {
    font-size: 16px;
    font-weight: bold;
    color: #222;
  }
`;
