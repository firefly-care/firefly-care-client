import * as S from "./index.styles";
import { BoxContainer } from "../BoxContainer";
import { CircleChart, UserStatusTable } from "../index";
import {
  LAST_ACTIVITY_TYPES,
  LAST_ACTIVITY_TYPE_LABELS,
} from "../../constants";
import type { LastActivityType } from "../../types";
import { Filter } from "@/components/Filter";
import { useFilter } from "@/hooks/useFilter";

export const LEDStatusSection = () => {
  const { selected, setSelected } = useFilter<LastActivityType | "전체">(
    "전체"
  );

  return (
    <BoxContainer title="LED 이상 탐지 현황">
      <S.Container>
        <CircleChart />
        <S.FilterContainer>
          <Filter<LastActivityType | "전체">
            selected={selected}
            options={["전체", ...LAST_ACTIVITY_TYPES]}
            onChange={setSelected}
            getLabel={(value) =>
              value === "전체" ? "전체" : LAST_ACTIVITY_TYPE_LABELS[value]
            }
          />
          <UserStatusTable />
        </S.FilterContainer>
      </S.Container>
    </BoxContainer>
  );
};
