import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const LegendContainer = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorBox = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-radius: 50%;
`;

export const LegendText = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Button2}
`;

export const CenterLabel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -58%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Head3};

  strong {
    ${({ theme }) => theme.fonts.Head2};
    font-weight: 700;
  }
`;

export const CenterText = styled.text`
  fill: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`;

export const LabelText = styled.text`
  ${({ theme }) => theme.fonts.Button1}
  .big {
    ${({ theme }) => theme.fonts.Head1}
  }
`;
