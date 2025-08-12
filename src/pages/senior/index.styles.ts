import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.Head1};
  color: ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 112px 24px 24px;
  margin-top: 32px;
  width: 100%;
  box-sizing: border-box;
`;

export const ExcelBtn = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[500]};
  border: 1.5px solid;
  border-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 5px;
  padding: 5px 8px 5px 8px;
  ${({ theme }) => theme.fonts.Caption};
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #f4f7fa;
  }
`;

export const ExcelIcon = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" rx="4" fill="%2334A853"/><path d="M6.5 7.5h7v1h-7v-1zm0 2h7v1h-7v-1zm0 2h4v1h-4v-1z" fill="white"/></svg>') no-repeat center / contain;
`;
