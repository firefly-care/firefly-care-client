import { WhiteButton } from "@components/Button/WhiteButton";
import TrashIcon from "@assets/icons/common/trash.svg?react";
import type { CareType } from "@/types/care";
import * as S from "./index.styles";

interface CarePostHeaderProps {
  tab: CareType;
  setTab: (tab: CareType) => void;
  onReset: () => void;
}

export const CarePostHeader = ({
  tab,
  setTab,
  onReset,
}: CarePostHeaderProps) => {
  return (
    <S.TopBar>
      <S.Tabs>
        <S.Tab active={tab === "visit"} onClick={() => setTab("visit")}>
          방문돌봄
        </S.Tab>
        <S.Tab active={tab === "call"} onClick={() => setTab("call")}>
          전화돌봄
        </S.Tab>
        <S.Tab active={tab === "emergency"} onClick={() => setTab("emergency")}>
          긴급출동
        </S.Tab>
      </S.Tabs>
      <WhiteButton icon={<TrashIcon />} onClick={onReset}>
        전체 지우기
      </WhiteButton>
    </S.TopBar>
  );
};
