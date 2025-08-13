import styled from "styled-components";

export const MonthPicker = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Month = styled.span`
  ${({ theme }) => theme.fonts.Head3}
`;
