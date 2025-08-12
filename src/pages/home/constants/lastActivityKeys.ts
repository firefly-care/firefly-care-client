export const LAST_ACTIVITY_KEYS = [
  "within_24h",
  "24_to_48h",
  "48_to_72h",
  "over_72h",
] as const;

export type LastActivityKeyType = (typeof LAST_ACTIVITY_KEYS)[number];

// 한글 라벨
export const LAST_ACTIVITY_LABEL_KR: Record<LastActivityKeyType, string> = {
  within_24h: "0~24시간 전",
  "24_to_48h": "24~48시간 전",
  "48_to_72h": "48~72시간 전",
  over_72h: "72시간 전~",
} as const;
