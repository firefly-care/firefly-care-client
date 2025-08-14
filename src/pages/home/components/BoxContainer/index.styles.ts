import styled from "styled-components";

export const Container = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
`;

export const Title = styled.h1`
  height: 28px;
  ${({ theme }) => theme.fonts.Head2};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
`;
