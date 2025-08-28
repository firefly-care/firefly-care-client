import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BottomArea = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  margin-top: 18px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
