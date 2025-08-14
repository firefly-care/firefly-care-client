import type { StatusType } from "@/types/status";

export const STATUS_TYPES = [
  "normal",
  "info",
  "warning",
  "danger",
] as const satisfies readonly StatusType[];

export const STATUS_TYPE_LABELS: Record<StatusType, string> = {
  normal: "정상",
  info: "관심",
  warning: "주의",
  danger: "위험",
};
