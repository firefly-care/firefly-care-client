import React from "react";
import { useTheme } from "styled-components";
import * as S from "./index.styles.ts";
import Bell from "@assets/icons/common/bell.svg?react";
import Home from "@assets/icons/common/home_white.svg?react";
import Emergency from "@assets/icons/common/emergency.svg?react";

const statusCardList = [
  {
    label: "전화돌봄",
    count: "3건",
    CardBG: (theme: any) => theme.colors.green[50],
    IconBG: (theme: any) => theme.colors.green[400],
    Icon: Bell,
  },
  {
    label: "방문돌봄",
    count: "5건",
    CardBG: (theme: any) => theme.colors.orange[50],
    IconBG: (theme: any) => theme.colors.orange[400],
    Icon: Home,
  },
  {
    label: "긴급출동",
    count: "1건",
    CardBG: (theme: any) => theme.colors.red[50],
    IconBG: (theme: any) => theme.colors.red[400],
    Icon: Emergency,
  },
];

const careTableList = [
  {
    date: "2025.07.25",
    tagColor: (theme: any) => theme.colors.green[400],
    Icon: Bell,
    tagLabel: "전화돌봄",
    result: "정상",
  },
  {
    date: "2025.03.16",
    tagColor: (theme: any) => theme.colors.orange[400],
    Icon: Home,
    tagLabel: "방문돌봄",
    result: "정상",
  },
  {
    date: "2025.01.09",
    tagColor: (theme: any) => theme.colors.red[400],
    Icon: Emergency,
    tagLabel: "긴급출동",
    result: "정상",
  },
];

const MonthlyStatus = () => {
  const theme = useTheme();

  return (
    <S.MonthlyStatus>
      <S.MonthlyHeader>
        <span>월간 돌봄 현황</span>
        <div>
          <S.AddBtn>+ 돌봄 등록</S.AddBtn>
          <S.ExcelBtn>
            <S.ExcelIcon />
            월간 돌봄 다운로드
          </S.ExcelBtn>
        </div>
      </S.MonthlyHeader>
      <S.MonthNav>
        <S.Arrow>{"<"}</S.Arrow>
        <S.Month>2025.07</S.Month>
        <S.Arrow>{">"}</S.Arrow>
      </S.MonthNav>
      <S.StatusCards>
        {statusCardList.map(({ label, count, CardBG, IconBG, Icon }) => (
          <S.StatusCardBG key={label} color={CardBG(theme)}>
            <S.StatusIconBG color={IconBG(theme)}>
              <Icon />
            </S.StatusIconBG>
            <S.StatusLabelText>
              <S.StatusLabelMain>{label}</S.StatusLabelMain>
              <S.StatusLabelCount>{count}</S.StatusLabelCount>
            </S.StatusLabelText>
          </S.StatusCardBG>
        ))}
      </S.StatusCards>
      <S.CareTable>
        <thead>
          <tr>
            <S.CareTh width="28%">돌봄일자</S.CareTh>
            <S.CareTh width="50%">돌봄 구분</S.CareTh>
            <S.CareTh width="22%">결과</S.CareTh>
          </tr>
        </thead>
        <tbody>
          {careTableList.map(({ date, tagColor, Icon, tagLabel, result }) => (
            <S.CareTr key={date + tagLabel}>
              <S.CareDate>{date}</S.CareDate>
              <S.CareTd>
                <S.CareTag color={tagColor(theme)}>
                  <Icon width={16} height={16} />
                  {tagLabel}
                </S.CareTag>
              </S.CareTd>
              <S.CareTd>{result}</S.CareTd>
            </S.CareTr>
          ))}
        </tbody>
      </S.CareTable>
    </S.MonthlyStatus>
  );
};

export default MonthlyStatus;