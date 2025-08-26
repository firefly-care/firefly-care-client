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

export const SmallBtn = styled.button`
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  background: #fff;
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ theme }) => theme.colors.gray[700]};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
