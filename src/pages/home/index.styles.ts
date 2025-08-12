import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 24px;
  gap: 20px;
  height: 100%;
  box-sizing: border-box;
  flex: 1 1 auto;
  min-height: 0;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;
