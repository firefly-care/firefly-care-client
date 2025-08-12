import React from "react";
import * as S from "./index.styles";

interface SeniorPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const SeniorPagination = ({ page, setPage, totalPages }: SeniorPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <S.BottomArea>
      <S.PaginationBar>
        <S.PagerArrow
          aria-label="이전 페이지"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          ‹
        </S.PagerArrow>

        {pages.map((n) => (
          <S.PagerItem
            key={n}
            active={n === page}
            aria-current={n === page ? "page" : undefined}
            onClick={() => setPage(n)}
          >
            {n}
          </S.PagerItem>
        ))}

        <S.PagerArrow
          aria-label="다음 페이지"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          ›
        </S.PagerArrow>
      </S.PaginationBar>

      <S.RegisterBtn>등록하기</S.RegisterBtn>
    </S.BottomArea>
  );
};
