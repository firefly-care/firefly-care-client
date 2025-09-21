import styled from "styled-components";

export const Page = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  min-height: 100vh;
  padding: 20px;
`;

export const Wrap = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
`;

export const LeftPane = styled.div`
  display: grid;
  gap: 16px;
`;

export const RightPane = styled.div`
  display: grid;
  gap: 16px;
`;
