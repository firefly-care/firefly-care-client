import * as S from "./index.styles";
import { useState } from "react";
import { MonthPicker } from "@/components/MonthPicker";
import { useMonth } from "@/hooks/useMonth";
import { ExcelDownloadButton } from "@/components/ExcelDownloadButton";
import { CareTypeBox } from "@/components/CareTypeBox";
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
      <S.MonthlyStatus>
        <S.ColContainer>
          <NumberBox label="대상자" number={137} />
          <S.HL />
          <NumberBox label="돌봄 합계" number={119} />
        </S.ColContainer>
        <S.CareTypeContainer>
          <CareTypeBox type="call" count={50} />
          <CareTypeBox type="visit" count={42} />
          <CareTypeBox type="emergency" count={27} />
        </S.CareTypeContainer>
      </S.MonthlyStatus>
      <CustomCalendar value={value} onChange={setValue} month={originMonth} />
    </S.Container>
  );
};

interface NumberBoxProps {
  label: string;
  number: number;
}

const NumberBox = ({ label, number }: NumberBoxProps) => {
  return (
    <S.NumberBoxContainer>
      <S.Label>{label}</S.Label>
      <S.Number>
        {number}
        <label>명</label>
      </S.Number>
    </S.NumberBoxContainer>
  );
};
