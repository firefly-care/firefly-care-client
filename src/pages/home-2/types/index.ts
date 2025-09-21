import type { GradeType } from "@/types/grade";
import type { SignType } from "@/types/sign";
import type { CareType } from "@/types/care";
import type { CareResultType } from "@/types/care";

// 이상 징후 Type
export type AbnormalSignType = SignType;

// 마지막 활동 Type
export type LastActivityType =
  | "within_24h"
  | "24_to_48h"
  | "48_to_72h"
  | "over_72h";

// 이상 탐지 현황 데이터 Type
export type PersonStatusType = {
  id: number;
  name: string;
  manager: string;
  level: GradeType;
  lastActive: string;
  abnormalSign: AbnormalSignType | null;
};

// 서비스 대상자 현황 Type
export type RegionPeopleType = {
  region: string;
  count: number;
};

// 지역별 대상자 상태 현황 그래프 선택 Type
export type RegionStatusGraphType = "status" | "lastActivity" | "abnormalSign";

// 지역별 대상자 상태 현황 그래프 - 위기 등급 데이터 Type
export type GradeDataType = {
  name: string;
  normal: number;
  info: number;
  warning: number;
  danger: number;
};

// 지역별 대상자 상태 현황 그래프 - 마지막 활동 데이터 Type
export type LastActivityDataType = {
  name: string;
  within_24h: number;
  "24_to_48h": number;
  "48_to_72h": number;
  over_72h: number;
};

// 지역별 대상자 상태 현황 그래프 - 이상 징후 데이터 Type
export type AbnormalSignDataType = {
  name: string;
  sleep_disorder: number;
  cognitive_decline: number;
  lethargy: number;
  inactivity: number;
};

export type CareItemType = {
  id: string | number;
  name: string;
  manager: string;
  date: string;
  type: CareType;
  status: CareResultType;
  preview: string;
  createdAt: string;
};