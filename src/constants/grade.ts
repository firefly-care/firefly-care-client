import type { GradeType } from "@/types/status";

export const CARE_RESULT_TYPES = [
  "normal",
  "info",
  "warning",
  "danger",
] as const satisfies readonly GradeType[];

export const CARE_RESULT_LABELS: Record<GradeType, string> = {
  normal: "정상",
  info: "관심",
  warning: "주의",
  danger: "위험",
};
