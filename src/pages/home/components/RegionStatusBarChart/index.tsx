import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import type { TooltipProps } from "recharts";
import * as S from "./index.styles";
import type { Props as DefaultLegendProps } from "recharts/types/component/DefaultLegendContent";
import { useTheme } from "styled-components";
import useMeasure from "react-use-measure";
import { LABEL_MAPS } from "../../constants";
import type { RegionStatusType } from "../../types";
import type {
  LastActivityDataType,
  AbnormalSignDataType,
  StatusDataType,
} from "../../types/regionStatus.type";
import { getSelectedKeys } from "../../utils";

type RegionStatusBarChartProps = {
  data: LastActivityDataType[] | AbnormalSignDataType[] | StatusDataType[];
  selectedKeyGroup: RegionStatusType;
};

export const RegionStatusBarChart = ({
  data,
  selectedKeyGroup,
}: RegionStatusBarChartProps) => {
  const theme = useTheme();
  const [ref, bounds] = useMeasure();

  const STATUS_COLORS: Record<string, string> = {
    // 위기 등급
    normal: theme.colors.semantic.normal,
    info: theme.colors.semantic.info,
    warning: theme.colors.semantic.warning,
    danger: theme.colors.semantic.danger,

    // 마지막 활동
    within_24h: theme.colors.semantic.normal,
    "24_to_48h": theme.colors.semantic.info,
    "48_to_72h": theme.colors.semantic.warning,
    over_72h: theme.colors.semantic.danger,

    // 이상 징후
    sleep_disorder: theme.colors.semantic.normal,
    cognitive_decline: theme.colors.semantic.info,
    lethargy: theme.colors.semantic.warning,
    inactivity: theme.colors.semantic.danger,
  };

  const barWidth = 70;
  const dataLength = data.length;
  const totalWidth = dataLength * barWidth;
  const scrollThreshold = 5;

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        whiteSpace: "nowrap",
        overflowX: dataLength > scrollThreshold ? "auto" : "hidden",
      }}
    >
      <div
        style={{
          width: dataLength > scrollThreshold ? totalWidth : "100%",
          minWidth: "100%",
        }}
      >
        <BarChart
          height={bounds.height}
          width={
            dataLength > scrollThreshold
              ? totalWidth
              : barWidth * scrollThreshold
          }
          barSize={barWidth / 2}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          stackOffset="sign"
        >
          <XAxis
            dataKey="name"
            tick={{
              fill: theme.colors.gray[900],
              fontSize: 12,
              fontWeight: 600,
            }}
          />
          <YAxis />
          <Tooltip content={readerCustomTooltip} />
          <Legend
            verticalAlign="bottom"
            align="center"
            content={renderCustomLegend}
          />
          {getSelectedKeys(selectedKeyGroup).map((key) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              name={LABEL_MAPS[key as keyof typeof LABEL_MAPS]}
              fill={STATUS_COLORS[key]}
            />
          ))}
        </BarChart>
      </div>
    </div>
  );
};

const renderCustomLegend = ({
  payload,
}: DefaultLegendProps): React.ReactNode => {
  if (!payload) return null;

  return (
    <S.UL>
      {payload.map((entry, index) => (
        <S.LI key={`item-${index}`}>
          <S.ColorChip color={entry.color!} />
          <span>{entry.value}</span>
        </S.LI>
      ))}
    </S.UL>
  );
};

const readerCustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload || payload.length === 0) return null;

  const typedPayload = payload as {
    color: string;
    name: string;
    value: number;
    payload?: { name?: string };
  }[];

  if (active && payload && payload.length) {
    return (
      <S.TooltipContainer>
        <S.Label>{label}</S.Label>
        <S.Col>
          {typedPayload.map((entry, index) => (
            <S.Row key={`item-${index}`}>
              <S.ColorDot color={entry.color} />
              {LABEL_MAPS[entry.name as keyof typeof LABEL_MAPS] ||
                entry.name}: {entry.value}명
            </S.Row>
          ))}
        </S.Col>
      </S.TooltipContainer>
    );
  }

  return null;
};
