import { useState } from "react";
import * as S from "./index.styles";
import {
  SeniorSearchFilter,
  SeniorTable,
  SeniorPagination,
} from "./components";
import { Topbar } from "@/components/Topbar";

export const Senior = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <S.Wrapper>
      <Topbar title="대상자 관리" />
      <S.ContentContainer>
        <SeniorSearchFilter />
        <SeniorTable />
        <SeniorPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </S.ContentContainer>
    </S.Wrapper>
  );
};
