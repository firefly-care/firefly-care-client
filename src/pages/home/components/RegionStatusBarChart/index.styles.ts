import styled from "styled-components";

export const UL = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const LI = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  span {
    ${({ theme }) => theme.fonts.Caption};
  }
`;

export const ColorChip = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const TooltipContainer = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  gap: 6px;
`;

export const ColorDot = styled.span<{ color: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 8px;
`;

export const Label = styled.p`
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.Caption}
`;
