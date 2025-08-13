import * as S from "./index.styles";
import type { CareType } from "@/types/care";
import { getCareTypeColor, getCareTypeIcon } from "@/utils/getCareTypeUtils";

interface CareTypeBoxProps {
  type: CareType;
  count: number;
  isRow?: boolean;
}

export const CareTypeBox = ({
  type,
  count,
  isRow = false,
}: CareTypeBoxProps) => {
  const icon = getCareTypeIcon(type);
  const color = getCareTypeColor(type);

  return (
    <S.Container color={color} isRow={isRow}>
      <S.Circle color={color}>{icon}</S.Circle>
      <S.Content isRow={isRow}>
        <S.Label>{type}</S.Label>
        <S.Number>{count}건</S.Number>
      </S.Content>
    </S.Container>
  );
};
