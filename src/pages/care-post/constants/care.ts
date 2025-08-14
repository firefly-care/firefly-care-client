import type { Tab } from "../types";

export const TAB_TO_TITLE: Record<Tab, string> = {
  visit: "방문돌봄",
  call: "전화돌봄",
  emergency: "긴급출동",
} as const;

export const TERNARY_OPTIONS = ["정상", "주의", "위급"] as const;
export const BINARY_OPTIONS = ["예", "아니오"] as const;

export const CALL_CHECKLIST = [
  { label: "건강 상태", key: "health" as const },
  { label: "식사 기능", key: "meal" as const },
  { label: "인지 기능", key: "cognition" as const },
  { label: "의사소통", key: "comm" as const },
];

export const PRESENT_ABSENT_CHECKLIST = [
  {
    present: { label: "건강 상태", key: "health" as const },
    absent: { label: "3회 이상 통화를 시도하였는가?", key: "tried3Calls" as const },
  },
  {
    present: { label: "식사 기능", key: "meal" as const },
    absent: { label: "이웃, 관리실에 확인하였는가?", key: "checkedNeighbors" as const },
  },
  {
    present: { label: "인지 기능", key: "cognition" as const },
    absent: { label: "우편물이 쌓여있는가?", key: "mailsPiled" as const },
  },
  {
    present: { label: "의사소통", key: "comm" as const },
    absent: { label: "행복복지센터에 안내하였는가?", key: "guidedToCenter" as const },
  },
] as const;
