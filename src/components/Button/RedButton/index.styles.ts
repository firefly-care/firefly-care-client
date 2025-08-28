import styled from "styled-components";

export const RegisterButton = styled.button`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.red[400]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  ${({ theme }) => theme.fonts.Button1};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.red[600]};
  }
`;
