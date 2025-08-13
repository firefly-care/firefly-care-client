export type RegionStatusType = "위기 등급" | "마지막 활동" | "이상 징후";

export type StatusDataType = {
  name: string;
  normal: number;
  info: number;
  warning: number;
  danger: number;
};

export type LastActivityDataType = {
  name: string;
  within_24h: number;
  "24_to_48h": number;
  "48_to_72h": number;
  over_72h: number;
};

export type AbnormalSignDataType = {
  name: string;
  sleep_disorder: number;
  cognitive_decline: number;
  lethargy: number;
  inactivity: number;
};
