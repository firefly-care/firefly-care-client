import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.Head1};
  color: ${({ theme }) => theme.colors.black};
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 16px;
`;

export const Tabs = styled.div`
  display: inline-flex;
  gap: 8px;
`;

export const Tab = styled.button<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 12px;
  background: ${({ active, theme }) => (active ? theme.colors.orange[500] : theme.colors.gray[50])};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.gray[500])};
  ${({ theme }) => theme.fonts.Body1B};
  cursor: pointer;
`;
