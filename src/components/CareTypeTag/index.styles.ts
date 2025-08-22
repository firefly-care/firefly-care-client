import styled from "styled-components";

export const Container = styled.div<{
  color: "green" | "orange" | "red";
  size: "small" | "medium";
}>`
  border-radius: 4px;
  padding: ${({ size }) => (size == "small" ? "2px 4px" : "4px 8px")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: fit-content;
  margin: 0 auto;
  background-color: ${({ theme, color }) => theme.colors[color][500]};
`;

export const Label = styled.label`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
`;
