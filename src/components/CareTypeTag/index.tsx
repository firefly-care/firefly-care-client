import * as S from "./index.styles";
import type { CareType } from "@/types/care";
import { getCareTypeColor, getCareTypeIcon } from "@/utils/getCareTypeUtils";
import { CARE_TYPE_LABELS } from "@/constants/care";

interface CareTypeTagProps {
  type: CareType;
  size: "small" | "medium";
}

export const CareTypeTag = ({ type, size = "medium" }: CareTypeTagProps) => {
  const icon = getCareTypeIcon(type, 14, 14);
  const color = getCareTypeColor(type);

  return (
    <S.Container color={color} size={size}>
      {icon}
      <S.Label>{CARE_TYPE_LABELS[type]}</S.Label>
    </S.Container>
  );
};
