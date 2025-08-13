import type { CareTableListType } from "../types/careTableListType";

export const careTableData: CareTableListType[] = [
  { date: "2025.07.25", tagLabel: "전화돌봄", result: "정상" },
  { date: "2025.03.16", tagLabel: "방문돌봄", result: "정상" },
  { date: "2025.01.09", tagLabel: "긴급출동", result: "정상" },
];

export const signGraphData = [
  { label: "수면 장애 의심", value: 7 },
  { label: "인지 저하 의심", value: 11 },
  { label: "무기력증 의심", value: 15 },
  { label: "장시간 미활동", value: 21 },
];
