import type { RegionStatusGraphType } from "../types";

export const REGION_STATUS_GRAPH_TYPES = [
  "status",
  "lastActivity",
  "abnormalSign",
] as const satisfies readonly RegionStatusGraphType[];

export const REGION_STATUS_GRAPH_TYPE_LABELS: Record<
  RegionStatusGraphType,
  string
> = {
  status: "위기 등급",
  lastActivity: "마지막 활동",
  abnormalSign: "이상 징후",
};
