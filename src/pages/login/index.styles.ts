import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LoginContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.orange[50]};
  border: 1px solid ${({ theme }) => theme.colors.orange[200]};
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: stretch;
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange[500]};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${({ theme }) => theme.fonts.Button1};
  padding: 30px;
  box-sizing: border-box;
  border-radius: 4px;
  white-space: nowrap;
  flex: 1 1 auto;
  align-self: stretch;
`;

export const TextLogin = styled.h1`
  ${({ theme }) => theme.fonts.Head1};
  color: ${({ theme }) => theme.colors.orange[500]};
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
