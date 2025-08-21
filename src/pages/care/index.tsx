import * as S from "./index.styles";
import { useState } from "react";
import { Topbar } from "@/components/Topbar";
import { getPageTypeLabel } from "./utils/getPageTypeUtils";
import {
  PageTypeSelectBox,
  CareSearchFilter,
  CalendarSection,
  CareList,
} from "./components";
import type { PageType } from "./types";

export const Care = () => {
  const [pageState, setPageState] = useState<PageType>("calendar");

  return (
    <S.Container>
      <S.TopbarContainer>
        <Topbar title={`돌봄 현황(${getPageTypeLabel(pageState)})`} />
        <PageTypeSelectBox selected={pageState} onChange={setPageState} />
      </S.TopbarContainer>

      <S.ContentContainer>
        <CareSearchFilter />
        {pageState == "calendar" ? (
          <CalendarTypeContent />
        ) : (
          <ListTypeContent />
        )}
      </S.ContentContainer>
    </S.Container>
  );
};

const CalendarTypeContent = () => {
  return (
    <S.ResultContainer>
      <CalendarSection />
      <CareList />
    </S.ResultContainer>
  );
};

const ListTypeContent = () => {
  return <></>;
};
