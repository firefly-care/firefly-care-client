import styled from "styled-components";

export const ClearBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.colors.black};
  background: #fff;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Button1};
  cursor: pointer;
  gap: 6px;
`;
