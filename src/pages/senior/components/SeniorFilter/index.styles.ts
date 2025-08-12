import styled from "styled-components";

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr auto;
  grid-row-gap: 10px;
  grid-column-gap: 12px;
  align-items: center;
  width: 100%;
  margin-bottom: 18px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
  padding: 10px 16px;

  @media (max-width: 980px) {
    grid-template-columns: 120px 1fr;
    & > div[data-role="btnrow"] { grid-column: 2 / -1; justify-content: flex-start; }
  }
`;

export const FilterLabel = styled.div`
  font-size: ${({ theme }) => theme.fonts.Body1.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Body1.fontWeight};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const InlineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BtnRow = styled.div.attrs({ 'data-role': 'btnrow' })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const BtnSpace = styled.div``;

export const Select = styled.select`
  height: 36px;
  min-width: 150px;
  padding: 6px 14px 6px 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.Button2.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Button2.fontWeight};
  color: ${({ theme }) => theme.colors.gray[400]};
`;

/* 검색 입력 + 내부 돋보기 아이콘 */
export const SearchInputWrap = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 6px 40px 6px 12px; /* 오른쪽 아이콘 여백 */
  border-radius: 8px;
  border: 1px solid #e2e3e6;
  background: #ffffff;
  font-size: 0.95rem;

  &::placeholder {
    font-size: ${({ theme }) => theme.fonts.Button2.fontSize}px;
    font-weight: ${({ theme }) => theme.fonts.Button2.fontWeight};
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus {
    outline: none;
    border-color: #c7d2fe;            /* 은은한 포커스 */
    box-shadow: 0 0 0 3px rgba(59,130,246,.12);
  }
`;

export const SearchFieldIcon = styled.span`
  position: absolute;
  right: 12px;
  width: 18px;
  height: 18px;
  pointer-events: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="%239AA4B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>') no-repeat center / contain;
`;

/* 버튼 */
export const Button = styled.button`
  background: #fff;
  border: 1.5px solid #BFC9D1;
  border-radius: 8px;
  height: 36px;
  padding: 0 14px;
  font-size: ${({ theme }) => theme.fonts.Button1.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Button1.fontWeight};
  color: ${({ theme }) => theme.colors.gray[900]};
  cursor: pointer;
  &:hover { background: #f4f7fa; }
`;

export const SearchBtn = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.black};
  border: none;
  padding: 0 16px;
  font-size: ${({ theme }) => theme.fonts.Button1.fontSize}px;
  font-weight: ${({ theme }) => theme.fonts.Button1.fontWeight};
  color: ${({ theme }) => theme.colors.white};
  &:hover { background: #1f2937; }
`;

export const SearchBtnIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>') no-repeat center / contain;
`;