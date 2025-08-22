import type { CareType } from "@/types/care";
import type { CareResultType } from "@/types/care";

export const CARE_TYPE_LABELS: Record<CareType, string> = {
  call: "전화돌봄",
  visit: "방문돌봄",
  emergency: "긴급출동",
};

export const CARE_TYPES: CareType[] = ["call", "visit", "emergency"];

export const CARE_RESULT_TYPES = [
  "confirmed",
  "absent",
] as const satisfies readonly CareResultType[];

export const CARE_RESULT_TYPE_LABELS: Record<CareResultType, string> = {
  confirmed: "대상자확인",
  absent: "대상자부재",
};
