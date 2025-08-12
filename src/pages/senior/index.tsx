import { useState } from "react";
import * as S from "./index.styles";
import { tableData } from "./data";
import { SeniorFilter, SeniorTable, SeniorPagination } from "./components";
import { Topbar } from "@/components/Topbar";

export const Senior = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <S.Wrapper>
      <Topbar title="대상자 관리" />
      <S.ContentContainer>
        <SeniorFilter />
        <SeniorTable tableData={tableData} />
        <SeniorPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </S.ContentContainer>
    </S.Wrapper>
  );
};
