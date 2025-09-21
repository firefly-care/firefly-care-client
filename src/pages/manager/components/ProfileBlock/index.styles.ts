import styled, { css } from "styled-components";

export const Card = styled.div<{ $interactive?: boolean; $selected?: boolean }>`
  width: 100%;

  ${p =>
    p.$interactive &&
    css`
      cursor: pointer;
      transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.02s ease;
      &:hover { box-shadow: 0 6px 18px rgba(41, 45, 50, 0.1); }
      &:active { transform: translateY(1px); }
    `}
  ${p =>
    p.$selected &&
    css`
      border-color: ${({ theme }) => theme?.colors?.white ?? "#fff"};
      box-shadow: 0 0 0 3px rgba(240, 184, 90, 0.25);
    `}
`;

export const SectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.Head2};
  margin: 0 0 16px 0;
`;

export const Avatar = styled.div<{ src?: string; size?: number }>`
  ${({ src, theme }) => css`
    width: 160px;
    height: 215px;
    border-radius: 8px; 
    background: ${src ? `url(${src}) center/cover` : "#fff"};
    border: 1px solid ${theme?.colors?.gray?.[300] ?? "#DADADA"};
  `}
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr; 
  gap: 20px;
  align-items: start;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 25px;
`;

export const LabelCol = styled.div`
  background: ${({ theme }) => theme.colors.orange[50]};
  border-right: 2px solid ${({ theme }) => theme.colors.orange[100]};
  border-radius: 6px;
  padding: 12px 16px;
  display: grid;
  grid-template-rows: repeat(6, auto);
  row-gap: 14px;
`;

export const ValueCol = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  row-gap: 10px;
  padding: 4px 0;
`;

export const LabelItem = styled.div`
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme?.colors?.black ?? "#111"};
`;

export const ValueItem = styled.div`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme?.colors?.black ?? "#111"};
  line-height: 1.7;
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 12px;
  color: ${({ theme }) => theme?.colors?.black ?? "#111"};
  font-weight: 700;
`;

export const Value = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme?.colors?.black ?? "#111"};
  font-weight: 600;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 68px 1fr;
  align-items: center;
  gap: 8px;
  font-size: 13px;
`;
