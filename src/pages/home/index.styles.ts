import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  display: flex;
  flex-direction: row;
  padding: 24px;
  gap: 20px;
  height: 100%;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  flex: 1;
`;
