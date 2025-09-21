import * as S from "./index.styles";
import { useState } from "react";
import { MonthPicker } from "@/components/MonthPicker";
import { useMonth } from "@/hooks/useMonth";
import { ExcelDownloadButton } from "@/components/ExcelDownloadButton";
import { CustomCalendar } from "../CustomCalendar";

export const CalendarSection = () => {
  const { originMonth, month, moveToPrevMonth, moveToNextMonth } = useMonth();
  const [value, setValue] = useState<Date | null>(null);

  return (
    <S.Container>
      <MonthPicker
        currentMonth={month}
        onPrev={moveToPrevMonth}
        onNext={moveToNextMonth}
      />
      <S.ButtonContainer>
        <ExcelDownloadButton text="담당자별 돌봄 다운로드" onClick={() => {}} />
        <ExcelDownloadButton text="월간 돌봄 다운로드" onClick={() => {}} />
      </S.ButtonContainer>
      
      <CustomCalendar value={value} onChange={setValue} month={originMonth} />
    </S.Container>
  );
};
