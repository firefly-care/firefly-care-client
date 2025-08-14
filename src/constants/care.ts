import type { CareType } from "@/types/care";

export const CARE_TYPE_LABELS: Record<CareType, string> = {
  call: "전화돌봄",
  visit: "방문돌봄",
  emergency: "긴급출동",
};

export const CARE_TYPES: CareType[] = ["call", "visit", "emergency"];
