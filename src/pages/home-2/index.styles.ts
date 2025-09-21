import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  overflow-y: auto;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  gap: 20px;
  min-height: 0;
  & > * {
    flex: 1 1 0;
    min-width: 0;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  min-height: 0;
  padding: 20px;
  box-sizing: border-box;

  & > * {
    flex: 1 1 0;
    min-width: 0;
  }
`;
