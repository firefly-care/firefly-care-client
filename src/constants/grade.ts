import type { GradeType } from "@/types/grade";

export const GRADE_TYPES = [
  "normal",
  "info",
  "warning",
  "danger",
] as const satisfies readonly GradeType[];

export const GRADE_TYPE_LABELS: Record<GradeType, string> = {
  normal: "정상",
  info: "관심",
  warning: "주의",
  danger: "위험",
};
