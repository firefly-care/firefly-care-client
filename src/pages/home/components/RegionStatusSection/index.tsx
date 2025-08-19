import * as S from "./index.styles";
import { BoxContainer } from "../BoxContainer";
import { RegionStatusBarChart } from "../RegionStatusBarChart";
import { Filter } from "@components/Filter";
import { useFilter } from "@/hooks/useFilter";
import type { RegionStatusGraphType } from "../../types";
import { regionStatusData } from "../../datas/regionStatus";
import {
  REGION_STATUS_GRAPH_TYPES,
  REGION_STATUS_GRAPH_TYPE_LABELS,
} from "../../constants";

const getRegionStatusChartData = (type: RegionStatusGraphType | "전체") => {
  switch (type) {
    case "status":
      return regionStatusData.statusGrade;
    case "lastActivity":
      return regionStatusData.lastActivity;
    case "abnormalSign":
      return regionStatusData.abnormalSigns;
    default:
      return [];
  }
};

export const RegionStatusSection = () => {
  const { selected, setSelected } = useFilter<RegionStatusGraphType>("status");

  const chartData = getRegionStatusChartData(selected);

  return (
    <BoxContainer title="지역별 대상자 상태 현황">
      <S.Container>
        <S.FilterContainer>
          <Filter<RegionStatusGraphType>
            selected={selected}
            options={REGION_STATUS_GRAPH_TYPES}
            onChange={setSelected}
            getLabel={(value) => REGION_STATUS_GRAPH_TYPE_LABELS[value]}
          />
        </S.FilterContainer>
        <RegionStatusBarChart data={chartData} selectedKeyGroup={selected} />
      </S.Container>
    </BoxContainer>
  );
};
