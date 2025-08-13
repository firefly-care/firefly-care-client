import * as S from "./index.styles.ts";
import { ExcelDownloadButton } from "@/components/ExcelDownloadButton/index.tsx";
import { MonthPicker } from "@/components/MonthPicker";
import { useMonth } from "@/hooks/useMonth.ts";
import { CareTypeBox } from "@/components/CareTypeBox";
import { CareTypeTag } from "@/components/CareTypeTag";
import { careTableData } from "../../datas/datas.ts";

const MonthlyStatus = () => {
  const { month, moveToPrevMonth, moveToNextMonth } = useMonth();
  return (
    <S.MonthlyStatus>
      <S.MonthlyHeader>
        <span>월간 돌봄 현황</span>
        <div>
          <S.AddBtn>+ 돌봄 등록</S.AddBtn>
          <ExcelDownloadButton text="월간 돌봄 다운로드" onClick={() => {}} />
        </div>
      </S.MonthlyHeader>
      <S.MonthNav>
        <MonthPicker
          currentMonth={month}
          onPrev={moveToPrevMonth}
          onNext={moveToNextMonth}
        />
      </S.MonthNav>
      <S.StatusCards>
        <CareTypeBox type="전화돌봄" count={3} isRow={true} />
        <CareTypeBox type="방문돌봄" count={3} isRow={true} />
        <CareTypeBox type="긴급출동" count={3} isRow={true} />
      </S.StatusCards>
      <S.CareTable>
        <thead>
          <tr>
            <S.CareTh width="28%">돌봄일자</S.CareTh>
            <S.CareTh width="50%">돌봄 구분</S.CareTh>
            <S.CareTh width="22%">결과</S.CareTh>
          </tr>
        </thead>
        <tbody>
          {careTableData.map(({ date, tagLabel, result }) => (
            <S.CareTr key={date + tagLabel}>
              <S.CareDate width="28%">{date}</S.CareDate>
              <S.CareTd width="50%">
                <CareTypeTag size="small" type={tagLabel} />
              </S.CareTd>
              <S.CareResult width="22%">{result}</S.CareResult>
            </S.CareTr>
          ))}
        </tbody>
      </S.CareTable>
    </S.MonthlyStatus>
  );
};

export default MonthlyStatus;
