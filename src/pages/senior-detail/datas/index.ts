import type { CareTableListType } from "../types";

export const careTableData: CareTableListType[] = [
  { date: "2025.07.25", tagLabel: "call", result: "normal" },
  { date: "2025.03.16", tagLabel: "visit", result: "normal" },
  { date: "2025.01.09", tagLabel: "emergency", result: "normal" },
];

export const signGraphData = [
  { label: "수면 장애 의심", value: 7 },
  { label: "인지 저하 의심", value: 11 },
  { label: "무기력증 의심", value: 15 },
  { label: "장시간 미활동", value: 21 },
];
