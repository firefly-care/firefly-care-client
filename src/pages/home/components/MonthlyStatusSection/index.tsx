import * as S from "./index.styles";
import { BoxContainer } from "../BoxContainer";
import { MonthPicker } from "@/components/MonthPicker";
import { useMonth } from "@/hooks/useMonth";
import { CareTypeBox } from "@/components/CareTypeBox";
import { ExcelDownloadButton } from "@/components/ExcelDownloadButton";

export const MonthlyStatusSection = () => {
  const { month, moveToPrevMonth, moveToNextMonth } = useMonth();

  return (
    <BoxContainer title="월간 돌봄 현황">
      <S.Container>
        <S.TitleContainer>
          <MonthPicker
            currentMonth={month}
            onPrev={moveToPrevMonth}
            onNext={moveToNextMonth}
          />
          <ExcelDownloadButton text="월간 돌봄 다운로드" onClick={() => {}} />
        </S.TitleContainer>

        <S.RowContainer>
          <NumberBox label="대상자" number={137} />
          <S.VerticalLine />
          <NumberBox label="돌봄 합계" number={119} />
        </S.RowContainer>
        <S.CareTypeContainer>
          <CareTypeBox type="전화돌봄" count={22} />
          <CareTypeBox type="방문돌봄" count={134} />
          <CareTypeBox type="긴급출동" count={45} />
        </S.CareTypeContainer>
      </S.Container>
    </BoxContainer>
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
