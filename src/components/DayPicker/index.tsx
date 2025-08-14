import RightArrowIcon from "@assets/icons/common/arrow.svg?react";
import * as S from "./index.styles";

interface DayPickerProps {
  currentDay: string;
  onPrev?: () => void;
  onNext?: () => void;
  onClickLabel?: () => void;
  disabledPrev?: boolean;
  disabledNext?: boolean;
}

export const DayPicker = ({
  currentDay,
  onPrev,
  onNext,
  onClickLabel,
  disabledPrev,
  disabledNext,
}: DayPickerProps) => {
  return (
    <S.DayPicker>
      <RightArrowIcon
        onClick={disabledPrev ? undefined : onPrev}
        width={13}
        height={27}
        style={{
          transform: "rotate(180deg)",
          opacity: disabledPrev ? 0.4 : 1,
          cursor: disabledPrev ? "default" : "pointer",
        }}
      />
      <S.Day role="button" onClick={onClickLabel} title="오늘로 이동">
        {currentDay}
      </S.Day>
      <RightArrowIcon
        onClick={disabledNext ? undefined : onNext}
        width={13}
        height={27}
        style={{
          opacity: disabledNext ? 0.4 : 1,
          cursor: disabledNext ? "default" : "pointer",
        }}
      />
    </S.DayPicker>
  );
};
