import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const GotoBack = styled.button`
  ${({ theme }) => theme.fonts.Body1B}
  color: ${({ theme }) => theme.colors.gray[500]};
  position: absolute;
  display: flex;
  align-items: center;
  gap: 20px;
  left: 30px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head1}
  color: ${({ theme }) => theme.colors.black};
`;
