import { useState } from "react";
import { useSeniorList } from "./hooks/useSeniorList";
import { useSeniorStore } from "@/stores/senior";
import * as S from "./index.styles";
import {
  SeniorSearchFilter,
  SeniorTable,
  SeniorPagination,
} from "./components";
import { Topbar } from "@/components/Topbar";

export const Senior = () => {
  const seniorList = useSeniorStore((state) => state.seniorList);
  const [page, setPage] = useState(1);
  const totalPages = 5;
  useSeniorList();
  return (
    <S.Wrapper>
      <Topbar title="대상자 관리" />
      <S.ContentContainer>
        <SeniorSearchFilter />
        <SeniorTable data={seniorList} />
        <SeniorPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </S.ContentContainer>
    </S.Wrapper>
  );
};
