import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  text-align: left;
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: 12px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
