import * as S from "./index.styles";
import {
  MonthlyStatus,
  PowerUsageChart,
  ScoreStatus,
  SeniorInfoTable,
  SeniorProfile,
} from "./components";
import Person from "@assets/icons/common/person.svg?react";

export const SeniorDetail = () => {

  return (
    <S.Container>
      <S.Content>
        <S.Section>
          <S.SectionTitleArea>
            <Person />
            <S.SectionTitle>대상자 분석</S.SectionTitle>
          </S.SectionTitleArea>
          <S.GrayDivider />
          <S.TopSection>
            <SeniorProfile />
            <MonthlyStatus />
          </S.TopSection>
        </S.Section>
        <S.BottomSection>
          <ScoreStatus />
          <PowerUsageChart />
        </S.BottomSection>
        
        <S.TableTitleRow>
          <S.SectionTitleArea>
            <Person />
            <S.SectionTitle>대상자 정보</S.SectionTitle>
          </S.SectionTitleArea>
          
          <S.ButtonGroup>
            <S.EditBtn>정보 수정</S.EditBtn>
            <S.CancelBtn>서비스 취소</S.CancelBtn>
          </S.ButtonGroup>
        </S.TableTitleRow>
        <S.GrayDivider />
        <SeniorInfoTable />
      </S.Content>
    </S.Container>
  );
};