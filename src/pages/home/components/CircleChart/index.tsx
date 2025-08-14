import { useState, useMemo } from "react";
import * as S from "./index.styles";
import { PieChart, Pie, Cell, Sector, Label } from "recharts";
import { useTheme, type DefaultTheme } from "styled-components";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import type { GradeType } from "@/types/grade";
import { getSemanticColor } from "@utils/getSemanticColor";

type SliceDatum = { name: GradeType; value: number };

const data: SliceDatum[] = [
  { name: "정상", value: 39 },
  { name: "관심", value: 35 },
  { name: "주의", value: 19 },
  { name: "위험", value: 28 },
];

const makeActiveShape = (theme: DefaultTheme) => (props: PieSectorDataItem) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  const safeOuterRadius = outerRadius ?? 0;
  const label = (payload as Partial<SliceDatum>)?.name ?? "";

  return (
    <>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={safeOuterRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <S.LabelText x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
        <tspan x={cx} dy="-1.0em">
          {label}
        </tspan>
        <tspan className="big" x={cx} dy="1.0em">{`${value ?? 0}명`}</tspan>
      </S.LabelText>
    </>
  );
};

export const CircleChart = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), []);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };
  const onPieLeave = () => setActiveIndex(-1);

  const activeShape = makeActiveShape(theme);

  return (
    <S.Container>
      <PieChart width={200} height={200} onMouseLeave={onPieLeave}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          activeIndex={activeIndex}
          activeShape={activeShape}
          onMouseEnter={onPieEnter}
        >
          {data.map((slice, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getSemanticColor(theme, slice.name)}
            />
          ))}

          <Label
            position="center"
            content={(props) => {
              const vb = props.viewBox as
                | { cx?: number; cy?: number }
                | undefined;
              if (!vb?.cx || !vb?.cy) return null;
              if (activeIndex !== -1) return null;

              return (
                <S.CenterText
                  x={vb.cx}
                  y={vb.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {total}명
                </S.CenterText>
              );
            }}
          />
        </Pie>
      </PieChart>
      <S.LegendContainer>
        {data.map((entry, index) => (
          <S.LegendItem key={`legend-${index}`}>
            <S.ColorBox
              style={{ backgroundColor: getSemanticColor(theme, entry.name) }}
            />
            <S.LegendText>{entry.name}</S.LegendText>
          </S.LegendItem>
        ))}
      </S.LegendContainer>
    </S.Container>
  );
};
