import styled from 'styled-components';

export const ResultTitleRow = styled.div`
  width: 100%;
  padding: 10px 12px;
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.gray[900]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  text-align: center;
  background: ${({ theme }) => theme.colors.gray[50]};
`;

export const TextArea = styled.textarea`
  width: 98%;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  padding: 12px;
  resize: vertical;
  min-height: 140px;
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray[800]};
  margin: 12px 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gray[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }
`;
