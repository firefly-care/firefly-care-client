import * as S from "./index.styles";
import { BoxContainer } from "../BoxContainer";
import { CircleChart, UserStatusTable } from "../index";
import { LAST_ACTIVITY_LABEL_KR, LAST_ACTIVITY_KEYS } from "../../constants";
import type { LastActivityKeyType } from "../../constants";
import { Filter } from "@/components/Filter";
import { useFilter } from "@/hooks/useFilter";

export const LEDStatusSection = () => {
  const { selected, setSelected } = useFilter<LastActivityKeyType | "전체">(
    "전체"
  );

  const filterLabels = [
    "전체",
    ...LAST_ACTIVITY_KEYS.map((key) => LAST_ACTIVITY_LABEL_KR[key]),
  ] as (LastActivityKeyType | "전체")[];

  return (
    <BoxContainer title="LED 이상 탐지 현황">
      <S.Container>
        <CircleChart />
        <S.FilterContainer>
          <Filter<LastActivityKeyType | "전체">
            selected={selected}
            options={filterLabels}
            onChange={setSelected}
          />
          <UserStatusTable />
        </S.FilterContainer>
      </S.Container>
    </BoxContainer>
  );
};
