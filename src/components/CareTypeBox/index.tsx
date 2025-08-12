import * as S from "./index.styles";
import SirenIcon from "@assets/icons/common/siren.svg?react";
import VisitIcon from "@assets/icons/common/home-white.svg?react";
import CallIcon from "@assets/icons/common/call.svg?react";
import type { CareType } from "@/types/care";

interface CareTypeBoxProps {
  type: CareType;
  count: number;
}

const ICON_MAP: Record<CareType, React.ReactNode> = {
  전화돌봄: <CallIcon width={24} height={24} />,
  방문돌봄: <VisitIcon width={24} height={24} />,
  긴급출동: <SirenIcon width={24} height={24} />,
};

const COLOR_MAP: Record<CareType, "green" | "orange" | "red"> = {
  전화돌봄: "green",
  방문돌봄: "orange",
  긴급출동: "red",
};

export const CareTypeBox = ({ type, count }: CareTypeBoxProps) => {
  const icon = ICON_MAP[type];
  const color = COLOR_MAP[type];

  return (
    <S.Container color={color}>
      <S.Circle color={color}>{icon}</S.Circle>
      <S.Content>
        <S.Label>{type}</S.Label>
        <S.Number>{count}건</S.Number>
      </S.Content>
    </S.Container>
  );
};
