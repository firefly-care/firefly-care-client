import { useState } from "react";
import * as S from "./index.styles";
import {
  SeniorSearchFilter,
  SeniorTable,
} from "./components";
import { Topbar } from "@/components/Topbar";
import { Pagination } from "@/components/Pagination";
import { YellowButton } from "@/components/Button/YellowButton";

export const Senior = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <S.Wrapper>
      <Topbar title="대상자 관리" />
      <S.ContentContainer>
        <SeniorSearchFilter />
        <SeniorTable />
        <S.BottomArea>
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
          <S.ButtonContainer>
            <YellowButton>등록하기</YellowButton>
          </S.ButtonContainer>
        </S.BottomArea>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
