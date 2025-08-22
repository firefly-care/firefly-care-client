import { YellowButton } from "@components/Button/YellowButton";
import { RedButton } from "@components/Button/RedButton";
import * as S from "./index.styles";
import {
  InfoTable,
  Checklist,
  ActivityLog,
} from "@components/care";
import { Topbar } from "@/components/Topbar";
import { TAB_TO_TITLE } from "../care-post/constants";
import { buildInfoTableData } from "../care-post/utils";
import { useCarePostState } from "../care-post/hooks";
import { useState } from "react";
import { OutlineButton } from "@/components/Button/OutlineButton";
import Print from "@assets/icons/common/print.svg?react"

export const CareView = () => {
  const [isEditing, setIsEditing] = useState(false);
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

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <S.Container>
      <Topbar title="돌봄 정보" />
      <S.ContentContainer>
        <S.ButtonWrapper>
        <OutlineButton colorType="black">
          <Print />인쇄
        </OutlineButton>
      </S.ButtonWrapper>
        <S.Card>
          <InfoTable
            infoTableData={infoTableData}
            tab={state.tab}
            isEditing={isEditing}
          />
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
            isEditing={isEditing}
          />
          <ActivityLog isEditing={isEditing} />
        </S.Card>
        <S.ButtonWrapper>
          <YellowButton onClick={handleEdit}>
            {isEditing ? "저장" : "수정"}
          </YellowButton>
          <RedButton>삭제</RedButton>
        </S.ButtonWrapper>
      </S.ContentContainer>
    </S.Container>
  );
};
