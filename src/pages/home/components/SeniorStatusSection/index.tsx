import { BoxContainer } from "../BoxContainer";
import * as S from "./index.styles";
import { regionPeopleData } from "../../datas";
import type { RegionPeopleType } from "../../types";

export const SeniorStatusSection = () => {
  return (
    <BoxContainer title="서비스 대상자 현황">
      <S.Container>
        <S.ColContainer>
          <S.RowContainer>
            <S.MapContainer />
            <S.DongInfoList>
              {regionPeopleData.map((item: RegionPeopleType) => (
                <DongInfo
                  key={item.region}
                  dongName={item.region}
                  number={item.count}
                />
              ))}
            </S.DongInfoList>
          </S.RowContainer>
          <S.HouseholeContainer>
            <Househole title="전체 가구수" number={137} />
            <Househole title="LED 가구수" number={121} />
            <Househole title="AMI 가구수" number={16} />
          </S.HouseholeContainer>
        </S.ColContainer>
      </S.Container>
    </BoxContainer>
  );
};

interface HouseholeProps {
  title: string;
  number: number;
}

const Househole = ({ title, number }: HouseholeProps) => {
  return (
    <S.Househole>
      <S.HouseholeTitle>{title}</S.HouseholeTitle>
      <S.HouseholeNumber>
        {number}
        <label>건</label>
      </S.HouseholeNumber>
    </S.Househole>
  );
};

interface DongInfoProps {
  dongName: string;
  number: number;
}

const DongInfo = ({ dongName, number }: DongInfoProps) => {
  return (
    <S.DongInfoBox>
      <S.DongTitle>{dongName}</S.DongTitle>
      <S.Line />
      <S.DongPopulation>
        {number}
        <label>명</label>
      </S.DongPopulation>
    </S.DongInfoBox>
  );
};
