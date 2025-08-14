import * as S from "./index.styles";
import { BoxContainer } from "../BoxContainer";
import { RegionStatusBarChart } from "../RegionStatusBarChart";
import { Filter } from "@components/Filter";
import { useFilter } from "@/hooks/useFilter";
import type { RegionStatusType } from "../../types/regionStatus.type";
import { regionStatusData } from "../../datas/regionStatus";

const getRegionStatusChartData = (type: RegionStatusType) => {
  switch (type) {
    case "위기 등급":
      return regionStatusData.statusGrade;
    case "마지막 활동":
      return regionStatusData.lastActivity;
    case "이상 징후":
      return regionStatusData.abnormalSigns;
    default:
      return [];
  }
};

export const RegionStatusSection = () => {
  const { selected, setSelected } = useFilter<RegionStatusType>("위기 등급");
  const chartData = getRegionStatusChartData(selected);

  return (
    <BoxContainer title="지역별 대상자 상태 현황">
      <S.Container>
        <S.FilterContainer>
          <Filter<RegionStatusType>
            selected={selected}
            options={["위기 등급", "마지막 활동", "이상 징후"]}
            onChange={setSelected}
          />
        </S.FilterContainer>
        <RegionStatusBarChart data={chartData} selectedKeyGroup={selected} />
      </S.Container>
    </BoxContainer>
  );
};
