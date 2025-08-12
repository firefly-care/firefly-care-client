import * as S from "./index.styles";

// 대상자 정보 행(2개 컬럼)
const InfoRowTwo = ({ label1, value1, label2, value2 }: { label1: string; value1: string; label2: string; value2: string }) => (
  <S.TR>
    <S.TD className="label">{label1}</S.TD>
    <S.TD className="value">{value1}</S.TD>
    <S.TD className="label">{label2}</S.TD>
    <S.TD className="value">{value2}</S.TD>
  </S.TR>
);

// 대상자 정보 행(1개 컬럼)
const InfoRowOne = ({ label, value }: { label: string; value: string }) => (
  <S.TR>
    <S.TD className="label">{label}</S.TD>
    <S.TD className="value" colSpan={3}>{value}</S.TD>
  </S.TR>
);

export const SeniorInfoTable = () => (
  <S.TableWrapper>
    <S.InfoTable>
      <tbody>
        <InfoRowTwo label1="이름" value1="박주형" label2="성별" value2="남" />
        <InfoRowTwo label1="돌봄 담당자" value1="한승우" label2="서비스 시작일" value2="2025.07.24" />
        <InfoRowTwo label1="돌봄 담당자 연락처" value1="010-0000-0000" label2="보장유형" value2="기타" />
        <InfoRowTwo label1="주 연락처(휴대전화번호)" value1="010-9126-7103" label2="생년월일" value2="2003.08.26" />
        <InfoRowTwo label1="주소" value1="서울특별시 영등포구 디지털로 394" label2="읍면동" value2="-" />
        <InfoRowTwo label1="보호자" value1="-" label2="보호자 연락처" value2="-" />
        <InfoRowTwo label1="지자체 담당자" value1="-" label2="지자체 담당자 연락처" value2="-" />
        <InfoRowOne label="비고(특이사항)" value="-" />
        <InfoRowTwo label1="LED 센서 사용여부" value1="사용" label2="센서 활성화" value2="-" />
        <InfoRowTwo label1="LED 센서 번호" value1="0001" label2="" value2="" />
      </tbody>
    </S.InfoTable>
  </S.TableWrapper>
);
