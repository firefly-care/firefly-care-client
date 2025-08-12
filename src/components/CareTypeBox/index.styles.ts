import styled from "styled-components";

export const Container = styled.div<{ color: "green" | "orange" | "red" }>`
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: ${({ theme, color }) => theme.colors[color][50]};
`;

export const Circle = styled.div<{ color: "green" | "orange" | "red" }>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => theme.colors[color][500]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

export const Number = styled.p`
  ${({ theme }) => theme.fonts.Body1B};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;
