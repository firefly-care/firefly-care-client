import * as S from "./index.styles";
import {
  SeniorStatusSection,
  LEDStatusSection,
  RegionStatusSection,
  MonthlyStatusSection,
} from "./components";

export const Home = () => {
  return (
    <S.Container>
      <SeniorStatusSection />
      <LEDStatusSection />
      <S.ColContainer>
        <MonthlyStatusSection />
        <RegionStatusSection />
      </S.ColContainer>
    </S.Container>
  );
};
