import type { SignType } from "@/types/sign";

export const SIGN_TYPES = [
  "sleep_disorder",
  "cognitive_decline",
  "lethargy",
  "inactivity",
] as const satisfies readonly SignType[];

export const SIGN_TYPE_LABELS: Record<SignType, string> = {
  sleep_disorder: "수면장애 의심",
  cognitive_decline: "인지저하 의심",
  lethargy: "무기력증 의심",
  inactivity: "장시간 미활동",
};

export const KOR_TO_SIGN: Record<string, SignType> = {
  "수면장애 의심": "sleep_disorder",
  "인지저하 의심": "cognitive_decline",
  "무기력증 의심": "lethargy",
  "장시간 미활동": "inactivity",
};
