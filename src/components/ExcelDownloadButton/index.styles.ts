import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.gray[500]};
  ${({ theme }) => theme.fonts.Caption};
`;
