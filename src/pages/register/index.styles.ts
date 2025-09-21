import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 10px;
  overflow: hidden;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  margin-bottom: 30px;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Tab = styled.button<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 12px;
  background: ${({ active, theme }) =>
    active ? theme.colors.orange[500] : theme.colors.gray[50]};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.gray[500]};
  ${({ theme }) => theme.fonts.Body1B};
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
