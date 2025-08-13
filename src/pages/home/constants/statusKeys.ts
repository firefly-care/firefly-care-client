export const STATUS_KEYS = ["normal", "info", "warning", "danger"] as const;
export type StatusKeyType = (typeof STATUS_KEYS)[number];

export const STATUS_LABEL_KR: Record<StatusKeyType, string> = {
  normal: "정상",
  info: "관심",
  warning: "주의",
  danger: "위험",
} as const;
