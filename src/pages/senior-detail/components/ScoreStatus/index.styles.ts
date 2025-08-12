import styled from "styled-components";

export const ScoreSection = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  min-width: 650px;
`;

export const ScoreSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.Head3.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Head3.fontWeight};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 36px;
`;

export const BarChartWrapper = styled.div`
  display: flex;
  position: relative;
  height: 220px;
  margin-top: 18px;
`;

export const YAxis = styled.div`
  width: 32px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const YAxisLabel = styled.div`
  position: absolute;
  left: 0;
  transform: translateY(50%);
  font-size: ${({ theme }) => theme.fonts.Body2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2.fontWeight};
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const BarChartArea = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 100%;
  border-bottom: 2px solid #bfc9d1;
  padding-left: 8px;
`;

export const GridLine = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 0;
  border-bottom: 1.2px dashed #bfc9d1;
  z-index: 0;
`;

export const Bar = styled.div<{ height: number; color: string }>`
  width: 40px;
  height: ${({ height }) => height * 8}px;
  background: ${({ color }) => color};
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: height 0.3s;
`;

export const BarLabel = styled.div`
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  font-size: ${({ theme }) => theme.fonts.Body2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body2B.fontWeight};
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;
  white-space: pre-line;
`;