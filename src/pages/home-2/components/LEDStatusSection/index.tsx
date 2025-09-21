import * as S from "./index.styles";
import { BoxContainer } from "../BoxContainer";
import { CircleChart } from "../index";

export const LEDStatusSection = () => {
  return (
    <BoxContainer title="LED 이상 탐지 현황">
      <S.Container>
        <CircleChart />
      </S.Container>
    </BoxContainer>
  );
};
