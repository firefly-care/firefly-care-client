import styled from 'styled-components';

export const Page = styled.div`
  padding: 450px 24px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
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
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  margin-bottom: 30px;
`;