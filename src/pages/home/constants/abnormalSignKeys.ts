export const ABNORMAL_SIGN_KEYS = [
  "sleep_disorder",
  "cognitive_decline",
  "lethargy",
  "inactivity",
] as const;

export type AbnormalSignKeyType = (typeof ABNORMAL_SIGN_KEYS)[number];

export const ABNORMAL_SIGN_LABEL_KR: Record<AbnormalSignKeyType, string> = {
  sleep_disorder: "수면장애 의심",
  cognitive_decline: "인지저하 의심",
  lethargy: "무기력증 의심",
  inactivity: "장시간 미활동",
} as const;
