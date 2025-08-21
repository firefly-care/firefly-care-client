import type { AbnormalSignType } from "../types";

export const ABNORMAL_SIGN_TYPES = [
  "sleep_disorder",
  "cognitive_decline",
  "lethargy",
  "inactivity",
] as const satisfies readonly AbnormalSignType[];

export const ABNORMAL_SIGN_TYPE_LABELS: Record<AbnormalSignType, string> = {
  sleep_disorder: "수면장애 의심",
  cognitive_decline: "인지저하 의심",
  lethargy: "무기력증 의심",
  inactivity: "장시간 미활동",
};
