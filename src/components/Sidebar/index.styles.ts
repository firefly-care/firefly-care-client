import styled from "styled-components";

export const Container = styled.menu`
  border-right: 1px solid ${({ theme }) => theme.colors.gray[50]};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  gap: 27px;
  position: relative;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

interface MenuItemContainerProps {
  isActive: boolean;
}

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.orange[50] : theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange[50]};
  }
`;

export const MenuLabel = styled.label`
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.black};
`;

export const PlusButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange[50]};
  }
`;

export const PlusLabel = styled.label`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.black};
`;
