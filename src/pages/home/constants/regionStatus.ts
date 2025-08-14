import type { RegionStatusType } from "../types";

export const REGION_STATUS_TYPES = [
  "status",
  "lastActivity",
  "abnormalSign",
] as const satisfies readonly RegionStatusType[];

export const REGION_STATUS_TYPE_LABEL: Record<RegionStatusType, string> = {
  status: "위기 등급",
  lastActivity: "마지막 활동",
  abnormalSign: "이상 징후",
};
