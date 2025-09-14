import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 12px 16px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 3px 0 ${({ theme }) => theme.colors.gray[50]};
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.Head2};
  color: ${({ theme }) => theme.colors.orange[500]};
`;

export const LogoutButton = styled.button`
  padding: 4px 16px;
  border-radius: 50px;
  ${({ theme }) => theme.fonts.Body1}
  color: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;

export const Label = styled.label`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
