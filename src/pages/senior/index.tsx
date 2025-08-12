import { useState } from "react";
import * as S from "./index.styles";
import { tableData } from "./data";
import { SeniorFilter, SeniorTable, SeniorPagination } from "./components";

export const Senior = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <S.Wrapper>
      <S.Title>대상자 관리</S.Title>
      <SeniorFilter />
      <SeniorTable tableData={tableData} />
      <SeniorPagination page={page} setPage={setPage} totalPages={totalPages} />
    </S.Wrapper>
  );
};
