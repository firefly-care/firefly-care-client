import styled, { css } from "styled-components";

/* 카드 */
export const Card = styled.div<{ $interactive?: boolean; $selected?: boolean }>`
  width: 100%;
  background: #fff;
  border: 1px solid ${({ theme }) => theme?.colors?.gray?.[200] ?? "#E7E7EA"};
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.02);

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

/* 제목 */
export const SectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.Head2};
  margin: 0 0 16px 0;
`;

/* 아바타: 정사각형 + 테두리 */
export const Avatar = styled.div<{ src?: string; size?: number }>`
  ${({ src, theme }) => css`
    width: 160px;
    height: 215px;
    border-radius: 8px; 
    background: ${src ? `url(${src}) center/cover` : "#fff"};
    border: 1px solid ${theme?.colors?.gray?.[300] ?? "#DADADA"};
  `}
`;

/* 오른쪽 정보 전체 영역 레이아웃 */
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr; 
  gap: 20px;
  align-items: start;
`;

/* 라벨/값 두 컬럼 그리드 */
export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 25px;
`;

/* 라벨 컬럼: 베이지 배경 박스 */
export const LabelCol = styled.div`
  background: ${({ theme }) => theme.colors.orange[50]};
  border-right: 2px solid ${({ theme }) => theme.colors.orange[100]};
  border-radius: 6px;
  padding: 12px 16px;
  display: grid;
  grid-template-rows: repeat(6, auto);
  row-gap: 14px;
`;

/* 값 컬럼 */
export const ValueCol = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  row-gap: 10px;
  padding: 4px 0;
`;

/* 라벨/값 타이포 */
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
