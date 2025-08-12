import styled from "styled-components";

export const DayPicker = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Day = styled.span`
  ${({ theme }) => theme.fonts.Head3}
`;
