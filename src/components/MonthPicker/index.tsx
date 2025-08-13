import RightArrowIcon from "@assets/icons/common/arrow.svg?react";
import * as S from "./index.styles";

interface MonthPickerProps {
  currentMonth: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export const MonthPicker = ({
  currentMonth,
  onPrev,
  onNext,
}: MonthPickerProps) => {
  return (
    <S.MonthPicker>
      <RightArrowIcon
        onClick={onPrev}
        width={13}
        height={27}
        style={{ transform: "rotate(180deg)" }}
      />
      <S.Month>{currentMonth}</S.Month>
      <RightArrowIcon onClick={onNext} width={13} height={27} />
    </S.MonthPicker>
  );
};
