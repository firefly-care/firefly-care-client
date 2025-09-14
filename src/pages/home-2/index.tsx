import * as S from "./index.styles";
import {
  LEDStatusSection,
  MonthlyStatusSection,
  CalendarSection,
  CareList,
  UserStatusTable
} from "./components";

export const Home2 = () => {
  return (
    <S.Container>
      <S.RowContainer>
        <MonthlyStatusSection />
        <LEDStatusSection />
        <UserStatusTable />
      </S.RowContainer>
      
      <CalendarTypeContent />
    </S.Container>
  );
};

const CalendarTypeContent = () => {
  return (
    <S.ResultContainer>
      <CalendarSection />
      <CareList />
    </S.ResultContainer>
  );
};