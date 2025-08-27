import { useState, useMemo } from "react";
import * as S from "./index.styles";
import { PieChart, Pie, Cell, Sector, Label } from "recharts";
import { useTheme, type DefaultTheme } from "styled-components";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import type { GradeType } from "@/types/grade";
import { getSemanticColor } from "@utils/getSemanticColor";
import { GRADE_TYPE_LABELS } from "../../constants";

type SliceDatum = { name: GradeType; value: number };

const data: SliceDatum[] = [
  { name: "normal", value: 39 },
  { name: "info", value: 35 },
  { name: "warning", value: 19 },
  { name: "danger", value: 28 },
];

const makeActiveShape =
  (theme: DefaultTheme) =>
  (props: PieSectorDataItem & { payload: SliceDatum }) => {
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
    const label: GradeType = payload.name;

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
        <S.LabelText
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <>
            <tspan x={cx} dy="-1.0em">
              {GRADE_TYPE_LABELS[label]}
            </tspan>
            <tspan className="big" x={cx} dy="1.0em">
              {`${value ?? 0}명`}
            </tspan>
          </>
        </S.LabelText>
      </>
    );
  };

export const CircleChart = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), []);

  const onChartLeave = () => {
    setActiveIndex(-1);
  };

  const onSliceEnter = (_: unknown, idx: number) => {
    setActiveIndex(idx);
  };

  const activeShape = makeActiveShape(theme);

  return (
    <S.Container>
      <PieChart width={200} height={200} onMouseLeave={onChartLeave}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          activeIndex={activeIndex}
          activeShape={activeShape}
          onMouseEnter={onSliceEnter}
          isAnimationActive={false}
        >
          {data.map((slice, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getSemanticColor(theme, slice.name)}
            />
          ))}
          <Label
            position="center"
            content={() => {
              if (activeIndex !== -1) return null;

              return (
                <S.LabelText
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan x="50%" dy="-1.0em">
                    전체
                  </tspan>
                  <tspan x="50%" className="big" dy="1.0em">
                    {`${total}명`}
                  </tspan>
                </S.LabelText>
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
            <S.LegendText>{GRADE_TYPE_LABELS[entry.name]}</S.LegendText>
          </S.LegendItem>
        ))}
      </S.LegendContainer>
    </S.Container>
  );
};
