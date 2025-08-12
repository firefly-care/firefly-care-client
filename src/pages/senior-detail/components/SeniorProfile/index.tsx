import * as S from "./index.styles.ts";
import { PieChart, Pie, Cell } from "recharts";
import { useTheme } from "styled-components";

const infoList = [
  { label: "성별", value: "남" },
  { label: "생년월일", value: "1934.08.26" },
  { label: "주소", value: "서울특별시 용산구 유엔빌리지길 136-10", strong: true },
  { label: "집 전화번호", value: "02-1223-5678" },
  { label: "휴대전화 번호", value: "010-9126-7103" },
  { label: "담당자", value: "한승우" },
];

const gaugeValue = 78.5; // 위험 지수
const gaugeMax = 100;

// 게이지용 데이터
const gaugeData = [
  { name: "score", value: gaugeValue },
  { name: "rest", value: gaugeMax - gaugeValue },
];

const SeniorProfile = () => {
  const theme = useTheme();
  // 게이지 색상
  const gaugeColors = [theme.colors.red[400], theme.colors.gray[100]];

  // needle 좌표 계산
  const cx = 140, cy = 150, outerRadius = 140, innerRadius = 90, startAngle = 180, endAngle = 0;

  return (
    <S.ProfileWrapper>
      <S.ProfileTitle>박주형</S.ProfileTitle>
      <S.ProfileCard>
        <S.GaugeSection>
          <S.GaugeLabelBig>위험 지수</S.GaugeLabelBig>
          <S.GaugeSVG>
            <PieChart width={320} height={180}>
              <Pie
                data={gaugeData}
                startAngle={startAngle}
                endAngle={endAngle}
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                dataKey="value"
                isAnimationActive={false}
                stroke="none"
              >
                {gaugeData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={gaugeColors[idx]} />
                ))}
              </Pie>
            </PieChart>
            <S.GaugeScore
              style={{
                position: "absolute",
                left: "50%",
                top: "70%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "100%",
                zIndex: 2,
              }}
            >
              <S.GaugeScoreLabel>총점</S.GaugeScoreLabel>
              <S.GaugeScoreValue>{gaugeValue}</S.GaugeScoreValue>
            </S.GaugeScore>
          </S.GaugeSVG>
          <S.GaugeDanger>
            <span>분류:</span>
            <S.Danger>위험</S.Danger>
          </S.GaugeDanger>
        </S.GaugeSection>
        <S.Divider />
        <S.InfoSection>
          <S.InfoTitle>개인 정보</S.InfoTitle>
          <S.InfoList>
            {infoList.map((item) => (
              <S.InfoItem key={item.label}>
                <S.InfoLabel>{item.label}</S.InfoLabel>
                <S.InfoValue strong={item.strong}>{item.value}</S.InfoValue>
              </S.InfoItem>
            ))}
          </S.InfoList>
        </S.InfoSection>
      </S.ProfileCard>
    </S.ProfileWrapper>
  );
};

export default SeniorProfile;