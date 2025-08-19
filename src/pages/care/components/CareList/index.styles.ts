import styled, { css } from "styled-components";
import type { CareResultType } from "../../types";

export const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  flex: 1;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.black};
`;

export const CareItemList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;

export const CareItemContainer = styled.div<{
  $status: CareResultType;
}>`
  border-radius: 4px;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    border-radius: 4px 0 0 4px;
    background: ${({ $status, theme }) =>
      $status == "absent" ? theme.colors.red[500] : theme.colors.gray[400]};
  }
`;

/* 헤더 */
export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Name = styled.div`
  ${({ theme }) => theme.fonts.Head4};
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NameNTag = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StatusBadge = styled.span<{ $status: CareResultType }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 4px;
  ${({ theme }) => theme.fonts.Button2};
  ${({ theme, $status }) =>
    $status === "absent"
      ? css`
          color: ${theme.colors.white};
          background: ${theme.colors.red[500]};
        `
      : css`
          background: ${theme.colors.gray[200]};
          color: ${theme.colors.white};
        `}
`;

/* 메타 영역 */
export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 6px;
`;

export const MetaItem = styled.div<{ $full?: boolean }>`
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: baseline;
  ${({ $full }) =>
    $full &&
    css`
      grid-column: 1 / -1;
    `}
`;

export const MetaKey = styled.span`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.black};
`;

export const MetaValue = styled.span`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.black};
`;

export const Preview = styled.p`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
