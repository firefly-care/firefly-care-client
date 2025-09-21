import type { InfoRow } from "../types";

export function buildInfoTableData(): InfoRow[] {
  return [
    {
      cells: [
        { label: "이름", value: "" },
        { label: "성별", value: "" },
      ],
    },
    {
      cells: [
        { label: "생년월일", value: "" },
        { label: "소속", value: "" },
      ],
    },
    {
      cells: [
        { label: "우편번호", value: "" },
        { label: "상세주소", value: "" },
      ],
    },
    {
      cells: [
        { label: "주 연락처", value: "" },
        { label: "부 연락처", value: "" },
      ],
    },
  ];
}
