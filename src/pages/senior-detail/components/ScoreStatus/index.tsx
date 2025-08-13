import React from "react";
import { useTheme } from "styled-components";
import * as S from "./index.styles.ts";
import type { DefaultTheme } from "styled-components";

const barData = [
  { label: "수면 장애 의심", value: 7 },
  { label: "인지 저하 의심", value: 11 },
  { label: "무기력증 의심", value: 15 },
  { label: "장시간 미활동", value: 21 },
];

const getRedColor = (theme: DefaultTheme, value: number) => {
  if (value <= 5) return theme.colors.red[100];
  if (value <= 10) return theme.colors.red[200];
  if (value <= 15) return theme.colors.red[300];
  if (value <= 20) return theme.colors.red[400];
  return theme.colors.red[500];
};

const ScoreStatus = () => {
  const theme = useTheme();

  return (
    <S.ScoreSection>
      <S.ScoreSectionTitle>이상 징후별 평균 점수</S.ScoreSectionTitle>
      <S.BarChartWrapper>
        <S.YAxis>
          {[25, 20, 15, 10, 5, 0].map((v) => (
            <S.YAxisLabel key={v} style={{ bottom: `${(v / 25) * 100}%` }}>
              {v}
            </S.YAxisLabel>
          ))}
        </S.YAxis>
        <S.BarChartArea>
          {/* 눈금선 */}
          {[25, 20, 15, 10, 5, 0].map((v) => (
            <S.GridLine key={v} style={{ bottom: `${(v / 25) * 100}%` }} />
          ))}
          {/* 바 */}
          {barData.map((bar, idx) => (
            <S.Bar
              key={bar.label}
              height={bar.value}
              color={getRedColor(theme, bar.value)}
            >
              <S.BarLabel>{bar.label}</S.BarLabel>
            </S.Bar>
          ))}
        </S.BarChartArea>
      </S.BarChartWrapper>
    </S.ScoreSection>
  );
};

export default ScoreStatus;
