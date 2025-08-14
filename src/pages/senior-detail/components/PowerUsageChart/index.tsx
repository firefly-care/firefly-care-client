import { useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useTheme } from "styled-components";
import * as S from "./index.styles";
import { DayPicker } from "@/components/DayPicker";
import { useDay } from "@/hooks/useDay";

const powerData = [
  { hour: 0, value: 18, min: 10, max: 30, anomaly: false },
  { hour: 2, value: 22, min: 12, max: 35, anomaly: false },
  { hour: 4, value: 28, min: 15, max: 40, anomaly: false },
  { hour: 6, value: 25, min: 13, max: 38, anomaly: false },
  { hour: 8, value: 35, min: 20, max: 50, anomaly: false },
  { hour: 10, value: 55, min: 35, max: 70, anomaly: true },
  { hour: 12, value: 70, min: 50, max: 90, anomaly: false },
  { hour: 14, value: 65, min: 45, max: 85, anomaly: true },
  { hour: 16, value: 80, min: 60, max: 100, anomaly: false },
  { hour: 18, value: 75, min: 55, max: 95, anomaly: false },
  { hour: 20, value: 68, min: 50, max: 90, anomaly: true },
  { hour: 22, value: 60, min: 40, max: 80, anomaly: false },
  { hour: 24, value: 55, min: 35, max: 75, anomaly: false },
];

const PowerUsageChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const theme = useTheme();
  const { day, moveToPrevDay, moveToNextDay } = useDay();

  const mainGreen = theme.colors.green?.[500];
  const rangeGreen = theme.colors.green?.[200];

  function CustomDot(props: any) {
    const { cx, cy, payload, index } = props;
    if (payload.anomaly) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={7}
          fill="#EB5757"
          stroke="#fff"
          strokeWidth={2}
          style={{ cursor: "pointer" }}
          onMouseOver={() => setHoveredIndex(index)}
          onMouseOut={() => setHoveredIndex(null)}
        />
      );
    }
    return <circle cx={cx} cy={cy} r={3} fill="theme.colors.gray?.[900]" />;
  }

  function CustomLabel(props: any) {
    const { x, y, index } = props;
    const show = hoveredIndex === index;
    if (powerData[index]?.anomaly) {
      return (
        <foreignObject
          x={x - 60}
          y={y - 70}
          width={120}
          height={50}
          style={{
            pointerEvents: "none",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0px)" : "translateY(10px)",
            transition: "opacity 0.25s, transform 0.25s",
          }}
        >
          <S.HoverLabelBox>
            <div className="label-title">이상 징후 감지</div>
            <div className="label-main">무기력증 의심</div>
          </S.HoverLabelBox>
        </foreignObject>
      );
    }
    return null;
  }

  return (
    <S.ChartSection>
      <S.ChartTitleRow>
        <S.ChartTitle>일일 전력 사용량 그래프</S.ChartTitle>
        <S.ChartHeader>
          <DayPicker
            currentDay={day}
            onPrev={moveToPrevDay}
            onNext={moveToNextDay}
          />
        </S.ChartHeader>
      </S.ChartTitleRow>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart
          data={powerData}
          margin={{ left: 0, right: 10, top: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="rangeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={rangeGreen} stopOpacity={0.15} />
              <stop offset="100%" stopColor={rangeGreen} stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="hour"
            domain={[0, 24]}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
            tick={{ fontSize: 12 }}
          />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Area
            type="monotone"
            dataKey="max"
            stroke="none"
            fill="url(#rangeGradient)"
            fillOpacity={1}
            activeDot={false}
            isAnimationActive={false}
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="min"
            stroke="none"
            fill="#fff"
            fillOpacity={1}
            activeDot={false}
            isAnimationActive={false}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={mainGreen}
            strokeWidth={3}
            dot={<CustomDot />}
            isAnimationActive={false}
            label={<CustomLabel />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </S.ChartSection>
  );
};

export default PowerUsageChart;
