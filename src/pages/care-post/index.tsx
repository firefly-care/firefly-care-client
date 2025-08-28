import { YellowButton } from "@components/Button/YellowButton";
import * as S from "./index.styles";
import {
  CarePostHeader,
  InfoTable,
  Checklist,
  ActivityLog,
} from "@components/care";
import { Topbar } from "@/components/Topbar";
import { TAB_TO_TITLE } from "./constants";
import { buildInfoTableData } from "./utils";
import { useCarePostState } from "./hooks";

export const CarePost = () => {
  const state = useCarePostState();

  const infoTableData = buildInfoTableData({
    tab: state.tab,
    targetValue: (
      <>
        박주형 <S.SmallBtn>선택</S.SmallBtn>
      </>
    ),
    tabToTitle: TAB_TO_TITLE,
  });

  return (
    <S.Container>
      <Topbar title="돌봄 등록" />
      <S.ContentContainer>
        <CarePostHeader
          tab={state.tab}
          setTab={state.setTab}
          onReset={state.reset}
        />
        <S.Card>
          <InfoTable infoTableData={infoTableData} tab={state.tab} isEditing />
          <Checklist
            tab={state.tab}
            resultType={state.resultType}
            setResultType={state.setResultType}
            present={state.present}
            setPresent={state.setPresent}
            absent={state.absent}
            setAbsent={state.setAbsent}
            call={state.call}
            setCall={state.setCall}
            isEditing
          />
          <ActivityLog isEditing />
        </S.Card>
        <S.ButtonWrapper>
          <YellowButton>등록</YellowButton>
        </S.ButtonWrapper>
      </S.ContentContainer>
    </S.Container>
  );
};
