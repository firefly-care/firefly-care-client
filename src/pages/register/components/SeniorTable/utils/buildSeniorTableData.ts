import type { InfoRow } from "@pages/register/types";

export function buildSeniorTableData(): InfoRow[] {
  return [
    { cells: [{ label: "이름", value: "" }, { label: "성별", value: "" }] },
    { cells: [{ label: "생년월일", value: "" }, { label: "보장유형", value: "" }] },
    { cells: [{ label: "돌봄 담당자", value: "" }, { label: "돌봄 담당자 전화번호", value: "" }] },
    { cells: [{ label: "서비스 시작일", value: "" }] },
    { cells: [{ label: "보호자 이름", value: "" }, { label: "보호자 연락처", value: "" }] },
    { cells: [{ label: "우편번호", value: "" }, { label: "상세 주소", value: "" }] },
    { cells: [{ label: "주 연락처", value: "" }, { label: "부 연락처", value: "" }] },
    { cells: [{ label: "LED 번호", value: "" }, { label: "센서 활성화", value: "" }] },
  ];
}
