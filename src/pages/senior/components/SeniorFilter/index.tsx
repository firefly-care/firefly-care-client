import * as S from "./index.styles";

export const SeniorFilter = () => {
  return (
    <S.FilterGrid>
      {/* 1행: 서비스 진행 여부 */}
      <S.FilterLabel>서비스 진행 여부</S.FilterLabel>
      <S.InlineRow>
        <S.Select>
          <option>전체</option>
        </S.Select>
      </S.InlineRow>
      {/* 오른쪽 버튼 영역(1행은 비움) */}
      <S.BtnSpace />

      {/* 2행: 검색 */}
      <S.FilterLabel>검색</S.FilterLabel>
      <S.InlineRow>
        <S.Select>
          <option>전체</option>
        </S.Select>

        <S.SearchInputWrap>
          <S.SearchInput placeholder="검색어를 입력하세요" />
          <S.SearchFieldIcon aria-hidden />
        </S.SearchInputWrap>
      </S.InlineRow>

      {/* 버튼들 (2행 오른쪽) */}
      <S.BtnRow>
        <S.Button>초기화</S.Button>
        <S.SearchBtn>
          <S.SearchBtnIcon aria-hidden />
          검색
        </S.SearchBtn>
      </S.BtnRow>
    </S.FilterGrid>
  );
};
